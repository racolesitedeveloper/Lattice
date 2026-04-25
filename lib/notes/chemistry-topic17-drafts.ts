import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 17 - subtopic 17.1 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC17_DRAFTS: Record<string, NoteDraft> = {
  "t17-1": {
    noteId: "t17-1",
    syllabusNotes: [
      {
        id: "carbonyl-group-and-classification",
        title: "Carbonyl compounds in this topic: aldehydes and ketones",
        paragraphs: [
          "Aldehydes and ketones are carbonyl compounds: they contain the C=O functional group. In aldehydes, the carbonyl carbon is bonded to at least one hydrogen (R-CHO). In ketones, the carbonyl carbon is bonded to two carbon groups (R-CO-R').",
          "The C=O bond is strongly polar because oxygen is more electronegative than carbon. Carbon carries partial positive charge and behaves as an electrophilic centre, so carbonyl compounds undergo nucleophilic addition reactions.",
          "This topic links preparation, reaction pathways, mechanism, and qualitative tests. In exam answers, always identify whether a structure is aldehyde or ketone before predicting oxidation behaviour or test outcomes.",
        ],
      },
      {
        id: "preparation-from-alcohol-oxidation",
        title: "Producing aldehydes and ketones from alcohol oxidation",
        paragraphs: [
          "Aldehydes are prepared by controlled oxidation of primary alcohols using acidified K2Cr2O7 or acidified KMnO4, then immediate distillation. Distillation removes the aldehyde as it forms, limiting further oxidation to carboxylic acid.",
          "General form for aldehyde preparation: RCH2OH + [O] -> RCHO + H2O (with acidified oxidising agent, distil). For example, ethanal is prepared from ethanol.",
          "Ketones are prepared by oxidation of secondary alcohols with the same oxidants, also typically by distillation in this syllabus wording. General form: R2CHOH + [O] -> R2CO + H2O. For example, propanone is prepared from propan-2-ol.",
          "Tertiary alcohols are not oxidised under these mild conditions because there is no hydrogen on the carbon bearing the -OH group, so no carbonyl product route exists from tertiary alcohol oxidation.",
        ],
      },
      {
        id: "reduction-and-hydroxynitrile-formation",
        title: "Reduction and cyanohydrin (hydroxynitrile) formation",
        paragraphs: [
          "Both aldehydes and ketones are reduced by NaBH4 or LiAlH4 to alcohols. Aldehydes give primary alcohols and ketones give secondary alcohols.",
          "General reduction patterns are: RCHO + 2[H] -> RCH2OH and R2CO + 2[H] -> R2CHOH. NaBH4 is common in protic solvents, while LiAlH4 is stronger and used in dry ether before hydrolysis work-up.",
          "Aldehydes and ketones also react with HCN in the presence of KCN catalyst and heat to give hydroxynitriles (cyanohydrins). This adds both -OH and -CN to the former carbonyl carbon and increases carbon chain length by one carbon.",
          "Required examples are ethanal and propanone: ethanal forms 2-hydroxypropanenitrile, and propanone forms 2-hydroxy-2-methylpropanenitrile.",
        ],
      },
      {
        id: "nucleophilic-addition-mechanism-hcn",
        title: "Mechanism of HCN addition to aldehydes and ketones",
        paragraphs: [
          "The mechanism is nucleophilic addition. In step 1, CN- (generated from HCN/KCN) attacks the electrophilic carbonyl carbon. The C=O pi bond shifts to oxygen, giving an alkoxide intermediate.",
          "In step 2, the alkoxide is protonated by HCN (or another proton donor in the medium) to give the hydroxynitrile product and regenerate CN- in catalytic cycles.",
          "Curly arrows must start from the lone pair on CN- and from the C=O bond in step 1, then from the alkoxide lone pair toward H in protonation step. Correct electron-flow direction is essential for mechanism marks.",
          "Aldehydes generally react faster than ketones in nucleophilic addition because they are less sterically hindered and their carbonyl carbon is usually slightly more electrophilic.",
        ],
      },
      {
        id: "carbonyl-tests-dnph-fehling-tollens",
        title: "Identifying carbonyls: 2,4-DNPH, Fehling's and Tollens' tests",
        paragraphs: [
          "2,4-DNPH reagent tests for the presence of a carbonyl group in aldehydes and ketones. A positive test is an orange precipitate of the corresponding 2,4-dinitrophenylhydrazone derivative.",
          "2,4-DNPH cannot by itself distinguish aldehydes from ketones. To classify an unknown carbonyl compound, use oxidation-based tests such as Fehling's reagent and Tollens' reagent.",
          "Aldehydes are oxidised readily under these test conditions; ketones are not oxidised easily. Fehling's gives a brick-red Cu2O precipitate with aldehydes (especially aliphatic aldehydes) and remains blue with ketones. Tollens' gives a silver mirror or black silver deposit with aldehydes and no such change with ketones.",
          "So a practical sequence is: positive 2,4-DNPH confirms carbonyl; positive Tollens'/Fehling's indicates aldehyde; negative oxidation tests indicate ketone (within syllabus scope).",
        ],
      },
      {
        id: "iodoform-test-methyl-carbonyl",
        title: "Iodoform test for the CH3CO- group",
        paragraphs: [
          "Alkaline iodine solution (I2/alkali) tests for the methyl carbonyl fragment CH3CO-. A positive test gives a yellow precipitate of triiodomethane, CHI3 (iodoform).",
          "In this syllabus statement, aldehydes or ketones of the form CH3CO-R give CHI3 and a carboxylate ion, RCO2-.",
          "Examples include ethanal (where R = H) and methyl ketones such as propanone (where R is alkyl). The test is therefore useful for detecting the methyl carbonyl motif, not all carbonyl compounds.",
          "When writing conclusions, state both observation (yellow precipitate) and structural inference (presence of CH3CO-).",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Topic 17 marks are commonly lost by mixing conditions, using incomplete mechanism arrows, or confusing detection of carbonyl presence with aldehyde/ketone differentiation.",
      items: [
        "Using reflux conditions when the task is specifically preparation of aldehydes by oxidation and distillation from primary alcohols.",
        "Assuming 2,4-DNPH distinguishes aldehydes from ketones; it identifies carbonyl compounds but does not classify between them.",
        "Writing HCN addition as substitution instead of nucleophilic addition to C=O.",
        "Drawing mechanism arrows from positive centres instead of from lone pairs or bonds.",
        "Stating ketones give positive Fehling's or Tollens' tests under standard conditions.",
        "Using iodoform test as a general test for all aldehydes/ketones rather than specifically for CH3CO- containing compounds.",
      ],
    },
    workedExamples: [
      {
        id: "t17-1-ex1",
        title: "Selecting preparation route and conditions from alcohol class",
        problem: [
          "State reagent and conditions to prepare (a) ethanal from ethanol and (b) propanone from propan-2-ol. Write equations using [O].",
        ],
        solution: [
          "(a) Ethanal from ethanol: oxidise with acidified K2Cr2O7 or acidified KMnO4 and distil the product as it forms.",
          "Equation: CH3CH2OH + [O] -> CH3CHO + H2O.",
          "(b) Propanone from propan-2-ol: oxidise with acidified K2Cr2O7 or acidified KMnO4 (distillation in syllabus wording).",
          "Equation: CH3CH(OH)CH3 + [O] -> CH3COCH3 + H2O.",
          "Key distinction is alcohol class: primary gives aldehyde under controlled oxidation; secondary gives ketone.",
        ],
      },
      {
        id: "t17-1-ex2",
        title: "Mechanism of HCN addition to ethanal",
        problem: [
          "Describe the nucleophilic addition mechanism for reaction of ethanal with HCN/KCN and heat to form a hydroxynitrile.",
        ],
        solution: [
          "Step 1: CN- attacks the carbonyl carbon of ethanal (CH3CHO). Simultaneously, the C=O pi electrons move to oxygen, forming CH3CH(O-)CN.",
          "Step 2: The alkoxide O- is protonated by HCN to give CH3CH(OH)CN (2-hydroxypropanenitrile), and CN- is regenerated.",
          "This is nucleophilic addition because nucleophile CN- adds to the electrophilic carbonyl carbon, converting C=O to C-OH and creating a new C-C bond to CN.",
        ],
      },
      {
        id: "t17-1-ex3",
        title: "Deducing unknown carbonyl type from test results",
        problem: [
          "Unknown compound X gives an orange precipitate with 2,4-DNPH, gives no change with Fehling's reagent, gives no silver mirror with Tollens' reagent, and gives a yellow precipitate with alkaline iodine. Deduce the functional conclusions.",
        ],
        solution: [
          "Positive 2,4-DNPH shows X is a carbonyl compound (aldehyde or ketone).",
          "Negative Fehling's and Tollens' show X is not readily oxidised under these conditions, so X is a ketone.",
          "Positive iodoform test shows X contains a CH3CO- group.",
          "Therefore X is a methyl ketone (for example propanone or another ketone with CH3CO- fragment).",
        ],
      },
    ],
    selfTest: [
      {
        id: "t17-1-st1",
        question:
          "Give reagents and essential condition for preparing (a) an aldehyde from a primary alcohol and (b) a ketone from a secondary alcohol.",
        modelAnswer: [
          "(a) Oxidise primary alcohol with acidified K2Cr2O7 or acidified KMnO4 and distil to obtain aldehyde before further oxidation.",
          "(b) Oxidise secondary alcohol with acidified K2Cr2O7 or acidified KMnO4 (distillation as specified in this syllabus section) to obtain ketone.",
        ],
      },
      {
        id: "t17-1-st2",
        question:
          "State the products when aldehydes and ketones are reduced with NaBH4 or LiAlH4.",
        modelAnswer: [
          "Aldehydes are reduced to primary alcohols.",
          "Ketones are reduced to secondary alcohols.",
        ],
      },
      {
        id: "t17-1-st3",
        question:
          "What type of mechanism is HCN addition to aldehydes/ketones, and what is the role of KCN?",
        modelAnswer: [
          "The mechanism is nucleophilic addition to the carbonyl group.",
          "KCN provides CN- nucleophile (catalytic source) that attacks the carbonyl carbon; protonation then gives the hydroxynitrile.",
        ],
      },
      {
        id: "t17-1-st4",
        question:
          "How would you use 2,4-DNPH, Fehling's reagent and Tollens' reagent to distinguish aldehydes and ketones?",
        modelAnswer: [
          "First use 2,4-DNPH: orange precipitate indicates a carbonyl compound is present.",
          "Then use Fehling's or Tollens': aldehydes give positive oxidation tests (brick-red Cu2O with Fehling's; silver mirror/Ag deposit with Tollens'), while ketones give negative results under these conditions.",
        ],
      },
      {
        id: "t17-1-st5",
        question:
          "State the key observation and structural inference for a positive iodoform test on a carbonyl compound.",
        modelAnswer: [
          "Observation: yellow precipitate of CHI3 (triiodomethane).",
          "Inference: the compound contains a CH3CO- group (methyl carbonyl fragment), giving CHI3 and a carboxylate ion RCO2- in alkaline iodine conditions.",
        ],
      },
    ],
  },
};
