"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { loadPayPalJsSdk } from "@/lib/paypal/load-browser-sdk";

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
  children?: ReactNode;
  pendingLabel: string;
  interval?: BillingInterval;
  unauthenticatedHref?: string;
}) {
  const [pending, setPending] = useState(false);
  const paypalContainerRef = useRef<HTMLDivElement>(null);
  const paypalButtonsRef = useRef<ReturnType<NonNullable<Window["paypal"]>["Buttons"]> | null>(null);
  const [checkoutPhase, setCheckoutPhase] = useState<"idle" | "loading_sdk" | "ready" | "error">(() =>
    action === "checkout" ? "loading_sdk" : "idle",
  );
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  useEffect(() => {
    if (action !== "checkout") {
      return;
    }

    const container = paypalContainerRef.current;
    if (!container) {
      return;
    }

    let cancelled = false;

    setCheckoutPhase("loading_sdk");
    setCheckoutError(null);

    (async () => {
      try {
        const paypal = await loadPayPalJsSdk();
        if (cancelled || !paypalContainerRef.current) {
          return;
        }

        const buttons = paypal.Buttons({
          style: {
            layout: "vertical",
            label: "subscribe",
            shape: "rect",
          },
          createSubscription: () =>
            fetch("/api/paypal/checkout", {
              method: "POST",
              credentials: "same-origin",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ interval }),
            }).then(async (response) => {
              if (response.status === 401 && unauthenticatedHref) {
                window.location.assign(unauthenticatedHref);
                throw new Error("unauthenticated");
              }
              const raw = await response.text();
              let payload: { error?: string; subscriptionId?: string } | null = null;
              try {
                payload = raw ? (JSON.parse(raw) as { error?: string; subscriptionId?: string }) : null;
              } catch {
                payload = null;
              }
              if (!response.ok) {
                throw new Error(
                  payload?.error ??
                    (raw.trim().startsWith("<")
                      ? "Checkout service returned an error page."
                      : raw.trim() || "Unable to start PayPal subscription."),
                );
              }
              if (!payload?.subscriptionId) {
                throw new Error("PayPal did not return a subscription id.");
              }
              return payload.subscriptionId;
            }),
          onApprove: (data: { subscriptionID?: string }) => {
            const id = data.subscriptionID;
            const next = id
              ? `/dashboard?checkout=success&subscription_id=${encodeURIComponent(id)}`
              : "/dashboard?checkout=success";
            window.location.assign(next);
          },
          onError: (err: unknown) => {
            console.error("PayPal subscription error", err);
            window.alert("PayPal could not complete checkout. You have not been charged.");
          },
          onCancel: () => {},
        });

        paypalButtonsRef.current = buttons;
        await buttons.render(container);
        if (!cancelled) {
          setCheckoutPhase("ready");
        }
      } catch (error) {
        if (cancelled || (error instanceof Error && error.message === "unauthenticated")) {
          return;
        }
        const message =
          error instanceof Error ? error.message : "Unable to load PayPal checkout.";
        setCheckoutError(message);
        setCheckoutPhase("error");
      }
    })();

    return () => {
      cancelled = true;
      paypalButtonsRef.current?.close();
      paypalButtonsRef.current = null;
      container.replaceChildren();
    };
  }, [action, interval, unauthenticatedHref]);

  async function handlePortalClick() {
    setPending(true);

    try {
      const response = await fetch(`/api/paypal/${action}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
              ? "Billing service returned an error page. Check server logs and env vars."
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

  if (action === "checkout") {
    return (
      <div className={className}>
        {checkoutPhase === "loading_sdk" && (
          <p aria-live="polite">
            {pendingLabel}
          </p>
        )}
        {checkoutPhase === "error" && checkoutError && (
          <p role="alert">
            {checkoutError}
          </p>
        )}
        <div ref={paypalContainerRef} />
      </div>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={handlePortalClick}
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
