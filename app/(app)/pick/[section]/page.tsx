import Link from "next/link";
import { notFound } from "next/navigation";
import type { Icon } from "@phosphor-icons/react/lib";
import { ArrowLeft, Atom, CaretRight, Dna, Flask } from "@phosphor-icons/react/ssr";
import { isAppSection, type AppSection } from "@/lib/app-sections";
import IntentPrefetchLink from "@/components/app/IntentPrefetchLink";
import s from "./pick.module.css";

type SubjectId = "physics" | "chemistry" | "biology";

const SUBJECT_ICON: Record<SubjectId, Icon> = {
  physics: Atom,
  chemistry: Flask,
  biology: Dna,
};

const SUBJECTS: {
  id: SubjectId;
  label: string;
  blurb: string;
  code: string;
  scope: string;
}[] = [
  {
    id: "physics",
    label: "Physics",
    blurb: "Mechanics, waves, electricity, fields, and thermal physics.",
    code: "9702",
    scope: "25 topics",
  },
  {
    id: "chemistry",
    label: "Chemistry",
    blurb: "Physical, organic, and inorganic — structured for exam depth.",
    code: "9701",
    scope: "37 topics",
  },
  {
    id: "biology",
    label: "Biology",
    blurb: "Cells, biochemistry, genetics, ecology, and physiology.",
    code: "9700",
    scope: "19 topics",
  },
];

const SECTION_HEADING: Record<AppSection, string> = {
  notes: "Notes",
  practice: "Drills",
  mistakes: "Archive",
};

const SECTION_COPY: Record<AppSection, { title: string; body: string; kicker: string }> = {
  notes: {
    title: "Choose a notes library",
    body: "Open long-form notes tied to each syllabus subtopic.",
    kicker: "Reading",
  },
  practice: {
    title: "Start drills",
    body: "Open drills and flashcards for one Cambridge International A Level subject.",
    kicker: "Drills",
  },
  mistakes: {
    title: "Review by subject",
    body: "Return to the question history and retry the answers that need work.",
    kicker: "Archive",
  },
};

export default async function PickSubjectPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  if (!isAppSection(section)) notFound();

  const heading = SECTION_HEADING[section];
  const copy = SECTION_COPY[section];

  return (
    <div className={s.page}>
      <div className={s.backdrop} aria-hidden />
      <div className={s.topBar}>
        <Link href="/dashboard" className={s.back}>
          <ArrowLeft className={s.backArrow} size={18} weight="regular" aria-hidden />
          Overview
        </Link>
      </div>

      <div className={s.centerStage}>
        <div className={s.sheet}>
          <div className={s.content}>
            <aside className={s.contextPanel} aria-label={`${heading} context`}>
              <span className={s.chip}>{heading}</span>
              <p className={s.kicker}>{copy.kicker}</p>
              <h1 className={s.title}>{copy.title}</h1>
              <p className={s.lede}>{copy.body}</p>
              <dl className={s.metaList}>
                <div className={s.metaRow}>
                  <dt>Subjects</dt>
                  <dd>Physics · Chemistry · Biology</dd>
                </div>
                <div className={s.metaRow}>
                  <dt>Qualification</dt>
                  <dd>Cambridge International A Level</dd>
                </div>
                <div className={s.metaRow}>
                  <dt>Navigation</dt>
                  <dd>Sidebar returns to your last page</dd>
                </div>
              </dl>
            </aside>

            <section
              className={s.selectorPanel}
              aria-labelledby="subject-picker-heading"
            >
              <div className={s.selectorHead}>
                <h2 id="subject-picker-heading" className={s.selectorTitle}>
                  Choose a subject
                </h2>
                <p className={s.selectorHint}>Three courses, one study shell.</p>
              </div>

              <ul className={s.subjectList}>
                {SUBJECTS.map((subj) => {
                  const Icon = SUBJECT_ICON[subj.id];
                  return (
                    <li key={subj.id} className={s.subjectItem}>
                      <IntentPrefetchLink
                        href={`/${subj.id}/${section}`}
                        className={`${s.subjectLink} ${s[`subject_${subj.id}`]}`}
                      >
                        <span className={s.glyph} aria-hidden>
                          <Icon className={s.glyphIcon} size={24} weight="regular" />
                        </span>
                        <span className={s.subjectCopy}>
                          <span className={s.subjectTopLine}>
                            <span className={s.subjectName}>{subj.label}</span>
                            <span className={s.subjectCode}>{subj.code}</span>
                          </span>
                          <span className={s.subjectBlurb}>{subj.blurb}</span>
                        </span>
                        <span className={s.subjectMeta}>{subj.scope}</span>
                        <CaretRight
                          className={s.cardArrow}
                          size={18}
                          weight="regular"
                          aria-hidden
                        />
                      </IntentPrefetchLink>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
