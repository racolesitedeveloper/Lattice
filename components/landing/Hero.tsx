"use client";

import Link from "next/link";
import {
  BookOpen,
  ClockCounterClockwise,
  ListChecks,
  SquaresFour,
} from "@phosphor-icons/react/ssr";
import s from "./Hero.module.css";
import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Hero({
  isSignedIn = false,
  onRevealPricing,
}: {
  isSignedIn?: boolean;
  onRevealPricing: () => void;
}) {
  return (
    <div className={s.page}>
      <header className={s.topbar}>
        <div className={s.topbarInner}>
          <Link href="/" className={s.brand} aria-label="Lattice home">
            <Logo size={24} />
          </Link>
          <nav className={s.nav} aria-label="Marketing navigation">
            <a href="#features" className={s.navLink}>
              Features
            </a>
            <a
              href="#pricing"
              className={s.navLink}
              onClick={(e) => {
                e.preventDefault();
                onRevealPricing();
              }}
            >
              Pricing
            </a>
            {isSignedIn ? (
              <Link href="/dashboard" className={s.navCta}>
                Open app
              </Link>
            ) : (
              <>
                <Link href="/login" className={s.navLink}>
                  Sign in
                </Link>
                <Link href="/signup" className={s.navCta}>
                  Start free
                </Link>
              </>
            )}
            <ThemeToggle className={s.themeToggle} />
          </nav>
        </div>
      </header>

      <section className={s.hero} aria-label="Hero">
        <div className={s.copyCol}>
          <div className={s.copyLayout}>
            <div className={s.spine} aria-hidden="true">
              <span className={s.spineCode}>9702</span>
              <span className={s.spineCode}>9701</span>
              <span className={s.spineCode}>9700</span>
            </div>

            <div className={s.copyBlock}>
              <div className={s.kicker}>
                <span className={s.kickerDot} aria-hidden="true" />
                Cambridge A Level &middot; Physics, Chemistry, Biology
              </div>

              <h1 className={s.headline}>
                Study smarter.
                <br />
                Score higher in&nbsp;A&nbsp;Levels.
              </h1>

              <p className={s.lede}>
                Topic-organised notes, focused drills, and flashcards — everything you need for
                Physics, Chemistry, and Biology in one calm workspace.
              </p>

              <div className={s.actions}>
                {isSignedIn ? (
                  <Link href="/dashboard" className={s.btnPrimary}>
                    Open app
                  </Link>
                ) : (
                  <button type="button" className={s.btnPrimary} onClick={onRevealPricing}>
                    Start free
                  </button>
                )}
                <a href="#features" className={s.btnGhost}>
                  See how it works
                </a>
              </div>

              <p className={s.fineprint}>
                <strong>$0 limited</strong> for the first 3 topics &middot;{" "}
                <strong>$2.99 full</strong> for complete access
              </p>
            </div>
          </div>
        </div>

        <div className={s.visualCol} aria-hidden="true">
          <div className={s.stage}>
            <div className={s.mesh} aria-hidden="true" />

            <div className={s.subjectRail}>
              <div className={s.subjectCell}>
                <span className={s.subjectCode}>9702</span>
                <span className={s.subjectLabel}>Physics</span>
              </div>
              <div className={s.subjectCell}>
                <span className={s.subjectCode}>9701</span>
                <span className={s.subjectLabel}>Chemistry</span>
              </div>
              <div className={s.subjectCell}>
                <span className={s.subjectCode}>9700</span>
                <span className={s.subjectLabel}>Biology</span>
              </div>
            </div>

            <div className={s.appPreview}>
              <aside className={s.previewSidebar}>
                <div className={s.previewBrand}>
                  <Logo size={22} />
                </div>
                <nav className={s.previewNav}>
                  <div className={s.previewNavItem}>
                    <SquaresFour className={s.previewNavIcon} size={18} weight="regular" aria-hidden />
                    <span>Overview</span>
                  </div>
                  <span className={s.previewSectionLabel}>General</span>
                  <div className={`${s.previewNavItem} ${s.previewNavOn}`}>
                    <BookOpen className={s.previewNavIcon} size={18} weight="regular" aria-hidden />
                    <span>Notes</span>
                  </div>
                  <div className={s.previewNavItem}>
                    <ListChecks className={s.previewNavIcon} size={18} weight="regular" aria-hidden />
                    <span>Drills</span>
                  </div>
                  <div className={s.previewNavItem}>
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
                  <h2 className={s.previewViewTitle}>Notes</h2>
                  <span className={s.previewPlanPill}>Free plan</span>
                </header>
                <div className={s.previewBody}>
                  <div className={s.previewLevelToggle} role="presentation">
                    <span className={`${s.previewLevelBtn} ${s.previewLevelOn}`}>All</span>
                    <span className={s.previewLevelBtn}>AS</span>
                    <span className={s.previewLevelBtn}>A2</span>
                  </div>
                  <div className={s.previewTopic}>
                    <div className={s.previewTopicSummary}>
                      <span className={s.previewTopicChevron} />
                      <span className={s.previewTopicNum}>1</span>
                      <span className={s.previewTopicTitle}>Cell structure</span>
                    </div>
                  </div>
                  <div className={s.previewTopic}>
                    <div className={s.previewTopicSummary}>
                      <span className={s.previewTopicChevron} />
                      <span className={s.previewTopicNum}>2</span>
                      <span className={s.previewTopicTitle}>Biological molecules</span>
                    </div>
                  </div>
                  <div className={s.previewTopic}>
                    <div className={s.previewTopicSummary}>
                      <span className={s.previewTopicChevron} />
                      <span className={s.previewTopicNum}>3</span>
                      <span className={s.previewTopicTitle}>Enzymes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={s.drillFloat}>
              <p className={s.drillSessionLabel}>Practice session</p>
              <div className={s.drillToolbar}>
                <div className={s.drillSegmented}>
                  <span className={`${s.drillSegBtn} ${s.drillSegOn}`}>Drills</span>
                  <span className={s.drillSegBtn}>Flashcards</span>
                </div>
                <div className={s.drillProgress}>
                  <span className={s.drillFrac}>
                    <span className={s.tabular}>01</span>
                    <span className={s.drillSep}>/</span>
                    <span className={s.tabular}>04</span>
                  </span>
                  <div className={s.drillTrack}>
                    <div className={s.drillFill} />
                  </div>
                  <span className={s.drillPct}>
                    <span className={s.tabular}>25</span>%
                  </span>
                </div>
              </div>
              <div className={s.drillSteps}>
                <span className={`${s.drillStep} ${s.drillStepCurrent}`}>1</span>
                <span className={s.drillStep}>2</span>
                <span className={s.drillStep}>3</span>
                <span className={s.drillStep}>4</span>
              </div>
              <div className={s.drillFocus}>
                <header className={s.drillItemHead}>
                  <p className={s.drillEyebrow}>Drill question</p>
                  <p className={s.drillMeta}>Physics · Kinematics</p>
                </header>
                <p className={s.drillStem}>
                  A body accelerates uniformly from rest to 12 m s⁻¹ in 4.0 s. Find the displacement in
                  that interval.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
