"use client";

import { createContext, useContext } from "react";

export type BillingPlan = "free" | "full";

const PlanContext = createContext<BillingPlan>("free");
const SessionEmailContext = createContext<string | null>(null);

export function useBillingPlan(): BillingPlan {
  return useContext(PlanContext);
}

/** Signed-in account email, if the provider was given one. */
export function useSessionEmail(): string | null {
  return useContext(SessionEmailContext);
}

export default function ProfileProvider({
  plan,
  userEmail = null,
  children,
}: {
  plan: BillingPlan;
  userEmail?: string | null;
  children: React.ReactNode;
}) {
  return (
    <PlanContext.Provider value={plan}>
      <SessionEmailContext.Provider value={userEmail ?? null}>
        {children}
      </SessionEmailContext.Provider>
    </PlanContext.Provider>
  );
}
