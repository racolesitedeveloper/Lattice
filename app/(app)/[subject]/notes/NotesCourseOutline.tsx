"use client";

import { useId, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { LockKey, MagnifyingGlass, X } from "@phosphor-icons/react";
import type { CourseOutline, CourseTopic } from "@/lib/course/types";
import IntentPrefetchLink from "@/components/app/IntentPrefetchLink";
import { canAccessTopic, FREE_TOPIC_LIMIT, type BillingPlan } from "@/lib/entitlements";
import s from "./notes.module.css";

function isAsTopic(topicNumber: number, asLastTopic: number): boolean {
  return topicNumber <= asLastTopic;
}

type LevelFilter = "all" | "as" | "a2";

function TopicBlock({ topics, subject, plan }: { topics: CourseTopic[]; subject: string; plan: BillingPlan }) {
  return (
    <ul className={s.topicList}>
      {topics.map((topic) => {
        const locked = !canAccessTopic(plan, topic.number);
        return (
        <li key={topic.id}>
          <details className={`${s.topic} ${locked ? s.topicLocked : ""}`}>
            <summary>
              <span className={s.topicNum}>{topic.number}</span>
              <span>{topic.title}</span>
              {locked ? (
                <span className={s.lockBadge}>
                  <LockKey size={13} weight="fill" aria-hidden />
                  Full
                </span>
              ) : null}
            </summary>
            <ul className={s.subtopicList}>
              {topic.subtopics.map((st) => (
                <li key={st.id} className={s.subtopic}>
                  {locked ? (
                    <span className={`${s.subtopicLink} ${s.subtopicLocked}`} aria-disabled="true">
                      <span className={s.code}>{st.code}</span>
                      <span className={s.subtopicTitle}>{st.title}</span>
                      <span className={s.lockText}>Upgrade</span>
                    </span>
                  ) : (
                    <IntentPrefetchLink
                      href={`/${subject}/notes/${st.id}`}
                      className={s.subtopicLink}
                    >
                      <span className={s.code}>{st.code}</span>
                      <span className={s.subtopicTitle}>{st.title}</span>
                    </IntentPrefetchLink>
                  )}
                </li>
              ))}
            </ul>
          </details>
        </li>
        );
      })}
    </ul>
  );
}

function normalizeNotesSearchQuery(raw: string): string {
  return raw.trim().toLowerCase().replace(/\s+/g, " ");
}

/** Filter topics: topic title / number hits show all subtopics; else only matching subtopics. */
function filterTopicsForNotesSearch(topics: CourseTopic[], q: string): CourseTopic[] {
  if (!q) return topics;

  const out: CourseTopic[] = [];
  for (const topic of topics) {
    const numStr = String(topic.number);
    const topicMatches =
      topic.title.toLowerCase().includes(q) || numStr.includes(q) || `topic ${numStr}`.includes(q);

    if (topicMatches) {
      out.push(topic);
      continue;
    }

    const subtopics = topic.subtopics.filter(
      (st) =>
        st.title.toLowerCase().includes(q) ||
        st.code.toLowerCase().includes(q) ||
        st.id.toLowerCase().includes(q),
    );
    if (subtopics.length > 0) {
      out.push({ ...topic, subtopics });
    }
  }

  return out;
}

export default function NotesCourseOutline({
  outline,
  subject,
  plan,
}: {
  outline: CourseOutline;
  subject: string;
  plan: BillingPlan;
}) {
  const pathname = usePathname();
  const searchFieldId = useId();
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<LevelFilter>("all");
  const attributionKey = `${pathname}:${outline.syllabusCode}`;
  const [dismissedAttributionKey, setDismissedAttributionKey] = useState<string | null>(null);
  const attributionDismissed = dismissedAttributionKey === attributionKey;
  const asLast = outline.asLastTopic;
  const safeSourceUrl = safeExternalUrl(outline.sourceUrl);

  const normalizedQuery = normalizeNotesSearchQuery(query);

  const { asTopicsFiltered, a2TopicsFiltered } = useMemo(() => {
    const asTopics = outline.topics.filter((t) => isAsTopic(t.number, asLast));
    const a2Topics = outline.topics.filter((t) => !isAsTopic(t.number, asLast));

    return {
      asTopicsFiltered: filterTopicsForNotesSearch(asTopics, normalizedQuery),
      a2TopicsFiltered: filterTopicsForNotesSearch(a2Topics, normalizedQuery),
    };
  }, [asLast, normalizedQuery, outline.topics]);

  const hasFilteredResults =
    asTopicsFiltered.length > 0 || a2TopicsFiltered.length > 0;

  const noHitsForActiveLevel =
    Boolean(normalizedQuery) &&
    ((level === "all" && !hasFilteredResults) ||
      (level === "as" && asTopicsFiltered.length === 0) ||
      (level === "a2" && a2TopicsFiltered.length === 0));

  function dismissAttribution() {
    setDismissedAttributionKey(attributionKey);
  }

  return (
    <div className={s.outlineRoot}>
      {!attributionDismissed && (
        <div className={s.attribution}>
          <button
            type="button"
            className={s.attributionDismiss}
            onClick={dismissAttribution}
            aria-label="Dismiss syllabus notice"
          >
            <X className={s.attributionDismissIcon} size={16} weight="regular" aria-hidden />
          </button>
          <p className={s.attributionText}>
            {outline.copyrightNote}{" "}
            {safeSourceUrl ? (
              <a href={safeSourceUrl} rel="noopener noreferrer" target="_blank">
                {outline.sourceUrl}
              </a>
            ) : (
              <span>{outline.sourceUrl}</span>
            )}
          </p>
        </div>
      )}

      <div className={s.searchWrap}>
        <label className={s.srOnly} htmlFor={searchFieldId}>
          Search topics and subtopics
        </label>
        <div className={s.searchInner}>
          <MagnifyingGlass className={s.searchIcon} size={18} weight="regular" aria-hidden />
          <input
            id={searchFieldId}
            type="search"
            className={s.searchInput}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search topics and subtopics…"
            autoComplete="off"
            spellCheck={false}
          />
          {query ? (
            <button type="button" className={s.searchClear} onClick={() => setQuery("")} aria-label="Clear search">
              <X size={14} weight="regular" aria-hidden />
            </button>
          ) : null}
        </div>
      </div>

      <div
        className={s.levelToggle}
        role="tablist"
        aria-label="Course level"
      >
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
          AS Level
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={level === "a2"}
          className={`${s.levelBtn} ${level === "a2" ? s.levelBtnOn : ""}`}
          onClick={() => setLevel("a2")}
        >
          A Level
        </button>
      </div>
      <p className={s.levelHint}>
        Topics 1-{asLast} align with AS; {asLast + 1}+ with A Level for {outline.syllabusCode}.
        {plan === "free" ? ` Free access includes Topics 1-${FREE_TOPIC_LIMIT}.` : ""}
      </p>

      {noHitsForActiveLevel ? (
        <p className={s.searchEmpty} role="status">
          No topics or notes match &ldquo;{query.trim()}&rdquo;. Try fewer words or a subtopic code.
        </p>
      ) : null}

      {level === "all" && (
        <div className={s.levelSections}>
          {(normalizedQuery === "" || asTopicsFiltered.length > 0) && (
            <section className={s.levelSection} aria-labelledby="notes-as-heading">
              <h2 id="notes-as-heading" className={s.sectionTitle}>
                AS Level
              </h2>
              <TopicBlock topics={asTopicsFiltered} subject={subject} plan={plan} />
            </section>
          )}
          {(normalizedQuery === "" || a2TopicsFiltered.length > 0) && (
            <section className={s.levelSection} aria-labelledby="notes-a2-heading">
              <h2 id="notes-a2-heading" className={s.sectionTitle}>
                A Level
              </h2>
              <TopicBlock topics={a2TopicsFiltered} subject={subject} plan={plan} />
            </section>
          )}
        </div>
      )}

      {level === "as" && (
        <section aria-labelledby="notes-as-only-heading">
          <h2 id="notes-as-only-heading" className={s.srOnly}>
            AS Level topics
          </h2>
          <TopicBlock topics={asTopicsFiltered} subject={subject} plan={plan} />
        </section>
      )}

      {level === "a2" && (
        <section aria-labelledby="notes-a2-only-heading">
          <h2 id="notes-a2-only-heading" className={s.srOnly}>
            A Level topics
          </h2>
          <TopicBlock topics={a2TopicsFiltered} subject={subject} plan={plan} />
        </section>
      )}
    </div>
  );
}

function safeExternalUrl(value: string): string | null {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
  } catch {
    return null;
  }
}
