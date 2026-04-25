import Link from "next/link";
import {
  BookOpen,
  CaretDown,
  ClipboardText,
  Lightbulb,
  Warning,
} from "@phosphor-icons/react/ssr";
import type { NoteDraft, NoteMeta, NoteSection, SelfTestItem, WorkedExample } from "@/lib/notes/types";
import a from "./note.module.css";
import NoteArticleShell from "./NoteArticleShell";

type Props = {
  meta: NoteMeta;
  draft: NoteDraft | null;
  subject: string;
  prevId: string | null;
  nextId: string | null;
};

function SectionBody({ sec }: { sec: NoteSection }) {
  return (
    <>
      {sec.paragraphs.map((p, i) => (
        <p key={i} className={a.bodyP}>
          {p}
        </p>
      ))}
      {sec.bullets && sec.bullets.length > 0 ? (
        <ul className={a.bodyList}>
          {sec.bullets.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

function SyllabusBlock({ sec }: { sec: NoteSection }) {
  return (
    <details id={sec.id} className={a.syDetails} open>
      <summary className={a.sySummary}>
        <CaretDown className={a.syChevron} size={18} weight="bold" aria-hidden />
        <h3 className={a.sySummaryText}>{sec.title}</h3>
      </summary>
      <div className={a.syPanel}>
        <div className={a.bodyProse}>
          <SectionBody sec={sec} />
        </div>
      </div>
    </details>
  );
}

function WorkedExampleBlock({ ex, index }: { ex: WorkedExample; index: number }) {
  return (
    <div className={a.exampleCard}>
      <div className={a.exampleAccent} aria-hidden />
      <h3 className={a.exampleTitle}>
        <span className={a.exampleIndex}>{index + 1}</span>
        {ex.title}
      </h3>
      <div className={a.examplePart}>
        <p className={a.exampleLabel}>Problem</p>
        {ex.problem.map((p, i) => (
          <p key={i} className={a.bodyP}>
            {p}
          </p>
        ))}
      </div>
      <div className={a.examplePart}>
        <p className={a.exampleLabel}>Solution</p>
        <div className={a.bodyProse}>
          {ex.solution.map((p, i) => (
            <p key={i} className={a.bodyP}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function SelfTestBlock({ item }: { item: SelfTestItem }) {
  return (
    <li className={a.selfTestItem}>
      <div className={a.selfTestCard}>
        <p className={a.selfTestQ}>{item.question}</p>
        <details className={a.reveal}>
          <summary className={a.revealSummary}>
            <span className={a.revealChevron} aria-hidden>
              ▸
            </span>
            Reveal model answer
          </summary>
          <div className={a.revealBody}>
            {item.modelAnswer.map((line, i) => (
              <p key={i} className={a.bodyP}>
                {line}
              </p>
            ))}
          </div>
        </details>
      </div>
    </li>
  );
}

export default function NoteArticle({ meta, draft, subject, prevId, nextId }: Props) {
  return (
    <NoteArticleShell showSectionNav={!!draft}>
      <article className={a.article}>
        <header className={a.articleHeader}>
          {draft?.eyebrow ? <p className={a.kicker}>{draft.eyebrow}</p> : null}
          <p className={a.metaRow}>
            {meta.syllabusCode} · Topic {meta.topicNumber} · {meta.subtopicCode}
          </p>
          <h1 className={a.title}>{meta.subtopicTitle}</h1>
          <p className={a.topicLine}>{meta.topicTitle}</p>
        </header>

        {draft ? (
          <>
            <section className={a.majorSection} aria-labelledby="syllabus-heading">
              <div className={a.majorSurface}>
                <h2 id="syllabus-heading" className={a.majorHeading}>
                  <BookOpen className={a.majorIcon} size={22} weight="regular" aria-hidden />
                  Syllabus-aligned notes
                </h2>
                <p className={a.majorLead}>
                  Expand or collapse each block as you read. Your position in the note is tracked at
                  the top — use <strong>Jump to</strong> to move between major sections.
                </p>
                <div className={a.syStack}>
                  {draft.syllabusNotes.map((sec) => (
                    <SyllabusBlock key={sec.id} sec={sec} />
                  ))}
                </div>
              </div>
            </section>

            <section className={a.majorSection} aria-labelledby="worked-heading">
              <div className={a.majorSurface}>
                <h2 id="worked-heading" className={a.majorHeading}>
                  <Lightbulb className={a.majorIcon} size={22} weight="regular" aria-hidden />
                  Worked examples
                </h2>
                <div className={a.examplesStack}>
                  {draft.workedExamples.map((ex, i) => (
                    <WorkedExampleBlock key={ex.id} ex={ex} index={i} />
                  ))}
                </div>
              </div>
            </section>

            <section className={a.majorSection} aria-labelledby="pitfalls-heading">
              <div className={`${a.majorSurface} ${a.majorSurfacePitfalls}`}>
                <h2 id="pitfalls-heading" className={a.majorHeading}>
                  <Warning
                    className={`${a.majorIcon} ${a.majorIconPitfalls}`}
                    size={22}
                    weight="regular"
                    aria-hidden
                  />
                  Examiner pitfalls
                </h2>
                <div className={a.pitfallsPanel}>
                  {draft.examinerPitfalls.intro ? (
                    <p className={a.pitfallsIntro}>{draft.examinerPitfalls.intro}</p>
                  ) : null}
                  <ul className={a.pitfallsList}>
                    {draft.examinerPitfalls.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className={a.majorSection} aria-labelledby="selftest-heading">
              <div className={a.majorSurface}>
                <h2 id="selftest-heading" className={a.majorHeading}>
                  <ClipboardText className={a.majorIcon} size={22} weight="regular" aria-hidden />
                  Self-test
                </h2>
                <p className={a.majorLeadMuted}>
                  Try each question before revealing the model answer.
                </p>
                <ol className={a.selfTestList}>
                  {draft.selfTest.map((item) => (
                    <SelfTestBlock key={item.id} item={item} />
                  ))}
                </ol>
              </div>
            </section>
          </>
        ) : (
          <div className={a.placeholder}>
            <p className={a.placeholderP}>
              Notes for this section are not published yet. This shell matches the layout that will
              carry the full write-up.
            </p>
          </div>
        )}

        <nav className={a.navRow} aria-label="Adjacent sections">
          {prevId ? (
            <Link className={a.navLink} href={`/${subject}/notes/${prevId}`} prefetch>
              ← Previous
            </Link>
          ) : (
            <span className={a.navLinkMuted}>← Previous</span>
          )}
          {nextId ? (
            <Link className={a.navLink} href={`/${subject}/notes/${nextId}`} prefetch>
              Next →
            </Link>
          ) : (
            <span className={a.navLinkMuted}>Next →</span>
          )}
        </nav>
      </article>
    </NoteArticleShell>
  );
}
