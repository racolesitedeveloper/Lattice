"use server";

import { createClient } from "@/lib/supabase/server";

export async function persistStudyStateAction(kv: Record<string, string>): Promise<void> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  const payload: Record<string, string> = {};
  for (const [k, v] of Object.entries(kv)) {
    if (typeof v === "string") payload[k] = v;
  }

  const { error } = await supabase.from("profiles").update({ study_kv: payload }).eq("id", user.id);
  if (error) {
    console.error("persistStudyStateAction", error.message);
  }
}
