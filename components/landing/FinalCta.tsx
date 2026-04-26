import Link from "next/link";
import s from "./FinalCta.module.css";

export default function FinalCta({ isSignedIn = false }: { isSignedIn?: boolean }) {
  return (
    <section
      className={s.section}
      aria-label={isSignedIn ? "Open app call to action" : "Sign up call to action"}
    >
      <div className={s.inner}>
        <h2 className={s.heading}>
          Your course has a lot to cover.<br />
          Your revision should stay organised.
        </h2>
        <Link href={isSignedIn ? "/dashboard" : "/signup"} className={s.cta}>
          {isSignedIn ? "Open the app" : "Start for free"}
        </Link>
        <p className={s.note}>No card required. Full access from $2.99/month or $29.99/year.</p>
      </div>
    </section>
  );
}
