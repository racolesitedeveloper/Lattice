import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import UpgradeRequired from "@/components/app/UpgradeRequired";
import { normalizeBillingPlan } from "@/lib/entitlements";
import s from "./subscribe.module.css";

export const metadata = {
  title: "Upgrade — Lattice",
};

export default async function SubscribePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("onboarding_completed, plan")
    .eq("id", user.id)
    .single();

  if (!profile?.onboarding_completed) redirect("/onboarding");
  if (normalizeBillingPlan(profile.plan) === "full") redirect("/dashboard");

  return (
    <div className={s.page}>
      <main className={s.main}>
        <UpgradeRequired
          title="Upgrade to full access"
          message="Every subtopic, mistakes archive, and all three subjects. Pick a billing cycle below, then complete checkout in PayPal."
        />
      </main>
    </div>
  );
}
