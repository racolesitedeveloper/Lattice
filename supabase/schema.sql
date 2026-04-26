-- ─────────────────────────────────────────────────────────────────────────────
-- Lattice — Supabase schema
-- Run this once in the Supabase SQL editor after creating your project.
-- ─────────────────────────────────────────────────────────────────────────────

-- ── profiles ──────────────────────────────────────────────────────────────────
-- One row per auth.users entry; created automatically on signup via trigger.

create table if not exists public.profiles (
  id                   uuid primary key references auth.users(id) on delete cascade,
  default_subject      text check (default_subject in ('physics', 'chemistry', 'biology')),
  selected_subjects    text[] not null default '{}',
  study_level          text check (study_level in ('as', 'a2')),
  exam_date            date,
  exam_period          text check (exam_period in ('may-june', 'oct-nov')),
  onboarding_completed boolean not null default false,
  -- 'free' | 'full' — updated by PayPal webhook; never trust client-side value.
  plan                 text not null default 'free' check (plan in ('free', 'full')),
  paypal_payer_id      text,
  paypal_subscription_id text,
  paypal_plan_id       text,
  paypal_subscription_status text check (
    paypal_subscription_status is null
    or paypal_subscription_status in (
      'APPROVAL_PENDING',
      'APPROVED',
      'ACTIVE',
      'SUSPENDED',
      'CANCELLED',
      'EXPIRED'
    )
  ),
  paypal_billing_interval text check (
    paypal_billing_interval is null
    or paypal_billing_interval in ('monthly', 'yearly')
  ),
  paypal_current_period_end timestamptz,
  study_kv             jsonb not null default '{}'::jsonb,
  updated_at           timestamptz not null default now()
);

alter table public.profiles
  add column if not exists exam_date date;

alter table public.profiles
  add column if not exists exam_period text check (exam_period in ('may-june', 'oct-nov'));

alter table public.profiles
  add column if not exists selected_subjects text[] not null default '{}';

alter table public.profiles
  add column if not exists study_level text check (study_level in ('as', 'a2'));

alter table public.profiles
  add column if not exists paypal_payer_id text;

alter table public.profiles
  add column if not exists paypal_subscription_id text;

alter table public.profiles
  add column if not exists paypal_plan_id text;

alter table public.profiles
  add column if not exists paypal_subscription_status text;

alter table public.profiles
  add column if not exists paypal_billing_interval text;

alter table public.profiles
  add column if not exists paypal_current_period_end timestamptz;

alter table public.profiles
  add column if not exists study_kv jsonb not null default '{}'::jsonb;

create unique index if not exists profiles_paypal_subscription_id_key
  on public.profiles (paypal_subscription_id)
  where paypal_subscription_id is not null;

-- ── Row Level Security ────────────────────────────────────────────────────────

alter table public.profiles enable row level security;

-- Policies are not "create if not exists" — re-run safe: drop then create.
drop policy if exists "profiles: select own" on public.profiles;
drop policy if exists "profiles: update own" on public.profiles;

-- Users may only read their own row.
create policy "profiles: select own"
  on public.profiles for select
  using (auth.uid() = id);

-- Users may only update their own row.
-- Billing fields are additionally protected by profiles_prevent_billing_self_update.
create policy "profiles: update own"
  on public.profiles for update
  using (auth.uid() = id);

-- The trigger below inserts the row; no insert policy for users needed.

-- ── Auto-create profile on signup ─────────────────────────────────────────────

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id)
  values (new.id);
  return new;
end;
$$;

-- Drop the trigger first so re-running this file is idempotent.
drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();

-- ── updated_at auto-stamp ─────────────────────────────────────────────────────

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_updated_at on public.profiles;

create trigger profiles_updated_at
  before update on public.profiles
  for each row
  execute function public.set_updated_at();

-- ── Protect billing fields ───────────────────────────────────────────────────

create or replace function public.prevent_profile_billing_self_update()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if coalesce(auth.role(), '') = 'authenticated' and (
    new.plan is distinct from old.plan
    or new.paypal_payer_id is distinct from old.paypal_payer_id
    or new.paypal_subscription_id is distinct from old.paypal_subscription_id
    or new.paypal_plan_id is distinct from old.paypal_plan_id
    or new.paypal_subscription_status is distinct from old.paypal_subscription_status
    or new.paypal_billing_interval is distinct from old.paypal_billing_interval
    or new.paypal_current_period_end is distinct from old.paypal_current_period_end
  ) then
    raise exception 'Billing fields can only be updated by the billing service.'
      using errcode = '42501';
  end if;

  return new;
end;
$$;

drop trigger if exists profiles_prevent_billing_self_update on public.profiles;

create trigger profiles_prevent_billing_self_update
  before update on public.profiles
  for each row
  execute function public.prevent_profile_billing_self_update();
