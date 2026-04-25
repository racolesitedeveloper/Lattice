# Environment variables

Next.js only loads environment files from the **project root** (the parent of this folder), not from `env/`.

**Canonical list of every variable** the app uses: [`env/.env.local.example`](./.env.local.example).

1. Copy the template into the repo root as `.env.local`:

   - **From the project root (PowerShell):**  
     `Copy-Item -Path "env/.env.local.example" -Destination ".env.local"`

2. Open `.env.local` and replace each placeholder (`YOUR_…`, `P-YOUR_…`, project ref in the Supabase URL).

3. Never commit `.env.local`; it is listed in `.gitignore`.

## Server-only payment secrets

PayPal and privileged Supabase keys must stay server-side. Do not prefix any of
these with `NEXT_PUBLIC_`, and add the same values in your deployment provider:

- `SUPABASE_SERVICE_ROLE_KEY` from Supabase Project Settings → API.
- `PAYPAL_ENV`, either `sandbox` for testing or `live` for production.
- `PAYPAL_CLIENT_ID` from PayPal Developer → Apps & Credentials.
- `PAYPAL_CLIENT_SECRET` from the same PayPal app. Treat this like a password.
- `PAYPAL_MONTHLY_PLAN_ID` for the `$2.99/month` PayPal subscription plan.
- `PAYPAL_YEARLY_PLAN_ID` for the `$29.99/year` PayPal subscription plan.
- `PAYPAL_WEBHOOK_ID` from the PayPal webhook configured for this app (endpoint path: `/api/paypal/webhook`; must be reachable on **HTTPS** in production, or via a tunnel for local testing).
- `APP_URL`, for example `http://localhost:3000` locally and your production URL in production.
