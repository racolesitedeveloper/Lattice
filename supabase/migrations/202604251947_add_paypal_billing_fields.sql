-- Add PayPal billing state and prevent users from self-upgrading.
-- Webhooks update these fields through the Supabase service role only.

drop index if exists public.profiles_stripe_customer_id_key;
drop index if exists public.profiles_stripe_subscription_id_key;

alter table public.profiles
  drop constraint if exists profiles_stripe_subscription_status_check;

alter table public.profiles
  drop column if exists stripe_customer_id;

alter table public.profiles
  drop column if exists stripe_subscription_id;

alter table public.profiles
  drop column if exists stripe_price_id;

alter table public.profiles
  drop column if exists stripe_subscription_status;

alter table public.profiles
  drop column if exists stripe_current_period_end;

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

create unique index if not exists profiles_paypal_subscription_id_key
  on public.profiles (paypal_subscription_id)
  where paypal_subscription_id is not null;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'profiles_paypal_subscription_status_check'
      and conrelid = 'public.profiles'::regclass
  ) then
    alter table public.profiles
      add constraint profiles_paypal_subscription_status_check
      check (
        paypal_subscription_status is null
        or paypal_subscription_status in (
          'APPROVAL_PENDING',
          'APPROVED',
          'ACTIVE',
          'SUSPENDED',
          'CANCELLED',
          'EXPIRED'
        )
      );
  end if;

  if not exists (
    select 1
    from pg_constraint
    where conname = 'profiles_paypal_billing_interval_check'
      and conrelid = 'public.profiles'::regclass
  ) then
    alter table public.profiles
      add constraint profiles_paypal_billing_interval_check
      check (
        paypal_billing_interval is null
        or paypal_billing_interval in ('monthly', 'yearly')
      );
  end if;
end $$;

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

notify pgrst, 'reload schema';
