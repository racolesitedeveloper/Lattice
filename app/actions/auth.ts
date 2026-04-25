"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function login(
  _prev: { error: string } | null,
  formData: FormData
): Promise<{ error: string }> {
  const email = stringField(formData, "email", { trim: true });
  const password = stringField(formData, "password");

  if (!email || !password) {
    return { error: "Enter your email and password." };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return { error: "Invalid email or password." };

  // Fetch onboarding state to decide where to land.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { error: "Authentication failed. Please try again." };

  const { data: profile } = await supabase
    .from("profiles")
    .select("onboarding_completed, default_subject")
    .eq("id", user.id)
    .single();

  if (!profile?.onboarding_completed) {
    redirect("/onboarding");
  }

  redirect("/dashboard");
}

export async function signup(
  _prev: { error: string } | null,
  formData: FormData
): Promise<{ error: string }> {
  const email = stringField(formData, "email", { trim: true });
  const password = stringField(formData, "password");

  if (!email || !password) {
    return { error: "Enter your email and password." };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) return { error: "Could not create that account. Check your details and try again." };

  // New users always go to onboarding; the trigger creates their profile row.
  redirect("/onboarding");
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/");
}

function stringField(formData: FormData, name: string, options?: { trim?: boolean }): string {
  const value = formData.get(name);
  if (typeof value !== "string") return "";
  return options?.trim ? value.trim() : value;
}
