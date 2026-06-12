-- Supabase Migration Script for Concept Implementation Support Submissions
-- Run this in your Supabase SQL Editor

-- Create the concept_submissions table if it doesn't exist
CREATE TABLE IF NOT EXISTS concept_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_email TEXT NOT NULL,
    user_name TEXT,
    module TEXT NOT NULL,
    concept_name TEXT NOT NULL,
    screenshot_url TEXT, -- Can store Base64 string or bucket URL
    explanation TEXT,
    status TEXT DEFAULT 'Pending Review',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (optional, depending on project preferences)
-- ALTER TABLE concept_submissions ENABLE ROW LEVEL SECURITY;

-- Create indexes for faster lookup by user
CREATE INDEX IF NOT EXISTS idx_concept_submissions_email ON concept_submissions(user_email);

-- Add comments for documentation
COMMENT ON TABLE concept_submissions IS 'Table to store student submissions for concept implementation support review.';
COMMENT ON COLUMN concept_submissions.user_email IS 'The email of the user submitting the concept analysis.';
COMMENT ON COLUMN concept_submissions.user_name IS 'The full name of the user.';
COMMENT ON COLUMN concept_submissions.module IS 'The learning module associated with this concept.';
COMMENT ON COLUMN concept_submissions.concept_name IS 'The specific name of the trading concept.';
COMMENT ON COLUMN concept_submissions.screenshot_url IS 'Data URL (Base64) or storage bucket path of the chart screenshot.';
COMMENT ON COLUMN concept_submissions.explanation IS 'Detailed notes and explanation of the analysis.';
COMMENT ON COLUMN concept_submissions.status IS 'Review status: e.g., Pending Review, Reviewed, Approved, Needs Improvement.';

-- Create Supabase Storage Bucket for Concept Screenshots (Concept Support)
INSERT INTO storage.buckets (id, name, public)
VALUES ('concept-support', 'concept-support', true)
ON CONFLICT (id) DO NOTHING;

-- Drop existing policies if they exist to avoid conflict errors
DROP POLICY IF EXISTS "Allow public select on concept-support" ON storage.objects;
DROP POLICY IF EXISTS "Allow public insert on concept-support" ON storage.objects;

-- Create policies for public access (so students can upload screenshots and view them)
CREATE POLICY "Allow public select on concept-support" ON storage.objects
    FOR SELECT USING (bucket_id = 'concept-support');

CREATE POLICY "Allow public insert on concept-support" ON storage.objects
    FOR INSERT WITH CHECK (bucket_id = 'concept-support');

-- Create table for concept submission chat messages (1-to-1 comments between student and mentor)
CREATE TABLE IF NOT EXISTS public.concept_messages (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    submission_id UUID NOT NULL REFERENCES public.concept_submissions(id) ON DELETE CASCADE,
    sender_email TEXT NOT NULL,
    sender_name TEXT,
    sender_role TEXT DEFAULT 'student', -- 'student', 'admin', 'system'
    message_text TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT timezone('utc'::text, now())
) TABLESPACE pg_default;

-- Create index for faster loading of chat threads by submission
CREATE INDEX IF NOT EXISTS idx_concept_messages_submission_id ON public.concept_messages(submission_id);
