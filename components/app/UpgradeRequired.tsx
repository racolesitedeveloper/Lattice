import Link from "next/link";
import BillingActionButton from "./BillingActionButton";
import s from "./upgrade-required.module.css";

export default function UpgradeRequired({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <section className={s.card} aria-labelledby="upgrade-required-title">
      <p className={s.kicker}>Full plan</p>
      <h2 id="upgrade-required-title" className={s.title}>
        {title}
      </h2>
      <p className={s.message}>{message}</p>
      <div className={s.actions}>
        <BillingActionButton
          action="checkout"
          interval="monthly"
          className={s.cta}
          pendingLabel="Opening PayPal..."
        >
          Upgrade monthly
        </BillingActionButton>
        <BillingActionButton
          action="checkout"
          interval="yearly"
          className={s.secondaryCta}
          pendingLabel="Opening PayPal..."
        >
          Upgrade yearly
        </BillingActionButton>
        <Link href="/dashboard" className={s.secondaryCta}>
          Back to overview
        </Link>
      </div>
    </section>
  );
}
