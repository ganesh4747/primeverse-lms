-- 1. Drop existing triggers if they exist to avoid duplicate conflicts
DROP TRIGGER IF EXISTS "send-welcome-email" ON public.profiles;
DROP TRIGGER IF EXISTS "send-progression-email" ON public.profiles;

-- 2. Create the Welcome Email Trigger (Fires on INSERT)
-- Pointed to /api/send-welcome API route (previously was hitting the root URL)
CREATE TRIGGER "send-welcome-email"
AFTER INSERT ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION supabase_functions.http_request (
  'https://www.primeverseportal.pro/api/send-welcome',
  'POST',
  '{"Content-type":"application/json"}',
  '{}',
  '5000'
);

-- 3. Create the Progression Email Trigger (Fires on UPDATE of current_day)
-- Pointed to /api/send-progression API route
CREATE TRIGGER "send-progression-email"
AFTER UPDATE OF current_day ON public.profiles
FOR EACH ROW
WHEN (OLD.current_day IS DISTINCT FROM NEW.current_day AND NEW.current_day > 1)
EXECUTE FUNCTION supabase_functions.http_request (
  'https://www.primeverseportal.pro/api/send-progression',
  'POST',
  '{"Content-type":"application/json"}',
  '{}',
  '5000'
);
