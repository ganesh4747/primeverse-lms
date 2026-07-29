-- Supabase Migration Script for Supabase Auth Integration
-- Run this script in your Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)

-- 1. Enable pgcrypto extension for password hashing if not already enabled
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- 2. Migrate existing user profiles into Supabase auth.users table
DO $$
DECLARE
    rec RECORD;
    new_user_id UUID;
BEGIN
    FOR rec IN SELECT email, password, full_name FROM public.profiles LOOP
        -- Check if user already exists in auth.users by email
        IF NOT EXISTS (SELECT 1 FROM auth.users WHERE lower(email) = lower(rec.email)) THEN
            new_user_id := gen_random_uuid();
            
            INSERT INTO auth.users (
                instance_id,
                id,
                aud,
                role,
                email,
                encrypted_password,
                email_confirmed_at,
                raw_user_meta_data,
                created_at,
                updated_at,
                confirmation_token,
                recovery_token
            ) VALUES (
                '00000000-0000-0000-0000-000000000000',
                new_user_id,
                'authenticated',
                'authenticated',
                rec.email,
                crypt(COALESCE(rec.password, 'PrimeVerse2026!'), gen_salt('bf')),
                NOW(),
                jsonb_build_object('full_name', rec.full_name),
                NOW(),
                NOW(),
                '',
                ''
            );

            -- Also ensure identities entry exists for Supabase Auth email provider
            INSERT INTO auth.identities (
                id,
                user_id,
                identity_data,
                provider,
                provider_id,
                last_sign_in_at,
                created_at,
                updated_at
            ) VALUES (
                new_user_id,
                new_user_id,
                jsonb_build_object('sub', new_user_id::text, 'email', rec.email),
                'email',
                new_user_id::text,
                NOW(),
                NOW(),
                NOW()
            );
        END IF;
    END LOOP;
END $$;

-- 3. Safely remove legacy plain-text password columns from custom public tables
ALTER TABLE public.profiles DROP COLUMN IF EXISTS password;
ALTER TABLE public.admins DROP COLUMN IF EXISTS password;

-- 4. Enable RLS and public reading/updating policies for profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE tablename = 'profiles' AND policyname = 'Public profiles access policy'
    ) THEN
        CREATE POLICY "Public profiles access policy" ON public.profiles FOR ALL USING (true) WITH CHECK (true);
    END IF;
END $$;

-- 5. Enable automatic Custom SMTP Welcome Email Trigger via pg_net
CREATE EXTENSION IF NOT EXISTS pg_net;

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

DROP TRIGGER IF EXISTS "send-welcome-email" ON public.profiles;
CREATE TRIGGER "send-welcome-email"
AFTER INSERT ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.handle_profiles_insert_trigger();
