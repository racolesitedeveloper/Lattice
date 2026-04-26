"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import BillingActionButton from "@/components/app/BillingActionButton";
import s from "./Pricing.module.css";

/** Shown prices — keep in sync with PayPal plans and landing copy. */
const MONTHLY_PRICE = 2.99;
const YEARLY_PRICE = 29.99;

/** Rounded whole percent: (12× monthly − yearly) / (12× monthly) × 100 */
function yearlySavingsPercentVsMonthly(): number {
  const annualAtMonthly = MONTHLY_PRICE * 12;
  return Math.round(((annualAtMonthly - YEARLY_PRICE) / annualAtMonthly) * 100);
}

export default function PricingFullTierBilling({
  planTitle,
  children,
}: {
  planTitle: ReactNode;
  children: ReactNode;
}) {
  const [yearly, setYearly] = useState(false);
  const interval = yearly ? "yearly" : "monthly";
  const yearlySavePercent = yearlySavingsPercentVsMonthly();

  return (
    <>
      <div className={s.fullTierHeaderRow}>
        {planTitle}
        <div className={s.billingSwitchCluster}>
          <div className={s.billingSwitchRow}>
            <span className={`${s.billingPeriodLabel} ${!yearly ? s.billingPeriodLabelActive : ""}`}>
              Monthly
            </span>

            <button
              type="button"
              role="switch"
              aria-checked={yearly}
              className={s.billingSwitch}
              onClick={() => setYearly((v) => !v)}
              aria-label={
                yearly
                  ? "Yearly billing. Switch to monthly."
                  : "Monthly billing. Switch to yearly."
              }
            >
              <span className={s.billingSwitchTrack} data-yearly={yearly}>
                <span className={s.billingSwitchThumb} />
              </span>
            </button>

            <span className={`${s.billingPeriodLabel} ${yearly ? s.billingPeriodLabelActive : ""}`}>
              Yearly
            </span>
          </div>
        </div>
      </div>

      <div className={s.fullTierPriceArea}>
        <div className={s.priceBlock}>
          {yearly ? (
            <div className={s.tierPrice}>
              <span className={s.priceAmount}>$29.99</span>
              <span className={s.pricePer}>/year</span>
            </div>
          ) : (
            <div className={s.tierPrice}>
              <span className={s.priceAmount}>$2.99</span>
              <span className={s.pricePer}>/month</span>
            </div>
          )}
        </div>
        {yearly ? (
          <div className={s.yearlyMeta}>
            <p className={s.yearlyEquiv}>About $2.50/mo billed annually</p>
            <p className={s.yearlySave}>
              Save about{" "}
              <span className={s.yearlySaveAmount}>{yearlySavePercent}%</span> compared to paying
              monthly for a full year.
            </p>
          </div>
        ) : null}
      </div>

      {children}

      <div className={s.fullBillingFooter}>
        <BillingActionButton
          action="checkout"
          interval={interval}
          className={s.ctaFull}
          pendingLabel="Opening PayPal…"
          unauthenticatedHref="/signup?plan=full"
        >
          Get full access
        </BillingActionButton>

        <p className={s.finePrint}>Cancel any time from your account. No hidden fees.</p>
      </div>
    </>
  );
}
