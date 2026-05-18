import { cache } from "react";
import { createClient } from "@/lib/supabase/server";
import { normalizeBillingPlan, type BillingPlan } from "@/lib/entitlements";
import type { ExamPeriod } from "@/lib/exam-session";

export type AppSessionProfile = {
  onboarding_completed: boolean | null;
  plan: string | null;
  study_kv: unknown;
  exam_period?: ExamPeriod | null;
};

/** One Supabase auth round-trip per request (dedupes layout + pages + actions). */
export const getAuthUser = cache(async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
});

export const getAuthProfile = cache(async (): Promise<AppSessionProfile | null> => {
  const user = await getAuthUser();
  if (!user) return null;

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("onboarding_completed, plan, study_kv, exam_period")
    .eq("id", user.id)
    .single();

  if (!error) return data as AppSessionProfile;

  if (error.code === "42703") {
    const fallback = await supabase
      .from("profiles")
      .select("onboarding_completed, plan, study_kv")
      .eq("id", user.id)
      .single();
    return (fallback.data as AppSessionProfile | null) ?? null;
  }

  return null;
});

export const getCurrentBillingPlan = cache(async (): Promise<BillingPlan> => {
  const profile = await getAuthProfile();
  return normalizeBillingPlan(profile?.plan);
});
