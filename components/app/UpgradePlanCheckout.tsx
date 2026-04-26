"use client";

import { useId, useState } from "react";
import Link from "next/link";
import BillingActionButton from "./BillingActionButton";
import s from "./upgrade-required.module.css";

const MONTHLY = 2.99;
const YEARLY = 29.99;

function yearlySavingsPercent(): number {
  const annualAtMonthly = MONTHLY * 12;
  return Math.round(((annualAtMonthly - YEARLY) / annualAtMonthly) * 100);
}

export default function UpgradePlanCheckout() {
  const [interval, setInterval] = useState<"monthly" | "yearly">("yearly");
  const savePct = yearlySavingsPercent();
  const groupId = useId();

  return (
    <div className={s.checkoutBlock}>
      <p id={`${groupId}-label`} className={s.planLabel}>
        Billing
      </p>
      <div
        className={s.planPicker}
        role="group"
        aria-labelledby={`${groupId}-label`}
      >
        <button
          type="button"
          className={`${s.planOption} ${interval === "monthly" ? s.planOptionOn : ""}`}
          onClick={() => setInterval("monthly")}
          aria-pressed={interval === "monthly"}
        >
          <span className={s.planOptionTitle}>Monthly</span>
          <span className={s.planOptionPrice}>
            ${MONTHLY.toFixed(2)}
            <span className={s.planOptionPer}>/mo</span>
          </span>
        </button>
        <button
          type="button"
          className={`${s.planOption} ${interval === "yearly" ? s.planOptionOn : ""}`}
          onClick={() => setInterval("yearly")}
          aria-pressed={interval === "yearly"}
        >
          <span className={s.planOptionRow}>
            <span className={s.planOptionTitle}>Yearly</span>
            <span className={s.savePill} aria-hidden>
              Save ~{savePct}%
            </span>
          </span>
          <span className={s.planOptionPrice}>
            ${YEARLY.toFixed(2)}
            <span className={s.planOptionPer}>/yr</span>
          </span>
        </button>
      </div>

      <p className={s.checkoutHint}>You&apos;ll pay securely with PayPal. Cancel in PayPal any time.</p>

      <div className={s.checkoutHost}>
        <BillingActionButton
          key={interval}
          action="checkout"
          interval={interval}
          pendingLabel="Preparing PayPal…"
        />
      </div>

      <p className={s.footerNote}>
        <Link href="/dashboard" className={s.footerLink}>
          Back to overview
        </Link>
        <span className={s.footerSep} aria-hidden>
          ·
        </span>
        <Link href="/" className={s.footerLink}>
          Marketing site
        </Link>
      </p>
    </div>
  );
}
