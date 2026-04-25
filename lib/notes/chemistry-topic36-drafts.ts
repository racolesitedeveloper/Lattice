import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 36 — subtopic 36.1 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC36_DRAFTS: Record<string, NoteDraft> = {
  "t36-1": {
    noteId: "t36-1",
    syllabusNotes: [
      {
        id: "functional-group-identification-from-reactivity",
        title: "Identifying functional groups from reaction evidence",
        paragraphs: [
          "In synthesis and analysis questions, functional groups are identified most reliably by combining formula evidence with characteristic reactions from earlier organic topics. You should treat each observation as a clue and then test whether all clues can be explained by one consistent structure.",
          "A C=C bond is suggested by decolourisation of bromine water or oxidation by cold, dilute acidified KMnO₄ to a diol. A carbonyl group is indicated by a positive 2,4-DNPH test; then Fehling’s or Tollens’ reagent distinguishes aldehydes (positive) from ketones (negative). Carboxylic acids react with carbonates to release CO₂, while acyl chlorides react rapidly with water at room temperature to produce steamy HCl fumes.",
          "Amines are recognized by basic behavior in water and by amide formation with acyl chlorides. Phenols can be identified by bromination with Br₂(aq) at room temperature and coupling via diazonium chemistry under alkaline conditions. When a molecule contains several groups, identify the most reactive group under the stated conditions first, then check which other groups would remain unchanged.",
        ],
        bullets: [
          "Use at least two independent clues before committing to a functional-group assignment.",
          "In multi-functional molecules, reagent selectivity matters as much as product identity.",
          "Negative tests are informative: for example, no Tollens’ reaction supports ketone over aldehyde.",
        ],
      },
      {
        id: "predicting-properties-and-reactions-in-multifunctional-molecules",
        title: "Predicting properties and reactions in multi-functional molecules",
        paragraphs: [
          "For molecules containing several functional groups, physical and chemical properties reflect the combined effects of polarity, hydrogen bonding, acidity/basicity, and relative reactivity. A hydroxycarboxylic acid, for example, can show acidic behavior from -COOH and hydrogen bonding from -OH, while also undergoing esterification at -COOH.",
          "Prediction becomes much stronger when you rank possible reaction sites by electrophilicity or nucleophilicity. In hydroxy-acid chemistry, acyl chlorides usually react first with alcohol or amine groups because acyl substitution is fast, whereas aromatic substitution on a ring often needs different conditions and catalysts.",
          "Always state what does not react under the chosen conditions. For instance, a halogenoalkane can undergo nucleophilic substitution with aqueous hydroxide while an aryl chloride in the same molecule may remain unchanged under mild conditions. Examiners award marks for selective reasoning, not just for naming one transformation.",
        ],
      },
      {
        id: "planning-multi-step-routes-backward-and-forward",
        title: "Devising multi-step synthetic routes",
        paragraphs: [
          "A reliable planning method is retrosynthesis followed by forward validation. In retrosynthesis, disconnect the target at strategic bonds to reveal known precursor patterns from the syllabus, such as alkene + H₂O for alcohol formation, halogenoalkane + NH₃ for amine formation, or carboxylic acid + SOCl₂ for acyl chloride activation.",
          "Forward validation checks whether each proposed step is feasible with syllabus reagents and whether functional groups survive the chosen conditions. Include reagents, essential conditions, and reaction type for every stage: substitution, addition, elimination, oxidation, reduction, hydrolysis, or condensation.",
          "Good synthetic design also anticipates by-products and control strategies. Substitution of halogenoalkanes with ammonia can give mixtures of amines unless ammonia is in excess. Electrophilic additions to unsymmetrical alkenes can produce regioisomer mixtures if no strong directing factor is present. Mentioning likely side-products shows route realism.",
        ],
      },
      {
        id: "analysing-given-synthetic-sequences",
        title: "Analysing a given synthetic route step by step",
        paragraphs: [
          "When given a route diagram, annotate each arrow with three items: reaction type, key reagent(s)/condition(s), and structural change. For example, primary alcohol to aldehyde by controlled oxidation with acidified K₂Cr₂O₇ and distillation; aldehyde to nitrile by nucleophilic addition of HCN with KCN catalyst; nitrile to carboxylic acid by hydrolysis with dilute acid or alkali then acidification.",
          "Link each stage to mechanism families where relevant. Acyl chloride conversions are nucleophilic addition-elimination, many halogenoalkane transformations are nucleophilic substitution, and alkene additions are electrophilic addition. Mechanistic classification helps explain reagent choice and expected side-products.",
          "Route analysis should include plausible by-products: HCl from acyl chloride reactions, H₂O from esterification/amide condensation, poly-substituted products in aromatic substitution when activation is strong, or over-oxidation products if oxidation conditions are not controlled. This level of analysis is central to full-credit answers in Topic 36.",
        ],
      },
      {
        id: "integrating-synthesis-with-identification",
        title: "Integrating synthesis planning with functional-group identification",
        paragraphs: [
          "High-level questions often combine structure determination with route design: you may need to identify an unknown intermediate from tests, then continue synthesis to a target. Treat identification and synthesis as one continuous logic chain.",
          "If tests indicate an aldehyde intermediate, you can branch to alcohol by reduction, to carboxylic acid by oxidation, or to hydroxynitrile by nucleophilic addition of HCN. Choosing the branch that moves closest to the target in carbon count and functional-group pattern is the hallmark of efficient route design.",
          "Final route proposals should be chemically coherent, syllabus-limited, and explicitly selective. State reagents and conditions exactly, identify reaction types, and justify any expected by-products or competing pathways.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Topic 36 answers are marked for chemical reasoning quality, not just for listing reagents. The strongest responses show selectivity, mechanism-aware step labels, and realistic acknowledgement of side-products.",
      items: [
        "Identifying a functional group from a single weak clue and ignoring contradictory test evidence.",
        "Giving a synthetic route with correct intermediates but missing key conditions (for example distillation versus reflux, ethanolic versus aqueous reagent).",
        "Failing to classify each step by reaction type when specifically asked to analyse the route.",
        "Ignoring probable by-products such as HCl in acyl chloride reactions or amine mixtures in halogenoalkane substitution with ammonia.",
        "Proposing transformations outside syllabus chemistry when a valid syllabus route exists.",
      ],
    },
    workedExamples: [
      {
        id: "t36-1-ex1",
        title: "Using reaction evidence to identify groups in one molecule",
        problem: [
          "An unknown compound X gives an orange precipitate with 2,4-DNPH, does not react with Tollens’ reagent, and decolourises bromine water at room temperature. Suggest the functional groups present and explain your reasoning.",
        ],
        solution: [
          "A positive 2,4-DNPH result shows that X contains a carbonyl group.",
          "No reaction with Tollens’ reagent indicates the carbonyl is not an aldehyde, so a ketone group is likely.",
          "Decolourisation of bromine water at room temperature indicates unsaturation, most likely a C=C bond.",
          "Therefore the best-supported assignment is that X contains both a ketone group and an alkene group.",
          "This conclusion uses multiple tests and is stronger than assigning structure from one observation alone.",
        ],
      },
      {
        id: "t36-1-ex2",
        title: "Designing a multi-step route with syllabus reagents",
        problem: [
          "Devise a route to prepare propanoic acid from 1-bromopropane using syllabus reactions. Give reagents, key conditions, and reaction type for each step.",
        ],
        solution: [
          "Step 1: 1-bromopropane to propan-1-ol using aqueous NaOH and heat. Reaction type: nucleophilic substitution.",
          "Step 2: propan-1-ol to propanoic acid using acidified K₂Cr₂O₇ (or acidified KMnO₄) under reflux. Reaction type: oxidation of a primary alcohol.",
          "Alternative two-step extension through aldehyde is possible, but direct oxidation to the acid under reflux is the most efficient syllabus route.",
          "A complete answer states both reagent system and condition because distillation versus reflux changes the oxidation product.",
        ],
      },
      {
        id: "t36-1-ex3",
        title: "Analysing a route and identifying likely by-products",
        problem: [
          "A route shows ethanoyl chloride reacting with methylamine to form an amide intermediate Y, then Y is reduced with LiAlH₄ to product Z. Classify each step, state reagents, and identify likely by-products.",
        ],
        solution: [
          "Step 1 is nucleophilic addition-elimination at an acyl chloride. Reagent: methylamine (often in excess) at room temperature. Product Y is N-methylethanamide.",
          "A key by-product in step 1 is HCl. In practice, excess methylamine neutralises acid, forming ammonium salt species.",
          "Step 2 is reduction of an amide with LiAlH₄ to form an amine. Product Z is an amine derived from carbonyl reduction.",
          "The analysis is complete because each arrow is labelled by reaction type, reagent, and plausible side-product behavior.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t36-1-st1",
        question:
          "Why is it unsafe to identify a functional group from only one test result in a multi-functional organic molecule?",
        modelAnswer: [
          "One test can be non-specific or compatible with more than one functional group.",
          "Reliable identification uses converging evidence from multiple reactions, including positive and negative tests, to eliminate alternatives.",
        ],
      },
      {
        id: "t36-1-st2",
        question:
          "A candidate proposes a route from a halogenoalkane to a primary amine using NH₃ but does not mention conditions. What essential details should be added for a full-credit A Level answer?",
        modelAnswer: [
          "State ammonia in ethanol, with heating in a sealed tube or under pressure.",
          "Name the reaction type as nucleophilic substitution and note that excess NH₃ helps limit further substitution to secondary and tertiary amines.",
        ],
      },
      {
        id: "t36-1-st3",
        question:
          "Give one reason why route analysis should include likely by-products even when the main product is correct.",
        modelAnswer: [
          "By-products affect yield, purity, and reagent choice, so including them demonstrates realistic chemical understanding rather than memorised transformations.",
          "In Cambridge mark schemes, recognising side-products often earns analysis marks in synthesis questions.",
        ],
      },
      {
        id: "t36-1-st4",
        question:
          "How would you analyse one arrow in a synthetic scheme so that your explanation is exam-ready?",
        modelAnswer: [
          "State the reaction type, then give key reagent(s) and condition(s), then describe the functional-group change in the structure.",
          "If relevant, add the mechanism family and one plausible by-product.",
        ],
      },
      {
        id: "t36-1-st5",
        question:
          "Outline a short retrosynthetic strategy for a target molecule containing both an ester group and an amine group.",
        modelAnswer: [
          "Disconnect at the ester bond to reveal an alcohol-derived fragment and a carboxylic acid or acyl chloride fragment, then plan amine introduction separately by substitution of a halogenoalkane or reduction of a nitrile/amide as appropriate.",
          "Validate forward that amine and ester-forming steps are ordered to preserve selectivity under syllabus conditions, and state reagents plus conditions for each step.",
        ],
      },
    ],
  },
};
