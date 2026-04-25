import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 20 — subtopic 20.1 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC20_DRAFTS: Record<string, NoteDraft> = {
  "t20-1": {
    noteId: "t20-1",
    syllabusNotes: [
      {
        id: "addition-polymerisation-core-idea",
        title: "What addition polymerisation is",
        paragraphs: [
          "Addition polymerisation is the joining of many unsaturated monomer molecules (usually alkenes) to form one long-chain polymer, with no small molecule eliminated. The C=C bond in each monomer opens and becomes C-C single bonds in the polymer backbone.",
          "Because no by-product is lost, all atoms from the monomer appear in the polymer repeat units. This distinguishes addition polymerisation from condensation polymerisation, where small molecules such as H2O or HCl are eliminated.",
          "At this level, required exemplars are poly(ethene) and poly(chloroethene), PVC. The underlying pattern is the same for other poly(alkenes): C=C unsaturation in monomer is removed as chain growth occurs.",
        ],
      },
      {
        id: "required-examples-polyethene-pvc",
        title: "Required examples: poly(ethene) and poly(chloroethene) (PVC)",
        paragraphs: [
          "Ethene polymerises to poly(ethene): nCH2=CH2 -> [-CH2-CH2-]n. The repeat unit contains two carbon atoms with only single bonds, showing that the original C=C has opened.",
          "Chloroethene (vinyl chloride), CH2=CHCl, polymerises to poly(chloroethene) (PVC): nCH2=CHCl -> [-CH2-CH(Cl)-]n. The chlorine substituent is retained on alternate backbone carbons in the repeat-unit representation.",
          "In both examples, the repeat unit is drawn in brackets with extension bonds shown through the bracket and with n outside. Correct repeat-unit drawing is an assessed skill, not only naming.",
        ],
      },
      {
        id: "deducing-repeat-unit-from-monomer",
        title: "How to deduce a repeat unit from a monomer",
        paragraphs: [
          "Step 1: identify the C=C bond in the monomer. Step 2: remove the double bond and replace it with a single C-C bond between those two carbons. Step 3: keep all substituents attached to the same carbons as in the monomer. Step 4: draw that two-carbon fragment in brackets with continuation bonds and n.",
          "Example method on CH2=CHCH3 (propene): opening the double bond gives repeat unit [-CH2-CH(CH3)-]n. The CH3 group remains on the second carbon.",
          "If the monomer is substituted (for example CH2=CHCN or CH2=CF2), the same logic applies: only the double bond changes; substituents are carried into the repeat unit unchanged.",
        ],
      },
      {
        id: "identifying-monomer-from-polymer-segment",
        title: "How to identify monomer(s) from a polymer section",
        paragraphs: [
          "Start from a polymer section and find two adjacent backbone carbons that define one repeat unit. Reconstruct the monomer by inserting a C=C between those two carbons while keeping each substituent on the same carbon as shown in the repeat unit.",
          "For example, repeat unit [-CH2-CH(Cl)-]n corresponds to monomer CH2=CHCl. Repeat unit [-CH2-C(CH3)2-]n corresponds to monomer CH2=C(CH3)2.",
          "At Topic 20 level, the expected monomer pattern is an alkene. So a single addition polymer chain section usually points to one alkene monomer, not two different monomers (which is the pattern assessed later with condensation systems and co-polymers outside this core point).",
        ],
      },
      {
        id: "polyalkene-disposal-and-hazards",
        title: "Why poly(alkene) disposal is difficult",
        paragraphs: [
          "Poly(alkene)s are generally non-biodegradable on human timescales because their saturated C-C backbones are chemically inert and not easily broken down by common microorganisms. This leads to long persistence in landfill and the wider environment.",
          "Incineration reduces waste volume but may produce harmful combustion products, especially under incomplete combustion conditions. Common concerns include carbon monoxide, particulates/soot, and acidic or toxic gases from halogen-containing polymers (for example HCl from PVC combustion).",
          "So disposal strategy is a chemistry-and-policy trade-off: landfill persistence versus emissions from combustion. This is why reduction, re-use, and controlled recycling are emphasised in sustainable polymer management.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Addition-polymer questions are usually high-scoring when representation is precise. Marks are mainly lost through incorrect repeat-unit drawing or weak environmental explanations that omit the chemistry.",
      items: [
        "Leaving a C=C bond inside the repeat unit; in addition polymers, the repeat-unit backbone is saturated (single C-C).",
        "Changing or moving substituents when converting monomer to repeat unit, especially in PVC and substituted alkenes.",
        "Giving monomer and repeat unit as identical drawings; one must show C=C (monomer) and the other bracketed saturated segment (polymer).",
        "Writing incomplete polymer equations without n or without bracket continuation bonds.",
        "Stating only 'plastics are bad' for disposal without mentioning non-biodegradability and harmful combustion products (for example CO, acidic/toxic gases from halogenated polymers).",
      ],
    },
    workedExamples: [
      {
        id: "t20-1-ex1",
        title: "From monomer to repeat unit",
        problem: [
          "Deduce the repeat unit for each monomer: (a) ethene, CH2=CH2, (b) chloroethene, CH2=CHCl, (c) propene, CH2=CHCH3.",
        ],
        solution: [
          "Open the C=C in each monomer and keep substituents on the same carbon positions.",
          "(a) CH2=CH2 gives [-CH2-CH2-]n (poly(ethene)).",
          "(b) CH2=CHCl gives [-CH2-CH(Cl)-]n (poly(chloroethene), PVC).",
          "(c) CH2=CHCH3 gives [-CH2-CH(CH3)-]n (poly(propene)).",
          "In each case the polymer backbone has only single C-C bonds and no atoms are lost.",
        ],
      },
      {
        id: "t20-1-ex2",
        title: "From polymer segment to monomer",
        problem: [
          "A polymer has repeat unit [-CH2-C(CH3)H-]n. Identify the alkene monomer and explain your reasoning.",
        ],
        solution: [
          "The two backbone carbons in one repeat unit come from the two carbons of the original alkene double bond.",
          "Reinsert a C=C between those two carbons and keep substituents attached to the same carbon: CH2=CHCH3.",
          "So the monomer is propene.",
          "General rule: repeat-unit backbone pair -> add C=C -> monomer.",
        ],
      },
      {
        id: "t20-1-ex3",
        title: "Disposal analysis: landfill versus incineration",
        problem: [
          "Explain two chemical reasons why disposal of poly(alkene)s is challenging, and include one specific hazard for PVC combustion.",
        ],
        solution: [
          "First, poly(alkene)s are non-biodegradable because their C-C backbone is chemically inert and not easily attacked by biological systems. Waste therefore persists for long periods.",
          "Second, combustion can generate harmful products, especially if burning is incomplete or poorly controlled (for example carbon monoxide and particulates).",
          "For PVC specifically, chlorine in the polymer can produce acidic hydrogen chloride gas on combustion, which is hazardous and contributes to corrosive/emission-control challenges.",
          "Therefore neither simple landfill nor uncontrolled burning is ideal without broader waste-management controls.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t20-1-st1",
        question:
          "Define addition polymerisation and state one structural feature of the monomer required for it.",
        modelAnswer: [
          "Addition polymerisation is the joining of many unsaturated monomers to form a long-chain polymer with no small molecule eliminated.",
          "The monomer must contain a C=C bond (an alkene-type unsaturation) so the double bond can open during polymer formation.",
        ],
      },
      {
        id: "t20-1-st2",
        question:
          "Write polymerisation equations (with n notation) for (a) ethene and (b) chloroethene.",
        modelAnswer: [
          "(a) nCH2=CH2 -> [-CH2-CH2-]n.",
          "(b) nCH2=CHCl -> [-CH2-CH(Cl)-]n.",
        ],
      },
      {
        id: "t20-1-st3",
        question:
          "Deduce the repeat unit of the addition polymer formed from CH2=CHCN.",
        modelAnswer: [
          "Open the C=C and retain the CN substituent on the same carbon: repeat unit is [-CH2-CH(CN)-]n.",
        ],
      },
      {
        id: "t20-1-st4",
        question:
          "A polymer section is shown as -CH2-CH(CH3)-CH2-CH(CH3)-. Identify the monomer.",
        modelAnswer: [
          "The repeating pair is -CH2-CH(CH3)-, so reinserting a C=C gives monomer CH2=CHCH3 (propene).",
        ],
      },
      {
        id: "t20-1-st5",
        question:
          "State two reasons why disposal of poly(alkene)s is difficult, including one combustion-related issue.",
        modelAnswer: [
          "Poly(alkene)s are non-biodegradable, so they persist in landfill and the environment for long periods.",
          "Combustion can produce harmful gases or particulates (for example CO in incomplete combustion, and HCl from PVC), so incineration requires careful control.",
        ],
      },
    ],
  },
};
