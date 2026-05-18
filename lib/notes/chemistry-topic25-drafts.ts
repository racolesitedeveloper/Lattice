import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 25 — subtopics 25.1-25.2 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC25_DRAFTS: Record<string, NoteDraft> = {
  "t25-1": {
    noteId: "t25-1",
    syllabusNotes: [
      {
        id: "conjugate-acid-base-pairs",
        title: "Conjugate acids, conjugate bases and Brønsted-Lowry pairs",
        paragraphs: [
          "A Brønsted-Lowry acid donates H+ and a Brønsted-Lowry base accepts H+. When an acid donates H+, it becomes its conjugate base. When a base accepts H+, it becomes its conjugate acid.",
          "Conjugate acid-base pairs differ by one proton only. For example, CH3COOH / CH3COO- and NH4+ / NH3 are conjugate pairs. In water, H3O+ / H2O and H2O / OH- are also conjugate pairs.",
          "In a proton-transfer equation, identify pairs by tracking where one H+ has moved. This is essential for later buffer and equilibrium expressions because Ka always refers to the acid member of a conjugate pair.",
        ],
      },
      {
        id: "definitions-ph-ka-pka-kw",
        title: "Mathematical definitions of pH, Ka, pKa and Kw",
        paragraphs: [
          "pH is defined as pH = -log10[H+], where [H+] is in mol dm⁻3. Rearranging gives [H+] = 10^(-pH).",
          "For weak acid HA in water, Ka = [H+][A-] / [HA] at equilibrium. pKa is pKa = -log10Ka, so Ka = 10^(-pKa). A lower pKa means a stronger acid.",
          "For water at 25 °C, ionic product Kw = [H+][OH-] = 1.0 × 10⁻14 mol² dm⁻6. Therefore pH + pOH = 14.00 at this temperature.",
          "These definitions are logarithmic and equilibrium-based, so correct unit handling, powers of ten and calculator discipline are critical in examination calculations.",
        ],
      },
      {
        id: "calculating-ph-strong-acids-alkalis-weak-acids",
        title: "Calculating [H+] and pH for strong acids, strong alkalis and weak acids",
        paragraphs: [
          "For strong monoprotic acids, assume complete dissociation: [H+] equals acid concentration. For strong diprotic acids in this syllabus style, use stoichiometric proton yield where instructed (for example [H+] = 2c for complete release of two H+).",
          "For strong alkalis, first find [OH-] from stoichiometry (for example NaOH gives [OH-] = c; Ba(OH)2 gives [OH-] = 2c). Then use [H+] = Kw / [OH-], followed by pH = -log10[H+], or use pOH then 14 - pOH.",
          "For weak acids HA, use Ka = [H+][A-] / [HA]. With initial concentration c and small dissociation assumption, [H+] is often approximated by sqrt(Ka × c). Then pH = -log10[H+].",
          "Always check whether approximation is valid (dissociation small relative to c). If not, solve the equilibrium expression without over-rounding.",
        ],
      },
      {
        id: "buffer-definition-preparation-action-uses",
        title: "Buffer solutions: definition, preparation, equations, and biological use",
        paragraphs: [
          "A buffer solution resists changes in pH when small amounts of acid or alkali are added. It does this using a weak acid/conjugate base pair or weak base/conjugate acid pair in appreciable amounts.",
          "An acidic buffer can be prepared from weak acid HA and a salt containing A- (for example CH3COOH + CH3COONa). A basic buffer can be prepared from weak base B and a salt containing BH+ (for example NH3 + NH4Cl).",
          "Acidic buffer action: A- removes added H+ (A- + H+ -> HA). Weak acid HA removes added OH- (HA + OH- -> A- + H2O). So both added acid and alkali are consumed by buffer components.",
          "A key biological buffer is the hydrogencarbonate system in blood: H2CO3 / HCO3-. Added acid is buffered by HCO3- + H+ -> H2CO3. Added base is buffered by H2CO3 + OH- -> HCO3- + H2O. This helps keep blood pH within a narrow safe range.",
        ],
      },
      {
        id: "buffer-ph-calculation",
        title: "Calculating pH of buffers",
        paragraphs: [
          "For weak acid buffer HA/A-, a common form is pH = pKa + log10([A-]/[HA]) (Henderson-Hasselbalch form). Equivalent Ka-based forms are also accepted when derived correctly.",
          "You may also calculate using moles ratio if volume cancels (same final volume or equal treatment of both species), since concentration ratio equals mole ratio in those cases.",
          "After adding small amounts of acid/base to a buffer, update moles of HA and A- by stoichiometry first, then apply the buffer equation.",
          "Use significant figures and report realistic pH precision; the mark scheme usually expects proper logarithmic arithmetic and clear intermediate logic.",
        ],
      },
      {
        id: "ksp-and-solubility-calculations",
        title: "Solubility product, Ksp expressions, and concentration links",
        paragraphs: [
          "For a sparingly soluble ionic solid, Ksp is the equilibrium constant for dissolution in water, written using ion concentrations raised to stoichiometric powers.",
          "Example: for AgCl(s) ⇌ Ag+(aq) + Cl-(aq), Ksp = [Ag+][Cl-]. For CaF2(s) ⇌ Ca2+ + 2F-, Ksp = [Ca2+][F-]².",
          "From molar solubility s, derive ion concentrations from stoichiometry before substituting into Ksp. For CaF2, [Ca2+] = s and [F-] = 2s, so Ksp = s(2s)² = 4s³.",
          "Conversely, given Ksp and one ion concentration, solve for the other at equilibrium and then infer solubility. This links equilibrium constants directly to precipitation and dissolution behaviour.",
        ],
      },
      {
        id: "common-ion-effect-and-ksp",
        title: "Common ion effect and Ksp-based precipitation reasoning",
        paragraphs: [
          "The common ion effect is decreased solubility of a sparingly soluble salt when a solution already contains one of its ions. By Le Chatelier logic, adding a product ion shifts dissolution equilibrium toward the undissolved solid.",
          "For AgCl, adding NaCl increases [Cl-], so equilibrium [Ag+] must decrease to satisfy Ksp = [Ag+][Cl-]. Therefore less AgCl dissolves.",
          "In calculations, treat common-ion concentration as the known equilibrium concentration (or dominant value if appropriate), then solve Ksp for the other ion concentration and deduce new molar solubility.",
          "This concept is central for predicting precipitation in mixed-ion systems and explains why a sparingly soluble salt may precipitate even when pure-water solubility would seem higher.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Acid-base equilibria questions reward clean definitions, careful logs, and correct stoichiometry before equilibrium substitutions. Most marks are lost by mixing formulas or skipping reaction-step logic in buffers and Ksp problems.",
      items: [
        "Confusing conjugate pair direction, for example calling CH3COOH the conjugate acid of CH3COO- in a step where CH3COOH is actually the acid present before transfer.",
        "Using pH = log[H+] without the negative sign, or mixing base-10 and natural logs.",
        "Treating weak acids as fully dissociated in pH calculations, then overestimating [H+].",
        "Applying buffer equation before adjusting moles for added acid/alkali.",
        "Writing Ksp expressions that include solid concentration terms.",
        "Ignoring stoichiometric powers in Ksp (for example omitting square on [F-] in CaF2).",
        "Stating common ion increases solubility; for sparingly soluble salts it decreases solubility.",
      ],
    },
    workedExamples: [
      {
        id: "t25-1-ex1",
        title: "pH calculations for strong acid, strong alkali and weak acid",
        problem: [
          "Calculate: (a) pH of 0.0200 mol dm⁻3 HCl, (b) pH of 0.0150 mol dm⁻3 NaOH at 25 °C, and (c) pH of 0.100 mol dm⁻3 ethanoic acid with Ka = 1.74 × 10⁻5.",
        ],
        solution: [
          "(a) Strong acid: [H+] = 0.0200 mol dm⁻3. pH = -log10(0.0200) = 1.70.",
          "(b) Strong alkali: [OH-] = 0.0150 mol dm⁻3. pOH = -log10(0.0150) = 1.82, so pH = 14.00 - 1.82 = 12.18.",
          "(c) Weak acid approximation: [H+] ≈ sqrt(Ka × c) = sqrt(1.74 × 10⁻5 × 0.100) = sqrt(1.74 × 10⁻6) = 1.32 × 10⁻3 mol dm⁻3.",
          "Therefore pH = -log10(1.32 × 10⁻3) = 2.88. This is much higher than strong acid of same concentration, consistent with partial dissociation.",
        ],
      },
      {
        id: "t25-1-ex2",
        title: "Buffer calculation and response to added acid",
        problem: [
          "A buffer contains 0.200 mol CH3COOH and 0.300 mol CH3COO- in 1.00 dm³. Given pKa = 4.76, find (a) initial pH and (b) pH after adding 0.0100 mol HCl (assume negligible volume change).",
        ],
        solution: [
          "(a) pH = pKa + log10([A-]/[HA]) = 4.76 + log10(0.300/0.200) = 4.76 + log10(1.50) = 4.94.",
          "(b) Added H+ reacts with acetate: CH3COO- + H+ -> CH3COOH.",
          "New moles: CH3COO- = 0.300 - 0.0100 = 0.290; CH3COOH = 0.200 + 0.0100 = 0.210.",
          "New pH = 4.76 + log10(0.290/0.210) = 4.76 + log10(1.381) = 4.90.",
          "The pH changes only slightly (4.94 to 4.90), showing buffer action.",
        ],
      },
      {
        id: "t25-1-ex3",
        title: "Ksp, common ion effect and solubility comparison",
        problem: [
          "At 25 °C, Ksp(AgCl) = 1.8 × 10⁻10. Calculate molar solubility of AgCl in (a) pure water and (b) 0.0500 mol dm⁻3 NaCl(aq).",
        ],
        solution: [
          "For AgCl(s) ⇌ Ag+ + Cl-, Ksp = [Ag+][Cl-].",
          "(a) In pure water, let solubility = s. Then [Ag+] = s and [Cl-] = s, so Ksp = s².",
          "s = sqrt(1.8 × 10⁻10) = 1.34 × 10⁻5 mol dm⁻3.",
          "(b) In 0.0500 mol dm⁻3 NaCl, [Cl-] is dominated by common ion, so [Cl-] ≈ 0.0500.",
          "Then [Ag+] = Ksp / [Cl-] = (1.8 × 10⁻10)/(0.0500) = 3.6 × 10⁻9 mol dm⁻3.",
          "Thus solubility in NaCl is approximately 3.6 × 10⁻9 mol dm⁻3, far smaller than in pure water due to common ion effect.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t25-1-st1",
        question:
          "Define conjugate acid and conjugate base, then identify the conjugate pairs in NH3 + H2O ⇌ NH4+ + OH-.",
        modelAnswer: [
          "A conjugate acid is formed when a base gains H+. A conjugate base is formed when an acid loses H+.",
          "In NH3 + H2O ⇌ NH4+ + OH-, NH3/NH4+ is one conjugate pair and H2O/OH- is the other.",
        ],
      },
      {
        id: "t25-1-st2",
        question:
          "State mathematical definitions of pH, Ka, pKa and Kw, and write one rearrangement to find [H+] from pH.",
        modelAnswer: [
          "pH = -log10[H+].",
          "Ka = [H+][A-]/[HA] for weak acid equilibrium.",
          "pKa = -log10Ka.",
          "Kw = [H+][OH-] (1.0 × 10⁻14 at 25 °C).",
          "Rearrangement: [H+] = 10^(-pH).",
        ],
      },
      {
        id: "t25-1-st3",
        question:
          "Calculate pH of 0.00250 mol dm⁻3 Ba(OH)2 at 25 °C.",
        modelAnswer: [
          "Ba(OH)2 is a strong base giving [OH-] = 2 × 0.00250 = 0.00500 mol dm⁻3.",
          "pOH = -log10(0.00500) = 2.30.",
          "pH = 14.00 - 2.30 = 11.70 at 25 °C.",
        ],
      },
      {
        id: "t25-1-st4",
        question:
          "Explain with equations how a CH3COOH/CH3COO- buffer resists pH change when small amounts of H+ and OH- are added.",
        modelAnswer: [
          "Added H+ is removed by acetate: CH3COO- + H+ -> CH3COOH.",
          "Added OH- is removed by weak acid: CH3COOH + OH- -> CH3COO- + H2O.",
          "Because added acid/base is consumed, [H+] changes much less than in unbuffered solution.",
        ],
      },
      {
        id: "t25-1-st5",
        question:
          "For CaF2(s) ⇌ Ca2+ + 2F-, write Ksp expression and show how to get Ksp in terms of molar solubility s in pure water.",
        modelAnswer: [
          "Ksp = [Ca2+][F-]².",
          "If molar solubility is s, then [Ca2+] = s and [F-] = 2s.",
          "So Ksp = s(2s)² = 4s³.",
        ],
      },
    ],
  },

  "t25-2": {
    noteId: "t25-2",
    syllabusNotes: [
      {
        id: "partition-coefficient-definition",
        title: "Partition coefficient, Kpc: definition and meaning",
        paragraphs: [
          "A partition coefficient compares equilibrium concentrations of the same solute distributed between two immiscible solvents. It is usually defined as Kpc = [solute] in solvent 1 / [solute] in solvent 2 at fixed temperature.",
          "For this syllabus, the solute must be in the same physical state in both solvents, and chemical form should be unchanged (no reaction/association assumptions unless stated).",
          "Kpc is an equilibrium ratio. A larger Kpc means stronger preference of the solute for the numerator solvent under those conditions.",
        ],
      },
      {
        id: "how-to-calculate-kpc",
        title: "Calculating and using Kpc in two-solvent systems",
        paragraphs: [
          "At equilibrium, convert measured amounts to concentrations in each layer (usually mol dm⁻3), then form the ratio in the stated order. Keep solvent order explicit, because reversing order inverts the value.",
          "If total solute amount and one layer concentration are known, use mass balance with Kpc to find the other concentration and distribution between layers.",
          "Partition calculations underpin solvent extraction design: a solute with high Kpc into an organic solvent can be removed efficiently from water by mixing and phase separation.",
          "Where relevant, repeated small-volume extractions can outperform one large extraction because each extraction re-establishes partition equilibrium.",
        ],
      },
      {
        id: "factors-affecting-kpc-polarity",
        title: "Factors affecting Kpc: polarity of solute and solvents",
        paragraphs: [
          "The key required factor is polarity matching. Polar solutes tend to partition more into polar solvents; non-polar solutes tend to partition more into non-polar solvents.",
          "Hydrogen bonding and specific intermolecular interactions can reinforce this trend: a solute that forms stronger interactions in one solvent has higher concentration there at equilibrium.",
          "So changing either solvent can change Kpc significantly. The ratio is not a universal constant for the solute alone; it depends on the specific solvent pair and temperature.",
          "In exam explanations, phrase this as relative solute-solvent attraction: stronger solvation in one phase shifts equilibrium distribution toward that phase.",
        ],
      },
      {
        id: "using-kpc-in-extraction-planning",
        title: "Applying Kpc to extraction strategy and data interpretation",
        paragraphs: [
          "If Kpc for organic/water is high, extraction into organic solvent is efficient. If Kpc is close to 1, distribution is similar between phases and separation is less efficient.",
          "Given initial solute in water, extraction outcome can be predicted from Kpc and phase volumes. After equilibrium, concentration ratio is fixed by Kpc, so final amounts follow from ratio plus total moles.",
          "Multiple extraction steps with fresh solvent repeatedly remove a fraction of remaining solute, often giving better total recovery than one single extraction of equal total solvent volume.",
          "These quantitative insights are standard applications of partition coefficients in practical organic preparation and purification.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Partition-coefficient questions are usually short but mark-scheme strict: solvent order, concentration basis, and polarity reasoning must all be explicit.",
      items: [
        "Writing Kpc as amount ratio instead of concentration ratio when volumes differ.",
        "Reversing solvent order from the question definition without stating the reciprocal.",
        "Ignoring the condition that solute should be in the same physical state/form in both solvents.",
        "Giving polarity explanation as a slogan only ('like dissolves like') without linking to stronger intermolecular attractions in one solvent.",
        "Treating Kpc as independent of solvent pair or temperature.",
      ],
    },
    workedExamples: [
      {
        id: "t25-2-ex1",
        title: "Direct Kpc calculation from equilibrium concentrations",
        problem: [
          "At 25 °C, iodine is equilibrated between cyclohexane and water. Equilibrium concentrations are [I2]cyclohexane = 0.120 mol dm⁻3 and [I2]water = 8.0 × 10⁻4 mol dm⁻3. Calculate Kpc(cyclohexane/water).",
        ],
        solution: [
          "Use the stated order: Kpc = [I2]cyclohexane / [I2]water.",
          "Kpc = 0.120 / (8.0 × 10⁻4) = 150.",
          "So iodine strongly prefers cyclohexane over water in this solvent pair.",
        ],
      },
      {
        id: "t25-2-ex2",
        title: "Using Kpc with mass balance to find distribution",
        problem: [
          "A solute has Kpc(organic/water) = 4.0. After mixing and equilibration, there are 100 cm³ organic layer and 200 cm³ water layer containing a total of 0.150 mol solute. Find moles in each layer.",
        ],
        solution: [
          "Let concentration in water be cw. Then concentration in organic is 4cw.",
          "Moles in water = cw × 0.200 dm³ = 0.200cw.",
          "Moles in organic = 4cw × 0.100 dm³ = 0.400cw.",
          "Total moles: 0.200cw + 0.400cw = 0.150, so 0.600cw = 0.150 and cw = 0.250 mol dm⁻3.",
          "Therefore moles in water = 0.200 × 0.250 = 0.0500 mol.",
          "Moles in organic = 0.400 × 0.250 = 0.100 mol.",
        ],
      },
      {
        id: "t25-2-ex3",
        title: "Polarity-based comparison of Kpc values",
        problem: [
          "A moderately non-polar organic solute is distributed between water and two separate organic solvents: hexane and ethanol. Predict whether Kpc(hexane/water) is likely greater or smaller than Kpc(ethanol/water), and explain.",
        ],
        solution: [
          "For a non-polar solute, solvation is usually stronger in non-polar hexane than in polar ethanol/water environments.",
          "So the solute tends to partition more into hexane relative to water than into ethanol relative to water.",
          "Therefore Kpc(hexane/water) is likely larger than Kpc(ethanol/water).",
          "This follows polarity matching and relative intermolecular attractions between solute and solvent molecules.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t25-2-st1",
        question:
          "Define partition coefficient, Kpc, for a solute between two immiscible solvents.",
        modelAnswer: [
          "Kpc is the equilibrium ratio of solute concentrations in two immiscible solvents at a fixed temperature, in a stated solvent order, with solute in the same physical form in both phases.",
        ],
      },
      {
        id: "t25-2-st2",
        question:
          "A solute has equilibrium concentrations 0.045 mol dm⁻3 in octan-1-ol and 0.015 mol dm⁻3 in water. Calculate Kpc(octan-1-ol/water).",
        modelAnswer: [
          "Kpc = [solute] in octan-1-ol / [solute] in water at equilibrium.",
          "Kpc = 0.045 / 0.015 = 3.0.",
          "The solute is three times more concentrated in the organic layer than in water at equilibrium.",
        ],
      },
      {
        id: "t25-2-st3",
        question:
          "Explain why changing solvent pair can change numerical Kpc for the same solute.",
        modelAnswer: [
          "Kpc depends on relative solute-solvent interactions in the two phases. Different solvent polarities and intermolecular forces change how strongly the solute is solvated in each phase, so the equilibrium concentration ratio changes.",
        ],
      },
      {
        id: "t25-2-st4",
        question:
          "What common calculation error occurs if phase volumes differ but you use amount ratio instead of concentration ratio for Kpc?",
        modelAnswer: [
          "You get an incorrect Kpc because Kpc is defined from concentrations. When volumes differ, mole ratio is not equal to concentration ratio, so volume terms must be included.",
        ],
      },
      {
        id: "t25-2-st5",
        question:
          "For extraction from water into an organic solvent, why can several small extractions be better than one large extraction of the same total solvent volume?",
        modelAnswer: [
          "Each extraction re-establishes partition equilibrium and removes a fraction of the solute remaining in water. Repeating this process with fresh solvent usually gives a lower final amount left in water than one single extraction with the same total solvent volume.",
        ],
      },
    ],
  },
};
