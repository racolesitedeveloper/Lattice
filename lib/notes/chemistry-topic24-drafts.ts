import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 24 — subtopics 24.1-24.2 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC24_DRAFTS: Record<string, NoteDraft> = {
  "t24-1": {
    noteId: "t24-1",
    syllabusNotes: [
      {
        id: "electrolysis-core-definitions",
        title: "Electrolysis: core meaning and electron flow",
        paragraphs: [
          "Electrolysis is the use of electrical energy to drive a non-spontaneous redox reaction. At the cathode (negative electrode in an electrolytic cell), reduction occurs: species gain electrons. At the anode (positive electrode), oxidation occurs: species lose electrons.",
          "In any electrolysis question, identify all possible ions or molecules present, then decide which species is discharged at each electrode. The discharge choice depends on whether the electrolyte is molten or aqueous, on relative electrode potentials (reactivity), and on concentration effects.",
          "For inert electrodes, the electrode material itself does not react significantly and acts as an electron conductor. For reactive electrodes (for example copper in CuSO₄ electrolysis), the electrode can participate directly in the half-equations.",
        ],
      },
      {
        id: "predicting-products-molten-vs-aqueous",
        title: "Predicting products from molten and aqueous electrolytes",
        paragraphs: [
          "Molten electrolytes contain only ions from the ionic compound, so product prediction is usually direct. In molten PbBr₂, Pb²+ is reduced to Pb at the cathode and Br- is oxidised to Br₂ at the anode.",
          "Aqueous electrolytes include ions from dissolved solute plus H+ and OH- (from water), so electrodes can discharge water-related species instead of solute ions. At the cathode, either metal ions or hydrogen from water can be reduced. At the anode, either anions (especially halides) or hydroxide/water can be oxidised to oxygen.",
          "A practical rule at this level is: concentrated halide solutions tend to give halogen at the anode, while non-halide anions (for example sulfate, nitrate) usually leave oxygen formed from water/OH-. At the cathode in aqueous solution, highly reactive metals usually do not plate out; hydrogen is evolved instead.",
        ],
      },
      {
        id: "redox-series-electrode-potential-and-concentration",
        title: "Using redox series (E values) and concentration to refine predictions",
        paragraphs: [
          "Electrode potentials provide a thermodynamic ranking for reduction tendencies. A more positive reduction potential means the reduction is more favorable under stated conditions. So at the cathode, the species with the more favorable reduction tends to be discharged.",
          "At the anode, oxidation is the reverse of reduction data. You compare likely oxidation processes by considering the corresponding reduction potentials and conditions. High chloride concentration can favor chlorine formation over oxygen in brine electrolysis.",
          "Concentration matters because electrode potential depends on ion concentration. So predicted products can change when concentration changes, even with the same ions present. This links directly to Topic 24.2 and the Nernst equation.",
        ],
      },
      {
        id: "faraday-constant-and-charge-relationships",
        title: "Charge relationships: F = Le and Q = It",
        paragraphs: [
          "The Faraday constant F is the charge carried by one mole of electrons. It is linked to the Avogadro constant L and elementary charge e by F = Le. Using typical values gives F approximately 9.65 x 10⁴ C mol⁻¹.",
          "Quantity of charge passed during electrolysis is Q = It, where Q is in coulombs, I in amperes, and t in seconds. Since 1 A = 1 C s⁻¹, unit consistency is straightforward if time is converted to seconds first.",
          "Moles of electrons transferred are n(e-) = Q / F. This is the bridge from electrical data (current and time) to chemical amount at electrodes.",
        ],
      },
      {
        id: "electrolysis-calculation-framework",
        title: "Mass and gas-volume calculations from electrolysis data",
        paragraphs: [
          "A robust method is: (1) calculate Q from I and t, (2) convert Q to moles of electrons using n(e-) = Q/F, (3) use half-equation stoichiometry to find moles of product, (4) convert to mass (m = nM) or gas volume.",
          "For a metal ion M z+ reduced to M, z moles of electrons produce 1 mole of metal: n(M) = n(e-) / z. For oxygen from hydroxide, 4OH- -> O₂ + 2H₂O + 4e-, so 4 moles of electrons correspond to 1 mole of O₂ formed.",
          "When gas volume is needed, use the molar gas volume stated in the question (for example 24.0 dm³ mol⁻¹ at room conditions unless otherwise provided).",
        ],
      },
      {
        id: "electrolytic-method-for-avogadro-constant",
        title: "Determining the Avogadro constant by an electrolytic method",
        paragraphs: [
          "An electrolytic method can determine L by measuring e and F in linked form L = F/e (or determining e from L and F depending on setup). In school-style treatment, F is obtained experimentally from electrolysis data and e is taken from independent measurement.",
          "A common approach uses silver deposition: pass known current for known time through Ag+ solution with inert electrode, measure mass of Ag deposited, and use Ag+ + e- -> Ag to find moles of electrons passed per measured charge. This yields an experimental Faraday constant.",
          "From F(exp) and known e, calculate L. Good experimental practice requires drying/weighing electrode accurately, keeping current steady, and minimizing side reactions. This explains how electrolysis connects microscopic charge and macroscopic amount of substance.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Electrolysis questions reward clear half-equation logic and disciplined unit handling. Most lost marks come from incorrect product prediction in aqueous systems or electron-stoichiometry errors in calculations.",
      items: [
        "Predicting products from aqueous electrolytes as if they were molten, ignoring competition from H+ / OH- or water.",
        "Forgetting that concentrated halide solutions can give halogen at the anode, while sulfate/nitrate solutions usually give oxygen.",
        "Using Q = It with time left in minutes rather than seconds.",
        "Converting charge directly to product moles without using n(e-) = Q/F and half-equation electron ratios.",
        "Writing F = e/L instead of F = Le, or confusing symbols for Avogadro constant and elementary charge.",
        "Giving gas volume without stating or using the molar gas volume conditions supplied.",
      ],
    },
    workedExamples: [
      {
        id: "t24-1-ex1",
        title: "Predicting electrode products in molten and aqueous electrolysis",
        problem: [
          "Predict products at each electrode for (a) molten PbBr₂ with inert electrodes and (b) concentrated aqueous NaCl (brine) with inert electrodes.",
        ],
        solution: [
          "(a) Molten PbBr₂ contains Pb²+ and Br- only. Cathode: Pb²+ + 2e- -> Pb, so lead forms. Anode: 2Br- -> Br₂ + 2e-, so bromine forms.",
          "(b) Aqueous brine has Na+, Cl-, H2O (thus H+ / OH-). Cathode: Na+ is not discharged preferentially in water; water/H+ is reduced to H₂. Anode: high [Cl-] favors chloride oxidation, so Cl₂ forms rather than O₂ under usual brine conditions.",
          "So products are Pb and Br₂ for molten PbBr₂; H₂ and Cl₂ for concentrated aqueous NaCl with inert electrodes.",
        ],
      },
      {
        id: "t24-1-ex2",
        title: "Mass of metal deposited from current and time",
        problem: [
          "A current of 2.50 A is passed through aqueous CuSO₄ using inert electrodes for 32.2 minutes. Calculate the mass of copper deposited at the cathode. (F = 9.65 x 10⁴ C mol⁻¹, Ar(Cu) = 63.5)",
        ],
        solution: [
          "First find charge: t = 32.2 x 60 = 1932 s, so Q = It = 2.50 x 1932 = 4830 C.",
          "Moles of electrons: n(e-) = Q/F = 4830 / (9.65 x 10⁴) = 5.01 x 10⁻2 mol.",
          "Cathode half-equation is Cu²+ + 2e- -> Cu, so n(Cu) = n(e-) / 2 = 2.50 x 10⁻2 mol.",
          "Mass of Cu = nM = 2.50 x 10⁻2 x 63.5 = 1.59 g (3 s.f.).",
        ],
      },
      {
        id: "t24-1-ex3",
        title: "Gas-volume and Avogadro-constant linkage",
        problem: [
          "A current of 1.20 A is passed through aqueous KOH with inert electrodes for 40.0 minutes. Calculate (a) the volume of O₂ at room conditions (24.0 dm³ mol⁻¹) and (b) L using F = 9.65 x 10⁴ C mol⁻¹ and e = 1.60 x 10⁻19 C.",
        ],
        solution: [
          "Q = It = 1.20 x (40.0 x 60) = 2880 C. So n(e-) = Q/F = 2880 / (9.65 x 10⁴) = 2.98 x 10⁻2 mol.",
          "At the anode, 4OH- -> O₂ + 2H₂O + 4e-, so n(O₂) = n(e-) / 4 = 7.46 x 10⁻3 mol.",
          "Volume O₂ = n x 24.0 = 7.46 x 10⁻3 x 24.0 = 0.179 dm³ (179 cm³).",
          "For Avogadro constant: L = F/e = (9.65 x 10⁴) / (1.60 x 10⁻19) = 6.03 x 10²3 mol⁻¹ (to 3 s.f.).",
        ],
      },
    ],
    selfTest: [
      {
        id: "t24-1-st1",
        question:
          "State what is meant by electrolysis, and identify what process occurs at the cathode and at the anode.",
        modelAnswer: [
          "Electrolysis is the use of electrical energy to drive a non-spontaneous redox reaction.",
          "Reduction occurs at the cathode (gain of electrons). Oxidation occurs at the anode (loss of electrons).",
        ],
      },
      {
        id: "t24-1-st2",
        question:
          "Explain why product prediction in aqueous electrolysis is less straightforward than in molten electrolysis.",
        modelAnswer: [
          "A molten electrolyte contains only ions from the ionic compound, so only those ions compete for discharge.",
          "An aqueous electrolyte also includes H+ / OH- (from water), so water-related electrode reactions can compete with solute ions. Product prediction must consider state, electrode potential/redox series, and concentration.",
        ],
      },
      {
        id: "t24-1-st3",
        question:
          "Given I = 0.800 A for 25.0 min, calculate Q and moles of electrons passed.",
        modelAnswer: [
          "Q = It = 0.800 x (25.0 x 60) = 1200 C.",
          "n(e-) = Q/F = 1200 / (9.65 x 10⁴) = 1.24 x 10⁻2 mol.",
        ],
      },
      {
        id: "t24-1-st4",
        question:
          "Aqueous AgNO₃ is electrolysed with inert electrodes and 0.0100 mol of electrons passes. Calculate mass of Ag deposited. (Ar(Ag) = 108)",
        modelAnswer: [
          "Half-equation: Ag+ + e- -> Ag, so moles of Ag deposited equal moles of electrons = 0.0100 mol.",
          "Mass = nM = 0.0100 x 108 = 1.08 g.",
        ],
      },
      {
        id: "t24-1-st5",
        question:
          "Describe briefly how an electrolytic method can be used to determine L.",
        modelAnswer: [
          "Pass known current for known time through an electrolyte with a known half-equation (for example Ag+ + e- -> Ag), then measure product amount to determine moles of electrons and hence experimental F.",
          "Use L = F/e with known e (or equivalent rearrangement depending on measured quantities) to calculate the Avogadro constant.",
        ],
      },
    ],
  },

  "t24-2": {
    noteId: "t24-2",
    syllabusNotes: [
      {
        id: "definitions-and-sign-conventions",
        title: "Definitions of E° and E°cell",
        paragraphs: [
          "Standard electrode (reduction) potential, E°, is the e.m.f. of a half-cell measured relative to the standard hydrogen electrode under standard conditions, with the half-equation written as a reduction.",
          "Standard cell potential, E°cell, is the e.m.f. of a cell under standard conditions. It is found by combining two standard reduction potentials:",
          "E°cell = E°(cathode) - E°(anode) when both E° values are written in reduction form.",
        ],
      },
      {
        id: "standard-hydrogen-electrode",
        title: "Standard hydrogen electrode (SHE): structure and role",
        paragraphs: [
          "The SHE is the reference half-cell assigned E° = 0.00 V by convention. It uses H₂ gas at standard pressure bubbled over a platinum electrode in contact with H+ (aq) at standard concentration, at standard temperature.",
          "Platinum is inert and provides a conductive surface for the H+ / H₂ redox equilibrium. Because many half-cells cannot be measured absolutely, E° values are always relative to this agreed reference.",
          "To measure any half-cell potential, connect that half-cell to SHE via a salt bridge and high-resistance voltmeter. The sign and magnitude then give E° relative to hydrogen.",
        ],
      },
      {
        id: "methods-for-measuring-half-cells",
        title: "Measuring E° for metal/ion and ion/ion systems",
        paragraphs: [
          "For metal-ion systems, use a metal electrode dipped in solution of its ions at standard concentration, connected to SHE. Example: Cu(s) | Cu²+ (aq) || H+ (aq) | H₂(g) | Pt(s).",
          "For ions of same element in different oxidation states, an inert Pt electrode is used because no solid conductor of the redox couple is available. Example: Pt(s) | Fe²+ (aq), Fe³+ (aq) || SHE.",
          "The measured cell e.m.f. and polarity, with SHE as reference, allow assignment of E° for the unknown half-cell.",
        ],
      },
      {
        id: "using-e-cell-for-polarity-feasibility-reactivity",
        title: "Using E°cell and E° values: polarity, electron flow, feasibility and reactivity",
        paragraphs: [
          "In a spontaneous galvanic cell, electrons flow through the external circuit from anode to cathode. The cathode is the electrode where reduction occurs and has the more positive reduction potential under the stated conditions.",
          "If E°cell is positive for the reaction as written, the reaction is feasible under standard conditions. If E°cell is negative, the reverse direction is feasible under standard conditions.",
          "More positive E° values indicate stronger oxidising agents (greater tendency to be reduced). More negative E° values indicate stronger reducing agents (greater tendency for the reduced form to be oxidised).",
        ],
      },
      {
        id: "half-equation-combination",
        title: "Constructing full redox equations from half-equations",
        paragraphs: [
          "Select the reduction half-equation for the cathode and oxidation half-equation for the anode (reverse one reduction equation if needed). Equalize electron numbers, then add and cancel electrons.",
          "The final full equation must conserve atoms and total charge. In top-band answers, electrode labels and electron-flow direction are made explicit.",
          "This process links numerical E° data to actual chemical equations and predicted observable cell reactions.",
        ],
      },
      {
        id: "qualitative-concentration-effects-on-e",
        title: "Qualitative concentration effects on electrode potential",
        paragraphs: [
          "Electrode potential E is not fixed at E° unless standard conditions apply. Changing concentrations shifts the redox equilibrium and changes E.",
          "For Ox + ze- <=> Red, increasing [Ox] tends to increase E (reduction more favorable), while increasing [Red] tends to decrease E.",
          "So cell voltages drift as reactants are consumed and products accumulate. This is why measured cell e.m.f. can differ from E°cell in non-standard solutions.",
        ],
      },
      {
        id: "nernst-equation-and-applications",
        title: "Nernst equation for quantitative concentration effects",
        paragraphs: [
          "At 298 K for common exam use, one form is E = E° + (0.059/z) log([Ox]/[Red]) for Ox + ze- <=> Red. Equivalent forms may be written using reaction quotients, as long as oxidized/reduced terms are used consistently.",
          "For Cu²+ + 2e- <=> Cu(s), E = E° + (0.059/2) log[Cu²+] because the solid has activity approximately 1 and is omitted from the ratio.",
          "For Fe³+ + e- <=> Fe²+, E = E° + 0.059 log([Fe³+]/[Fe²+]). Quantitative predictions require correct log ratio, z value, and concentration substitution.",
        ],
      },
      {
        id: "gibbs-energy-link",
        title: "Linking cell potential and Gibbs free energy",
        paragraphs: [
          "The thermodynamic link is ΔG° = -nE°cellF, where n is moles of electrons transferred in the balanced cell reaction.",
          "A positive E°cell gives negative ΔG°, indicating feasibility under standard conditions. A negative E°cell gives positive ΔG° for the reaction as written.",
          "This relation ties electrochemical measurements directly to energetic feasibility and is a frequent synthesis point in A Level questions.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "In electrode-potential questions, examiners reward strict sign conventions and full redox logic. Most errors come from reversing half-equations without adjusting signs, or misusing concentration terms in the Nernst expression.",
      items: [
        "Using E°cell = E°(anode) - E°(cathode) while still treating both values as reduction potentials.",
        "Calling the anode positive in a simple galvanic cell; in galvanic cells the anode is negative and supplies electrons.",
        "Choosing electrode polarity from metal reactivity memory only, without checking E° values and reduction direction.",
        "Writing Nernst concentration ratio upside down (using [Red]/[Ox] for a form that requires [Ox]/[Red]).",
        "Including solids in concentration ratios where activity is taken as 1.",
        "Using ΔG° = +nE°cellF instead of the correct negative sign.",
      ],
    },
    workedExamples: [
      {
        id: "t24-2-ex1",
        title: "Calculating E°cell, polarity and electron flow",
        problem: [
          "Given E°(Cu²+/Cu) = +0.34 V and E°(Zn²+/Zn) = -0.76 V, calculate E°cell for the Zn | Zn²+ || Cu²+ | Cu cell. State anode, cathode, and direction of electron flow.",
        ],
        solution: [
          "The more positive reduction potential is Cu²+/Cu, so Cu is cathode (reduction). Zn is anode (oxidation).",
          "E°cell = E°(cathode) - E°(anode) = (+0.34) - (-0.76) = +1.10 V.",
          "Because E°cell is positive, the cell reaction is feasible under standard conditions.",
          "Electrons flow in the external circuit from Zn electrode (anode) to Cu electrode (cathode).",
        ],
      },
      {
        id: "t24-2-ex2",
        title: "Building a redox equation from half-equations and E° values",
        problem: [
          "Use these reduction half-equations to construct the feasible overall reaction and identify oxidising/reducing agents:",
          "Fe³+ + e- -> Fe²+   E° = +0.77 V",
          "I₂ + 2e- -> 2I-      E° = +0.54 V",
        ],
        solution: [
          "The more positive reduction is Fe³+ / Fe²+, so Fe³+ is reduced at cathode.",
          "The other half must run as oxidation: 2I- -> I₂ + 2e-. Multiply iron half-equation by 2 to balance electrons:",
          "2Fe³+ + 2e- -> 2Fe²+",
          "Add to obtain overall equation: 2Fe³+ + 2I- -> 2Fe²+ + I₂.",
          "E°cell = 0.77 - 0.54 = +0.23 V, so feasible under standard conditions.",
          "Fe³+ is oxidising agent (it is reduced). I- is reducing agent (it is oxidised).",
        ],
      },
      {
        id: "t24-2-ex3",
        title: "Applying Nernst and linking to ΔG°",
        problem: [
          "For Fe³+ + e- <=> Fe²+, E° = +0.77 V at 298 K. Calculate E when [Fe³+] = 0.020 mol dm⁻3 and [Fe²+] = 0.200 mol dm⁻3. Then calculate ΔG° for a cell with E°cell = +0.40 V and n = 2.",
        ],
        solution: [
          "Use E = E° + 0.059 log([Fe³+]/[Fe²+]) because z = 1.",
          "Ratio = 0.020/0.200 = 0.10, so log(0.10) = -1.",
          "E = 0.77 + 0.059 x (-1) = 0.711 V.",
          "For Gibbs link: ΔG° = -nE°cellF = -(2)(0.40)(9.65 x 10⁴) = -7.72 x 10⁴ J mol⁻¹ = -77.2 kJ mol⁻¹.",
          "Negative ΔG° confirms standard feasibility for that cell reaction.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t24-2-st1",
        question:
          "Define (a) standard electrode potential and (b) standard cell potential.",
        modelAnswer: [
          "(a) Standard electrode potential E° is the e.m.f. of a half-cell measured relative to the standard hydrogen electrode, with the half-equation written as a reduction under standard conditions.",
          "(b) Standard cell potential E°cell is the e.m.f. of a complete cell under standard conditions.",
        ],
      },
      {
        id: "t24-2-st2",
        question:
          "Describe the standard hydrogen electrode and explain why it is needed.",
        modelAnswer: [
          "SHE uses H₂ gas at standard pressure over a Pt electrode in contact with H+ (aq) at standard concentration and standard temperature, and is assigned E° = 0.00 V.",
          "It is needed as a reference because absolute half-cell potentials are not measured directly; electrode potentials are measured relative to a standard reference.",
        ],
      },
      {
        id: "t24-2-st3",
        question:
          "Given E°(Ag+/Ag) = +0.80 V and E°(Cu²+/Cu) = +0.34 V, calculate E°cell for a spontaneous Ag+/Ag || Cu²+/Cu-type pairing and state electron flow direction.",
        modelAnswer: [
          "Ag+ / Ag has the more positive reduction potential, so Ag electrode is cathode and Cu electrode is anode in the spontaneous direction.",
          "E°cell = 0.80 - 0.34 = +0.46 V.",
          "Electrons flow through the external circuit from Cu (anode) to Ag (cathode).",
        ],
      },
      {
        id: "t24-2-st4",
        question:
          "For Cu²+ + 2e- <=> Cu(s), write the Nernst form at 298 K and predict qualitatively what happens to E when [Cu²+] increases.",
        modelAnswer: [
          "E = E° + (0.059/2) log[Cu²+], since Cu(s) is omitted from the ratio.",
          "If [Cu²+] increases, log[Cu²+] increases, so E increases.",
        ],
      },
      {
        id: "t24-2-st5",
        question:
          "State and use the equation linking ΔG° and E°cell. What is the sign of ΔG° when E°cell is positive?",
        modelAnswer: [
          "The relation is ΔG° = -nE°cellF.",
          "If E°cell is positive, ΔG° is negative (for n and F positive), indicating feasibility under standard conditions for the reaction as written.",
        ],
      },
    ],
  },
};
