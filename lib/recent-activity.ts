export type RecentActivityKind = "note" | "drill" | "flashcard";

export type RecentActivityItem = {
  kind: RecentActivityKind;
  href: string;
  title: string;
  subtitle: string;
  updatedAt: number;
};

const RECENT_KEYS: Record<RecentActivityKind, string> = {
  note: "lattice.recent.note:v1",
  drill: "lattice.recent.drill:v1",
  flashcard: "lattice.recent.flashcard:v1",
};

export function markRecentActivity(item: Omit<RecentActivityItem, "updatedAt">): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(RECENT_KEYS[item.kind], JSON.stringify({ ...item, updatedAt: Date.now() }));
}

export function readRecentActivities(): RecentActivityItem[] {
  if (typeof window === "undefined") return [];
  return (Object.keys(RECENT_KEYS) as RecentActivityKind[])
    .map((kind) => readRecentActivity(kind))
    .filter((item): item is RecentActivityItem => Boolean(item))
    .sort((a, b) => b.updatedAt - a.updatedAt);
}

function readRecentActivity(kind: RecentActivityKind): RecentActivityItem | null {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(RECENT_KEYS[kind]) ?? "null") as Partial<RecentActivityItem> | null;
    if (
      !parsed ||
      parsed.kind !== kind ||
      typeof parsed.href !== "string" ||
      !isInternalHref(parsed.href) ||
      typeof parsed.title !== "string" ||
      typeof parsed.subtitle !== "string" ||
      typeof parsed.updatedAt !== "number"
    ) {
      return null;
    }
    return parsed as RecentActivityItem;
  } catch {
    return null;
  }
}

function isInternalHref(href: string): boolean {
  return href.startsWith("/") && !href.startsWith("//") && !/[\r\n]/.test(href);
}
