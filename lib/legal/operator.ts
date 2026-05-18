/**
 * Operator particulars for ECT Act s.43 disclosure and privacy notices.
 * Lattice is operated as a solo business (sole proprietorship), not a company.
 * Set NEXT_PUBLIC_LEGAL_OPERATOR_NAME and address fields before launch.
 */
export type LegalOperator = {
  tradingName: string;
  /** Full legal name of the individual operating the business. */
  operatorFullName: string;
  businessType: string;
  /** Optional — only if you have registered a business name with CIPA or similar. */
  businessRegistration: string | null;
  physicalAddress: string;
  serviceOfDocumentsAddress: string;
  websiteUrl: string;
  email: string;
  privacyEmail: string;
  phone: string | null;
  country: string;
  governingLaw: string;
};

/** e.g. "Jane Doe, trading as Lattice" */
export function formatOperatorName(op: LegalOperator): string {
  return `${op.operatorFullName}, trading as ${op.tradingName}`;
}

export function getLegalOperator(): LegalOperator {
  const websiteUrl = (
    process.env.NEXT_PUBLIC_APP_URL ??
    process.env.APP_URL ??
    "https://lattice.app"
  ).replace(/\/$/, "");

  const operatorFullName =
    process.env.NEXT_PUBLIC_LEGAL_OPERATOR_NAME?.trim() ||
    process.env.NEXT_PUBLIC_LEGAL_ENTITY_NAME?.trim() ||
    "the proprietor";

  return {
    tradingName: "Lattice",
    operatorFullName,
    businessType:
      "sole proprietorship (solo business — not a registered company or partnership)",
    businessRegistration:
      process.env.NEXT_PUBLIC_LEGAL_BUSINESS_REGISTRATION?.trim() ||
      process.env.NEXT_PUBLIC_LEGAL_REGISTRATION_NUMBER?.trim() ||
      null,
    physicalAddress:
      process.env.NEXT_PUBLIC_LEGAL_PHYSICAL_ADDRESS?.trim() || "Botswana",
    serviceOfDocumentsAddress:
      process.env.NEXT_PUBLIC_LEGAL_SERVICE_ADDRESS?.trim() ||
      process.env.NEXT_PUBLIC_LEGAL_PHYSICAL_ADDRESS?.trim() ||
      "Botswana",
    websiteUrl,
    email: process.env.NEXT_PUBLIC_LEGAL_EMAIL?.trim() || "legal@lattice.app",
    privacyEmail:
      process.env.NEXT_PUBLIC_PRIVACY_EMAIL?.trim() || "privacy@lattice.app",
    phone: process.env.NEXT_PUBLIC_LEGAL_PHONE?.trim() || null,
    country: "Republic of Botswana",
    governingLaw: "Republic of Botswana",
  };
}

export const LEGAL_REGULATORS = {
  dataProtection:
    "Information and Data Protection Commission (IDPC), established under the Data Protection Act 18 of 2024",
  consumer:
    "Competition and Consumer Authority (CCA), under the Consumer Protection Act 2018",
  electronicTransactions:
    "Electronic Communications and Transactions Act 2014 (Cap. 72:03)",
} as const;
