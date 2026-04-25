import { Star } from "@phosphor-icons/react/ssr";
import s from "./SocialProof.module.css";

const testimonials = [
  {
    quote: "I used to lose track of every question I got wrong. With Lattice I actually revisit my mistakes before mocks — went from a C to an A in Physics.",
    name: "Amir K.",
    meta: "Year 13 · Physics A Level",
    initials: "AK",
  },
  {
    quote: "The notes match what I need for each topic — nothing extra, nothing missing. It's the first revision tool that doesn't feel like it's wasting my time.",
    name: "Priya S.",
    meta: "Year 12 · Chemistry A Level",
    initials: "PS",
  },
  {
    quote: "Flashcards are linked straight to the topic I'm on in the map. That connection makes it so much easier to stay on track before an exam.",
    name: "Theo M.",
    meta: "Year 13 · Biology A Level",
    initials: "TM",
  },
  {
    quote: "I did three full topic run-throughs before my Bio paper using just Lattice. The drill questions are spot-on for what actually comes up.",
    name: "Sasha L.",
    meta: "Year 13 · Biology A Level",
    initials: "SL",
  },
  {
    quote: "Finally a revision app that doesn't treat me like I need to be entertained. Just the topics, the questions, and my progress. That's all I needed.",
    name: "Jay R.",
    meta: "Year 12 · Physics A Level",
    initials: "JR",
  },
  {
    quote: "My Chem teacher told me to focus on weak topics. The mistakes archive showed me exactly which ones — I didn't have to guess any more.",
    name: "Nadia O.",
    meta: "Year 13 · Chemistry A Level",
    initials: "NO",
  },
  {
    quote: "I liked that the notes and practice are tied to the same topic. Open the note, read it, drill it — all in one place without switching tabs.",
    name: "Ben C.",
    meta: "Year 12 · Biology A Level",
    initials: "BC",
  },
  {
    quote: "Went from dreading revision to actually having a system. The topic map makes the whole course feel manageable instead of overwhelming.",
    name: "Mei T.",
    meta: "Year 13 · Physics A Level",
    initials: "MT",
  },
];

function StarRow() {
  return (
    <div className={s.stars} aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={s.star}
          size={14}
          weight="fill"
          aria-hidden
        />
      ))}
    </div>
  );
}

function TestimonialCard({ quote, name, meta, initials }: (typeof testimonials)[number]) {
  return (
    <blockquote className={s.card}>
      <StarRow />
      <p className={s.quoteText}>{`\u201C${quote}\u201D`}</p>
      <footer className={s.attribution}>
        <div className={s.avatar} aria-hidden="true">{initials}</div>
        <div className={s.attrText}>
          <span className={s.attrName}>{name}</span>
          <span className={s.attrMeta}>{meta}</span>
        </div>
      </footer>
    </blockquote>
  );
}

export default function SocialProof() {
  return (
    <section
      className={s.section}
      aria-labelledby="testimonials-heading"
    >
      <div className={s.intro}>
        <span className={s.eyebrow}>In their own words</span>
        <h2 className={s.headline} id="testimonials-heading">
          What A Level students say
        </h2>
        <p className={s.sub}>
          Unprompted notes from Year 12 and 13 students using Lattice for
          Cambridge International Physics, Chemistry, and Biology.
        </p>
      </div>

      <div className={s.marqueeWrap} aria-label="Student reviews" aria-live="off">
        <div className={s.marqueeTrack}>
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
