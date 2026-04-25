import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getPayPalWebBaseUrl } from "@/lib/paypal";

export const runtime = "nodejs";

export async function POST() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "You must be signed in to manage billing." }, { status: 401 });
  }

  return NextResponse.json({ url: `${getPayPalWebBaseUrl()}/myaccount/autopay/` });
}
