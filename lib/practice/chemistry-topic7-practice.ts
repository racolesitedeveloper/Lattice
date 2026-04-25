import type { SubtopicPracticePack } from "./types";

/**
 * Topic 7 (7.1–7.2) practice packs: `t7-1` chemical equilibria; `t7-2` Brønsted–Lowry acids/bases.
 * Crosswalk: `data/syllabus/chemistry-9701-learning-outcomes.md` §7.1–7.2 ↔ `data/courses/chemistry-9701.json` (`t7-1`, `t7-2`).
 * No syllabus exceptions: all listed outcomes are hit by at least one drill in the set for that noteId.
 */
export const CHEMISTRY_TOPIC7_PRACTICE: Record<string, SubtopicPracticePack> = {
  "t7-1": {
    noteId: "t7-1",
    drills: [
      {
        id: "t7-1-d1",
        noteId: "t7-1",
        kind: "mcq",
        difficulty: 1,
        stem:
          "Which statement best matches the usual requirement for a chemical reaction to reach a fixed macroscopic composition that can be described by an equilibrium constant at constant temperature?",
        options: [
          { id: "A", text: "The vessel must be closed so that matter does not enter or leave." },
          { id: "B", text: "The forward reaction must be exothermic." },
          { id: "C", text: "All reactant and product concentrations must become equal." },
          { id: "D", text: "A catalyst must be present." },
        ],
        correctOptionId: "A",
        explanation:
          "A closed system is needed so amounts of species can settle to steady equilibrium values; reversibility and equal forward/reverse rates define dynamic equilibrium once that steady state exists.",
        distractorRationale: {
          B: "Either direction may be endothermic or exothermic; that affects K with temperature, not whether equilibrium can be established in a closed system.",
          C: "Equal concentrations are not required; only that concentrations stop changing when forward and reverse rates match.",
          D: "A catalyst speeds attainment of equilibrium but is not a requirement for equilibrium to exist.",
        },
        tags: ["closed-system", "reversible", "definitions"],
      },
      {
        id: "t7-1-d2",
        noteId: "t7-1",
        kind: "mcq",
        difficulty: 2,
        stem:
          "For 2 SO2(g) + O2(g) <=> 2 SO3(g), the total pressure is increased at constant temperature by reducing the volume of the closed container. According to Le Chatelier's principle, in which direction does the position of equilibrium move?",
        options: [
          { id: "A", text: "To the left (towards SO2 and O2)" },
          { id: "B", text: "To the right (towards SO3)" },
          { id: "C", text: "There is no shift because catalysts control the position" },
          { id: "D", text: "There is no shift because the total number of atoms is unchanged" },
        ],
        correctOptionId: "B",
        explanation:
          "Higher total pressure from smaller volume is partially opposed by shifting towards fewer gas molecules: 3 mol gas on the left versus 2 mol on the right, so the equilibrium moves to the right.",
        distractorRationale: {
          A: "That direction would increase the number of gas molecules and therefore raise pressure further, not oppose the imposed increase in pressure.",
          C: "Catalysts do not change the equilibrium position; pressure change does shift the position when gas stoichiometry differs between sides.",
          D: "Atom count is not the criterion; mole count of gas particles determines the response to a pressure change at constant temperature.",
        },
        tags: ["le-chatelier", "pressure", "gas-equilibrium"],
      },
      {
        id: "t7-1-d3",
        noteId: "t7-1",
        kind: "mcq",
        difficulty: 2,
        stem:
          "For a given reversible reaction written in a fixed way, which change always alters the value of the equilibrium constant Kc at equilibrium (assuming concentration-based Kc)?",
        options: [
          { id: "A", text: "Adding more of a reactant at constant temperature" },
          { id: "B", text: "Increasing the total pressure by adding an inert gas at constant volume" },
          { id: "C", text: "Introducing a catalyst at constant temperature" },
          { id: "D", text: "Changing the temperature" },
        ],
        correctOptionId: "D",
        explanation:
          "Kc depends on temperature for any reaction with non-zero enthalpy change; at constant T, changing concentration or pressure (without changing T) changes the position but not Kc, and a catalyst does not change K.",
        distractorRationale: {
          A: "At constant temperature, adding a reactant shifts the position so the quotient returns to the same Kc.",
          B: "Partial pressures of reacting gases are unchanged, so the equilibrium position and Kc are unchanged.",
          C: "A catalyst increases forward and reverse rates equally and does not change K or the equilibrium composition.",
        },
        tags: ["kc", "temperature", "catalyst"],
      },
      {
        id: "t7-1-d4",
        noteId: "t7-1",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem:
          "(a) Explain what is meant by a reversible reaction.\n(b) Explain what is meant by dynamic equilibrium for such a reaction in a closed system, referring to forward and reverse rates and to concentrations.\n(c) State why a closed system is normally required to establish this equilibrium.",
        modelAnswerPoints: [
          "(a) Reversible: the reaction can proceed in both forward and reverse directions under the same conditions.",
          "(b) Dynamic equilibrium: forward rate equals reverse rate; concentrations remain constant macroscopically while particles still react.",
          "(c) Closed system: no exchange of matter with the surroundings so amounts can settle to steady equilibrium values.",
        ],
        workedSolution: [
          "(a) A reversible reaction is a reaction that can run in the forward direction (reactants to products) and also in the reverse direction (products back to reactants) under the same conditions, so that neither direction goes to completion in a closed system once equilibrium is possible.",
          "(b) Dynamic equilibrium is the state reached in a closed system when the rate of the forward reaction equals the rate of the reverse reaction; the concentrations of reactants and products then remain constant on a macroscopic scale, but individual molecules are still continually reacting, so the equilibrium is dynamic rather than static.",
          "(c) A closed system is required because if matter could escape or enter, the amounts of reactants and products would not settle to fixed values at constant temperature; only when the system is closed can a stable equilibrium composition consistent with a fixed equilibrium constant be maintained.",
        ],
        commonMistake:
          "Saying that all motion or all reaction stops at equilibrium, or omitting that equal forward and reverse rates are what keep concentrations constant.",
        tags: ["reversible", "dynamic-equilibrium", "closed-system", "definitions"],
      },
      {
        id: "t7-1-d5",
        noteId: "t7-1",
        kind: "structured",
        difficulty: 2,
        marks: 3,
        stem:
          "State Le Chatelier's principle in the form used in the syllabus: what happens when a change is made to a system already at dynamic equilibrium?",
        modelAnswerPoints: [
          "If a change is made to a system at dynamic equilibrium, the position of equilibrium moves.",
          "The shift is in the direction that minimises that imposed change (partially counteracts the stress).",
          "The principle is applied to predict responses to changes in concentration, pressure (gas equilibria), and temperature; a catalyst changes rate but not the equilibrium position at constant temperature.",
        ],
        workedSolution: [
          "Le Chatelier's principle states that if a change is made to a system that is already at dynamic equilibrium, the position of equilibrium moves in response.",
          "The direction of that movement is such that the change imposed on the system is minimised: for example, if the concentration of a reactant is increased, the equilibrium shifts to consume some of that added reactant, and if the temperature is raised for an exothermic forward reaction as written, the equilibrium shifts in the direction that absorbs heat.",
          "In examinations the principle is used to deduce qualitative shifts when concentration, total gas pressure, or temperature is altered, whereas a catalyst speeds attainment of equilibrium but does not shift the position of equilibrium at constant temperature.",
        ],
        commonMistake:
          "Wording that the system 'removes' the stress entirely, or confusing a faster rate to equilibrium with a shift in the equilibrium position.",
        tags: ["le-chatelier", "definitions"],
      },
      {
        id: "t7-1-d6",
        noteId: "t7-1",
        kind: "structured",
        difficulty: 3,
        marks: 6,
        stem:
          "A mixture of ideal gases at equilibrium occupies a sealed vessel of fixed volume at constant temperature. The gases are A(g), B(g) and C(g) only, with equilibrium amounts n(A) = 0.30 mol, n(B) = 0.50 mol and n(C) = 0.20 mol.\n(a) Define mole fraction of a gas in a mixture.\n(b) Calculate the mole fraction of A in this mixture.\n(c) If the total pressure in the vessel is 120 kPa, calculate the partial pressure of gas B.",
        modelAnswerPoints: [
          "(a) Mole fraction x_i = n_i / n_total (ratio of moles of that gas to total moles of gas).",
          "(b) n_total = 1.00 mol, so x(A) = 0.30 / 1.00 = 0.30 (no unit).",
          "(c) p(B) = x(B) x P_total = (0.50 / 1.00) x 120 kPa = 60 kPa.",
        ],
        workedSolution: [
          "(a) The mole fraction of a particular gas in a gaseous mixture is defined as the amount in moles of that gas divided by the total amount in moles of all gases present in the mixture, so x_i = n_i / n_total.",
          "(b) The total amount of gas is n_total = 0.30 + 0.50 + 0.20 = 1.00 mol, so the mole fraction of A is x(A) = n(A) / n_total = 0.30 / 1.00 = 0.30.",
          "(c) The partial pressure of a gas in an ideal mixture is its mole fraction multiplied by the total pressure, so x(B) = 0.50 / 1.00 = 0.50 and p(B) = x(B) x P_total = 0.50 x 120 kPa = 60 kPa.",
        ],
        commonMistake:
          "Using volumes instead of mole ratios for mole fraction, or forgetting that partial pressure is mole fraction times total pressure for ideal gases.",
        tags: ["mole-fraction", "partial-pressure", "definitions", "calculation"],
      },
      {
        id: "t7-1-d7",
        noteId: "t7-1",
        kind: "structured",
        difficulty: 3,
        marks: 7,
        stem:
          "For the homogeneous gas equilibrium H2(g) + I2(g) <=> 2 HI(g):\n(a) Deduce the expression for Kc in terms of equilibrium concentrations and the expression for Kp in terms of equilibrium partial pressures.\n(b) Calculate the numerical value of Kc when, in a 1.00 dm^3 vessel at constant temperature, equilibrium amounts are n(H2) = 0.100 mol, n(I2) = 0.100 mol and n(HI) = 0.800 mol.\n(c) At the same temperature, another equilibrium mixture of the same gases has p(H2) = p(I2) = 20.0 kPa and p(HI) = 80.0 kPa. Calculate the numerical value of Kp for the equation as written, using these partial pressures.",
        modelAnswerPoints: [
          "(a) Kc = [HI]^2 / ([H2][I2]); Kp = p(HI)^2 / (p(H2) x p(I2)); pure solids omitted from K (activity taken as 1) when they appear in heterogeneous equilibria.",
          "(b) [HI] = 0.800 mol dm^-3, [H2] = [I2] = 0.100 mol dm^-3, so Kc = (0.800)^2 / (0.100 x 0.100) = 64.",
          "(c) Kp = (80.0)^2 / (20.0 x 20.0) = 6400 / 400 = 16 (consistent pressure units; kPa^2 / kPa^2 gives dimensionless form for this stoichiometry when expressed as written).",
        ],
        workedSolution: [
          "For H2(g) + I2(g) <=> 2 HI(g), the equilibrium constant in terms of concentrations is Kc = [HI]^2 / ([H2][I2]), because the product side has two moles of HI and each reactant appears to the first power in the balanced equation.",
          "The equilibrium constant in terms of partial pressures is Kp = p(HI)^2 / (p(H2) x p(I2)), with each partial pressure expressed in consistent units for the same equation form; the syllabus does not require you to relate Kp and Kc here, and for heterogeneous equilibria involving pure solids those solids are omitted from the quotient because their activities are taken as unity.",
          "With a vessel volume of 1.00 dm^3, [HI] = 0.800 / 1.00 = 0.800 mol dm^-3 and [H2] = [I2] = 0.100 mol dm^-3, so Kc = (0.800)^2 / (0.100 x 0.100) = 0.640 / 0.0100 = 64.",
          "For the stated partial pressures in kPa, Kp = (80.0 kPa)^2 / ((20.0 kPa) x (20.0 kPa)) = 6400 / 400 = 16 when the quotient is evaluated as a pure number from the ratio as written (examiners often accept the numerical value once units are consistent).",
        ],
        commonMistake:
          "Inverting the ratio, omitting the square on [HI] or on p(HI), or using amounts in mol without dividing by volume when concentrations are required.",
        tags: ["kc", "kp", "expressions", "calculation", "homogeneous"],
      },
      {
        id: "t7-1-d8",
        noteId: "t7-1",
        kind: "structured",
        difficulty: 4,
        marks: 6,
        stem:
          "Phosphorus pentachloride vapour decomposes in a closed vessel according to PCl5(g) <=> PCl3(g) + Cl2(g). An amount of 0.500 mol of PCl5 is introduced into a 2.00 dm^3 vessel and the system is allowed to reach equilibrium at constant temperature. At equilibrium, the amount of Cl2(g) present is 0.100 mol. Assuming the temperature is uniform and the gas mixture behaves ideally, calculate the equilibrium amount of PCl5 (in mol) and the value of Kc for this equation, stating concentrations in mol dm^-3.",
        modelAnswerPoints: [
          "From stoichiometry, when n(Cl2) = 0.100 mol at equilibrium, n(PCl3) = 0.100 mol and n(PCl5) = (0.500 - 0.100) mol = 0.400 mol.",
          "V = 2.00 dm^3 gives [PCl5] = 0.400 / 2.00 = 0.200 mol dm^-3 and [PCl3] = [Cl2] = 0.100 / 2.00 = 0.0500 mol dm^-3.",
          "Kc = [PCl3][Cl2] / [PCl5] = (0.0500 x 0.0500) / 0.200 = 0.0125 mol dm^-3.",
        ],
        workedSolution: [
          "The balanced equation PCl5(g) <=> PCl3(g) + Cl2(g) shows that 1 mol of PCl5 consumed produces 1 mol of PCl3 and 1 mol of Cl2, so if 0.100 mol of Cl2 is present at equilibrium, 0.100 mol of PCl3 must also be present and 0.100 mol of PCl5 must have decomposed.",
          "The equilibrium amount of PCl5 is therefore (0.500 - 0.100) mol = 0.400 mol, and the volume 2.00 dm^3 gives equilibrium concentrations [PCl5] = 0.400 / 2.00 = 0.200 mol dm^-3, [PCl3] = 0.100 / 2.00 = 0.0500 mol dm^-3 and [Cl2] = 0.0500 mol dm^-3.",
          "Hence Kc = [PCl3][Cl2] / [PCl5] = (0.0500 mol dm^-3 x 0.0500 mol dm^-3) / (0.200 mol dm^-3) = 0.00250 / 0.200 = 0.0125 mol dm^-3, which is the numerical value of Kc for this stoichiometric form at that temperature.",
        ],
        commonMistake:
          "Using amounts directly in the Kc expression without converting to concentration, or mis-matching stoichiometry so the change in PCl5 is not equal to the moles of Cl2 formed.",
        tags: ["kc", "equilibrium-amounts", "calculation", "stoichiometry"],
      },
      {
        id: "t7-1-d9",
        noteId: "t7-1",
        kind: "structured",
        difficulty: 3,
        marks: 6,
        stem:
          "For each of the following, done separately to the same reaction at equilibrium at constant temperature, state whether the value of the equilibrium constant K (Kc or Kp as appropriate) changes, and whether the position of equilibrium moves.\n(a) The concentration of a gaseous reactant is increased at constant volume.\n(b) The temperature is increased.\n(c) A catalyst is added.\n(d) For a gas reaction only, the total pressure is increased by reducing the volume at constant temperature.",
        modelAnswerPoints: [
          "(a) K unchanged; position shifts to partially consume the added reactant.",
          "(b) K changes (in general); position shifts according to whether the forward reaction is endothermic or exothermic as written.",
          "(c) K unchanged; position unchanged (catalyst does not shift equilibrium).",
          "(d) K unchanged at constant T; position may shift if gas mole numbers differ between sides.",
        ],
        workedSolution: [
          "(a) If the concentration of a reactant is increased at constant temperature and constant volume, the value of the equilibrium constant does not change because K depends only on temperature for a given reaction equation, but the position of equilibrium moves so that more product is formed until the reaction quotient equals K again, partially opposing the increase in that reactant's concentration.",
          "(b) If the temperature is changed, the value of the equilibrium constant changes in general because the equilibrium position for an exothermic or endothermic reaction responds to heat transfer; the position shifts in the direction that partially absorbs an increase in temperature for an endothermic forward reaction as written, or partially releases heat for an exothermic forward reaction as written, and K therefore takes a new numerical value at the new temperature.",
          "(c) If a catalyst is added, the equilibrium constant at that temperature is unchanged because the catalyst speeds the forward and reverse steps equally and does not alter the equilibrium composition, so the position of equilibrium does not move.",
          "(d) If total pressure is increased by reducing volume at constant temperature, K is unchanged, but the position of equilibrium may shift for a gaseous reaction when the numbers of gas molecules on each side differ, because the partial pressures of all reacting gases rise and the system shifts to reduce the imposed pressure increase if stoichiometry allows.",
        ],
        commonMistake:
          "Claiming that concentration or pressure changes always change K, or that a catalyst shifts the position or increases equilibrium yield.",
        tags: ["kc", "position", "temperature", "catalyst", "pressure"],
      },
      {
        id: "t7-1-d10",
        noteId: "t7-1",
        kind: "structured",
        difficulty: 4,
        marks: 7,
        stem:
          "The Haber process makes ammonia from nitrogen and hydrogen, and the Contact process oxidises sulfur dioxide to sulfur trioxide for sulfuric acid manufacture. For each process, name the main reversible gas equilibrium, state two major conditions chosen industrially, and explain each choice briefly using Le Chatelier's principle and the need for a reasonable rate.",
        modelAnswerPoints: [
          "Haber: N2(g) + 3 H2(g) <=> 2 NH3(g); high pressure favours fewer gas moles on the right; moderate temperature is a compromise because the forward reaction is exothermic (lower T favours NH3) but rate needs a workable temperature; catalyst (iron) gives acceptable rate without changing K.",
          "Contact: 2 SO2(g) + O2(g) <=> 2 SO3(g); excess oxygen (air) shifts right; moderate temperature is a compromise between yield (exothermic forward) and rate; V2O5 catalyst increases rate without shifting equilibrium position.",
          "Both are examples where dynamic equilibrium ideas and opposing constraints (yield vs rate) guide operating conditions.",
        ],
        workedSolution: [
          "In the Haber process the key equilibrium is N2(g) + 3 H2(g) <=> 2 NH3(g), which is exothermic in the forward direction as written; industrially a high total pressure is used because there are fewer moles of gas on the right-hand side than on the left, so Le Chatelier's principle predicts that increasing pressure shifts the position towards ammonia, partially opposing the pressure increase.",
          "The temperature chosen is a compromise: a lower temperature would favour a higher equilibrium yield of ammonia for this exothermic forward reaction, but the rate would be too slow without a catalyst, so a moderate temperature is used with an iron-based catalyst to give an economically viable rate while still obtaining useful conversion, and ammonia is continuously removed when liquefied so that the equilibrium keeps shifting to replace it.",
          "In the Contact process the equilibrium 2 SO2(g) + O2(g) <=> 2 SO3(g) is also exothermic to the right as written; excess oxygen from air is supplied so that the position shifts towards sulfur trioxide, and a vanadium(V) oxide catalyst allows a workable rate at a moderate temperature that would otherwise give an unacceptably slow approach to equilibrium.",
          "In both processes the catalyst increases the rate at which equilibrium is approached but does not change the equilibrium constant at a given temperature, and the conditions illustrate how Le Chatelier's principle guides pressure and composition choices while temperature is balanced against kinetic requirements.",
        ],
        commonMistake:
          "Saying a catalyst increases equilibrium yield, or omitting the compromise between thermodynamically favoured low T and practically required rate for exothermic gas equilibria.",
        tags: ["haber", "contact", "le-chatelier", "industrial"],
      },
    ],
    flashcards: [
      {
        id: "t7-1-f1",
        noteId: "t7-1",
        difficulty: 1,
        front: "What is a reversible reaction?",
        back: "A reaction that can run forwards (reactants to products) and in reverse under the same conditions.",
        examPhrasing: "Same conditions for both directions is the usual exam emphasis.",
        tags: ["reversible", "definition"],
      },
      {
        id: "t7-1-f2",
        noteId: "t7-1",
        difficulty: 1,
        front: "At dynamic equilibrium, what is true about forward and reverse rates?",
        back: "They are equal; macroscopic concentrations stay constant while particles keep reacting.",
        examPhrasing: "Dynamic means rates equal, not zero.",
        tags: ["dynamic-equilibrium", "rates"],
      },
      {
        id: "t7-1-f3",
        noteId: "t7-1",
        difficulty: 2,
        front: "Define mole fraction x_i for a gas in a mixture.",
        back: "x_i = n_i / n_total (moles of that gas divided by total moles of all gases).",
        examPhrasing: "Use amounts in mol, not mass, unless converting via M_r.",
        tags: ["mole-fraction", "definition"],
      },
      {
        id: "t7-1-f4",
        noteId: "t7-1",
        difficulty: 2,
        front: "How is partial pressure related to mole fraction and total pressure?",
        back: "p_i = x_i x P_total for an ideal gas mixture.",
        examPhrasing: "Dalton's law reasoning is often expected in words.",
        tags: ["partial-pressure", "formula"],
      },
      {
        id: "t7-1-f5",
        noteId: "t7-1",
        difficulty: 3,
        front: "Pure solids in heterogeneous gas equilibria — appear in Kp or Kc?",
        back: "Omitted from the quotient (activity taken as 1); only gas (or solute) terms as appropriate appear.",
        examPhrasing: "CaCO3(s) <=> CaO(s) + CO2(g) gives Kp = p(CO2) for the usual convention.",
        tags: ["heterogeneous", "kc", "kp"],
      },
      {
        id: "t7-1-f6",
        noteId: "t7-1",
        difficulty: 3,
        front: "Does adding inert gas at constant volume shift gas equilibrium?",
        back: "No — partial pressures of reacting gases are unchanged; K and position unchanged.",
        examPhrasing: "Distinguish constant V from constant total pressure bleed scenarios.",
        tags: ["inert-gas", "le-chatelier"],
      },
      {
        id: "t7-1-f7",
        noteId: "t7-1",
        difficulty: 4,
        front: "What always changes K when only one variable is tweaked?",
        back: "Temperature (for reactions with Delta H not zero); concentration and pressure changes move position at constant T without changing K.",
        examPhrasing: "Catalyst: faster to equilibrium, same K and same equilibrium amounts.",
        tags: ["kc", "temperature", "catalyst"],
      },
      {
        id: "t7-1-f8",
        noteId: "t7-1",
        difficulty: 4,
        front: "Haber process: why use high pressure?",
        back: "N2 + 3 H2 <=> 2 NH3 has fewer gas moles on the right; high P shifts position towards NH3.",
        examPhrasing: "Link stoichiometry of gas moles to Le Chatelier prediction.",
        tags: ["haber", "pressure"],
      },
      {
        id: "t7-1-f9",
        noteId: "t7-1",
        difficulty: 5,
        front: "Contact process: role of excess air?",
        back: "Increases O2 partial pressure; shifts 2 SO2 + O2 <=> 2 SO3 towards SO3.",
        examPhrasing: "Mention V2O5 catalyst for rate, not for shifting K.",
        tags: ["contact", "composition"],
      },
      {
        id: "t7-1-f10",
        noteId: "t7-1",
        difficulty: 5,
        front: "Exam checkpoint: Kc from amounts in a known V.",
        back: "Convert every species to mol dm^-3, then substitute into Kc = product terms over reactant terms with correct powers.",
        examPhrasing: "Volume slip is the common arithmetic error.",
        tags: ["kc", "exam-technique", "calculation"],
      },
    ],
  },
  "t7-2": {
    noteId: "t7-2",
    drills: [
      {
        id: "t7-2-d1",
        noteId: "t7-2",
        kind: "mcq",
        difficulty: 1,
        stem: "Which formula is paired correctly with sulfuric acid?",
        options: [
          { id: "A", text: "HNO3" },
          { id: "B", text: "H2SO4" },
          { id: "C", text: "HCl" },
          { id: "D", text: "CH3COOH" },
        ],
        correctOptionId: "B",
        explanation:
          "Sulfuric acid is H2SO4; HNO3 is nitric acid, HCl is hydrochloric acid, CH3COOH is ethanoic acid.",
        distractorRationale: {
          A: "Nitric acid, not sulfuric.",
          C: "Hydrochloric acid.",
          D: "Ethanoic (acetic) acid.",
        },
        tags: ["common-acids", "formulas"],
      },
      {
        id: "t7-2-d2",
        noteId: "t7-2",
        kind: "mcq",
        difficulty: 1,
        stem: "Which species is ammonia, a common alkali in aqueous solution?",
        options: [
          { id: "A", text: "NaOH" },
          { id: "B", text: "KOH" },
          { id: "C", text: "NH3" },
          { id: "D", text: "H2SO4" },
        ],
        correctOptionId: "C",
        explanation:
          "Ammonia is NH3; NaOH and KOH are ionic hydroxides; H2SO4 is an acid.",
        distractorRationale: {
          A: "Sodium hydroxide.",
          B: "Potassium hydroxide.",
          D: "Sulfuric acid.",
        },
        tags: ["common-alkalis", "formulas"],
      },
      {
        id: "t7-2-d3",
        noteId: "t7-2",
        kind: "mcq",
        difficulty: 2,
        stem:
          "Equal concentrations of HX(aq) are compared at 298 K. HX is a strong acid in one beaker and a weak acid in the other. Which observation is expected when the same small piece of reactive metal (e.g. magnesium) is added to each, all else being similar?",
        options: [
          { id: "A", text: "Gas forms faster with the weak acid because its pH is higher" },
          { id: "B", text: "Gas forms faster with the strong acid because [H3O+] is higher at the same formal concentration" },
          { id: "C", text: "No gas forms with either until a catalyst is added" },
          { id: "D", text: "Both produce hydrogen at exactly the same initial rate" },
        ],
        correctOptionId: "B",
        explanation:
          "Reactive metal + acid depends on H+(aq)/H3O+ availability; a strong acid of the same formal concentration is more fully dissociated, so initial [H3O+] is higher and the initial rate of H2 formation is faster.",
        distractorRationale: {
          A: "Higher bulk pH for a weak acid corresponds to lower [H3O+] at the same concentration, not faster initial gas evolution versus a strong acid.",
          C: "Magnesium reacts with aqueous acids without a catalyst.",
          D: "Different extents of dissociation mean different initial [H3O+] and different initial rates unless concentrations are adjusted.",
        },
        tags: ["strong-weak", "reactive-metal", "qualitative"],
      },
      {
        id: "t7-2-d4",
        noteId: "t7-2",
        kind: "structured",
        difficulty: 2,
        marks: 6,
        stem:
          "State the names and formulas of the common acids required by the syllabus (hydrochloric, sulfuric, nitric, ethanoic) and the common alkalis (sodium hydroxide, potassium hydroxide, ammonia).",
        modelAnswerPoints: [
          "Hydrochloric acid HCl; sulfuric acid H2SO4; nitric acid HNO3; ethanoic acid CH3COOH.",
          "Sodium hydroxide NaOH; potassium hydroxide KOH; ammonia NH3.",
        ],
        workedSolution: [
          "The common acids listed for recall are hydrochloric acid, HCl, sulfuric acid, H2SO4, nitric acid, HNO3, and ethanoic acid, CH3COOH.",
          "The common alkalis listed for recall are sodium hydroxide, NaOH, potassium hydroxide, KOH, and ammonia, NH3, the last being a molecular species that produces alkaline aqueous solutions by reaction with water.",
        ],
        commonMistake:
          "Misspelling ethanoic as 'ethanoic' vs acetic in words is fine if the formula CH3COOH is correct; confusing H2SO4 with H2SO3 or HNO3 with NO2.",
        tags: ["common-acids", "common-alkalis", "definitions"],
      },
      {
        id: "t7-2-d5",
        noteId: "t7-2",
        kind: "structured",
        difficulty: 3,
        marks: 6,
        stem:
          "Describe the Brønsted–Lowry theory of acids and bases. For the equilibrium CH3COOH(aq) + H2O(l) <=> H3O+(aq) + CH3COO-(aq), identify the Brønsted acid and base on the left-hand side and give both conjugate acid–base pairs.",
        modelAnswerPoints: [
          "Brønsted–Lowry: an acid is a proton donor; a base is a proton acceptor.",
          "Left: CH3COOH donates H+ (acid); H2O accepts H+ (base).",
          "Pairs: CH3COOH / CH3COO- and H3O+ / H2O (or H2O / H3O+ depending on direction labelled).",
        ],
        workedSolution: [
          "The Brønsted–Lowry theory defines an acid as a species that donates protons and a base as a species that accepts protons, so acid–base reactions are interpreted as proton-transfer processes rather than as restricted to oxide/hydroxide behaviour.",
          "In CH3COOH(aq) + H2O(l) <=> H3O^+(aq) + CH3COO^-(aq), ethanoic acid donates a proton to water, so CH3COOH is the Brønsted acid on the left and water is the Brønsted base on the left.",
          "The ethanoate ion CH3COO^- is the conjugate base of CH3COOH, and the oxonium ion H3O^+ is the conjugate acid of H2O, so the two conjugate pairs for this step are CH3COOH with CH3COO^- and H2O with H3O^+.",
        ],
        commonMistake:
          "Calling CH3COO- the acid because it is charged, or pairing H3O+ with OH- as if they were mutual conjugates.",
        tags: ["bronsted-lowry", "conjugate-pairs", "ethanoic-acid"],
      },
      {
        id: "t7-2-d6",
        noteId: "t7-2",
        kind: "structured",
        difficulty: 3,
        marks: 6,
        stem:
          "Describe what is meant by a strong acid and a weak acid in dilute aqueous solution, and describe a strong alkali and a weak alkali in the same context.\nThen explain why, at equal formal concentrations, a strong acid solution shows a lower pH (more acidic) than a weak acid solution when compared using a pH meter, universal indicator, or equivalent, referring to the extent of dissociation.",
        modelAnswerPoints: [
          "Strong acid: essentially fully dissociated into ions in dilute aqueous solution.",
          "Weak acid: only partially dissociated; significant unionised HA remains.",
          "Strong alkali (e.g. NaOH, KOH): fully ionised hydroxide source in dilute solution; weak alkali (NH3): partial reaction with water to give OH-.",
          "Higher [H3O+] from greater dissociation of strong acid at the same formal concentration gives lower pH (pH meter reading or universal indicator colour further toward the red/acid end) because pH = -log10[H3O+].",
        ],
        workedSolution: [
          "A strong acid is an acid that is described as essentially fully dissociated in dilute aqueous solution, so that the equilibrium for HA + H2O lies far to the right and the concentration of molecular HA is negligible compared with the stoichiometric acid concentration.",
          "A weak acid is an acid that is only partially dissociated in dilute aqueous solution, so a substantial concentration of unionised HA remains in equilibrium with H3O^+ and A^-.",
          "A strong alkali such as sodium or potassium hydroxide is treated as fully providing hydroxide ions in dilute aqueous solution, whereas a weak alkali such as ammonia is only partially converted to hydroxide ions by its equilibrium with water.",
          "If two acid solutions have the same formal concentration but one acid is strong and the other weak, the strong acid solution has the higher equilibrium concentration of H3O^+ because dissociation is essentially complete, and since pH is defined as -log10[H3O^+], the strong acid solution gives a lower numerical pH on a pH meter and a universal indicator colour corresponding to a more acidic region than the weak acid at the same formal concentration.",
        ],
        commonMistake:
          "Calling concentrated weak acid 'strong' because it feels corrosive, or equating pH only with concentration labels without linking to [H3O+].",
        tags: ["strong-weak", "ph", "dissociation", "definitions"],
      },
      {
        id: "t7-2-d7",
        noteId: "t7-2",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem:
          "Explain qualitatively why dilute hydrochloric acid (a strong acid) conducts electricity better than dilute ethanoic acid (a weak acid) at the same formal concentration, in terms of ions in solution.",
        modelAnswerPoints: [
          "Conductivity depends on concentration and mobility of ions.",
          "HCl is essentially fully ionised to H3O+ and Cl-, giving a high ion concentration.",
          "CH3COOH is only slightly dissociated, so fewer mobile ions per unit volume at the same formal acid concentration.",
        ],
        workedSolution: [
          "Electrical conductance in an aqueous solution depends on how many ions are present per unit volume and how freely those ions can move, so for two solutions of the same formal acid concentration the one with more ions will generally conduct better if other factors are similar.",
          "Hydrochloric acid is a strong acid and is essentially fully dissociated in dilute solution into H3O^+ and Cl^-, so the ion concentration is high and charge can be carried efficiently through the solution.",
          "Ethanoic acid is a weak acid and is only partially dissociated, so at the same formal concentration there are fewer hydrogen ions and ethanoate ions in equilibrium and therefore fewer charge carriers, which gives measurably lower conductivity than dilute hydrochloric acid at comparable conditions.",
        ],
        commonMistake:
          "Saying 'strong acids have more atoms' instead of referring to degree of ionisation and ion concentration.",
        tags: ["conductivity", "strong-weak", "qualitative"],
      },
      {
        id: "t7-2-d8",
        noteId: "t7-2",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem:
          "(a) Write the ionic equation that represents neutralisation in aqueous solution between hydrogen ions and hydroxide ions.\n(b) Explain that salts are formed when acids react with alkalis, using the reaction between hydrochloric acid and sodium hydroxide as an example (names or formulas may be used).",
        modelAnswerPoints: [
          "(a) H+(aq) + OH-(aq) -> H2O(l) (or H3O+ + OH- -> 2 H2O).",
          "(b) Acid + alkali gives salt + water; HCl + NaOH -> NaCl + H2O, where NaCl is the salt.",
        ],
        workedSolution: [
          "(a) Neutralisation in aqueous solution is understood as the reaction between aqueous hydrogen ions and aqueous hydroxide ions to form water, written as H^+(aq) + OH^-(aq) -> H2O(l), which is equivalent in outcome to H3O^+(aq) + OH^-(aq) -> 2 H2O(l) when H^+ is carried as H3O^+.",
          "(b) When an acid reacts with an alkali in aqueous solution, the characteristic products are a salt and water because the H^+ from the acid combines with OH^- from the alkali while the counter-ions form an ionic salt.",
          "For example, hydrochloric acid reacts with sodium hydroxide according to HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l), in which sodium chloride is the salt formed alongside water.",
        ],
        commonMistake:
          "Omitting state symbols where the question expects them, or showing molecular water as (aq) instead of (l) for the product in neutralisation.",
        tags: ["neutralisation", "salts", "ionic-equation"],
      },
      {
        id: "t7-2-d9",
        noteId: "t7-2",
        kind: "structured",
        difficulty: 4,
        marks: 10,
        stem:
          "For acid–alkali titrations at room temperature, describe how to sketch pH against volume of alkali added for:\n(a) strong acid with strong alkali,\n(b) weak acid with strong alkali,\n(c) strong acid with weak alkali,\n(d) weak acid with weak alkali,\nand for each state the approximate pH at the start (before alkali) and the approximate pH at the equivalence region, relative to pH 7.",
        modelAnswerPoints: [
          "(a) Strong acid–strong alkali: start very low pH; steep rise; finish very high pH; equivalence near pH 7.",
          "(b) Weak acid–strong alkali: start below 7 but higher than (a); steep rise; finish high pH; equivalence above 7 (conjugate base of weak acid is basic in water).",
          "(c) Strong acid–weak alkali: start very low pH; steep rise centred below 7; equivalence below 7 (e.g. NH4+ from NH3 is acidic); excess weak alkali gives lower final pH than excess strong alkali at comparable volumes.",
          "(d) Weak acid–weak alkali: start as in (b); finish lower than strong alkali excess curves; equivalence often near pH 7 with a less steep vertical section than (a).",
          "Axes: pH vertical, volume of alkali horizontal.",
        ],
        workedSolution: [
          "(a) For a strong acid titrated with a strong alkali, pH against volume of alkali added starts at a very low pH well below 7, rises almost vertically through a very narrow volume range at the equivalence point, and then levels to a high pH well above 7 in excess alkali; the centre of the steep section lies close to pH 7 because neither ion of the salt hydrolyses strongly.",
          "(b) For a weak acid with a strong alkali, the starting pH is higher than for a strong acid at the same formal concentration because the weak acid is only partly dissociated, but it is still below 7; near equivalence there is a steep pH rise, and the equivalence region lies above pH 7 because the anion of the weak acid is a base in water, so the solution is weakly alkaline at the stoichiometric point before large excess of strong alkali.",
          "(c) For a strong acid with a weak alkali such as aqueous ammonia, the curve still begins at a very low pH, but the vertical jump near equivalence occurs in a more acidic region than for strong–strong titrations, and the pH at the equivalence point lies below 7 because the dominant salt cation (for example NH4^+) is a weak acid in aqueous solution, so the stoichiometric mixture is acidic rather than neutral.",
          "(d) For a weak acid titrated with a weak alkali, the starting pH resembles the weak-acid case in (b), but the rise near equivalence is usually less sharp than for strong–strong titrations and the equivalence point is often close to pH 7 because both the weak conjugate acid and weak conjugate base hydrolyse; the vertical axis is still pH and the horizontal axis volume of alkali added, with a broader mixed buffering region than in (a).",
          "In every case the sketch should have pH on the vertical axis and volume of alkali added on the horizontal axis, and the chemically important feature is where the near-vertical section sits on the pH scale for each strong/weak combination.",
        ],
        commonMistake:
          "Placing every equivalence at pH 7, or drawing a shallow slope where neutralisation is rapid; confusing weak alkali titrations with strong alkali in the excess region pH.",
        tags: ["titration-curves", "ph", "strong-weak"],
      },
      {
        id: "t7-2-d10",
        noteId: "t7-2",
        kind: "structured",
        difficulty: 4,
        marks: 5,
        stem:
          "An acid–alkali titration is carried out at room temperature. Without using pKa values, explain how you would choose an indicator for (a) a strong acid–strong alkali titration, and (b) a weak acid–strong alkali titration, in terms of where the indicator colour change range should lie relative to the steep part of the pH curve.",
        modelAnswerPoints: [
          "Indicator must change colour across the steep vertical portion of the titration curve so the observed endpoint is close to the equivalence point.",
          "(a) Strong–strong: equivalence near pH 7; indicators such as methyl orange or phenolphthalein can be suitable because their ranges intersect the steep rise near neutrality.",
          "(b) Weak acid–strong alkali: equivalence above pH 7; use an indicator whose range lies in the alkaline part of the steep rise (e.g. phenolphthalein), not one whose range sits mainly in acidic pH.",
        ],
        workedSolution: [
          "An acid–base indicator is a weak acid whose conjugate forms have different colours, and it is suitable for a titration only if its colour change occurs over a pH interval that lies on the very steep portion of the pH–volume curve, because that is where a tiny addition of titrant causes a large pH jump and therefore where the equivalence point is located sharply.",
          "(a) For a strong acid titrated with a strong alkali, the steep rise in pH occurs around pH 7, so either an indicator whose range straddles pH 7 in the alkaline direction, such as phenolphthalein, or one that changes in the acidic-to-neutral region, such as methyl orange, can be chosen provided the colour change interval still overlaps the steep part of the curve for the concentrations used.",
          "(b) For a weak acid titrated with a strong alkali, the steep rise occurs in a pH region above 7, so an indicator such as phenolphthalein, which changes in the roughly pH 8–10 region, is appropriate, whereas methyl orange would change colour too early on the curve and would give a misleading endpoint because its transition lies on the gentle slope before the main pH jump.",
        ],
        commonMistake:
          "Choosing methyl orange for weak acid / strong alkali because it 'works for acids', without comparing the transition range to where the curve is steep.",
        tags: ["indicators", "titration", "strong-weak"],
      },
    ],
    flashcards: [
      {
        id: "t7-2-f1",
        noteId: "t7-2",
        difficulty: 1,
        front: "Formula of nitric acid (common acid).",
        back: "HNO3.",
        examPhrasing: "Pair name nitric acid with HNO3.",
        tags: ["common-acids", "formula"],
      },
      {
        id: "t7-2-f2",
        noteId: "t7-2",
        difficulty: 1,
        front: "Formula of potassium hydroxide (common alkali).",
        back: "KOH.",
        examPhrasing: "Ionic hydroxide: fully ionised strong alkali in dilute solution.",
        tags: ["common-alkalis", "formula"],
      },
      {
        id: "t7-2-f3",
        noteId: "t7-2",
        difficulty: 2,
        front: "Brønsted–Lowry acid in one sentence.",
        back: "A proton (H+) donor.",
        examPhrasing: "Identify donor vs acceptor from the direction of proton transfer.",
        tags: ["bronsted-lowry", "definition"],
      },
      {
        id: "t7-2-f4",
        noteId: "t7-2",
        difficulty: 2,
        front: "Typical pH of pure water at 298 K; acid vs alkali solutions.",
        back: "Pure water pH 7; acid solutions below 7; alkaline above 7.",
        examPhrasing: "Compare relative to 7 at standard temperature context.",
        tags: ["ph", "scale"],
      },
      {
        id: "t7-2-f5",
        noteId: "t7-2",
        difficulty: 3,
        front: "Neutralisation ionic core (H+ notation).",
        back: "H+(aq) + OH-(aq) -> H2O(l).",
        examPhrasing: "Same idea with H3O+ + OH- -> 2 H2O if proton carrier specified.",
        tags: ["neutralisation", "ionic"],
      },
      {
        id: "t7-2-f6",
        noteId: "t7-2",
        difficulty: 3,
        front: "Weak acid / strong alkali titration: equivalence pH vs 7?",
        back: "Above 7 — conjugate base of weak acid dominates; use phenolphthalein-type range.",
        examPhrasing: "Do not place equivalence at 7 for this combination.",
        confusionPair: "weak acid strong alkali vs strong acid strong alkali",
        tags: ["titration", "indicators"],
      },
      {
        id: "t7-2-f7",
        noteId: "t7-2",
        difficulty: 4,
        front: "Why does 0.1 mol dm^-3 HCl conduct better than 0.1 mol dm^-3 CH3COOH?",
        back: "HCl is fully ionised; ethanoic acid only partly — fewer ions to carry current.",
        examPhrasing: "Link degree of dissociation to concentration of mobile ions.",
        tags: ["conductivity", "strong-weak"],
      },
      {
        id: "t7-2-f8",
        noteId: "t7-2",
        difficulty: 4,
        front: "Name the salt formed when hydrochloric acid reacts with sodium hydroxide.",
        back: "Sodium chloride, NaCl (and water).",
        examPhrasing: "Acid + alkali -> salt + water; identify the salt from the ions left after H+ + OH- -> H2O.",
        tags: ["salts", "neutralisation"],
      },
      {
        id: "t7-2-f9",
        noteId: "t7-2",
        difficulty: 5,
        front: "Strong acid / weak alkali titration: where is equivalence pH?",
        back: "Below 7 — conjugate acid of weak base (e.g. NH4+) lowers pH; indicator range should sit on acidic side of steep jump (e.g. methyl orange).",
        examPhrasing: "Mirror reasoning to weak acid / strong alkali but acidic end.",
        tags: ["titration", "indicators"],
      },
      {
        id: "t7-2-f10",
        noteId: "t7-2",
        difficulty: 5,
        front: "Exam checkpoint: labelling conjugate pairs.",
        back: "Acid loses H+ to give its conjugate base on the other side; base gains H+ to give conjugate acid.",
        examPhrasing: "Pairs differ by exactly one proton in Brønsted sense.",
        tags: ["conjugate-pairs", "exam-technique"],
      },
    ],
  },
};
