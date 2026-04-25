"use client";

import { useActionState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { login } from "@/app/actions/auth";
import GoogleSignInButton from "@/components/auth/GoogleSignInButton";
import PasswordField from "@/components/ui/PasswordField";
import s from "./login.module.css";

const initialState = null;

function OauthErrorBanner() {
  const searchParams = useSearchParams();
  if (searchParams.get("error") !== "oauth") return null;
  return (
    <p className={s.error} role="alert">
      Google sign-in didn&apos;t complete. You can try again or use email and password.
    </p>
  );
}

export default function LoginPage() {
  const [state, action, pending] = useActionState(login, initialState);

  return (
    <div className={s.card}>
      <div className={s.header}>
        <h1 className={s.heading}>Sign in</h1>
        <p className={s.sub}>Welcome back &mdash; pick up where you left off.</p>
      </div>

      <form action={action} className={s.form}>
        <div className={s.field}>
          <label className={s.label} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={s.input}
            placeholder="you@example.com"
          />
        </div>

        <div className={s.field}>
          <div className={s.labelRow}>
            <label className={s.label} htmlFor="password">
              Password
            </label>
            <Link href="/forgot-password" className={s.forgotLink}>
              Forgot password?
            </Link>
          </div>
          <PasswordField
            id="password"
            name="password"
            autoComplete="current-password"
            required
            placeholder="At least 8 characters"
          />
        </div>

        <Suspense fallback={null}>
          <OauthErrorBanner />
        </Suspense>

        {state?.error && (
          <p className={s.error} role="alert">
            {state.error}
          </p>
        )}

        <button
          type="submit"
          className={s.submit}
          disabled={pending}
          aria-disabled={pending}
        >
          {pending ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <GoogleSignInButton />

      <div className={s.trustStrip}>
        <p className={s.trustHeading}>Free tier includes:</p>
        <p className={s.trustBody}>
          Notes and drills for the first 3 topics in Physics, Chemistry, and Biology.
        </p>
      </div>

      <div className={s.rule} aria-hidden="true" />

      <p className={s.footer}>
        Don&apos;t have an account?{" "}
        <Link href="/signup" className={s.footerLink}>
          Create one free
        </Link>
      </p>
    </div>
  );
}
