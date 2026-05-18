import type { LegalBlock, LegalSection } from "@/lib/legal/types";
import s from "@/app/legal.module.css";

function renderBlock(block: LegalBlock, key: number) {
  if (block.type === "p") {
    return <p key={key}>{block.text}</p>;
  }
  if (block.type === "ul") {
    return (
      <ul key={key}>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return (
    <ol key={key}>
      {block.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  );
}

export default function LegalDocument({
  title,
  effectiveDate,
  intro,
  sections,
}: {
  title: string;
  effectiveDate: string;
  intro?: string;
  sections: LegalSection[];
}) {
  return (
    <article className={s.article}>
      <h1 className={s.heading}>{title}</h1>
      <p className={s.meta}>
        Effective date: <time dateTime={effectiveDate}>{effectiveDate}</time>
      </p>
      {intro ? <p className={s.intro}>{intro}</p> : null}
      {sections.map((section) => (
        <section key={section.id} id={section.id} className={s.section} aria-labelledby={section.id}>
          <h2 id={section.id}>{section.title}</h2>
          {section.blocks.map((block, index) => renderBlock(block, index))}
        </section>
      ))}
    </article>
  );
}
