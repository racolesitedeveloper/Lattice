import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 21 — subtopic 21.1 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC21_DRAFTS: Record<string, NoteDraft> = {
  "t21-1": {
    noteId: "t21-1",
    syllabusNotes: [
      {
        id: "functional-group-identification-strategy",
        title: "Reading multifunctional molecules before planning synthesis",
        paragraphs: [
          "In multifunctional molecules, start by identifying every functional group and ranking likely reactivity. Typical groups from this syllabus include C=C (alkene), C-X (halogenoalkane), -OH (alcohol), -CHO (aldehyde), >C=O (ketone), -COOH (carboxylic acid), -COO- (ester), -CN (nitrile) and -NH2 (primary amine).",
          "A reliable first pass is: mark acid/base centres, identify electrophilic carbons (for example carbonyl carbon), identify nucleophilic sites (for example lone pairs on O or N), and note whether oxidisable groups are present (primary/secondary alcohols, aldehydes, alkenes).",
          "This structural reading step is what allows prediction of properties and likely reaction classes. For example, a molecule containing both -COOH and -OH is acidic and can undergo esterification; a molecule with C=C rapidly decolourises bromine water and undergoes electrophilic addition; a primary halogenoalkane can undergo nucleophilic substitution or elimination depending on conditions.",
        ],
      },
      {
        id: "predicting-properties-and-reactivity",
        title: "Predicting properties and reactions from combined functional groups",
        paragraphs: [
          "When several functional groups are present, prediction should be explicit rather than generic. Example: HOCH2CH2COOH is expected to be acidic (carboxylic acid), hydrogen-bonding (hydroxyl and carboxyl groups), and reactive toward esterification at -COOH and substitution/dehydration chemistry at the alcohol site under suitable conditions.",
          "Reactivity predictions should include reagent direction. Carbonyl compounds react with 2,4-DNPH; aldehydes are oxidised by Tollens' and Fehling's reagents; compounds containing CH3CO- or CH3CH(OH)- give a positive iodoform test; halogenoalkanes react with aqueous/ethanolic reagents in substitution or elimination pathways.",
          "In synthesis planning, this prediction stage highlights both opportunities and risks: a reagent chosen for one group can affect another group. High-quality route design therefore chooses sequence and conditions to exploit chemoselectivity using only syllabus reactions.",
        ],
      },
      {
        id: "route-design-principles",
        title: "Designing multi-step synthetic routes with syllabus reactions",
        paragraphs: [
          "A practical route-design workflow is: define target functional group pattern, perform retrosynthetic disconnections to known syllabus transformations, choose feasible starting material, then write forward steps with reagents and conditions for each conversion.",
          "Core transformations available here include alkene additions, halogenoalkane substitution/elimination, alcohol oxidation/reduction/interconversion, carbonyl nucleophilic addition, nitrile hydrolysis, esterification/hydrolysis, and amine formation from halogenoalkanes.",
          "Carbon-count control is central. KCN substitution on halogenoalkanes increases chain length by one carbon via nitrile formation; hydrolysis of nitriles then gives carboxylic acids with the extended skeleton. In contrast, substitution by OH- or NH3 changes functionality without increasing carbon count.",
          "Good multi-step routes minimise unnecessary redox cycling and avoid avoidable side pathways. If elimination competes with substitution, choose solvent and temperature deliberately: aqueous conditions typically favour substitution, ethanolic basic conditions with heat favour elimination.",
        ],
      },
      {
        id: "analysing-given-route-step-by-step",
        title: "Analysing a given synthetic pathway: reaction type, reagents and by-products",
        paragraphs: [
          "When given a route, annotate each arrow with reaction type first (addition, substitution, elimination, hydrolysis, condensation, oxidation, reduction), then confirm reagent-condition consistency. This avoids mislabelling steps that happen to produce similar-looking products.",
          "By-products should be anticipated from mechanism and stoichiometry. Examples: free-radical halogenation can give multiple substitution products; halogenoalkane plus NH3 can give mixtures of higher amines if NH3 is not in excess; esterification is equilibrium-limited and leaves unreacted acid/alcohol unless driven.",
          "For aqueous silver nitrate tests on halogenoalkanes, released halide gives AgX precipitate (AgCl white, AgBr cream, AgI yellow); for halogenoalkane hydrolysis/substitution routes, HX or halide salts appear as inorganic by-products depending on conditions.",
          "A strong analysis answer therefore states what each step does, why those reagents are plausible, and what competing products are chemically reasonable.",
        ],
      },
      {
        id: "integrated-synthesis-exam-approach",
        title: "Integrated exam approach for Topic 21 synthesis questions",
        paragraphs: [
          "For planning questions, present routes as short, checkable stages with named intermediates and complete reagent sets. For analysis questions, interrogate each stage for chemoselectivity, carbon-count change, and plausible side products.",
          "Always cross-check atom economy and formula consistency after each step. If chain length changes unexpectedly, confirm whether a nitrile step, cleavage oxidation, or carbonyl addition is responsible.",
          "Use the chemistry register expected by Cambridge: precise functional-group language, balanced equations when required, and clear distinction between mechanism class and reaction type.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "In organic synthesis questions, examiners reward explicit stepwise logic: identify functional groups, choose compatible transformations, then justify reagents and conditions. Marks are typically lost when candidates jump to a plausible product without showing chemically consistent pathway control.",
      items: [
        "Choosing KCN when no chain extension is required, or missing KCN when a one-carbon extension is essential.",
        "Ignoring reagent-condition selectivity, for example using ethanolic NaOH where aqueous substitution is required, leading to unintended elimination.",
        "Treating multifunctional molecules as if only one group reacts, without considering competing reactions or over-oxidation.",
        "Misclassifying reaction type (for example calling carbonyl + HCN substitution instead of nucleophilic addition), then selecting inconsistent mechanisms.",
        "Failing to mention likely by-products such as over-halogenation mixtures, additional amine alkylation products, or unreacted equilibrium components in esterification.",
      ],
    },
    workedExamples: [
      {
        id: "t21-1-ex1",
        title: "Identifying functional groups and predicting behaviour in one molecule",
        problem: [
          "For CH3CH(OH)CH2CHO, identify functional groups and predict two characteristic reactions and one physical-property implication using syllabus chemistry.",
        ],
        solution: [
          "Functional groups are secondary alcohol (-CH(OH)-) and aldehyde (-CHO). The molecule is therefore bifunctional.",
          "Characteristic reaction 1: the aldehyde gives a positive 2,4-DNPH test and is oxidised by Tollens' or Fehling's reagent to the corresponding carboxylic acid.",
          "Characteristic reaction 2: the secondary alcohol can be oxidised by acidified K2Cr2O7 to a ketone at that carbon, while the aldehyde can also oxidise; in route design this signals possible over-oxidation unless conditions are controlled.",
          "Physical implication: presence of -OH gives hydrogen bonding, so boiling point is higher than for a hydrocarbon of similar Mr.",
        ],
      },
      {
        id: "t21-1-ex2",
        title: "Designing a multi-step synthesis with one-carbon chain extension",
        problem: [
          "Devise a route from bromoethane to propanoic acid using only syllabus reactions. Give intermediates, reagents and conditions for each step.",
        ],
        solution: [
          "Step 1 (nucleophilic substitution and chain extension): CH3CH2Br + KCN -> CH3CH2CN + KBr, using KCN in ethanol with heat. Intermediate is propanenitrile.",
          "Step 2 (nitrile hydrolysis): hydrolyse CH3CH2CN with dilute acid and heat to form CH3CH2COOH (or use dilute alkali and heat to form CH3CH2COO-, then acidify to CH3CH2COOH).",
          "This route is efficient because KCN introduces the additional carbon directly, and hydrolysis converts -CN to -COOH without changing carbon count further.",
        ],
      },
      {
        id: "t21-1-ex3",
        title: "Analysing a given pathway for step type and by-products",
        problem: [
          "A route is proposed: CH3CH2OH -> CH2=CH2 -> CH3CH2Br -> CH3CH2NH2. Analyse each step by reaction type, required reagent(s), and one likely side-product risk in the sequence.",
        ],
        solution: [
          "Step 1 (CH3CH2OH -> CH2=CH2) is elimination (dehydration), using heated Al2O3 catalyst or concentrated H2SO4 with heat.",
          "Step 2 (CH2=CH2 -> CH3CH2Br) is electrophilic addition of HBr(g) at room temperature to the C=C bond.",
          "Step 3 (CH3CH2Br -> CH3CH2NH2) is nucleophilic substitution with NH3 in ethanol, heated under pressure: CH3CH2Br + 2NH3 -> CH3CH2NH2 + NH4Br.",
          "A key side-product risk is further alkylation in step 3 (secondary/tertiary amines) if NH3 is not in excess.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t21-1-st1",
        question:
          "A molecule has formula CH2=CHCH2OH. Identify its functional groups and predict one addition reaction and one substitution/elimination-relevant transformation with suitable reagent context.",
        modelAnswer: [
          "Functional groups are alkene (C=C) and primary alcohol (-CH2OH).",
          "Addition example: C=C undergoes electrophilic addition with Br2 to form a dibromo product.",
          "Transformation at alcohol site: -OH can be substituted to halogenoalkane using HBr (or related halogenating reagents), and the resulting halogenoalkane can then undergo substitution or elimination depending on conditions.",
        ],
      },
      {
        id: "t21-1-st2",
        question:
          "Devise a two-step route from propanone to 2-hydroxy-2-methylpropanoic acid derivative level in the syllabus sequence (via nitrile chemistry), naming reagents and intermediate.",
        modelAnswer: [
          "Step 1: react propanone with HCN using KCN catalyst and heat to form the hydroxynitrile (CH3)2C(OH)CN.",
          "Step 2: hydrolyse the nitrile group with dilute acid and heat (or dilute alkali then acidification) to convert -CN into carboxylic-acid functionality while retaining the alcohol group.",
          "Intermediate explicitly required is the hydroxynitrile formed in step 1.",
        ],
      },
      {
        id: "t21-1-st3",
        question:
          "In a route containing the step CH3CH2Br + reagent -> CH2=CH2, identify reagent/conditions and classify the reaction type. State one competing pathway if conditions are changed.",
        modelAnswer: [
          "Use ethanolic NaOH with heat; reaction type is elimination.",
          "If conditions are changed to aqueous NaOH, nucleophilic substitution competes/favours formation of CH3CH2OH instead of alkene.",
        ],
      },
      {
        id: "t21-1-st4",
        question:
          "A candidate labels CH3CHO -> CH3CH2OH (NaBH4) as hydrolysis. Correct the label and explain briefly why.",
        modelAnswer: [
          "The correct label is reduction of an aldehyde to a primary alcohol.",
          "NaBH4 supplies hydride equivalents; no bond cleavage by water defines this transformation, so it is not hydrolysis.",
        ],
      },
      {
        id: "t21-1-st5",
        question:
          "When analysing a proposed route that includes free-radical halogenation of an alkane, one expected haloalkane is shown as the sole product. State one reason this assumption is risky and one practical condition choice that reduces but does not remove the issue.",
        modelAnswer: [
          "Free-radical halogenation commonly gives mixtures because multiple substitution sites and further substitution steps are possible.",
          "Using excess alkane (and limited halogen) reduces extent of multiple substitution, but does not guarantee a single pure haloalkane product.",
        ],
      },
    ],
  },
};
