"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CaretDown, CaretRight, CaretUp, LockKey, X } from "@phosphor-icons/react";
import type { CourseOutline, CourseTopic } from "@/lib/course/types";
import IntentPrefetchLink from "@/components/app/IntentPrefetchLink";
import { canAccessNoteId, canAccessTopic, FREE_TOPIC_LIMIT, type BillingPlan } from "@/lib/entitlements";
import { studyStorageGetItem, studyStorageKeys, studyStorageRemoveItem } from "@/lib/study-kv";
import s from "./practice-hub.module.css";

function isAsTopic(topicNumber: number, asLastTopic: number): boolean {
  return topicNumber <= asLastTopic;
}

type LevelFilter = "all" | "as" | "a2";

function TopicBlock({
  topics,
  subject,
  availableSetIds,
  plan,
}: {
  topics: CourseTopic[];
  subject: string;
  availableSetIds: Set<string>;
  plan: BillingPlan;
}) {
  const [openTopics, setOpenTopics] = useState<Record<string, boolean>>({});
  const [startPickerTopicId, setStartPickerTopicId] = useState<string | null>(null);

  function toggleTopic(topicId: string) {
    setOpenTopics((prev) => ({ ...prev, [topicId]: !prev[topicId] }));
  }

  return (
    <ul className={s.topicList}>
      {topics.map((topic) => {
        const availableSubtopics = topic.subtopics.filter((st) => availableSetIds.has(st.id));
        const firstSubtopic = availableSubtopics[0];
        const expanded = Boolean(openTopics[topic.id]);
        const locked = !canAccessTopic(plan, topic.number);
        return (
          <li key={topic.id} className={`${s.topicRow} ${locked ? s.topicRowLocked : ""}`}>
            <div className={s.topicMain}>
              <div className={s.topicHead}>
                <span className={s.topicNum}>{topic.number}</span>
                <div className={s.topicTitleWrap}>
                  <p className={s.topicTitle}>{topic.title}</p>
                  <p className={s.topicMeta}>
                    {availableSubtopics.length} practice set{availableSubtopics.length === 1 ? "" : "s"}
                  </p>
                </div>
              </div>
              <div className={s.topicActions}>
                <button type="button" className={s.subtopicToggle} onClick={() => toggleTopic(topic.id)}>
                  {expanded ? "Hide sets" : "View sets"}
                </button>
                {locked ? (
                  <span className={s.lockBadge}>
                    <LockKey size={13} weight="fill" aria-hidden />
                    Full
                  </span>
                ) : firstSubtopic ? (
                  <button
                    type="button"
                    className={s.startBtn}
                    onClick={() =>
                      setStartPickerTopicId((prev) => {
                        if (prev === topic.id) return null;
                        return topic.id;
                      })
                    }
                  >
                    Start
                  </button>
                ) : null}
              </div>
            </div>
            {startPickerTopicId === topic.id ? (
              <div className={s.startPicker}>
                <p className={s.startPickerLabel}>Choose subtopic to begin</p>
                <ul className={s.startPickerList}>
                  {availableSubtopics.map((st) => (
                    <li key={`${topic.id}-start-${st.id}`}>
                      {locked ? (
                        <span className={`${s.startPickerLink} ${s.lockedLink}`} aria-disabled="true">
                          <span className={s.code}>{st.code}</span>
                          <span className={s.subtopicText}>{st.title}</span>
                        </span>
                      ) : (
                        <IntentPrefetchLink
                          href={`/${subject}/practice/${st.id}`}
                          className={s.startPickerLink}
                        >
                          <span className={s.code}>{st.code}</span>
                          <span className={s.subtopicText}>{st.title}</span>
                        </IntentPrefetchLink>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {expanded ? (
              <ul className={s.subtopicList}>
                {availableSubtopics.map((st) => (
                  <li key={st.id}>
                    {locked ? (
                      <span className={`${s.subtopicLink} ${s.lockedLink}`} aria-disabled="true">
                        <span className={s.code}>{st.code}</span>
                        <span className={s.subtopicText}>{st.title}</span>
                        <span className={s.miniCta}>Upgrade</span>
                      </span>
                    ) : (
                      <IntentPrefetchLink
                        href={`/${subject}/practice/${st.id}`}
                        className={s.subtopicLink}
                      >
                        <span className={s.code}>{st.code}</span>
                        <span className={s.subtopicText}>{st.title}</span>
                        <span className={s.miniCta}>Open</span>
                      </IntentPrefetchLink>
                    )}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

export default function PracticeCourseOutline({
  outline,
  subject,
  publishedNoteIds,
  plan,
}: {
  outline: CourseOutline;
  subject: string;
  publishedNoteIds: string[];
  plan: BillingPlan;
}) {
  const router = useRouter();
  const [level, setLevel] = useState<LevelFilter>("all");
  const [query, setQuery] = useState("");
  const [mixedMode, setMixedMode] = useState(false);
  const [selectedMixedIds, setSelectedMixedIds] = useState<string[]>([]);
  const [resumes, setResumes] = useState<
    Array<{
      kind: "subtopic" | "mixed";
      href: string;
      title: string;
      subtitle: string;
      position: number;
      total: number;
      updatedAt: number;
      storageKey: string;
    }>
  >([]);
  const [showAllResumes, setShowAllResumes] = useState(false);
  const asLast = outline.asLastTopic;
  const availableSetIds = useMemo(() => new Set(publishedNoteIds), [publishedNoteIds]);
  const availableSubtopics = useMemo(
    () =>
      outline.topics.flatMap((topic) =>
        topic.subtopics
          .filter((subtopic) => availableSetIds.has(subtopic.id))
          .map((subtopic) => ({
            id: subtopic.id,
            code: subtopic.code,
            subtopicTitle: subtopic.title,
            topicTitle: topic.title,
            topicNumber: topic.number,
            level: isAsTopic(topic.number, asLast) ? "as" : "a2",
          })),
      ),
    [outline.topics, availableSetIds, asLast],
  );

  useEffect(() => {
    const subtopicMeta = new Map<string, { topicTitle: string; subtopicTitle: string }>();
    for (const topic of outline.topics) {
      for (const subtopic of topic.subtopics) {
        subtopicMeta.set(subtopic.id, {
          topicTitle: topic.title,
          subtopicTitle: subtopic.title,
        });
      }
    }
    try {
      const nextResumes: Array<{
        kind: "subtopic" | "mixed";
        href: string;
        title: string;
        subtitle: string;
        position: number;
        total: number;
        updatedAt: number;
        storageKey: string;
      }> = [];
      for (const [noteId, meta] of subtopicMeta) {
        if (!canAccessNoteId(plan, noteId)) continue;
        const sessionRaw = studyStorageGetItem(`practice-session:${subject}:${noteId}`);
        if (!sessionRaw) continue;
        const session = JSON.parse(sessionRaw) as {
          indexByView?: { drills?: number };
          checkedByView?: { drills?: string[] };
          updatedAt?: number;
        };
        const drillIndex = Math.max(0, Math.min(session.indexByView?.drills ?? 0, 9));
        const drillDoneCount = session.checkedByView?.drills?.length ?? 0;
        const hasMeaningfulProgress = drillDoneCount > 0;
        const unfinished = drillDoneCount < 10;
        if (!hasMeaningfulProgress || !unfinished) continue;
        nextResumes.push({
          kind: "subtopic",
          href: `/${subject}/practice/${noteId}`,
          title: meta.subtopicTitle,
          subtitle: meta.topicTitle,
          position: drillIndex + 1,
          total: 10,
          updatedAt: session.updatedAt ?? 0,
          storageKey: `practice-session:${subject}:${noteId}`,
        });
      }

      const mixedPrefix = `practice-mixed-session:${subject}:`;
      for (const key of studyStorageKeys()) {
        if (!key.startsWith(mixedPrefix)) continue;
        const mixedRaw = studyStorageGetItem(key);
        if (!mixedRaw) continue;
        const parsed = JSON.parse(mixedRaw) as {
          selectedNoteIds?: string[];
          index?: number;
          completed?: string[];
          total?: number;
          updatedAt?: number;
        };
        const total = Math.max(0, parsed.total ?? 0);
        const done = parsed.completed?.length ?? 0;
        const unfinished = done < total;
        const hasMeaningfulProgress = done > 0;
        if (total > 0 && unfinished && hasMeaningfulProgress) {
          const selectedNoteIds = parsed.selectedNoteIds ?? [];
          if (selectedNoteIds.some((id) => !canAccessNoteId(plan, id))) continue;
          nextResumes.push({
            kind: "mixed",
            href: `/${subject}/practice/mixed?sets=${encodeURIComponent(selectedNoteIds.join(","))}`,
            title: "Mixed drill",
            subtitle: `${selectedNoteIds.length} subtopics selected`,
            position: Math.max(0, Math.min((parsed.index ?? 0) + 1, total)),
            total,
            updatedAt: parsed.updatedAt ?? 0,
            storageKey: key,
          });
        }
      }

      nextResumes.sort((a, b) => b.updatedAt - a.updatedAt);
      const timer = window.setTimeout(() => setResumes(nextResumes), 0);
      return () => window.clearTimeout(timer);
    } catch {
      // ignore malformed saved data
    }
  }, [outline.topics, plan, subject]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setSelectedMixedIds((prev) => prev.filter((id) => availableSetIds.has(id) && canAccessNoteId(plan, id)));
    }, 0);
    return () => window.clearTimeout(timer);
  }, [availableSetIds, plan]);

  function dismissResume(storageKey: string) {
    try {
      studyStorageRemoveItem(storageKey);
    } catch {
      // ignore
    }
    setResumes((prev) => prev.filter((r) => r.storageKey !== storageKey));
  }

  const normalizedQuery = query.trim().toLowerCase();

  const asTopics = outline.topics.filter((t) => isAsTopic(t.number, asLast));
  const a2Topics = outline.topics.filter((t) => !isAsTopic(t.number, asLast));
  const totalSets = publishedNoteIds.length;
  const totalQuestions = totalSets * 10;
  const totalFlashcards = totalSets * 10;
  function filterTopics(topics: CourseTopic[]): CourseTopic[] {
    if (!normalizedQuery) return topics;
    return topics
      .map((topic) => {
        const topicMatch = topic.title.toLowerCase().includes(normalizedQuery);
        if (topicMatch) return topic;
        const subtopics = topic.subtopics.filter((subtopic) =>
          `${subtopic.code} ${subtopic.title}`.toLowerCase().includes(normalizedQuery),
        );
        return { ...topic, subtopics };
      })
      .filter((topic) => topic.subtopics.length > 0);
  }

  const visibleAsTopics = filterTopics(asTopics);
  const visibleA2Topics = filterTopics(a2Topics);
  const hasResults = visibleAsTopics.length + visibleA2Topics.length > 0;
  const visibleMixedSubtopics = availableSubtopics.filter((item) =>
    `${item.code} ${item.subtopicTitle} ${item.topicTitle}`.toLowerCase().includes(normalizedQuery),
  );
  const visibleMixedAs = visibleMixedSubtopics.filter((item) => item.level === "as");
  const visibleMixedA2 = visibleMixedSubtopics.filter((item) => item.level === "a2");

  function toggleMixedId(noteId: string) {
    if (!canAccessNoteId(plan, noteId)) return;
    setSelectedMixedIds((prev) => (prev.includes(noteId) ? prev.filter((id) => id !== noteId) : [...prev, noteId]));
  }

  function bulkSetMixed(ids: string[], checked: boolean) {
    const accessibleIds = ids.filter((id) => canAccessNoteId(plan, id));
    setSelectedMixedIds((prev) => {
      if (checked) {
        return Array.from(new Set([...prev, ...accessibleIds]));
      }
      const drop = new Set(accessibleIds);
      return prev.filter((id) => !drop.has(id));
    });
  }

  function launchMixedDrill() {
    if (selectedMixedIds.length === 0) return;
    const sets = encodeURIComponent(selectedMixedIds.join(","));
    router.push(`/${subject}/practice/mixed?sets=${sets}`);
  }

  const visibleResumes = useMemo(() => {
    if (resumes.length === 0) return [];
    if (resumes.length === 1 || showAllResumes) return resumes;
    return [resumes[0]!];
  }, [resumes, showAllResumes]);

  const moreResumeCount = resumes.length > 1 ? resumes.length - 1 : 0;

  return (
    <div className={s.hub}>
      <div className={s.metaRow}>
        <div className={s.metaStack}>
          <p className={s.metaText}>
            <strong>{outline.syllabusCode}</strong> · {outline.topics.length} topics · {totalSets} sets
          </p>
          <p className={s.metaTally}>
            <span>{totalQuestions} total questions</span>
            <span aria-hidden>·</span>
            <span>{totalFlashcards} total flashcards</span>
            {plan === "free" ? (
              <>
                <span aria-hidden>·</span>
                <span>Free includes Topics 1-{FREE_TOPIC_LIMIT}</span>
              </>
            ) : null}
          </p>
        </div>
      </div>
      <div className={s.filterRow}>
        <label htmlFor="practice-search" className={s.searchWrap}>
          <span className={s.searchLabel}>Search sets</span>
          <input
            id="practice-search"
            type="search"
            className={s.searchInput}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Topic, subtopic, or code (e.g. 15.2)"
          />
        </label>
        <div className={s.filterGroup}>
          <p className={s.filterLabel}>Filter by level</p>
          <div className={s.levelToggle} role="tablist" aria-label="Course level">
            <button
              type="button"
              role="tab"
              aria-selected={level === "all"}
              className={`${s.levelBtn} ${level === "all" ? s.levelBtnOn : ""}`}
              onClick={() => setLevel("all")}
            >
              All
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={level === "as"}
              className={`${s.levelBtn} ${level === "as" ? s.levelBtnOn : ""}`}
              onClick={() => setLevel("as")}
            >
              AS
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={level === "a2"}
              className={`${s.levelBtn} ${level === "a2" ? s.levelBtnOn : ""}`}
              onClick={() => setLevel("a2")}
            >
              A2
            </button>
          </div>
        </div>
      </div>
      {resumes.length > 0 ? (
        <section className={s.resumeSection} aria-label="In progress">
          <div className={s.resumeSectionHead}>
            <div className={s.resumeSectionHeadText}>
              <p className={s.resumeSectionLabel}>In progress</p>
              {!showAllResumes && resumes.length > 1 ? (
                <p className={s.resumeSectionSub}>Showing most recent · {resumes.length} unfinished total</p>
              ) : showAllResumes && resumes.length > 1 ? (
                <p className={s.resumeSectionSub}>All unfinished drills</p>
              ) : null}
            </div>
            {moreResumeCount > 0 ? (
              <button
                type="button"
                className={s.resumeToggle}
                aria-expanded={showAllResumes}
                onClick={() => setShowAllResumes((prev) => !prev)}
              >
                {showAllResumes ? (
                  <>
                    Show less
                    <CaretUp size={16} weight="regular" aria-hidden />
                  </>
                ) : (
                  <>
                    Show {moreResumeCount} more
                    <CaretDown size={16} weight="regular" aria-hidden />
                  </>
                )}
              </button>
            ) : null}
          </div>
          <ul className={s.resumeList} aria-label="Unfinished drills">
            {visibleResumes.map((item) => (
              <li key={item.storageKey} className={s.resumeRow}>
                <IntentPrefetchLink href={item.href} className={s.resumeRowLink}>
                  <span className={s.resumeKind}>
                    {item.kind === "mixed" ? "Mixed" : "Drill"}
                  </span>
                  <span className={s.resumeCopy}>
                    <strong className={s.resumeTitle}>{item.title}</strong>
                    <span className={s.resumeTopic}>{item.subtitle}</span>
                  </span>
                  <span className={s.resumeAside}>
                    <span
                      className={s.resumeProgress}
                      aria-label={`Question ${item.position} of ${item.total}`}
                    >
                      Q{item.position}
                      <span className={s.resumeProgressSep} aria-hidden>
                        /
                      </span>
                      {item.total}
                    </span>
                    <span className={s.resumeContinue}>
                      Continue
                      <CaretRight size={13} weight="bold" aria-hidden />
                    </span>
                  </span>
                </IntentPrefetchLink>
                <button
                  type="button"
                  className={s.resumeDismiss}
                  onClick={() => dismissResume(item.storageKey)}
                  aria-label={`Remove ${item.title} from in-progress list`}
                >
                  <X size={14} weight="regular" aria-hidden />
                </button>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      <section className={s.mixedSection}>
        <div className={s.mixedHeader}>
          <label className={s.mixedToggleRow}>
            <input
              type="checkbox"
              checked={mixedMode}
              onChange={(e) => setMixedMode(e.target.checked)}
              className={s.mixedToggle}
            />
            <span className={s.mixedTitle}>Mixed drill mode</span>
          </label>
          <p className={s.mixedHint}>Build one combined test with 10 questions from each selected subtopic.</p>
        </div>
        {mixedMode ? (
          <div className={s.mixedBody}>
            <div className={s.mixedPicker}>
              <section className={s.mixedLevelSection}>
                <div className={s.mixedLevelHead}>
                  <p className={s.mixedLevelTitle}>AS topics</p>
                  <button
                    type="button"
                    className={s.mixedSelectBtn}
                    onClick={() => {
                      const ids = visibleMixedAs.map((item) => item.id);
                      const allSelected = ids.every((id) => selectedMixedIds.includes(id));
                      bulkSetMixed(ids, !allSelected);
                    }}
                    disabled={visibleMixedAs.length === 0}
                  >
                    {visibleMixedAs.length > 0 &&
                    visibleMixedAs.every((item) => selectedMixedIds.includes(item.id))
                      ? "Clear AS"
                      : "Select all AS"}
                  </button>
                </div>
                {visibleMixedAs.length > 0 ? (
                  <div className={s.mixedLevelList}>
                    {visibleMixedAs.map((item) => (
                      <label
                        key={item.id}
                        className={`${s.mixedOption} ${!canAccessNoteId(plan, item.id) ? s.mixedOptionLocked : ""}`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedMixedIds.includes(item.id)}
                          onChange={() => toggleMixedId(item.id)}
                          disabled={!canAccessNoteId(plan, item.id)}
                        />
                        <span className={s.code}>{item.code}</span>
                        <span className={s.subtopicText}>{item.subtopicTitle}</span>
                        <span className={s.topicMeta}>
                          {item.topicTitle}
                          {!canAccessNoteId(plan, item.id) ? " · Full" : ""}
                        </span>
                      </label>
                    ))}
                  </div>
                ) : (
                  <p className={s.mixedEmpty}>No AS sets match this search.</p>
                )}
              </section>

              <section className={s.mixedLevelSection}>
                <div className={s.mixedLevelHead}>
                  <p className={s.mixedLevelTitle}>A2 topics</p>
                  <button
                    type="button"
                    className={s.mixedSelectBtn}
                    onClick={() => {
                      const ids = visibleMixedA2.map((item) => item.id);
                      const allSelected = ids.every((id) => selectedMixedIds.includes(id));
                      bulkSetMixed(ids, !allSelected);
                    }}
                    disabled={visibleMixedA2.length === 0}
                  >
                    {visibleMixedA2.length > 0 &&
                    visibleMixedA2.every((item) => selectedMixedIds.includes(item.id))
                      ? "Clear A2"
                      : "Select all A2"}
                  </button>
                </div>
                {visibleMixedA2.length > 0 ? (
                  <div className={s.mixedLevelList}>
                    {visibleMixedA2.map((item) => (
                      <label
                        key={item.id}
                        className={`${s.mixedOption} ${!canAccessNoteId(plan, item.id) ? s.mixedOptionLocked : ""}`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedMixedIds.includes(item.id)}
                          onChange={() => toggleMixedId(item.id)}
                          disabled={!canAccessNoteId(plan, item.id)}
                        />
                        <span className={s.code}>{item.code}</span>
                        <span className={s.subtopicText}>{item.subtopicTitle}</span>
                        <span className={s.topicMeta}>
                          {item.topicTitle}
                          {!canAccessNoteId(plan, item.id) ? " · Full" : ""}
                        </span>
                      </label>
                    ))}
                  </div>
                ) : (
                  <p className={s.mixedEmpty}>No A2 sets match this search.</p>
                )}
              </section>
            </div>
            <div className={s.mixedActions}>
              <p className={s.mixedCount}>
                {selectedMixedIds.length} selected · {selectedMixedIds.length * 10} questions total
              </p>
              <button
                type="button"
                className={s.startMixedBtn}
                disabled={selectedMixedIds.length === 0}
                onClick={launchMixedDrill}
              >
                Start mixed drill
              </button>
            </div>
          </div>
        ) : null}
      </section>

      {level === "all" ? (
        <>
          <section className={s.section} aria-labelledby="practice-as-heading">
            <h2 id="practice-as-heading" className={s.sectionTitle}>
              AS Level
            </h2>
            <TopicBlock topics={visibleAsTopics} subject={subject} availableSetIds={availableSetIds} plan={plan} />
          </section>
          <section className={s.section} aria-labelledby="practice-a2-heading">
            <h2 id="practice-a2-heading" className={s.sectionTitle}>
              A2 Level
            </h2>
            <TopicBlock topics={visibleA2Topics} subject={subject} availableSetIds={availableSetIds} plan={plan} />
          </section>
        </>
      ) : null}

      {level === "as" ? (
        <section className={s.section} aria-labelledby="practice-as-only-heading">
          <h2 id="practice-as-only-heading" className={s.sectionTitle}>
            AS Level
          </h2>
          <TopicBlock topics={visibleAsTopics} subject={subject} availableSetIds={availableSetIds} plan={plan} />
        </section>
      ) : null}

      {level === "a2" ? (
        <section className={s.section} aria-labelledby="practice-a2-only-heading">
          <h2 id="practice-a2-only-heading" className={s.sectionTitle}>
            A2 Level
          </h2>
          <TopicBlock topics={visibleA2Topics} subject={subject} availableSetIds={availableSetIds} plan={plan} />
        </section>
      ) : null}
      {!hasResults ? (
        <div className={s.empty}>
          <p>No matching practice sets found.</p>
        </div>
      ) : null}
    </div>
  );
}
