import {
  BookOpen,
  ClockCounterClockwise,
  ListChecks,
  MagnifyingGlass,
  SquaresFour,
} from "@phosphor-icons/react/ssr";
import s from "./Hero.module.css";
import Logo from "@/components/ui/Logo";

export default function HeroPreviewStack() {
  return (
    <>
      <div className={s.layerBack} aria-hidden>
        <div className={s.backChrome}>
          <div className={s.backPad}>
            <div className={s.backSearch}>
              <MagnifyingGlass size={16} weight="regular" aria-hidden />
              <span>Search topics…</span>
            </div>
            <div className={s.backLevelToggle} role="presentation">
              <span className={`${s.backLevelBtn} ${s.backLevelOn}`}>All</span>
              <span className={s.backLevelBtn}>AS Level</span>
            </div>
            <details className={`${s.backTopic} ${s.backTopicOpen}`} open>
              <summary>
                <span className={s.backTopicNum}>2</span>
                <span>Biological molecules</span>
              </summary>
              <ul className={s.backSubList}>
                <li>
                  <span className={s.backSubLink}>
                    <span className={s.backCode}>2.1</span>
                    <span>Testing for biological molecules</span>
                  </span>
                </li>
                <li>
                  <span className={`${s.backSubLink} ${s.backSubOn}`}>
                    <span className={s.backCode}>2.2</span>
                    <span>Carbohydrates and lipids</span>
                  </span>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>

      <div className={s.layerMid} aria-hidden>
        <div className={s.midChrome}>
          <p className={s.midSessionLabel}>Practice session</p>
          <div className={s.midContext}>
            <div className={s.midSegmented} role="presentation">
              <span className={`${s.midSegBtn} ${s.midSegOn}`}>Drills</span>
              <span className={s.midSegBtn}>Flashcards</span>
            </div>
            <div className={s.midProgress}>
              <span className={s.midFrac}>
                <span className={s.tabular}>04</span>/<span className={s.tabular}>10</span>
              </span>
              <div className={s.midTrack} aria-hidden>
                <div className={s.midFill} />
              </div>
            </div>
          </div>
          <div className={s.midSteps} role="presentation">
            <span className={`${s.midStep} ${s.midStepDone}`}>01</span>
            <span className={`${s.midStep} ${s.midStepDone}`}>02</span>
            <span className={`${s.midStep} ${s.midStepDone}`}>03</span>
            <span className={`${s.midStep} ${s.midStepCurrent}`}>04</span>
          </div>
          <div className={s.midPanel}>
            <p className={s.midQMeta}>Multiple-choice · Difficulty 1</p>
            <p className={s.midStem}>
              A cyclist starts from rest and accelerates uniformly at 1.8 m s⁻² for 6.0 s. What is
              the cyclist&apos;s final velocity?
            </p>
            <div className={s.midOption}>
              <span className={s.midKey}>B</span>
              <span>5.4 m s⁻¹</span>
            </div>
            <span className={s.midCheck}>Check answer</span>
          </div>
        </div>
      </div>

      <div className={s.layerFront}>
        <div className={s.appPreview}>
          <aside className={s.previewSidebar}>
            <div className={s.previewBrand}>
              <Logo size={22} />
            </div>
            <nav className={s.previewNav} aria-label="Main">
              <div className={s.previewNavItem}>
                <SquaresFour className={s.previewNavIcon} size={18} weight="regular" aria-hidden />
                <span>Overview</span>
              </div>
              <span className={s.previewSectionLabel}>General</span>
              <div className={s.previewNavItem}>
                <BookOpen className={s.previewNavIcon} size={18} weight="regular" aria-hidden />
                <span>Notes</span>
              </div>
              <div className={s.previewNavItem}>
                <ListChecks className={s.previewNavIcon} size={18} weight="regular" aria-hidden />
                <span>Drills</span>
              </div>
              <div className={`${s.previewNavItem} ${s.previewNavOn}`}>
                <ClockCounterClockwise
                  className={s.previewNavIcon}
                  size={18}
                  weight="regular"
                  aria-hidden
                />
                <span>Archive</span>
              </div>
            </nav>
          </aside>

          <div className={s.previewMain}>
            <header className={s.previewTopBar}>
              <h2 className={s.previewViewTitle}>Archive</h2>
            </header>
            <div className={s.archiveScroll}>
              <div className={s.archiveIntro}>
                <p className={s.archiveKicker}>Local archive</p>
                <p className={s.archiveSummary}>
                  <span className={s.tabular}>3</span> archived mistakes
                </p>
              </div>
              <div className={s.archiveTable}>
                <div className={s.archiveTableHead}>
                  <span>Type</span>
                  <span>Subtopic</span>
                  <span>Question</span>
                  <span>Last seen</span>
                  <span>Actions</span>
                </div>
                <article className={s.archiveTableRow}>
                  <div className={s.rowMain}>
                    <div className={s.rowType}>
                      <span className={s.rowReason}>Missed MCQ</span>
                      <span>MCQ</span>
                    </div>
                    <div className={s.rowSubtopic}>
                      <span>6.1 · Structure of nucleic acids…</span>
                      <span>Difficulty 2</span>
                    </div>
                    <p className={s.rowQuestion}>
                      Which statement best describes the primary mode of action of penicillin…
                    </p>
                    <div className={s.rowSeen}>
                      <span>May 12</span>
                    </div>
                    <div className={s.rowActions}>
                      <span className={s.rowDetail}>Details</span>
                      <span className={s.rowRetry}>Retry</span>
                    </div>
                  </div>
                </article>
                <article className={s.archiveTableRow}>
                  <div className={s.rowMain}>
                    <div className={s.rowType}>
                      <span className={s.rowReason}>Needs practice</span>
                      <span>3 marks</span>
                    </div>
                    <div className={s.rowSubtopic}>
                      <span>2.1 · Equations of motion</span>
                      <span>Difficulty 3</span>
                    </div>
                    <p className={s.rowQuestion}>
                      A stone is thrown vertically upward at 18.0 m s⁻¹…
                    </p>
                    <div className={s.rowSeen}>
                      <span>May 10</span>
                    </div>
                    <div className={s.rowActions}>
                      <span className={s.rowDetail}>Details</span>
                      <span className={s.rowRetry}>Retry</span>
                    </div>
                  </div>
                </article>
                <article className={s.archiveTableRow}>
                  <div className={s.rowMain}>
                    <div className={s.rowType}>
                      <span className={s.rowReason}>Missed MCQ</span>
                      <span>MCQ</span>
                    </div>
                    <div className={s.rowSubtopic}>
                      <span>4.2 · Transport in plants</span>
                      <span>Difficulty 2</span>
                    </div>
                    <p className={s.rowQuestion}>
                      Which adaptation reduces transpiration most on a hot day…
                    </p>
                    <div className={s.rowSeen}>
                      <span>Today</span>
                    </div>
                    <div className={s.rowActions}>
                      <span className={s.rowDetail}>Details</span>
                      <span className={s.rowRetry}>Retry</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
