import type { LegalOperator } from "@/lib/legal/operator";
import { formatOperatorName, LEGAL_REGULATORS } from "@/lib/legal/operator";
import type { LegalSection } from "@/lib/legal/types";

export const PRIVACY_EFFECTIVE_DATE = "2026-05-17";

export function getPrivacySections(op: LegalOperator): LegalSection[] {
  const operatorName = formatOperatorName(op);

  return [
    {
      id: "introduction",
      title: "1. Introduction",
      blocks: [
        {
          type: "p",
          text: `This Privacy Policy explains how ${operatorName}, a ${op.businessType}, collects, uses, stores, shares, and protects personal data when you use our website and study application (the "Service"). We process personal data in accordance with the Data Protection Act 18 of 2024 (Botswana) ("DPA") and related regulations.`,
        },
        {
          type: "p",
          text: `The data controller is ${op.operatorFullName} in respect of the ${op.tradingName} service. For privacy enquiries or to exercise your rights, contact ${op.privacyEmail}.`,
        },
      ],
    },
    {
      id: "scope",
      title: "2. Scope and territorial application",
      blocks: [
        {
          type: "p",
          text: "The DPA applies to our processing where we are established in Botswana or where we offer goods or services to individuals in Botswana, including where payment is not required (such as the free tier). If you access the Service from outside Botswana, local laws may also apply to you or to us.",
        },
        {
          type: "p",
          text: "This Policy does not apply to third-party websites or services linked from Lattice (for example PayPal or Google), which have their own privacy notices.",
        },
      ],
    },
    {
      id: "data-we-collect",
      title: "3. Personal data we collect",
      blocks: [
        {
          type: "p",
          text: "We collect only personal data that is adequate, relevant, and limited to what is necessary for the purposes below (data minimisation). Categories include:",
        },
        {
          type: "ul",
          items: [
            "Account and identity data: email address, authentication identifiers, and (if you use Google sign-in) name and profile information made available by Google.",
            "Profile and onboarding preferences: selected subjects (Physics, Chemistry, Biology), study level (AS/A Level), exam period, default subject, and onboarding completion status.",
            "Subscription and billing data: PayPal payer ID, subscription ID, plan ID, subscription status, billing interval, and current period end — not your full payment card number.",
            "Study and usage data: practice session progress, mixed drill state, mistakes archive entries, study time aggregates, study-day records, and recent activity synced to your account.",
            "Technical data: session cookies and similar technologies needed to keep you signed in and to operate the Service; basic server and security logs.",
          ],
        },
        {
          type: "p",
          text: "We do not intentionally collect sensitive personal data as defined in the DPA (such as health, biometric, or political data). Study performance data is educational usage data, not special-category health data.",
        },
      ],
    },
    {
      id: "local-storage",
      title: "4. Browser storage and device copies",
      blocks: [
        {
          type: "p",
          text: "To keep the app responsive, certain study keys are stored in your browser (localStorage) and merged with your account record (profiles.study_kv) when you are signed in. Clearing site data on a device may remove the local copy until the next successful sync from your account.",
        },
      ],
    },
    {
      id: "purposes",
      title: "5. Why we use your data and lawful bases",
      blocks: [
        {
          type: "p",
          text: "We process personal data only where we have a lawful basis under the DPA, including:",
        },
        {
          type: "ul",
          items: [
            "Performance of a contract: providing the Service, maintaining your account, syncing study progress, and administering subscriptions you purchase.",
            "Consent: where required (for example optional communications or non-essential cookies if we enable them), which you may withdraw without affecting core account functions where the law allows.",
            "Legitimate interests: securing the Service, preventing abuse, improving content and reliability, and understanding aggregate usage — balanced against your rights.",
            "Legal obligation: responding to lawful requests, tax or regulatory duties, and breach notification requirements.",
          ],
        },
        {
          type: "p",
          text: "We do not make decisions based solely on automated processing that produce legal or similarly significant effects about you. Study recommendations and progress displays are study aids, not automated decisions with legal effect.",
        },
      ],
    },
    {
      id: "children",
      title: "6. Children and young users",
      blocks: [
        {
          type: "p",
          text: "A \"child\" is a person under 18 years of age. Where we offer information society services to children, the DPA requires parental or guardian consent for processing the child's personal data, except that a child who is 16 years or older may give consent in the manner prescribed by law.",
        },
        {
          type: "p",
          text: "Lattice is used by A Level students, who may be 16–19. If you are under 16, you should use the Service only with a parent or guardian who has read this Policy and agreed on your behalf. We may take reasonable steps to verify joint consent where appropriate and proportionate.",
        },
      ],
    },
    {
      id: "sharing",
      title: "7. Who we share data with (processors)",
      blocks: [
        {
          type: "p",
          text: "We use trusted service providers who process personal data on our instructions and under written terms consistent with the DPA:",
        },
        {
          type: "ul",
          items: [
            "Supabase — authentication, database hosting, and account storage (including profile and study_kv data).",
            "PayPal — subscription checkout, payment processing, and webhook events for billing status.",
            "Google — only if you choose \"Sign in with Google\", for OAuth authentication.",
            "Hosting and infrastructure providers that deliver the application (for example Vercel or similar deployment platforms, depending on our production configuration).",
          ],
        },
        {
          type: "p",
          text: "We do not sell your personal data. We may disclose data if required by law, court order, or to protect rights, safety, and security.",
        },
      ],
    },
    {
      id: "transfers",
      title: "8. International transfers",
      blocks: [
        {
          type: "p",
          text: "Some processors may store or process data outside Botswana (for example in the United States or European Union). Where we transfer personal data to a country without an adequacy decision by the Information and Data Protection Commission, we implement appropriate safeguards under the DPA (such as standard contractual clauses, processor contracts, and technical measures) and assess transfer risk.",
        },
      ],
    },
    {
      id: "retention",
      title: "9. How long we keep data",
      blocks: [
        {
          type: "p",
          text: "We retain personal data only as long as necessary for the purposes collected, including:",
        },
        {
          type: "ul",
          items: [
            "Account and profile data: while your account is active and for a reasonable period after closure to resolve disputes, enforce terms, and meet legal obligations.",
            "Study data: while your account is active; you may request erasure when closing an account subject to legal retention needs.",
            "Billing records: as required for tax, accounting, and consumer law (typically several years unless a shorter period is mandated).",
            "Security logs: for a limited period appropriate to investigation and defence.",
          ],
        },
      ],
    },
    {
      id: "security",
      title: "10. Security",
      blocks: [
        {
          type: "p",
          text: "We implement appropriate technical and organisational measures under the DPA, including access controls, encryption in transit (HTTPS), hashed credentials handled by our auth provider, and least-privilege access to production systems. No method of transmission or storage is completely secure; please use a strong, unique password and keep it confidential.",
        },
      ],
    },
    {
      id: "rights",
      title: "11. Your rights as a data subject",
      blocks: [
        {
          type: "p",
          text: "Under the DPA you have rights including, where applicable:",
        },
        {
          type: "ul",
          items: [
            "Right of access — to obtain confirmation and a copy of your personal data.",
            "Right to rectification — to correct inaccurate or incomplete data.",
            "Right to erasure — to request deletion in certain circumstances.",
            "Right to restriction of processing — in limited cases.",
            "Right to data portability — to receive data you provided in a structured, commonly used format where processing is by automated means based on consent or contract.",
            "Right to object — including to direct marketing (we do not use your study data for direct marketing profiling).",
            "Right to withdraw consent — where processing is based on consent, without affecting prior lawful processing.",
          ],
        },
        {
          type: "p",
          text: `To exercise these rights, email ${op.privacyEmail} from your account email. We will respond without undue delay and within one month of receipt, or a longer period where permitted by the Commission with notice to you. We may need to verify your identity.`,
        },
      ],
    },
    {
      id: "breach",
      title: "12. Personal data breaches",
      blocks: [
        {
          type: "p",
          text: "If we become aware of a personal data breach likely to pose a risk to your rights and freedoms, we will notify the Information and Data Protection Commission without undue delay and, where feasible, within 72 hours of becoming aware, and we will communicate the breach to you when required by law.",
        },
      ],
    },
    {
      id: "cookies",
      title: "13. Cookies and similar technologies",
      blocks: [
        {
          type: "p",
          text: "We use essential cookies and similar technologies to maintain your session, protect the Service, and remember necessary preferences. These are required for the Service to function. We do not use non-essential advertising cookies at the time of this Policy. If we introduce analytics or marketing cookies, we will update this Policy and, where required, obtain consent before use.",
        },
      ],
    },
    {
      id: "marketing",
      title: "14. Communications",
      blocks: [
        {
          type: "p",
          text: "We may send service-related messages (for example security alerts, billing, or material changes to the Service). We do not sell your contact details. You can object to non-essential marketing at any time where we send it.",
        },
      ],
    },
    {
      id: "complaints",
      title: "15. Complaints to the regulator",
      blocks: [
        {
          type: "p",
          text: `You have the right to lodge a complaint with the ${LEGAL_REGULATORS.dataProtection} if you believe our processing infringes the DPA. We encourage you to contact us first at ${op.privacyEmail} so we can address your concern.`,
        },
        {
          type: "p",
          text: "Consumer complaints about unfair practices may also be directed to the Competition and Consumer Authority where applicable.",
        },
      ],
    },
    {
      id: "changes",
      title: "16. Changes to this Policy",
      blocks: [
        {
          type: "p",
          text: "We may update this Privacy Policy to reflect legal, technical, or business changes. The effective date at the top will change when we do. Material changes will be highlighted on the Service or by email where appropriate.",
        },
      ],
    },
    {
      id: "contact",
      title: "17. Contact",
      blocks: [
        {
          type: "p",
          text: `Data controller: ${operatorName}. Privacy contact: ${op.privacyEmail}. General enquiries: ${op.email}. Address: ${op.physicalAddress}. Terms of Service: ${op.websiteUrl}/terms.`,
        },
      ],
    },
  ];
}
