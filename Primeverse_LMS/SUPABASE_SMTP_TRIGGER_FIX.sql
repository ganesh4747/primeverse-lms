-- SQL Script to Enable Custom SMTP Welcome Email Trigger with Password Delivery
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)

-- 1. Enable pg_net extension if not enabled
CREATE EXTENSION IF NOT EXISTS pg_net;

-- 2. Add temporary column to profiles for passing password to email trigger
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS temp_pass text;

-- 3. Create function to trigger custom SMTP email service on new member insert
CREATE OR REPLACE FUNCTION public.handle_profiles_insert_trigger()
RETURNS TRIGGER AS $$
DECLARE
  pass_val text;
BEGIN
  -- Use temp_pass if provided
  pass_val := COALESCE(NEW.temp_pass, '');

  PERFORM net.http_post(
    url := 'https://www.primeverseportal.pro/api/send-welcome',
    body := json_build_object(
      'type', 'INSERT',
      'table', 'profiles',
      'record', json_build_object(
        'email', NEW.email,
        'full_name', NEW.full_name,
        'password', pass_val,
        'selected_course', NEW.selected_course
      )
    )::jsonb
  );

  -- Erase temp_pass so plaintext password is never stored in DB
  NEW.temp_pass := NULL;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 4. Re-create the BEFORE INSERT trigger on public.profiles
DROP TRIGGER IF EXISTS "send-welcome-email" ON public.profiles;
CREATE TRIGGER "send-welcome-email"
BEFORE INSERT ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.handle_profiles_insert_trigger();
