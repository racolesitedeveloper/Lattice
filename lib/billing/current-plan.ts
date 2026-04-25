import { createClient } from "@/lib/supabase/server";
import { normalizeBillingPlan, type BillingPlan } from "@/lib/entitlements";

export async function getCurrentBillingPlan(): Promise<BillingPlan> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return "free";

  const { data } = await supabase
    .from("profiles")
    .select("plan")
    .eq("id", user.id)
    .single();

  return normalizeBillingPlan(data?.plan);
}
