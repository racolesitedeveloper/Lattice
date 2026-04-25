-- Add profile fields used by onboarding and dashboard preferences.
-- Safe to run against an existing Supabase project.

alter table public.profiles
  add column if not exists selected_subjects text[] not null default '{}';

alter table public.profiles
  add column if not exists study_level text;

alter table public.profiles
  add column if not exists exam_period text;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'profiles_study_level_check'
      and conrelid = 'public.profiles'::regclass
  ) then
    alter table public.profiles
      add constraint profiles_study_level_check
      check (study_level in ('as', 'a2'));
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'profiles_exam_period_check'
      and conrelid = 'public.profiles'::regclass
  ) then
    alter table public.profiles
      add constraint profiles_exam_period_check
      check (exam_period in ('may-june', 'oct-nov'));
  end if;
end $$;

notify pgrst, 'reload schema';
