import type { CourseOutline } from "./types";
import physicsOutline from "@/data/courses/physics-9702.json";
import chemistryOutline from "@/data/courses/chemistry-9701.json";
import biologyOutline from "@/data/courses/biology-9700.json";

export type NoteMetaIndex = Record<
  string,
  Record<string, { topicTitle: string; subtopicTitle: string }>
>;

function buildIndex(outline: CourseOutline): NoteMetaIndex[string] {
  const subtopics: NoteMetaIndex[string] = {};
  for (const topic of outline.topics) {
    for (const subtopic of topic.subtopics) {
      subtopics[subtopic.id] = {
        topicTitle: topic.title,
        subtopicTitle: subtopic.title,
      };
    }
  }
  return subtopics;
}

/** Precomputed at module load — avoids three dynamic JSON imports on every dashboard visit. */
export const NOTE_META_INDEX: NoteMetaIndex = {
  physics: buildIndex(physicsOutline as CourseOutline),
  chemistry: buildIndex(chemistryOutline as CourseOutline),
  biology: buildIndex(biologyOutline as CourseOutline),
};
