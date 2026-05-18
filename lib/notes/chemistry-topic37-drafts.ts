import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 37 — subtopics 37.1-37.4 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC37_DRAFTS: Record<string, NoteDraft> = {
  "t37-1": {
    noteId: "t37-1",
    syllabusNotes: [
      {
        id: "tlc-core-setup-and-key-terms",
        title: "Thin-layer chromatography setup and key terms",
        paragraphs: [
          "Thin-layer chromatography (TLC) separates components of a mixture by allowing a solvent to carry substances up a plate coated with a stationary phase. In this syllabus, the stationary phase can be aluminium oxide on a solid support.",
          "The sample mixture is applied as a small spot on the baseline near the bottom of the plate. The plate is then placed in a shallow depth of solvent, which acts as the mobile phase and rises by capillary action.",
          "As the solvent rises, each component moves at its own rate and gives a separate spot. The furthest point reached by the solvent is marked immediately as the solvent front. Baseline and solvent front must both be shown before any Rf value is calculated.",
        ],
        bullets: [
          "Stationary phase: solid adsorbent layer, for example aluminium oxide on support.",
          "Mobile phase: solvent moving through the stationary phase; can be relatively polar or non-polar.",
          "Baseline: origin line where sample is spotted.",
          "Solvent front: furthest distance reached by solvent.",
        ],
      },
      {
        id: "rf-definition-and-calculation",
        title: "Rf value: meaning, formula, and interpretation",
        paragraphs: [
          "The Rf value compares how far a component travels relative to the solvent front under the same conditions. It is defined as: distance moved by solute spot from baseline divided by distance moved by solvent front from baseline.",
          "Rf has no unit and must be between 0 and 1. A value close to 1 means a component moved almost as far as the solvent front; a value close to 0 means it stayed near the baseline.",
          "Rf values are only comparable when stationary phase, solvent composition, temperature, and plate conditions are the same. In exam interpretation, matching Rf values against known standards helps identify components.",
        ],
      },
      {
        id: "why-rf-values-differ",
        title: "Why different substances have different Rf values",
        paragraphs: [
          "A component that interacts strongly with the stationary phase spends more time adsorbed to it, so it moves less and has a lower Rf value.",
          "A component that is more soluble in the mobile phase spends more time dissolved in moving solvent, so it travels further and has a higher Rf value.",
          "So Rf depends on the balance between attraction to stationary phase and solubility in mobile phase. Changing solvent polarity can therefore change the separation pattern.",
        ],
      },
      {
        id: "using-tlc-data-confidently",
        title: "Using TLC evidence to identify or check purity",
        paragraphs: [
          "A pure compound gives one spot in a given solvent system, while an impure sample often gives more than one spot. However, one spot alone does not prove absolute purity because different substances can sometimes share similar Rf values.",
          "For identification, run the unknown alongside known reference compounds on the same plate and in the same solvent. If spots align and have the same Rf under identical conditions, this supports identity.",
          "Strong exam answers explain separation using interactions and solubility, not only by quoting numerical Rf values.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "TLC questions are usually high-yield marks, but they penalise missing definitions and sloppy measurement. Examiners reward clear use of baseline, solvent front, and interaction-based reasoning for Rf trends.",
      items: [
        "Calculating Rf with the wrong distances, such as using distance from top of plate rather than from baseline.",
        "Forgetting to mark solvent front before solvent evaporates, which makes Rf impossible to determine accurately.",
        "Claiming Rf values can be compared across different solvents or plates without identical conditions.",
        "Explaining high Rf only by saying a spot is 'lighter' or 'smaller' instead of discussing stationary-phase interaction and mobile-phase solubility.",
        "Writing Rf values greater than 1, which is physically invalid.",
      ],
    },
    workedExamples: [
      {
        id: "t37-1-ex1",
        title: "Calculating Rf from plate measurements",
        problem: [
          "On a TLC plate, the solvent front moved 6.0 cm from the baseline. One component spot moved 3.9 cm. Calculate Rf and interpret what this says about movement relative to the solvent.",
        ],
        solution: [
          "Rf = distance moved by spot / distance moved by solvent front = 3.9 / 6.0 = 0.65.",
          "An Rf of 0.65 means this component travelled 65% of the solvent-front distance under these conditions.",
          "This indicates moderate movement: it is not strongly retained at the baseline, but it also does not move as far as the least-retained species.",
        ],
      },
      {
        id: "t37-1-ex2",
        title: "Explaining two different Rf values",
        problem: [
          "Two compounds on the same TLC plate give Rf values 0.22 and 0.79. Explain the difference using stationary and mobile phase ideas.",
        ],
        solution: [
          "The compound with Rf 0.22 interacts more strongly with the stationary phase and or is less soluble in the mobile phase, so it moves less.",
          "The compound with Rf 0.79 interacts less strongly with the stationary phase and or is more soluble in the mobile phase, so it is carried further.",
          "The separation arises from different partitioning behavior between stationary and mobile phases during solvent rise.",
        ],
      },
      {
        id: "t37-1-ex3",
        title: "Using references to identify a spot",
        problem: [
          "An unknown sample gives one spot at Rf 0.48. Standards run on the same plate give Rf values: A 0.48, B 0.31, C 0.73. What can be concluded?",
        ],
        solution: [
          "The unknown has the same Rf as standard A under identical conditions, so the unknown is likely to contain A.",
          "Because the unknown shows one spot in this solvent system, it appears pure in this test.",
          "A careful conclusion states this is supportive evidence, not absolute proof, because some compounds can share similar Rf values in one solvent system.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t37-1-st1",
        question:
          "Define stationary phase, mobile phase, baseline, and solvent front for TLC.",
        modelAnswer: [
          "Stationary phase is the adsorbent layer on the plate, for example aluminium oxide on a solid support.",
          "Mobile phase is the solvent that rises through the stationary phase.",
          "Baseline is the origin line where sample spots are placed.",
          "Solvent front is the furthest point reached by solvent on the plate.",
        ],
      },
      {
        id: "t37-1-st2",
        question: "State the Rf expression and one rule about valid Rf values.",
        modelAnswer: [
          "Rf = distance moved by solute spot from baseline divided by distance moved by solvent front from baseline.",
          "Rf has no unit and must lie between 0 and 1.",
        ],
      },
      {
        id: "t37-1-st3",
        question:
          "Why can two substances give different Rf values on the same TLC plate?",
        modelAnswer: [
          "They differ in interaction strength with the stationary phase and in relative solubility in the mobile phase.",
          "Stronger stationary-phase interaction lowers Rf, while greater mobile-phase solubility raises Rf.",
        ],
      },
      {
        id: "t37-1-st4",
        question:
          "A spot travels 2.4 cm and solvent front travels 5.0 cm. Calculate Rf.",
        modelAnswer: [
          "Rf = distance moved by component ÷ distance moved by solvent front.",
          "Rf = 2.4 cm ÷ 5.0 cm = 0.48 (dimensionless, must be less than 1).",
        ],
      },
      {
        id: "t37-1-st5",
        question:
          "Why should unknown and reference compounds be run on the same plate for identification?",
        modelAnswer: [
          "Rf comparison is only valid under identical conditions, including same stationary phase, solvent composition, and temperature.",
          "Running them on the same plate controls these variables and makes matching more reliable.",
        ],
      },
    ],
  },

  "t37-2": {
    noteId: "t37-2",
    syllabusNotes: [
      {
        id: "glc-principle-and-terms",
        title: "Gas-liquid chromatography principle and required terms",
        paragraphs: [
          "In gas-liquid chromatography (GLC), mixture components are vaporised and carried through a column by an unreactive gas, which is the mobile phase.",
          "The stationary phase is a high boiling point non-polar liquid coated on an inert solid support inside the column. Components repeatedly partition between the moving gas and this liquid phase.",
          "Each component spends a different fraction of time in the stationary liquid, so components leave the column at different times. The time from injection to detector peak is the retention time.",
        ],
        bullets: [
          "Stationary phase: high boiling point non-polar liquid on solid support.",
          "Mobile phase: unreactive carrier gas.",
          "Retention time: time taken for a component to reach detector after injection.",
        ],
      },
      {
        id: "interpreting-glc-traces",
        title: "Interpreting chromatograms and percentage composition",
        paragraphs: [
          "A gas-liquid chromatogram plots detector response against time. Each component gives a peak at its characteristic retention time under the chosen operating conditions.",
          "Qualitative identification uses retention time comparison with known standards run under identical conditions.",
          "Quantitative composition is found from peak areas, not peak heights unless specifically calibrated. Percentage composition is obtained by each peak area divided by total area, then multiplied by 100.",
        ],
      },
      {
        id: "why-retention-times-differ",
        title: "Why retention times differ between components",
        paragraphs: [
          "A component with stronger interaction with the stationary liquid phase spends longer retained in the column and therefore has a longer retention time.",
          "A component with weaker interaction spends more time in the carrier gas and travels faster, giving a shorter retention time.",
          "Retention time is therefore controlled by intermolecular interactions with the stationary phase. It is not a fixed property independent of column and conditions.",
        ],
      },
      {
        id: "conditions-and-comparability",
        title: "Using retention data correctly in exam questions",
        paragraphs: [
          "Retention times must be compared only when operating conditions are the same, including column type, stationary phase, temperature program, and carrier-gas flow rate.",
          "In exam data, if standards and unknown are run under identical conditions, matching retention times can identify components, while peak areas provide relative amounts.",
          "Strong answers separate identification logic (retention time) from composition logic (area percentages).",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "GLC questions often give easy marks for definitions and area calculations, but candidates lose credit by mixing up peak height with area or by treating retention time as universally constant.",
      items: [
        "Defining mobile phase as a liquid in GLC instead of an unreactive carrier gas.",
        "Using peak height directly for percentage composition when the question expects peak area interpretation.",
        "Comparing retention times from different columns or temperature conditions as though they were directly equivalent.",
        "Claiming long retention time means higher concentration rather than stronger interaction with stationary phase.",
        "Forgetting to divide by total peak area before converting to percentage composition.",
      ],
    },
    workedExamples: [
      {
        id: "t37-2-ex1",
        title: "Calculating percentage composition from areas",
        problem: [
          "A chromatogram for a three-component mixture gives peak areas: A 120, B 80, C 200. Calculate percentage composition of each component.",
        ],
        solution: [
          "Total area = 120 + 80 + 200 = 400.",
          "A: 120/400 × 100 = 30.0%. B: 80/400 × 100 = 20.0%. C: 200/400 × 100 = 50.0%.",
          "These percentages come from relative peak areas, which are proportional to amount detected.",
        ],
      },
      {
        id: "t37-2-ex2",
        title: "Identifying components from retention times",
        problem: [
          "Standards run under identical conditions have retention times: X 1.8 min, Y 3.2 min, Z 4.9 min. An unknown mixture has peaks at 1.8 min and 4.9 min. Identify likely components.",
        ],
        solution: [
          "The unknown peaks match X and Z retention times under the same conditions, so X and Z are likely present.",
          "No peak appears at 3.2 min, so Y is not indicated by this chromatogram.",
          "Identification is supported by retention-time matching to standards measured with the same method settings.",
        ],
      },
      {
        id: "t37-2-ex3",
        title: "Explaining a long retention time",
        problem: [
          "Compound P has retention time 6.4 min and compound Q has 2.1 min in the same run. Explain the difference.",
        ],
        solution: [
          "P has stronger interaction with the stationary liquid phase, so it is retained longer in the column and reaches the detector later.",
          "Q interacts less strongly, remains more in the mobile gas, and is carried through faster.",
          "So the longer retention time indicates stronger stationary-phase interaction, not simply a larger amount of compound.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t37-2-st1",
        question:
          "State the stationary phase, mobile phase, and retention time definitions for gas-liquid chromatography.",
        modelAnswer: [
          "Stationary phase is a high boiling point non-polar liquid on a solid support in the column.",
          "Mobile phase is an unreactive carrier gas.",
          "Retention time is the time from injection to detector peak for a component.",
        ],
      },
      {
        id: "t37-2-st2",
        question:
          "How is percentage composition of a mixture obtained from a gas-liquid chromatogram?",
        modelAnswer: [
          "Use peak areas: percentage of a component = component peak area divided by total peak area, multiplied by 100.",
        ],
      },
      {
        id: "t37-2-st3",
        question:
          "Why should retention times be compared only under identical chromatographic conditions?",
        modelAnswer: [
          "Retention time depends on method conditions such as column and temperature as well as compound properties.",
          "Only identical conditions make retention-time comparison valid for identification.",
        ],
      },
      {
        id: "t37-2-st4",
        question:
          "A component has longer retention time than another in the same run. What does this imply about interaction with stationary phase?",
        modelAnswer: [
          "It implies stronger interaction with the stationary phase, so the component is retained longer before elution.",
        ],
      },
      {
        id: "t37-2-st5",
        question:
          "A chromatogram has peak areas 45, 30, and 75. Find the percentage for the largest peak.",
        modelAnswer: [
          "Total area = 45 + 30 + 75 = 150.",
          "Largest peak percentage = 75/150 × 100 = 50%.",
        ],
      },
    ],
  },

  "t37-3": {
    noteId: "t37-3",
    syllabusNotes: [
      {
        id: "carbon13-nmr-what-a-spectrum-shows",
        title: "What a carbon-13 NMR spectrum tells you",
        paragraphs: [
          "A carbon-13 NMR spectrum shows how many different carbon environments are present in a molecule. Each distinct environment gives one signal.",
          "Carbons in equivalent chemical environments produce one shared peak. So counting peaks gives direct evidence about molecular symmetry and carbon distinctness.",
          "For simple molecules in this syllabus, the main interpretation focus is number and position of peaks to suggest possible structures.",
        ],
      },
      {
        id: "chemical-shift-and-carbon-environment",
        title: "Chemical shift and local chemical environment",
        paragraphs: [
          "Chemical shift reflects the electronic environment around each carbon atom. Carbons in electron-withdrawing surroundings are generally less shielded and appear at higher chemical shift values.",
          "Carbons in more electron-rich surroundings are more shielded and usually appear at lower chemical shift values.",
          "In structure deduction, you combine peak count with approximate shift positions to decide which structural candidates remain plausible.",
        ],
      },
      {
        id: "deducing-structures-from-peak-pattern",
        title: "Using peak number and shift pattern to deduce structures",
        paragraphs: [
          "Start by counting distinct peaks: this gives the number of non-equivalent carbon environments. Then compare with candidate structures and eliminate those with the wrong number of environments.",
          "Next, use shift positions to assign broad carbon types, such as carbonyl carbons at relatively high shift, aromatic or unsaturated carbons in intermediate-high regions, and saturated alkyl carbons at lower regions.",
          "Final structure proposals should satisfy both criteria: correct number of carbon environments and chemically sensible shift distribution.",
        ],
      },
      {
        id: "predicting-number-of-peaks",
        title: "Predicting number of peaks from structure",
        paragraphs: [
          "To predict a spectrum from a known structure, identify symmetry first. Carbons related by symmetry are equivalent and contribute one peak.",
          "If two carbons are in different bonding or functional-group contexts, they usually produce separate signals.",
          "So peak prediction is a structural-equivalence exercise: count unique carbon environments, not total carbon atoms.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Most errors in ¹³C NMR come from counting atoms instead of environments and from ignoring symmetry. Examiners reward clear elimination logic when selecting among possible structures.",
      items: [
        "Assuming number of ¹³C peaks equals total number of carbons in all cases.",
        "Ignoring molecular symmetry and therefore over-counting distinct carbon environments.",
        "Assigning structures from peak positions without first checking whether peak count matches.",
        "Treating one peak as evidence of one carbon atom rather than one carbon environment.",
        "Giving a final structure that fits one feature but conflicts with another part of the spectrum.",
      ],
    },
    workedExamples: [
      {
        id: "t37-3-ex1",
        title: "Using peak count to reject candidates",
        problem: [
          "A compound C₄H₁₀O gives two peaks in its ¹³C NMR spectrum. Explain how this narrows possible structures.",
        ],
        solution: [
          "Two peaks mean there are two distinct carbon environments in the molecule.",
          "Any C₄H₁₀O isomer with three or four non-equivalent carbons can be rejected immediately.",
          "A plausible candidate must have symmetry or repeated environments that reduce the four carbons to two carbon-environment types.",
        ],
      },
      {
        id: "t37-3-ex2",
        title: "Predicting peak number from symmetry",
        problem: [
          "Predict the number of ¹³C NMR peaks for propanone, CH₃COCH₃.",
        ],
        solution: [
          "Propanone has three carbons, but the two CH₃ carbons are equivalent by symmetry and give one signal.",
          "The carbonyl carbon is in a different environment and gives a second signal.",
          "So propanone gives two ¹³C peaks.",
        ],
      },
      {
        id: "t37-3-ex3",
        title: "Combining count and shift regions",
        problem: [
          "A molecule has three ¹³C peaks, including one at high chemical shift typical of a carbonyl carbon. Suggest a structural feature set that must be present.",
        ],
        solution: [
          "The high-shift peak indicates at least one carbonyl carbon environment.",
          "Total of three peaks means three distinct carbon environments overall.",
          "So any valid structure must include one carbonyl carbon plus two other non-equivalent carbon environments.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t37-3-st1",
        question:
          "What does each peak in a ¹³C NMR spectrum represent?",
        modelAnswer: [
          "Each peak represents a distinct carbon environment, not necessarily a single carbon atom.",
        ],
      },
      {
        id: "t37-3-st2",
        question:
          "Why can a molecule with six carbons show fewer than six ¹³C peaks?",
        modelAnswer: [
          "Some carbons may be chemically equivalent by symmetry, so equivalent carbons give the same signal.",
        ],
      },
      {
        id: "t37-3-st3",
        question:
          "When deducing structure from ¹³C NMR, which should be checked first: peak count or exact assignment of every shift?",
        modelAnswer: [
          "Check peak count first to match number of carbon environments, then use shift regions for detailed structural assignment.",
        ],
      },
      {
        id: "t37-3-st4",
        question:
          "Predict the number of ¹³C peaks for ethane, CH₃CH₃.",
        modelAnswer: [
          "Lower Rf means the component spends less time in the mobile phase relative to adsorption on the stationary phase.",
          "More polar analytes often have lower Rf on silica unless the solvent polarity is increased.",
        ],
      },
      {
        id: "t37-3-st5",
        question:
          "A candidate structure has four distinct carbon environments but the spectrum has three ¹³C peaks. Can this structure be correct?",
        modelAnswer: [
          "No. The structure is inconsistent because predicted carbon-environment count does not match the observed number of ¹³C peaks.",
        ],
      },
    ],
  },

  "t37-4": {
    noteId: "t37-4",
    syllabusNotes: [
      {
        id: "proton-nmr-core-information",
        title: "Core information from a proton NMR spectrum",
        paragraphs: [
          "A proton (¹H) NMR spectrum provides three linked clues: number of proton environments (number of signals), relative numbers of each environment (relative peak areas), and neighboring proton information (splitting pattern).",
          "Chemical shift values identify the type of environment around each proton set. Relative peak areas show how many equivalent protons contribute to each signal ratio.",
          "Splitting follows the n + 1 rule for neighboring equivalent protons on adjacent carbon atoms in this syllabus, limited to singlet, doublet, triplet, quartet, and multiplet interpretation.",
        ],
      },
      {
        id: "chemical-shift-interpretation-and-prediction",
        title: "Using chemical shifts to identify proton environments",
        paragraphs: [
          "Protons near electron-withdrawing groups are generally less shielded and appear at higher δ values. Protons in more electron-rich alkyl environments appear at lower δ values.",
          "In interpretation, use chemical shift data to assign likely proton types first, then check area and splitting consistency before finalising structure.",
          "In prediction questions, describe each distinct proton environment in a given molecule and state its expected relative chemical shift region.",
        ],
      },
      {
        id: "area-ratios-and-splitting-patterns",
        title: "Relative peak areas and splitting patterns (n + 1 rule)",
        paragraphs: [
          "Relative peak areas indicate proton-count ratios between different environments, such as 3:2:1. These ratios are then mapped onto possible fragments in candidate structures.",
          "Splitting pattern reveals the number of equivalent neighboring protons on adjacent carbons. If a proton set has n neighboring equivalent protons, its signal appears as n + 1 lines.",
          "Typical patterns in this syllabus are: singlet (0 neighbors), doublet (1), triplet (2), quartet (3), and multiplet (complex overlap or mixed coupling).",
        ],
      },
      {
        id: "tms-deuterated-solvent-and-d2o-exchange",
        title: "TMS standard, deuterated solvents, and D₂O exchange",
        paragraphs: [
          "Tetramethylsilane (TMS) is used as the chemical-shift reference and is assigned δ = 0.00. Signals are measured relative to this standard.",
          "Deuterated solvents such as CDCl₃ are used so that solvent protons do not produce dominant ¹H signals that interfere with the sample spectrum.",
          "O-H and N-H protons can be identified by proton exchange with D₂O. After adding D₂O, exchangeable O-H or N-H signals reduce or disappear from the ¹H spectrum.",
        ],
      },
      {
        id: "structure-deduction-workflow",
        title: "Reliable workflow for deducing structures from ¹H NMR",
        paragraphs: [
          "Step 1: count signals to find number of proton environments. Step 2: use area ratios to assign relative proton numbers. Step 3: use splitting to infer adjacent proton counts. Step 4: use chemical shifts to place environments near functional groups.",
          "Then test a candidate structure against all clues simultaneously. A correct structure must satisfy signal count, area ratio, splitting pattern, and shift positions together.",
          "This integrated method is essential for questions asking possible structures rather than isolated signal interpretation.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "¹H NMR rewards methodical interpretation. Examiners penalise answers that use only one feature, such as chemical shift alone, while ignoring area ratios or splitting evidence.",
      items: [
        "Using n rather than n + 1 for splitting, giving one fewer line than correct.",
        "Treating peak height as proton count instead of using relative integrated area.",
        "Assigning structure from chemical shift only without checking splitting and area consistency.",
        "Forgetting that TMS defines δ = 0 and that shifts are measured relative to this standard.",
        "Missing O-H or N-H confirmation by D₂O exchange and therefore misassigning broad exchangeable signals.",
      ],
    },
    workedExamples: [
      {
        id: "t37-4-ex1",
        title: "Using area and splitting to identify a fragment",
        problem: [
          "A spectrum shows two main signals: one triplet with relative area 3 and one quartet with relative area 2. Suggest the proton-fragment relationship indicated.",
        ],
        solution: [
          "A triplet area 3 suggests a CH₃ group split by two neighboring protons.",
          "A quartet area 2 suggests a CH₂ group split by three neighboring protons.",
          "Together this is the classic CH₃-CH₂ fragment pattern, where CH₃ and CH₂ are adjacent and mutually split each other.",
        ],
      },
      {
        id: "t37-4-ex2",
        title: "Applying n + 1 rule directly",
        problem: [
          "Predict splitting for a proton environment with (a) 0 adjacent equivalent protons, (b) 1 adjacent equivalent proton, and (c) 2 adjacent equivalent protons.",
        ],
        solution: [
          "Using n + 1:",
          "(a) n = 0 gives singlet.",
          "(b) n = 1 gives doublet.",
          "(c) n = 2 gives triplet.",
          "These are core patterns required for interpretation of simple spectra.",
        ],
      },
      {
        id: "t37-4-ex3",
        title: "Recognising exchangeable protons with D₂O",
        problem: [
          "A sample has a broad signal suspected to be O-H. After adding D₂O, that signal disappears while other signals remain. Interpret this observation.",
        ],
        solution: [
          "Disappearance after D₂O addition indicates the signal came from an exchangeable proton, such as O-H or N-H.",
          "The proton exchanges with deuterium, and deuterium is not detected in the same way in the ¹H spectrum.",
          "So the observation confirms presence of an exchangeable O-H or N-H environment in the molecule.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t37-4-st1",
        question:
          "List the three main interpretation clues provided by a ¹H NMR spectrum.",
        modelAnswer: [
          "Chemical shifts for proton environments, relative peak areas for proton-number ratios, and splitting patterns for adjacent-proton counts via n + 1.",
        ],
      },
      {
        id: "t37-4-st2",
        question:
          "State the n + 1 rule and give the pattern names for n = 0, 1, 2, and 3.",
        modelAnswer: [
          "If a proton set has n adjacent equivalent protons, its signal splits into n + 1 lines.",
          "n = 0 singlet, n = 1 doublet, n = 2 triplet, n = 3 quartet.",
        ],
      },
      {
        id: "t37-4-st3",
        question:
          "Why is TMS used in proton NMR, and what chemical shift value is assigned to it?",
        modelAnswer: [
          "TMS is used as a reference standard for chemical shift measurements.",
          "Its signal is assigned δ = 0.00.",
        ],
      },
      {
        id: "t37-4-st4",
        question:
          "Why are deuterated solvents such as CDCl₃ used when recording ¹H NMR spectra?",
        modelAnswer: [
          "They avoid strong proton signals from ordinary solvent that would interfere with sample peaks.",
          "They therefore allow the sample's ¹H signals to be interpreted clearly.",
        ],
      },
      {
        id: "t37-4-st5",
        question:
          "How can D₂O exchange help identify O-H or N-H protons in a spectrum?",
        modelAnswer: [
          "Exchangeable O-H or N-H protons are replaced by deuterium after D₂O addition.",
          "Their corresponding ¹H signals weaken or disappear, confirming exchangeable proton environments.",
        ],
      },
    ],
  },
};
