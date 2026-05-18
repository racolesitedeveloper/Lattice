import { redirect } from "next/navigation";
import { Suspense } from "react";
import { getAuthProfile, getAuthUser } from "@/lib/auth/session";
import AppDeferredWidgets from "@/components/app/AppDeferredWidgets";
import ProfileProvider from "@/components/app/ProfileProvider";
import AppSidebar from "@/components/app/AppSidebar";
import NavigationLoadingGate from "@/components/app/NavigationLoadingGate";
import StudyStateBridge from "@/components/app/StudyStateBridge";
import { normalizeBillingPlan } from "@/lib/entitlements";
import s from "./app.module.css";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const user = await getAuthUser();
  const profile = await getAuthProfile();
  if (!user) redirect("/login");

  if (!profile?.onboarding_completed) redirect("/onboarding");

  const plan = normalizeBillingPlan(profile.plan);
  const initialStudyKv =
    profile.study_kv && typeof profile.study_kv === "object" && !Array.isArray(profile.study_kv)
      ? (profile.study_kv as Record<string, unknown>)
      : null;

  return (
    <StudyStateBridge initialKv={initialStudyKv}>
      <ProfileProvider plan={plan} userEmail={user.email ?? null}>
        <div className={s.shell}>
          <AppSidebar />
          <AppDeferredWidgets />
          <div className={s.main}>
            <Suspense fallback={null}>
              <NavigationLoadingGate>{children}</NavigationLoadingGate>
            </Suspense>
          </div>
        </div>
      </ProfileProvider>
    </StudyStateBridge>
  );
}
