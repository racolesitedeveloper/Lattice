export type PayPalBillingInterval = "monthly" | "yearly";

type PayPalEnvironment = "sandbox" | "live";

type PayPalAccessTokenResponse = {
  access_token: string;
  expires_in: number;
};

type PayPalLink = {
  href: string;
  rel: string;
  method?: string;
};

export type PayPalSubscription = {
  id: string;
  plan_id: string;
  status: "APPROVAL_PENDING" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "CANCELLED" | "EXPIRED";
  custom_id?: string;
  subscriber?: {
    payer_id?: string;
    email_address?: string;
  };
  billing_info?: {
    next_billing_time?: string;
  };
  links?: PayPalLink[];
};

export type PayPalWebhookEvent = {
  id: string;
  event_type: string;
  resource: PayPalSubscription & Record<string, unknown>;
};

let cachedToken: { token: string; expiresAt: number } | null = null;

function requireServerEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required server environment variable: ${name}`);
  }
  return value;
}

export function getAppUrl(): string {
  const appUrl = process.env.APP_URL;
  if (!appUrl && process.env.NODE_ENV === "production") {
    throw new Error("Missing required server environment variable: APP_URL");
  }
  const normalized = (appUrl || "http://localhost:3000").replace(/\/+$/, "");
  const parsed = new URL(normalized);
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new Error("APP_URL must be an HTTP(S) URL");
  }
  return normalized;
}

export function getPayPalEnvironment(): PayPalEnvironment {
  return process.env.PAYPAL_ENV === "live" ? "live" : "sandbox";
}

export function getPayPalBaseUrl(): string {
  return getPayPalEnvironment() === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";
}

export function getPayPalWebBaseUrl(): string {
  return getPayPalEnvironment() === "live"
    ? "https://www.paypal.com"
    : "https://www.sandbox.paypal.com";
}

export function getPayPalPlanId(interval: PayPalBillingInterval): string {
  return requireServerEnv(interval === "monthly" ? "PAYPAL_MONTHLY_PLAN_ID" : "PAYPAL_YEARLY_PLAN_ID");
}

export function getPayPalWebhookId(): string {
  return requireServerEnv("PAYPAL_WEBHOOK_ID");
}

export function getPayPalIntervalForPlan(planId: string): PayPalBillingInterval | null {
  if (planId === process.env.PAYPAL_MONTHLY_PLAN_ID) return "monthly";
  if (planId === process.env.PAYPAL_YEARLY_PLAN_ID) return "yearly";
  return null;
}

export async function createPayPalSubscription({
  userId,
  email,
  interval,
}: {
  userId: string;
  email?: string;
  interval: PayPalBillingInterval;
}): Promise<PayPalSubscription> {
  return paypalRequest<PayPalSubscription>("/v1/billing/subscriptions", {
    method: "POST",
    body: JSON.stringify({
      plan_id: getPayPalPlanId(interval),
      custom_id: userId,
      subscriber: email ? { email_address: email } : undefined,
      application_context: {
        brand_name: "Lattice",
        locale: "en-US",
        shipping_preference: "NO_SHIPPING",
        user_action: "SUBSCRIBE_NOW",
        return_url: `${getAppUrl()}/dashboard?checkout=success`,
        cancel_url: `${getAppUrl()}/?checkout=cancelled`,
      },
    }),
  });
}

export async function getPayPalSubscription(subscriptionId: string): Promise<PayPalSubscription> {
  return paypalRequest<PayPalSubscription>(`/v1/billing/subscriptions/${subscriptionId}`);
}

export async function verifyPayPalWebhook({
  body,
  headers,
}: {
  body: PayPalWebhookEvent;
  headers: Headers;
}): Promise<boolean> {
  const result = await paypalRequest<{ verification_status: "SUCCESS" | "FAILURE" }>(
    "/v1/notifications/verify-webhook-signature",
    {
      method: "POST",
      body: JSON.stringify({
        auth_algo: headers.get("paypal-auth-algo"),
        cert_url: headers.get("paypal-cert-url"),
        transmission_id: headers.get("paypal-transmission-id"),
        transmission_sig: headers.get("paypal-transmission-sig"),
        transmission_time: headers.get("paypal-transmission-time"),
        webhook_id: getPayPalWebhookId(),
        webhook_event: body,
      }),
    },
  );

  return result.verification_status === "SUCCESS";
}

async function getPayPalAccessToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) {
    return cachedToken.token;
  }

  const clientId = requireServerEnv("PAYPAL_CLIENT_ID");
  const clientSecret = requireServerEnv("PAYPAL_CLIENT_SECRET");
  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const response = await fetch(`${getPayPalBaseUrl()}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    throw new Error(await getPayPalErrorMessage(response, "Unable to authenticate with PayPal."));
  }

  const payload = (await response.json()) as PayPalAccessTokenResponse;
  cachedToken = {
    token: payload.access_token,
    expiresAt: Date.now() + payload.expires_in * 1000,
  };

  return payload.access_token;
}

async function paypalRequest<T>(path: string, init: RequestInit = {}): Promise<T> {
  const token = await getPayPalAccessToken();
  const response = await fetch(`${getPayPalBaseUrl()}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  });

  if (!response.ok) {
    throw new Error(await getPayPalErrorMessage(response, "PayPal request failed."));
  }

  return (await response.json()) as T;
}

async function getPayPalErrorMessage(response: Response, fallback: string): Promise<string> {
  const text = await response.text();
  if (!text) return fallback;
  try {
    const payload = JSON.parse(text) as { message?: string; details?: Array<{ description?: string }> };
    return payload.details?.[0]?.description ?? payload.message ?? fallback;
  } catch {
    return text;
  }
}
