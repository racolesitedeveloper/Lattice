"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signup } from "@/app/actions/auth";
import GoogleSignInButton from "@/components/auth/GoogleSignInButton";
import PasswordField from "@/components/ui/PasswordField";
import s from "./signup.module.css";

const initialState = null;

export default function SignupPage() {
  const [state, action, pending] = useActionState(signup, initialState);

  return (
    <div className={s.card}>
      <div className={s.header}>
        <h1 className={s.heading}>Create your account</h1>
        <p className={s.sub}>Free to start. No card required.</p>
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
          <label className={s.label} htmlFor="password">
            Password
          </label>
          <PasswordField
            id="password"
            name="password"
            autoComplete="new-password"
            required
            minLength={8}
            placeholder="At least 8 characters"
          />
        </div>

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
          {pending ? "Creating account..." : "Create account"}
        </button>
      </form>

      <GoogleSignInButton label="Sign up with Google" />

      <div className={s.trustStrip}>
        <p className={s.trustHeading}>Start with the free plan</p>
        <p className={s.trustBody}>
          Access notes and drills for the first 3 topics in each subject.
          Upgrade to unlock Mistakes and full coverage.
        </p>
      </div>

      <p className={s.terms}>
        By creating an account you agree to our{" "}
        <Link href="/terms" className={s.termsLink}>Terms</Link>{" "}
        and{" "}
        <Link href="/privacy" className={s.termsLink}>Privacy Policy</Link>.
      </p>

      <div className={s.rule} aria-hidden="true" />

      <p className={s.footer}>
        Already have an account?{" "}
        <Link href="/login" className={s.footerLink}>
          Sign in
        </Link>
      </p>
    </div>
  );
}
