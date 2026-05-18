import Link from "next/link";
import LegalDocument from "@/components/legal/LegalDocument";
import { getLegalOperator } from "@/lib/legal/operator";
import { getTermsSections, TERMS_EFFECTIVE_DATE } from "@/lib/legal/terms";
import s from "../legal.module.css";

export const metadata = {
  title: "Terms of Service — Lattice",
  description:
    "Terms of Service for Lattice, governed by the laws of Botswana and aligned with consumer and electronic transactions requirements.",
};

export default function TermsPage() {
  const operator = getLegalOperator();
  const sections = getTermsSections(operator);

  return (
    <main className={s.page}>
      <Link href="/" className={s.backLink}>
        Back to Lattice
      </Link>
      <LegalDocument
        title="Terms of Service"
        effectiveDate={TERMS_EFFECTIVE_DATE}
        intro={`These terms apply to your use of ${operator.tradingName}, operated as a solo business (sole proprietorship) in ${operator.country}. They reflect Botswana's Data Protection Act 18 of 2024, Consumer Protection Act 2018, and Electronic Communications and Transactions Act 2014, among other applicable laws.`}
        sections={sections}
      />
    </main>
  );
}
