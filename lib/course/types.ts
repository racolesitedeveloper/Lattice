/** Lattice course outline — topic headings for navigation (not full LO text). */

export type CourseSubtopic = {
  id: string;
  code: string;
  title: string;
};

export type CourseTopic = {
  id: string;
  number: number;
  title: string;
  subtopics: CourseSubtopic[];
};

export type CourseOutline = {
  syllabusCode: string;
  qualificationTitle: string;
  examYears: string;
  sourceUrl: string;
  copyrightNote: string;
  /** Inclusive last topic number counted as AS Level (e.g. 11 for 9702 Physics, 22 for 9701 Chemistry). */
  asLastTopic: number;
  topics: CourseTopic[];
};
