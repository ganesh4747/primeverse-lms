-- SQL Script to Instantly Reset/Set User Passwords & Confirm Email in Supabase Auth
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)

-- Enable pgcrypto extension for password hashing
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Set password to 'primeverse@14' and confirm email for harishramananoffical@gmail.com
UPDATE auth.users
SET encrypted_password = crypt('primeverse@14', gen_salt('bf')),
    email_confirmed_at = NOW(),
    updated_at = NOW()
WHERE lower(email) = 'harishramananoffical@gmail.com';

-- Confirm all pending users in auth.users so no account is blocked by email confirmation
UPDATE auth.users
SET email_confirmed_at = NOW()
WHERE email_confirmed_at IS NULL;
