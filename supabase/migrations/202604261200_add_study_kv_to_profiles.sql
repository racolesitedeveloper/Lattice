-- Persist practice progress, study time, recent activity, and mistakes per account (cross-device).

alter table public.profiles
  add column if not exists study_kv jsonb not null default '{}'::jsonb;

notify pgrst, 'reload schema';
