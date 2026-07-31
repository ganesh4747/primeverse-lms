-- ============================================================================
-- SUPABASE MIGRATION: Automatic Daily Progression & Email Trigger System
-- Run this script in your Supabase SQL Editor (https://supabase.com/dashboard)
-- ============================================================================

-- 1. Enable required PostgreSQL extensions
CREATE EXTENSION IF NOT EXISTS pg_net;
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- 2. Ensure last_email_sent_day column exists on public.profiles
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name='profiles' AND column_name='last_email_sent_day'
  ) THEN
    ALTER TABLE public.profiles ADD COLUMN last_email_sent_day INTEGER DEFAULT 1;
  END IF;
END $$;

COMMENT ON COLUMN public.profiles.last_email_sent_day IS 'The day number of the last daily progression email sent to this user.';

-- 3. Webhook HTTP POST Function for Progression Email Trigger
CREATE OR REPLACE FUNCTION public.handle_profiles_update_trigger()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM net.http_post(
    url := 'https://www.primeverseportal.pro/api/send-progression',
    body := json_build_object(
      'type', 'UPDATE',
      'table', 'profiles',
      'record', row_to_json(NEW),
      'old_record', row_to_json(OLD)
    )::jsonb
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 4. Re-create Progression Trigger safely
DROP TRIGGER IF EXISTS "send-progression-email" ON public.profiles;

CREATE TRIGGER "send-progression-email"
AFTER UPDATE OF current_day ON public.profiles
FOR EACH ROW
WHEN (OLD.current_day IS DISTINCT FROM NEW.current_day AND NEW.current_day > 1)
EXECUTE FUNCTION public.handle_profiles_update_trigger();

-- 5. Stored Procedure to Auto-Unlock Daily Modules for All Active Users
-- Calculates target day strictly based on enroll_date vs CURRENT_DATE (in IST timezone: +05:30)
CREATE OR REPLACE FUNCTION public.auto_unlock_daily_profiles()
RETURNS INTEGER AS $$
DECLARE
  updated_count INTEGER := 0;
BEGIN
  UPDATE public.profiles
  SET 
    current_day = LEAST(COALESCE(total_modules, 18), GREATEST(1, (CURRENT_DATE - (enroll_date AT TIME ZONE 'Asia/Kolkata')::date) + 1)),
    modules_completed = LEAST(COALESCE(total_modules, 18) - 1, GREATEST(0, (CURRENT_DATE - (enroll_date AT TIME ZONE 'Asia/Kolkata')::date))),
    program_progress = LEAST(100, ROUND((GREATEST(0, (CURRENT_DATE - (enroll_date AT TIME ZONE 'Asia/Kolkata')::date))::numeric / COALESCE(NULLIF(total_modules, 0), 18)::numeric) * 100))
  WHERE 
    (status IS NULL OR status = 'active')
    AND (payment_status IN ('paid', 'free_access'))
    AND current_day < LEAST(COALESCE(total_modules, 18), GREATEST(1, (CURRENT_DATE - (enroll_date AT TIME ZONE 'Asia/Kolkata')::date) + 1));

  GET DIAGNOSTICS updated_count = ROW_COUNT;
  RETURN updated_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 6. Helper Function to Sync Progression for a Single User by Email
CREATE OR REPLACE FUNCTION public.sync_user_day_progression(target_email TEXT)
RETURNS INTEGER AS $$
DECLARE
  new_day INTEGER;
BEGIN
  UPDATE public.profiles
  SET 
    current_day = LEAST(COALESCE(total_modules, 18), GREATEST(1, (CURRENT_DATE - (enroll_date AT TIME ZONE 'Asia/Kolkata')::date) + 1)),
    modules_completed = LEAST(COALESCE(total_modules, 18) - 1, GREATEST(0, (CURRENT_DATE - (enroll_date AT TIME ZONE 'Asia/Kolkata')::date))),
    program_progress = LEAST(100, ROUND((GREATEST(0, (CURRENT_DATE - (enroll_date AT TIME ZONE 'Asia/Kolkata')::date))::numeric / COALESCE(NULLIF(total_modules, 0), 18)::numeric) * 100))
  WHERE 
    LOWER(email) = LOWER(target_email)
    AND current_day < LEAST(COALESCE(total_modules, 18), GREATEST(1, (CURRENT_DATE - (enroll_date AT TIME ZONE 'Asia/Kolkata')::date) + 1))
  RETURNING current_day INTO new_day;

  RETURN COALESCE(new_day, 0);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 7. Schedule Daily Cron Job in Supabase pg_cron (Runs every night at 00:00 IST / 18:30 UTC)
DO $$ BEGIN
  IF EXISTS (SELECT 1 FROM pg_extension WHERE extname = 'pg_cron') THEN
    -- Unschedule existing job if present
    PERFORM cron.unschedule('daily-module-unlock-job');
    -- Schedule midnight unlock
    PERFORM cron.schedule('daily-module-unlock-job', '30 18 * * *', 'SELECT public.auto_unlock_daily_profiles();');
  END IF;
EXCEPTION WHEN OTHERS THEN
  RAISE NOTICE 'pg_cron not available or unschedule failed. Skipping cron registration.';
END $$;
