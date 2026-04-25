import type { PayPalBillingInterval, PayPalSubscription } from "@/lib/paypal";
import { getPayPalIntervalForPlan } from "@/lib/paypal";
import { createAdminClient } from "@/lib/supabase/admin";

const FULL_ACCESS_STATUSES = new Set<PayPalSubscription["status"]>(["ACTIVE"]);

type ProfileBillingUpdate = {
  plan: "free" | "full";
  paypal_payer_id: string | null;
  paypal_subscription_id: string;
  paypal_plan_id: string;
  paypal_subscription_status: PayPalSubscription["status"];
  paypal_billing_interval: PayPalBillingInterval | null;
  paypal_current_period_end: string | null;
};

type DatabaseError = {
  code?: string;
  message?: string;
};

export function subscriptionAllowsFullAccess(status: PayPalSubscription["status"]): boolean {
  return FULL_ACCESS_STATUSES.has(status);
}

export async function syncPayPalSubscriptionToProfile(subscription: PayPalSubscription, fallbackUserId?: string | null) {
  const supabase = createAdminClient();
  const userId = subscription.custom_id || fallbackUserId || null;
  const interval = getPayPalIntervalForPlan(subscription.plan_id);
  const allowsFullAccess = Boolean(interval) && subscriptionAllowsFullAccess(subscription.status);
  const update: ProfileBillingUpdate = {
    plan: allowsFullAccess ? "full" : "free",
    paypal_payer_id: subscription.subscriber?.payer_id ?? null,
    paypal_subscription_id: subscription.id,
    paypal_plan_id: subscription.plan_id,
    paypal_subscription_status: subscription.status,
    paypal_billing_interval: interval,
    paypal_current_period_end: subscription.billing_info?.next_billing_time ?? null,
  };

  if (userId) {
    const { error } = await supabase.from("profiles").update(update).eq("id", userId);
    if (error && isMissingBillingColumnError(error)) {
      const { error: fallbackError } = await supabase
        .from("profiles")
        .update({ plan: update.plan })
        .eq("id", userId);
      if (fallbackError) throw fallbackError;
      return;
    }
    if (error) throw error;
    return;
  }

  const profileId = await findProfileIdForSubscription(subscription.id);
  if (!profileId) {
    console.warn(`No profile found for PayPal subscription ${subscription.id}`);
    return;
  }

  const { error } = await supabase.from("profiles").update(update).eq("id", profileId);

  if (error && isMissingBillingColumnError(error)) {
    console.warn(
      `PayPal billing columns are missing; could not sync subscription ${subscription.id} without a user id.`,
    );
    return;
  }

  if (error) throw error;
}

export function isMissingBillingColumnError(error: DatabaseError): boolean {
  const message = error.message ?? "";
  return (
    error.code === "42703" ||
    error.code === "PGRST204" ||
    message.includes("paypal_payer_id") ||
    message.includes("paypal_subscription_id") ||
    message.includes("paypal_plan_id") ||
    message.includes("paypal_subscription_status") ||
    message.includes("paypal_billing_interval") ||
    message.includes("paypal_current_period_end")
  );
}

async function findProfileIdForSubscription(subscriptionId: string): Promise<string | null> {
  const supabase = createAdminClient();
  const bySubscription = await supabase
    .from("profiles")
    .select("id")
    .eq("paypal_subscription_id", subscriptionId)
    .maybeSingle<{ id: string }>();

  if (bySubscription.error && !isMissingBillingColumnError(bySubscription.error)) {
    throw bySubscription.error;
  }

  if (bySubscription.data?.id) return bySubscription.data.id;
  return null;
}
