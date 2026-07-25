-- 1. Create database webhook trigger on concept_submissions
DROP TRIGGER IF EXISTS "send-admin-submission-alert" ON public.concept_submissions;

CREATE TRIGGER "send-admin-submission-alert"
AFTER INSERT ON public.concept_submissions
FOR EACH ROW
EXECUTE FUNCTION supabase_functions.http_request (
  'https://www.primeverseportal.pro/api/send-admin-alert',
  'POST',
  '{"Content-Type":"application/json"}',
  '{}',
  '5000'
);

-- 2. Create database webhook trigger on concept_messages
DROP TRIGGER IF EXISTS "send-admin-message-alert" ON public.concept_messages;

CREATE TRIGGER "send-admin-message-alert"
AFTER INSERT ON public.concept_messages
FOR EACH ROW
EXECUTE FUNCTION supabase_functions.http_request (
  'https://www.primeverseportal.pro/api/send-admin-alert',
  'POST',
  '{"Content-Type":"application/json"}',
  '{}',
  '5000'
);
