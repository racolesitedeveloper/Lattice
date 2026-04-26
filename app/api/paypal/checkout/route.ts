import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createPayPalSubscription, type PayPalBillingInterval } from "@/lib/paypal";

export const runtime = "nodejs";

type CheckoutRequest = {
  interval?: PayPalBillingInterval;
};

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "You must be signed in to upgrade." }, { status: 401 });
    }

    const payload = (await request.json().catch(() => ({}))) as CheckoutRequest;
    const interval = payload.interval === "yearly" ? "yearly" : "monthly";
    const subscription = await createPayPalSubscription({
      userId: user.id,
      email: user.email ?? undefined,
      interval,
    });

    if (!subscription.id) {
      return NextResponse.json({ error: "PayPal did not return a subscription id." }, { status: 500 });
    }

    return NextResponse.json({ subscriptionId: subscription.id });
  } catch (error) {
    const message = error instanceof Error ? error.message : "PayPal checkout failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
