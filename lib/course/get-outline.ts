import type { CourseOutline } from "./types";

const OUTLINE_LOADERS: Record<string, () => Promise<CourseOutline>> = {
  physics: async () => (await import("@/data/courses/physics-9702.json")).default as CourseOutline,
  chemistry: async () => (await import("@/data/courses/chemistry-9701.json")).default as CourseOutline,
  biology: async () => (await import("@/data/courses/biology-9700.json")).default as CourseOutline,
};

export async function getCourseOutline(subject: string): Promise<CourseOutline | null> {
  const load = OUTLINE_LOADERS[subject.toLowerCase()];
  return load ? load() : null;
}
