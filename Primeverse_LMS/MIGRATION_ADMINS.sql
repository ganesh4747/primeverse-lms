-- Supabase Migration Script for Admin Table
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS public.admins (
  id uuid not null default gen_random_uuid (),
  full_name text not null,
  email text not null,
  password text not null,
  session_id uuid null,
  session_created_at timestamp with time zone null,
  phone text null,
  constraint admins_pkey primary key (id),
  constraint admins_email_key unique (email),
  constraint admins_session_id_key unique (session_id)
) TABLESPACE pg_default;

CREATE INDEX IF NOT EXISTS idx_admins_email on public.admins using btree (email) TABLESPACE pg_default;

CREATE INDEX IF NOT EXISTS idx_admins_session_id on public.admins using btree (session_id) TABLESPACE pg_default;

COMMENT ON TABLE public.admins IS 'Table to store administrator profiles, credentials, and session info.';
