import { getCourseOutline } from "@/lib/course/get-outline";
import { getSubtopicPracticePack } from "@/lib/practice/get-practice";
import type { McqDrillQuestion } from "@/lib/practice/types";
import OnboardingFlow, { type OnboardingPreviewQuestion } from "./OnboardingFlow";

type Subject = "physics" | "chemistry" | "biology";

const SUBJECTS: Array<{ id: Subject; label: string }> = [
  { id: "physics", label: "Physics" },
  { id: "chemistry", label: "Chemistry" },
  { id: "biology", label: "Biology" },
];

export default async function OnboardingPage() {
  const previewQuestions = await Promise.all(SUBJECTS.map(loadPreviewQuestion));
  return <OnboardingFlow previewQuestions={previewQuestions.filter(Boolean) as OnboardingPreviewQuestion[]} />;
}

async function loadPreviewQuestion(subject: { id: Subject; label: string }): Promise<OnboardingPreviewQuestion | null> {
  const pack = await getSubtopicPracticePack(subject.id, "t1-1");
  const question = pack?.drills.find((item): item is McqDrillQuestion => item.kind === "mcq") ?? null;
  if (!pack || !question) return null;

  const outline = await getCourseOutline(subject.id);
  const topic = outline?.topics.find((item) => item.subtopics.some((subtopic) => subtopic.id === pack.noteId));
  const subtopic = topic?.subtopics.find((item) => item.id === pack.noteId);

  return {
    subject: subject.id,
    subjectLabel: subject.label,
    noteId: pack.noteId,
    topicTitle: topic?.title ?? "Topic 1",
    subtopicTitle: subtopic?.title ?? pack.noteId,
    subtopicCode: subtopic?.code ?? "1.1",
    question,
  };
}
