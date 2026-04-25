"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

type ActionState = { error?: string; ok?: boolean } | null;

export async function updateExamPeriod(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const examPeriod = formData.get("examPeriod");
  if (examPeriod !== "may-june" && examPeriod !== "oct-nov") {
    return { error: "Choose an exam period." };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { error: "Your session expired. Please sign in again." };

  const { error } = await supabase
    .from("profiles")
    .update({ exam_period: examPeriod })
    .eq("id", user.id);

  if (error) return { error: "Could not save your exam period. Please try again." };

  revalidatePath("/dashboard");
  return { ok: true };
}
