import type { SubtopicPracticePack } from "./types";

/**
 * 9701 Topic 17 / 17.1 — Aldehydes and ketones (`t17-1`).
 *
 * LO crosswalk (`data/syllabus/chemistry-9701-learning-outcomes.md` §17.1):
 * - Oxidation of primary alcohols (acidified K_2Cr_2O_7 or KMnO_4, distillation) -> aldehydes;
 *   secondary alcohols -> ketones → d1, d2
 * - Reduction (NaBH_4 or LiAlH_4) to alcohols → d3
 * - HCN, KCN catalyst, heat -> hydroxynitriles (ethanal, propanone) → d4, d5
 * - Mechanism of nucleophilic addition of HCN → d5
 * - 2,4-DNPH to detect carbonyl → d6
 * - Deduce aldehyde vs ketone (Fehling's, Tollens', ease of oxidation) → d7, d10
 * - CH_3CO– fragment: alkaline I_2 -> CHI_3 + RCO_2^- → d8
 * - Supporting discrimination / conditions (MCQ) → d9
 */
export const CHEMISTRY_TOPIC17_PRACTICE: Record<string, SubtopicPracticePack> = {
  "t17-1": {
    noteId: "t17-1",
    drills: [
      {
        id: "t17-1-d1",
        noteId: "t17-1",
        kind: "mcq",
        difficulty: 1,
        stem: "Which row correctly matches the alcohol class with the carbonyl type obtained by controlled oxidation with acidified K_2Cr_2O_7 or acidified KMnO_4 followed by distillation, as in 17.1?",
        options: [
          { id: "A", text: "Primary alcohol -> ketone; secondary alcohol -> aldehyde." },
          { id: "B", text: "Primary alcohol -> aldehyde; secondary alcohol -> ketone." },
          { id: "C", text: "Primary alcohol -> carboxylic acid; secondary alcohol -> ketone." },
          { id: "D", text: "Tertiary alcohol -> aldehyde; secondary alcohol -> ketone." },
        ],
        correctOptionId: "B",
        explanation:
          "Under controlled oxidation with distillation, a primary alcohol is converted to an aldehyde (removed from further oxidation); a secondary alcohol gives a ketone. Tertiary alcohols are not oxidised in this way.",
        distractorRationale: {
          A: "That swaps the carbonyl products for primary and secondary alcohols.",
          C: "Carboxylic acid arises from further oxidation of the aldehyde, e.g. under reflux, not from the distillation-limited preparation of the aldehyde itself.",
          D: "Tertiary alcohols lack an oxidisable hydrogen on the carbon bearing -OH, so they do not give an aldehyde by this route.",
        },
        tags: ["preparation", "oxidation", "alcohols", "classification"],
      },
      {
        id: "t17-1-d2",
        noteId: "t17-1",
        kind: "structured",
        difficulty: 2,
        marks: 6,
        stem: "For each conversion, state a suitable oxidising system from the syllabus and the key procedural condition, then write a balanced equation using [O] for the organic change: (i) ethanol to ethanal, (ii) propan-2-ol to propanone. Explain briefly why distillation matters when preparing an aldehyde from a primary alcohol.",
        modelAnswerPoints: [
          "Oxidant: acidified potassium dichromate(VI) or acidified potassium manganate(VII) (either name acceptable if acidified is stated).",
          "(i) Distil as ethanal forms: CH_3CH_2OH + [O] -> CH_3CHO + H_2O.",
          "(ii) Oxidise propan-2-ol with the same class of reagents; distillation wording matches the syllabus route to the ketone: CH_3CH(OH)CH_3 + [O] -> CH_3COCH_3 + H_2O.",
          "Distillation removes the aldehyde from hot oxidising mixture, limiting over-oxidation to the carboxylic acid.",
        ],
        workedSolution: [
          "The syllabus expects controlled oxidation using acidified potassium dichromate(VI) or acidified potassium manganate(VII), because under acidic conditions the oxidising anion can supply oxygen equivalents that convert the alcohol to the carbonyl while the counter-ions are spectators in the usual simplified [O] picture.",
          "For ethanol to ethanal, the carbon chain stays at two carbons but the functional group changes from primary alcohol to aldehyde, which is represented by CH_3CH_2OH + [O] -> CH_3CHO + H_2O, and the essential practical detail is distillation so that ethanal is collected as it forms rather than remaining in the flask to be oxidised further.",
          "For propan-2-ol to propanone, the secondary alcohol is oxidised to the ketone with the same class of reagents, written as CH_3CH(OH)CH_3 + [O] -> CH_3COCH_3 + H_2O, matching the syllabus example of propanone formation from the secondary alcohol.",
          "Distillation matters for aldehyde preparation because aldehydes are more easily oxidised than ketones under the same conditions, so if the aldehyde stayed in contact with hot acidified dichromate or manganate it would be oxidised on to the carboxylic acid, whereas removing it by distillation cuts off that second oxidation step and isolates the aldehyde.",
        ],
        commonMistake:
          "Stating reflux as the routine condition when the question is specifically about aldehyde preparation from a primary alcohol; reflux favours the acid rather than trapping the aldehyde.",
        tags: ["preparation", "equations", "distillation", "oxidation"],
      },
      {
        id: "t17-1-d3",
        noteId: "t17-1",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "Describe how aldehydes and ketones are reduced to alcohols using NaBH_4 or LiAlH_4. Write balanced equations for the organic transformation using [H] for (i) ethanal and (ii) propanone, and state whether the alcohol formed is primary or secondary in each case.",
        modelAnswerPoints: [
          "NaBH_4 and LiAlH_4 supply hydride equivalents that attack the carbonyl carbon, reducing C=O to C–OH after protonation work-up.",
          "LiAlH_4 is a stronger reductant (dry ether then careful hydrolysis); NaBH_4 is milder and commonly used in protic solvents for carbonyl reduction.",
          "(i) CH_3CHO + 2[H] -> CH_3CH_2OH (primary alcohol).",
          "(ii) CH_3COCH_3 + 2[H] -> CH_3CH(OH)CH_3 (secondary alcohol).",
        ],
        workedSolution: [
          "Reduction of the carbonyl group means adding hydrogen across the C=O linkage so that the carbonyl carbon becomes tetrahedral with an -OH group, which is achieved in the laboratory using sodium tetrahydidoborate or lithium tetrahydidoaluminate as sources of nucleophilic hydride that attack the δ+ carbonyl carbon.",
          "Lithium tetrahydidoaluminate is the stronger reductant and is used in dry ether followed by acidic aqueous work-up, whereas sodium tetrahydidoborate is mild enough for many carbonyl reductions in alcohol or aqueous media, but both reagents are accepted in the syllabus as routes from aldehyde or ketone to alcohol.",
          "Ethanal is an aldehyde, so addition of two hydrogen equivalents to the carbonyl gives ethanol according to CH_3CHO + 2[H] -> CH_3CH_2OH, and because the -OH sits on a carbon that is attached to only one other carbon chain unit beyond the OH-bearing carbon’s methyl group in the usual numbering picture, the product is classified as a primary alcohol.",
          "Propanone is a ketone, so reduction adds hydrogen across the carbonyl of the central carbon to give propan-2-ol, CH_3COCH_3 + 2[H] -> CH_3CH(OH)CH_3, and that alcohol is secondary because the carbon bearing -OH is bonded to two alkyl fragments.",
        ],
        commonMistake:
          "Claiming that ketone reduction gives a primary alcohol, or omitting that aldehydes -> primary alcohols and ketones -> secondary alcohols.",
        tags: ["reduction", "NaBH4", "LiAlH4", "equations"],
      },
      {
        id: "t17-1-d4",
        noteId: "t17-1",
        kind: "structured",
        difficulty: 3,
        marks: 6,
        stem: "Describe the reaction of aldehydes and ketones with HCN in the presence of KCN as catalyst and heat to form hydroxynitriles. For ethanal and for propanone separately, write an equation showing the organic reactant and the hydroxynitrile product using displayed molecular formulae in plain text (e.g. CH_3CH(OH)CN).",
        modelAnswerPoints: [
          "Nucleophilic addition of cyanide across C=O; KCN generates CN^- in equilibrium with HCN and is described as catalyst in the syllabus wording; heat is used.",
          "Ethanal gives 2-hydroxypropanenitrile: CH_3CHO + HCN -> CH_3CH(OH)CN (or equivalent showing -OH and -CN on the former carbonyl carbon).",
          "Propanone gives 2-hydroxy-2-methylpropanenitrile: CH_3COCH_3 + HCN -> (CH_3)_2C(OH)CN.",
          "The carbon chain length increases by one carbon from the nitrile carbon incorporated.",
        ],
        workedSolution: [
          "Hydrogen cyanide adds across the polar carbonyl double bond so that the former carbonyl carbon ends up bonded both to a hydroxyl group and to a nitrile group, which is why the products are called hydroxynitriles, and the practical conditions quoted in the syllabus are HCN with a small amount of potassium cyanide acting as catalyst together with heating to give a useful rate.",
          "The role of cyanide ion is to act as a nucleophile toward the carbonyl carbon while HCN serves as a proton source in the overall cycle, which matches the idea of KCN as catalyst because cyanide is regenerated when the intermediate is protonated rather than being stoichiometrically consumed in a simple one-step picture.",
          "For ethanal, the addition product is 2-hydroxypropanenitrile, written in a compact structural form as CH_3CHO + HCN -> CH_3CH(OH)CN, which shows that the nitrile carbon becomes the nitrile end of the new two-carbon branch from the former carbonyl carbon of ethanal.",
          "For propanone, both methyl groups remain attached while cyanide adds to the carbonyl carbon, giving 2-hydroxy-2-methylpropanenitrile, represented as CH_3COCH_3 + HCN -> (CH_3)_2C(OH)CN, where the central carbon now bears two methyl groups, one hydroxyl and one cyano substituent.",
          "In both cases the nitrile introduces an extra carbon compared with the original carbonyl compound, which is an important synthetic consequence of this reaction beyond the immediate functional-group change.",
        ],
        commonMistake:
          "Writing substitution at the methyl group of propanone instead of addition to the C=O, or omitting heat / role of CN^- in the catalytic picture.",
        tags: ["HCN", "hydroxynitrile", "nucleophilic-addition", "examples"],
      },
      {
        id: "t17-1-d5",
        noteId: "t17-1",
        kind: "structured",
        difficulty: 4,
        marks: 8,
        stem: "Describe the mechanism of the nucleophilic addition reaction of hydrogen cyanide to an aldehyde or ketone under KCN catalysis. Your answer should include: curly-arrow description from lone pair on CN^- to the carbonyl carbon and movement of the C=O pi bond; the intermediate formed; how that intermediate is converted to the hydroxynitrile and how CN^- is regenerated.",
        modelAnswerPoints: [
          "Step 1: lone pair on CN^- attacks δ+ carbonyl carbon; C=O pi electrons move onto oxygen to give an alkoxide intermediate bonded to -CN.",
          "Intermediate: R_2C(O^-)CN (for a ketone) or RCH(O^-)CN (for an aldehyde).",
          "Step 2: alkoxide lone pair abstracts a proton from HCN to give the hydroxynitrile and regenerate CN^-.",
          "Overall: CN^- is catalytic; addition is to C=O, not substitution at alkyl groups.",
        ],
        workedSolution: [
          "In the first mechanistic step, cyanide ion is the nucleophile and the partially positively charged carbonyl carbon is the electrophile, so a curly arrow is drawn from the lone pair on cyanide to that carbon while a second curly arrow is drawn from the C=O pi bond onto the oxygen atom, which converts the carbon-oxygen double bond into an alkoxide on the former carbonyl oxygen and forms a new carbon–carbon bond to the nitrile group.",
          "The species produced after this step is an alkoxide intermediate in which the former carbonyl carbon is now tetrahedral and bears a negatively charged oxygen, a cyano group and the original substituents that were attached to the carbonyl carbon in the starting aldehyde or ketone.",
          "In the second step, the alkoxide oxygen uses one of its lone pairs to form a bond to a hydrogen atom of a hydrogen cyanide molecule, which protonates the oxygen to give the neutral hydroxynitrile product and simultaneously generates a new cyanide ion, so CN^- is available again to attack another carbonyl molecule.",
          "That proton-transfer step is what closes the catalytic cycle associated with “KCN as catalyst” in the syllabus wording, because only a small amount of cyanide is needed if HCN is present to regenerate CN^- after each addition.",
          "Throughout, the mechanism is classified as nucleophilic addition to the carbonyl group because the carbon-oxygen pi bond is broken as CN^- adds, rather than any simple substitution at an alkyl carbon, and examiners expect explicit mention of the alkoxide intermediate and of protonation by HCN when full mechanism marks are awarded.",
        ],
        commonMistake:
          "Drawing the first curly arrow from the carbonyl carbon instead of from CN^- / the pi bond, or protonating from H_3O^+ only with no link to CN^- regeneration.",
        tags: ["mechanism", "HCN", "curly-arrows", "catalysis"],
      },
      {
        id: "t17-1-d6",
        noteId: "t17-1",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem: "Describe the use of 2,4-dinitrophenylhydrazine (2,4-DNPH reagent) to detect the presence of carbonyl compounds. State what positive result is observed and what chemical class is confirmed. Explain briefly why this test alone cannot prove whether the compound is an aldehyde or a ketone.",
        modelAnswerPoints: [
          "2,4-DNPH reacts with the carbonyl group to form a 2,4-dinitrophenylhydrazone derivative.",
          "Positive observation: orange / orange-red precipitate (allow ‘orange precipitate’).",
          "Confirms presence of a carbonyl compound (aldehyde or ketone).",
          "Both aldehydes and ketones give the condensation product, so the test does not distinguish between them.",
        ],
        workedSolution: [
          "2,4-Dinitrophenylhydrazine is used in Brady’s-type reagent as a qualitative test for the carbonyl functional group because the -NH_2 end of the molecule condenses with C=O to form a substituted hydrazone that is often much less soluble than the starting carbonyl compound.",
          "A positive test is seen as formation of a bright orange or orange-red precipitate of the corresponding 2,4-dinitrophenylhydrazone, which is the usual macroscopic sign that a carbonyl group was present in the original unknown.",
          "Because both aldehydes and ketones contain C=O, either class can give this precipitate under appropriate conditions, so a positive 2,4-DNPH test only establishes that the sample is a carbonyl compound in the broad sense, not which carbonyl subclass it belongs to.",
          "To decide between aldehyde and ketone, further tests based on ease of oxidation, such as Tollens’ reagent or Fehling’s reagent, are needed alongside the carbonyl detection step.",
        ],
        commonMistake:
          "Claiming that 2,4-DNPH turns ketones negative while aldehydes precipitate, or confusing the orange hydrazone with the silver mirror of Tollens’.",
        tags: ["2-4-DNPH", "qualitative-tests", "carbonyl"],
      },
      {
        id: "t17-1-d7",
        noteId: "t17-1",
        kind: "mcq",
        difficulty: 2,
        stem: "An unknown organic compound gives an orange precipitate with 2,4-DNPH. With Tollens’ reagent it forms a silver mirror; with Fehling’s reagent it gives a brick-red precipitate of Cu_2O. What is the best conclusion within 17.1?",
        options: [
          { id: "A", text: "The compound is a ketone." },
          { id: "B", text: "The compound is an aldehyde." },
          { id: "C", text: "The compound cannot contain a carbonyl group." },
          { id: "D", text: "The compound must be a carboxylic acid." },
        ],
        correctOptionId: "B",
        explanation:
          "2,4-DNPH confirms a carbonyl compound; Tollens’ and Fehling’s are positive for an aldehyde under standard test conditions. Ketones do not give these oxidation results in the simple syllabus picture.",
        distractorRationale: {
          A: "Ketones typically give negative Tollens’ and Fehling’s tests, so the oxidation positives rule out a simple ketone.",
          C: "The 2,4-DNPH result already shows a carbonyl group is present.",
          D: "Carboxylic acids are not the species identified by a positive Tollens’ test in this classification context; the pattern matches an aldehyde.",
        },
        tags: ["Tollens", "Fehling", "deduction", "tests"],
      },
      {
        id: "t17-1-d8",
        noteId: "t17-1",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "Explain how reaction with alkaline I_2(aq) can be used to deduce the presence of a CH_3CO– group in an aldehyde or ketone of the form CH_3CO–R. Illustrate with propanone, identifying the yellow precipitate and the carboxylate ion formed.",
        modelAnswerPoints: [
          "Methyl carbonyl compounds CH_3CO–R undergo halogenation at the methyl side under alkaline conditions, leading to cleavage giving triiodomethane.",
          "Yellow precipitate is triiodomethane (iodoform), CHI_3.",
          "For propanone (CH_3COCH_3), the carboxylate is ethanoate, CH_3CO_2^- (R = CH_3).",
          "Positive test implies the CH_3CO– fragment required by the syllabus statement.",
        ],
        workedSolution: [
          "Under alkaline iodine conditions, a methyl group adjacent to the carbonyl is successively iodinated until the trihalomethyl side leaves as triiodomethane, which is the classic iodoform pathway applied to compounds containing the CH_3CO– unit in aldehydes or ketones.",
          "The observation that earns credit in examinations is formation of a pale yellow precipitate of triiodomethane, CHI_3, often described as the iodoform precipitate, which is insoluble and therefore easy to see in aqueous test-tube chemistry.",
          "For propanone, which has the structure CH_3COCH_3, the fragment remaining after loss of the triiodomethyl unit is the ethanoate ion, CH_3CO_2^- in solution, so the pair of products triiodomethane plus ethanoate is the specific example that matches the general syllabus wording CH_3CO–R -> CHI_3 + RCO_2^- with R as methyl.",
          "Therefore a positive iodoform test is interpreted as evidence for the methyl ketone (or ethanal) pattern required by the learning outcome, not as a general test for every carbonyl compound.",
        ],
        commonMistake:
          "Stating that all aldehydes give iodoform; only those with the CH_3CO– arrangement (including ethanal) do so in this test.",
        tags: ["iodoform", "CH3CO", "propanone", "qualitative-tests"],
      },
      {
        id: "t17-1-d9",
        noteId: "t17-1",
        kind: "mcq",
        difficulty: 3,
        stem: "Which statement about further oxidation with acidified K_2Cr_2O_7 is correct for comparing ethanal and propanone under typical laboratory reflux conditions?",
        options: [
          { id: "A", text: "Both are oxidised to two-carbon carboxylic acids at the same rate." },
          { id: "B", text: "Ethanal can be oxidised to ethanoic acid; propanone is not readily oxidised in the same simple way." },
          { id: "C", text: "Propanone is oxidised to propanoic acid more readily than ethanal is oxidised." },
          { id: "D", text: "Neither compound reacts with acidified dichromate(VI)." },
        ],
        correctOptionId: "B",
        explanation:
          "Aldehydes have a hydrogen on the carbonyl carbon and are oxidised to carboxylic acids on reflux with acidified dichromate; ketones lack that hydrogen and are not oxidised by the routine dichromate treatment in the way aldehydes are.",
        distractorRationale: {
          A: "Ketones do not follow the same facile oxidation pathway as aldehydes under these conditions.",
          C: "Oxidation of propanone to propanoic acid by simple acidified dichromate is not the standard comparison used to distinguish aldehyde from ketone.",
          D: "Ethanal certainly reacts; acidified dichromate is a common oxidant for aldehyde -> acid.",
        },
        tags: ["oxidation", "aldehyde-vs-ketone", "dichromate"],
      },
      {
        id: "t17-1-d10",
        noteId: "t17-1",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "An unknown neutral compound X gives an orange precipitate with 2,4-DNPH but does not give a silver mirror with Tollens’ reagent. Deduce whether X is more likely to be an aldehyde or a ketone, referring to ease of oxidation. State one further qualitative test result that would support a methyl carbonyl assignment CH_3CO–R if applicable.",
        modelAnswerPoints: [
          "2,4-DNPH positive confirms a carbonyl compound.",
          "Negative Tollens’ implies X is not oxidised as a typical aldehyde under these conditions, so X is more likely a ketone.",
          "Aldehydes are oxidised more readily than simple ketones (aldehyde has oxidisable C–H on carbonyl carbon).",
          "If X were a methyl ketone or ethanal-type precursor, alkaline I_2 would give a yellow CHI_3 precipitate (iodoform); ketones without CH_3CO– would not.",
        ],
        workedSolution: [
          "Because 2,4-dinitrophenylhydrazine gives an orange precipitate, the unknown must contain a carbonyl group capable of forming a hydrazone derivative, which places X in the aldehyde or ketone category rather than with non-carbonyl functional groups that would remain negative in this test.",
          "Tollens’ reagent is an ammoniacal silver(I) oxidising medium that converts many aldehydes to carboxylate while reducing Ag^+ to silver metal, giving a silver mirror, so a negative Tollens’ result argues against a simple aldehyde under the usual teaching conditions and points toward a ketone as the more likely classification.",
          "The underlying reason is ease of oxidation: an aldehyde carbonyl carbon still bears a hydrogen atom that can be removed in oxidation to the acid level, whereas a ketone carbonyl carbon is bonded to two carbon chains and is not oxidised by Tollens’ reagent in the same straightforward way, which is exactly the syllabus idea used to distinguish classes after carbonyl detection.",
          "If the student then suspects a methyl ketone, alkaline iodine solution can be applied: a yellow precipitate of triiodomethane would support a CH_3CO– fragment, whereas a ketone lacking that motif would not give a positive iodoform result even though it might still be a ketone.",
        ],
        commonMistake:
          "Calling the compound an aldehyde despite negative Tollens’, or assuming all ketones give iodoform.",
        tags: ["deduction", "Tollens", "ease-of-oxidation", "iodoform"],
      },
    ],
    flashcards: [
      {
        id: "t17-1-f1",
        noteId: "t17-1",
        difficulty: 1,
        front: "How does an aldehyde differ from a ketone around the carbonyl carbon?",
        back: "Aldehyde: carbonyl C bonded to H and (usually) one R group (RCHO). Ketone: carbonyl C bonded to two carbon groups (RCOR').",
        examPhrasing: "State the structural feature that distinguishes an aldehyde from a ketone.",
        tags: ["definitions", "classification"],
      },
      {
        id: "t17-1-f2",
        noteId: "t17-1",
        difficulty: 1,
        front: "Reagents and technique to make ethanal from ethanol?",
        back: "Acidified K_2Cr_2O_7 or KMnO_4; distil so ethanal is removed and not oxidised further to acid.",
        examPhrasing: "State how ethanal is prepared from ethanol.",
        tags: ["preparation", "oxidation"],
      },
      {
        id: "t17-1-f3",
        noteId: "t17-1",
        difficulty: 2,
        front: "What does oxidation of propan-2-ol give with acidified dichromate(VI) and distillation?",
        back: "Propanone (a ketone): CH_3CH(OH)CH_3 + [O] -> CH_3COCH_3 + H_2O.",
        examPhrasing: "Write an equation for oxidation of propan-2-ol to propanone.",
        tags: ["preparation", "ketone"],
      },
      {
        id: "t17-1-f4",
        noteId: "t17-1",
        difficulty: 2,
        front: "Products of reducing ethanal with NaBH_4 (conceptually)?",
        back: "Primary alcohol: ethanol, CH_3CH_2OH.",
        examPhrasing: "State the product of reduction of ethanal.",
        tags: ["reduction", "NaBH4"],
      },
      {
        id: "t17-1-f5",
        noteId: "t17-1",
        difficulty: 3,
        front: "Hydroxynitrile from ethanal + HCN/KCN, heat?",
        back: "2-hydroxypropanenitrile, CH_3CH(OH)CN.",
        examPhrasing: "Name the product when ethanal reacts with HCN with KCN catalyst and heat.",
        confusionPair: "nitrile vs hydroxynitrile",
        tags: ["HCN", "hydroxynitrile"],
      },
      {
        id: "t17-1-f6",
        noteId: "t17-1",
        difficulty: 3,
        front: "First step of the HCN mechanism on a carbonyl?",
        back: "CN^- lone pair attacks carbonyl C; C=O pi electrons go to O to give an alkoxide bearing -CN.",
        examPhrasing: "Describe the first step in the nucleophilic addition mechanism of HCN to a carbonyl compound.",
        tags: ["mechanism", "HCN"],
      },
      {
        id: "t17-1-f7",
        noteId: "t17-1",
        difficulty: 4,
        front: "Positive result with 2,4-DNPH?",
        back: "Orange precipitate of the 2,4-dinitrophenylhydrazone; confirms carbonyl (aldehyde or ketone).",
        examPhrasing: "Describe the use of 2,4-DNPH to test for a carbonyl group.",
        tags: ["2-4-DNPH", "tests"],
      },
      {
        id: "t17-1-f8",
        noteId: "t17-1",
        difficulty: 4,
        front: "Tollens’ test positive implies?",
        back: "Aldehyde is present (silver mirror / grey silver deposit); ketones typically negative.",
        examPhrasing: "What does a positive Tollens’ test indicate about an unknown carbonyl compound?",
        tags: ["Tollens", "tests"],
      },
      {
        id: "t17-1-f9",
        noteId: "t17-1",
        difficulty: 5,
        front: "Fehling’s: aldehyde vs ketone observation?",
        back: "Aldehyde: brick-red Cu_2O precipitate from blue solution; ketone: stays blue (simple cases).",
        examPhrasing: "Describe the result of warming an aldehyde with Fehling’s reagent.",
        tags: ["Fehling", "tests"],
      },
      {
        id: "t17-1-f10",
        noteId: "t17-1",
        difficulty: 5,
        front: "Iodoform test detects which fragment?",
        back: "CH_3CO– (methyl carbonyl): yellow CHI_3 plus RCO_2^-.",
        examPhrasing: "What structural feature is shown by a positive iodoform reaction?",
        confusionPair: "iodoform vs Tollens",
        tags: ["iodoform", "CH3CO"],
      },
    ],
  },
};
