-- SQL Script to Automatically Confirm & Authenticate Every New User Created by Admin
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)

-- 1. Create a function that auto-confirms every new user in auth.users
CREATE OR REPLACE FUNCTION public.auto_confirm_new_users()
RETURNS TRIGGER AS $$
BEGIN
  -- Automatically set email_confirmed_at timestamp upon user creation
  NEW.email_confirmed_at := COALESCE(NEW.email_confirmed_at, NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 2. Attach the trigger to auth.users table
DROP TRIGGER IF EXISTS "auto_confirm_new_users_trigger" ON auth.users;
CREATE TRIGGER "auto_confirm_new_users_trigger"
BEFORE INSERT ON auth.users
FOR EACH ROW
EXECUTE FUNCTION public.auto_confirm_new_users();

-- 3. Confirm all existing users as well
UPDATE auth.users
SET email_confirmed_at = NOW()
WHERE email_confirmed_at IS NULL;
