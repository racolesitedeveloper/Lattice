import type { SubtopicPracticePack } from "./types";

/**
 * 9701 Topic 15 / 15.1 — Halogenoalkanes: one course subtopic `t15-1`.
 *
 * LO crosswalk (each bullet in `data/syllabus/chemistry-9701-learning-outcomes.md` §15.1
 * is hit by ≥1 drill id):
 * - Formation routes (alkane + X_2/UV; alkene + X_2 or HX; alcohol + HX / KCl + acid / PCl_3 / PCl_5 / SOCl_2) → d2, d3
 * - Primary / secondary / tertiary classification → d1, d8
 * - Nucleophilic substitution with OH^-, CN^-, NH_3; AgNO_3(aq)/ethanol test → d4, d5, d10
 * - Elimination (ethanolic NaOH, heat) → d6
 * - S_N1 and S_N2 mechanisms; inductive effects → d7, d9
 * - Primary → S_N2 tendency; secondary → mixture → d8, d9
 * - C–X bond strengths and relative reactivity (e.g. Ag^+ test) → d5, d10
 */
export const CHEMISTRY_TOPIC15_PRACTICE: Record<string, SubtopicPracticePack> = {
  "t15-1": {
    noteId: "t15-1",
    drills: [
      {
        id: "t15-1-d1",
        noteId: "t15-1",
        kind: "structured",
        difficulty: 1,
        marks: 5,
        stem: "Define what is meant by a primary, a secondary and a tertiary halogenoalkane. For each class, give one unambiguous displayed formula of a bromoalkane containing four carbon atoms in total (including the C–Br carbon), labelling the carbon bearing bromine in each case.",
        modelAnswerPoints: [
          "A primary halogenoalkane has the halogen-bearing carbon attached to only one other alkyl carbon (one C–C bond from that carbon besides C–Br); a secondary has that carbon attached to two other carbons; a tertiary has it attached to three other carbons.",
          "Primary example: CH_3CH_2CH_2CH_2Br (1-bromobutane) — the C–Br carbon is terminal.",
          "Secondary example: CH_3CHBrCH_2CH_3 (2-bromobutane) — the C–Br carbon is internal with two alkyl branches.",
          "Tertiary example: (CH_3)_3CBr (2-bromo-2-methylpropane) — the C–Br carbon carries three methyl groups.",
        ],
        workedSolution: [
          "In classification, attention is fixed on the carbon atom that carries the halogen: if that carbon is bonded to one other carbon atom only, the molecule is a primary halogenoalkane, because the functional carbon has the pattern RCH_2X where the carbon bearing X is primary in the usual alkyl sense.",
          "If the halogen-bearing carbon is bonded to two other carbon atoms, the compound is secondary, corresponding to R_2CHX, and if it is bonded to three other carbon atoms it is tertiary, corresponding to R_3CX, where each R is an alkyl chain or methyl group.",
          "A clear primary bromide with four carbons in total is 1-bromobutane, CH_3CH_2CH_2CH_2Br, where the bromine sits on a terminal carbon attached only to the CH_2 of the propyl fragment.",
          "A secondary example on the same chain length is 2-bromobutane, CH_3CHBrCH_2CH_3, where the second carbon of the butane skeleton bears bromine and is bonded to CH_3 and CH_2CH_3.",
          "A tertiary bromide with four carbons overall is 2-bromo-2-methylpropane, (CH_3)_3CBr, where the central carbon carries both bromine and three methyl groups, satisfying the tertiary criterion.",
        ],
        commonMistake:
          "Classifying by the position of bromine along a chain without counting how many other carbon atoms are bonded to the C–Br carbon (e.g. calling 2-bromobutane primary).",
        tags: ["definitions", "classification", "halogenoalkanes"],
      },
      {
        id: "t15-1-d2",
        noteId: "t15-1",
        kind: "structured",
        difficulty: 2,
        marks: 6,
        stem: "State reagents and essential conditions for preparing a halogenoalkane from (i) ethane, (ii) ethene, and (iii) ethanol, in each case giving one balanced equation with state symbols where the syllabus expects a simple gas/solution picture for that route.",
        modelAnswerPoints: [
          "(i) Ethane: chlorine or bromine in the presence of ultraviolet light; free-radical substitution, e.g. C_2H_6(g) + Cl_2(g) -> C_2H_5Cl(l) + HCl(g) (multi-substitution possible in practice but exemplification is ethane).",
          "(ii) Ethene: electrophilic addition at room temperature with Cl_2 or Br_2, or with HX(g); e.g. C_2H_4(g) + HBr(g) -> C_2H_5Br(l).",
          "(iii) Ethanol: dry HX(g) (e.g. HBr); or KCl with concentrated H_2SO_4 or concentrated H_3PO_4; or PCl_3 with heat; or PCl_5; or SOCl_2 — e.g. C_2H_5OH(l) + HBr(g) -> C_2H_5Br(l) + H_2O(l) for the HX route.",
        ],
        workedSolution: [
          "From ethane, the syllabus route is free-radical substitution using chlorine or bromine with ultraviolet light to supply initiation energy, so reagents are ethane and Cl_2 (or Br_2) with UV, and a representative equation is C_2H_6(g) + Cl_2(g) -> C_2H_5Cl(l) + HCl(g), recognising that further substitution can occur but the board exemplifies ethane.",
          "From ethene, halogenoalkanes are made by electrophilic addition at room temperature, either with a halogen molecule to give a dihalide or with a hydrogen halide gas to give a monohalide, for example C_2H_4(g) + HBr(g) -> C_2H_5Br(l), where the pi bond is attacked by the electrophilic hydrogen of the polar HX.",
          "From ethanol, several laboratory routes are listed: reaction with dry hydrogen halide gas; conversion using potassium chloride together with concentrated sulfuric or phosphoric acid; phosphorus trichloride with heat; phosphorus pentachloride; or thionyl chloride, any of which replace –OH by –X on the alkyl framework.",
          "The hydrogen bromide route can be summarised as C_2H_5OH(l) + HBr(g) -> C_2H_5Br(l) + H_2O(l), which shows substitution of the hydroxyl group by bromide under anhydrous conditions typical of this preparation class.",
        ],
        commonMistake:
          "Stating ethene + HX needs UV or heat like alkane halogenation, or omitting UV for ethane + halogen free-radical substitution.",
        tags: ["preparation", "equations", "conditions", "halogenoalkanes"],
      },
      {
        id: "t15-1-d3",
        noteId: "t15-1",
        kind: "mcq",
        difficulty: 2,
        stem: "Which set of reagents and conditions best converts propan-1-ol into 1-chloropropane in a laboratory preparation aligned with the syllabus list?",
        options: [
          { id: "A", text: "NaCl(aq) at room temperature, no acid." },
          { id: "B", text: "Dry HCl(g) with the alcohol, or KCl with concentrated H_2SO_4." },
          { id: "C", text: "Cl_2(g) with ultraviolet light only." },
          { id: "D", text: "Cold dilute acidified KMnO_4(aq) at room temperature." },
        ],
        correctOptionId: "B",
        explanation:
          "The syllabus lists replacement of –OH by –X using HX(g), or KCl with concentrated H_2SO_4 or H_3PO_4, or PCl_3/PCl_5/SOCl_2; aqueous chloride alone is not that route, and UV + Cl_2 is alkane substitution, not alcohol OH replacement.",
        distractorRationale: {
          A: "Aqueous chloride does not convert the –OH of an alcohol to –Cl by the nucleophilic substitution pathway the syllabus names for this transformation.",
          C: "Chlorine and UV perform free-radical substitution on alkanes; propan-1-ol is not converted to 1-chloropropane by that route.",
          D: "Acidified manganate(VII) oxidises alcohols; it does not cleanly substitute –OH by –Cl to give the halogenoalkane.",
        },
        tags: ["preparation", "alcohols-to-halides"],
      },
      {
        id: "t15-1-d4",
        noteId: "t15-1",
        kind: "structured",
        difficulty: 3,
        marks: 6,
        stem: "For bromoethane as the exemplar halogenoalkane, describe the nucleophilic substitution reactions that produce (i) ethanol, (ii) propanenitrile, and (iii) ethylamine. In each case give reagents, conditions, and a balanced equation (molecular form is acceptable).",
        modelAnswerPoints: [
          "(i) Aqueous sodium hydroxide with heat: C_2H_5Br + NaOH -> C_2H_5OH + NaBr (or ionic form with OH^-).",
          "(ii) Potassium cyanide in ethanol with heat: C_2H_5Br + KCN -> C_2H_5CN + KBr (nitrile chain extended by one carbon relative to the original halide).",
          "(iii) Ammonia in ethanol heated under pressure: C_2H_5Br + NH_3 -> C_2H_5NH_2 + HBr (excess ammonia minimises further alkylation in teaching contexts).",
        ],
        workedSolution: [
          "To convert bromoethane into ethanol, the syllabus nucleophilic substitution uses aqueous sodium hydroxide with heat, so hydroxide replaces bromide in a bimolecular sense on the primary carbon, and the reaction can be written as C_2H_5Br(l) + NaOH(aq) -> C_2H_5OH(aq) + NaBr(aq), emphasising that the reagent is aqueous alkali rather than ethanolic base, which would favour elimination.",
          "To obtain propanenitrile from bromoethane, the reagent is potassium cyanide dissolved in ethanol with heating, giving C_2H_5Br + KCN -> CH_3CH_2CN + KBr, where the cyanide ion attacks the electrophilic carbon of the halide and the carbon chain of the nitrile product contains one more carbon than the original ethyl fragment, which is the standard examination point when naming the nitrile.",
          "To form ethylamine, ammonia in ethanol is used under pressure with heating, and the stoichiometric first substitution is C_2H_5Br + NH_3 -> C_2H_5NH_2 + HBr, with the understanding that the hydrogen bromide formed can protonate ammonia unless excess ammonia is present, and that further substitution to diethylamine is limited by using excess ammonia in the way mark schemes usually describe the primary amine route.",
        ],
        commonMistake:
          "Using ethanolic NaOH with heat when the question asks for the alcohol product from aqueous alkali, or naming the nitrile from C_2H_5Br as ethanenitrile instead of propanenitrile.",
        tags: ["nucleophilic-substitution", "reagents", "equations"],
      },
      {
        id: "t15-1-d5",
        noteId: "t15-1",
        kind: "structured",
        difficulty: 3,
        marks: 6,
        stem: "Describe how aqueous silver nitrate in ethanol can be used to help identify the halogen in a halogenoalkane, using bromoethane as the exemplar. Explain the trend in ease of reaction for chloro-, bromo- and iodo-alkanes of the same alkyl structure in terms of C–X bond strengths.",
        modelAnswerPoints: [
          "Ethanol mixes the organic halide with the ionic silver nitrate solution so the halide can undergo nucleophilic substitution to release X^- into a medium containing Ag^+(aq).",
          "Ag^+(aq) + Br^-(aq) -> AgBr(s), a cream precipitate, indicates bromide; analogous white and yellow precipitates for AgCl and AgI.",
          "C–I is the weakest bond, C–Br intermediate, C–Cl strongest for the same R group, so the iodo compound reacts fastest and the chloro slowest, matching faster appearance of precipitate for iodide under comparable conditions.",
        ],
        workedSolution: [
          "The test mixture uses ethanol as a co-solvent so that the halogenoalkane, exemplified by bromoethane, dissolves sufficiently alongside aqueous silver nitrate, allowing the slow substitution that generates free halide ions in solution from the covalent C–Br bond.",
          "When bromide ions are produced, they combine with silver ions from the nitrate to give a cream precipitate of silver bromide according to Ag^+(aq) + Br^-(aq) -> AgBr(s), and parallel observations are a white precipitate of silver chloride from a chloroalkane and a yellow precipitate of silver iodide from an iodoalkane, so the halogen is inferred from precipitate colour once nitric acid has been used if needed to suppress interfering bases.",
          "For the same alkyl framework, the carbon–halogen bond becomes weaker from chlorine to bromine to iodine because the bond length increases and overlap becomes poorer, so heterolytic cleavage to release X^- is easiest for the iodo compound and hardest for the chloro compound, which is why the silver halide precipitate appears most quickly for iodoalkanes and slowest for chloroalkanes under similar practical conditions.",
        ],
        commonMistake:
          "Claiming C–Cl is weaker than C–I, or that stronger C–X bonds give faster precipitation with Ag^+.",
        tags: ["qualitative-analysis", "bond-strength", "halogenoalkanes"],
      },
      {
        id: "t15-1-d6",
        noteId: "t15-1",
        kind: "structured",
        difficulty: 3,
        marks: 4,
        stem: "Describe the elimination reaction in which bromoethane is converted into ethene, giving reagents, conditions, and a balanced equation with state symbols where appropriate.",
        modelAnswerPoints: [
          "Reagent: sodium or potassium hydroxide dissolved in ethanol (ethanolic alkali), not the aqueous conditions used for hydrolysis to the alcohol.",
          "Condition: heat (reflux).",
          "Equation: CH_3CH_2Br + NaOH -> CH_2=CH_2 + NaBr + H_2O (or KOH analogue), showing loss of HBr overall to form the alkene.",
        ],
        workedSolution: [
          "Elimination is carried out using hydroxide ion in ethanol as solvent, which is a less polar medium than water and favours abstraction of a beta-hydrogen to form an alkene rather than substitution at the alpha-carbon to give ethanol.",
          "The reaction is heated under reflux so that bromoethane reaches a temperature at which elimination proceeds at a useful rate, distinguishing this practical setup from aqueous NaOH with heat that the syllabus associates with forming the alcohol.",
          "The overall transformation can be written as CH_3CH_2Br(l) + NaOH(in ethanol) -> CH_2=CH_2(g) + NaBr + H_2O, showing ethene as the organic product together with bromide ion and water, which matches the syllabus exemplification with bromoethane.",
        ],
        commonMistake:
          "Writing aqueous NaOH with heat as the conditions when the target product is the alkene rather than ethanol.",
        tags: ["elimination", "alkenes", "conditions"],
      },
      {
        id: "t15-1-d7",
        noteId: "t15-1",
        kind: "structured",
        difficulty: 4,
        marks: 7,
        stem: "Outline the S_N2 and S_N1 mechanisms for nucleophilic substitution in a halogenoalkane. Include: (i) the rate law behaviour associated with each mechanism, (ii) the geometry of attack in S_N2, (iii) the intermediate in S_N1, and (iv) how electron-donating inductive effects of alkyl groups stabilise that intermediate and influence the pathway.",
        modelAnswerPoints: [
          "S_N2: one-step concerted mechanism; rate proportional to [halogenoalkane][nucleophile]; nucleophile attacks from the side opposite the leaving group (backside attack), inverting configuration at a chiral centre.",
          "S_N1: two-step mechanism with heterolytic C–X cleavage to a carbocation then rapid nucleophilic attack; rate proportional to [halogenoalkane] only for the rate-determining step.",
          "Intermediate is a trigonal planar carbocation (sp^2) in S_N1.",
          "Alkyl groups donate electron density inductively (+I), dispersing positive charge and stabilising the carbocation, favouring S_N1 for tertiary halides; primary carbocations are disfavoured, so S_N2 dominates for primary halides.",
        ],
        workedSolution: [
          "In the S_N2 mechanism the nucleophile approaches the electrophilic carbon from the side opposite the carbon–halogen bond while the halide leaves in a single concerted step, so the partial bonds in the transition state involve five groups around carbon and the rate depends on both halogenoalkane and nucleophile concentrations because both appear in the rate-determining transition state.",
          "The stereochemical consequence of this backside attack is inversion of configuration at a chiral halogenoalkane centre, which is often cited as evidence for the S_N2 pathway in examination contexts.",
          "In the S_N1 mechanism the slow step is ionisation of the carbon–halogen bond to give a planar carbocation intermediate and a halide ion, after which any nucleophile present captures the carbocation rapidly, so the observed rate is controlled only by the concentration of halogenoalkane to a first-order approximation because the nucleophile does not participate in the slow step.",
          "The carbocation intermediate is trigonal planar about the positively charged carbon, which is sp^2 hybridised, and alkyl substituents attached to that carbon donate electron density through the sigma-bond framework, an inductive +I effect that spreads the positive charge and lowers the energy of the carbocation.",
          "That stabilisation makes ionisation easier for tertiary halogenoalkanes, which therefore tend to react by the S_N1 mechanism in polar solvents, whereas methyl and primary halides form poorly stabilised carbocations and instead react predominantly by the S_N2 pathway where the nucleophile assists departure of the leaving group in one step.",
        ],
        commonMistake:
          "Stating that S_N1 rate depends on [nucleophile] in the same way as S_N2, or omitting inversion of configuration for S_N2.",
        tags: ["mechanisms", "S_N1", "S_N2", "inductive-effect"],
      },
      {
        id: "t15-1-d8",
        noteId: "t15-1",
        kind: "mcq",
        difficulty: 2,
        stem: "Which statement about mechanism preference in nucleophilic substitution of halogenoalkanes is most consistent with the syllabus?",
        options: [
          { id: "A", text: "Primary halogenoalkanes tend to react by the S_N1 mechanism; tertiary tend to react by S_N2." },
          { id: "B", text: "Primary halogenoalkanes tend to react by the S_N2 mechanism; tertiary tend to react by S_N1." },
          { id: "C", text: "All halogenoalkanes react only by a single concerted mechanism regardless of structure." },
          { id: "D", text: "Secondary halogenoalkanes never show a mixture of mechanisms." },
        ],
        correctOptionId: "B",
        explanation:
          "Primary halides favour concerted backside attack (S_N2); tertiary halides favour ionisation to a stabilised carbocation (S_N1). Secondary halides can show a mixture depending on structure and conditions.",
        distractorRationale: {
          A: "That reverses the usual steric and carbocation-stability picture taught for primary versus tertiary halogenoalkanes.",
          C: "The syllabus explicitly contrasts S_N1 and S_N2 and links structure to which pathway dominates or contributes.",
          D: "Secondary halogenoalkanes are exactly the class described as reacting by a mixture of the two mechanisms depending on structure.",
        },
        tags: ["mechanisms", "classification", "S_N1", "S_N2"],
      },
      {
        id: "t15-1-d9",
        noteId: "t15-1",
        kind: "structured",
        difficulty: 4,
        marks: 5,
        stem: "Explain why a secondary halogenoalkane such as 2-bromobutane may follow a mixture of S_N1 and S_N2 pathways under nucleophilic substitution conditions, whereas a primary halide such as 1-bromobutane is dominated by S_N2. Refer to steric hindrance and carbocation stability.",
        modelAnswerPoints: [
          "1-bromobutane is primary: the electrophilic carbon has little steric shielding, so a nucleophile can attack anti to the leaving group in a concerted S_N2 transition state; the primary carbocation required for S_N1 is high in energy and disfavoured.",
          "2-bromobutane is secondary: there is more steric crowding around the C–Br carbon, weakening concerted S_N2 attack relative to a primary centre.",
          "The secondary carbocation from 2-bromobutane is more stabilised by adjacent alkyl +I effects than a primary carbocation would be, so S_N1 contributes significantly alongside S_N2, giving a mechanistic mixture depending on solvent and nucleophile.",
        ],
        workedSolution: [
          "For 1-bromobutane the carbon bearing bromine is only attached to one other carbon, so backside approach of a nucleophile is relatively unhindered and the concerted S_N2 mechanism provides a low-energy pathway without needing to form a discrete primary carbocation, which would be energetically costly.",
          "For 2-bromobutane the same carbon is secondary, meaning two alkyl branches create greater steric crowding around the reaction centre, which raises the energy of the pentacoordinate S_N2 transition state and makes concerted substitution less exclusively favourable.",
          "At the same time, loss of bromide from 2-bromobutane generates a secondary carbocation that is inductively stabilised by the two alkyl groups compared with a hypothetical primary carbocation from 1-bromobutane, so ionisation to enter the S_N1 manifold is more competitive, and experimentally both mechanisms can contribute, which is why the syllabus describes secondary halogenoalkanes as reacting by a mixture of the two pathways depending on exact structure and conditions.",
        ],
        commonMistake:
          "Claiming steric hindrance always speeds S_N2 for secondary halides, or that secondary substrates cannot form carbocations.",
        tags: ["mechanisms", "secondary", "steric", "carbocation"],
      },
      {
        id: "t15-1-d10",
        noteId: "t15-1",
        kind: "mcq",
        difficulty: 3,
        stem: "Equal concentrations of ethyl chloride, ethyl bromide and ethyl iodide are mixed separately with acidified aqueous silver nitrate in ethanol at the same temperature. In which order do you expect the first visible silver halide precipitate to appear?",
        options: [
          { id: "A", text: "Ethyl chloride fastest, then bromide, then iodide." },
          { id: "B", text: "Ethyl iodide fastest, then bromide, then chloride." },
          { id: "C", text: "All three appear at exactly the same time because the alkyl group is identical." },
          { id: "D", text: "Ethyl bromide fastest because bromine is between chlorine and iodine in the periodic table in every property." },
        ],
        correctOptionId: "B",
        explanation:
          "Weaker C–X bond (C–I) allows faster heterolytic substitution to release X^- for AgX(s) formation; C–Cl is strongest, so chloride reacts slowest despite the common ethyl group.",
        distractorRationale: {
          A: "That order reverses the bond-strength argument: C–Cl is the strongest carbon–halogen bond of the three ethyl halides, not the weakest.",
          C: "The alkyl fragment is the same, but the leaving-group ability and bond strength differ with halogen, so rates are not identical.",
          D: "Mid-period position does not make bromide fastest; C–Br is intermediate in strength, so iodide precipitates first, then bromide, then chloride under comparable conditions.",
        },
        tags: ["reactivity", "bond-strength", "qualitative-analysis"],
      },
    ],
    flashcards: [
      {
        id: "t15-1-f1",
        noteId: "t15-1",
        difficulty: 1,
        front: "What distinguishes primary, secondary and tertiary halogenoalkanes?",
        back: "Count carbons bonded to the C–X carbon: 1 -> primary (RCH_2X); 2 -> secondary (R_2CHX); 3 -> tertiary (R_3CX).",
        examPhrasing: "Classify this halogenoalkane as primary, secondary or tertiary.",
        tags: ["classification", "definitions"],
      },
      {
        id: "t15-1-f2",
        noteId: "t15-1",
        difficulty: 1,
        front: "How is chloroethane made from ethane under syllabus conditions?",
        back: "Cl_2(g) + UV light: free-radical substitution on ethane, e.g. C_2H_6 + Cl_2 -> C_2H_5Cl + HCl.",
        examPhrasing: "State reagents and conditions for converting ethane into a chloroalkane.",
        tags: ["preparation", "free-radical"],
      },
      {
        id: "t15-1-f3",
        noteId: "t15-1",
        difficulty: 2,
        front: "How is bromoethane made from ethene?",
        back: "Electrophilic addition of HBr(g) at room temperature: CH_2=CH_2 + HBr -> CH_3CH_2Br (or Br_2 to give 1,2-dibromoethane).",
        examPhrasing: "Give the reagents for converting ethene into a bromoalkane.",
        tags: ["preparation", "alkenes"],
      },
      {
        id: "t15-1-f4",
        noteId: "t15-1",
        difficulty: 2,
        front: "Reagents to turn an alcohol into a chloroalkane (two syllabus routes)?",
        back: "Dry HCl(g); or KCl with concentrated H_2SO_4 or H_3PO_4; also PCl_3 + heat, PCl_5, or SOCl_2.",
        examPhrasing: "State reagents to replace –OH by –Cl in an alcohol.",
        confusionPair: "HX(g) vs aqueous NaCl",
        tags: ["preparation", "alcohols"],
      },
      {
        id: "t15-1-f5",
        noteId: "t15-1",
        difficulty: 3,
        front: "Conditions: NaOH to give alcohol vs NaOH to give alkene from a halogenoalkane?",
        back: "Alcohol: NaOH(aq) + heat (substitution). Alkene: NaOH in ethanol + heat (elimination).",
        examPhrasing: "Compare conditions for hydrolysis and elimination of a bromoalkane.",
        confusionPair: "aqueous vs ethanolic NaOH",
        tags: ["elimination", "substitution"],
      },
      {
        id: "t15-1-f6",
        noteId: "t15-1",
        difficulty: 3,
        front: "Reagents to make a nitrile from a halogenoalkane?",
        back: "KCN in ethanol with heat: R–X + CN^- -> R–CN (chain gains one carbon).",
        examPhrasing: "How is a nitrile prepared from a halogenoalkane?",
        tags: ["nucleophilic-substitution", "nitriles"],
      },
      {
        id: "t15-1-f7",
        noteId: "t15-1",
        difficulty: 4,
        front: "Reagents to make a primary amine from a halogenoalkane?",
        back: "NH_3 in ethanol, heated under pressure (excess NH_3 reduces polyalkylation).",
        examPhrasing: "State conditions for the reaction of a halogenoalkane with ammonia.",
        tags: ["amines", "substitution"],
      },
      {
        id: "t15-1-f8",
        noteId: "t15-1",
        difficulty: 4,
        front: "What does the S_N2 mechanism require about nucleophile approach?",
        back: "Backside attack opposite the leaving group; concerted step; rate depends on [RX] and [Nu^-].",
        examPhrasing: "Describe the geometry of attack in the S_N2 mechanism.",
        tags: ["S_N2", "mechanisms"],
      },
      {
        id: "t15-1-f9",
        noteId: "t15-1",
        difficulty: 5,
        front: "What is the rate-determining feature of S_N1?",
        back: "Heterolytic C–X cleavage to a carbocation; rate ~ [RX]; nucleophile not in the slow step.",
        examPhrasing: "Outline the S_N1 mechanism for a tertiary halogenoalkane.",
        confusionPair: "S_N1 vs S_N2 rate laws",
        tags: ["S_N1", "mechanisms"],
      },
      {
        id: "t15-1-f10",
        noteId: "t15-1",
        difficulty: 5,
        front: "Trend in C–X bond strength Cl, Br, I — and effect on AgNO_3 test?",
        back: "C–Cl strongest, C–I weakest; iodoalkane releases I^- fastest -> yellow AgI first; chloro slowest.",
        examPhrasing: "Explain different rates of reaction of chloro-, bromo- and iodoalkanes with silver nitrate.",
        tags: ["bond-strength", "analysis"],
      },
    ],
  },
};
