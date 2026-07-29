-- SQL Script to Re-enable the Custom SMTP Welcome Email Trigger in Supabase
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)

-- Enable pg_net extension if not enabled
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Create function to trigger custom SMTP email service on new member insert
CREATE OR REPLACE FUNCTION public.handle_profiles_insert_trigger()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM net.http_post(
    url := 'https://www.primeverseportal.pro/api/send-welcome',
    body := json_build_object(
      'type', 'INSERT',
      'table', 'profiles',
      'record', row_to_json(NEW)
    )::jsonb
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Re-create the trigger on public.profiles
DROP TRIGGER IF EXISTS "send-welcome-email" ON public.profiles;
CREATE TRIGGER "send-welcome-email"
AFTER INSERT ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.handle_profiles_insert_trigger();
