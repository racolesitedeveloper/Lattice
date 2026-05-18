import Link from "next/link";
import LegalDocument from "@/components/legal/LegalDocument";
import { getLegalOperator } from "@/lib/legal/operator";
import { getPrivacySections, PRIVACY_EFFECTIVE_DATE } from "@/lib/legal/privacy";
import s from "../legal.module.css";

export const metadata = {
  title: "Privacy Policy — Lattice",
  description:
    "How Lattice collects, uses, and protects personal data under Botswana's Data Protection Act 18 of 2024.",
};

export default function PrivacyPage() {
  const operator = getLegalOperator();
  const sections = getPrivacySections(operator);

  return (
    <main className={s.page}>
      <Link href="/" className={s.backLink}>
        Back to Lattice
      </Link>
      <LegalDocument
        title="Privacy Policy"
        effectiveDate={PRIVACY_EFFECTIVE_DATE}
        intro={`${operator.tradingName} is committed to protecting your privacy. This Policy describes our practices as a data controller under Botswana law and how you can exercise your rights.`}
        sections={sections}
      />
    </main>
  );
}
