import type { LegalOperator } from "@/lib/legal/operator";
import { formatOperatorName, LEGAL_REGULATORS } from "@/lib/legal/operator";
import type { LegalSection } from "@/lib/legal/types";

export const TERMS_EFFECTIVE_DATE = "2026-05-17";

export function getTermsSections(op: LegalOperator): LegalSection[] {
  const operatorName = formatOperatorName(op);

  const regLine = op.businessRegistration
    ? `Business name registration (if applicable): ${op.businessRegistration}.`
    : null;

  const phoneLine = op.phone ? `Telephone: ${op.phone}.` : null;

  return [
    {
      id: "acceptance",
      title: "1. Agreement to these terms",
      blocks: [
        {
          type: "p",
          text: `These Terms of Service ("Terms") govern access to and use of the ${op.tradingName} website and study application (together, the "Service") operated by ${operatorName}, a ${op.businessType} ("we", "us", "our"). ${op.tradingName} is not a company, partnership, or trust. By creating an account, subscribing, or otherwise using the Service, you agree to these Terms. If you do not agree, do not use the Service.`,
        },
        {
          type: "p",
          text: "If you use the Service on behalf of a school or organisation, you confirm that you have authority to bind that organisation and that \"you\" includes the organisation.",
        },
      ],
    },
    {
      id: "operator",
      title: "2. Who we are (supplier information)",
      blocks: [
        {
          type: "p",
          text: `In compliance with the ${LEGAL_REGULATORS.electronicTransactions} and the Consumer Protection Act 2018, the following information is provided for consumers entering electronic transactions with us:`,
        },
        {
          type: "ul",
          items: [
            `Trading name: ${op.tradingName}.`,
            `Operator (natural person): ${op.operatorFullName}.`,
            `Business type: ${op.businessType}.`,
            ...(regLine ? [regLine] : []),
            `Physical address: ${op.physicalAddress}.`,
            `Address for service of legal documents: ${op.serviceOfDocumentsAddress}.`,
            `Website: ${op.websiteUrl}.`,
            `Email: ${op.email}.`,
            ...(phoneLine ? [phoneLine] : []),
          ],
        },
      ],
    },
    {
      id: "service",
      title: "3. What Lattice provides",
      blocks: [
        {
          type: "p",
          text: `${op.tradingName} is an independent online study workspace for Cambridge International A Level Physics (9702), Chemistry (9701), and Biology (9700). The Service includes syllabus-aligned notes, structured practice drills, flashcards, progress tracking, and a mistakes archive linked to topics.`,
        },
        {
          type: "p",
          text: "Lattice is not affiliated with, endorsed by, or sponsored by Cambridge Assessment International Education or any examination board. Official syllabus documents, past papers, and mark schemes published by exam boards remain the authoritative source for examinations. You are responsible for verifying requirements with your school and Cambridge.",
        },
      ],
    },
    {
      id: "eligibility",
      title: "4. Eligibility and accounts",
      blocks: [
        {
          type: "p",
          text: "The Service is intended for students preparing for Cambridge International A Level examinations and for personal study use. You must provide accurate registration information and keep your sign-in credentials confidential.",
        },
        {
          type: "p",
          text: "Where the Service is offered as an information society service to a child under 18 years of age, processing of personal data requires parental or guardian consent under the Data Protection Act 18 of 2024, except where the child is 16 or older and may consent in the manner prescribed by law. By allowing a child under 16 to use the Service, a parent or guardian confirms they have read our Privacy Policy and consent to the child's use and associated data processing.",
        },
        {
          type: "p",
          text: "You may sign in using email and password or, where enabled, Google sign-in. You are responsible for all activity under your account.",
        },
      ],
    },
    {
      id: "plans",
      title: "5. Free tier and Full access",
      blocks: [
        {
          type: "ul",
          items: [
            "Free tier: access to the first three topics in each subject (Physics, Chemistry, Biology), including notes and practice for those topics, without payment.",
            "Full access: unlocks the full topic map, all drill packs, flashcards, and the mistakes archive across all three subjects while an eligible paid subscription is active.",
            "Feature availability may change as we improve the Service; material changes to paid features will be communicated in line with these Terms.",
          ],
        },
      ],
    },
    {
      id: "pricing",
      title: "6. Pricing, billing, and payment",
      blocks: [
        {
          type: "p",
          text: "Full access is offered as a recurring subscription billed through PayPal at the prices displayed at checkout (currently USD $2.99 per month or USD $29.99 per year unless otherwise shown). Prices include the subscription fee shown; PayPal or your card issuer may apply separate fees or currency conversion.",
        },
        {
          type: "ul",
          items: [
            "Payment method: PayPal subscription checkout. We do not store your full card number on our servers.",
            "We store PayPal subscription identifiers and status so we can unlock Full access in the app.",
            "Subscriptions renew automatically until cancelled in PayPal or through in-app cancellation flows where provided.",
            "If payment fails or a subscription is cancelled or suspended, Full access may end at the end of the current paid period or immediately where PayPal indicates the subscription is no longer active.",
          ],
        },
        {
          type: "p",
          text: "Before you complete a subscription purchase, you will have the opportunity to review the transaction details and confirm or withdraw, in line with the Electronic Communications and Transactions Act.",
        },
      ],
    },
    {
      id: "cancellation",
      title: "7. Cancellation, cooling-off, and refunds",
      blocks: [
        {
          type: "p",
          text: "You may cancel a PayPal subscription at any time through your PayPal account or applicable in-app controls. Cancellation stops future charges; access typically continues until the end of the billing period already paid.",
        },
        {
          type: "p",
          text: "Under the Electronic Communications and Transactions Act 2014, consumers may have a cooling-off right for certain electronic transactions, including a right to cancel within seven days after the conclusion of an agreement for services in specified circumstances, and additional rights where required supplier information was not provided. Digital services that you begin using immediately with your express consent before the end of the cooling-off period may fall within statutory exclusions; we will still honour mandatory consumer rights under Botswana law.",
        },
        {
          type: "p",
          text: "Refunds are handled in accordance with PayPal's policies and applicable law. Unless required by law or expressly stated at purchase, fees already paid for a billing period in which you had Full access are non-refundable. To request a refund or billing help, contact us at the email below with your account email and PayPal subscription reference.",
        },
        {
          type: "p",
          text: "Nothing in these Terms limits rights you cannot waive under the Consumer Protection Act 2018, including protection against unfair, unreasonable, or unjust contract terms.",
        },
      ],
    },
    {
      id: "conduct",
      title: "8. Acceptable use",
      blocks: [
        {
          type: "p",
          text: "You agree not to misuse the Service. In particular, you must not:",
        },
        {
          type: "ul",
          items: [
            "Copy, scrape, resell, or redistribute content except as permitted by law or our written permission.",
            "Attempt to bypass access controls, topic limits, or payment requirements.",
            "Upload malware, interfere with security, or overload our systems.",
            "Use the Service for unlawful purposes or in a way that infringes others' rights.",
            "Share account credentials except as permitted for personal household use.",
          ],
        },
        {
          type: "p",
          text: "We may suspend or terminate access if we reasonably believe you have breached these Terms or pose a risk to the Service or other users.",
        },
      ],
    },
    {
      id: "ip",
      title: "9. Intellectual property",
      blocks: [
        {
          type: "p",
          text: `Notes, drills, flashcards, software, branding, and other materials in the Service are owned by or licensed to ${operatorName} and protected by copyright and other intellectual property laws. Cambridge International naming and syllabus references are used descriptively to identify alignment; Cambridge trademarks belong to their respective owners.`,
        },
        {
          type: "p",
          text: "We grant you a limited, personal, non-exclusive, non-transferable licence to access and use the Service for your own study while you comply with these Terms. You retain rights in content you submit (for example, answers you type); you grant us a licence to store and process that content to operate the Service.",
        },
      ],
    },
    {
      id: "study-data",
      title: "10. Study data and availability",
      blocks: [
        {
          type: "p",
          text: "Practice progress, study time, recent activity, and mistakes archive data are stored in your account and may be cached in your browser for performance. We aim for reliable sync but do not guarantee uninterrupted access. You should maintain your own exam preparation records where failure of the Service could cause loss.",
        },
        {
          type: "p",
          text: "We may modify, suspend, or discontinue features with reasonable notice where practicable. We are not liable for syllabus changes by Cambridge or for examination outcomes.",
        },
      ],
    },
    {
      id: "liability",
      title: "11. Disclaimers and limitation of liability",
      blocks: [
        {
          type: "p",
          text: "The Service is provided for educational support. We do not warrant that use of the Service will achieve any particular grade or examination result. To the fullest extent permitted by law, the Service is provided \"as is\" and \"as available\".",
        },
        {
          type: "p",
          text: `To the extent permitted by Botswana law, ${operatorName} is not liable for indirect, incidental, or consequential loss, or for loss of data, profits, or opportunity, except where such limitation is prohibited (including under the Consumer Protection Act for consumers). Our total liability for claims relating to the Service in any twelve-month period is limited to the greater of (a) amounts you paid us for Full access in that period, or (b) BWP 500, except where a higher minimum is required by law.`,
        },
      ],
    },
    {
      id: "disputes",
      title: "12. Complaints, disputes, and governing law",
      blocks: [
        {
          type: "p",
          text: `Contact us first at ${op.email} so we can try to resolve concerns. Consumers may also lodge complaints with the ${LEGAL_REGULATORS.consumer} where applicable.`,
        },
        {
          type: "p",
          text: `These Terms are governed by the laws of the ${op.governingLaw}. Courts in Botswana have jurisdiction, subject to any mandatory consumer protections in your country of residence where they apply to you as a consumer.`,
        },
      ],
    },
    {
      id: "changes",
      title: "13. Changes to these Terms",
      blocks: [
        {
          type: "p",
          text: "We may update these Terms from time to time. We will post the revised version on this page and update the effective date. Material changes affecting paid subscriptions will be brought to your attention where required by law. Continued use after the effective date constitutes acceptance where permitted by law.",
        },
      ],
    },
    {
      id: "contact",
      title: "14. Contact",
      blocks: [
        {
          type: "p",
          text: `Questions about these Terms: ${op.email}. Privacy requests: ${op.privacyEmail}. Related policies: Privacy Policy at ${op.websiteUrl}/privacy.`,
        },
      ],
    },
  ];
}
