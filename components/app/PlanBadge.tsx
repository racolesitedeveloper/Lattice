"use client";

import { useBillingPlan } from "./ProfileProvider";
import s from "./plan-badge.module.css";

/** Free-tier indicator; reads plan from shell context (no per-page server fetch). */
export default function PlanBadge() {
  const plan = useBillingPlan();
  if (plan !== "free") return null;
  return <span className={s.badge}>Free plan</span>;
}
