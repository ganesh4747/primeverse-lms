-- SQL Script to Set Password for harishramananoffical@gmail.com to 'primeverse@14' in Supabase Auth
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)

CREATE EXTENSION IF NOT EXISTS pgcrypto;

DO $$
DECLARE
    target_email TEXT := 'harishramananoffical@gmail.com';
    target_pass TEXT := 'primeverse@14';
    usr_id UUID;
BEGIN
    -- 1. Check if user already exists in auth.users
    SELECT id INTO usr_id FROM auth.users WHERE lower(email) = lower(target_email);

    IF usr_id IS NOT NULL THEN
        -- User exists: update password and confirm email
        UPDATE auth.users
        SET encrypted_password = crypt(target_pass, gen_salt('bf')),
            email_confirmed_at = NOW(),
            updated_at = NOW(),
            aud = 'authenticated',
            role = 'authenticated'
        WHERE id = usr_id;
    ELSE
        -- User does not exist in auth.users: create user and identity
        usr_id := gen_random_uuid();
        
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
            updated_at
        ) VALUES (
            '00000000-0000-0000-0000-000000000000',
            usr_id,
            'authenticated',
            'authenticated',
            target_email,
            crypt(target_pass, gen_salt('bf')),
            NOW(),
            jsonb_build_object('full_name', 'Harish Ramanan'),
            NOW(),
            NOW()
        );

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
            usr_id,
            usr_id,
            jsonb_build_object('sub', usr_id::text, 'email', target_email),
            'email',
            usr_id::text,
            NOW(),
            NOW(),
            NOW()
        );
    END IF;
END $$;
