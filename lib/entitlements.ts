export type BillingPlan = "free" | "full";

export const FREE_TOPIC_LIMIT = 3;

export function normalizeBillingPlan(plan: unknown): BillingPlan {
  return plan === "full" ? "full" : "free";
}

export function topicNumberFromNoteId(noteId: string): number | null {
  const match = /^t(\d+)-\d+$/i.exec(noteId.trim().replace(/\u2011/g, "-"));
  return match ? Number(match[1]) : null;
}

export function isFreeTopicNumber(topicNumber: number): boolean {
  return topicNumber >= 1 && topicNumber <= FREE_TOPIC_LIMIT;
}

export function canAccessTopic(plan: BillingPlan, topicNumber: number): boolean {
  return plan === "full" || isFreeTopicNumber(topicNumber);
}

export function canAccessNoteId(plan: BillingPlan, noteId: string): boolean {
  const topicNumber = topicNumberFromNoteId(noteId);
  return topicNumber !== null && canAccessTopic(plan, topicNumber);
}

export function canAccessArchive(plan: BillingPlan): boolean {
  return plan === "full";
}
