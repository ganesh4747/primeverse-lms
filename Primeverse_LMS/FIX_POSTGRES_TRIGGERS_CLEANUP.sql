-- Comprehensive SQL Script to Fix "column profiles.password does not exist" Error in Supabase
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)

-- 1. Drop existing database triggers on public.profiles
DROP TRIGGER IF EXISTS "send-welcome-email" ON public.profiles;
DROP TRIGGER IF EXISTS "send-progression-email" ON public.profiles;

-- 2. Drop old functions that might contain references to profiles.password
DROP FUNCTION IF EXISTS public.handle_profiles_insert_trigger();
DROP FUNCTION IF EXISTS public.handle_profiles_update_trigger();

-- 3. Enable pg_net extension if not enabled
CREATE EXTENSION IF NOT EXISTS pg_net;

-- 4. Re-create clean handle_profiles_insert_trigger function
CREATE OR REPLACE FUNCTION public.handle_profiles_insert_trigger()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM net.http_post(
    url := 'https://www.primeverseportal.pro/api/send-welcome',
    body := json_build_object(
      'type', 'INSERT',
      'table', 'profiles',
      'record', json_build_object(
        'email', NEW.email,
        'full_name', NEW.full_name,
        'selected_course', NEW.selected_course
      )
    )::jsonb
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 5. Re-create clean handle_profiles_update_trigger function
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

-- 6. Attach triggers safely
CREATE TRIGGER "send-welcome-email"
AFTER INSERT ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.handle_profiles_insert_trigger();

CREATE TRIGGER "send-progression-email"
AFTER UPDATE OF current_day ON public.profiles
FOR EACH ROW
WHEN (OLD.current_day IS DISTINCT FROM NEW.current_day AND NEW.current_day > 1)
EXECUTE FUNCTION public.handle_profiles_update_trigger();
