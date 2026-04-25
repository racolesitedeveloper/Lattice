"use client";

import { createContext, useContext } from "react";

export type BillingPlan = "free" | "full";

const PlanContext = createContext<BillingPlan>("free");

export function useBillingPlan(): BillingPlan {
  return useContext(PlanContext);
}

export default function ProfileProvider({
  plan,
  children,
}: {
  plan: BillingPlan;
  children: React.ReactNode;
}) {
  return <PlanContext.Provider value={plan}>{children}</PlanContext.Provider>;
}
