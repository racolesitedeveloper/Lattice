"use client";

import type { ReactNode } from "react";
import { useState } from "react";

type BillingAction = "checkout" | "portal";
type BillingInterval = "monthly" | "yearly";

export default function BillingActionButton({
  action,
  className,
  children,
  pendingLabel,
  interval = "monthly",
  unauthenticatedHref,
}: {
  action: BillingAction;
  className?: string;
  children: ReactNode;
  pendingLabel: string;
  interval?: BillingInterval;
  unauthenticatedHref?: string;
}) {
  const [pending, setPending] = useState(false);

  async function handleClick() {
    setPending(true);

    try {
      const response = await fetch(`/api/paypal/${action}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: action === "checkout" ? JSON.stringify({ interval }) : undefined,
      });

      if (response.status === 401 && unauthenticatedHref) {
        window.location.assign(unauthenticatedHref);
        return;
      }

      const raw = await response.text();
      let payload: { error?: string; url?: string } | null = null;
      try {
        payload = raw ? (JSON.parse(raw) as { error?: string; url?: string }) : null;
      } catch {
        payload = null;
      }

      if (!response.ok) {
        throw new Error(
          payload?.error ??
            (raw.trim().startsWith("<")
              ? "Checkout service returned an error page. Check server logs and env vars."
              : raw.trim() || "Unable to open PayPal billing."),
        );
      }

      if (!payload?.url) {
        throw new Error("PayPal did not return a redirect URL.");
      }

      window.location.assign(payload.url);
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Unable to open PayPal billing.");
    } finally {
      setPending(false);
    }
  }

  return (
    <button
      type="button"
      className={className}
      onClick={handleClick}
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
