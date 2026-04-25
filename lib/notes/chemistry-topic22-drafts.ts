import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 22 — subtopics 22.1-22.2 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC22_DRAFTS: Record<string, NoteDraft> = {
  "t22-1": {
    noteId: "t22-1",
    syllabusNotes: [
      {
        id: "ir-core-principle",
        title: "What infrared spectroscopy measures",
        paragraphs: [
          "Infrared (IR) spectroscopy identifies functional groups by measuring which frequencies of infrared radiation are absorbed by a molecule. Absorption occurs when bond vibrations (stretching or bending) match the IR frequency and the vibration changes dipole moment.",
          "An IR spectrum is usually plotted as transmittance (or absorbance) against wavenumber, cm⁻1. The key exam skill is pattern recognition of diagnostic absorptions rather than full structural proof from IR alone.",
          "Different functional groups have characteristic absorption ranges because their bond strengths and atomic masses differ. Stronger bonds generally vibrate at higher frequency (higher wavenumber), while heavier atoms shift absorptions lower.",
        ],
      },
      {
        id: "reading-spectrum-layout",
        title: "How to read an IR spectrum systematically",
        paragraphs: [
          "Use a fixed workflow. Step 1: check for broad versus sharp peaks in high-wavenumber region (for example O-H/N-H signals). Step 2: check around 1700 cm⁻1 for C=O. Step 3: inspect around 2100-2300 cm⁻1 for triple bonds such as C≡N.",
          "Then look for supportive peaks such as C-H stretches (for example alkane C-H around 2850-3000 cm⁻1 and unsaturated/aromatic C-H just above 3000 cm⁻1) and C=C region around about 1600 cm⁻1 where relevant.",
          "The fingerprint region (below about 1500 cm⁻1) is complex and useful for matching against reference spectra, but at this level functional-group identification focuses mainly on the diagnostic regions listed in the data section.",
        ],
      },
      {
        id: "required-functional-groups",
        title: "Required functional-group identifications from IR data",
        paragraphs: [
          "You should identify common groups tested at this stage, including O-H, N-H, C=O, C=C, C-H and C≡N, using the given data ranges in the exam.",
          "A broad strong peak in the O-H region suggests alcohol (and if very broad with C=O present, may indicate carboxylic acid). A medium/sharp N-H absorption supports amine or amide contexts depending on accompanying peaks.",
          "A strong sharp absorption near carbonyl region indicates C=O and strongly narrows possibilities (aldehyde, ketone, carboxylic acid, ester, amide depending on companion peaks). Presence/absence logic is central: for example, no C=O excludes carbonyl families.",
        ],
      },
      {
        id: "combining-ir-with-formula-context",
        title: "Using IR with molecular formula and other evidence",
        paragraphs: [
          "IR usually identifies functional groups, not a unique full structure. Best practice is to combine IR with formula information, unsaturation count, and other spectra if provided.",
          "For example, molecular formula C3H6O with strong C=O and no broad O-H suggests aldehyde or ketone. A broad O-H plus no C=O suggests alcohol. A strong C=O plus broad acid O-H region suggests carboxylic acid.",
          "So high-quality analysis states what the spectrum confirms, what it rules out, and what remains possible. That language aligns directly with Cambridge mark-scheme style.",
        ],
      },
      {
        id: "ir-limitations-and-quality-checks",
        title: "Common limitations and quality checks in IR interpretation",
        paragraphs: [
          "Peak positions can shift slightly with environment, concentration and hydrogen bonding. Always use ranges from the data sheet, not single exact numbers memorised without tolerance.",
          "Weak peaks can be missed and some absorptions overlap. Therefore avoid over-claiming a structure from one ambiguous band.",
          "Exam answers should quote observed region plus functional-group inference, for example 'strong absorption near 1720 cm⁻1 indicates C=O', then cross-check with other expected peaks before concluding.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "IR questions are usually straightforward when you apply range-based logic. Marks are often lost by treating one peak as full proof of a structure or by confusing broad O-H/N-H features with sharp absorptions.",
      items: [
        "Giving a precise single-value claim without using the data-range approach expected by the spectrum table.",
        "Ignoring the broad shape of O-H signals and calling every peak near 3300 cm⁻1 'alcohol' without checking width and accompanying features.",
        "Assigning C=O solely from one peak near 1700 cm⁻1 but failing to rule in/out aldehyde, ketone, acid, ester using companion peaks.",
        "Using the fingerprint region as the only evidence when clearer diagnostic peaks are present in standard testable ranges.",
        "Claiming IR alone proves one unique structure when multiple isomers share the same key functional group.",
      ],
    },
    workedExamples: [
      {
        id: "t22-1-ex1",
        title: "Identifying major functional groups from key peaks",
        problem: [
          "An unknown compound shows strong broad absorption at 3200-3600 cm⁻1 and no strong absorption near 1700 cm⁻1. Suggest the most likely functional group and one major group that is absent.",
        ],
        solution: [
          "A broad strong band at 3200-3600 cm⁻1 is characteristic of O-H stretching in an alcohol context.",
          "Absence of a strong peak near 1700 cm⁻1 indicates no carbonyl C=O group.",
          "So the spectrum is consistent with an alcohol and rules out aldehydes/ketones/carboxylic acids/esters as primary assignments (based on missing C=O).",
        ],
      },
      {
        id: "t22-1-ex2",
        title: "Carbonyl assignment with exclusion logic",
        problem: [
          "A spectrum shows a strong sharp peak at 1725 cm⁻1 and no broad O-H absorption from 2500-3300 cm⁻1. Molecular formula is C4H8O. Suggest likely functional-group class.",
        ],
        solution: [
          "A strong sharp absorption near 1725 cm⁻1 indicates a carbonyl C=O group.",
          "No broad carboxylic-acid O-H band (2500-3300 cm⁻1) argues against carboxylic acid.",
          "For C4H8O with one oxygen and carbonyl present, likely classes are aldehyde or ketone.",
          "So the spectrum supports an aldehyde/ketone assignment and excludes alcohol and carboxylic-acid options.",
        ],
      },
      {
        id: "t22-1-ex3",
        title: "Recognising nitrile-containing compound",
        problem: [
          "An IR spectrum has a medium absorption around 2250 cm⁻1, no broad O-H peak, and no strong C=O peak near 1700 cm⁻1. Suggest a key functional group and explain briefly.",
        ],
        solution: [
          "An absorption near 2250 cm⁻1 is diagnostic for C≡N stretching in nitriles.",
          "No broad O-H excludes alcohol/acid O-H, and no strong C=O excludes carbonyl functionality as a main feature.",
          "Therefore the key identified functional group is nitrile, consistent with a molecule containing -C≡N.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t22-1-st1",
        question:
          "What does IR spectroscopy measure, and what is the usual x-axis unit used in spectra for this course?",
        modelAnswer: [
          "IR spectroscopy measures absorption of infrared radiation by molecular bond vibrations.",
          "The spectrum is usually plotted against wavenumber in cm⁻1.",
        ],
      },
      {
        id: "t22-1-st2",
        question:
          "A spectrum has a strong sharp peak near 1715 cm⁻1. What functional feature does this indicate, and why is this diagnostically useful?",
        modelAnswer: [
          "It indicates a carbonyl C=O group.",
          "This is diagnostically useful because C=O strongly narrows possible classes (for example aldehyde, ketone, acid, ester, amide), especially when combined with other peaks.",
        ],
      },
      {
        id: "t22-1-st3",
        question:
          "How can you distinguish a broad O-H absorption from a typical sharp C-H absorption in qualitative IR interpretation?",
        modelAnswer: [
          "O-H absorption is typically broad and spread across a range, while C-H stretches are usually sharper peaks.",
          "So both peak position and shape (broad versus sharp) should be used together.",
        ],
      },
      {
        id: "t22-1-st4",
        question:
          "Why should IR conclusions usually be combined with molecular formula or other evidence before assigning a full structure?",
        modelAnswer: [
          "Because IR mainly identifies functional groups and several different structures can share the same functional group pattern.",
          "Combining IR with formula and other data avoids over-claiming and gives a defensible final structure assignment.",
        ],
      },
      {
        id: "t22-1-st5",
        question:
          "A spectrum shows no strong C=O peak near 1700 cm⁻1 and no broad O-H band. Give one functional group this evidence can support and two classes it can help exclude.",
        modelAnswer: [
          "It can support a nitrile assignment if a C≡N peak is present near 2250 cm⁻1.",
          "It helps exclude carbonyl-containing classes (for example aldehydes/ketones) and O-H containing classes (for example alcohols/carboxylic acids).",
        ],
      },
    ],
  },

  "t22-2": {
    noteId: "t22-2",
    syllabusNotes: [
      {
        id: "mass-spectrum-core-ideas",
        title: "Reading a mass spectrum: m/e and peak meaning",
        paragraphs: [
          "A mass spectrum plots relative abundance against m/e, where m is ion mass and e is ionic charge. In this syllabus context, most detected ions are singly charged, so m/e values are usually treated as relative mass values.",
          "The tallest peak is the base peak (set to 100 relative abundance). The molecular ion peak, M+., gives the molecular mass (Mᵣ) of the molecule if present and observable.",
          "Fragment peaks come from bond cleavage in molecular ions. Their m/e values help suggest likely fragment ions and therefore support structural interpretation.",
        ],
      },
      {
        id: "isotopes-and-relative-atomic-mass",
        title: "Isotopic abundances and calculating relative atomic mass",
        paragraphs: [
          "Elements with multiple isotopes give multiple peaks in an atomic mass spectrum. Peak heights (or areas) represent relative abundances of each isotope.",
          "Relative atomic mass is the weighted mean: Aᵣ = sum(isotope mass x abundance fraction). If abundances are percentages, divide by 100 (or divide final total by 100).",
          "This same weighted-mean logic can be applied whether data are given as a table of isotopic abundances or directly as mass-spectrum peak ratios.",
        ],
      },
      {
        id: "molecular-ion-and-molecular-mass",
        title: "Using the molecular ion peak to find molecular mass",
        paragraphs: [
          "For simple organic molecules at this level, the molecular ion M+. is the peak corresponding to the intact ionised molecule.",
          "Its m/e value gives molecular mass when charge is +1. So M+. at m/e 72 implies molecular mass 72 for that molecule.",
          "Some molecules show weak or absent molecular ion due to extensive fragmentation, so conclusions should consider the highest sensible m/e peak pattern and question context.",
        ],
      },
      {
        id: "fragmentation-pattern-logic",
        title: "Suggesting identities of simple fragment ions",
        paragraphs: [
          "Fragmentation breaks specific bonds in the molecular ion, giving smaller cations. You should suggest plausible ions for major peaks using familiar motifs such as CH3+ (m/e 15), C2H5+ (m/e 29), and acylium-type ions like CH3CO+ (m/e 43) where relevant.",
          "Reasonable fragment assignment uses both m/e arithmetic and chemical plausibility from the parent structure.",
          "At this level, suggestions are expected to be simple and defensible rather than exhaustive mechanism mapping of every minor peak.",
        ],
      },
      {
        id: "mplus1-and-carbon-count",
        title: "Using the [M + 1]+ peak to estimate number of carbon atoms",
        paragraphs: [
          "The [M + 1]+ peak mainly arises from molecules containing one 13C atom instead of 12C. Since natural abundance of 13C is about 1.1% per carbon atom, the [M + 1]+ intensity relative to M+. scales with carbon count.",
          "Use n approximately equal to ([M + 1]+ / M+) x (100 / 1.1), where n is the number of carbon atoms and intensities are relative peak heights (or areas).",
          "This estimate should be rounded to the nearest sensible integer and checked against molecular mass and possible formulas.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Mass-spec questions reward disciplined peak interpretation. Marks are usually lost by confusing base peak with molecular ion, ignoring isotope weighting, or misusing the [M + 1]+ carbon-count relationship.",
      items: [
        "Treating the tallest peak as molecular ion automatically; the tallest is base peak, not necessarily M+.",
        "Calculating Aᵣ by simple mean of isotope masses instead of weighted mean by abundance.",
        "Assigning fragment identities that do not match the stated m/e values or likely chemistry.",
        "Using [M + 1]+ data without dividing by M+ intensity first in carbon-count estimates.",
        "Forgetting that syllabus-level interpretation assumes mainly singly charged ions, so m/e is usually used directly as relative mass.",
      ],
    },
    workedExamples: [
      {
        id: "t22-2-ex1",
        title: "Calculating relative atomic mass from isotopic abundances",
        problem: [
          "Element X has isotopes at m/e 63 (69.2%) and 65 (30.8%). Calculate Aᵣ of X.",
        ],
        solution: [
          "Use weighted mean: Aᵣ = (63 x 69.2 + 65 x 30.8) / 100.",
          "Aᵣ = (4359.6 + 2002.0) / 100 = 6361.6 / 100 = 63.616.",
          "So Aᵣ(X) is 63.6 to 3 significant figures.",
        ],
      },
      {
        id: "t22-2-ex2",
        title: "Finding molecular mass and suggesting fragments",
        problem: [
          "A spectrum of an organic compound shows peaks at m/e 15, 29, 43 (base peak) and 58 (small peak). Suggest (a) molecular mass and (b) one plausible identity for the m/e 43 fragment.",
        ],
        solution: [
          "The highest small peak at m/e 58 is taken as the molecular ion M+., so molecular mass is 58.",
          "A common fragment at m/e 43 is CH3CO+ (acylium) or C3H7+ depending on structure context.",
          "Given only this data, a plausible suggested fragment identity for m/e 43 is CH3CO+.",
        ],
      },
      {
        id: "t22-2-ex3",
        title: "Estimating carbon count from [M + 1]+",
        problem: [
          "For an organic molecule, M+. peak has relative intensity 100 and [M + 1]+ has relative intensity 6.6. Estimate number of carbon atoms.",
        ],
        solution: [
          "Use n approximately equal to ([M + 1]+ / M+) x (100 / 1.1).",
          "n approximately equal to (6.6 / 100) x (100 / 1.1) = 6.6 / 1.1 = 6.",
          "Estimated number of carbon atoms is 6.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t22-2-st1",
        question:
          "Define the molecular ion peak and base peak in a mass spectrum.",
        modelAnswer: [
          "The molecular ion peak (M+.) corresponds to the intact ionised molecule and gives molecular mass for singly charged ions.",
          "The base peak is the most intense peak and is assigned relative abundance 100.",
        ],
      },
      {
        id: "t22-2-st2",
        question:
          "Why can m/e usually be treated as ion mass for syllabus-level organic mass spectra?",
        modelAnswer: [
          "Because most ions detected at this level are singly charged (+1), so m/e is numerically equal to relative ion mass.",
        ],
      },
      {
        id: "t22-2-st3",
        question:
          "Write the weighted-mean expression used to calculate relative atomic mass from isotopic abundance data.",
        modelAnswer: [
          "Aᵣ = sum(isotope mass x abundance fraction), or if abundances are percentages: Aᵣ = sum(isotope mass x % abundance) / 100.",
        ],
      },
      {
        id: "t22-2-st4",
        question:
          "A spectrum has M+. at m/e 86 and [M + 1]+ intensity 4.4 when M+ is 100. Estimate number of carbon atoms.",
        modelAnswer: [
          "n approximately equal to ([M + 1]+ / M+) x (100 / 1.1) = (4.4 / 100) x (100 / 1.1) = 4.4 / 1.1 = 4.",
          "So the molecule has about 4 carbon atoms.",
        ],
      },
      {
        id: "t22-2-st5",
        question:
          "A compound has major peaks at m/e 31, 45 and a weak peak at m/e 60. What is the likely molecular mass, and why should fragment peaks still be considered?",
        modelAnswer: [
          "Likely molecular mass is 60 from the weak highest-mass molecular ion peak.",
          "Fragment peaks should still be considered because they provide structural clues about how the molecule breaks and help test whether the molecular-ion assignment is chemically plausible.",
        ],
      },
    ],
  },
};
