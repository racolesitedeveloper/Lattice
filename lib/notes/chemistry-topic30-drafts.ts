import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 30 — subtopic 30.1 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC30_DRAFTS: Record<string, NoteDraft> = {
  "t30-1": {
    noteId: "t30-1",
    syllabusNotes: [
      {
        id: "arene-reactivity-core-idea",
        title: "Arenes: why benzene reacts by substitution",
        paragraphs: [
          "Arenes are aromatic compounds containing a benzene ring. In benzene, each carbon is sp² hybridised and the ring has a delocalised π system above and below the planar carbon framework. This delocalisation gives aromatic stabilisation, so the ring is unusually stable compared with a localised cyclohexatriene model.",
          "Because aromatic stabilisation is valuable energetically, benzene usually reacts by substitution rather than addition. In substitution, one H on the ring is replaced and aromaticity is restored. In addition, the π system would be disrupted permanently, so addition is much less favourable under ordinary conditions.",
          "Methylbenzene is an arene with a ring and an alkyl side-chain. It can react at the ring under electrophilic substitution conditions, and it can also react at the side-chain under free-radical halogenation conditions. The exam focus is selecting the correct pathway from reagents and conditions.",
        ],
      },
      {
        id: "electrophilic-substitution-reactions",
        title: "Required arene reactions: halogenation, nitration, Friedel-Crafts, oxidation, hydrogenation",
        paragraphs: [
          "Benzene and methylbenzene undergo halogenation of the aromatic ring with Cl₂ or Br₂ only when a halogen carrier catalyst is present, typically AlCl₃ for chlorination or AlBr₃ for bromination. The catalyst polarises the halogen molecule and generates a strong electrophile, allowing substitution to form halogenoarenes.",
          "Nitration uses a mixture of concentrated HNO₃ and concentrated H₂SO₄, warmed with controlled temperature (kept below about 60 °C) to favour mononitration. Sulfuric acid generates the nitronium ion, NO₂⁺, which attacks the ring to form nitroarene products.",
          "Friedel-Crafts alkylation introduces an alkyl group onto the ring (for this syllabus, CH₃Cl with AlCl₃ and heat). Friedel-Crafts acylation introduces an acyl group (for this syllabus, CH₃COCl with AlCl₃ and heat). Both are electrophilic substitution processes and both require a Lewis-acid catalyst.",
          "Alkyl side-chains on arenes are fully oxidised by hot alkaline KMnO₄, then acidification, to give a carboxylic acid attached to the ring (for example methylbenzene to benzoic acid). The side-chain carbon bonded directly to the ring becomes the carboxyl carbon.",
          "The aromatic ring can be hydrogenated only under forcing conditions, using H₂ with a Ni or Pt catalyst and heat, to form a cyclohexane ring. This reaction is addition because aromaticity is lost, so harsh conditions are needed compared with ordinary electrophilic substitution.",
        ],
      },
      {
        id: "electrophilic-substitution-mechanism",
        title: "Electrophilic substitution mechanism in arenes",
        paragraphs: [
          "The mechanism has three core stages. First, generation of the electrophile (for example Br⁺ from Br₂/AlBr₃, or NO₂⁺ from nitrating mixture). Second, attack of the aromatic π system on the electrophile to form a positively charged intermediate (the arenium ion). Aromaticity is temporarily lost at this stage.",
          "Third, a base removes H⁺ from the carbon bearing the electrophile, restoring the delocalised π system and regenerating aromatic stabilisation. This restoration step is the reason substitution products dominate.",
          "For bromination of benzene, the electrophile source is Br₂ activated by AlBr₃; for nitration of benzene, the electrophile is NO₂⁺ generated in situ. In both mechanisms, the key explanation for preferred substitution is 'temporary loss but final restoration of aromaticity'.",
        ],
      },
      {
        id: "ring-vs-sidechain-halogenation",
        title: "Predicting ring halogenation vs side-chain halogenation",
        paragraphs: [
          "In methylbenzene, halogenation in the ring occurs under electrophilic substitution conditions: Cl₂ or Br₂ with AlCl₃ or AlBr₃ (typically no UV initiation). These conditions generate an electrophile for ring attack.",
          "Halogenation in the side-chain occurs under free-radical conditions, typically halogen with ultraviolet light or strong radical initiation. These conditions promote substitution at benzylic C-H positions in the side-chain, not electrophilic attack on the aromatic ring.",
          "So the reagent can look similar, but conditions decide pathway: Lewis-acid catalyst points to ring substitution; UV/radical conditions point to side-chain substitution.",
        ],
      },
      {
        id: "directing-effects-of-substituents",
        title: "Directing effects: where a second substitution goes",
        paragraphs: [
          "Substituents already on the ring affect both rate and position of further substitution. For this syllabus, learn directing patterns for -NH₂, -OH, -R, -NO₂, -COOH and -COR.",
          "-NH₂, -OH and -R are 2,4-directing (ortho/para-directing). They increase electron density in the ring (especially at 2 and 4 positions), so electrophiles are guided mainly to those positions.",
          "-NO₂, -COOH and -COR are 3-directing (meta-directing). They withdraw electron density and make 2 and 4 attack less favourable, so substitution is directed mainly to position 3.",
          "Exam questions often combine this with reagent conditions. First identify mechanism and electrophile, then apply directing effect to predict major product positions.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Arenes questions reward accurate condition selection and mechanism language. Examiners expect you to distinguish aromatic electrophilic substitution from free-radical side-chain chemistry and to justify product patterns with directing effects.",
      items: [
        "Writing benzene halogenation without AlCl₃/AlBr₃ catalyst, as if bromine water reacts directly like with alkenes.",
        "Treating nitration as a free-radical process instead of electrophilic substitution via NO₂⁺.",
        "Explaining substitution preference without mentioning aromatic stabilisation and restoration of delocalisation.",
        "Confusing methylbenzene ring halogenation conditions (Lewis-acid catalyst) with side-chain halogenation conditions (UV/free radicals).",
        "Mis-stating -NO₂, -COOH or -COR as 2,4-directing; these groups are 3-directing in this syllabus set.",
      ],
    },
    workedExamples: [
      {
        id: "t30-1-ex1",
        title: "Mechanism focus: nitration of benzene",
        problem: [
          "Explain how benzene forms nitrobenzene with concentrated HNO₃ and concentrated H₂SO₄, and why substitution is favored over addition.",
        ],
        solution: [
          "Concentrated H₂SO₄ acts as the stronger acid and helps generate the electrophile NO₂⁺ from the nitrating mixture.",
          "The benzene π system attacks NO₂⁺ to form an arenium ion intermediate, where aromatic delocalisation is temporarily disrupted and the ring carries a positive charge.",
          "A base then removes H⁺ from the substituted carbon, restoring the aromatic π system and forming nitrobenzene.",
          "Substitution is favored because aromatic stabilisation is recovered in the product. An addition pathway would destroy aromaticity in the final product and is therefore much less favorable under these conditions.",
        ],
      },
      {
        id: "t30-1-ex2",
        title: "Conditions focus: ring vs side-chain chlorination of methylbenzene",
        problem: [
          "Predict the main reaction site in methylbenzene for each set of conditions: (a) Cl₂ with AlCl₃, no UV, (b) Cl₂ under UV light with no Lewis-acid catalyst. Explain your choices.",
        ],
        solution: [
          "(a) Ring chlorination is favored. AlCl₃ activates Cl₂ to produce a strong electrophile for electrophilic substitution on the aromatic ring.",
          "(b) Side-chain chlorination is favored. UV light initiates free-radical substitution, which occurs at benzylic C-H positions in the methyl side-chain.",
          "So the key discriminator is mechanism control by conditions: Lewis-acid catalyst gives electrophilic ring substitution; UV gives radical side-chain substitution.",
        ],
      },
      {
        id: "t30-1-ex3",
        title: "Directing effects with a synthetic step",
        problem: [
          "A ring already contains a -CH₃ group. Predict the major positions for nitration, then state the product of oxidising that alkyl side-chain with hot alkaline KMnO₄ followed by dilute acid.",
        ],
        solution: [
          "-CH₃ is a 2,4-directing group, so nitration of methylbenzene gives mainly 2-nitromethylbenzene and 4-nitromethylbenzene (ortho and para products).",
          "On strong oxidation, the side-chain is converted to -COOH. Therefore the methyl-substituted nitro products become the corresponding nitrobenzoic acids after hot alkaline KMnO₄ and acidification.",
          "This combines directing effects (position control in substitution) with side-chain oxidation chemistry (functional-group transformation).",
        ],
      },
    ],
    selfTest: [
      {
        id: "t30-1-st1",
        question:
          "State suitable reagents and conditions for benzene to undergo (a) bromination, (b) nitration, (c) Friedel-Crafts alkylation with CH₃Cl, and (d) Friedel-Crafts acylation with CH₃COCl.",
        modelAnswer: [
          "(a) Br₂ with AlBr₃ catalyst (electrophilic substitution conditions).",
          "(b) Concentrated HNO₃ with concentrated H₂SO₄, warmed with controlled temperature below about 60 °C.",
          "(c) CH₃Cl with AlCl₃ and heat.",
          "(d) CH₃COCl with AlCl₃ and heat.",
        ],
      },
      {
        id: "t30-1-st2",
        question:
          "Write a concise mechanistic explanation for why benzene usually undergoes substitution rather than addition.",
        modelAnswer: [
          "Benzene is aromatically stabilised by a delocalised π system. In electrophilic substitution, aromaticity is only temporarily disrupted and then restored, but addition would remove aromatic stabilisation in the final product, so substitution is preferred.",
        ],
      },
      {
        id: "t30-1-st3",
        question:
          "Methylbenzene is treated with bromine under two conditions: (i) Br₂/AlBr₃, (ii) Br₂/UV. For each, state whether halogenation occurs mainly in the ring or side-chain.",
        modelAnswer: [
          "(i) Br₂/AlBr₃: mainly ring halogenation (electrophilic substitution).",
          "(ii) Br₂/UV: mainly side-chain halogenation (free-radical substitution at benzylic C-H).",
        ],
      },
      {
        id: "t30-1-st4",
        question:
          "Classify each substituent as 2,4-directing or 3-directing: -NH₂, -OH, -R, -NO₂, -COOH, -COR.",
        modelAnswer: [
          "2,4-directing: -NH₂, -OH, -R.",
          "3-directing: -NO₂, -COOH, -COR.",
        ],
      },
      {
        id: "t30-1-st5",
        question:
          "Give reagents/conditions and product type for converting methylbenzene into benzoic acid, and for hydrogenating benzene into cyclohexane.",
        modelAnswer: [
          "Methylbenzene to benzoic acid: hot alkaline KMnO₄ followed by dilute acid; this oxidises the alkyl side-chain fully to -COOH.",
          "Benzene to cyclohexane: H₂ with Ni or Pt catalyst and heat (forcing hydrogenation conditions).",
        ],
      },
    ],
  },
};
