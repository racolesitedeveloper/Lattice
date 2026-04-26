import { redirect } from "next/navigation";
import { cache } from "react";
import { createClient } from "@/lib/supabase/server";
import ProfileProvider from "@/components/app/ProfileProvider";
import AppSidebar from "@/components/app/AppSidebar";
import NavigationWarmup from "@/components/app/NavigationWarmup";
import StudyStateBridge from "@/components/app/StudyStateBridge";
import StudyTimeTracker from "@/components/app/StudyTimeTracker";
import { normalizeBillingPlan } from "@/lib/entitlements";
import s from "./app.module.css";

const getAppSessionProfile = cache(async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { user: null, profile: null };

  const { data: profile } = await supabase
    .from("profiles")
    .select("onboarding_completed, plan, study_kv")
    .eq("id", user.id)
    .single();

  return { user, profile };
});

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const { user, profile } = await getAppSessionProfile();
  if (!user) redirect("/login");

  if (!profile?.onboarding_completed) redirect("/onboarding");

  const plan = normalizeBillingPlan(profile.plan);
  const initialStudyKv =
    profile.study_kv && typeof profile.study_kv === "object" && !Array.isArray(profile.study_kv)
      ? (profile.study_kv as Record<string, unknown>)
      : null;

  return (
    <StudyStateBridge initialKv={initialStudyKv}>
      <ProfileProvider plan={plan}>
        <div className={s.shell}>
          <AppSidebar />
          <NavigationWarmup />
          <StudyTimeTracker />
          <div className={s.main}>{children}</div>
        </div>
      </ProfileProvider>
    </StudyStateBridge>
  );
}
