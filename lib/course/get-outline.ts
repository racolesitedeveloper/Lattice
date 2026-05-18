import { cache } from "react";
import type { CourseOutline } from "./types";

const OUTLINE_LOADERS: Record<string, () => Promise<CourseOutline>> = {
  physics: async () => (await import("@/data/courses/physics-9702.json")).default as CourseOutline,
  chemistry: async () => (await import("@/data/courses/chemistry-9701.json")).default as CourseOutline,
  biology: async () => (await import("@/data/courses/biology-9700.json")).default as CourseOutline,
};

const outlineMemoryCache = new Map<string, CourseOutline>();

export const getCourseOutline = cache(async (subject: string): Promise<CourseOutline | null> => {
  const key = subject.toLowerCase();
  const cached = outlineMemoryCache.get(key);
  if (cached) return cached;

  const load = OUTLINE_LOADERS[key];
  if (!load) return null;

  const outline = await load();
  outlineMemoryCache.set(key, outline);
  return outline;
});
