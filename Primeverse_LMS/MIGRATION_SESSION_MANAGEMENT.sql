-- Supabase Migration Script for Single Session Management
-- Run this in your Supabase SQL Editor

-- Add session management columns to profiles table (if they don't exist)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name='profiles' AND column_name='session_id'
  ) THEN
    ALTER TABLE profiles ADD COLUMN session_id UUID UNIQUE NULL;
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name='profiles' AND column_name='session_created_at'
  ) THEN
    ALTER TABLE profiles ADD COLUMN session_created_at TIMESTAMP WITH TIME ZONE NULL;
  END IF;
END $$;

-- Add session management columns to admins table (if they don't exist)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name='admins' AND column_name='session_id'
  ) THEN
    ALTER TABLE admins ADD COLUMN session_id UUID UNIQUE NULL;
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name='admins' AND column_name='session_created_at'
  ) THEN
    ALTER TABLE admins ADD COLUMN session_created_at TIMESTAMP WITH TIME ZONE NULL;
  END IF;
END $$;

-- Create indexes for faster lookup (optional but recommended)
CREATE INDEX idx_profiles_session_id ON profiles(session_id);
CREATE INDEX idx_admins_session_id ON admins(session_id);

-- Add comments for documentation
COMMENT ON COLUMN profiles.session_id IS 'Unique identifier for the current active session. NULL when not logged in.';
COMMENT ON COLUMN profiles.session_created_at IS 'Timestamp when the current session was created. Used to detect newer sessions.';
COMMENT ON COLUMN admins.session_id IS 'Unique identifier for the current active session. NULL when not logged in.';
COMMENT ON COLUMN admins.session_created_at IS 'Timestamp when the current session was created. Used to detect newer sessions.';

-- Optional: View to check active sessions
CREATE OR REPLACE VIEW active_sessions AS
SELECT 
  email,
  'user' as role,
  session_id,
  session_created_at,
  full_name
FROM profiles
WHERE session_id IS NOT NULL

UNION ALL

SELECT 
  email,
  'admin' as role,
  session_id,
  session_created_at,
  full_name
FROM admins
WHERE session_id IS NOT NULL;

-- Query to view all active sessions:
-- SELECT * FROM active_sessions;

-- Query to clear a specific user's session:
-- UPDATE profiles SET session_id = NULL, session_created_at = NULL WHERE email = 'user@example.com';
