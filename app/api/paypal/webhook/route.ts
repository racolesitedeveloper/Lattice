import { NextResponse } from "next/server";
import { syncPayPalSubscriptionToProfile } from "@/lib/billing";
import { getPayPalSubscription, type PayPalWebhookEvent, verifyPayPalWebhook } from "@/lib/paypal";

export const runtime = "nodejs";

const SUBSCRIPTION_EVENTS = new Set([
  "BILLING.SUBSCRIPTION.ACTIVATED",
  "BILLING.SUBSCRIPTION.UPDATED",
  "BILLING.SUBSCRIPTION.SUSPENDED",
  "BILLING.SUBSCRIPTION.CANCELLED",
  "BILLING.SUBSCRIPTION.EXPIRED",
]);

export async function POST(request: Request) {
  let event: PayPalWebhookEvent;

  try {
    event = (await request.json()) as PayPalWebhookEvent;
  } catch {
    return NextResponse.json({ error: "Invalid PayPal webhook payload." }, { status: 400 });
  }

  try {
    const verified = await verifyPayPalWebhook({ body: event, headers: request.headers });
    if (!verified) {
      return NextResponse.json({ error: "Invalid PayPal webhook signature." }, { status: 400 });
    }

    if (SUBSCRIPTION_EVENTS.has(event.event_type)) {
      const subscription = await getPayPalSubscription(event.resource.id);
      await syncPayPalSubscriptionToProfile(subscription, event.resource.custom_id);
    }
  } catch (error) {
    console.error("PayPal webhook handler failed", error);
    return NextResponse.json({ error: "Webhook handler failed." }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
