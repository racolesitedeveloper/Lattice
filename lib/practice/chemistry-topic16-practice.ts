import type { SubtopicPracticePack } from "./types";

/**
 * 9701 Topic 16 / 16.1 — Alcohols: one course subtopic `t16-1`.
 *
 * LO crosswalk (`data/syllabus/chemistry-9701-learning-outcomes.md` §16.1):
 * - Preparations (alkene + steam; cold dilute acidified MnO4^- to diol; NaOH(aq) + heat
 *   on halogenoalkane; NaBH4/LiAlH4 on carbonyl; LiAlH4 on carboxylic acid; ester hydrolysis)
 *   -> d2, d3
 * - Reactions: combustion (+ quantitative application); substitution to halogenoalkane; Na;
 *   oxidation (distillation vs reflux; 1°/2°/3°); dehydration; esterification (exemplified
 *   ethanol) -> d4, d5, d6, d7, d10
 * - Classify 1°/2°/3° (incl. polyols); characteristic mild oxidation (orange -> green) -> d1
 * - Iodoform: CH3CH(OH)-R -> CHI3 + RCO2^- -> d8
 * - Acidity of alcohols vs water -> d9
 */
export const CHEMISTRY_TOPIC16_PRACTICE: Record<string, SubtopicPracticePack> = {
  "t16-1": {
    noteId: "t16-1",
    drills: [
      {
        id: "t16-1-d1",
        noteId: "t16-1",
        kind: "structured",
        difficulty: 1,
        marks: 6,
        stem: "Explain what is meant by a primary, a secondary and a tertiary alcohol, giving one example formula for each class. Illustrate how a molecule with more than one -OH group is described using ethane-1,2-diol, HOCH2CH2OH. State how warming with acidified potassium dichromate(VI) can be used to distinguish a tertiary alcohol from a primary or secondary alcohol under ordinary laboratory conditions.",
        modelAnswerPoints: [
          "A primary alcohol has the -OH group on a carbon bonded to one other carbon (or none, as in methanol), e.g. CH3CH2OH.",
          "A secondary alcohol has the -OH-bearing carbon bonded to two other carbon atoms, e.g. CH3CH(OH)CH3.",
          "A tertiary alcohol has the -OH-bearing carbon bonded to three other carbon atoms, e.g. (CH3)3COH.",
          "Ethane-1,2-diol is a polyhydric alcohol: each -OH is on a primary carbon (two alcohol groups in one molecule).",
          "Acidified dichromate is orange (Cr2O7^2-); primary and secondary alcohols are oxidised so the mixture turns green (Cr^3+).",
          "A tertiary alcohol is not oxidised in this way under normal conditions, so no orange-to-green change is observed.",
        ],
        workedSolution: [
          "A primary alcohol is one in which the hydroxyl group is attached to a primary carbon atom, meaning that carbon is bonded to at most one other alkyl carbon, as in ethanol, CH3CH2OH, where the -OH carbon is bonded only to a CH3 group and two hydrogens.",
          "A secondary alcohol has the functional carbon bonded to two other carbon atoms, as in propan-2-ol, CH3CH(OH)CH3, where the central carbon carries both the hydroxyl group and two methyl-type attachments.",
          "A tertiary alcohol has the carbon bearing -OH bonded to three other carbon atoms, as in 2-methylpropan-2-ol, (CH3)3COH, where no hydrogen is attached to the alcohol carbon.",
          "Ethane-1,2-diol, HOCH2CH2OH, contains two hydroxyl groups and is therefore a diol; each hydroxyl-bearing carbon is bonded to only one other carbon and two hydrogens, so each alcohol centre is primary even though the molecule has more than one -OH group.",
          "When acidified potassium dichromate(VI) is warmed with a primary or secondary alcohol, the orange dichromate(VI) ion is reduced and chromium(III) species form, so the observed colour change is from orange to green.",
          "Under the same conditions a tertiary alcohol does not undergo this oxidation pathway, so the orange dichromate colour persists and the characteristic green colour of successful oxidation does not appear, which is why the test distinguishes tertiary alcohols from oxidisable primary and secondary alcohols.",
        ],
        commonMistake:
          "Classifying by chain length instead of how many carbon branches are attached to the carbon that bears -OH.",
        tags: ["classification", "definitions", "oxidation", "dichromate"],
      },
      {
        id: "t16-1-d2",
        noteId: "t16-1",
        kind: "structured",
        difficulty: 3,
        marks: 7,
        stem: "For each transformation, state the reagents and essential conditions required in this syllabus to form an alcohol (or diol) as shown. (a) Ethene to ethanol. (b) Ethene to ethane-1,2-diol. (c) Bromoethane to ethanol. (d) Ethanal to ethanol. (e) Ethanoic acid to ethanol. (f) Methyl ethanoate to methanol together with the other organic product of hydrolysis.",
        modelAnswerPoints: [
          "(a) Steam, H2O(g), with phosphoric acid catalyst at elevated temperature/pressure (electrophilic addition to the alkene).",
          "(b) Cold dilute acidified potassium manganate(VII) (oxidative addition across the double bond to give the diol).",
          "(c) Aqueous sodium hydroxide with heat (nucleophilic substitution of halogenoalkane).",
          "(d) Sodium tetrahydridoborate or lithium tetrahydridoaluminate (reduction of the aldehyde).",
          "(e) Lithium tetrahydridoaluminate only (reduction of carboxylic acid to primary alcohol).",
          "(f) Dilute acid or dilute alkali with heat (ester hydrolysis); other organic product is ethanoic acid or ethanoate respectively.",
        ],
        workedSolution: [
          "Ethene is converted to ethanol by electrophilic addition of steam using H3PO4 as catalyst under industrially relevant elevated temperature and pressure, which adds H and OH across the double bond to give CH3CH2OH.",
          "Ethene is converted to ethane-1,2-diol by reaction with cold dilute acidified potassium manganate(VII), which under these mild conditions oxidises the alkene by adding two hydroxyl functions across the carbon-carbon double bond rather than cleaving it.",
          "Bromoethane is converted to ethanol by nucleophilic substitution using aqueous sodium hydroxide with heat, in which hydroxide replaces bromide to give ethanol and a bromide ion in solution.",
          "Ethanal is reduced to ethanol using either sodium tetrahydridoborate or lithium tetrahydridoaluminate as the hydride source, which delivers hydride to the carbonyl carbon and proton work-up completes the alcohol.",
          "Ethanoic acid is reduced to ethanol using lithium tetrahydridoaluminate, which is the syllabus reagent capable of reducing the carboxy group all the way to the primary alcohol; sodium tetrahydridoborate is not used for carboxylic acid reduction here.",
          "Methyl ethanoate undergoes hydrolysis with dilute acid and heat or dilute alkali and heat to give methanol as the alcohol fragment together with ethanoic acid under acid conditions or ethanoate salt under alkaline conditions after the usual treatment sequence.",
        ],
        commonMistake:
          "Quoting NaBH4 for reduction of ethanoic acid, or hot concentrated manganate(VII) for the diol route instead of cold dilute acidified conditions.",
        tags: ["preparations", "reagents", "conditions", "alkenes", "esters"],
      },
      {
        id: "t16-1-d3",
        noteId: "t16-1",
        kind: "mcq",
        difficulty: 2,
        stem: "Which reagent is appropriate for reducing ethanoic acid to ethanol under the conditions expected in this syllabus?",
        options: [
          { id: "A", text: "NaBH4 in aqueous ethanol at room temperature" },
          { id: "B", text: "LiAlH4 (dry ether; controlled quench)" },
          { id: "C", text: "Acidified K2Cr2O7 under reflux" },
          { id: "D", text: "H2 with Ni catalyst at high temperature" },
        ],
        correctOptionId: "B",
        explanation:
          "Carboxylic acids are reduced to primary alcohols with lithium tetrahydridoaluminate; NaBH4 reduces aldehydes and ketones but not carboxylic acids in the usual teaching distinction.",
        distractorRationale: {
          A: "Sodium tetrahydridoborate is not the standard choice for reducing carboxylic acids to alcohols compared with lithium tetrahydridoaluminate.",
          C: "Acidified dichromate oxidises alcohols and would not reduce a carboxylic acid to ethanol.",
          D: "Catalytic hydrogenation of ethanoic acid to ethanol is not the named inorganic reagent route in the core alcohol preparation list.",
        },
        tags: ["reduction", "LiAlH4", "preparations"],
      },
      {
        id: "t16-1-d4",
        noteId: "t16-1",
        kind: "structured",
        difficulty: 2,
        marks: 6,
        stem: "Write balanced equations with state symbols for (i) the complete combustion of ethanol in oxygen, (ii) the reaction of ethanol with sodium metal, and (iii) the dehydration of ethanol to ethene using a heated aluminium oxide catalyst. Name the type of reaction in (iii).",
        modelAnswerPoints: [
          "(i) C2H5OH(l) + 3O2(g) -> 2CO2(g) + 3H2O(l) (or C2H5OH + 3O2 -> 2CO2 + 3H2O with consistent states).",
          "(ii) 2C2H5OH(l) + 2Na(s) -> 2C2H5ONa(s or ionic) + H2(g) (sodium ethoxide and hydrogen).",
          "(iii) C2H5OH(g) -> CH2=CH2(g) + H2O(g) over heated Al2O3 (elimination / dehydration).",
          "(iii) is an elimination reaction (water eliminated to form C=C).",
        ],
        workedSolution: [
          "Complete combustion of ethanol requires sufficient oxygen to oxidise all carbon to carbon dioxide and all hydrogen to water, giving the balanced equation C2H5OH(l) + 3O2(g) -> 2CO2(g) + 3H2O(l), where ethanol and oxygen are the reactants and carbon dioxide and water are the only products if combustion is complete.",
          "Ethanol behaves as a very weak acid toward sodium metal, so two molecules of ethanol react with two atoms of sodium to produce two formula units of sodium ethoxide and one molecule of hydrogen gas, 2C2H5OH(l) + 2Na(s) -> 2C2H5ONa(s) + H2(g), with effervescence of hydrogen confirming reaction at the O-H bond.",
          "When ethanol vapour is passed over heated aluminium oxide as a catalyst, an elimination occurs in which a molecule of water is lost from ethanol to give ethene, which is commonly written as C2H5OH(g) -> CH2=CH2(g) + H2O(g) with the catalyst condition noted in words beside the arrow.",
          "This conversion is classified as an elimination reaction, and more specifically as dehydration, because a small molecule, water, is eliminated from the alcohol framework to generate a carbon-carbon double bond.",
        ],
        commonMistake:
          "Omitting H2(g) in the sodium equation, or writing molecular H2O as the only product of dehydration without ethene.",
        tags: ["combustion", "sodium", "dehydration", "equations", "state-symbols"],
      },
      {
        id: "t16-1-d5",
        noteId: "t16-1",
        kind: "mcq",
        difficulty: 2,
        stem: "Which set of reagents converts propan-1-ol into 1-chloropropane in a substitution replacing -OH by -Cl?",
        options: [
          { id: "A", text: "Dry HCl(g)" },
          { id: "B", text: "NaCl(aq) at room temperature" },
          { id: "C", text: "Dilute NaOH(aq) with heat" },
          { id: "D", text: "Cold dilute acidified KMnO4(aq)" },
        ],
        correctOptionId: "A",
        explanation:
          "Hydrogen chloride gas substitutes for -OH to give the chloroalkane and water; other listed routes are nucleophilic substitution to alcohol, not alcohol to chloride, or oxidation.",
        distractorRationale: {
          B: "Chloride ion in aqueous sodium chloride does not displace -OH from an alcohol under normal conditions.",
          C: "Aqueous alkali would not replace -OH by Cl; with a halogenoalkane it would form an alcohol, the reverse sense to the question.",
          D: "Cold dilute acidified manganate(VII) is associated with diol formation from alkenes or controlled oxidation, not replacing -OH by chloride.",
        },
        tags: ["halogenoalkanes", "substitution", "HX"],
      },
      {
        id: "t16-1-d6",
        noteId: "t16-1",
        kind: "structured",
        difficulty: 4,
        marks: 7,
        stem: "Butan-1-ol is oxidised with acidified potassium dichromate(VI). Explain the different organic products obtained when the reaction mixture is distilled as the product forms compared with when it is heated under reflux. State the oxidation product obtained from propan-2-ol under similar oxidising conditions and explain why 2-methylpropan-2-ol does not give a carbonyl product with this reagent under ordinary conditions.",
        modelAnswerPoints: [
          "Primary alcohol oxidises first to aldehyde; distillation removes the aldehyde as it forms, limiting further oxidation so aldehyde is isolated.",
          "Under reflux the aldehyde remains in the oxidising mixture and is further oxidised to carboxylic acid.",
          "Propan-2-ol (secondary) oxidises to propanone (ketone), which is not further oxidised by acidified dichromate under these conditions without C-C cleavage.",
          "2-Methylpropan-2-ol is tertiary: no hydrogen on the alcohol carbon for the usual oxidation pathway, so no aldehyde or ketone product.",
        ],
        workedSolution: [
          "Butan-1-ol is a primary alcohol, so when it is warmed with acidified potassium dichromate(VI) the first oxidation product is butanal, an aldehyde, which is still easily oxidised further to butanoic acid if it remains in contact with the oxidant.",
          "If the reaction mixture is distilled so that the aldehyde is collected as it boils off from the flask, the aldehyde is physically separated from the excess oxidising medium, which limits the opportunity for further oxidation and therefore allows the aldehyde to be obtained as the principal organic product of the experiment.",
          "If the mixture is heated under reflux instead, the aldehyde cannot escape the hot oxidising solution, so it is further oxidised to butanoic acid, which is why reflux conditions are used when the syllabus target is the carboxylic acid from a primary alcohol.",
          "Propan-2-ol is a secondary alcohol, so oxidation with acidified dichromate stops at the ketone, propanone, because there is no hydrogen on the carbonyl carbon for the usual sequential oxidation to acid without breaking carbon-carbon bonds.",
          "2-Methylpropan-2-ol is a tertiary alcohol, and under ordinary acidified dichromate conditions there is no hydrogen atom attached to the carbon bearing the hydroxyl group that can be involved in the mechanism leading to a carbonyl compound, so no ketone or aldehyde is formed and tertiary alcohols are described as resistant to this oxidation.",
        ],
        commonMistake:
          "Claiming a ketone oxidises further to carboxylic acid with dichromate under standard conditions, or that tertiary alcohols oxidise to ketones.",
        tags: ["oxidation", "distillation", "reflux", "primary", "secondary", "tertiary"],
      },
      {
        id: "t16-1-d7",
        noteId: "t16-1",
        kind: "mcq",
        difficulty: 2,
        stem: "Ethanol and ethanoic acid are warmed together with concentrated sulfuric acid as catalyst. What is the main organic product of this condensation?",
        options: [
          { id: "A", text: "Ethyl ethanoate" },
          { id: "B", text: "Ethoxyethane (diethyl ether)" },
          { id: "C", text: "Ethene" },
          { id: "D", text: "Ethanal" },
        ],
        correctOptionId: "A",
        explanation:
          "Alcohol plus carboxylic acid with concentrated sulfuric acid catalyst undergoes esterification to give the ester and water; here that is ethyl ethanoate.",
        distractorRationale: {
          B: "Symmetrical ether formation from two alcohol molecules is not the primary outcome of mixing ethanol with ethanoic acid under esterification conditions.",
          C: "Ethene would arise from dehydration of ethanol alone under different emphasis of acidic heating, not as the main product of acid-alcohol esterification.",
          D: "Ethanal would require oxidation of ethanol, not condensation with ethanoic acid under sulfuric acid catalysis described.",
        },
        tags: ["esterification", "ethanol"],
      },
      {
        id: "t16-1-d8",
        noteId: "t16-1",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "The iodoform reaction is carried out on butan-2-ol, CH3CH(OH)CH2CH3, using alkaline iodine(aq). State the observation that confirms a positive result. Deduce the identity of the yellow precipitate and of the carboxylate ion RCO2^- formed alongside it, explaining how the alcohol structure satisfies the syllabus requirement for this test.",
        modelAnswerPoints: [
          "Positive result: yellow precipitate forms.",
          "Precipitate is tri-iodomethane (iodoform), CHI3.",
          "Carboxylate is CH3CH2CO2^- (propanoate) from R = CH2CH3 in CH3CH(OH)R.",
          "The alcohol contains the CH3CH(OH)- group required for oxidation under the test conditions followed by tri-iodomethane formation from the methyl ketone fragment.",
        ],
        workedSolution: [
          "When butan-2-ol is treated with alkaline iodine, a positive iodoform test is recognised by the formation of a pale yellow precipitate in the reaction mixture, which is the characteristic visual sign examiners expect candidates to report.",
          "The yellow precipitate is tri-iodomethane, also called iodoform, with formula CHI3, which is the iodinated methane product specific to this analytical reaction.",
          "Butan-2-ol has the structure CH3CH(OH)CH2CH3, which matches the syllabus pattern CH3CH(OH)-R with R equal to CH2CH3, so the carboxylate ion formed as the other identifiable organic fragment is propanoate, CH3CH2CO2^-.",
          "Under the alkaline iodine conditions the fragment that can be oxidised to a methyl ketone is generated from the CH3CH(OH)- unit, and that methyl ketone then undergoes the cleavage chemistry that produces tri-iodomethane and the carboxylate containing the remainder of the chain.",
          "Because the molecule possesses the CH3CH(OH)- grouping, it meets the structural requirement for alcohols that give this test, which is why butan-2-ol is predicted to give a positive result unlike a simple primary alcohol such as propan-1-ol that lacks that exact unit.",
        ],
        commonMistake:
          "Giving ethanoate as RCO2^- for any alcohol containing a methyl group, instead of identifying R from CH3CH(OH)-R.",
        tags: ["iodoform", "deduction", "observations"],
      },
      {
        id: "t16-1-d9",
        noteId: "t16-1",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "Explain why alcohols are weaker acids than water, referring to the conjugate bases RO^- and HO^- and to inductive effects of alkyl groups.",
        modelAnswerPoints: [
          "Acid strength relates to stability of the conjugate base after loss of H+.",
          "Alkyl groups exert a positive inductive (+I) effect, pushing electron density towards the oxygen in RO^-.",
          "This increased electron density on oxygen destabilises RO^- relative to HO^-.",
          "Therefore RO^- is a stronger base than HO^- and the parent alcohol is a weaker acid than water.",
        ],
        workedSolution: [
          "The Brønsted acidity of an alcohol concerns how readily the O-H proton is lost to form the alkoxide ion RO^-, so any comparison with water must compare the stabilities of RO^- after deprotonation of the alcohol with HO^- after deprotonation of water.",
          "In an alcohol the oxygen is bonded to an alkyl group as well as hydrogen, and alkyl substituents donate electron density through bonds by a positive inductive effect, which increases electron density on the oxygen carrying the negative charge in RO^-.",
          "That extra electron donation into an already negatively charged centre concentrates negative charge on oxygen and makes the alkoxide ion comparatively less stable than the hydroxide ion, where hydrogen rather than an alkyl group is attached to oxygen and the +I donation is absent or much smaller.",
          "Because RO^- is less stabilised than HO^-, the equilibrium for deprotonation of an alcohol lies further to the left than for water, meaning alcohols are weaker acids than water in the Brønsted sense despite both containing O-H bonds.",
          "This electronic picture matches the laboratory fact that sodium reacts vigorously with water but more slowly with ethanol, consistent with ethanol being a weaker acid than water while still being able to donate a trace of protons to an extremely reactive metal.",
        ],
        commonMistake:
          "Claiming alcohols are more acidic than water, or ignoring conjugate base stability and only mentioning 'more carbons'.",
        tags: ["acidity", "inductive-effect", "definitions"],
      },
      {
        id: "t16-1-d10",
        noteId: "t16-1",
        kind: "structured",
        difficulty: 4,
        marks: 5,
        stem: "Calculate the total volume of carbon dioxide, measured at room temperature and pressure (rtp), produced by the complete combustion of 4.60 g of pure ethanol. The molar volume of a gas at rtp is 24.0 dm^3 mol^-1. Use Ar: H = 1, C = 12, O = 16. Show your working.",
        modelAnswerPoints: [
          "Mr(C2H5OH) = (2×12) + (6×1) + 16 = 46.",
          "n(ethanol) = 4.60 / 46 = 0.100 mol.",
          "From the combustion equation, 1 mol C2H5OH gives 2 mol CO2, so n(CO2) = 0.200 mol.",
          "V(CO2) = 0.200 × 24.0 = 4.80 dm^3.",
          "Units: dm^3 (or 4800 cm^3) consistent with molar volume given.",
        ],
        workedSolution: [
          "The relative molecular mass of ethanol, C2H5OH, is calculated from the atomic masses as Mr = 2(12) + 6(1) + 16 = 24 + 6 + 16 = 46, which is the mass in grams of one mole of ethanol.",
          "The amount of ethanol in the sample is therefore n = mass / Mr = 4.60 g / 46 g mol^-1 = 0.100 mol, assuming the sample is pure.",
          "Complete combustion of ethanol follows the stoichiometry C2H5OH + 3O2 -> 2CO2 + 3H2O, so each mole of ethanol produces two moles of carbon dioxide, giving n(CO2) = 2 × 0.100 mol = 0.200 mol.",
          "At rtp the molar volume is given as 24.0 dm^3 mol^-1, so the volume of carbon dioxide is V = n × Vm = 0.200 mol × 24.0 dm^3 mol^-1 = 4.80 dm^3.",
          "This value may also be expressed as 4800 cm^3 if cubic centimetres are preferred, but the calculation is complete once the mole ratio, substitution, and final volume with consistent units are shown.",
        ],
        commonMistake:
          "Using a 1:1 mole ratio between ethanol and CO2, or forgetting to multiply by 2 from the balanced equation.",
        tags: ["calculations", "combustion", "stoichiometry"],
      },
    ],
    flashcards: [
      {
        id: "t16-1-f1",
        noteId: "t16-1",
        difficulty: 1,
        front: "How is a secondary alcohol defined?",
        back: "The -OH group is on a carbon bonded to two other carbon atoms (two alkyl branches on that C).",
        examPhrasing: "Define a secondary alcohol and give one example.",
        tags: ["classification", "definitions"],
      },
      {
        id: "t16-1-f2",
        noteId: "t16-1",
        difficulty: 1,
        front: "Reagents to make an alcohol from an alkene?",
        back: "Steam, H2O(g), with H3PO4 catalyst (elevated T/p).",
        examPhrasing: "State reagents and conditions for converting an alkene to an alcohol.",
        tags: ["preparations", "alkenes"],
      },
      {
        id: "t16-1-f3",
        noteId: "t16-1",
        difficulty: 2,
        front: "How is ethane-1,2-diol made from ethene?",
        back: "Cold dilute acidified KMnO4(aq) — adds OH across the double bond.",
        examPhrasing: "State conditions for oxidising an alkene to a diol with manganate(VII).",
        confusionPair: "cold dilute MnO4^- vs hot concentrated MnO4^-",
        tags: ["preparations", "diol", "oxidation"],
      },
      {
        id: "t16-1-f4",
        noteId: "t16-1",
        difficulty: 2,
        front: "Halogenoalkane to alcohol?",
        back: "NaOH(aq) with heat — nucleophilic substitution, OH^- replaces halide.",
        examPhrasing: "Give reagents for preparing an alcohol from a halogenoalkane.",
        tags: ["preparations", "substitution"],
      },
      {
        id: "t16-1-f5",
        noteId: "t16-1",
        difficulty: 3,
        front: "NaBH4 vs LiAlH4 for reducing a carboxylic acid?",
        back: "Use LiAlH4 for carboxylic acid -> primary alcohol; NaBH4 is for aldehydes/ketones in the usual distinction.",
        examPhrasing: "Which hydride reagent reduces ethanoic acid to ethanol?",
        confusionPair: "NaBH4 vs LiAlH4",
        tags: ["reduction", "preparations"],
      },
      {
        id: "t16-1-f6",
        noteId: "t16-1",
        difficulty: 3,
        front: "Ester to alcohol?",
        back: "Hydrolysis with dilute acid or dilute alkali and heat; alcohol + acid or carboxylate salt formed.",
        examPhrasing: "State how an ester can be converted into an alcohol.",
        tags: ["preparations", "esters"],
      },
      {
        id: "t16-1-f7",
        noteId: "t16-1",
        difficulty: 4,
        front: "Primary alcohol + acidified K2Cr2O7: distillation vs reflux?",
        back: "Distillation removes aldehyde as formed; reflux further oxidises it to carboxylic acid.",
        examPhrasing: "Explain how conditions control oxidation of a primary alcohol with dichromate.",
        tags: ["oxidation", "distillation", "reflux"],
      },
      {
        id: "t16-1-f8",
        noteId: "t16-1",
        difficulty: 4,
        front: "Structural requirement for iodoform from an alcohol (other than ethanol)?",
        back: "CH3CH(OH)-R — gives CHI3 and RCO2^- under alkaline I2.",
        examPhrasing: "What alcohol group gives a positive iodoform test?",
        tags: ["iodoform", "deduction"],
      },
      {
        id: "t16-1-f9",
        noteId: "t16-1",
        difficulty: 5,
        front: "Name two reagent systems that convert an alcohol to a chloroalkane.",
        back: "Dry HCl(g); PCl5; PCl3 + heat; SOCl2; KCl with concentrated H2SO4 or concentrated H3PO4 (as in syllabus list).",
        examPhrasing: "State reagents to replace -OH by -Cl in an alcohol.",
        tags: ["halogenoalkanes", "reagents"],
      },
      {
        id: "t16-1-f10",
        noteId: "t16-1",
        difficulty: 5,
        front: "Are alcohols more or less acidic than water?",
        back: "Less acidic: alkyl +I stabilises charge on O less well in RO^- than in HO^-.",
        examPhrasing: "Explain the relative acidity of ethanol and water.",
        tags: ["acidity", "inductive-effect"],
      },
    ],
  },
};
