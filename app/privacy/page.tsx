import Link from "next/link";
import s from "../legal.module.css";

export const metadata = {
  title: "Privacy Policy - Lattice",
};

export default function PrivacyPage() {
  return (
    <main className={s.page}>
      <article className={s.article}>
        <Link href="/" className={s.backLink}>
          Back to Lattice
        </Link>
        <h1 className={s.heading}>Privacy Policy</h1>

        <section className={s.section}>
          <h2>What we collect</h2>
          <p>
            Lattice stores account details needed to sign you in, your billing plan, and onboarding
            preferences such as selected subjects and exam period.
          </p>
        </section>

        <section className={s.section}>
          <h2>Study data</h2>
          <p>
            Current practice progress, study time, recent activity, and archived mistakes are stored
            locally in your browser. Clearing browser storage or switching devices can remove that
            local study history.
          </p>
        </section>

        <section className={s.section}>
          <h2>Payments</h2>
          <p>
            Payments are handled by PayPal. Lattice stores PayPal identifiers and subscription status
            so the app can unlock the correct plan.
          </p>
        </section>
      </article>
    </main>
  );
}
