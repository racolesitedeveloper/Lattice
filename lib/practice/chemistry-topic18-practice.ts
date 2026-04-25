import type { SubtopicPracticePack } from "./types";

/**
 * 9701 Topic 18 — Carboxylic acids (18.1) and esters (18.2).
 *
 * LO crosswalk (`data/syllabus/chemistry-9701-learning-outcomes.md` §18.1–18.2):
 *
 * **t18-1**
 * - Preparations: oxidation of 1° alcohols/aldehydes (acidified K2Cr2O7 or KMnO4, reflux) → d2, d3
 * - Nitrile hydrolysis (dilute acid/alkali, heat; acidification after alkali) → d3, d5
 * - Ester hydrolysis to acid (dilute acid/alkali, heat; acidification after alkali) → d4
 * - (a) reactive metals → salt + H2 → d6
 * - (b) alkalis → salt + H2O → d7
 * - (c) carbonates → salt + H2O + CO2 → d8, d10
 * - (d) esterification (alcohol + conc H2SO4 catalyst) → d9
 * - (e) reduction with LiAlH4 → primary alcohol → d1
 *
 * **t18-2**
 * - Ester formation: alcohol + carboxylic acid + conc H2SO4 → d1, d2, d3, d8
 * - Acid hydrolysis (dilute acid, heat) → d4, d6, d9
 * - Alkaline hydrolysis (dilute alkali, heat) → d5, d7, d9
 * - Deduction / naming / stoichiometry supporting those outcomes → d10
 */
export const CHEMISTRY_TOPIC18_PRACTICE: Record<string, SubtopicPracticePack> = {
  "t18-1": {
    noteId: "t18-1",
    drills: [
      {
        id: "t18-1-d1",
        noteId: "t18-1",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem: "State the reagent used to reduce carboxylic acids to primary alcohols at this syllabus level. Write a balanced equation for the reduction of ethanoic acid to ethanol using [H] to represent hydride supply from the reducing agent, and name the organic product class formed.",
        modelAnswerPoints: [
          "The reducing agent is lithium tetrahydridoaluminate(III) / lithium aluminium hydride, LiAlH4 (followed by aqueous acid work-up in full practical sequences).",
          "A balanced organic summary is CH3COOH + 4[H] -> CH3CH2OH + H2O (or equivalent atom-balanced form showing acid -> primary alcohol + water).",
          "The organic product is a primary alcohol (ethanol in this example).",
          "NaBH4 is not sufficient for carboxylic-acid reduction at the level expected here; LiAlH4 is the standard reagent quoted.",
        ],
        workedSolution: [
          "Carboxylic acids are reduced to primary alcohols using lithium aluminium hydride, LiAlH4, which supplies hydride equivalents that convert the carbonyl carbon of the acid all the way down to the alcohol oxidation level, with aqueous acidic work-up often written separately in full mechanisms but summarised here as reduction of the acid functional group.",
          "For ethanoic acid, the carbon chain stays at two carbons while the functional group changes from -COOH to -CH2OH, so the target alcohol is ethanol, and a compact balanced summary matching mark schemes is CH3COOH + 4[H] -> CH3CH2OH + H2O, where [H] stands for the hydride equivalents provided by LiAlH4 rather than being written as molecular hydrogen.",
          "The product class is therefore a primary alcohol, because the -OH group is attached to a carbon atom that is only bonded to one other carbon (or none, for methanol cases) in the usual classification language of AS organic chemistry.",
          "Candidates should not substitute sodium tetrahydridoborate(III), NaBH4, which is taught as adequate for aldehydes and ketones but not for the full reduction of carboxylic acids in the way LiAlH4 is.",
        ],
        commonMistake:
          "Quoting NaBH4 for carboxylic-acid reduction, or writing an aldehyde as the final product instead of the primary alcohol.",
        tags: ["reduction", "LiAlH4", "primary-alcohol", "reagents"],
      },
      {
        id: "t18-1-d2",
        noteId: "t18-1",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "Propanoic acid can be made by complete oxidation of propan-1-ol under suitable conditions. Name the oxidising agents and practical conditions required, outline the two-step oxidation sequence at the carbon chain, and write a balanced equation for the overall change from CH3CH2CH2OH to CH3CH2COOH using [O] to represent the oxidising agent.",
        modelAnswerPoints: [
          "Oxidising agents: acidified potassium dichromate(VI), K2Cr2O7, or acidified potassium manganate(VII), KMnO4.",
          "Conditions must include reflux (so volatile aldehyde intermediate is not distilled off before further oxidation).",
          "Sequence: primary alcohol -> aldehyde -> carboxylic acid under the same strong oxidising conditions.",
          "Overall: CH3CH2CH2OH + 2[O] -> CH3CH2COOH + H2O (or equivalent balanced form).",
        ],
        workedSolution: [
          "The syllabus expects recall that primary alcohols are oxidised to carboxylic acids using either acidified potassium dichromate(VI) or acidified potassium manganate(VII) as the source of oxidation under reflux in the laboratory context.",
          "Reflux is important because the first oxidation product from propan-1-ol is propanal, which is more volatile than the acid; heating under reflux returns vapour to the reaction mixture so the aldehyde remains in contact with oxidant and is further oxidised to propanoic acid rather than being collected early as in an aldehyde preparation.",
          "The conceptual sequence is therefore propan-1-ol to propanal, then propanal to propanoic acid, both steps being oxidation at the functional carbon, even though examination answers often summarise the net change in one equation from alcohol to acid.",
          "A compact overall representation consistent with [O] notation is CH3CH2CH2OH + 2[O] -> CH3CH2COOH + H2O, which conserves atoms if [O] is interpreted as supplying two oxygen atoms net into the organic framework relative to the simplest bookkeeping used in mark schemes, and which identifies propanoic acid as the final carboxylic acid product.",
        ],
        commonMistake:
          "Describing distillation instead of reflux when the target is the carboxylic acid from a primary alcohol, or stopping at the aldehyde.",
        tags: ["oxidation", "preparation", "reflux", "primary-alcohol"],
      },
      {
        id: "t18-1-d3",
        noteId: "t18-1",
        kind: "mcq",
        difficulty: 2,
        stem: "Ethanoic acid is prepared from ethanenitrile, CH3CN, by hydrolysis. Which statement about the alkaline route is correct?",
        options: [
          { id: "A", text: "Heating with dilute NaOH(aq) gives ethanoic acid directly with no further step." },
          { id: "B", text: "Heating with dilute NaOH(aq) gives ethanoate ion; dilute acid is then added to protonate it to ethanoic acid." },
          { id: "C", text: "Only concentrated sulfuric acid may be used to hydrolyse the nitrile." },
          { id: "D", text: "The nitrile must first be reduced with LiAlH4 before hydrolysis." },
        ],
        correctOptionId: "B",
        explanation:
          "Alkaline hydrolysis of a nitrile produces carboxylate (and ammonia); acidification converts RCOO- to RCOOH, matching the syllabus phrase 'followed by acidification'.",
        distractorRationale: {
          A: "Under alkaline conditions the stable organic product in the flask is the carboxylate salt, not the free acid, until a separate acidification step is carried out.",
          C: "The syllabus specifies dilute acid or dilute alkali with heat for nitrile hydrolysis, not concentrated sulfuric acid as the sole option.",
          D: "Nitrile hydrolysis is a separate preparation route; LiAlH4 reduction of nitriles leads to amines, not the acid route asked for in nitrile-to-acid hydrolysis.",
        },
        tags: ["nitrile", "hydrolysis", "acidification", "preparation"],
      },
      {
        id: "t18-1-d4",
        noteId: "t18-1",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "Explain how ethanoic acid can be obtained from methyl ethanoate, CH3COOCH3, using (i) dilute acid and heat, and (ii) dilute alkali and heat. For each route, write a balanced equation and state whether a separate acidification step is needed to isolate ethanoic acid.",
        modelAnswerPoints: [
          "(i) Acidic hydrolysis: CH3COOCH3 + H2O <=> CH3COOH + CH3OH (dilute acid, heat); ethanoic acid forms directly so no extra acidification step is required beyond the acidic medium.",
          "(ii) Alkaline hydrolysis: CH3COOCH3 + NaOH -> CH3COONa + CH3OH (or ionic form with CH3COO-); carboxylate is formed.",
          "After (ii), dilute acid must be added to protonate ethanoate to ethanoic acid if the free acid is required (acidification after alkaline hydrolysis).",
        ],
        workedSolution: [
          "Under acidic conditions with heat, the ester linkage is cleaved by water in the presence of dilute acid catalyst, and for methyl ethanoate the products are ethanoic acid and methanol, which is commonly written as CH3COOCH3 + H2O <=> CH3COOH + CH3OH, where the carboxylic acid is already in the protonated form so there is no separate acidification stage beyond working in acidic solution.",
          "Under alkaline conditions with heat, hydroxide attacks the ester carbonyl and the alkoxide leaving group is released as methanol while the acyl fragment becomes ethanoate ion, giving a balanced practical form such as CH3COOCH3 + NaOH -> CH3COONa + CH3OH, which emphasises that the immediate organic acid derivative in the basic mixture is the carboxylate salt rather than free ethanoic acid.",
          "Because alkaline hydrolysis converts the acid fragment to its conjugate base, isolating ethanoic acid as a distinct substance requires a further acidification step with dilute strong acid to convert CH3COO- (or CH3COONa) into CH3COOH, which is exactly the syllabus distinction between hydrolysis under dilute acid versus dilute alkali followed by acidification when the free carboxylic acid is the target.",
        ],
        commonMistake:
          "Claiming alkaline ester hydrolysis yields free carboxylic acid in the flask without mentioning carboxylate formation or the acidification step.",
        tags: ["ester-hydrolysis", "preparation", "acidification"],
      },
      {
        id: "t18-1-d5",
        noteId: "t18-1",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem: "Ethanenitrile, CH3CN, can be hydrolysed to ethanoic acid using dilute hydrochloric acid with heat. Write a balanced equation for this acidic hydrolysis route and explain why a separate acidification step is not required to obtain the free carboxylic acid, contrasting with alkaline hydrolysis of the same nitrile.",
        modelAnswerPoints: [
          "Acidic hydrolysis: CH3CN + 2H2O + HCl -> CH3COOH + NH4Cl (balanced molecular form).",
          "The reaction is carried out in acidic medium, so the organic product is already ethanoic acid rather than ethanoate ion.",
          "Alkaline hydrolysis would first give ethanoate, which needs protonation with dilute acid afterwards.",
        ],
        workedSolution: [
          "When ethanenitrile is heated with dilute aqueous hydrochloric acid, water adds across the carbon-nitrogen triple bond in a hydrolysis sequence that ends with ethanoic acid and ammonium chloride, for which a balanced overall equation is CH3CN + 2H2O + HCl -> CH3COOH + NH4Cl, matching the usual atom count for C, H, N, O and Cl at this level.",
          "Because the reaction mixture is acidic throughout, the carboxylic-acid functional group is produced directly as CH3COOH rather than as ethanoate ion, so there is no separate acidification stage needed purely to convert RCOO- into RCOOH in the way that is mandatory after alkaline nitrile hydrolysis.",
          "By contrast, if the nitrile were hydrolysed with dilute alkali and heat, the stable organic fragment in the basic flask would be ethanoate, and a further addition of dilute acid would then be required to isolate ethanoic acid, which is the syllabus contrast the question is testing.",
        ],
        commonMistake:
          "Claiming acidic nitrile hydrolysis still produces carboxylate that must be acidified, or omitting an ammonium-containing product.",
        tags: ["nitrile", "hydrolysis", "acidic-route"],
      },
      {
        id: "t18-1-d6",
        noteId: "t18-1",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "Magnesium ribbon is added to an excess of aqueous ethanoic acid. Write a balanced equation for the reaction and describe it in terms of electron transfer, stating the oxidation numbers you assign to magnesium and to hydrogen in the reactants and in the elemental product.",
        modelAnswerPoints: [
          "Equation: 2CH3COOH(aq) + Mg(s) -> (CH3COO)2Mg(aq) + H2(g).",
          "Magnesium atoms are oxidised from oxidation number 0 in Mg(s) to +2 in Mg2+ in magnesium ethanoate.",
          "Hydrogen in H+ (from the acid) is reduced from +1 to 0 in H2(g).",
          "This is a redox reaction: reactive metal displaces hydrogen from a weak acid.",
        ],
        workedSolution: [
          "Ethanoic acid is a weak acid but still supplies sufficient H+ in solution to react with magnesium metal, and the full molecular equation expected is 2CH3COOH(aq) + Mg(s) -> (CH3COO)2Mg(aq) + H2(g), showing magnesium ethanoate in solution and hydrogen gas evolved.",
          "Each magnesium atom loses two electrons when it becomes Mg2+, so its oxidation number rises from 0 in the element to +2 in the aqueous ethanoate salt, which is oxidation of the metal.",
          "The hydrogen that appears as dihydrogen gas comes from acidic hydrogen with oxidation number +1 in ethanoic acid, and those hydrogen atoms gain one electron each when they pair to form H2 with oxidation number 0, which is reduction of hydrogen ions.",
          "Overall the process is the same pattern as magnesium with dilute mineral acids, except that the counter-ion is ethanoate rather than chloride, and the acid is weak, yet the redox classification remains metal oxidation combined with H+ reduction.",
        ],
        commonMistake:
          "Writing hydrogen as H+ in the products, or omitting the 2:1 stoichiometry between ethanoic acid formula units and magnesium.",
        tags: ["metals", "redox", "equations", "oxidation-number"],
      },
      {
        id: "t18-1-d7",
        noteId: "t18-1",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem: "Write a balanced equation for the reaction of ethanoic acid with aqueous sodium hydroxide in neutralisation. State the general names of the two product types formed and identify the spectator ion if the ionic form is written.",
        modelAnswerPoints: [
          "CH3COOH(aq) + NaOH(aq) -> CH3COONa(aq) + H2O(l).",
          "Products are a salt (sodium ethanoate) and water.",
          "Ionic route: CH3COOH(aq) + OH-(aq) -> CH3COO-(aq) + H2O(l) with Na+(aq) as spectator.",
        ],
        workedSolution: [
          "Neutralisation of ethanoic acid with sodium hydroxide is an acid-base reaction between a weak acid and a strong base, and the conventional balanced molecular equation is CH3COOH(aq) + NaOH(aq) -> CH3COONa(aq) + H2O(l), which shows sodium ethanoate and water as the only chemical products when sodium ion is grouped with ethanoate.",
          "The product types are therefore an ionic salt derived from the acid (the carboxylate salt) plus water formed from H+ and OH- combination in the Brønsted-Lowry picture.",
          "If the answer is written in ionic form as CH3COOH(aq) + OH-(aq) -> CH3COO-(aq) + H2O(l), then sodium ion, Na+(aq), does not participate in the bond-making or bond-breaking of the neutralisation step and is correctly identified as the spectator ion present from the sodium hydroxide.",
        ],
        commonMistake:
          "Writing CO2 as a product, which belongs to carbonate reactions, not simple alkali neutralisation.",
        tags: ["neutralisation", "alkalis", "equations"],
      },
      {
        id: "t18-1-d8",
        noteId: "t18-1",
        kind: "mcq",
        difficulty: 2,
        stem: "Which equation and observation pair best represents excess solid sodium carbonate reacting with ethanoic acid?",
        options: [
          { id: "A", text: "Na2CO3 + 2CH3COOH -> 2CH3COONa + H2O + CO2; effervescence of a colourless gas." },
          { id: "B", text: "Na2CO3 + CH3COOH -> CH3COONa + H2CO3; no gas evolved." },
          { id: "C", text: "Na2CO3 + 2CH3COOH -> 2CH3COONa + H2; metal carbonate reduces the acid to hydrogen." },
          { id: "D", text: "Na2CO3 + CH3COOH -> NaHCO3 + CH3COONa; no further reaction on warming." },
        ],
        correctOptionId: "A",
        explanation:
          "Acid + carbonate gives salt, water and carbon dioxide; two moles of acid per mole of carbonate for Na2CO3; CO2 effervescence is the key observation.",
        distractorRationale: {
          B: "Carbonic acid is not observed as a stable final product; CO2 and H2O are lost from the decomposition of the protonated carbonate pathway.",
          C: "Carbonate with carboxylic acid is acid-base with CO2 evolution, not simple metal-acid displacement to H2 as with reactive metals.",
          D: "With excess ethanoic acid relative to carbonate stoichiometry the syllabus pattern is full neutralisation to normal salt, water and CO2, not stopping at hydrogencarbonate as the only story unless the question specifies limiting acid.",
        },
        tags: ["carbonates", "observations", "equations"],
      },
      {
        id: "t18-1-d9",
        noteId: "t18-1",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "Write the equation for the esterification reaction between ethanoic acid and propan-1-ol. State the catalyst required and two practical measures that improve the yield of ester despite the equilibrium.",
        modelAnswerPoints: [
          "CH3COOH + CH3CH2CH2OH <=> CH3COOCH2CH2CH3 + H2O.",
          "Catalyst: concentrated sulfuric acid, H2SO4.",
          "Yield measures (any two sensible): use excess of one reactant; remove water (dehydrating agent / molecular sieves description); distil off ester if higher boiling order allows; heat under reflux for rate (accept stated Le Chatelier arguments tied to the equation).",
        ],
        workedSolution: [
          "Esterification between ethanoic acid and propan-1-ol forms propyl ethanoate and water, and the equilibrium is written as CH3COOH + CH3CH2CH2OH <=> CH3COOCH2CH2CH3 + H2O, which conserves atoms and shows the condensation pattern required in mark schemes.",
          "The syllabus specifies concentrated sulfuric acid as the catalyst, which also acts as a dehydrating agent in practice by absorbing some of the water formed and thereby shifting the position of equilibrium toward the ester according to Le Chatelier's principle.",
          "Candidates can improve isolated ester yield by using an excess of the cheaper reactant (commonly the alcohol or the acid, depending on the method brief), and by removing water from the equilibrium mixture, either chemically via the dehydrating action associated with concentrated sulfuric acid or physically if the practical setup allows water to be separated, in addition to heating under reflux to increase the rate without losing volatile reagents.",
        ],
        commonMistake:
          "Calling the reaction irreversible, or omitting concentrated H2SO4 as the catalyst when asked for esterification conditions.",
        tags: ["esterification", "equilibrium", "catalyst"],
      },
      {
        id: "t18-1-d10",
        noteId: "t18-1",
        kind: "structured",
        difficulty: 4,
        marks: 5,
        stem: "A student adds excess aqueous sodium carbonate to 120 cm^3 of ethanoic acid solution of concentration 0.250 mol dm^-3. Calculate the maximum volume of carbon dioxide, measured at rtp, that can be formed, given that the molar volume of any gas at rtp is 24.0 dm^3 mol^-1. The relevant reaction is 2CH3COOH + Na2CO3 -> 2CH3COONa + H2O + CO2.",
        modelAnswerPoints: [
          "n(CH3COOH) = 0.250 × (120 / 1000) = 0.0300 mol.",
          "From the equation, 2 mol acid produce 1 mol CO2, so n(CO2) = 0.0300 / 2 = 0.0150 mol.",
          "V(CO2) = 0.0150 × 24.0 = 0.360 dm^3 (or 360 cm^3).",
        ],
        workedSolution: [
          "The amount of ethanoic acid present is found by multiplying concentration in mol dm^-3 by volume in dm^3, which is 120 cm^3 converted to 0.120 dm^3, giving n(CH3COOH) = 0.250 mol dm^-3 × 0.120 dm^3 = 0.0300 mol.",
          "The stoichiometry in the given equation shows that two moles of ethanoic acid are required to release one mole of carbon dioxide gas, so with excess carbonate the acid is limiting and n(CO2) = 0.0300 / 2 = 0.0150 mol.",
          "At rtp the molar volume is stated as 24.0 dm^3 mol^-1, so the volume of gas is V = n × Vm = 0.0150 mol × 24.0 dm^3 mol^-1 = 0.360 dm^3, which may also be expressed as 360 cm^3 if consistent unit conversion is shown.",
        ],
        commonMistake:
          "Using a 1:1 mole ratio between ethanoic acid and CO2, which ignores the 2:2 stoichiometry in the balanced equation.",
        tags: ["stoichiometry", "carbonates", "calculations"],
      },
    ],
    flashcards: [
      {
        id: "t18-1-f1",
        noteId: "t18-1",
        difficulty: 1,
        front: "Name two acidified oxidising systems used to oxidise primary alcohols to carboxylic acids under reflux.",
        back: "Acidified potassium dichromate(VI), K2Cr2O7, or acidified potassium manganate(VII), KMnO4.",
        examPhrasing: "State suitable oxidising agents for converting a primary alcohol to a carboxylic acid.",
        tags: ["oxidation", "reagents"],
      },
      {
        id: "t18-1-f2",
        noteId: "t18-1",
        difficulty: 1,
        front: "Why is reflux used when oxidising a primary alcohol to the carboxylic acid?",
        back: "Reflux returns volatile aldehyde intermediate to the hot oxidising mixture so it is further oxidised to the acid instead of distilling off early.",
        examPhrasing: "Explain why reflux is used rather than distillation when the target is the carboxylic acid.",
        confusionPair: "reflux vs distillation for aldehyde collection",
        tags: ["reflux", "oxidation"],
      },
      {
        id: "t18-1-f3",
        noteId: "t18-1",
        difficulty: 2,
        front: "After alkaline hydrolysis of a nitrile, what extra step gives the free carboxylic acid?",
        back: "Acidification with dilute acid to protonate RCOO- to RCOOH.",
        examPhrasing: "State what must be done after alkaline hydrolysis of a nitrile to obtain the carboxylic acid.",
        tags: ["nitrile", "acidification"],
      },
      {
        id: "t18-1-f4",
        noteId: "t18-1",
        difficulty: 2,
        front: "Products of alkaline hydrolysis of an ester before acidification?",
        back: "Carboxylate salt and alcohol (e.g. CH3COO- + ethanol from ethyl ethanoate).",
        examPhrasing: "State the products when an ester is heated with dilute aqueous sodium hydroxide.",
        tags: ["ester", "hydrolysis"],
      },
      {
        id: "t18-1-f5",
        noteId: "t18-1",
        difficulty: 3,
        front: "Equation for magnesium with ethanoic acid?",
        back: "2CH3COOH + Mg -> (CH3COO)2Mg + H2.",
        examPhrasing: "Write an equation for a reactive metal reacting with ethanoic acid.",
        tags: ["metals", "equations"],
      },
      {
        id: "t18-1-f6",
        noteId: "t18-1",
        difficulty: 3,
        front: "Catalyst and conditions for esterification of a carboxylic acid with an alcohol?",
        back: "Concentrated H2SO4 as catalyst; heat (often reflux).",
        examPhrasing: "State conditions for preparing an ester from an alcohol and a carboxylic acid.",
        tags: ["esterification", "catalyst"],
      },
      {
        id: "t18-1-f7",
        noteId: "t18-1",
        difficulty: 4,
        front: "Reagent to reduce carboxylic acids to primary alcohols?",
        back: "Lithium aluminium hydride, LiAlH4 (with subsequent acidic work-up in full lab routes).",
        examPhrasing: "State a reagent that reduces ethanoic acid to ethanol.",
        confusionPair: "LiAlH4 vs NaBH4",
        tags: ["reduction", "LiAlH4"],
      },
      {
        id: "t18-1-f8",
        noteId: "t18-1",
        difficulty: 4,
        front: "Ethanoic acid + solid sodium carbonate: key gaseous product?",
        back: "Carbon dioxide, CO2 (effervescence), plus sodium ethanoate and water.",
        examPhrasing: "Name the gas evolved when ethanoic acid reacts with sodium carbonate.",
        tags: ["carbonates"],
      },
      {
        id: "t18-1-f9",
        noteId: "t18-1",
        difficulty: 5,
        front: "Three syllabus routes to make carboxylic acids (Topic 18.1)?",
        back: "(1) Oxidise primary alcohols or aldehydes with acidified K2Cr2O7 or KMnO4, reflux. (2) Hydrolyse nitriles with dilute acid or alkali + heat; acidify if alkali. (3) Hydrolyse esters with dilute acid or alkali + heat; acidify if alkali.",
        examPhrasing: "Outline ways to prepare a carboxylic acid from different functional groups.",
        tags: ["preparation", "synopsis"],
      },
      {
        id: "t18-1-f10",
        noteId: "t18-1",
        difficulty: 5,
        front: "Mole ratio ethanoic acid : CO2 with sodium carbonate?",
        back: "2 mol CH3COOH : 1 mol CO2 from Na2CO3 (balanced acid-carbonate equation).",
        examPhrasing: "Deduce the stoichiometry between a carboxylic acid and CO2 from carbonate neutralisation.",
        tags: ["stoichiometry", "carbonates"],
      },
    ],
  },

  "t18-2": {
    noteId: "t18-2",
    drills: [
      {
        id: "t18-2-d1",
        noteId: "t18-2",
        kind: "structured",
        difficulty: 1,
        marks: 4,
        stem: "Define the term esterification in the context of Topic 18.2 and state the role of concentrated sulfuric acid in the reaction between a carboxylic acid and an alcohol. Write the general equilibrium equation using R and R' for the alkyl / acyl fragments.",
        modelAnswerPoints: [
          "Esterification is the condensation reaction between a carboxylic acid and an alcohol forming an ester and water.",
          "Concentrated sulfuric acid is the catalyst (and acts as a dehydrating agent, removing water to favour ester).",
          "General equation: RCOOH + R'OH <=> RCOOR' + H2O.",
        ],
        workedSolution: [
          "In this syllabus, esterification means the condensation process in which a carboxylic acid donates the acyl fragment and an alcohol donates the alkoxy fragment, producing an ester linkage and eliminating water as the second small molecule product.",
          "Concentrated sulfuric acid is specified as the catalyst for the reaction between the carboxylic acid and the alcohol, and in practical terms it also behaves as a dehydrating agent that absorbs water formed, which shifts the position of equilibrium toward the ester according to Le Chatelier's principle.",
          "The general reversible equation written in organic symbols is RCOOH + R'OH <=> RCOOR' + H2O, which must be read as an equilibrium because esterification is not taken as a single-direction completion under ordinary reflux conditions without further measures.",
        ],
        commonMistake:
          "Calling concentrated sulfuric acid only a 'drying agent' without identifying it as the required catalyst, or omitting water as a product.",
        tags: ["definitions", "esterification", "catalyst"],
      },
      {
        id: "t18-2-d2",
        noteId: "t18-2",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem: "Write a balanced equation for the formation of ethyl propanoate from the correct alcohol and carboxylic acid. State the full conditions alongside the equation.",
        modelAnswerPoints: [
          "Reactants: propanoic acid, CH3CH2COOH, and ethanol, CH3CH2OH.",
          "CH3CH2COOH + CH3CH2OH <=> CH3CH2COOCH2CH3 + H2O.",
          "Conditions: concentrated H2SO4 catalyst and heat (reflux acceptable).",
        ],
        workedSolution: [
          "The name ethyl propanoate identifies the alcohol-derived fragment as ethyl from ethanol and the acyl fragment as propanoyl from propanoic acid, so the two reactants required are propanoic acid and ethanol rather than propan-1-ol with ethanoic acid, which would give a different ester.",
          "The condensation equilibrium is therefore CH3CH2COOH + CH3CH2OH <=> CH3CH2COOCH2CH3 + H2O, balancing all atoms and showing the ester as the propanoate ester of ethanol.",
          "The conditions that must be stated for this preparation route are concentrated sulfuric acid as catalyst together with heating, commonly described as heat under reflux in laboratory contexts, matching the syllabus specification for ester formation from acid plus alcohol.",
        ],
        commonMistake:
          "Swapping acid and alcohol fragments so the equation would correspond to propyl ethanoate instead of ethyl propanoate.",
        tags: ["naming", "equations", "formation"],
      },
      {
        id: "t18-2-d3",
        noteId: "t18-2",
        kind: "mcq",
        difficulty: 1,
        stem: "Which set of reagents and conditions is the correct syllabus route to prepare an ester from an alcohol and a carboxylic acid?",
        options: [
          { id: "A", text: "Dilute HCl(aq), room temperature, no heat." },
          { id: "B", text: "Concentrated H2SO4 catalyst with heat (e.g. reflux)." },
          { id: "C", text: "Acidified K2Cr2O7 under reflux." },
          { id: "D", text: "LiAlH4 in dry ether, cold." },
        ],
        correctOptionId: "B",
        explanation:
          "The syllabus route is condensation of alcohol + carboxylic acid with concentrated sulfuric acid as catalyst and heat.",
        distractorRationale: {
          A: "Dilute HCl is not the specified catalyst for Fischer esterification in this outcome; concentrated sulfuric acid is.",
          C: "Acidified dichromate is an oxidising mixture for alcohols/aldehydes, not the standard esterification catalyst system.",
          D: "LiAlH4 reduces carbonyl compounds and is unrelated to forming esters from acids and alcohols.",
        },
        tags: ["formation", "conditions"],
      },
      {
        id: "t18-2-d4",
        noteId: "t18-2",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem: "Methyl ethanoate is heated under reflux with dilute aqueous hydrochloric acid as catalyst. Write the balanced equation for hydrolysis and explain whether the reaction is expected to go to completion in a closed flask.",
        modelAnswerPoints: [
          "CH3COOCH3 + H2O <=> CH3COOH + CH3OH (dilute acid, heat).",
          "The reaction is the reverse of esterification and is reversible, so it reaches an equilibrium mixture rather than full completion in a closed system.",
        ],
        workedSolution: [
          "Acid-catalysed hydrolysis of methyl ethanoate cleaves the ester linkage with water to regenerate methanol and ethanoic acid, and the usual balanced representation is CH3COOCH3 + H2O <=> CH3COOH + CH3OH, with dilute acid providing H+ catalysis and heat increasing the rate of approach to equilibrium.",
          "Because acidic hydrolysis is exactly the microscopic reverse of Fischer esterification between ethanoic acid and methanol, the process is fundamentally an equilibrium in a closed flask, so even after long reflux a mixture of ester, water, acid and alcohol remains unless water or one organic product is removed to shift the position.",
        ],
        commonMistake:
          "Stating that acid hydrolysis goes entirely to products with no equilibrium left, or giving carboxylate as the acid-catalysed organic acid fragment.",
        tags: ["acid-hydrolysis", "equilibrium"],
      },
      {
        id: "t18-2-d5",
        noteId: "t18-2",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "Write an equation for the alkaline hydrolysis of ethyl ethanoate using sodium hydroxide. Explain why this pathway is often described as irreversible in practice compared with acid hydrolysis, and name the organic products before any acidification step.",
        modelAnswerPoints: [
          "CH3COOCH2CH3 + NaOH -> CH3COONa + CH3CH2OH (or ionic variant with CH3COO- + Na+).",
          "Carboxylate ion is formed, which does not readily re-esterify under basic conditions, so the reaction is driven forward.",
          "Organic products before acidification: carboxylate (salt) and ethanol.",
        ],
        workedSolution: [
          "Heating ethyl ethanoate with aqueous sodium hydroxide cleaves the ester saponification-style to sodium ethanoate and ethanol, commonly written as CH3COOCH2CH3 + NaOH -> CH3COONa + CH3CH2OH, which is acceptable at this level alongside an ionic formulation showing ethoxide leaving group steps consolidated into product names.",
          "Unlike acid hydrolysis, the carboxylic-acid oxidation state appears as its conjugate base in the basic reaction mixture, and carboxylate anions are poor electrophiles for nucleophilic attack by alkoxide under these conditions, so the back-reaction to ester is not significant and the hydrolysis is treated as effectively irreversible in practice.",
          "Therefore, before any addition of further dilute acid, the identifiable organic products are ethanol from the original ethoxy fragment and the ethanoate species present as sodium ethanoate in the sodium hydroxide medium.",
        ],
        commonMistake:
          "Writing free ethanoic acid as an immediate product in the alkaline mixture without mentioning carboxylate first.",
        tags: ["alkaline-hydrolysis", "saponification"],
      },
      {
        id: "t18-2-d6",
        noteId: "t18-2",
        kind: "mcq",
        difficulty: 2,
        stem: "Pentyl methanoate is hydrolysed with dilute H2SO4(aq) and heat. Which pair of organic products is correct?",
        options: [
          { id: "A", text: "Methanoic acid and pentan-1-ol." },
          { id: "B", text: "Pentanoic acid and methanol." },
          { id: "C", text: "Sodium methanoate and pentan-1-ol." },
          { id: "D", text: "Methanal and pentanoic acid." },
        ],
        correctOptionId: "A",
        explanation:
          "Acid hydrolysis gives carboxylic acid from the acyl side (HCOOH from methanoate fragment) and alcohol from the alkoxy side (pentan-1-ol from pentyl).",
        distractorRationale: {
          B: "That would correspond to swapping which chain came from the acid versus the alcohol in the original ester name.",
          C: "Carboxylate salt is characteristic of alkaline hydrolysis with NaOH, not dilute sulfuric acid hydrolysis.",
          D: "Hydrolysis cleaves the ester to acid + alcohol, not to methanal plus a different acid skeleton.",
        },
        tags: ["acid-hydrolysis", "products"],
      },
      {
        id: "t18-2-d7",
        noteId: "t18-2",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "An ester X was hydrolysed with dilute NaOH and heat; acidification then gave only butanoic acid and methanol as neutral organic products. Deduce the systematic name and structural formula of X, explaining how each fragment is assigned.",
        modelAnswerPoints: [
          "Methanol implies the alkoxy fragment was -OCH3 from methyl alcohol.",
          "Butanoic acid implies the acyl fragment was CH3CH2CH2COO- from the four-carbon acid.",
          "X is methyl butanoate, CH3CH2CH2COOCH3.",
        ],
        workedSolution: [
          "Alkaline hydrolysis followed by acidification still allows reconstruction of the original ester by identifying which product came from the alcohol side and which from the acid side after both fragments have been returned to their proton-neutral forms.",
          "Methanol can only arise from a methoxy group attached to the ester oxygen in the parent ester, so the alcohol used to form the ester must have been methanol and the alkyl fragment in the name is methyl.",
          "Butanoic acid is the four-carbon straight-chain carboxylic acid CH3CH2CH2COOH, so the acyl portion of the ester must have been the butanoyl group, and assembling methyl with butanoate gives methyl butanoate with condensed structural formula CH3CH2CH2COOCH3 as the deduced ester X.",
        ],
        commonMistake:
          "Naming the ester butyl methanoate by reading fragments in the wrong order relative to the acid and alcohol products.",
        tags: ["deduction", "naming", "hydrolysis"],
      },
      {
        id: "t18-2-d8",
        noteId: "t18-2",
        kind: "mcq",
        difficulty: 2,
        stem: "Which change to conditions most directly increases the rate at which an ester reaches equilibrium with its hydrolysis products in dilute aqueous acid?",
        options: [
          { id: "A", text: "Increasing temperature (e.g. reflux)." },
          { id: "B", text: "Removing all water from the flask." },
          { id: "C", text: "Switching to concentrated NaOH with no acid present." },
          { id: "D", text: "Adding a platinum catalyst." },
        ],
        correctOptionId: "A",
        explanation:
          "Higher temperature increases the rate of both forward and reverse steps so equilibrium is reached faster; acid-catalysed hydrolysis is still equilibrium-limited.",
        distractorRationale: {
          B: "Removing water may shift equilibrium position toward ester (reverse of hydrolysis), but the question targets rate of reaching equilibrium in acid; heating is the clearest general-rate answer.",
          C: "That changes mechanism to alkaline hydrolysis, not faster acid-catalysed hydrolysis in dilute acid.",
          D: "Platinum is not part of the syllabus ester hydrolysis catalysis, which is acid (H+).",
        },
        tags: ["kinetics", "hydrolysis"],
      },
      {
        id: "t18-2-d9",
        noteId: "t18-2",
        kind: "structured",
        difficulty: 4,
        marks: 6,
        stem: "Compare acidic and alkaline hydrolysis of ethyl ethanoate under dilute conditions with heat. For each route, list the organic products present in the reaction mixture before any deliberate acidification, and state whether further dilute acid must be added to obtain ethanoic acid as a separate species.",
        modelAnswerPoints: [
          "Acid hydrolysis: equilibrium mixture containing ethyl ethanoate, water, ethanoic acid, ethanol; ethanoic acid already present so no extra acidification required beyond the catalytic acidic medium.",
          "Alkaline hydrolysis: sodium ethanoate (or ethanoate ion) and ethanol in basic mixture; dilute acid must be added afterwards to convert ethanoate to ethanoic acid if the free acid is wanted.",
          "Alkaline route driven forward by carboxylate formation; acid route is reversible equilibrium.",
        ],
        workedSolution: [
          "When ethyl ethanoate is heated with dilute aqueous acid, the ester and water partially convert to ethanoic acid and ethanol, but the reverse condensation also occurs, so before any work-up the organic species present together include residual ester, ethanol, ethanoic acid and water, all interconnected by equilibrium, and ethanoic acid is already in its protonated form within the acidic solution so no separate acidification step is required simply to create RCOOH from RCOO-.",
          "When the same ester is heated with dilute aqueous sodium hydroxide, hydroxide attacks the carbonyl carbon and the ethoxide fragment leaves as ethanol while the acyl fragment becomes ethanoate ion associated with sodium ion, meaning the key organic species before deliberate acidification are ethanol and sodium ethanoate rather than free ethanoic acid.",
          "If the experimental aim is to isolate ethanoic acid itself after alkaline hydrolysis, the student must add dilute strong acid to protonate ethanoate to ethanoic acid, whereas under acidic hydrolysis conditions that protonation state is already achieved whenever ethanoic acid is present in the equilibrium mixture, which summarises the syllabus contrast between dilute acid and dilute alkali routes.",
        ],
        commonMistake:
          "Listing free ethanoic acid as a major product inside hot aqueous NaOH without mentioning neutralisation of the acid by base.",
        tags: ["comparison", "hydrolysis", "acidification"],
      },
      {
        id: "t18-2-d10",
        noteId: "t18-2",
        kind: "structured",
        difficulty: 4,
        marks: 5,
        stem: "Propyl ethanoate, Mr = 102, is prepared from excess propan-1-ol and pure ethanoic acid of mass 9.00 g in an equilibrium reaction. Calculate the maximum amount, in moles, of propyl ethanoate that could be formed if the acid were completely converted, and hence the theoretical maximum mass of ester. Use Mr data: ethanoic acid = 60, propyl ethanoate = 102. State one reason the actual isolated mass is usually lower.",
        modelAnswerPoints: [
          "n(CH3COOH) = 9.00 / 60 = 0.150 mol.",
          "1 mol acid gives at most 1 mol ester, so n(ester)_max = 0.150 mol.",
          "Mass_max = 0.150 × 102 = 15.3 g.",
          "Actual yield lower because reaction is equilibrium-limited / side reactions / work-up losses (any sensible point).",
        ],
        workedSolution: [
          "The amount of ethanoic acid is calculated from its given mass and Mr as n(CH3COOH) = 9.00 g / 60 g mol^-1 = 0.150 mol, assuming the sample is pure as stated.",
          "The stoichiometry between ethanoic acid and propyl ethanoate in the esterification equilibrium CH3COOH + CH3CH2CH2OH <=> CH3COOCH2CH2CH3 + H2O is one-to-one for the acid and the ester if every acid molecule were converted, so the theoretical maximum amount of ester equals 0.150 mol when propan-1-ol is in excess and not limiting.",
          "The theoretical maximum mass of ester is therefore m = n × Mr = 0.150 mol × 102 g mol^-1 = 15.3 g, using the Mr value provided for propyl ethanoate.",
          "In practice the isolated mass is lower because esterification is a reversible equilibrium rather than a single-direction completion, and also because of practical losses during separation, incomplete conversion, or competing elimination side chemistry associated with concentrated sulfuric acid, any one of which is an acceptable examination comment.",
        ],
        commonMistake:
          "Using a 2:1 or other incorrect stoichiometry between acid and ester, or forgetting that reversible esterification limits conversion.",
        tags: ["stoichiometry", "yield", "equilibrium"],
      },
    ],
    flashcards: [
      {
        id: "t18-2-f1",
        noteId: "t18-2",
        difficulty: 1,
        front: "Catalyst for forming an ester from an alcohol + carboxylic acid?",
        back: "Concentrated sulfuric acid, H2SO4, with heat (often reflux).",
        examPhrasing: "State the catalyst used when ethanoic acid reacts with ethanol to form an ester.",
        tags: ["formation", "catalyst"],
      },
      {
        id: "t18-2-f2",
        noteId: "t18-2",
        difficulty: 1,
        front: "General equation for esterification?",
        back: "RCOOH + R'OH <=> RCOOR' + H2O.",
        examPhrasing: "Write the general equation for ester formation from an acid and an alcohol.",
        tags: ["equations"],
      },
      {
        id: "t18-2-f3",
        noteId: "t18-2",
        difficulty: 2,
        front: "Name the ester: CH3COOCH2CH2CH3",
        back: "Propyl ethanoate (from ethanoic acid + propan-1-ol).",
        examPhrasing: "Give the systematic name of the ester with this formula.",
        confusionPair: "propyl ethanoate vs ethyl propanoate",
        tags: ["naming"],
      },
      {
        id: "t18-2-f4",
        noteId: "t18-2",
        difficulty: 2,
        front: "Products of acid hydrolysis of an ester RCOOR'?",
        back: "Carboxylic acid RCOOH and alcohol R'OH (equilibrium).",
        examPhrasing: "State the products when an ester is heated with dilute acid.",
        tags: ["acid-hydrolysis"],
      },
      {
        id: "t18-2-f5",
        noteId: "t18-2",
        difficulty: 3,
        front: "Products of alkaline hydrolysis of RCOOR' with NaOH?",
        back: "Sodium carboxylate RCOONa (or RCOO-) and alcohol R'OH.",
        examPhrasing: "Write the products of heating an ester with dilute aqueous sodium hydroxide.",
        tags: ["alkaline-hydrolysis"],
      },
      {
        id: "t18-2-f6",
        noteId: "t18-2",
        difficulty: 3,
        front: "Why is alkaline ester hydrolysis called irreversible in many textbooks?",
        back: "Carboxylate does not easily re-form the ester under basic conditions, so equilibrium lies far to hydrolysis products.",
        examPhrasing: "Explain why alkaline hydrolysis goes essentially to completion.",
        tags: ["equilibrium"],
      },
      {
        id: "t18-2-f7",
        noteId: "t18-2",
        difficulty: 4,
        front: "After alkaline hydrolysis, how do you isolate the free carboxylic acid?",
        back: "Cool if needed, then acidify with dilute strong acid to protonate RCOO-.",
        examPhrasing: "State the step required after saponification to obtain the carboxylic acid.",
        tags: ["acidification"],
      },
      {
        id: "t18-2-f8",
        noteId: "t18-2",
        difficulty: 4,
        front: "Ethyl ethanoate + dilute acid, heat — write hydrolysis equation.",
        back: "CH3COOCH2CH3 + H2O <=> CH3COOH + CH3CH2OH.",
        examPhrasing: "Write the equation for the acid-catalysed hydrolysis of ethyl ethanoate.",
        tags: ["equations", "hydrolysis"],
      },
      {
        id: "t18-2-f9",
        noteId: "t18-2",
        difficulty: 5,
        front: "Difference between conc H2SO4 in formation vs dilute acid in hydrolysis?",
        back: "Formation uses concentrated H2SO4 as catalyst/dehydrating agent; hydrolysis uses dilute aqueous acid to catalyse the reverse cleavage by water.",
        examPhrasing: "Contrast the role of sulfuric acid in esterification and in acid-catalysed hydrolysis.",
        confusionPair: "conc H2SO4 esterification vs dilute acid hydrolysis",
        tags: ["conditions"],
      },
      {
        id: "t18-2-f10",
        noteId: "t18-2",
        difficulty: 5,
        front: "Ester that hydrolyses to methanol + sodium propanoate (before acidification)?",
        back: "Methyl propanoate, CH3CH2COOCH3.",
        examPhrasing: "Deduce the ester that gives propanoate and methanol on alkaline hydrolysis.",
        tags: ["deduction", "naming"],
      },
    ],
  },
};
