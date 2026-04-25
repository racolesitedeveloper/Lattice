import Link from "next/link";
import s from "../login/login.module.css";

export const metadata = {
  title: "Reset password - Lattice",
};

export default function ForgotPasswordPage() {
  return (
    <div className={s.card}>
      <div className={s.header}>
        <h1 className={s.heading}>Reset password</h1>
        <p className={s.sub}>
          Password reset emails are not enabled in this build yet. For now, create a new account or
          contact support before launch.
        </p>
      </div>

      <div className={s.trustStrip}>
        <p className={s.trustHeading}>Coming next</p>
        <p className={s.trustBody}>
          This page is here so the sign-in flow never dead-ends. The reset form can be wired to
          Supabase Auth when email templates are configured.
        </p>
      </div>

      <div className={s.rule} aria-hidden="true" />

      <p className={s.footer}>
        Remembered it?{" "}
        <Link href="/login" className={s.footerLink}>
          Sign in
        </Link>
      </p>
    </div>
  );
}
