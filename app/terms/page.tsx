import Link from "next/link";
import s from "../legal.module.css";

export const metadata = {
  title: "Terms - Lattice",
};

export default function TermsPage() {
  return (
    <main className={s.page}>
      <article className={s.article}>
        <Link href="/" className={s.backLink}>
          Back to Lattice
        </Link>
        <h1 className={s.heading}>Terms</h1>

        <section className={s.section}>
          <h2>Use of Lattice</h2>
          <p>
            Lattice is a Cambridge International A Level study tool for revision, drills, and
            flashcards. It is not a substitute for official syllabus documents, teacher guidance, or
            exam-board materials.
          </p>
        </section>

        <section className={s.section}>
          <h2>Plans and billing</h2>
          <p>
            The free plan includes limited topic access. Full access unlocks the wider content set
            while your PayPal subscription remains eligible.
          </p>
        </section>

        <section className={s.section}>
          <h2>Your responsibility</h2>
          <p>
            Keep your account credentials secure and verify important exam details against official
            Cambridge sources.
          </p>
        </section>
      </article>
    </main>
  );
}
