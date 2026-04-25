import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 7 — subtopics 7.1-7.2 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC7_DRAFTS: Record<string, NoteDraft> = {
  "t7-1": {
    noteId: "t7-1",
    syllabusNotes: [
      {
        id: "reversible-and-dynamic-equilibrium",
        title: "Reversible reactions, dynamic equilibrium and closed systems",
        paragraphs: [
          "A reversible reaction can proceed in both forward and reverse directions under suitable conditions. It is shown using a double arrow, for example N2(g) + 3H2(g) ⇌ 2NH3(g).",
          "Dynamic equilibrium is reached when the forward and reverse reaction rates are equal. At this point, concentrations of reactants and products remain constant, but both reactions continue at particle level. Equilibrium is therefore dynamic, not static.",
          "A closed system is required so matter cannot enter or leave. If gases escape or extra reactant is continually added, the system cannot settle to true dynamic equilibrium.",
        ],
      },
      {
        id: "le-chatelier-and-equilibrium-position",
        title: "Le Chatelier's principle and qualitative shifts in equilibrium position",
        paragraphs: [
          "Le Chatelier's principle states: if a change is made to a system at dynamic equilibrium, the position of equilibrium moves to minimise this change.",
          "Changing concentration shifts equilibrium to oppose the concentration change. Increasing concentration of a reactant usually shifts position to the right (towards products); removing a product also shifts to the right.",
          "Changing pressure matters for equilibria involving gases. Increasing pressure favours the side with fewer moles of gas; decreasing pressure favours the side with more moles of gas. If total gas moles are equal on both sides, pressure change has no effect on equilibrium position.",
          "Changing temperature shifts equilibrium in the direction that absorbs the temperature change: increasing temperature favours the endothermic direction; decreasing temperature favours the exothermic direction.",
          "A catalyst speeds both forward and reverse reactions by lowering activation energy for both pathways. It does not change equilibrium position, but helps the system reach equilibrium faster.",
        ],
      },
      {
        id: "equilibrium-constants-kc",
        title: "Equilibrium constants in concentration form, Kc",
        paragraphs: [
          "For a reaction aA + bB ⇌ cC + dD, the concentration equilibrium constant is Kc = [C]^c[D]^d / [A]^a[B]^b, using equilibrium concentrations in mol dm⁻3.",
          "Only species whose concentrations change are included (typically gases and solutes). Pure solids and pure liquids are omitted from Kc expressions because their effective concentrations are constant.",
          "A large Kc means products are favoured at equilibrium; a small Kc means reactants are favoured. Kc itself is constant only at fixed temperature.",
        ],
      },
      {
        id: "mole-fraction-partial-pressure-and-kp",
        title: "Mole fraction, partial pressure and Kp expressions",
        paragraphs: [
          "Mole fraction of a gas, xA, is moles of that gas divided by total moles of gas in the mixture. The sum of mole fractions of all gases is 1.",
          "Partial pressure of gas A, pA, is its contribution to total pressure and is given by pA = xA × ptotal. Partial pressures are commonly expressed in kPa or Pa as specified in the question.",
          "For gaseous equilibria, Kp has the same algebraic form as Kc but uses equilibrium partial pressures: Kp = (pC)^c(pD)^d / (pA)^a(pB)^b. Solids and pure liquids are omitted.",
        ],
      },
      {
        id: "using-kc-kp-and-equilibrium-quantities",
        title: "Using Kc and Kp in calculations and predicting effects",
        paragraphs: [
          "Typical calculations involve substituting equilibrium concentrations or partial pressures into the K expression and solving for one unknown. At this level, questions avoid quadratic equations.",
          "If initial amounts are given, first use stoichiometric change to obtain equilibrium amounts, then convert to concentrations or partial pressures before applying Kc or Kp.",
          "The numerical value of Kc or Kp changes only with temperature. Changing concentration or pressure changes equilibrium composition but not K value at constant temperature. A catalyst does not change K.",
        ],
      },
      {
        id: "industrial-equilibrium-haber-contact",
        title: "Industrial equilibria: Haber and Contact processes",
        paragraphs: [
          "In the Haber process, N2 + 3H2 ⇌ 2NH3 is exothermic. Lower temperature favours ammonia yield, but too low a temperature gives an unacceptably slow rate. Industry uses a compromise temperature (about 450 °C), high pressure (about 200 atm) to favour fewer gas moles on the product side, and an iron catalyst for rate.",
          "In the Contact process stage 2, 2SO2 + O2 ⇌ 2SO3 is exothermic with fewer gas moles on the product side. Lower temperature and higher pressure favour SO3, but practical operation uses a compromise temperature (about 450 °C), moderate pressure (about 1-2 atm), and a vanadium(V) oxide catalyst to achieve high rate and good overall economics.",
          "Industrial conditions are chosen by balancing equilibrium yield, reaction rate, energy cost, safety, and plant design constraints, not by maximising one factor alone.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Equilibrium questions reward precision with definitions, K expressions, and cause-effect reasoning. Marks are often lost through mixing up rate changes with equilibrium position changes.",
      items: [
        "Describing equilibrium as 'equal amounts of reactants and products' instead of equal forward and reverse rates with constant concentrations.",
        "Forgetting the closed-system requirement when defining dynamic equilibrium.",
        "Stating that a catalyst increases yield or changes Kc/Kp; catalysts only change how quickly equilibrium is reached.",
        "Including pure solids or liquids in Kc or Kp expressions.",
        "Using initial concentrations in K calculations instead of equilibrium values.",
        "Claiming pressure affects equilibrium position even when total gaseous moles are the same on both sides.",
        "Saying concentration or pressure changes alter K value; only temperature changes K.",
      ],
    },
    workedExamples: [
      {
        id: "t7-1-ex1",
        title: "Applying Le Chatelier's principle qualitatively",
        problem: [
          "For the equilibrium 2SO2(g) + O2(g) ⇌ 2SO3(g), ΔH is negative. Predict the effect on equilibrium position of: (a) increasing pressure, (b) increasing temperature, (c) adding a catalyst.",
        ],
        solution: [
          "There are 3 moles of gas on the left and 2 moles on the right. Increasing pressure favours the side with fewer gaseous moles, so equilibrium shifts right towards SO3.",
          "The forward reaction is exothermic, so increasing temperature favours the endothermic direction (reverse reaction). Equilibrium shifts left, lowering SO3 equilibrium yield.",
          "A catalyst increases rates of both forward and reverse reactions similarly. It does not shift equilibrium position, so equilibrium composition is unchanged; it is reached faster.",
        ],
      },
      {
        id: "t7-1-ex2",
        title: "Writing Kc and Kp expressions correctly",
        problem: [
          "Write expressions for Kc and Kp for the reaction: CaCO3(s) ⇌ CaO(s) + CO2(g).",
        ],
        solution: [
          "Only gaseous species are included because pure solids have constant activity and are omitted.",
          "Kc = [CO2].",
          "Kp = pCO2.",
          "A common error is writing solids in denominator or numerator; this is not done for equilibrium constants at this level.",
        ],
      },
      {
        id: "t7-1-ex3",
        title: "Calculating an equilibrium concentration from Kc",
        problem: [
          "For H2(g) + I2(g) ⇌ 2HI(g), Kc = 64.0 at a certain temperature. At equilibrium, [H2] = 0.200 mol dm⁻3 and [I2] = 0.200 mol dm⁻3. Calculate [HI].",
        ],
        solution: [
          "For this reaction, Kc = [HI]^2 / ([H2][I2]).",
          "Substitute data: 64.0 = [HI]^2 / (0.200 x 0.200) = [HI]^2 / 0.0400.",
          "[HI]^2 = 64.0 x 0.0400 = 2.56.",
          "[HI] = sqrt(2.56) = 1.60 mol dm⁻3.",
          "The required concentration is 1.60 mol dm⁻3.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t7-1-st1",
        question:
          "Define (a) reversible reaction, (b) dynamic equilibrium, and state why a closed system is needed.",
        modelAnswer: [
          "(a) A reversible reaction proceeds in both forward and reverse directions.",
          "(b) Dynamic equilibrium is when forward and reverse rates are equal and concentrations remain constant while both reactions continue.",
          "A closed system is needed so reactants/products cannot escape or be added, allowing equilibrium to establish.",
        ],
      },
      {
        id: "t7-1-st2",
        question:
          "State Le Chatelier's principle and apply it to explain the effect of increasing concentration of a reactant on equilibrium position.",
        modelAnswer: [
          "Le Chatelier's principle: if a change is made to a system at dynamic equilibrium, the equilibrium position moves to minimise that change.",
          "Increasing concentration of a reactant is opposed by using up that reactant, so equilibrium position shifts towards products.",
        ],
      },
      {
        id: "t7-1-st3",
        question:
          "For N2(g) + 3H2(g) ⇌ 2NH3(g), write expressions for Kc and Kp.",
        modelAnswer: [
          "Kc = [NH3]^2 / ([N2][H2]^3).",
          "Kp = (pNH3)^2 / (pN2(pH2)^3).",
        ],
      },
      {
        id: "t7-1-st4",
        question:
          "What is meant by mole fraction and partial pressure? Write the relationship between them for gas A in a mixture.",
        modelAnswer: [
          "Mole fraction xA is moles of A divided by total moles of gas in the mixture.",
          "Partial pressure pA is pressure contribution of gas A.",
          "Relationship: pA = xA x ptotal.",
        ],
      },
      {
        id: "t7-1-st5",
        question:
          "State whether a change in temperature, concentration, pressure, or catalyst changes the value of Kc (or Kp), and identify conditions used in the Haber and Contact processes with one reason for each.",
        modelAnswer: [
          "Only temperature changes the value of Kc or Kp. Concentration, pressure, and catalysts do not change K value at constant temperature.",
          "Haber process uses high pressure (favours fewer gas moles), moderate temperature around 450 °C (rate-yield compromise), and Fe catalyst (faster rate).",
          "Contact process uses moderate temperature around 450 °C (rate-yield compromise), moderate pressure (economic practical choice though higher pressure favours products), and V2O5 catalyst (faster rate).",
        ],
      },
    ],
  },

  "t7-2": {
    noteId: "t7-2",
    syllabusNotes: [
      {
        id: "common-acids-and-alkalis",
        title: "Required common acids and alkalis: names and formulae",
        paragraphs: [
          "Common acids to know are hydrochloric acid, HCl; sulfuric acid, H2SO4; nitric acid, HNO3; and ethanoic acid, CH3COOH.",
          "Common alkalis to know are sodium hydroxide, NaOH; potassium hydroxide, KOH; and ammonia, NH3 (in aqueous solution behaving as a base).",
          "Accurate formula recall is essential for equation writing, titration calculations, and selecting suitable indicators.",
        ],
      },
      {
        id: "bronsted-lowry-core",
        title: "Brønsted-Lowry acids and bases",
        paragraphs: [
          "In Brønsted-Lowry theory, an acid is a proton donor and a base is a proton acceptor.",
          "Acid-base reactions are proton-transfer reactions. For example, HCl + H2O -> H3O+ + Cl- shows HCl donating H+ and water accepting it.",
          "Ammonia acts as a base because NH3 accepts H+ to form NH4+, for example NH3 + H2O ⇌ NH4+ + OH-.",
        ],
      },
      {
        id: "strong-and-weak-dissociation",
        title: "Strong and weak acids or bases in aqueous solution",
        paragraphs: [
          "A strong acid or base is fully dissociated in aqueous solution. A weak acid or base is only partially dissociated at equilibrium.",
          "Strength is about degree of dissociation, not concentration. A dilute strong acid can have lower [H+] than a concentrated weak acid.",
          "Examples: HCl is a strong acid; CH3COOH is a weak acid. NaOH and KOH are strong bases; NH3 is a weak base.",
        ],
      },
      {
        id: "ph-scale-and-measurement",
        title: "pH scale and comparing acidic or alkaline solutions",
        paragraphs: [
          "Pure water at 25 °C has pH 7. Acidic solutions have pH below 7 and alkaline solutions have pH above 7.",
          "Lower pH corresponds to higher hydrogen ion concentration. The pH scale is logarithmic, so a change of 1 pH unit corresponds to a tenfold change in [H+].",
          "pH can be estimated using universal indicator or measured more accurately with a pH meter.",
        ],
      },
      {
        id: "strong-vs-weak-behaviour",
        title: "Behaviour differences between strong and weak acids",
        paragraphs: [
          "At the same concentration, strong acids have higher [H+] and lower pH than weak acids because they dissociate more completely.",
          "Strong acids generally react faster with reactive metals because available H+ concentration is higher. Weak acids can still produce the same total amount of H2 if equal moles of acid are fully consumed, but rate differs.",
          "Conductivity differs because stronger electrolytes produce more ions in solution. Strong acids give higher conductivity than weak acids at the same concentration.",
        ],
      },
      {
        id: "neutralisation-and-salt-formation",
        title: "Neutralisation and salts",
        paragraphs: [
          "Neutralisation occurs when H+(aq) reacts with OH-(aq) to form H2O(l). Net ionic equation: H+(aq) + OH-(aq) -> H2O(l).",
          "A salt is formed when H+ from an acid is replaced by a metal ion or ammonium ion. For example, HCl + NaOH -> NaCl + H2O.",
          "Neutralisation is central to titrations and preparation of pure salts.",
        ],
      },
      {
        id: "titration-curves-and-indicators",
        title: "pH titration curves and indicator choice",
        paragraphs: [
          "Strong acid-strong alkali titration gives a very steep pH change near equivalence and equivalence point near pH 7. Strong acid-weak alkali has equivalence below pH 7. Weak acid-strong alkali has equivalence above pH 7. Weak acid-weak alkali shows a much less steep region and indicator choice is difficult.",
          "An indicator should change colour over a pH range that lies within the steep vertical region of the titration curve near equivalence.",
          "Typical choices: methyl orange is suitable for strong acid-weak alkali titrations; phenolphthalein is suitable for weak acid-strong alkali and also strong acid-strong alkali. Universal indicator is not used for accurate end-point detection in titrations.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Acid-base questions are often high-scoring when definitions and reasoning stay precise. Most lost marks come from confusing strength, concentration, and pH evidence.",
      items: [
        "Defining acids only as substances with pH below 7 instead of proton donors in Brønsted-Lowry terms.",
        "Treating 'strong' as 'concentrated'; these are different ideas.",
        "Assuming weak acids are unreactive or cannot produce hydrogen with reactive metals.",
        "Writing neutralisation as acid + alkali -> salt only, without water or ionic equation when requested.",
        "Choosing indicators by memorised name rather than matching indicator transition range to the steep part of the curve.",
        "Placing equivalence pH at 7 for every titration type.",
      ],
    },
    workedExamples: [
      {
        id: "t7-2-ex1",
        title: "Brønsted-Lowry proton transfer in equations",
        problem: [
          "In the reaction NH3 + HCl -> NH4+ + Cl-, identify the Brønsted-Lowry acid and base and explain your choice.",
        ],
        solution: [
          "HCl is the Brønsted-Lowry acid because it donates a proton, H+.",
          "NH3 is the Brønsted-Lowry base because it accepts that proton to form NH4+.",
          "This is a proton-transfer reaction, which is exactly the Brønsted-Lowry model.",
        ],
      },
      {
        id: "t7-2-ex2",
        title: "Comparing strong and weak acids experimentally",
        problem: [
          "Two 0.100 mol dm⁻3 acids are tested: HCl(aq) and CH3COOH(aq). Predict which has (a) lower pH, (b) faster reaction with Mg ribbon, and (c) higher conductivity. Explain each.",
        ],
        solution: [
          "HCl is strong and fully dissociated, so it gives higher [H+] than CH3COOH, which is weak and partially dissociated.",
          "Therefore HCl has lower pH.",
          "Reaction with Mg depends on available H+ at any moment, so HCl reacts faster.",
          "Conductivity depends on mobile ion concentration, so HCl solution conducts better than CH3COOH at the same concentration.",
        ],
      },
      {
        id: "t7-2-ex3",
        title: "Indicator selection from titration type",
        problem: [
          "Choose a suitable indicator for each titration and justify briefly: (i) HCl with NaOH, (ii) CH3COOH with NaOH, (iii) HCl with NH3(aq).",
        ],
        solution: [
          "(i) Strong acid-strong alkali: phenolphthalein or methyl orange are both suitable because both transition ranges lie within the steep pH jump.",
          "(ii) Weak acid-strong alkali: phenolphthalein is suitable because equivalence is above pH 7 and steep region is in alkaline range.",
          "(iii) Strong acid-weak alkali: methyl orange is suitable because equivalence is below pH 7 and steep region is in acidic range.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t7-2-st1",
        question:
          "State the names and formulae of four common acids and three common alkalis required in this subtopic.",
        modelAnswer: [
          "Acids: hydrochloric acid HCl, sulfuric acid H2SO4, nitric acid HNO3, ethanoic acid CH3COOH.",
          "Alkalis: sodium hydroxide NaOH, potassium hydroxide KOH, ammonia NH3.",
        ],
      },
      {
        id: "t7-2-st2",
        question:
          "Using Brønsted-Lowry theory, define acid and base, then identify acid and base in HNO3 + H2O -> H3O+ + NO3-.",
        modelAnswer: [
          "A Brønsted-Lowry acid is a proton donor; a Brønsted-Lowry base is a proton acceptor.",
          "In this reaction, HNO3 is the acid (donates H+) and H2O is the base (accepts H+).",
        ],
      },
      {
        id: "t7-2-st3",
        question:
          "Explain the difference between strong and weak acids or bases, and state whether concentration determines strength.",
        modelAnswer: [
          "Strong acids/bases are fully dissociated in water; weak acids/bases are partially dissociated at equilibrium.",
          "Strength is not the same as concentration. Concentration tells how much solute is present, while strength tells degree of dissociation.",
        ],
      },
      {
        id: "t7-2-st4",
        question:
          "Write the net ionic equation for neutralisation and state what is meant by a salt in this context.",
        modelAnswer: [
          "Net ionic equation: H+(aq) + OH-(aq) -> H2O(l).",
          "A salt is an ionic compound formed when the hydrogen ion from an acid is replaced by a metal ion or ammonium ion during neutralisation.",
        ],
      },
      {
        id: "t7-2-st5",
        question:
          "Sketch-description question: state the equivalence-point pH trend for strong acid-strong alkali, weak acid-strong alkali, and strong acid-weak alkali titrations, and name a suitable indicator for the last two.",
        modelAnswer: [
          "Strong acid-strong alkali: equivalence near pH 7.",
          "Weak acid-strong alkali: equivalence above pH 7; phenolphthalein is suitable.",
          "Strong acid-weak alkali: equivalence below pH 7; methyl orange is suitable.",
        ],
      },
    ],
  },
};
