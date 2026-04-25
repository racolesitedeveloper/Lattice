import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 31 — subtopic 31.1 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC31_DRAFTS: Record<string, NoteDraft> = {
  "t31-1": {
    noteId: "t31-1",
    syllabusNotes: [
      {
        id: "how-halogenoarenes-are-made-by-arene-substitution",
        title: "Making halogenoarenes from arenes by electrophilic substitution",
        paragraphs: [
          "Halogenoarenes are formed when a halogen atom is substituted onto an aromatic ring. The required route is electrophilic substitution of an arene using Cl₂ or Br₂ with a Lewis-acid catalyst (AlCl₃ or AlBr₃).",
          "For benzene, chlorination with Cl₂/AlCl₃ gives chlorobenzene. The catalyst helps generate a stronger electrophile from the halogen molecule so the aromatic ring can react.",
          "For methylbenzene, ring chlorination under these conditions gives mainly two positional isomers, 2-chloromethylbenzene and 4-chloromethylbenzene, because the methyl group directs substitution to the 2- and 4-positions.",
        ],
      },
      {
        id: "conditions-that-select-ring-halogenation",
        title: "Why conditions matter when halogenating methylbenzene",
        paragraphs: [
          "To make halogenoarenes, conditions must favor electrophilic substitution in the ring: halogen plus Lewis-acid catalyst, without radical-initiation conditions.",
          "If ultraviolet light is used instead, free-radical substitution at the side-chain is promoted, producing benzylic halogenation products rather than ring-substituted halogenoarenes.",
          "In exam questions, reagent identity alone is not enough. You must read the conditions and identify whether they indicate electrophilic ring substitution or free-radical side-chain substitution.",
        ],
      },
      {
        id: "why-halogenoarenes-are-less-reactive-than-halogenoalkanes",
        title: "Why chlorobenzene is much less reactive than chloroethane",
        paragraphs: [
          "Chloroethane is a halogenoalkane, while chlorobenzene is a halogenoarene. Their C-Cl bonds are not equivalent, so they do not react at the same rate in nucleophilic substitution.",
          "In chlorobenzene, the lone pair on chlorine overlaps with the aromatic π system, giving partial double-bond character to the C-Cl bond. This makes the bond shorter and stronger than the C-Cl bond in chloroethane.",
          "The carbon bonded to chlorine in chlorobenzene is part of an sp² aromatic ring, which disfavors both Sₙ1 and Sₙ2 pathways under normal conditions. As a result, chlorobenzene resists hydrolysis and other nucleophilic substitution reactions that occur more readily with chloroethane.",
        ],
      },
      {
        id: "exam-comparison-language-for-reactivity",
        title: "Building high-mark comparisons of halogenoalkane vs halogenoarene reactivity",
        paragraphs: [
          "A strong comparison answer states both structure and consequence: chlorobenzene has a strengthened C-Cl bond with partial double-bond character, so bond cleavage is harder and substitution is slower.",
          "It is not enough to say only that chlorobenzene is 'more stable'. You should link aromatic delocalisation, bond character, and mechanism difficulty directly to observed lower reactivity.",
          "When asked to compare with chloroethane, mention that the halogenoalkane has a normal polar C-Cl single bond that can be attacked more readily by nucleophiles, so hydrolysis is easier.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Questions on halogen compounds at this stage reward careful condition reading and precise structural explanation. Marks are often lost when candidates mix ring substitution with side-chain substitution, or when they give incomplete reasons for chlorobenzene’s low reactivity.",
      items: [
        "Writing benzene or methylbenzene halogenation without AlCl₃/AlBr₃ catalyst when the route required is electrophilic substitution to a halogenoarene.",
        "Treating methylbenzene chlorination under UV as ring substitution instead of benzylic free-radical substitution.",
        "Stating only that chlorobenzene is 'less reactive' without explaining partial double-bond character in the C-Cl bond.",
        "Claiming chlorobenzene undergoes nucleophilic substitution as easily as chloroethane under standard hydrolysis conditions.",
        "Comparing reactivity without linking bond strength and ring electronic structure to mechanism difficulty.",
      ],
    },
    workedExamples: [
      {
        id: "t31-1-ex1",
        title: "Route to chlorobenzene from benzene",
        problem: [
          "State reagents and conditions to convert benzene into chlorobenzene, and identify the mechanism family.",
        ],
        solution: [
          "Use chlorine, Cl₂, with a Lewis-acid catalyst such as AlCl₃.",
          "The reaction proceeds by electrophilic substitution in the aromatic ring, replacing one ring hydrogen by chlorine.",
          "Catalyst-free chlorine conditions are not sufficient for benzene under normal laboratory conditions because the electrophile is not strong enough.",
        ],
      },
      {
        id: "t31-1-ex2",
        title: "Predicting major methylbenzene chlorination products",
        problem: [
          "Methylbenzene is treated with Cl₂/AlCl₃ (no UV). Predict the major ring-substituted products and explain the positional outcome.",
        ],
        solution: [
          "The major products are 2-chloromethylbenzene and 4-chloromethylbenzene.",
          "The methyl substituent is a 2,4-directing group, so electrophilic substitution is favored at the ortho and para positions relative to the methyl group.",
          "These conditions indicate electrophilic substitution in the ring, not free-radical substitution at the side-chain.",
        ],
      },
      {
        id: "t31-1-ex3",
        title: "Explaining chloroethane vs chlorobenzene reactivity",
        problem: [
          "Both chloroethane and chlorobenzene contain C-Cl bonds. Explain why chloroethane hydrolyses much more readily with aqueous alkali.",
        ],
        solution: [
          "In chloroethane, the C-Cl bond is a normal polar single bond on an sp³ carbon, so nucleophilic substitution can occur comparatively readily.",
          "In chlorobenzene, chlorine lone-pair overlap with the aromatic ring gives partial double-bond character to C-Cl, making it shorter and stronger.",
          "The aromatic sp² carbon environment also makes substitution pathways less favorable, so chlorobenzene reacts far more slowly under comparable conditions.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t31-1-st1",
        question:
          "Give reagents and catalyst needed to form chlorobenzene from benzene, and name the mechanism type.",
        modelAnswer: [
          "Reagents are Cl₂ with AlCl₃ catalyst.",
          "The mechanism type is electrophilic substitution of the aromatic ring.",
        ],
      },
      {
        id: "t31-1-st2",
        question:
          "Why does Cl₂ with AlCl₃ give ring halogenation in methylbenzene, while Cl₂ under UV gives different products?",
        modelAnswer: [
          "Cl₂/AlCl₃ generates electrophilic substitution conditions, so chlorine substitutes onto the aromatic ring.",
          "Cl₂ under UV gives free-radical conditions, so substitution occurs mainly at the benzylic side-chain position instead.",
        ],
      },
      {
        id: "t31-1-st3",
        question:
          "State the major ring-substituted products from methylbenzene with Cl₂/AlCl₃ and explain why those positions dominate.",
        modelAnswer: [
          "Major products are 2-chloromethylbenzene and 4-chloromethylbenzene.",
          "The methyl group directs incoming electrophiles to the 2- and 4-positions on the ring.",
        ],
      },
      {
        id: "t31-1-st4",
        question:
          "Explain in structural terms why chlorobenzene is much less reactive than chloroethane in nucleophilic substitution.",
        modelAnswer: [
          "In chlorobenzene, the C-Cl bond has partial double-bond character due to overlap between chlorine lone-pair electrons and the aromatic π system.",
          "This makes the C-Cl bond stronger and harder to break than the C-Cl bond in chloroethane.",
          "The sp² aromatic carbon environment also disfavors substitution pathways compared with the sp³ carbon in chloroethane.",
        ],
      },
      {
        id: "t31-1-st5",
        question:
          "A student writes: 'Both chloroethane and chlorobenzene react similarly because both are chlorinated hydrocarbons.' Correct this statement.",
        modelAnswer: [
          "The statement is incorrect because bond type and electronic structure differ strongly.",
          "Chloroethane is a halogenoalkane with a more reactive C-Cl single bond, while chlorobenzene is a halogenoarene with a strengthened C-Cl bond due to aromatic delocalisation.",
          "Therefore chlorobenzene is much less reactive in nucleophilic substitution.",
        ],
      },
    ],
  },
};
