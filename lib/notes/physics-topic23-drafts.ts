import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 23 — subtopics 23.1–23.2 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC23_DRAFTS: Record<string, NoteDraft> = {
  "t23-1": {
    noteId: "t23-1",
    syllabusNotes: [
      {
        id: "mass-energy-equivalence-and-nuclear-equations",
        title: "Mass-energy equivalence and balancing nuclear equations",
        paragraphs: [
          "The relation E = mc² states that mass and energy are equivalent. A change in mass corresponds to an energy change, with c as the speed of light in free space. Because c² is very large, even a small mass change can correspond to a very large energy change.",
          "In nuclear reactions and decays, you represent changes using nuclear equations that conserve nucleon number A and charge (proton number Z). Balancing both A and Z is essential before any energy calculation.",
          "A balanced equation sets the bookkeeping for all later analysis: what reactants and products exist, whether the process is fusion or fission, and where energy release comes from.",
        ],
      },
      {
        id: "mass-defect-and-binding-energy",
        title: "Mass defect and binding energy",
        paragraphs: [
          "The mass of a bound nucleus is less than the total mass of its separated nucleons. This difference is the mass defect Δm. For a nuclide with Z protons and N neutrons, Δm = (Zmₚ + Nmₙ) - mass of nucleus.",
          "Binding energy is the energy needed to separate a nucleus completely into free nucleons. It is also the energy released when those nucleons bind to form the nucleus.",
          "Binding energy is linked to mass defect by Eᵦ = Δmc². In data-booklet calculations, masses are often given in u and energy in MeV; keep unit conversions consistent.",
        ],
      },
      {
        id: "binding-energy-per-nucleon-curve",
        title: "Binding energy per nucleon and its variation with nucleon number",
        paragraphs: [
          "Binding energy per nucleon is Eᵦ/A. It measures how tightly, on average, each nucleon is bound in a nucleus.",
          "The standard sketch rises steeply from very light nuclei, peaks around intermediate mass numbers (near iron region), and then decreases slowly for very heavy nuclei.",
          "A higher value of Eᵦ/A means a more stable nucleus. The curve therefore explains why energy can be released when light nuclei combine and when very heavy nuclei split.",
        ],
      },
      {
        id: "fusion-fission-and-energy-release",
        title: "Fusion, fission and relevance of binding energy per nucleon",
        paragraphs: [
          "Nuclear fusion is the joining of lighter nuclei to form a heavier nucleus. If the product has higher binding energy per nucleon than the reactants, total binding energy increases and energy is released.",
          "Nuclear fission is the splitting of a heavy nucleus into smaller nuclei. If the products have higher binding energy per nucleon than the original heavy nucleus, energy is again released.",
          "So both fusion (for light nuclei) and fission (for heavy nuclei) release energy for the same core reason: movement toward greater binding energy per nucleon on the curve.",
        ],
      },
      {
        id: "calculating-reaction-energy",
        title: "Calculating released energy from mass change",
        paragraphs: [
          "For any nuclear reaction, find total mass of reactants and total mass of products using the balanced equation. Then compute Δm = mass of reactants - mass of products.",
          "If Δm is positive, mass has decreased and energy released is E = Δmc². If using SI units, Δm must be in kg and E is in J. If using u and MeV, use the relevant conversion factor consistently.",
          "Always state whether your result is energy released per reaction event or for a stated amount of material.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Nuclear-energy questions are usually method marks for conservation checks, clear mass bookkeeping and correct unit handling. Examiners penalise conceptual mix-ups between mass defect, binding energy and reaction energy.",
      items: [
        "Balancing nucleon number but not charge when writing nuclear equations.",
        "Using mass defect formula with atomic masses and nuclear masses mixed inconsistently (for example omitting electron-mass consistency checks when needed).",
        "Assuming larger nucleus always means greater stability, instead of using binding energy per nucleon.",
        "Stating fusion and fission release energy for different reasons; both depend on products having higher binding energy per nucleon.",
        "Using E = mc² with Δm left in u but c in m s⁻¹ without converting units first.",
        "Reporting sign incorrectly: if products have lower mass than reactants, energy is released, not absorbed.",
      ],
    },
    workedExamples: [
      {
        id: "t23-1-ex1",
        title: "Balancing a simple nuclear equation and identifying process",
        problem: [
          "Complete and classify the reaction: ²₁H + ³₁H → ⁴₂He + ?",
        ],
        solution: [
          "Balance nucleon number A first: left side has 2 + 3 = 5, so missing particle must have A = 1.",
          "Balance charge Z: left side has 1 + 1 = 2. Helium product has Z = 2, so missing particle has Z = 0.",
          "The missing particle is a neutron, ¹₀n. Completed equation: ²₁H + ³₁H → ⁴₂He + ¹₀n.",
          "This is fusion because two light nuclei combine to form a heavier nucleus.",
        ],
      },
      {
        id: "t23-1-ex2",
        title: "Mass defect and binding energy of helium-4",
        problem: [
          "Using mₚ = 1.0073 u, mₙ = 1.0087 u and m(⁴₂He nucleus) = 4.0015 u, calculate (a) mass defect and (b) binding energy in MeV. Use 1 u c² = 931.5 MeV.",
        ],
        solution: [
          "For ⁴₂He, Z = 2 and N = 2. Mass of separated nucleons = 2mₚ + 2mₙ = 2(1.0073) + 2(1.0087) = 4.0320 u.",
          "Mass defect Δm = 4.0320 - 4.0015 = 0.0305 u.",
          "Binding energy Eᵦ = Δm c² = 0.0305 x 931.5 = 28.4 MeV (3 s.f.).",
          "So mass defect is 0.0305 u and binding energy is 28.4 MeV.",
        ],
      },
      {
        id: "t23-1-ex3",
        title: "Energy released from reaction mass change",
        problem: [
          "A reaction has total reactant mass 235.0439 u and total product mass 235.0360 u. Calculate energy released per reaction in (a) MeV and (b) J. Use 1 u c² = 931.5 MeV and 1 MeV = 1.60 x 10⁻¹³ J.",
        ],
        solution: [
          "Mass change is Δm = mass of reactants - mass of products = 235.0439 - 235.0360 = 0.0079 u.",
          "Energy released in MeV: E = Δm c² = 0.0079 x 931.5 = 7.36 MeV.",
          "Convert to joules: E = 7.36 x 1.60 x 10⁻¹³ = 1.18 x 10⁻¹² J.",
          "Energy released per reaction is 7.36 MeV or 1.18 x 10⁻¹² J.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t23-1-st1",
        question:
          "Define mass defect and binding energy, then state their relation.",
        modelAnswer: [
          "Mass defect is the difference between the total mass of separated nucleons and the mass of the bound nucleus.",
          "Binding energy is the energy required to separate a nucleus completely into free nucleons (equivalently, energy released when the nucleus forms).",
          "They are related by Eᵦ = Δmc².",
        ],
      },
      {
        id: "t23-1-st2",
        question:
          "Explain what binding energy per nucleon indicates and describe the general shape of its graph against nucleon number.",
        modelAnswer: [
          "Binding energy per nucleon indicates average binding strength (and therefore relative stability) per nucleon in a nucleus.",
          "The curve rises quickly for light nuclei, reaches a maximum at intermediate mass numbers, then decreases slowly for very heavy nuclei.",
        ],
      },
      {
        id: "t23-1-st3",
        question:
          "Why can both fusion of light nuclei and fission of heavy nuclei release energy?",
        modelAnswer: [
          "Both processes can move nuclei toward higher binding energy per nucleon.",
          "When total binding energy of products is greater than that of reactants, the difference is released as reaction energy.",
        ],
      },
      {
        id: "t23-1-st4",
        question:
          "Complete and balance: ²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + ?",
        modelAnswer: [
          "Balance A: left A = 236, right A so far = 141 + 92 = 233, so missing A = 3.",
          "Balance Z: left Z = 92, right Z so far = 56 + 36 = 92, so missing Z = 0.",
          "Missing particles are three neutrons: 3(¹₀n).",
        ],
      },
      {
        id: "t23-1-st5",
        question:
          "A reaction has Δm = 2.5 x 10⁻²⁹ kg per event. Calculate energy released per event using E = c²Δm and c = 3.00 x 10⁸ m s⁻¹.",
        modelAnswer: [
          "E = c²Δm = (3.00 x 10⁸)² x 2.5 x 10⁻²⁹.",
          "E = 9.00 x 10¹⁶ x 2.5 x 10⁻²⁹ = 2.25 x 10⁻¹² J.",
        ],
      },
    ],
  },

  "t23-2": {
    noteId: "t23-2",
    syllabusNotes: [
      {
        id: "random-and-spontaneous-nature",
        title: "Random and spontaneous radioactive decay",
        paragraphs: [
          "Radioactive decay is spontaneous: an unstable nucleus decays without needing an external trigger such as heating, pressure or chemical reaction.",
          "Decay is also random at the level of individual nuclei. You cannot predict which particular nucleus will decay next, only statistical behavior of large numbers.",
          "A large sample gives smooth average trends, while short-interval measurements show fluctuations around the mean count rate.",
        ],
      },
      {
        id: "count-rate-fluctuations",
        title: "Count-rate fluctuations as evidence of randomness",
        paragraphs: [
          "If you record counts in equal short time intervals, the values vary from interval to interval even when conditions are unchanged.",
          "These fluctuations are expected from random decay events and do not by themselves mean instrument fault.",
          "As counting interval is increased, relative fluctuation decreases and the measured rate appears steadier because more events are averaged.",
        ],
      },
      {
        id: "activity-and-decay-constant",
        title: "Activity, decay constant and A = λN",
        paragraphs: [
          "Activity A is the decay rate of a sample: number of decays per unit time. SI unit is becquerel (Bq), where 1 Bq = 1 s⁻¹.",
          "Decay constant λ is the probability per unit time that a given nucleus decays. Its unit is s⁻¹.",
          "For N undecayed nuclei, activity is A = λN. So as N decreases over time, activity also decreases proportionally.",
        ],
      },
      {
        id: "half-life-and-lambda-relation",
        title: "Half-life and relation λ = 0.693/t₁⁄₂",
        paragraphs: [
          "Half-life t₁⁄₂ is the time for number of undecayed nuclei (or activity/count rate after background correction) to fall to half its value.",
          "Half-life is constant for a given nuclide and does not depend on initial amount of sample.",
          "For exponential decay, λ = 0.693/t₁⁄₂. So a shorter half-life means a larger decay constant and faster decay.",
        ],
      },
      {
        id: "exponential-decay-law",
        title: "Exponential decay law and sketching decay curves",
        paragraphs: [
          "Radioactive decay follows x = x₀e⁻λt, where x can represent N, activity A, or received count rate (after appropriate treatment of background).",
          "A decay graph is a downward curve that falls rapidly at first and then more slowly, approaching zero asymptotically.",
          "On such a graph, equal time steps do not subtract equal amounts; instead, equal time steps multiply by the same factor.",
        ],
      },
      {
        id: "using-decay-data-practically",
        title: "Working with measured count-rate data",
        paragraphs: [
          "Measured count rate often includes background count rate. To analyze source decay, subtract background first before applying half-life or exponential relations.",
          "A quick half-life method from data is to locate repeated halving points on a corrected count-rate curve and average corresponding time intervals.",
          "For equation work, keep units consistent: λ in s⁻¹ if time is in s, and in the same reciprocal time unit as used in the exponent.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Decay questions are highly procedural and reward careful data treatment, especially background correction and correct interpretation of exponential behavior.",
      items: [
        "Saying randomness means overall decay law is unpredictable; individual decays are random but large-sample behavior is predictable and exponential.",
        "Using raw count rate directly without subtracting background when the question requires source-only rate.",
        "Treating half-life as the time to decay completely or as an amount-dependent quantity.",
        "Using A = λ/N or other incorrect rearrangements of A = λN.",
        "Using λ = t₁⁄₂/0.693 instead of λ = 0.693/t₁⁄₂.",
        "Drawing decay graphs as straight lines on linear axes when an exponential curve is required.",
      ],
    },
    workedExamples: [
      {
        id: "t23-2-ex1",
        title: "Finding activity and half-life from λ and N",
        problem: [
          "A sample has N = 4.8 x 10¹⁵ undecayed nuclei and decay constant λ = 2.0 x 10⁻⁴ s⁻¹. Calculate (a) activity and (b) half-life.",
        ],
        solution: [
          "Use A = λN: A = (2.0 x 10⁻⁴)(4.8 x 10¹⁵) = 9.6 x 10¹¹ Bq.",
          "Use t₁⁄₂ = 0.693/λ: t₁⁄₂ = 0.693/(2.0 x 10⁻⁴) = 3.47 x 10³ s.",
          "So activity is 9.6 x 10¹¹ Bq and half-life is 3.47 x 10³ s.",
        ],
      },
      {
        id: "t23-2-ex2",
        title: "Using x = x₀e⁻λt for remaining nuclei",
        problem: [
          "A nuclide has λ = 0.0462 h⁻¹. Initially N₀ = 1.20 x 10¹² nuclei. Find number remaining after 18 h.",
        ],
        solution: [
          "Apply N = N₀e⁻λt.",
          "N = 1.20 x 10¹² x exp(-(0.0462)(18)) = 1.20 x 10¹² x e⁻0.8316.",
          "N = 1.20 x 10¹² x 0.435 = 5.22 x 10¹¹.",
          "Remaining nuclei after 18 h are 5.22 x 10¹¹.",
        ],
      },
      {
        id: "t23-2-ex3",
        title: "Half-life from corrected count-rate data",
        problem: [
          "A detector measures 920 counts min⁻¹ from source plus background at t = 0, and 500 counts min⁻¹ at t = 40 min. Background is 80 counts min⁻¹. Estimate half-life assuming exponential decay.",
        ],
        solution: [
          "Correct for background: source-only initial rate = 920 - 80 = 840 counts min⁻¹.",
          "Source-only rate at 40 min = 500 - 80 = 420 counts min⁻¹.",
          "420 is exactly half of 840, so one half-life has elapsed in 40 min.",
          "Estimated half-life is 40 min.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t23-2-st1",
        question:
          "State what is meant by radioactive decay being (a) spontaneous and (b) random.",
        modelAnswer: [
          "(a) Spontaneous means decay occurs without any external trigger.",
          "(b) Random means the exact decay time of an individual nucleus is unpredictable, though statistical behavior of many nuclei is predictable.",
        ],
      },
      {
        id: "t23-2-st2",
        question:
          "Define activity and decay constant, then write the relation between them and number of undecayed nuclei.",
        modelAnswer: [
          "Activity is number of decays per unit time (unit Bq = s⁻¹).",
          "Decay constant is probability per unit time for a nucleus to decay (unit s⁻¹).",
          "Relation: A = λN.",
        ],
      },
      {
        id: "t23-2-st3",
        question:
          "A nuclide has half-life 6.0 h. Calculate decay constant λ in h⁻¹ and in s⁻¹.",
        modelAnswer: [
          "λ = 0.693/t₁⁄₂ = 0.693/6.0 = 0.1155 h⁻¹.",
          "Convert using 1 h = 3600 s: λ = 0.1155/3600 = 3.21 x 10⁻⁵ s⁻¹.",
        ],
      },
      {
        id: "t23-2-st4",
        question:
          "A sample has initial activity 640 Bq and half-life 12 min. Find activity after 36 min.",
        modelAnswer: [
          "36 min is 3 half-lives.",
          "Activity halves each half-life: 640 → 320 → 160 → 80 Bq.",
          "Activity after 36 min is 80 Bq.",
        ],
      },
      {
        id: "t23-2-st5",
        question:
          "A measured count rate from source plus background is 150 s⁻¹. Background alone is 18 s⁻¹. What corrected source count rate should be used in decay calculations, and why?",
        modelAnswer: [
          "Corrected source count rate is 150 - 18 = 132 s⁻¹.",
          "Background counts are not from the source under study, so they must be removed before using decay relations such as half-life or x = x₀e⁻λt.",
        ],
      },
    ],
  },
};
