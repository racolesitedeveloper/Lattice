import {
  CreditCard,
  Gift,
  MagnifyingGlass,
  SealCheck,
} from "@phosphor-icons/react/ssr";
import s from "./LandingStory.module.css";

const BEATS = [
  {
    index: "01",
    title: "Map what is left",
    copy: "Every course is broken into topics and subtopics you can tick off as you go. You always see what is finished, what is in progress, and what is still untouched — in our own structure, not a pasted exam-board PDF.",
    visual: "notes" as const,
  },
  {
    index: "02",
    title: "Drill in exam register",
    copy: "Practice packs sit on the same subtopics as the notes. Questions are written for A Level wording and mark-scheme shape — not generic multiple choice from a content farm.",
    visual: "drill" as const,
  },
  {
    index: "03",
    title: "Retry what actually broke you",
    copy: "Miss a question and it lands in your mistakes archive automatically. Filter by topic before an exam and clear the list for real — nothing you miss in October disappears by May.",
    visual: "archive" as const,
  },
] as const;

const FAQ = [
  {
    tag: "Independence",
    icon: SealCheck,
    q: "Is Lattice an official Cambridge product?",
    a: "No. It is independent material aligned to Cambridge International A Level Physics (9702), Chemistry (9701), and Biology (9700). It does not reproduce proprietary exam papers verbatim.",
  },
  {
    tag: "Free tier",
    icon: Gift,
    q: "What does the free tier include?",
    a: "You can work through the first three topics in each subject without paying. Upgrade unlocks the full topic map and every drill pack.",
  },
  {
    tag: "Billing",
    icon: CreditCard,
    q: "Do I need a card to try it?",
    a: "No card is required to start. Billing only applies if you choose full access.",
  },
] as const;

function NotesPreview() {
  return (
    <figure className={s.preview} aria-hidden>
      <div className={s.previewPad}>
        <div className={s.searchWrap}>
          <div className={s.searchInner}>
            <MagnifyingGlass className={s.searchIcon} size={18} weight="regular" aria-hidden />
            <span className={s.searchPlaceholder}>Search topics and subtopics…</span>
          </div>
        </div>
        <div className={s.levelToggle} role="presentation">
          <span className={`${s.levelBtn} ${s.levelBtnOn}`}>All</span>
          <span className={s.levelBtn}>AS Level</span>
          <span className={s.levelBtn}>A Level</span>
        </div>
        <p className={s.levelHint}>Topics 1–11 align with AS; 12+ with A Level for 9700.</p>
        <div className={s.levelSection}>
          <h4 className={s.sectionTitle}>AS Level</h4>
          <ul className={s.topicList}>
            <li>
              <details className={s.topic}>
                <summary>
                  <span className={s.topicNum}>1</span>
                  <span>Cell structure</span>
                </summary>
              </details>
            </li>
            <li>
              <details className={`${s.topic} ${s.topicOpen}`} open>
                <summary>
                  <span className={s.topicNum}>2</span>
                  <span>Biological molecules</span>
                </summary>
                <ul className={s.subtopicList}>
                  <li className={s.subtopic}>
                    <span className={s.subtopicLink}>
                      <span className={s.code}>2.1</span>
                      <span className={s.subtopicTitle}>Testing for biological molecules</span>
                    </span>
                  </li>
                  <li className={s.subtopic}>
                    <span className={`${s.subtopicLink} ${s.subtopicLinkHover}`}>
                      <span className={s.code}>2.2</span>
                      <span className={s.subtopicTitle}>Carbohydrates and lipids</span>
                    </span>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </figure>
  );
}

function DrillPreview() {
  return (
    <figure className={s.preview} aria-hidden>
      <div className={s.previewPad}>
        <div className={s.contextStrip}>
          <p className={s.sessionLabel}>Practice session</p>
          <div className={s.contextMain}>
            <div className={s.segmented} role="presentation">
              <span className={`${s.segmentedBtn} ${s.segmentedOn}`}>Drills</span>
              <span className={s.segmentedBtn}>Flashcards</span>
            </div>
            <div className={s.progressCluster}>
              <span className={s.progressFrac}>
                <span className={s.tabular}>04</span>
                <span className={s.progressSep}>/</span>
                <span className={s.tabular}>10</span>
              </span>
              <div className={s.progressTrack} aria-hidden>
                <div className={s.progressFill} style={{ width: "40%" }} />
              </div>
              <span className={s.progressPct}>
                <span className={s.tabular}>40</span>%
              </span>
            </div>
          </div>
        </div>
        <div className={s.stepStrip} role="presentation">
          <span className={`${s.stepBtn} ${s.stepDone}`}>01</span>
          <span className={`${s.stepBtn} ${s.stepDone}`}>02</span>
          <span className={`${s.stepBtn} ${s.stepDone}`}>03</span>
          <span className={`${s.stepBtn} ${s.stepCurrent}`}>04</span>
          <span className={s.stepBtn}>05</span>
          <span className={s.stepBtn}>06</span>
        </div>
        <div className={s.focusPanel}>
          <header className={s.itemHeader}>
            <p className={s.itemEyebrow}>Question</p>
            <div className={s.itemTitleRow}>
              <h4 className={s.itemHeading}>Multiple-choice</h4>
              <span className={s.itemIndex}>04</span>
            </div>
            <p className={s.itemMeta}>Multiple-choice · Difficulty 1</p>
          </header>
          <div className={s.stemBlock}>
            <p className={s.stem}>
              A cyclist starts from rest and accelerates uniformly at 1.8 m s⁻² for 6.0 s. What is the
              cyclist&apos;s final velocity?
            </p>
          </div>
          <div className={s.actionBlock}>
            <ul className={s.optionList}>
              <li>
                <div className={s.optionRow}>
                  <span className={s.optionKey}>A</span>
                  <span className={s.optionText}>10.8 m s⁻¹</span>
                </div>
              </li>
              <li>
                <div className={`${s.optionRow} ${s.optionRowSelected}`}>
                  <span className={s.optionKey}>B</span>
                  <span className={s.optionText}>5.4 m s⁻¹</span>
                </div>
              </li>
              <li>
                <div className={s.optionRow}>
                  <span className={s.optionKey}>C</span>
                  <span className={s.optionText}>7.8 m s⁻¹</span>
                </div>
              </li>
            </ul>
            <div className={s.primaryRow}>
              <span className={s.primaryBtn}>Check answer</span>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

function ArchivePreview() {
  return (
    <figure className={s.preview} aria-hidden>
      <div className={s.previewPad}>
        <header className={s.archiveIntro}>
          <p className={s.archiveKicker}>Local archive</p>
          <p className={s.archiveSummary}>
            <span className={s.tabular}>3</span> archived mistakes
          </p>
        </header>
        <div className={s.table}>
          <div className={s.tableHead}>
            <span>Type</span>
            <span>Subtopic</span>
            <span>Question</span>
            <span>Last seen</span>
            <span>Actions</span>
          </div>
          <article className={s.tableRow}>
            <div className={s.rowMain}>
              <div className={s.rowType}>
                <span className={s.reason}>Missed MCQ</span>
                <span>MCQ</span>
              </div>
              <div className={s.rowSubtopic}>
                <span>6.1 · Structure of nucleic acids and replication of DNA</span>
                <span>Difficulty 2</span>
              </div>
              <p className={s.questionLine}>
                Which statement best describes the primary mode of action of penicillin…
              </p>
              <div className={s.rowSeen}>
                <span>May 12</span>
              </div>
              <div className={s.rowActions}>
                <span className={s.detailBtn}>Details</span>
                <span className={s.retryLink}>Retry</span>
              </div>
            </div>
          </article>
          <article className={s.tableRow}>
            <div className={s.rowMain}>
              <div className={s.rowType}>
                <span className={s.reason}>Needs practice</span>
                <span>3 marks</span>
              </div>
              <div className={s.rowSubtopic}>
                <span>2.1 · Equations of motion</span>
                <span>Difficulty 3</span>
              </div>
              <p className={s.questionLine}>
                A stone is thrown vertically upward at 18.0 m s⁻¹. Find the maximum height…
              </p>
              <div className={s.rowSeen}>
                <span>May 10</span>
                <span className={s.repeatBadge}>Repeated</span>
              </div>
              <div className={s.rowActions}>
                <span className={s.detailBtn}>Details</span>
                <span className={s.retryLink}>Retry</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </figure>
  );
}

function FeatureVisual({ kind }: { kind: (typeof BEATS)[number]["visual"] }) {
  if (kind === "notes") return <NotesPreview />;
  if (kind === "drill") return <DrillPreview />;
  return <ArchivePreview />;
}

export default function LandingStory() {
  return (
    <section
      id="revision-path"
      className={s.section}
      aria-labelledby="revision-heading"
    >
      <div className={s.storyBlock}>
        <header className={s.intro}>
          <p className={s.eyebrow}>When mocks are close</p>
          <div className={s.introGrid}>
            <h2 className={s.sectionHead} id="revision-heading">
              How the workspace stays organised as you go.
            </h2>
            <p className={s.sectionSub}>
              Lattice is independent study material for Cambridge International A Level — not an
              official exam-board product, and not a random question bank. Physics, Chemistry, and
              Biology live in one workspace so you are not rebuilding the same system in three
              different tabs every week.
            </p>
          </div>
        </header>

        <ol className={s.features}>
          {BEATS.map((beat, i) => (
            <li
              key={beat.index}
              className={`${s.featureRow} ${i % 2 === 1 ? s.featureRowFlip : ""}`}
            >
              <div className={s.featureCopy}>
                <span className={s.featureIndex} aria-hidden>
                  {beat.index}
                </span>
                <h3 className={s.featureTitle}>{beat.title}</h3>
                <p className={s.featureText}>{beat.copy}</p>
              </div>
              <FeatureVisual kind={beat.visual} />
            </li>
          ))}
        </ol>
      </div>

      <aside className={s.faqBlock} aria-labelledby="revision-faq">
        <div className={s.faqInner}>
          <header className={s.faqHeader}>
            <div className={s.faqHeaderMain}>
              <p className={s.faqEyebrow}>Before you sign up</p>
              <h3 className={s.faqHeading} id="revision-faq">
                Straight answers
              </h3>
            </div>
            <p className={s.faqLead}>
              The questions students ask first — answered plainly, with nothing buried in a footer.
            </p>
          </header>

          <dl className={s.faqPanel}>
              {FAQ.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.q} className={s.faqRow}>
                    <dt className={s.faqRowHead}>
                      <span className={s.faqIndex} aria-hidden>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={s.faqTag}>
                        <Icon className={s.faqTagIcon} size={14} weight="regular" aria-hidden />
                        {item.tag}
                      </span>
                      <span className={s.faqQ}>{item.q}</span>
                    </dt>
                    <dd className={s.faqA}>{item.a}</dd>
                  </div>
                );
              })}
          </dl>

          <p className={s.faqFoot}>
            Aligned to Cambridge International A Level{" "}
            <span className={s.faqFootCodes}>9702 · 9701 · 9700</span>
          </p>
        </div>
      </aside>
    </section>
  );
}
