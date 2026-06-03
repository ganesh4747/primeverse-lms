-- Supabase Migration Script for Daily Email Progression Tracking
-- Run this in your Supabase SQL Editor

-- Add last_email_sent_day column to profiles table (if it doesn't exist)
DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name='profiles' AND column_name='last_email_sent_day'
  ) THEN
    ALTER TABLE profiles ADD COLUMN last_email_sent_day INTEGER DEFAULT 1;
  END IF;
END $$;

COMMENT ON COLUMN profiles.last_email_sent_day IS 'The day number of the last daily progression email sent to this user. Default is 1 (welcome email).';
