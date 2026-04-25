"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function completeOnboarding(
  _prev: { error: string } | null,
  formData: FormData
): Promise<{ error: string }> {
  const subjects = normalizeSubjects(formData.getAll("subjects"));
  const level = formData.get("level") as string;
  const examPeriod = formData.get("examPeriod") as string;

  if (subjects.length === 0) {
    return { error: "Please select at least one subject to continue." };
  }

  if (level !== "as" && level !== "a2") {
    return { error: "Please choose AS or A2." };
  }

  if (!["may-june", "oct-nov"].includes(examPeriod)) {
    return { error: "Please choose your exam period." };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { error } = await supabase
    .from("profiles")
    .update({
      default_subject: subjects[0],
      selected_subjects: subjects,
      study_level: level,
      exam_period: examPeriod,
      onboarding_completed: true,
    })
    .eq("id", user.id);

  if (error) {
    console.error("Failed to complete onboarding profile update", error);
    return { error: "Something went wrong. Please try again." };
  }

  redirect("/dashboard");
}

function normalizeSubjects(values: FormDataEntryValue[]): Array<"physics" | "chemistry" | "biology"> {
  const allowed = new Set(["physics", "chemistry", "biology"]);
  const seen = new Set<string>();

  for (const value of values) {
    if (typeof value !== "string" || !allowed.has(value)) continue;
    seen.add(value);
  }

  return Array.from(seen) as Array<"physics" | "chemistry" | "biology">;
}
