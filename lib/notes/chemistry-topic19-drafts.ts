import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 19 - subtopics 19.1-19.2 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC19_DRAFTS: Record<string, NoteDraft> = {
  "t19-1": {
    noteId: "t19-1",
    syllabusNotes: [
      {
        id: "primary-amine-definition-and-structure",
        title: "Primary amines: what they are and why they matter in synthesis",
        paragraphs: [
          "A primary amine contains the functional group -NH2 attached to one carbon-containing group, written generally as RNH2. At this AS stage, the key point is not detailed classification testing, but using amines correctly in preparation and synthesis pathways.",
          "Primary amines are basic because nitrogen has a lone pair and can accept a proton, forming RNH3+. This basic behaviour links to acid-base chemistry and salt formation.",
          "In organic synthesis, primary amines are valuable intermediates because they can be formed from halogenoalkanes and then used to make further products such as amides in later topics.",
        ],
      },
      {
        id: "amine-production-from-halogenoalkanes",
        title: "Required preparation: halogenoalkane + ammonia in ethanol under pressure",
        paragraphs: [
          "The required route is nucleophilic substitution of a halogenoalkane by ammonia. Conditions are ammonia in ethanol, heated under pressure (sealed tube conditions) so gaseous ammonia remains in contact with the substrate.",
          "A representative equation is C2H5Br + 2NH3 -> C2H5NH2 + NH4Br. One ammonia molecule acts as nucleophile to form the amine, and another accepts H+ to form ammonium salt.",
          "Using excess ammonia helps increase the proportion of primary amine by suppressing further substitution. If ammonia is not in excess, further alkylation can produce secondary and tertiary amines and even quaternary ammonium salts.",
        ],
      },
      {
        id: "mechanistic-view-and-condition-control",
        title: "Mechanistic reasoning and product control",
        paragraphs: [
          "The C-X bond in halogenoalkanes is polar (C delta plus, X delta minus), so nitrogen lone pair in NH3 attacks the carbon bearing halogen. Halide leaves as X-.",
          "For primary halogenoalkanes this route is usually SN2-like at this level, while secondary systems may show mixed behaviour depending on structure and conditions.",
          "The pressure and ethanolic conditions are practical and chemical requirements: pressure keeps NH3 available; ethanol provides an organic-compatible medium and supports substitution conditions used in this syllabus.",
        ],
      },
      {
        id: "link-to-synthesis-planning",
        title: "Using this route in route design",
        paragraphs: [
          "This preparation is often used when planning carbon skeleton transformations from halogenoalkanes. It preserves carbon count while replacing halogen with an amino group.",
          "If chain extension is needed, nitrile formation (Topic 19.2) is usually chosen instead, then transformed further. So students should distinguish clearly between direct amine formation (no chain extension) and nitrile route (plus one carbon).",
          "In exam route questions, marks usually depend on selecting correct reagent set and conditions in full, not only naming ammonia.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners expect the exact syllabus preparation route and conditions for primary amines. Most lost marks come from incomplete conditions or confusion with nitrile formation conditions.",
      items: [
        "Writing aqueous ammonia at room temperature instead of ethanol with heating under pressure.",
        "Using KCN conditions when the target product is an amine rather than a nitrile.",
        "Forgetting that two NH3 molecules are involved overall in the balanced equation (one nucleophile, one proton acceptor).",
        "Assuming only primary amine forms regardless of reagent ratios; excess ammonia is needed to limit further substitution.",
        "Giving mechanism labels without stating the underlying nucleophilic substitution idea at C delta plus.",
      ],
    },
    workedExamples: [
      {
        id: "t19-1-ex1",
        title: "Writing the required preparation equation",
        problem: [
          "Write a balanced equation for forming propylamine from 1-bromopropane using the syllabus route and state the key conditions.",
        ],
        solution: [
          "Balanced equation: CH3CH2CH2Br + 2NH3 -> CH3CH2CH2NH2 + NH4Br.",
          "Key conditions: ammonia in ethanol, heated under pressure (sealed tube).",
          "This is nucleophilic substitution of halogen by the amino group and is the required Topic 19.1 preparation route.",
        ],
      },
      {
        id: "t19-1-ex2",
        title: "Explaining why excess ammonia is used",
        problem: [
          "A student uses only a small amount of ammonia to react with bromoethane and obtains a mixture of amines. Explain why excess ammonia is normally used.",
        ],
        solution: [
          "Primary amine product (ethylamine) is itself nucleophilic and can react further with halogenoalkane to form secondary and then tertiary amines.",
          "Using excess NH3 increases the chance that halogenoalkane molecules collide with NH3 rather than with already formed amine molecules.",
          "So excess NH3 suppresses over-alkylation and improves the proportion of primary amine formed.",
        ],
      },
      {
        id: "t19-1-ex3",
        title: "Route-choice distinction: amine versus nitrile",
        problem: [
          "You must convert bromoethane into (a) ethylamine and (b) propanenitrile. State reagents/conditions for each and explain the carbon-count difference.",
        ],
        solution: [
          "For ethylamine: use NH3 in ethanol, heat under pressure. Product is CH3CH2NH2 and carbon count is unchanged.",
          "For propanenitrile: use KCN in ethanol and heat. Product is CH3CH2CN and carbon count increases by one because CN contributes one carbon atom.",
          "Choosing between these routes depends on whether chain extension is required in the synthesis plan.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t19-1-st1",
        question:
          "State the required syllabus reaction for producing primary amines in Topic 19.1.",
        modelAnswer: [
          "Primary amines are produced by reacting a halogenoalkane with NH3 in ethanol, heated under pressure (nucleophilic substitution).",
        ],
      },
      {
        id: "t19-1-st2",
        question:
          "Write a balanced equation for C2H5Cl reacting with ammonia to form ethylamine.",
        modelAnswer: [
          "C2H5Cl + 2NH3 -> C2H5NH2 + NH4Cl.",
        ],
      },
      {
        id: "t19-1-st3",
        question:
          "Why is ammonia used in ethanol and heated under pressure rather than simply using dilute aqueous ammonia at room temperature?",
        modelAnswer: [
          "CH₃CH₂Cl + 2NH₃ → CH₃CH₂NH₂ + NH₄Cl under ethanol solvent, heat, and pressure.",
          "The halogenoalkane undergoes nucleophilic substitution by ammonia to form a primary amine.",
        ],
      },
      {
        id: "t19-1-st4",
        question:
          "Explain briefly why excess ammonia improves yield of primary amine.",
        modelAnswer: [
          "The carbon chain length is unchanged: three carbons in 1-chloropropane and three in propylamine.",
          "Only the functional group at the end of the chain is replaced (Cl → NH₂).",
        ],
      },
      {
        id: "t19-1-st5",
        question:
          "In one sentence, distinguish the halogenoalkane-to-amine route from the halogenoalkane-to-nitrile route.",
        modelAnswer: [
          "Halogenoalkane plus NH3 in ethanol under pressure gives an amine with unchanged carbon count, whereas halogenoalkane plus KCN in ethanol and heat gives a nitrile with one extra carbon.",
        ],
      },
    ],
  },

  "t19-2": {
    noteId: "t19-2",
    syllabusNotes: [
      {
        id: "nitriles-and-hydroxynitriles-overview",
        title: "Nitriles and hydroxynitriles: functional groups and synthetic role",
        paragraphs: [
          "A nitrile contains the -C≡N functional group (general form RCN). Nitriles are important because they are versatile intermediates that can be converted into carboxylic acids (and, at higher levels, amines).",
          "A hydroxynitrile (cyanohydrin) contains both -OH and -CN on adjacent connectivity generated from carbonyl addition, for example RCH(OH)CN or R2C(OH)CN.",
          "These compounds appear in synthesis because nitrile formation from halogenoalkanes extends carbon chain length by one carbon, while hydroxynitrile formation adds useful functionality at a former carbonyl carbon.",
        ],
      },
      {
        id: "nitrile-preparation-from-halogenoalkanes",
        title: "Required preparation of nitriles from halogenoalkanes",
        paragraphs: [
          "The required route is nucleophilic substitution using KCN in ethanol with heat. Cyanide ion attacks the carbon attached to halogen and replaces X-.",
          "Representative equation: C2H5Br + KCN -> C2H5CN + KBr (ethanol, heat). Ionic form: C2H5Br + CN- -> C2H5CN + Br-.",
          "This route is strategically important because the nitrile carbon counts as a new carbon in the product, so carbon chain length increases by one.",
        ],
      },
      {
        id: "hydroxynitrile-preparation-from-carbonyls",
        title: "Required preparation of hydroxynitriles from aldehydes and ketones",
        paragraphs: [
          "Hydroxynitriles are formed by reaction of aldehydes or ketones with HCN, using KCN as catalyst, with heat. This is nucleophilic addition to the C=O group.",
          "Example from ethanal: CH3CHO + HCN -> CH3CH(OH)CN. Example from propanone: CH3COCH3 + HCN -> (CH3)2C(OH)CN.",
          "Mechanistically, CN- attacks the electron-deficient carbonyl carbon to form an alkoxide intermediate, which is then protonated to give the hydroxynitrile.",
        ],
      },
      {
        id: "hydrolysis-of-nitriles-to-carboxylic-acids",
        title: "Hydrolysis of nitriles to carboxylic acids",
        paragraphs: [
          "Nitriles hydrolyse to carboxylic acids under acidic or alkaline hydrolysis conditions. The syllabus requires dilute acid or dilute alkali, followed by acidification where needed.",
          "Acid route (general): RCN + 2H2O + H+ -> RCOOH + NH4+ (written in molecular form with acid reagent as appropriate).",
          "Alkaline route first gives carboxylate: RCN + H2O + OH- -> RCOO- + NH3 (overall representation), then acidification converts RCOO- to RCOOH.",
          "Thus, both routes lead to carboxylic acid as final required product when acidification is included after alkaline hydrolysis.",
        ],
      },
      {
        id: "condition-selection-and-synthesis-links",
        title: "Choosing conditions and linking routes in synthesis",
        paragraphs: [
          "If the target is a nitrile directly, use KCN in ethanol with heat from halogenoalkane. If target is hydroxynitrile, start from aldehyde/ketone with HCN and KCN catalyst.",
          "If target is carboxylic acid with one extra carbon relative to original halogenoalkane, a common sequence is halogenoalkane -> nitrile -> hydrolysis -> carboxylic acid.",
          "Exam route-design questions reward precise condition language: 'dilute acid hydrolysis' or 'dilute alkali then acidification' is expected, not just 'add water'.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Most Topic 19.2 errors are reagent-condition mix-ups and carbon-count mistakes. Examiners expect exact route selection and clear distinction between nitrile and hydroxynitrile chemistry.",
      items: [
        "Using aqueous KCN instead of ethanolic KCN for the required halogenoalkane substitution route.",
        "Claiming nitrile formation does not change carbon count; it increases chain length by one carbon.",
        "Confusing nitriles (RCN) with hydroxynitriles (which also contain -OH).",
        "Omitting HCN and KCN catalyst conditions when forming hydroxynitriles from aldehydes/ketones.",
        "Stopping alkaline nitrile hydrolysis at carboxylate and forgetting required acidification to obtain carboxylic acid.",
      ],
    },
    workedExamples: [
      {
        id: "t19-2-ex1",
        title: "Nitrile synthesis and chain extension",
        problem: [
          "Write the equation and conditions for converting 1-bromopropane to butanenitrile, and state how carbon count changes.",
        ],
        solution: [
          "Equation: CH3CH2CH2Br + KCN -> CH3CH2CH2CN + KBr.",
          "Conditions: KCN in ethanol, heat.",
          "Carbon count increases from 3 to 4 because the nitrile carbon from CN becomes part of the product chain.",
        ],
      },
      {
        id: "t19-2-ex2",
        title: "Hydroxynitrile formation from a ketone",
        problem: [
          "Give the product of propanone reacting with HCN (KCN catalyst, heat) and explain the reaction type.",
        ],
        solution: [
          "Propanone, CH3COCH3, gives hydroxynitrile (CH3)2C(OH)CN.",
          "Reaction type is nucleophilic addition: CN- attacks the carbonyl carbon and the resulting alkoxide is protonated.",
          "This converts C=O into C(OH)(CN), introducing both hydroxyl and nitrile functionality in one step.",
        ],
      },
      {
        id: "t19-2-ex3",
        title: "Hydrolysing nitrile to carboxylic acid by two routes",
        problem: [
          "Outline how propanenitrile can be converted to propanoic acid by (a) acidic hydrolysis and (b) alkaline hydrolysis. Include the required final step for the alkaline route.",
        ],
        solution: [
          "(a) Acidic hydrolysis: heat propanenitrile with dilute acid to hydrolyse -CN to carboxylic acid (propanoic acid formed directly in acidic medium).",
          "(b) Alkaline hydrolysis: heat propanenitrile with dilute alkali to form propanoate salt first, then add dilute acid to acidify and produce propanoic acid.",
          "The acidification step after alkaline hydrolysis is essential when the final required product is the carboxylic acid.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t19-2-st1",
        question:
          "State the required reaction (reagents and conditions) for producing nitriles from halogenoalkanes.",
        modelAnswer: [
          "React the halogenoalkane with KCN in ethanol and heat (nucleophilic substitution), forming nitrile and halide salt.",
        ],
      },
      {
        id: "t19-2-st2",
        question:
          "State the required reaction (reagents and conditions) for producing hydroxynitriles from aldehydes or ketones.",
        modelAnswer: [
          "React the aldehyde or ketone with HCN, using KCN as catalyst, with heat (nucleophilic addition to C=O).",
        ],
      },
      {
        id: "t19-2-st3",
        question:
          "Write a product equation for ethanal reacting with HCN.",
        modelAnswer: [
          "CH3CHO + HCN -> CH3CH(OH)CN.",
        ],
      },
      {
        id: "t19-2-st4",
        question:
          "How can nitriles be hydrolysed to carboxylic acids using (a) dilute acid and (b) dilute alkali?",
        modelAnswer: [
          "(a) Heat with dilute acid to hydrolyse nitrile directly to carboxylic acid (with ammonium formed in acidic medium).",
          "(b) Heat with dilute alkali to form carboxylate first, then acidify to convert carboxylate into carboxylic acid.",
        ],
      },
      {
        id: "t19-2-st5",
        question:
          "Why is nitrile formation from halogenoalkanes often used when planning carbon-chain extension?",
        modelAnswer: [
          "Because CN introduces one extra carbon into the product, so halogenoalkane to nitrile is a reliable one-carbon chain-extension step before further conversion, such as hydrolysis to carboxylic acid.",
        ],
      },
    ],
  },
};
