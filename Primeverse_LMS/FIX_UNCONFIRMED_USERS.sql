-- SQL Script to Auto-Confirm All Users & Enable Instant Supabase Auth Login
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)

-- 1. Confirm all user emails in auth.users so Supabase Auth allows immediate login
UPDATE auth.users
SET email_confirmed_at = NOW(),
    updated_at = NOW()
WHERE email_confirmed_at IS NULL;

-- 2. If you want to manually reset a specific user's password directly in auth.users:
-- (Uncomment and replace 'your_user_email@gmail.com' and 'new_password' if needed)
/*
UPDATE auth.users
SET encrypted_password = crypt('primeverse@14', gen_salt('bf')),
    email_confirmed_at = NOW(),
    updated_at = NOW()
WHERE email = 'harishramananoffical@gmail.com';
*/
