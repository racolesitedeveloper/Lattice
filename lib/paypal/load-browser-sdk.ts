let loadPromise: Promise<NonNullable<Window["paypal"]>> | null = null;

/**
 * Loads PayPal's subscription-capable JS SDK (v5 script URL).
 * Billing Subscriptions API + in-context approval is documented for this loader, not for Web SDK v6 (Orders-focused).
 */
export function loadPayPalJsSdk(): Promise<NonNullable<Window["paypal"]>> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("PayPal SDK can only load in the browser."));
  }

  if (window.paypal) {
    return Promise.resolve(window.paypal);
  }

  if (!loadPromise) {
    loadPromise = new Promise((resolve, reject) => {
      const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
      if (!clientId) {
        loadPromise = null;
        reject(new Error("Missing NEXT_PUBLIC_PAYPAL_CLIENT_ID."));
        return;
      }

      const env = process.env.NEXT_PUBLIC_PAYPAL_ENV ?? "sandbox";
      const host = env === "live" ? "www.paypal.com" : "www.sandbox.paypal.com";
      const script = document.createElement("script");
      // Subscriptions: allow debit/credit (card). Keep PayPal Credit + pay-later off to limit button clutter in tight layouts.
      const disableFunding = encodeURIComponent("credit,paylater");
      script.src = `https://${host}/sdk/js?client-id=${encodeURIComponent(clientId)}&vault=true&intent=subscription&disable-funding=${disableFunding}`;
      script.async = true;
      script.onload = () => {
        if (window.paypal) {
          resolve(window.paypal);
        } else {
          loadPromise = null;
          reject(new Error("PayPal script loaded but window.paypal is missing."));
        }
      };
      script.onerror = () => {
        loadPromise = null;
        reject(new Error("Failed to load PayPal JavaScript SDK."));
      };
      document.head.appendChild(script);
    });
  }

  return loadPromise;
}
