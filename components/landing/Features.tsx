import { Check, Lock } from "@phosphor-icons/react/ssr";
import s from "./Features.module.css";

/* ── Shared app chrome ─────────────────────────── */

function MiniSidebar({ active }: { active: string }) {
  return (
    <aside className={s.sidebar}>
      <div className={s.sidebarBrand}>Lattice</div>
      <span className={s.sidebarLabel}>GENERAL</span>
      <div className={`${s.sidebarItem} ${active === "Topics" ? s.sidebarItemOn : ""}`}>Topics</div>
      <div className={`${s.sidebarItem} ${active === "Notes" ? s.sidebarItemOn : ""}`}>Notes</div>
      <span className={s.sidebarLabel}>PRACTICE</span>
      <div className={`${s.sidebarItem} ${active === "Practice" ? s.sidebarItemOn : ""}`}>Practice</div>
      <div className={`${s.sidebarItem} ${active === "Mistakes" ? s.sidebarItemOn : ""}`}>Mistakes</div>
    </aside>
  );
}

function FrameShell({
  active,
  children,
}: {
  active: string;
  children: React.ReactNode;
}) {
  return (
    <div className={s.frame} aria-hidden="true">
      <MiniSidebar active={active} />
      <div className={s.frameBody}>{children}</div>
    </div>
  );
}

/* ── Topics mockup (Physics) ───────────────────── */

function TopicsFrame() {
  return (
    <FrameShell active="Topics">
      <div className={s.frameTopBar}>
        <span className={s.frameViewTitle}>Topics</span>
        <span className={s.subjectPill}>Physics A Level</span>
      </div>

      <div className={s.treeWrap}>
        {/* Topic 1 — complete */}
        <div className={s.topicRow}>
          <div className={s.topicLeft}>
            <Check className={s.checkmark} size={14} weight="bold" aria-hidden />
            <span className={s.topicName}>1. Physical Quantities and Units</span>
          </div>
          <span className={`${s.topicFrac} ${s.fracDone}`}>20 / 20</span>
        </div>

        {/* Topic 2 — in progress */}
        <div className={s.topicRow}>
          <div className={s.topicLeft}>
            <span className={s.dotProgress} />
            <span className={`${s.topicName} ${s.topicBold}`}>2. Kinematics</span>
          </div>
          <span className={s.topicFrac}>14 / 20</span>
        </div>

        {/* Subtopics */}
        <div className={s.subtopicRow}>
          <Check className={s.checkmarkSm} size={12} weight="bold" aria-hidden />
          <span className={s.subtopicName}>2.1 Equations of motion</span>
          <span className={`${s.subtopicFrac} ${s.fracDone}`}>5 / 5</span>
        </div>
        <div className={s.subtopicRow}>
          <span className={s.dotProgressSm} />
          <span className={s.subtopicName}>2.2 Motion graphs</span>
          <span className={s.subtopicFrac}>4 / 5</span>
        </div>
        <div className={s.subtopicRow}>
          <Check className={s.checkmarkSm} size={12} weight="bold" aria-hidden />
          <span className={s.subtopicName}>2.3 Non-uniform motion</span>
          <span className={`${s.subtopicFrac} ${s.fracDone}`}>5 / 5</span>
        </div>
        <div className={s.subtopicRow}>
          <span className={s.dotProgressSm} />
          <span className={s.subtopicName}>2.4 Projectile motion</span>
          <span className={s.subtopicFrac}>0 / 5</span>
        </div>

        {/* Topic 3 — locked */}
        <div className={`${s.topicRow} ${s.topicRowLocked}`}>
          <div className={s.topicLeft}>
            <Lock className={s.lockIcon} size={14} weight="bold" aria-hidden />
            <span className={s.topicName}>3. Dynamics</span>
          </div>
          <span className={`${s.topicFrac} ${s.fracLocked}`}>Upgrade</span>
        </div>
      </div>
    </FrameShell>
  );
}

/* ── Drill question mockup (Chemistry) ─────────── */

function PracticeFrame() {
  return (
    <FrameShell active="Practice">
      <div className={s.frameTopBar}>
        <span className={s.frameViewTitle}>Practice</span>
        <span className={s.subjectPill}>Chemistry A Level</span>
      </div>

      <div className={s.drillWrap}>
        <div className={s.drillMeta}>
          <span className={s.drillTag}>Chemical Bonding</span>
          <span className={s.drillCount}>Question 8 of 15</span>
        </div>

        <div className={s.drillProgress}>
          <div className={s.drillProgressFill} style={{ width: "53%" }} />
        </div>

        <p className={s.drillStem}>
          A student dissolves magnesium chloride in water. Which statement
          correctly explains why the solution conducts electricity?
        </p>

        <div className={s.drillOptions}>
          <label className={s.option}>
            <span className={s.optionKey}>A</span>
            <span className={s.optionText}>Electrons are released from the Mg²⁺ ions into the water</span>
          </label>
          <label className={`${s.option} ${s.optionSelected}`}>
            <span className={s.optionKey}>B</span>
            <span className={s.optionText}>Mg²⁺ and Cl⁻ ions are free to move through the solution</span>
          </label>
          <label className={s.option}>
            <span className={s.optionKey}>C</span>
            <span className={s.optionText}>Covalent bonds break and release charged fragments</span>
          </label>
          <label className={s.option}>
            <span className={s.optionKey}>D</span>
            <span className={s.optionText}>H⁺ ions are produced when MgCl₂ ionises</span>
          </label>
        </div>

        <button className={s.checkBtn}>Check answer</button>
      </div>
    </FrameShell>
  );
}

/* ── Mistakes mockup (Biology) ─────────────────── */

function MistakesFrame() {
  return (
    <FrameShell active="Mistakes">
      <div className={s.frameTopBar}>
        <span className={s.frameViewTitle}>Mistakes</span>
        <span className={s.subjectPill}>Biology A Level</span>
      </div>

      <div className={s.mistakesWrap}>
        <div className={s.mistakesHeader}>
          <span className={s.mhTopic}>Topic</span>
          <span className={s.mhQuestion}>Question</span>
          <span className={s.mhDate}>Last seen</span>
          <span className={s.mhAction} />
        </div>

        <div className={s.mistakeRow}>
          <span className={s.mrTopic}>3.1 Enzymes</span>
          <span className={s.mrQuestion}>A competitive inhibitor is added to an enzyme-substrate mixture…</span>
          <span className={s.mrDate}>2 days ago</span>
          <span className={s.retryBtn}>Retry</span>
        </div>
        <div className={s.mistakeRow}>
          <span className={s.mrTopic}>2.3 Active transport</span>
          <span className={s.mrQuestion}>Which statement correctly distinguishes active transport from…</span>
          <span className={s.mrDate}>5 days ago</span>
          <span className={s.retryBtn}>Retry</span>
        </div>
        <div className={s.mistakeRow}>
          <span className={s.mrTopic}>4.2 Cell division</span>
          <span className={s.mrQuestion}>During which phase of mitosis do chromatids separate and…</span>
          <span className={s.mrDate}>Today</span>
          <span className={s.retryBtn}>Retry</span>
        </div>
        <div className={s.mistakeRow}>
          <span className={s.mrTopic}>1.4 Microscopy</span>
          <span className={s.mrQuestion}>An electron micrograph shows a cell with a diameter of 40 μm…</span>
          <span className={s.mrDate}>1 week ago</span>
          <span className={s.retryBtn}>Retry</span>
        </div>
      </div>
    </FrameShell>
  );
}

/* ── Section ────────────────────────────────────── */

export default function Features() {
  return (
    <section
      id="features"
      className={s.section}
      aria-label="Product features"
    >
      {/* Section intro */}
      <div className={s.intro}>
        <span className={s.eyebrow}>How it works</span>
        <h2 className={s.sectionHead}>
          Revision built around your course.
        </h2>
        <p className={s.sectionSub}>
          Three subjects. One focused tool. Topics, notes, and drills stay in
          sync so you always know what you&apos;ve done and what&apos;s next.
        </p>
      </div>

      {/* Row 1 — Topics (frame left, copy right) */}
      <div className={s.row}>
        <div className={s.frameCol}>
          <TopicsFrame />
        </div>
        <div className={s.copyCol}>
          <h3 className={s.featureHead}>
            Every topic, tracked as you go.
          </h3>
          <p className={s.featureBody}>
            Lattice breaks Physics, Chemistry, and Biology into clear topic units
            — your map of what you&apos;ve covered and what&apos;s still ahead,
            in our own structure (not a verbatim copy of any exam board
            document).
          </p>
          <p className={s.featureBody}>
            Progress is updated the moment you finish a drill or mark a topic
            complete. No manual logging.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className={s.rowDivider} aria-hidden="true" />

      {/* Row 2 — Practice (copy left, frame right) */}
      <div className={`${s.row} ${s.rowFlip}`}>
        <div className={s.copyCol}>
          <h3 className={s.featureHead}>
            Questions built for the exam, not generic practice.
          </h3>
          <p className={s.featureBody}>
            Every drill set is tied to a specific topic. Open a topic,
            start the drill, answer questions drawn directly from the exam style
            and mark scheme structure — not generic MCQs from a content farm.
          </p>
          <p className={s.featureBody}>
            Get one wrong, and it goes straight to your Mistakes archive.
            No configuration needed.
          </p>
        </div>
        <div className={s.frameCol}>
          <PracticeFrame />
        </div>
      </div>

      {/* Divider */}
      <div className={s.rowDivider} aria-hidden="true" />

      {/* Row 3 — Mistakes (frame left, copy right) */}
      <div className={s.row}>
        <div className={s.frameCol}>
          <MistakesFrame />
        </div>
        <div className={s.copyCol}>
          <h3 className={s.featureHead}>
            Stop losing track of what tripped you up.
          </h3>
          <p className={s.featureBody}>
            Every question you get wrong is automatically logged. Before your
            exam, open the Mistakes archive, filter by topic, and retry until
            you&apos;ve nailed every one. Nothing falls through the cracks.
          </p>
          <p className={s.featureBody}>
            The archive is permanent. Questions you got wrong in October are
            still there in May when you need them most.
          </p>
        </div>
      </div>
    </section>
  );
}
