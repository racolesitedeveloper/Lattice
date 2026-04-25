import type { SubtopicPracticePack } from "./types";

/**
 * 9701 Topic 5 — Chemical energetics (`t5-1` = 5.1, `t5-2` = 5.2).
 * Each pack: 10 drills + 10 flashcards; drills crosswalk to every bullet in
 * `data/syllabus/chemistry-9701-learning-outcomes.md` for that subsection.
 */
export const CHEMISTRY_TOPIC5_PRACTICE: Record<string, SubtopicPracticePack> = {
  "t5-1": {
    noteId: "t5-1",
    drills: [
      {
        id: "t5-1-d1",
        noteId: "t5-1",
        kind: "mcq",
        difficulty: 1,
        stem:
          "Which row correctly matches the sign of ΔH for the system with the type of change at constant pressure?",
        options: [
          { id: "A", text: "Exothermic — ΔH is positive; endothermic — ΔH is negative." },
          { id: "B", text: "Exothermic — ΔH is negative; endothermic — ΔH is positive." },
          { id: "C", text: "Exothermic — ΔH is zero; endothermic — ΔH is undefined." },
          { id: "D", text: "The sign of ΔH depends only on whether the reaction is reversible." },
        ],
        correctOptionId: "B",
        explanation:
          "At constant pressure, an exothermic change releases heat from the system to the surroundings, so the enthalpy of the system decreases and ΔH is negative; an endothermic change absorbs heat, so the enthalpy of the system increases and ΔH is positive.",
        distractorRationale: {
          A: "The signs are reversed: exothermic corresponds to a decrease in system enthalpy.",
          C: "Non-zero enthalpy changes are the norm; zero would imply no enthalpy change for the reaction as written.",
          D: "Reversibility does not determine the sign of ΔH for a chosen direction; the sign follows whether the forward process is exothermic or endothermic.",
        },
        tags: ["enthalpy-sign", "exo-endo", "definitions"],
      },
      {
        id: "t5-1-d2",
        noteId: "t5-1",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem:
          "In a constant-pressure experiment, 0.125 mol of a liquid fuel burns completely in excess oxygen and the heat evolved raises the temperature of 300 g of water by 8.60 K. Take c for water as 4.18 J g^-1 K^-1 and assume no heat losses to the surroundings.\nCalculate ΔH for the combustion reaction as written per mole of fuel, including sign.",
        modelAnswerPoints: [
          "Heat absorbed by water q = mcΔT = 300 x 4.18 x 8.60 J.",
          "q = 1.078 x 10^4 J (about 10.8 kJ) to a consistent precision.",
          "Heat evolved by reaction equals q in magnitude; combustion is exothermic so ΔH per 0.125 mol is about -10.8 kJ.",
          "Per mole: ΔH ≈ (-10.78 kJ) / 0.125 mol ≈ -86.2 kJ mol^-1 (accept -86 kJ mol^-1 with correct working).",
        ],
        workedSolution: [
          "The heat transferred to the water is q = mcΔT with m = 300 g, c = 4.18 J g^-1 K^-1 and ΔT = 8.60 K, so q = 300 x 4.18 x 8.60 = 10784.4 J, which is 10.784 kJ to four significant figures.",
          "Assuming the calorimeter loses no heat elsewhere, the heat released by the combustion of the fuel equals the heat gained by the water, so the magnitude of the thermal energy leaving the reaction system at constant pressure is 10.78 kJ for 0.125 mol of fuel.",
          "Combustion is exothermic for the system, so ΔH for the amount burned is negative: ΔH = -10.78 kJ for 0.125 mol.",
          "Scaling to one mole of fuel gives ΔH = (-10.78 kJ) / (0.125 mol) = -86.2 kJ mol^-1 for the reaction as written for one mole of fuel.",
        ],
        commonMistake:
          "Quoting a positive value for combustion, or dividing moles into the heat without assigning the exothermic sign.",
        tags: ["molar-enthalpy", "combustion", "calculation"],
      },
      {
        id: "t5-1-d3",
        noteId: "t5-1",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem:
          "Under standard conditions (298 K and 101 kPa), define both of the following, making the role of standard states and the 1 mol stoichiometry explicit in each case:\n(a) standard enthalpy change of formation, ΔH_f°\n(b) standard enthalpy change of combustion, ΔH_c°",
        modelAnswerPoints: [
          "ΔH_f° is the enthalpy change when 1 mol of compound in its standard state is formed from its elements, each in its standard reference state, under standard conditions.",
          "Reference states follow the syllabus (e.g. C as graphite, O2 as gas); by convention ΔH_f° for an element in its reference form is zero.",
          "ΔH_c° is the enthalpy change when 1 mol of substance reacts completely in excess oxygen under standard conditions, with all species in their standard states.",
          "For compounds containing C and H, products are normally taken as CO2(g) and H2O(l) unless the question specifies otherwise.",
        ],
        workedSolution: [
          "(a) The standard enthalpy change of formation, ΔH_f°, is the enthalpy change when one mole of the compound in its defined standard state is formed from its constituent elements, each in its standard reference state, with the measurement referred to standard conditions of 298 K and 101 kPa in this syllabus.",
          "The standard state of each element is its most stable form at 298 K and 101 kPa (for example carbon as graphite and oxygen as O2(g)), and the standard enthalpy of formation of any such reference element is taken as zero by convention so that tabulated compound values are mutually consistent.",
          "(b) The standard enthalpy change of combustion, ΔH_c°, is the enthalpy change when one mole of the substance undergoes complete reaction with excess oxygen under standard conditions, with every reactant and product in its standard state.",
          "For typical organic fuels this means carbon is converted to carbon dioxide gas and hydrogen to liquid water unless the question names different product states, and the value in kJ mol^-1 always refers to exactly one mole of the substance burned as written in the defining equation.",
        ],
        commonMistake:
          "Omitting '1 mol formed from elements in their standard states' for formation, or '1 mol burned completely' for combustion.",
        tags: ["definitions", "standard-enthalpies", "DeltaHf", "DeltaHc"],
      },
      {
        id: "t5-1-d4",
        noteId: "t5-1",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem:
          "Define standard enthalpy change of reaction, ΔH_r°, for a balanced chemical equation.\nState the standard conditions and notation used in this syllabus (9701), including what the symbol ⦵ (or °) communicates about states and conditions.",
        modelAnswerPoints: [
          "ΔH_r° is the enthalpy change when the amounts shown in the balanced equation, all in their standard states, are converted completely to products, also in their standard states.",
          "Standard conditions are 298 K and 101 kPa; ⦵ (or °) marks data referred to standard states at these conditions.",
          "For aqueous species the standard state is commonly 1 mol dm^-3 at the stated temperature, in addition to the pressure convention for gases.",
        ],
        workedSolution: [
          "The standard enthalpy change of reaction, ΔH_r°, is the enthalpy change when the stoichiometric amounts of reactants shown in the balanced equation, each in its defined standard state, are converted completely into the products, each also in its standard state, under the agreed standard conditions.",
          "For Cambridge International A Level Chemistry 9701, standard conditions are taken as 298 K and 101 kPa, and the superscript ⦵ or ° on an enthalpy symbol means that every substance is referenced to its standard state at these conditions.",
          "When ions or molecular solutes appear as aqueous species, their standard state is normally taken as an effective concentration of 1 mol dm^-3 at 298 K so that tabulated ionic and solution data can be combined consistently with gas-phase standard pressures of 101 kPa.",
        ],
        commonMistake:
          "Quoting 100 kPa (1 bar) instead of 101 kPa, or defining ΔH_r° without tying it to the balanced amounts in the equation.",
        tags: ["definitions", "standard-states", "DeltaHr"],
      },
      {
        id: "t5-1-d5",
        noteId: "t5-1",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem:
          "Define standard enthalpy change of neutralisation, ΔH_neut°.\nExplain briefly why the value for mixing dilute strong acid and dilute strong alkali is close to -57.6 kJ per mole of water formed, and why a weak acid gives a less exothermic measured value under similar conditions.",
        modelAnswerPoints: [
          "ΔH_neut° is the standard enthalpy change when 1 mol of water is produced by acid–base reaction with all species in their standard states under standard conditions.",
          "For strong acid + strong alkali the net change is essentially H+(aq) + OH-(aq) -> H2O(l), giving about -57.6 kJ mol^-1 when spectator ions cancel in dilute solution.",
          "A weak acid must be ionised further as base is added, absorbing energy, so the measured enthalpy change per mole of water is less exothermic than the strong–strong case.",
        ],
        workedSolution: [
          "The standard enthalpy change of neutralisation, ΔH_neut°, is the standard enthalpy change when exactly one mole of water is formed from the reaction between an acid and a base (alkali), with every reactant and product in its defined standard state under standard conditions of 298 K and 101 kPa.",
          "For a dilute strong acid and a dilute strong alkali, both are essentially fully dissociated, so after cancellation of spectator ions the chemical change is well represented by H+(aq) + OH-(aq) -> H2O(l), and the measured enthalpy change per mole of water formed is therefore close to -57.6 kJ mol^-1.",
          "If the acid is weak, a significant part of the enthalpy budget is used in further ionisation of the acid molecules as hydroxide ions are added, which is an endothermic contribution relative to the already-ionised strong acid case, so the overall process per mole of water becomes less exothermic even though the final step still forms water from hydrogen and hydroxide ions.",
        ],
        commonMistake:
          "Defining neutralisation without fixing the formation of exactly 1 mol of water, or omitting standard states and conditions.",
        tags: ["definitions", "DeltaHneut", "neutralisation"],
      },
      {
        id: "t5-1-d6",
        noteId: "t5-1",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem:
          "150 g of water (specific heat capacity c = 4.18 J g^-1 K^-1) is heated electrically so that its temperature rises by 12.0 K. Assuming no heat losses, calculate the energy supplied to the water in kJ.",
        modelAnswerPoints: [
          "Use q = mcΔT with m in grams, c in J g^-1 K^-1, ΔT in K.",
          "q = 150 x 4.18 x 12.0 J.",
          "q = 7524 J, which is 7.52 kJ (about 7.5 kJ to two significant figures if data are read that way).",
        ],
        workedSolution: [
          "The heat energy transferred to the water is given by q = mcΔT, where m is the mass of water being heated, c is its specific heat capacity, and ΔT is the temperature rise on the kelvin scale.",
          "Substituting m = 150 g, c = 4.18 J g^-1 K^-1 and ΔT = 12.0 K gives q = 150 x 4.18 x 12.0 = 7524 J.",
          "Converting to kilojoules, q = 7.524 kJ, which is 7.52 kJ to three significant figures, and this is the electrical energy that must have been supplied in the idealised no-loss setup.",
        ],
        commonMistake:
          "Using kilojoules in the product while leaving c in J g^-1 K^-1 without converting joules to kilojoules consistently.",
        tags: ["calorimetry", "q-equals-mcdeltaT"],
      },
      {
        id: "t5-1-d7",
        noteId: "t5-1",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem:
          "Explain, in terms of the breaking and making of chemical bonds, why even a strongly exothermic reaction may require an initial energy input before it becomes self-sustaining.",
        modelAnswerPoints: [
          "Breaking bonds in reactants requires an input of energy (endothermic contribution).",
          "Forming bonds in products releases energy (exothermic contribution).",
          "The overall sign of ΔH depends on the balance between these contributions for the complete reaction.",
          "A separate activation energy barrier must be overcome for a successful collision pathway; this is kinetic and does not cancel the net bond-energy balance that determines ΔH.",
        ],
        workedSolution: [
          "In any chemical reaction, existing bonds in the reactants must be broken before new bonds in the products can be formed, and bond breaking is always treated as requiring an input of energy when enthalpy is tracked at constant pressure.",
          "Bond formation between atoms in the products releases energy to the surroundings, so the formation steps are exothermic contributions relative to separated fragments.",
          "The standard enthalpy change of the overall reaction is determined by the difference between the total energy absorbed to break the bonds that are actually broken in the reactants and the total energy released when all the new bonds in the products are formed, which is why some reactions are exothermic overall even though bond breaking must still occur first on the molecular pathway.",
          "Whether the reaction proceeds at an observable rate depends on overcoming the activation energy to reach a transition-state arrangement, which is a kinetic requirement distinct from the thermodynamic balance that fixes whether ΔH is negative or positive for the overall conversion of reactants into products.",
        ],
        commonMistake:
          "Claiming that exothermic reactions do not require bond breaking, or confusing activation energy with ΔH.",
        tags: ["bond-breaking", "bond-making", "energy-transfer"],
      },
      {
        id: "t5-1-d8",
        noteId: "t5-1",
        kind: "structured",
        difficulty: 3,
        marks: 6,
        stem:
          "Mean bond enthalpy data (all values in kJ mol^-1, gas phase): H-H 436; Cl-Cl 243; H-Cl 431.\n(a) Estimate ΔH_r for H2(g) + Cl2(g) -> 2 HCl(g) using mean bond enthalpies.\n(b) Explain why the value obtained is described as an estimate, referring to exact bond terms in particular molecules and to mean (average) bond enthalpies.",
        modelAnswerPoints: [
          "Bonds broken: 1 mol H-H and 1 mol Cl-Cl, so enthalpy input = 436 + 243 = 679 kJ mol^-1.",
          "Bonds formed: 2 mol H-Cl, so enthalpy output = 2 x 431 = 862 kJ mol^-1.",
          "ΔH ≈ 679 - 862 = -183 kJ mol^-1 for the equation as written.",
          "Tabulated mean bond enthalpies are averaged across similar environments; actual bond strengths differ between molecules, so the calculation is only approximate.",
        ],
        workedSolution: [
          "(a) Using mean bond enthalpies, the enthalpy change is estimated as the total bond enthalpy of bonds broken in the gaseous reactants minus the total bond enthalpy of bonds formed in the gaseous products, with each mean value taken as positive for breaking.",
          "One mole of H-H bonds and one mole of Cl-Cl bonds are broken, giving (436 + 243) kJ mol^-1 = 679 kJ mol^-1 of endothermic contribution for bond breaking.",
          "Two moles of H-Cl bonds are formed, releasing 2 x 431 kJ mol^-1 = 862 kJ mol^-1 relative to separated atoms, so the estimated reaction enthalpy is 679 - 862 = -183 kJ mol^-1 for the equation as written.",
          "(b) In a real molecule such as HCl(g), the H-Cl bond has a definite dissociation enthalpy that can be measured for that diatomic, and that value is exact for that specified electronic and vibrational state, whereas a mean bond enthalpy quoted for H-Cl is averaged over several compounds containing that linkage.",
          "Because the local bonding environment changes from compound to compound, using mean values cannot reproduce every reaction enthalpy exactly, which is why the procedure gives an estimate rather than a value identical to one obtained from standard formation enthalpies or calorimetry.",
        ],
        commonMistake:
          "Subtracting bonds broken from bonds formed in the wrong order, or treating mean bond enthalpies as exact for every molecule.",
        tags: ["bond-enthalpy", "calculation", "mean-vs-exact"],
      },
      {
        id: "t5-1-d9",
        noteId: "t5-1",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem:
          "For an exothermic gas-phase reaction X + Y -> Z at constant pressure, describe how you would construct and interpret a reaction pathway (enthalpy profile) diagram.\nYour answer should name both axes, show reactants, transition state, and products, and explain how the diagram represents both the activation energy and the enthalpy change of reaction.",
        modelAnswerPoints: [
          "Vertical axis enthalpy H, horizontal axis reaction coordinate (extent of reaction / molecular rearrangement).",
          "Reactant and product levels drawn with products lower than reactants for an exothermic change.",
          "A maximum between reactants and products labelled as the transition state; activation energy is the energy gap from reactants to that maximum.",
          "ΔH_r is the difference between product and reactant enthalpy levels (negative if products are lower).",
        ],
        workedSolution: [
          "I would draw enthalpy on the vertical axis and a reaction coordinate on the horizontal axis, where the reaction coordinate represents progress along the pathway from separated reactants X and Y through rearrangements toward product Z without implying a time scale.",
          "I would plot a horizontal level for the enthalpy of the reactants and a lower horizontal level for the enthalpy of the product Z, because for an exothermic reaction the enthalpy of the products is less than that of the reactants at constant pressure.",
          "I would join these levels with a continuous curve that passes through a single maximum, and I would label that maximum as the transition state for the elementary pathway being described.",
          "The activation energy, Ea, is the vertical energy difference from the reactant level up to the transition state, and it controls how readily the reaction proceeds at a given temperature, whereas the enthalpy change of reaction, ΔH_r, is the vertical difference between the product level and the reactant level, which is negative here because the product level lies below the reactant level.",
        ],
        commonMistake:
          "Labelling the depth from reactants to products as Ea, or omitting the transition-state hump entirely.",
        tags: ["energy-diagram", "activation-energy", "DeltaHr"],
      },
      {
        id: "t5-1-d10",
        noteId: "t5-1",
        kind: "structured",
        difficulty: 4,
        marks: 7,
        stem:
          "In a polystyrene-cup neutralisation, 50.0 cm^3 of 1.00 mol dm^-3 HCl(aq) is mixed with 50.0 cm^3 of 1.00 mol dm^-3 NaOH(aq). The combined solution has mass 100.0 g and specific heat capacity c = 4.18 J g^-1 K^-1. The temperature rises from 20.4 °C to 26.9 °C. Assume the same c for the solution, negligible heat capacity of the cup, and no heat losses.\nCalculate ΔH for the neutralisation forming 1 mol of water from H+(aq) and OH-(aq), using ΔH = -mcΔT / n(H2O formed).",
        modelAnswerPoints: [
          "ΔT = 26.9 - 20.4 = 6.5 K.",
          "mcΔT = 100.0 x 4.18 x 6.5 = 2717 J (about 2.72 kJ).",
          "n(H2O from stoichiometry) = n limiting acid or base = 1.00 x (50.0/1000) = 0.0500 mol.",
          "ΔH = -(2717 J) / 0.0500 mol = -54340 J mol^-1 ≈ -54.3 kJ mol^-1 (less exothermic than -57.6 partly due to approximations and non-ideality in a simple experiment).",
        ],
        workedSolution: [
          "The temperature rise is ΔT = 26.9 °C - 20.4 °C = 6.5 K, because a difference on the Celsius scale has the same numerical size as a difference on the kelvin scale.",
          "The heat gained by the solution is q = mcΔT = 100.0 g x 4.18 J g^-1 K^-1 x 6.5 K = 2717 J when rounded to four significant figures, corresponding to 2.717 kJ.",
          "The amount of water formed from the stoichiometry HCl + NaOH -> NaCl + H2O is limited by the acid or base volume and concentration: n = cV = 1.00 mol dm^-3 x 0.0500 dm^3 = 0.0500 mol of water.",
          "The reaction releases heat into the solution, so the enthalpy change for the reaction system is negative and is obtained from ΔH = -mcΔT / n, giving ΔH = -(2717 J) / 0.0500 mol = -54340 J mol^-1.",
          "Expressed in kJ mol^-1, ΔH ≈ -54.3 kJ mol^-1 for the formation of one mole of water under the stated assumptions; the magnitude is slightly smaller than the textbook strong–strong limiting value because the model neglects heat capacity variation, calorimeter losses, and non-ideal dilute-solution effects that the syllabus still expects you to treat with the given formula.",
        ],
        commonMistake:
          "Using 50 g instead of the total solution mass, or omitting the negative sign when heat is evolved by the reaction.",
        tags: ["calorimetry", "DeltaH-from-experiment", "neutralisation"],
      },
    ],
    flashcards: [
      {
        id: "t5-1-f1",
        noteId: "t5-1",
        difficulty: 1,
        front: "State the sign of ΔH for an exothermic change of the system at constant pressure.",
        back: "ΔH is negative: the system loses enthalpy and transfers energy as heat to the surroundings.",
        examPhrasing: "Link the sign to heat flow for the system, not only to temperature change of a bath.",
        tags: ["sign-convention", "core"],
      },
      {
        id: "t5-1-f2",
        noteId: "t5-1",
        difficulty: 1,
        front: "What laboratory relationship links heat q, mass m, specific heat c, and temperature change ΔT?",
        back: "q = mcΔT for the heated substance when c is effectively constant over the range.",
        examPhrasing: "Identify which mass is the solution being warmed, not the mass of a tablet alone unless specified.",
        tags: ["calorimetry", "equations"],
      },
      {
        id: "t5-1-f3",
        noteId: "t5-1",
        difficulty: 2,
        front: "Define standard enthalpy change of combustion, ΔH_c°.",
        back: "Enthalpy change when 1 mol of a substance burns completely in excess O2 under standard conditions, all species in standard states (commonly CO2(g) and H2O(l) for C/H compounds).",
        examPhrasing: "Always state '1 mol' and 'completely' for combustion definitions.",
        confusionPair: "Combustion vs formation",
        tags: ["definitions", "DeltaHc"],
      },
      {
        id: "t5-1-f4",
        noteId: "t5-1",
        difficulty: 2,
        front: "List the standard conditions assumed in 9701 when ⦵ is used on an enthalpy symbol.",
        back: "298 K and 101 kPa, with species in their defined standard states (including 1 mol dm^-3 for aqueous ions when relevant).",
        examPhrasing: "Do not substitute 100 kPa if the question specifies this syllabus.",
        tags: ["standard-states", "conditions"],
      },
      {
        id: "t5-1-f5",
        noteId: "t5-1",
        difficulty: 3,
        front: "How is ΔH estimated from mean bond enthalpies for a gas-phase equation?",
        back: "Sum mean bond enthalpies for bonds broken minus sum for bonds formed, all in the gas phase using tabulated mean values.",
        examPhrasing: "State that the result is approximate and not a substitute for formation-based data when precision matters.",
        confusionPair: "Bond breaking vs bond making sign convention in the formula",
        tags: ["bond-enthalpy", "estimate"],
      },
      {
        id: "t5-1-f6",
        noteId: "t5-1",
        difficulty: 3,
        front: "On an enthalpy profile, where is activation energy read from?",
        back: "Vertical gap from reactant enthalpy level up to the transition-state maximum; it is not the same as |ΔH| unless stated.",
        examPhrasing: "Draw and label both Ea and ΔH for exothermic and endothermic sketches.",
        tags: ["diagrams", "Ea"],
      },
      {
        id: "t5-1-f7",
        noteId: "t5-1",
        difficulty: 3,
        front: "Define standard enthalpy change of neutralisation, ΔH_neut°.",
        back: "Standard enthalpy change when 1 mol of H2O(l) is formed from acid + base with all species in standard states.",
        examPhrasing: "Tie the definition to 1 mol of water, not to 1 mol of acid unless the equation says so.",
        tags: ["definitions", "DeltaHneut"],
      },
      {
        id: "t5-1-f8",
        noteId: "t5-1",
        difficulty: 4,
        front: "Why is a mean bond enthalpy called a mean?",
        back: "It is averaged over several compounds containing that bond type, so it is not the exact dissociation enthalpy of one specific molecule.",
        examPhrasing: "Contrast with an exact diatomic bond dissociation enthalpy.",
        tags: ["mean-bond", "exact"],
      },
      {
        id: "t5-1-f9",
        noteId: "t5-1",
        difficulty: 4,
        front: "Write the expression used to convert calorimeter temperature rise to ΔH per mole for a reaction in dilute aqueous solution (no losses).",
        back: "ΔH = -mcΔT / n, where n is the amount of limiting reactant in mol consistent with the equation you quote.",
        examPhrasing: "Carry mass, c, and ΔT in consistent units; justify the negative sign for an exothermic reaction.",
        tags: ["experiment", "formula"],
      },
      {
        id: "t5-1-f10",
        noteId: "t5-1",
        difficulty: 5,
        front: "State how bond breaking and bond making contribute to the overall enthalpy change of a reaction.",
        back: "Breaking bonds is endothermic; forming bonds is exothermic; ΔH reflects the net balance for the amounts in the equation.",
        examPhrasing: "Do not claim that exothermic reactions avoid bond breaking.",
        tags: ["bonds", "concept"],
      },
    ],
  },
  "t5-2": {
    noteId: "t5-2",
    drills: [
      {
        id: "t5-2-d1",
        noteId: "t5-2",
        kind: "structured",
        difficulty: 1,
        marks: 3,
        stem:
          "State Hess's law for enthalpy changes and explain briefly why it is consistent with enthalpy being a state function.",
        modelAnswerPoints: [
          "The total enthalpy change between given initial and final states is independent of the route taken.",
          "Therefore thermochemical equations can be added, scaled, or reversed with corresponding changes to ΔH.",
          "A state function depends only on the state, not path, so different routes must give the same overall ΔH.",
        ],
        workedSolution: [
          "Hess's law states that the total enthalpy change for an overall chemical reaction is the same whichever sequence of chemical steps connects the same initial substances in their specified physical states to the same final substances in their specified physical states.",
          "Consequently, if several balanced equations are combined algebraically after appropriate reversal or multiplication of coefficients, their individual enthalpy changes combine in exactly the same way to give the enthalpy change of the overall equation.",
          "This behaviour is expected because enthalpy is a state function: for fixed states, the change in enthalpy depends only on those states and not on the mechanistic path, so any legitimate thermochemical cycle that closes between the same states must be self-consistent.",
        ],
        commonMistake:
          "Confusing Hess's law with the idea that activation energies along different paths must be equal.",
        tags: ["hess-law", "definitions", "state-function"],
      },
      {
        id: "t5-2-d2",
        noteId: "t5-2",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem:
          "Define how ΔH_r° is obtained from standard enthalpies of formation, ΔH_f°, for a balanced equation. Include the general summation formula and the convention for elements in their reference states.",
        modelAnswerPoints: [
          "ΔH_r° = Σ ν_p ΔH_f°(products) − Σ ν_r ΔH_f°(reactants) with ν stoichiometric coefficients.",
          "Each substance must be in its standard state; reference elements have ΔH_f° = 0.",
          "The result refers to the reaction exactly as written, in kJ per mole of reaction as specified by the stoichiometry.",
        ],
        workedSolution: [
          "The standard enthalpy change of reaction is calculated from tabulated standard enthalpies of formation by taking the sum, over all product species, of the stoichiometric coefficient multiplied by the standard enthalpy of formation of that species, minus the same weighted sum over all reactant species.",
          "In symbols this is written ΔH_r° = Σ ν_p ΔH_f°(products) − Σ ν_r ΔH_f°(reactants), where each ν is the integer or fractional coefficient from the balanced equation and every ΔH_f° value refers to the substance in its standard state at 298 K and 101 kPa in this syllabus.",
          "For any element present in its most stable reference form under these conditions, ΔH_f° is defined as zero, which is why elements often disappear from the bookkeeping unless a different allotrope or reference state is explicitly written in the equation.",
          "The numerical value obtained is the enthalpy change for converting exactly the amounts shown on the left of the arrow into exactly the amounts shown on the right, so doubling all coefficients doubles ΔH_r°.",
        ],
        commonMistake:
          "Subtracting reactants minus products, or forgetting stoichiometric multipliers on each ΔH_f° term.",
        tags: ["definitions", "formation-sum", "DeltaHr"],
      },
      {
        id: "t5-2-d3",
        noteId: "t5-2",
        kind: "structured",
        difficulty: 2,
        marks: 3,
        stem:
          "Explain what it means for enthalpy to be a state function, and state how ΔH changes when (a) a thermochemical equation is reversed, (b) all stoichiometric coefficients are multiplied by a positive integer n.",
        modelAnswerPoints: [
          "State function: H depends only on the current composition, phase, temperature, and pressure, not on how that state was prepared.",
          "(a) Reversing the equation swaps reactant and product states, so ΔH changes sign with the same magnitude for the same stoichiometric scale.",
          "(b) Scaling coefficients by n scales all amounts by n, so ΔH is multiplied by n because enthalpy is extensive.",
        ],
        workedSolution: [
          "Calling enthalpy a state function means that for a given chemical system at a specified temperature, pressure, and composition in definite phases, the enthalpy has a definite value, and the change in enthalpy between two such states depends only on those two states and not on the sequence of intermediate chemical or physical steps taken between them.",
          "(a) If a balanced equation is written in reverse, the initial and final states of the forward equation are interchanged, so the enthalpy change for the reverse direction is the negative of the enthalpy change for the forward direction at the same stoichiometric scale.",
          "(b) If every coefficient in a balanced equation is multiplied by n, then n times as much of each substance reacts, so the enthalpy change, which scales with the extent of reaction for this intensive tabulation per equation as written, is also multiplied by n.",
        ],
        commonMistake:
          "Saying ΔH is unchanged on reversal, or omitting the factor n when scaling an equation.",
        tags: ["definitions", "state-function", "manipulation"],
      },
      {
        id: "t5-2-d4",
        noteId: "t5-2",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem:
          "Describe how you would construct a simple Hess energy cycle on paper to determine an unknown standard enthalpy change from two or more known steps that connect the same initial and final states.",
        modelAnswerPoints: [
          "Draw or list the target equation from stated initial states to stated final states with correct states on all species.",
          "Add known steps whose sum cancels intermediates to reproduce the target overall change.",
          "Apply reversal (sign change) and scaling (multiply ΔH by the same factor as coefficients) before summing.",
          "State that the sum of ΔH for the chosen steps equals the unknown ΔH for the target because H is a state function.",
        ],
        workedSolution: [
          "I would begin by writing the target process as a single balanced equation with correct physical states on every species, because the enthalpy change I want is defined only once the equation and states are fixed unambiguously.",
          "I would then select two or more documented thermochemical equations whose reactants and products include the same intermediates arranged so that, when the equations are combined after appropriate reversal and coefficient scaling, every unintended species cancels in equal amounts on opposite sides of the summed equation.",
          "For each manipulated equation I would carry the same manipulation to its quoted ΔH, reversing the sign when an equation is written backwards and multiplying ΔH by the same factor used to scale coefficients, because enthalpy is extensive with respect to the amounts shown.",
          "I would add the adjusted ΔH values algebraically and identify the result as the enthalpy change of the target equation, justifying the step by stating that enthalpy is a state function so any complete route between the same overall initial and final states must give the same overall ΔH.",
        ],
        commonMistake:
          "Attempting to cancel species that are not in the same state, or manipulating ΔH without matching equation manipulation.",
        tags: ["hess-law", "energy-cycle", "construction"],
      },
      {
        id: "t5-2-d5",
        noteId: "t5-2",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem:
          "Use the following standard enthalpies of formation to calculate ΔH_r° for 2 Al(s) + Fe2O3(s) -> Al2O3(s) + 2 Fe(s).\nΔH_f°(Fe2O3) = -824 kJ mol^-1; ΔH_f°(Al2O3) = -1676 kJ mol^-1.",
        modelAnswerPoints: [
          "ΔH_r° = Σ ΔH_f°(products) − Σ ΔH_f°(reactants).",
          "Products: ΔH_f°(Al2O3) + 2 ΔH_f°(Fe) = -1676 + 0 = -1676 kJ mol^-1.",
          "Reactants: 2 ΔH_f°(Al) + ΔH_f°(Fe2O3) = 0 + (-824) = -824 kJ mol^-1.",
          "ΔH_r° = (-1676) − (−824) = -852 kJ mol^-1 for the equation as written.",
        ],
        workedSolution: [
          "The standard enthalpy change of reaction is obtained from formation data using ΔH_r° = Σ ν ΔH_f°(products) − Σ ν ΔH_f°(reactants), where each term is the standard enthalpy of formation of the substance in its reference state multiplied by its stoichiometric coefficient in the balanced equation.",
          "For the products aluminium oxide and iron, ΔH_f°(Al2O3) is given as -1676 kJ mol^-1 and ΔH_f°(Fe) is zero for the reference element in its standard state, so the product sum is -1676 kJ mol^-1 for the coefficients shown.",
          "For the reactants, ΔH_f°(Al) is zero for the reference metal and ΔH_f°(Fe2O3) is -824 kJ mol^-1, so the reactant sum is 2 x 0 + (-824) = -824 kJ mol^-1.",
          "Subtracting reactants from products gives ΔH_r° = (-1676) − (−824) = -852 kJ mol^-1, which is the standard enthalpy change for the thermite-type equation as written and is strongly exothermic as expected.",
        ],
        commonMistake:
          "Subtracting products minus reactants in the wrong order, or omitting the stoichiometric factor on Fe(s) even though ΔH_f°(Fe) is zero.",
        tags: ["formation-cycle", "calculation"],
      },
      {
        id: "t5-2-d6",
        noteId: "t5-2",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem:
          "Given:\n(1) C(s, graphite) + O2(g) -> CO2(g)   ΔH1° = -394 kJ mol^-1\n(2) CO(g) + 1/2 O2(g) -> CO2(g)   ΔH2° = -283 kJ mol^-1\ndetermine ΔH° for C(s, graphite) + 1/2 O2(g) -> CO(g).",
        modelAnswerPoints: [
          "Reverse equation (2) to give CO2(g) -> CO(g) + 1/2 O2(g) with ΔH = +283 kJ mol^-1.",
          "Add to equation (1) so CO2 cancels.",
          "Net reaction is C(s) + 1/2 O2(g) -> CO(g) with ΔH° = -394 + 283 = -111 kJ mol^-1.",
        ],
        workedSolution: [
          "The target reaction forms carbon monoxide from graphite and half a mole of oxygen, so I need to eliminate carbon dioxide as an intermediate while preserving one mole of carbon on the left and oxygen in the correct proportion.",
          "Reversing equation (2) gives CO2(g) -> CO(g) + 1/2 O2(g) with ΔH = +283 kJ mol^-1 because reversing a thermochemical equation changes the sign of its enthalpy change while keeping the magnitude.",
          "Adding this reversed equation to equation (1), C(s) + O2(g) -> CO2(g) with ΔH = -394 kJ mol^-1, cancels carbon dioxide and reduces the oxygen from one mole on the left plus half a mole released on the right to a net half mole of oxygen on the left, yielding C(s) + 1/2 O2(g) -> CO(g).",
          "The enthalpy changes add to ΔH° = -394 kJ mol^-1 + 283 kJ mol^-1 = -111 kJ mol^-1, which is therefore the standard enthalpy change for the target equation and matches the tabulated order of magnitude for the standard enthalpy of formation of carbon monoxide.",
        ],
        commonMistake:
          "Adding equation (2) forwards, which fails to cancel CO2 between the steps, or subtracting the combustion values in the wrong order.",
        tags: ["combustion-cycle", "indirect"],
      },
      {
        id: "t5-2-d7",
        noteId: "t5-2",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem:
          "Use the steps below to find ΔH° for 2 S(s, rhombic) + 3 O2(g) -> 2 SO3(g).\n(1) S(s) + O2(g) -> SO2(g)   ΔH1° = -297 kJ mol^-1\n(2) 2 SO2(g) + O2(g) -> 2 SO3(g)   ΔH2° = -198 kJ mol^-1 (as written)",
        modelAnswerPoints: [
          "Multiply equation (1) by 2: 2 S + 2 O2 -> 2 SO2 with ΔH = 2(-297) = -594 kJ mol^-1.",
          "Add equation (2) unchanged: 2 SO2 + O2 -> 2 SO3 with ΔH = -198 kJ mol^-1.",
          "Intermediates 2 SO2 cancel; net 2 S + 3 O2 -> 2 SO3.",
          "ΔH° = -594 + (-198) = -792 kJ mol^-1 for the target as written.",
        ],
        workedSolution: [
          "The target equation contains two moles of rhombic sulfur and three moles of oxygen gas forming two moles of sulfur trioxide, so the provided first step, which forms only one mole of sulfur dioxide per mole of sulfur, must be doubled to match the sulfur stoichiometry.",
          "Multiplying equation (1) by two gives 2 S(s) + 2 O2(g) -> 2 SO2(g) with ΔH = 2 x (-297 kJ mol^-1) = -594 kJ mol^-1 for that doubled step.",
          "Adding equation (2) as written, 2 SO2(g) + O2(g) -> 2 SO3(g) with ΔH = -198 kJ mol^-1, cancels the two moles of sulfur dioxide intermediate and consumes one further mole of oxygen, producing the required net equation 2 S(s) + 3 O2(g) -> 2 SO3(g).",
          "Hess's law gives the overall enthalpy change as the sum of the enthalpy changes of the scaled and added steps, so ΔH° = -594 kJ mol^-1 + (-198 kJ mol^-1) = -792 kJ mol^-1 for the target reaction as written.",
        ],
        commonMistake:
          "Forgetting to double both the equation and its ΔH when two moles of sulfur are required.",
        tags: ["multi-step", "scaling", "hess-cycle"],
      },
      {
        id: "t5-2-d8",
        noteId: "t5-2",
        kind: "structured",
        difficulty: 3,
        marks: 6,
        stem:
          "Mean bond enthalpies (kJ mol^-1, gas phase): C=C 612; C-C 348; H-H 436; C-H 412.\nEstimate ΔH° for C2H4(g) + H2(g) -> C2H6(g) using mean bond enthalpy data and Hess-style bookkeeping (bonds broken minus bonds formed).",
        modelAnswerPoints: [
          "Bonds broken in reactants: 1 C=C + 4 C-H + 1 H-H -> (612 + 4x412 + 436) = 2696 kJ mol^-1.",
          "Bonds formed in products: 1 C-C + 6 C-H -> (348 + 6x412) = 2820 kJ mol^-1.",
          "ΔH ≈ 2696 - 2820 = -124 kJ mol^-1 for the hydrogenation as written.",
          "State that the answer is an estimate because mean bond enthalpies are averaged quantities.",
        ],
        workedSolution: [
          "In ethene, C2H4, there is one carbon–carbon double bond and four carbon–hydrogen single bonds, whereas in ethane, C2H6, there is one carbon–carbon single bond and six carbon–hydrogen single bonds, and hydrogen is supplied as H2 with one hydrogen–hydrogen bond.",
          "Using mean bond enthalpies as positive quantities for breaking, the total relative bond-breaking input for C2H4 + H2 is 612 kJ mol^-1 for the C=C bond plus 4 x 412 kJ mol^-1 for the C-H bonds plus 436 kJ mol^-1 for the H-H bond, which sums to 2696 kJ mol^-1.",
          "The bonds formed in ethane sum to 348 kJ mol^-1 for the C-C bond plus 6 x 412 kJ mol^-1 for the C-H bonds, which is 2820 kJ mol^-1 of exothermic contribution relative to gaseous atoms when those bonds are formed from separated fragments.",
          "The estimated reaction enthalpy is therefore ΔH ≈ 2696 - 2820 = -124 kJ mol^-1 for the hydrogenation equation as written, with the negative sign indicating an exothermic overall change consistent with saturating the double bond.",
          "This value is explicitly an estimate because mean bond enthalpies are averaged across several molecules containing nominally similar bonds, so they will not reproduce calorimetric or formation-based values exactly.",
        ],
        commonMistake:
          "Miscounting C-H bonds in ethene as six, or treating bond enthalpies as if they referred to liquids.",
        tags: ["bond-energy-data", "calculation", "hess-style"],
      },
      {
        id: "t5-2-d9",
        noteId: "t5-2",
        kind: "structured",
        difficulty: 4,
        marks: 7,
        stem:
          "Methanol is formed from its elements: C(s, graphite) + 2 H2(g) + 1/2 O2(g) -> CH3OH(l).\nGiven standard enthalpies of combustion ΔH_c°(C, graphite) = -394 kJ mol^-1, ΔH_c°(H2) = -286 kJ mol^-1, and ΔH_c°(CH3OH(l)) = -726 kJ mol^-1, use a Hess cycle based on complete combustion to the same oxide products to calculate ΔH_f°(CH3OH(l)).",
        modelAnswerPoints: [
          "Elements combust to CO2 and H2O: C + O2 -> CO2 (-394); 2 H2 + O2 -> 2 H2O (2 x -286 = -572).",
          "Sum for elements to oxides: -394 + (-572) = -966 kJ mol^-1 for the combined combustion of the stoichiometric elements.",
          "Combustion of methanol: CH3OH + 3/2 O2 -> CO2 + 2 H2O has ΔH_c° = -726 kJ mol^-1.",
          "ΔH_f° = (-966) - (-726) = -240 kJ mol^-1 (accept -239 to -241 with clear rounding).",
        ],
        workedSolution: [
          "I take a Hess cycle in which the elements in their standard states are converted completely to the same collection of combustion products as is obtained from burning one mole of methanol, namely carbon dioxide gas and liquid water in the usual standard states, because two different routes between the same overall states must have the same enthalpy change.",
          "The combustion of one mole of graphite to carbon dioxide is C(s) + O2(g) -> CO2(g) with ΔH = -394 kJ mol^-1, and the combustion of two moles of hydrogen to liquid water is 2 H2(g) + O2(g) -> 2 H2O(l) with ΔH = 2 x (-286 kJ mol^-1) = -572 kJ mol^-1, so the combined combustion of the element mixture to these oxides releases 966 kJ mol^-1 of enthalpy overall.",
          "The combustion of one mole of liquid methanol to the same oxides is CH3OH(l) + 3/2 O2(g) -> CO2(g) + 2 H2O(l) with ΔH_c° = -726 kJ mol^-1 as given.",
          "Rearranging the cycle shows that the standard enthalpy of formation of methanol from its elements is the difference between the enthalpy released on burning the elements to those products and the enthalpy released on burning methanol itself to the same products, giving ΔH_f° = (-966 kJ mol^-1) - (-726 kJ mol^-1) = -240 kJ mol^-1 to three significant figures.",
          "The sign and magnitude are chemically reasonable for forming a liquid alcohol from graphite and gases, and the working displays the required use of a simple energy cycle with combustion data to obtain a formation enthalpy that is awkward to measure directly.",
        ],
        commonMistake:
          "Adding the combustion of methanol instead of subtracting it, or using only one mole of hydrogen when the formation equation contains two.",
        tags: ["combustion-cycle", "formation-indirect", "energy-cycle"],
      },
      {
        id: "t5-2-d10",
        noteId: "t5-2",
        kind: "structured",
        difficulty: 5,
        marks: 7,
        stem:
          "For the target reaction 2 NO(g) + O2(g) -> 2 NO2(g), use:\n(α) N2(g) + O2(g) -> 2 NO(g)   ΔH_α° = +180 kJ mol^-1\n(β) 1/2 N2(g) + O2(g) -> NO2(g)   ΔH_β° = +33 kJ mol^-1\nConstruct the combination of (α) and (β), including any reversals and scaling, and hence find ΔH_r° for the target equation.",
        modelAnswerPoints: [
          "Reverse (α): 2 NO -> N2 + O2 with ΔH = -180 kJ mol^-1.",
          "Double (β): N2 + 2 O2 -> 2 NO2 with ΔH = +66 kJ mol^-1.",
          "Sum cancels N2 and leaves 2 NO + O2 -> 2 NO2.",
          "ΔH_r° = -180 + 66 = -114 kJ mol^-1.",
        ],
        workedSolution: [
          "The target reaction consumes two moles of nitrogen monoxide and one mole of oxygen to give two moles of nitrogen dioxide, so I look for a combination of the given steps in which nitrogen appears only as an intermediate that cancels and the oxygen stoichiometry matches the target.",
          "Reversing equation (α) gives 2 NO(g) -> N2(g) + O2(g) with ΔH = -180 kJ mol^-1, which places two moles of nitrogen monoxide on the reactant side as required and introduces one mole of nitrogen gas that can later be eliminated.",
          "Doubling equation (β) gives N2(g) + 2 O2(g) -> 2 NO2(g) with ΔH = 2 x (+33 kJ mol^-1) = +66 kJ mol^-1, which supplies two moles of nitrogen dioxide on the product side and uses two moles of oxygen together with the one mole of nitrogen gas produced in the reversed (α).",
          "Summing the reversed (α) and the doubled (β) gives 2 NO + N2 + 2 O2 -> N2 + O2 + 2 NO2; cancelling N2(g) and one O2(g) from each side yields 2 NO(g) + O2(g) -> 2 NO2(g), which is the target equation.",
          "The enthalpy changes add algebraically to ΔH_r° = -180 kJ mol^-1 + 66 kJ mol^-1 = -114 kJ mol^-1 for the target reaction as written, which is the required standard reaction enthalpy from the constructed cycle.",
        ],
        commonMistake:
          "Doubling (α) instead of reversing it, or failing to double (β) when two moles of NO2 are required.",
        tags: ["multi-step-construction", "hess-law"],
      },
    ],
    flashcards: [
      {
        id: "t5-2-f1",
        noteId: "t5-2",
        difficulty: 1,
        front: "State Hess's law in one sentence.",
        back: "The overall enthalpy change between the same initial and final states is the same for any reaction pathway between those states.",
        examPhrasing: "Link to enthalpy as a state function when asked for a justification.",
        tags: ["hess-law", "definition"],
      },
      {
        id: "t5-2-f2",
        noteId: "t5-2",
        difficulty: 1,
        front: "What happens to ΔH when a thermochemical equation is reversed?",
        back: "The sign of ΔH is reversed; the magnitude stays the same for the same stoichiometric scale.",
        examPhrasing: "Swap reactants and products and flip the sign of ΔH together.",
        tags: ["manipulation", "sign"],
      },
      {
        id: "t5-2-f3",
        noteId: "t5-2",
        difficulty: 2,
        front: "Write the formation-based expression for ΔH_r°.",
        back: "ΔH_r° = Σ ν_p ΔH_f°(products) − Σ ν_r ΔH_f°(reactants).",
        examPhrasing: "Remember reference elements have ΔH_f° = 0 only in their standard reference form.",
        confusionPair: "Products minus reactants vs the reverse",
        tags: ["formation-sum", "equation"],
      },
      {
        id: "t5-2-f4",
        noteId: "t5-2",
        difficulty: 2,
        front: "If every coefficient in an equation is multiplied by n, what happens to ΔH?",
        back: "ΔH is multiplied by n because enthalpy change scales with the extent of reaction as written.",
        examPhrasing: "Halving all coefficients halves ΔH for that written equation.",
        tags: ["scaling", "stoichiometry"],
      },
      {
        id: "t5-2-f5",
        noteId: "t5-2",
        difficulty: 3,
        front: "Why must physical states appear in thermochemical equations used in Hess cycles?",
        back: "Enthalpy depends on state; mixing H2O(l) and H2O(g) or different allotropes would break the cycle.",
        examPhrasing: "Examiners penalise ambiguous water state in combustion and formation work.",
        tags: ["states", "precision"],
      },
      {
        id: "t5-2-f6",
        noteId: "t5-2",
        difficulty: 3,
        front: "How is bond energy data used in a simple estimate of gas-phase ΔH?",
        back: "Sum bond enthalpies for bonds broken minus sum for bonds formed, using mean values for each type in the gas phase.",
        examPhrasing: "Say explicitly that the result is approximate.",
        tags: ["bond-energy-data", "estimate"],
      },
      {
        id: "t5-2-f7",
        noteId: "t5-2",
        difficulty: 3,
        front: "Give a sanity check after calculating a combustion ΔH_r° from formation data.",
        back: "Complete combustion of a fuel should be strongly exothermic with a negative ΔH of large magnitude unless the question is pathological.",
        examPhrasing: "Check sign and order of magnitude before leaving an answer line.",
        tags: ["sanity-check", "combustion"],
      },
      {
        id: "t5-2-f8",
        noteId: "t5-2",
        difficulty: 4,
        front: "What must match before you add two thermochemical steps in a Hess construction?",
        back: "Species, amounts, and physical states on opposite sides must cancel exactly when equations are summed.",
        examPhrasing: "Show cancellation or label a cycle diagram clearly.",
        tags: ["algebra", "exam-technique"],
      },
      {
        id: "t5-2-f9",
        noteId: "t5-2",
        difficulty: 4,
        front: "How can ΔH_f° of an organic compound be obtained indirectly from combustion data?",
        back: "Combine combustion of the elements to the same oxides as the compound combustion, then subtract the compound's combustion enthalpy in a consistent Hess layout.",
        examPhrasing: "Track moles of CO2 and H2O implied by each step.",
        tags: ["combustion-cycle", "formation"],
      },
      {
        id: "t5-2-f10",
        noteId: "t5-2",
        difficulty: 5,
        front: "Distinguish ΔH_r from activation energy on a single reaction pathway diagram.",
        back: "ΔH_r is the vertical difference between reactant and product enthalpy levels; Ea is the barrier height from reactants to the transition state.",
        examPhrasing: "A high Ea does not imply a large |ΔH_r|.",
        confusionPair: "Kinetics vs thermodynamics",
        tags: ["diagrams", "Ea"],
      },
    ],
  },
};
