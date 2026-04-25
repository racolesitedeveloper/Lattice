import type { SubtopicPracticePack } from "./types";

/**
 * 9701 Topic 14 — subtopics `t14-1` (14.1 Alkanes) and `t14-2` (14.2 Alkenes).
 *
 * LO crosswalk (`data/syllabus/chemistry-9701-learning-outcomes.md` §14.1):
 * - Alkane formation: hydrogenation; cracking → t14-1-d1, t14-1-d6, t14-1-f2
 * - Complete / incomplete combustion → t14-1-d2, t14-1-d8, t14-1-f3
 * - Free-radical substitution (Cl_2 / Br_2, UV), ethane example → t14-1-d3, t14-1-d4, t14-1-f4
 * - Mechanism: initiation, propagation, termination → t14-1-d4, t14-1-d10
 * - Cracking: more useful lower M_r alkanes and alkenes → t14-1-d6
 * - Unreactivity towards polar reagents (C–H strength, low polarity) → t14-1-d5, t14-1-f5
 * - Engine emissions (CO, NO_x, unburnt HC) and catalytic removal → t14-1-d7, t14-1-f6
 * - Stoichiometry of complete combustion (quantitative outcome) → t14-1-d9
 *
 * LO crosswalk §14.2:
 * - Alkene formation: elimination (ethanolic NaOH, heat); dehydration (Al_2O_3 / conc acid); cracking → t14-2-d1, t14-2-d2, t14-2-d3, t14-2-f1
 * - Electrophilic addition: H_2; steam / H_3PO_4; HX; X_2 → t14-2-d4, t14-2-d5, t14-2-d6, t14-2-d7
 * - Cold dilute acidified MnO_4^- → diol → t14-2-d8, t14-2-f4
 * - Hot concentrated acidified MnO_4^- → C=C cleavage / deducing position → t14-2-d9, t14-2-f5
 * - Addition polymerisation (ethene, propene) → t14-2-d10, t14-2-f2, t14-2-f3
 */
export const CHEMISTRY_TOPIC14_PRACTICE: Record<string, SubtopicPracticePack> = {
  "t14-1": {
    noteId: "t14-1",
    drills: [
      {
        id: "t14-1-d1",
        noteId: "t14-1",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "State the two syllabus routes by which alkanes can be formed from other hydrocarbon types. For each route, give the essential reagents and conditions and write one balanced equation (molecular form is acceptable) that illustrates the transformation.",
        modelAnswerPoints: [
          "Hydrogenation of an alkene: H_2(g) with a Ni or Pt catalyst and heat, e.g. C_2H_4 + H_2 -> C_2H_6.",
          "Cracking of a longer-chain alkane: heat with an Al_2O_3 catalyst (catalytic cracking), producing shorter alkanes and alkenes, e.g. C_10H_22 -> C_6H_14 + C_4H_8.",
          "Hydrogenation is an addition across C=C converting unsaturation to an alkane; cracking is thermal scission of heavy fractions into more useful lighter molecules.",
        ],
        workedSolution: [
          "The first route is hydrogenation, in which hydrogen gas adds across a carbon–carbon double bond in the presence of a nickel or platinum catalyst and heat, converting an alkene into a fully saturated alkane, as shown for ethene by the equation C_2H_4 + H_2 -> C_2H_6 where the catalyst and heat are required because the uncatalysed addition would be too slow for laboratory or industrial use at modest temperatures.",
          "The second route is cracking of a longer-chain alkane, which is brought about by strong heating in the presence of an aluminium oxide catalyst so that carbon–carbon bonds in the heavy fraction break to give a mixture containing shorter-chain alkanes together with alkenes, for example C_10H_22 -> C_6H_14 + C_4H_8, which illustrates how one heavy molecule is converted into a smaller alkane plus an alkene fragment.",
          "Together these routes show how alkanes are accessed either by removing unsaturation from alkenes or by fragmenting long-chain material from crude oil into more valuable lower M_r alkanes suitable for fuels and feedstocks.",
        ],
        commonMistake:
          "Omitting the catalyst for hydrogenation or describing cracking only as 'heating' without mentioning Al_2O_3 where the syllabus expects catalytic cracking conditions.",
        tags: ["alkane-formation", "hydrogenation", "cracking", "equations"],
      },
      {
        id: "t14-1-d2",
        noteId: "t14-1",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "For methane, CH_4, write a balanced equation for its complete combustion in excess oxygen. Write a second balanced equation showing incomplete combustion to carbon monoxide and water only. State how the oxygen supply relates to which pathway dominates in a practical burner.",
        modelAnswerPoints: [
          "Complete combustion: CH_4 + 2O_2 -> CO_2 + 2H_2O.",
          "Incomplete combustion example to CO: 2CH_4 + 3O_2 -> 2CO + 4H_2O (other stoichiometries producing CO are acceptable if balanced).",
          "Complete combustion requires sufficient oxygen for oxidation to the highest common oxide of carbon (CO_2); limited air favours CO and/or carbon (soot) alongside water.",
        ],
        workedSolution: [
          "When methane burns in a good supply of oxygen, each carbon atom is fully oxidised to carbon dioxide and all hydrogen ends as water, which is represented by CH_4 + 2O_2 -> CO_2 + 2H_2O, where the oxygen coefficient shows that two moles of O_2 are needed per mole of methane for this fully oxidised outcome.",
          "If the oxygen supply is restricted, the same fuel cannot reach CO_2 for every carbon atom, so a plausible balanced equation showing incomplete combustion to carbon monoxide and water is 2CH_4 + 3O_2 -> 2CO + 4H_2O, which conserves atoms while showing that less oxygen per mole of methane is available than in the complete case.",
          "In a practical burner, mixing and airflow determine whether the flame is fuel-lean enough for complete combustion or fuel-rich enough that pockets of incomplete combustion occur, so engineers aim for excess air when low CO emissions are required, whereas oxygen-starved zones in an engine cylinder are exactly where CO and soot formation become significant.",
        ],
        commonMistake:
          "Writing only CO_2 and H_2O for every combustion question, even when the stem specifies incomplete combustion or limited oxygen.",
        tags: ["combustion", "equations", "complete-vs-incomplete"],
      },
      {
        id: "t14-1-d3",
        noteId: "t14-1",
        kind: "structured",
        difficulty: 3,
        marks: 4,
        stem: "Write a balanced equation for the free-radical substitution of ethane, C_2H_6, with chlorine in the presence of ultraviolet light to give chloroethane, C_2H_5Cl, and hydrogen chloride. State why ultraviolet radiation is required and name one organic by-product mixture effect that arises if chlorine is in large excess.",
        modelAnswerPoints: [
          "C_2H_6 + Cl_2 -> C_2H_5Cl + HCl (UV light).",
          "UV supplies energy for homolytic fission of Cl–Cl to chlorine radicals that initiate the chain.",
          "Further substitution can give multi-chlorinated ethanes (e.g. dichloroethanes), so the product is often a mixture unless conditions are controlled.",
        ],
        workedSolution: [
          "The overall substitution reaction replacing one hydrogen in ethane by chlorine is summarised by C_2H_6 + Cl_2 -> C_2H_5Cl + HCl with ultraviolet light indicated because thermal cleavage of Cl_2 is not relied on at room temperature in the usual teaching context.",
          "Ultraviolet radiation is required because it provides the energy to break the chlorine–chlorine bond homolytically, producing chlorine radicals that begin the radical chain; without this initiation step the reaction would be negligibly slow under ordinary laboratory illumination.",
          "If a large excess of chlorine is present, the first-formed chloroethane can undergo further radical substitution, so di- and tri-chlorinated products become important and the isolated yield of monochloroethane falls unless the ethane is in excess or conversion is stopped early.",
        ],
        commonMistake:
          "Describing the reaction as electrophilic or nucleophilic substitution, or omitting UV when the syllabus ties alkane halogenation to ultraviolet initiation.",
        tags: ["free-radical-substitution", "chlorine", "ethane", "UV"],
      },
      {
        id: "t14-1-d4",
        noteId: "t14-1",
        kind: "structured",
        difficulty: 4,
        marks: 7,
        stem: "For the chlorination of ethane under UV light, describe the free-radical substitution mechanism by writing one initiation step, two propagation steps, and two different termination steps. Label each step clearly.",
        modelAnswerPoints: [
          "Initiation: Cl_2 -> 2Cl (homolytic fission, UV).",
          "Propagation 1: Cl + C_2H_6 -> HCl + C_2H_5.",
          "Propagation 2: C_2H_5 + Cl_2 -> C_2H_5Cl + Cl (regenerates Cl).",
          "Termination examples: Cl + Cl -> Cl_2; C_2H_5 + Cl -> C_2H_5Cl; C_2H_5 + C_2H_5 -> C_4H_10 (any two distinct radical combination steps that remove radicals).",
        ],
        workedSolution: [
          "Initiation begins when ultraviolet radiation causes homolytic bond fission of molecular chlorine, written as Cl_2 -> 2Cl, where each chlorine atom carries an unpaired electron and therefore behaves as a reactive radical capable of abstracting hydrogen from ethane.",
          "The first propagation step is hydrogen abstraction from ethane by a chlorine radical, Cl + C_2H_6 -> HCl + C_2H_5, which forms hydrogen chloride and an ethyl radical, and the second propagation step is C_2H_5 + Cl_2 -> C_2H_5Cl + Cl, which forms chloroethane and regenerates a chlorine radical so the chain can continue without net consumption of radicals until termination dominates.",
          "Termination removes radicals from the chain; one termination pathway is radical recombination of two chlorine atoms, Cl + Cl -> Cl_2, and another is combination of an ethyl radical with a chlorine atom, C_2H_5 + Cl -> C_2H_5Cl, both of which reduce radical concentration and eventually stop the chain when propagation can no longer compete.",
        ],
        commonMistake:
          "Writing ionic curly-arrow mechanisms, or listing propagation steps that do not regenerate the chain-carrying radical needed for a sustained chain reaction.",
        tags: ["mechanism", "radicals", "propagation", "termination"],
      },
      {
        id: "t14-1-d5",
        noteId: "t14-1",
        kind: "mcq",
        difficulty: 2,
        stem: "Which explanation best accounts for the low reactivity of alkanes towards polar reagents under ordinary conditions?",
        options: [
          {
            id: "A",
            text: "Alkanes contain strong, essentially non-polar C–H and C–C sigma bonds, so there is little driving force for attack by polar electrophiles or nucleophiles.",
          },
          {
            id: "B",
            text: "Alkanes are ionic lattices, so polar water molecules screen the carbon chain from reagents.",
          },
          {
            id: "C",
            text: "Alkanes have delocalised pi electrons that are already saturated by hydrogen, preventing further addition.",
          },
          {
            id: "D",
            text: "Alkanes react rapidly with polar reagents but the products are all gases and escape unnoticed.",
          },
        ],
        correctOptionId: "A",
        explanation:
          "Sigma bonds in alkanes are strong and evenly shared; without an electron-rich pi bond or polar functional group, typical polar pathways are disfavoured, which is why harsh conditions (combustion, UV halogenation) are needed.",
        distractorRationale: {
          B: "Alkanes are covalent molecular hydrocarbons, not ionic lattices.",
          C: "Alkanes are saturated and lack the pi systems that characterise alkenes and aromatic rings in syllabus contexts.",
          D: "This contradicts the observed inertness of alkanes towards polar reagents at room temperature.",
        },
        tags: ["unreactivity", "bonding", "polarity"],
      },
      {
        id: "t14-1-d6",
        noteId: "t14-1",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "Explain how catalytic cracking of heavier crude oil fractions is used industrially to obtain more useful products of lower M_r. In your answer name the typical catalyst and state what classes of smaller molecules are especially valuable from the process.",
        modelAnswerPoints: [
          "Heavy fractions contain long-chain alkanes that are less useful as petrol components because of high boiling points and poor volatility.",
          "Heating with an Al_2O_3 catalyst breaks C–C bonds to give shorter-chain alkanes suitable for fuels and alkenes useful as chemical feedstocks.",
          "Thus cracking raises the economic value of crude by converting low-demand residue into lighter, more versatile hydrocarbons.",
        ],
        workedSolution: [
          "The heavier fractions separated from crude oil contain long-chain alkanes whose high boiling points and poor ignition characteristics make them less attractive as motor fuels than the lighter cut corresponding to petrol, so there is an industrial incentive to convert that material into molecules of lower relative molecular mass.",
          "Catalytic cracking achieves this by passing hot vapour of the heavy fraction over an aluminium oxide catalyst, where carbon–carbon bonds cleave to produce a mixture rich in shorter-chain alkanes that improve the petrol pool and in alkenes such as ethene and propene that can be polymerised or converted into alcohols and other downstream chemicals.",
          "The overall picture is therefore not merely 'breaking molecules' but upgrading refinery output by matching the carbon-chain length distribution to transport fuel demand and to the petrochemical industry's need for reactive unsaturated feedstocks.",
        ],
        commonMistake:
          "Saying cracking 'removes impurities' without identifying shorter alkanes and alkenes as the targeted lower M_r products.",
        tags: ["cracking", "industry", "catalyst"],
      },
      {
        id: "t14-1-d7",
        noteId: "t14-1",
        kind: "structured",
        difficulty: 3,
        marks: 6,
        stem: "Outline the environmental problems linked to carbon monoxide, oxides of nitrogen, and unburnt hydrocarbons when alkanes are burned in internal combustion engines. Describe how a catalytic converter reduces the harm from these emissions, naming the kinds of chemical change involved.",
        modelAnswerPoints: [
          "CO is toxic because it binds to haemoglobin and reduces oxygen transport.",
          "NO_x contributes to acid rain and photochemical smog; unburnt hydrocarbons are respiratory irritants and smog precursors.",
          "A catalytic converter on Pt/Pd/Rh surfaces reduces NO_x to N_2 and oxidises CO and unburnt hydrocarbons to CO_2 and H_2O.",
        ],
        workedSolution: [
          "Carbon monoxide from incomplete combustion is poisonous because it coordinates strongly to haemoglobin, displacing oxygen and reducing the oxygen-carrying capacity of blood, which is why high CO concentrations in urban traffic are a direct human health concern rather than only an air-quality statistic.",
          "Oxides of nitrogen formed at high flame temperatures from nitrogen and oxygen in air contribute to acid deposition and photochemical smog chemistry, while unburnt and partially burnt hydrocarbons escape as volatile organic pollutants that participate in tropospheric ozone formation and are themselves undesirable to inhale.",
          "A three-way catalytic converter mounted in the exhaust stream uses precious-metal surfaces to catalyse reduction of nitrogen oxides to nitrogen gas while simultaneously catalysing oxidation of carbon monoxide and residual hydrocarbons to carbon dioxide and water, so the net effect is to convert the most harmful immediate exhaust components into substances that are either benign (N_2) or more acceptable in the context of dispersed CO_2 and water vapour from mobile sources.",
        ],
        commonMistake:
          "Claiming the converter removes CO_2 as the main function, or omitting both reduction of NO_x and oxidation of CO/hydrocarbons.",
        tags: ["environment", "pollution", "catalytic-converter"],
      },
      {
        id: "t14-1-d8",
        noteId: "t14-1",
        kind: "mcq",
        difficulty: 2,
        stem: "Propane, C_3H_8, burns in a poorly ventilated camping stove so that oxygen is limited. Which set of products is most consistent with significantly incomplete combustion of propane?",
        options: [
          { id: "A", text: "CO_2 and H_2O only." },
          { id: "B", text: "CO, H_2O, and possibly C (soot), with little or no CO_2." },
          { id: "C", text: "H_2 and CO_2 only." },
          { id: "D", text: "Propene and hydrogen chloride." },
        ],
        correctOptionId: "B",
        explanation:
          "Limited oxygen prevents full oxidation of every carbon atom to CO_2, so CO and elemental carbon become major carbon-containing products alongside water from the hydrogen.",
        distractorRationale: {
          A: "That pattern corresponds to excess oxygen and complete combustion, not oxygen-starved conditions.",
          C: "Propane combustion does not primarily produce hydrogen gas as a major product set in this context.",
          D: "Those are not the expected combustion products of an alkane with oxygen.",
        },
        tags: ["combustion", "incomplete", "pollution"],
      },
      {
        id: "t14-1-d9",
        noteId: "t14-1",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "Calculate the volume of carbon dioxide, measured at room temperature and pressure (rtp), produced when 0.0400 mol of propane, C_3H_8, undergoes complete combustion in excess oxygen. Take the molar volume of any gas at rtp as 24.0 dm^3 mol^-1. Start from a balanced equation for the combustion.",
        modelAnswerPoints: [
          "Balanced equation: C_3H_8 + 5O_2 -> 3CO_2 + 4H_2O.",
          "Stoichiometry: 1 mol C_3H_8 gives 3 mol CO_2, so n(CO_2) = 3 × 0.0400 = 0.120 mol.",
          "Volume V = n × V_m = 0.120 × 24.0 = 2.88 dm^3.",
        ],
        workedSolution: [
          "The balanced equation for complete combustion of propane is C_3H_8 + 5O_2 -> 3CO_2 + 4H_2O, which shows that each mole of propane molecules produces three moles of carbon dioxide because every carbon atom in the fuel is converted to CO_2 when oxygen is in excess.",
          "The amount of carbon dioxide formed is therefore n(CO_2) = 3 × n(C_3H_8) = 3 × 0.0400 mol = 0.120 mol, using the stoichiometric ratio read directly from the balanced equation.",
          "At rtp the molar volume is given as 24.0 dm^3 mol^-1, so the gas volume is V(CO_2) = 0.120 mol × 24.0 dm^3 mol^-1 = 2.88 dm^3, which should be quoted with consistent significant figures matching the data supplied.",
        ],
        commonMistake:
          "Using a 1:1 mole ratio between propane and CO_2, or forgetting to multiply the molar volume by the amount in moles.",
        tags: ["stoichiometry", "combustion", "gas-volume"],
      },
      {
        id: "t14-1-d10",
        noteId: "t14-1",
        kind: "mcq",
        difficulty: 3,
        stem: "In the propagation stage of ethane chlorination, why is the step C_2H_5 + Cl_2 -> C_2H_5Cl + Cl classified as propagation rather than termination?",
        options: [
          {
            id: "A",
            text: "It consumes two radicals without forming a new radical, ending the chain.",
          },
          {
            id: "B",
            text: "It forms a stable molecule and a new radical, so the chain can continue.",
          },
          {
            id: "C",
            text: "It only occurs during initiation under UV light.",
          },
          {
            id: "D",
            text: "It is a heterolytic step that produces carbocations.",
          },
        ],
        correctOptionId: "B",
        explanation:
          "Propagation converts reactants to products while regenerating a chain-carrying radical; here a chlorine radical is produced again after C_2H_5Cl forms.",
        distractorRationale: {
          A: "That description fits termination, where radical concentration falls because radicals combine or are otherwise removed without replacement.",
          C: "Propagation cycles occur repeatedly after initiation; they are not confined to the UV initiation event itself.",
          D: "Radical chlorination proceeds by homolytic steps, not by carbocation formation.",
        },
        tags: ["mechanism", "propagation", "radicals"],
      },
    ],
    flashcards: [
      {
        id: "t14-1-f1",
        noteId: "t14-1",
        difficulty: 1,
        front: "Reagents and conditions to hydrogenate an alkene to an alkane?",
        back: "H_2(g) with Ni or Pt catalyst and heat.",
        examPhrasing: "State the conditions used to hydrogenate an alkene.",
        tags: ["hydrogenation", "conditions"],
      },
      {
        id: "t14-1-f2",
        noteId: "t14-1",
        difficulty: 1,
        front: "Catalyst commonly quoted for catalytic cracking of alkanes?",
        back: "Al_2O_3 with heat (long-chain alkane -> shorter alkanes + alkenes).",
        examPhrasing: "Name a catalyst used in the cracking of alkanes.",
        tags: ["cracking", "catalyst"],
      },
      {
        id: "t14-1-f3",
        noteId: "t14-1",
        difficulty: 2,
        front: "Products of complete vs incomplete combustion of an alkane (carbon-containing).",
        back: "Complete: CO_2. Incomplete: CO and/or C (soot); both give H_2O from hydrogen.",
        examPhrasing: "Compare the carbon-containing products of complete and incomplete combustion.",
        confusionPair: "complete vs incomplete combustion",
        tags: ["combustion"],
      },
      {
        id: "t14-1-f4",
        noteId: "t14-1",
        difficulty: 2,
        front: "What light is needed for Cl_2 / Br_2 substitution in alkanes?",
        back: "Ultraviolet (UV) light to homolyse the halogen and start the radical chain.",
        examPhrasing: "State the condition required for free-radical substitution of an alkane with chlorine.",
        tags: ["UV", "halogenation"],
      },
      {
        id: "t14-1-f5",
        noteId: "t14-1",
        difficulty: 3,
        front: "Why are alkanes unreactive towards polar reagents at room temperature?",
        back: "Strong C–C and C–H sigma bonds with little bond polarity give no easy site for polar attack.",
        examPhrasing: "Explain the low reactivity of alkanes towards polar reagents.",
        tags: ["unreactivity", "bonding"],
      },
      {
        id: "t14-1-f6",
        noteId: "t14-1",
        difficulty: 3,
        front: "Name three harmful pollutants from petrol engines related to alkane combustion.",
        back: "CO; NO_x; unburnt hydrocarbons.",
        examPhrasing: "List pollutants from internal combustion engines targeted by catalytic converters.",
        tags: ["environment"],
      },
      {
        id: "t14-1-f7",
        noteId: "t14-1",
        difficulty: 4,
        front: "Initiation step in chlorination of ethane?",
        back: "Cl_2 -> 2Cl (UV-induced homolytic fission).",
        examPhrasing: "Write the initiation step for the chlorination of ethane.",
        tags: ["mechanism"],
      },
      {
        id: "t14-1-f8",
        noteId: "t14-1",
        difficulty: 4,
        front: "What does a catalytic converter do to NO_x, CO, and unburnt HC?",
        back: "Reduces NO_x to N_2; oxidises CO and hydrocarbons to CO_2 and H_2O on precious-metal surfaces.",
        examPhrasing: "Describe the role of a catalytic converter in exhaust treatment.",
        tags: ["catalytic-converter"],
      },
      {
        id: "t14-1-f9",
        noteId: "t14-1",
        difficulty: 5,
        front: "Propagation steps for ethane + Cl_2 (radical chain)?",
        back: "Cl + C_2H_6 -> HCl + C_2H_5; then C_2H_5 + Cl_2 -> C_2H_5Cl + Cl.",
        examPhrasing: "Write two propagation steps for the chlorination of ethane.",
        confusionPair: "propagation vs termination",
        tags: ["mechanism"],
      },
      {
        id: "t14-1-f10",
        noteId: "t14-1",
        difficulty: 5,
        front: "Give two distinct termination steps in ethane chlorination.",
        back: "Examples: Cl + Cl -> Cl_2; C_2H_5 + Cl -> C_2H_5Cl; C_2H_5 + C_2H_5 -> C_4H_10.",
        examPhrasing: "Give two termination steps in the free-radical chlorination of ethane.",
        tags: ["mechanism", "termination"],
      },
    ],
  },

  "t14-2": {
    noteId: "t14-2",
    drills: [
      {
        id: "t14-2-d1",
        noteId: "t14-2",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem: "Bromoethane is heated under reflux with ethanolic sodium hydroxide. Write a balanced equation for elimination to form ethene. State why ethanol is used as the solvent rather than water for this transformation.",
        modelAnswerPoints: [
          "CH_3CH_2Br + NaOH -> CH_2=CH_2 + NaBr + H_2O (ethanol solvent, heat).",
          "Ethanol is a polar protic organic solvent that dissolves the halogenoalkane and allows E2 elimination; water would favour substitution to ethanol under many conditions.",
          "Heat is required to reach elimination conditions typical of the syllabus route.",
        ],
        workedSolution: [
          "Sodium hydroxide in hot ethanol acts as a base that abstracts a beta-hydrogen from bromoethane while the C–Br bond breaks, giving ethene, sodium bromide, and water in an overall equation such as CH_3CH_2Br + NaOH -> CH_2=CH_2 + NaBr + H_2O with ethanol implied as the reaction medium and heat applied under reflux.",
          "Ethanol is chosen because it solubilises the organic substrate better than water alone and moderates the nucleophilicity of hydroxide so that elimination competes successfully with nucleophilic substitution, whereas aqueous hydroxide would often drive formation of ethanol from bromoethane in introductory laboratory contexts.",
          "Heat is required to supply the activation energy for the elimination pathway and to maintain reflux, which is the standard way the syllabus presents dehydrohalogenation of a simple halogenoalkane to an alkene.",
        ],
        commonMistake:
          "Writing substitution to ethanol when the question specifies elimination, or omitting heat / ethanolic conditions.",
        tags: ["elimination", "halogenoalkane", "ethene"],
      },
      {
        id: "t14-2-d2",
        noteId: "t14-2",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem: "Give two syllabus methods for dehydrating ethanol to ethene, including reagents and conditions for each, and write a balanced equation for the elimination of water from ethanol to ethene.",
        modelAnswerPoints: [
          "Pass hot ethanol vapour over heated Al_2O_3 catalyst.",
          "Warm ethanol with concentrated H_2SO_4 as dehydrating agent (acid elimination).",
          "C_2H_5OH -> C_2H_4 + H_2O (conditions stated for either route).",
        ],
        workedSolution: [
          "One method is heterogeneous catalytic dehydration, in which ethanol vapour is passed over aluminium oxide heated strongly so that water is eliminated from the alcohol to form ethene, which is how industrial and demonstration setups often run gas-phase dehydration on a solid acid catalyst.",
          "The second common laboratory route uses concentrated sulfuric acid as a dehydrating agent with gentle warming so that ethanol loses water intramolecularly to give ethene, recognising that the acid protonates the –OH group to create a better leaving group before elimination occurs.",
          "In either case the overall stoichiometry can be summarised as C_2H_5OH -> C_2H_4 + H_2O, with the answer explicitly tying the written conditions to one or both of the syllabus options rather than inventing an unrelated reagent system.",
        ],
        commonMistake:
          "Quoting dilute sulfuric acid or room temperature only, which does not match the concentrated acid / heated catalyst descriptions in the syllabus.",
        tags: ["dehydration", "alcohol", "ethene"],
      },
      {
        id: "t14-2-d3",
        noteId: "t14-2",
        kind: "mcq",
        difficulty: 1,
        stem: "Which statement best describes why long-chain alkanes in heavy crude fractions are cracked?",
        options: [
          { id: "A", text: "To remove sulfur completely from crude oil." },
          {
            id: "B",
            text: "To produce shorter-chain alkanes and alkenes of lower M_r that are more useful as fuels and feedstocks.",
          },
          { id: "C", text: "To convert all alkanes directly into hydrogen for fuel cells." },
          { id: "D", text: "To polymerise straight-chain alkanes into poly(ethene)."},
        ],
        correctOptionId: "B",
        explanation:
          "Cracking breaks heavy molecules into lighter alkanes (fuels) and alkenes (chemical building blocks), improving the economic value of the fraction.",
        distractorRationale: {
          A: "Desulfurisation is a separate refinery concern; cracking is primarily about chain length and reactivity of the carbon skeleton.",
          C: "Cracking is not a general route to hydrogen gas from alkanes in this syllabus context.",
          D: "Alkanes do not undergo addition polymerisation; alkenes do.",
        },
        tags: ["cracking", "alkenes", "industry"],
      },
      {
        id: "t14-2-d4",
        noteId: "t14-2",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem: "Write a balanced equation for the catalytic hydrogenation of propene, CH_3CH=CH_2, to propane. State the reagents and conditions required in the syllabus.",
        modelAnswerPoints: [
          "CH_3CH=CH_2 + H_2 -> CH_3CH_2CH_3.",
          "Conditions: H_2(g), Ni or Pt catalyst, heat.",
          "The C=C bond is saturated to give the alkane as the only carbon skeleton product.",
        ],
        workedSolution: [
          "Propene adds one mole of hydrogen across the double bond to give propane, which is represented by CH_3CH=CH_2 + H_2 -> CH_3CH_2CH_3, with the former multiply bonded carbons becoming singly bonded neighbours in the saturated chain.",
          "The syllabus conditions for hydrogenation are gaseous hydrogen with a nickel or platinum catalyst and heating, because the uncatalysed addition would be far too slow at laboratory temperature for practical use.",
          "The equation shows that the carbon chain length is preserved while unsaturation is removed, which is exactly the sense in which hydrogenation upgrades reactive alkenes to more stable alkanes for fuel blending or further processing.",
        ],
        commonMistake:
          "Omitting the metal catalyst or writing partial hydrogenation products that still contain double bonds.",
        tags: ["hydrogenation", "alkenes", "conditions"],
      },
      {
        id: "t14-2-d5",
        noteId: "t14-2",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "Propene reacts with steam in the gas phase using a phosphoric acid catalyst. Write the equation for addition of water across the double bond to form propan-2-ol as the main product. Explain briefly why the secondary alcohol is favoured for propene.",
        modelAnswerPoints: [
          "CH_3CH=CH_2 + H_2O -> CH_3CH(OH)CH_3 (H_3PO_4 catalyst, steam).",
          "Electrophilic addition places partial positive charge on the more substituted carbon of the propyl cation-like intermediate, so water attacks that centre to give the Markovnikov alcohol.",
          "Propan-2-ol is the secondary alcohol isomer with –OH on the central carbon.",
        ],
        workedSolution: [
          "Steam adds across the double bond of propene under heterogeneous phosphoric acid catalysis to give propan-2-ol as the major product, summarised by CH_3CH=CH_2 + H_2O -> CH_3CH(OH)CH_3 with H_3PO_4 acting as the acid catalyst that protonates the pi bond to generate a carbocationic character biased toward the more substituted carbon.",
          "Because the methyl-substituted end of propene stabilises positive charge better than the terminal CH_2 group, the nucleophilic water molecule attacks the more substituted carbon of the intermediate, which is why the Markovnikov regioselectivity places the hydroxyl group on the central atom rather than on a terminal carbon.",
          "The product name propan-2-ol matches that connectivity and is the alcohol directly accessible from propene hydration in examination contexts that follow the usual electrophilic addition picture without requiring anti-Markovnikov radical chemistry.",
        ],
        commonMistake:
          "Drawing propan-1-ol as the sole product without addressing the asymmetry of propene or the role of the acid catalyst.",
        tags: ["hydration", "steam", "Markovnikov"],
      },
      {
        id: "t14-2-d6",
        noteId: "t14-2",
        kind: "mcq",
        difficulty: 2,
        stem: "What is the major organic product when propene reacts with hydrogen bromide, HBr, at room temperature?",
        options: [
          { id: "A", text: "1-bromopropane, CH_3CH_2CH_2Br." },
          { id: "B", text: "2-bromopropane, CH_3CHBrCH_3." },
          { id: "C", text: "Bromine and propane." },
          { id: "D", text: "Propane only." },
        ],
        correctOptionId: "B",
        explanation:
          "Electrophilic addition of HX to an unsymmetrical alkene gives the Markovnikov product; H adds to the carbon with more hydrogens in the propene case, placing Br on the more substituted carbon.",
        distractorRationale: {
          A: "That is the anti-Markovnikov orientation, which is not the expected major outcome for propene + HBr without peroxide conditions in A Level syllabuses.",
          C: "HBr is not elemental bromine; no Br_2 is implied.",
          D: "HBr adds across the double bond; it does not fully hydrogenate propene to propane under these conditions.",
        },
        tags: ["HX", "electrophilic-addition", "regioselectivity"],
      },
      {
        id: "t14-2-d7",
        noteId: "t14-2",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem: "Ethene reacts with bromine at room temperature. Write a balanced equation for the addition reaction and explain why the reaction is classified as electrophilic addition, referencing the role of the pi bond.",
        modelAnswerPoints: [
          "C_2H_4 + Br_2 -> C_2H_4Br_2 (1,2-dibromoethane).",
          "The C=C pi bond is electron-rich and polarises Br_2, allowing formation of a bromonium-like intermediate attacked by bromide.",
          "Overall Br_2 adds across the double bond, so the pi bond is consumed.",
        ],
        workedSolution: [
          "Molecular bromine adds across the double bond of ethene to give 1,2-dibromoethane, which can be written as C_2H_4 + Br_2 -> BrCH_2CH_2Br, showing that both bromine atoms become bonded to separate carbons that were formerly multiply bonded.",
          "The reaction is classified as electrophilic addition because the exposed pi electron density of ethene acts as a nucleophile toward bromine, inducing a dipole in Br_2 so that one bromine atom behaves as an electrophile that becomes partially bonded in a cyclic intermediate before the second bromide ion completes the anti addition pattern familiar from teaching diagrams.",
          "The key syllabus idea is that the pi bond supplies the electron pair that starts the addition sequence, after which only sigma bonds remain in the saturated dibromide product.",
        ],
        commonMistake:
          "Claiming free-radical addition conditions (UV) when the syllabus addition of halogens to alkenes is the electrophilic room-temperature pathway.",
        tags: ["halogen", "addition", "ethene"],
      },
      {
        id: "t14-2-d8",
        noteId: "t14-2",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "State what is observed when ethene is bubbled through cold dilute acidified potassium manganate(VII). Write an equation for the oxidation to the diol ethane-1,2-diol. Use [O] from the oxidant if you prefer not to expand the manganese half-equation.",
        modelAnswerPoints: [
          "Purple MnO_4^- is decolourised (or turns very pale / brown suspension may form as MnO_2 in some conditions, but cold dilute acidic usually emphasises decolourisation).",
          "C_2H_4 + [O] + H_2O -> HOCH_2CH_2OH (or expanded with H_2O on both sides).",
          "The C=C bond is oxidised to a vicinal diol without cleaving the C–C single bond under cold dilute conditions.",
        ],
        workedSolution: [
          "When ethene is treated with cold dilute acidified manganate(VII), the intense purple colour of MnO_4^- in solution fades as the oxidising agent is consumed, which is the qualitative test signal that oxidation of the alkene has occurred under these mild conditions.",
          "The carbon skeleton remains intact while two hydroxyl groups are introduced across the former double bond, giving ethane-1,2-diol, which can be summarised as C_2H_4 + [O] + H_2O -> HOCH_2CH_2OH where [O] stands in for the oxygen supplied by permanganate without requiring full balancing of the manganese reduction half-reaction at this stage.",
          "The classification cold dilute acidified is crucial because it distinguishes this diol-forming oxidation from the aggressive hot concentrated conditions that cleave carbon–carbon multiple bonds later in the syllabus sequence.",
        ],
        commonMistake:
          "Using hot concentrated conditions or predicting CO_2 formation, which belongs to strong oxidation of the double bond, not cold dilute work-up to the diol.",
        tags: ["manganate", "oxidation", "diol"],
      },
      {
        id: "t14-2-d9",
        noteId: "t14-2",
        kind: "structured",
        difficulty: 4,
        marks: 6,
        stem: "Hot concentrated acidified manganate(VII) oxidatively cleaves the C=C bond in propene, CH_3CH=CH_2. Name the small oxygen-containing organic product formed from the CH_3CH= fragment and identify the inorganic carbon-containing species formed from the =CH_2 end. Explain how cleavage products locate the original double bond in larger alkenes.",
        modelAnswerPoints: [
          "The methyl-substituted end becomes ethanoic acid, CH_3COOH (or its ion in solution).",
          "The terminal =CH_2 unit is oxidised to carbon dioxide, CO_2.",
          "Comparing which fragments are acids, ketones, or CO_2 allows the original position of unsaturation to be deduced in longer chains.",
        ],
        workedSolution: [
          "Under hot concentrated acidified permanganate(VII) conditions the carbon–carbon double bond of propene is ruptured completely, and the fragment that retains the methyl group attached to the former doubly bonded carbon is oxidised all the way to ethanoic acid, CH_3COOH, which is the two-carbon carboxylic acid matching that end of the molecule.",
          "The terminal methylene fragment originating from the =CH_2 unit of propene lacks a hydrogen-bearing alkyl substituent on that carbon in the way the other end does, so exhaustive oxidation converts that end to carbon dioxide, reflecting complete stripping of its hydrogen and carbon oxidation states appropriate to the cleavage pattern taught for terminal double bonds.",
          "In larger alkenes, the collection of carboxylic acids, ketones, and carbon dioxide produced after cleavage is diagnostic because each original sp^2 carbon becomes the highest oxidation state consistent with its substituents, so comparing carbon counts in the acid products against the parent skeleton allows the examiner to expect students to work backwards to where the double bond sat.",
        ],
        commonMistake:
          "Predicting propanone from propene cleavage; propene cleavage gives ethanoic acid and CO_2, not a three-carbon ketone.",
        tags: ["cleavage", "manganate", "ozone-free"],
      },
      {
        id: "t14-2-d10",
        noteId: "t14-2",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "Addition polymerisation converts ethene into poly(ethene) and propene into poly(propene). Draw the repeat unit of each polymer showing only the atoms in the backbone after polymerisation (use bracket notation). State one condition under which high molar mass polymer forms.",
        modelAnswerPoints: [
          "Poly(ethene) repeat unit: –(CH_2–CH_2)–_n or equivalent bracketed –CH_2–CH_2–.",
          "Poly(propene) repeat unit: –(CH(CH_3)–CH_2)–_n showing methyl side chain on every second backbone carbon in the head-to-tail pattern.",
          "High pressure / suitable catalyst / high purity monomer favours long chains (any reasonable polymer condition).",
        ],
        workedSolution: [
          "Ethene polymerises by breaking the pi bond so that each carbon forms a new sigma bond to neighbouring units, which produces a carbon–carbon backbone ...–CH_2–CH_2–CH_2–CH_2–... whose simplest repeat unit is written as –(CH_2–CH_2)– with subscript n on the bracket to show many repeats, matching the syllabus name poly(ethene).",
          "Propene adds similarly but retains a methyl side group on every monomer-derived unit in the usual head-to-tail regioregular picture, so the repeat unit is naturally written as –(CH(CH_3)–CH_2)–_n, which displays the methyl branch on alternate backbone carbons consistent with electrophilic propagation through the double bond.",
          "High molar mass material is favoured when chain termination is slow relative to propagation, which industrially correlates with carefully chosen temperature, pressure, and Ziegler–Natta or Phillips-type catalyst systems, but at A Level it is enough to state that sustained addition of monomer under polymerisation conditions builds long chains until termination steps finally stop growth.",
        ],
        commonMistake:
          "Drawing a double bond inside the repeat unit of the polymer chain, or omitting the methyl branch in poly(propene).",
        tags: ["polymerisation", "poly(ethene)", "poly(propene)"],
      },
    ],
    flashcards: [
      {
        id: "t14-2-f1",
        noteId: "t14-2",
        difficulty: 1,
        front: "Reagents to eliminate HBr from bromoethane to ethene?",
        back: "Ethanolic NaOH and heat (elimination, not aqueous substitution).",
        examPhrasing: "State conditions to form an alkene from a halogenoalkane.",
        tags: ["elimination"],
      },
      {
        id: "t14-2-f2",
        noteId: "t14-2",
        difficulty: 1,
        front: "Repeat unit of poly(ethene)?",
        back: "–CH_2–CH_2– (addition across C=C of ethene).",
        examPhrasing: "Draw the repeat unit of the addition polymer formed from ethene.",
        tags: ["polymer"],
      },
      {
        id: "t14-2-f3",
        noteId: "t14-2",
        difficulty: 2,
        front: "Repeat unit of poly(propene) (head-to-tail)?",
        back: "–CH(CH_3)–CH_2– with n indicating many repeats.",
        examPhrasing: "Draw the repeat unit of poly(propene).",
        confusionPair: "poly(ethene) vs poly(propene)",
        tags: ["polymer"],
      },
      {
        id: "t14-2-f4",
        noteId: "t14-2",
        difficulty: 2,
        front: "Product of cold dilute acidified MnO_4^- with ethene?",
        back: "Ethane-1,2-diol (vicinal diol); purple colour fades.",
        examPhrasing: "What is formed when ethene reacts with cold dilute acidified potassium manganate(VII)?",
        tags: ["oxidation", "diol"],
      },
      {
        id: "t14-2-f5",
        noteId: "t14-2",
        difficulty: 3,
        front: "Hot concentrated acidified MnO_4^- with propene — key fragments?",
        back: "Cleaves to ethanoic acid + CO_2 (terminal alkene pattern).",
        examPhrasing: "State the products of oxidative cleavage of propene with hot concentrated acidified manganate(VII).",
        tags: ["cleavage", "oxidation"],
      },
      {
        id: "t14-2-f6",
        noteId: "t14-2",
        difficulty: 3,
        front: "Conditions to hydrogenate an alkene?",
        back: "H_2(g), Ni or Pt catalyst, heat.",
        examPhrasing: "State the conditions for hydrogenation of an alkene.",
        tags: ["hydrogenation"],
      },
      {
        id: "t14-2-f7",
        noteId: "t14-2",
        difficulty: 4,
        front: "Equation for ethene + steam (hydration)?",
        back: "C_2H_4 + H_2O -> C_2H_5OH with H_3PO_4 catalyst (steam, heterogenous conditions as taught).",
        examPhrasing: "Write the equation for the reaction of ethene with steam.",
        tags: ["hydration"],
      },
      {
        id: "t14-2-f8",
        noteId: "t14-2",
        difficulty: 4,
        front: "How does Br_2 in an inert solvent test for a C=C bond?",
        back: "Brown-orange bromine decolourises as dibromoalkane forms (electrophilic addition).",
        examPhrasing: "Describe the test for unsaturation using bromine.",
        confusionPair: "alkene + Br_2 vs alkane + Br_2 / UV",
        tags: ["test", "halogen"],
      },
      {
        id: "t14-2-f9",
        noteId: "t14-2",
        difficulty: 5,
        front: "Major product: propene + HBr?",
        back: "2-bromopropane (Markovnikov orientation).",
        examPhrasing: "Give the major product of the reaction between propene and hydrogen bromide.",
        tags: ["HX", "regioselectivity"],
      },
      {
        id: "t14-2-f10",
        noteId: "t14-2",
        difficulty: 5,
        front: "Two syllabus dehydrating routes: ethanol -> ethene?",
        back: "Hot Al_2O_3 catalyst; or concentrated H_2SO_4 with warming.",
        examPhrasing: "State two methods to dehydrate ethanol to ethene.",
        tags: ["dehydration"],
      },
    ],
  },
};
