import type { SupabaseClient } from "@supabase/supabase-js";

/**
 * After a session exists, match email/password flow: incomplete onboarding → onboarding, else dashboard.
 */
export async function getPostAuthPath(supabase: SupabaseClient): Promise<"/onboarding" | "/dashboard"> {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return "/onboarding";

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("onboarding_completed")
    .eq("id", user.id)
    .single();

  if (profileError || !profile?.onboarding_completed) return "/onboarding";
  return "/dashboard";
}

