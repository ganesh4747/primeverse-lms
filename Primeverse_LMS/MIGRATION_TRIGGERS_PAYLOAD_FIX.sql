-- Supabase Migration Script to Fix Webhook Trigger Payloads
-- Run this in your Supabase SQL Editor to replace the triggers with proper payload triggers using pg_net

-- Enable the pg_net extension if it is not already enabled
CREATE EXTENSION IF NOT EXISTS pg_net;

-- 1. DROP EXISTING TRIGGERS TO PREVENT DUPLICATES
DROP TRIGGER IF EXISTS "send-welcome-email" ON public.profiles;
DROP TRIGGER IF EXISTS "send-progression-email" ON public.profiles;
DROP TRIGGER IF EXISTS "send-admin-submission-alert" ON public.concept_submissions;
DROP TRIGGER IF EXISTS "send-admin-message-alert" ON public.concept_messages;
DROP TRIGGER IF EXISTS "send-community-broadcast" ON public.community_messages;

-- 2. CREATE PROFILE WELCOME TRIGGER FUNCTION
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

CREATE TRIGGER "send-welcome-email"
AFTER INSERT ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.handle_profiles_insert_trigger();


-- 3. CREATE PROFILE PROGRESSION TRIGGER FUNCTION
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

CREATE TRIGGER "send-progression-email"
AFTER UPDATE OF current_day ON public.profiles
FOR EACH ROW
WHEN (OLD.current_day IS DISTINCT FROM NEW.current_day AND NEW.current_day > 1)
EXECUTE FUNCTION public.handle_profiles_update_trigger();


-- 4. CREATE CONCEPT SUBMISSIONS INSERT TRIGGER FUNCTION
CREATE OR REPLACE FUNCTION public.handle_concept_submissions_insert_trigger()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM net.http_post(
    url := 'https://www.primeverseportal.pro/api/send-admin-alert',
    body := json_build_object(
      'type', 'INSERT',
      'table', 'concept_submissions',
      'record', row_to_json(NEW)
    )::jsonb
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER "send-admin-submission-alert"
AFTER INSERT ON public.concept_submissions
FOR EACH ROW
EXECUTE FUNCTION public.handle_concept_submissions_insert_trigger();


-- 5. CREATE CONCEPT MESSAGES INSERT TRIGGER FUNCTION
CREATE OR REPLACE FUNCTION public.handle_concept_messages_insert_trigger()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM net.http_post(
    url := 'https://www.primeverseportal.pro/api/send-admin-alert',
    body := json_build_object(
      'type', 'INSERT',
      'table', 'concept_messages',
      'record', row_to_json(NEW)
    )::jsonb
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER "send-admin-message-alert"
AFTER INSERT ON public.concept_messages
FOR EACH ROW
EXECUTE FUNCTION public.handle_concept_messages_insert_trigger();


-- 6. CREATE COMMUNITY MESSAGES INSERT TRIGGER FUNCTION (BROADCAST)
CREATE OR REPLACE FUNCTION public.handle_community_messages_insert_trigger()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM net.http_post(
    url := 'https://www.primeverseportal.pro/api/send-broadcast',
    body := json_build_object(
      'type', 'INSERT',
      'table', 'community_messages',
      'record', row_to_json(NEW)
    )::jsonb
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER "send-community-broadcast"
AFTER INSERT ON public.community_messages
FOR EACH ROW
EXECUTE FUNCTION public.handle_community_messages_insert_trigger();
