import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 11 — subtopics 11.1–11.2 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC11_DRAFTS: Record<string, NoteDraft> = {
  "t11-1": {
    noteId: "t11-1",
    syllabusNotes: [
      {
        id: "alpha-scattering-and-nuclear-model",
        title: "From α-particle scattering to the nuclear atom",
        paragraphs: [
          "In Rutherford’s α-particle scattering experiment, most α-particles passed straight through thin metal foil, a small number were deflected through large angles, and a very few were scattered backward. This pattern cannot be explained by the old plum-pudding model.",
          "The results imply that most of the atom is empty space, while almost all positive charge and most mass are concentrated in a very small central region: the nucleus. Large-angle deflection occurs only when an α-particle passes close to this compact positive nucleus.",
          "A simple nuclear atom model for this course has protons and neutrons in the nucleus, with electrons in orbiting regions around the nucleus. This model is enough for nuclear notation and decay equations in Topic 11.",
        ],
      },
      {
        id: "nucleon-proton-isotope-notation",
        title: "Nucleon number, proton number, isotopes and nuclide notation",
        paragraphs: [
          "Proton number Z (atomic number) is the number of protons in the nucleus. Nucleon number A (mass number) is total number of nucleons: protons plus neutrons. So neutron number N is A - Z.",
          "Isotopes are atoms of the same element with the same proton number but different neutron numbers, so they have different nucleon numbers. Chemical properties are very similar because proton number determines electron arrangement for neutral atoms.",
          "Nuclides are written in the form ᴬ_Z X, where X is chemical symbol, A is nucleon number and Z is proton number. For example, ¹⁴₆C has Z = 6 protons and N = 8 neutrons.",
        ],
      },
      {
        id: "conservation-laws-in-nuclear-processes",
        title: "Conservation of nucleon number and charge in nuclear equations",
        paragraphs: [
          "In nuclear processes, total nucleon number and total charge are conserved. This is the main balancing check for decay and reaction equations at this stage.",
          "When constructing or checking an equation, add A values on each side and add charge numbers on each side. Both totals must match.",
          "A common exam method is to write missing particle symbols by enforcing both conservation conditions simultaneously.",
        ],
      },
      {
        id: "alpha-beta-gamma-properties",
        title: "Composition, mass and charge of α, β and γ radiation",
        paragraphs: [
          "Alpha radiation consists of α-particles, which are helium-4 nuclei (2 protons and 2 neutrons). Their charge is +2e and relative mass is about 4 u.",
          "Beta radiation in this syllabus includes both β⁻ and β⁺. A β⁻ particle is an electron with charge -e and very small mass (about 1/1836 u). A β⁺ particle is a positron with charge +e and the same mass as an electron.",
          "Gamma radiation is electromagnetic radiation from the nucleus. A γ photon has no charge and no rest mass.",
          "Penetrating and ionising behavior differs strongly: α is strongly ionising but least penetrating, β is intermediate, and γ is weakly ionising but highly penetrating.",
        ],
      },
      {
        id: "antiparticles-neutrinos-beta-spectra",
        title: "Antiparticles, neutrinos and β-decay energy distributions",
        paragraphs: [
          "An antiparticle has the same mass as its corresponding particle but opposite charge. The positron is the antiparticle of the electron.",
          "In β⁻ decay, an electron and an electron antineutrino are produced. In β⁺ decay, a positron and an electron neutrino are produced. These neutrino terms are required to conserve lepton number and to account for energy-momentum sharing.",
          "Alpha particles from a given decay have discrete energies, because α decay is effectively a two-body process with fixed initial and final nuclear states. Beta particles have a continuous range of energies because decay energy is shared between the β particle and the (anti)neutrino.",
        ],
      },
      {
        id: "writing-decay-equations-and-u",
        title: "Representing α and β decay and using the unified atomic mass unit",
        paragraphs: [
          "A typical α-decay form is ᴬ_ZX → ᴬ⁻⁴_Z⁻²Y + ⁴₂α. Nucleon number decreases by 4 and proton number decreases by 2 in the daughter nucleus.",
          "For β⁻ decay, nucleon number stays the same while proton number increases by 1: a neutron changes into a proton in quark terms (developed in 11.2). Include the emitted electron and electron antineutrino.",
          "For β⁺ decay, nucleon number stays the same while proton number decreases by 1, with positron and electron neutrino emitted.",
          "The unified atomic mass unit u is a mass unit used in nuclear and particle physics. One u is defined as one twelfth of the mass of a neutral carbon-12 atom in its ground state.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Topic 11.1 usually gives accessible marks if nuclear notation and conservation checks are done methodically. Examiners penalise missing particles, wrong charge balance and imprecise language about β decay.",
      items: [
        "Confusing nucleon number A with proton number Z, then identifying isotopes incorrectly.",
        "Writing β⁻ as coming from an orbital electron. In nuclear decay, β⁻ is created in the nucleus during the transformation.",
        "Omitting neutrino terms in β equations, which breaks conservation arguments and explanation of continuous β energies.",
        "Treating γ as a particle with charge or rest mass. γ is electromagnetic radiation with zero rest mass and zero charge.",
        "Balancing only nucleon number but not charge in decay equations.",
        "Stating that α and β always have single fixed energies. α is discrete for a given decay; β is continuous because energy is shared with a neutrino or antineutrino.",
      ],
    },
    workedExamples: [
      {
        id: "t11-1-ex1",
        title: "Nuclide notation and isotope identification",
        problem: [
          "For the nuclides ²³⁵₉₂U, ²³⁸₉₂U and ²³⁴₉₀Th: state proton number, neutron number and identify any isotope pair.",
        ],
        solution: [
          "For ²³⁵₉₂U: proton number Z = 92, neutron number N = A - Z = 235 - 92 = 143.",
          "For ²³⁸₉₂U: Z = 92, N = 238 - 92 = 146.",
          "For ²³⁴₉₀Th: Z = 90, N = 234 - 90 = 144.",
          "Isotopes must have same Z but different N. Therefore ²³⁵₉₂U and ²³⁸₉₂U are isotopes of uranium.",
        ],
      },
      {
        id: "t11-1-ex2",
        title: "Completing an α-decay equation by conservation",
        problem: [
          "Complete the equation: ²²⁶₈₈Ra → ? + ⁴₂α.",
        ],
        solution: [
          "Conserve nucleon number: daughter A = 226 - 4 = 222.",
          "Conserve charge number: daughter Z = 88 - 2 = 86.",
          "Element with Z = 86 is radon (Rn).",
          "Completed equation: ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂α.",
        ],
      },
      {
        id: "t11-1-ex3",
        title: "β⁻ and β⁺ equations with neutrino terms",
        problem: [
          "Write balanced equations for (a) β⁻ decay of ¹⁴₆C and (b) β⁺ decay of ²²₁₁Na.",
        ],
        solution: [
          "In β⁻ decay, A stays constant and Z increases by 1. So ¹⁴₆C becomes ¹⁴₇N. Include electron and electron antineutrino:",
          "¹⁴₆C → ¹⁴₇N + ⁰₋₁e + ν̄ₑ.",
          "In β⁺ decay, A stays constant and Z decreases by 1. So ²²₁₁Na becomes ²²₁₀Ne. Include positron and electron neutrino:",
          "²²₁₁Na → ²²₁₀Ne + ⁰₊₁e + νₑ.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t11-1-st1",
        question:
          "Explain how Rutherford’s α-scattering results imply both that the nucleus exists and that it is very small compared with atom size.",
        modelAnswer: [
          "Most α-particles pass through foil with little deflection, showing most atomic volume is empty space.",
          "A small fraction are deflected strongly or backward, which requires a concentrated region of positive charge and high mass density to exert large forces at close approach.",
          "Therefore atoms contain a tiny central nucleus that holds most mass and positive charge.",
        ],
      },
      {
        id: "t11-1-st2",
        question:
          "Define proton number and nucleon number, then state whether ³⁵₁₇Cl and ³⁷₁₇Cl are isotopes and why.",
        modelAnswer: [
          "Proton number Z is number of protons in nucleus. Nucleon number A is total number of protons and neutrons.",
          "³⁵₁₇Cl and ³⁷₁₇Cl are isotopes because both have Z = 17 (same element) but different A, hence different neutron numbers.",
        ],
      },
      {
        id: "t11-1-st3",
        question:
          "State the composition, relative mass and charge of α, β⁻, β⁺ and γ radiation.",
        modelAnswer: [
          "α: helium nucleus (2p + 2n), charge +2e, relative mass about 4 u.",
          "β⁻: electron, charge -e, relative mass about 1/1836 u.",
          "β⁺: positron, charge +e, same mass as electron.",
          "γ: electromagnetic photon, zero charge, zero rest mass.",
        ],
      },
      {
        id: "t11-1-st4",
        question:
          "Why are α energies discrete for a given decay while β energies form a continuous spectrum?",
        modelAnswer: [
          "In α decay, available energy is shared between two main products, giving fixed kinetic-energy values for given nuclear states.",
          "In β decay, energy is shared between β particle and emitted neutrino or antineutrino (and recoil nucleus), so the β particle can emerge with a range of energies.",
        ],
      },
      {
        id: "t11-1-st5",
        question:
          "Complete and balance: (a) ²¹⁰₈₄Po → ? + ⁴₂α, (b) ¹³₇N → ? + ⁰₊₁e + νₑ.",
        modelAnswer: [
          "(a) Daughter A = 210 - 4 = 206, daughter Z = 84 - 2 = 82, so ²¹⁰₈₄Po → ²⁰⁶₈₂Pb + ⁴₂α.",
          "(b) In β⁺ decay, A unchanged and Z decreases by 1: ¹³₇N → ¹³₆C + ⁰₊₁e + νₑ.",
        ],
      },
    ],
  },

  "t11-2": {
    noteId: "t11-2",
    syllabusNotes: [
      {
        id: "quarks-as-fundamental-particles",
        title: "Quarks as fundamental particles and their flavours",
        paragraphs: [
          "A fundamental particle is one with no known internal structure at this level of description. Quarks are fundamental particles in the Standard Model description used for A Level.",
          "There are six quark flavours: up (u), down (d), strange (s), charm (c), top (t) and bottom (b). For this syllabus point, the main required property is electric charge.",
          "Up-type quarks (u, c, t) each have charge +2/3e. Down-type quarks (d, s, b) each have charge -1/3e.",
        ],
      },
      {
        id: "quark-antiquark-charges",
        title: "Antiquarks and charge values",
        paragraphs: [
          "Each quark has a corresponding antiquark with opposite charge. For example, u has +2/3e while anti-u has -2/3e; d has -1/3e while anti-d has +1/3e.",
          "In particle classification questions, total charge is found by summing constituent quark or quark-antiquark charges.",
          "No detailed treatment of other quark properties is needed here; focus on flavour naming, charge recall and composition of hadrons.",
        ],
      },
      {
        id: "protons-neutrons-and-hadrons",
        title: "Protons, neutrons and hadron classification",
        paragraphs: [
          "Protons and neutrons are not fundamental. Each is a baryon made of three quarks: proton is uud and neutron is udd.",
          "A hadron is any particle made of quarks. Hadrons are divided into baryons and mesons.",
          "A baryon consists of three quarks (or, for antibaryons, three antiquarks). A meson consists of one quark and one antiquark.",
          "Because quarks have fractional charge, combinations produce integer observed charges for familiar hadrons, for example proton charge +e from u (+2/3e) + u (+2/3e) + d (-1/3e).",
        ],
      },
      {
        id: "beta-decay-quark-level",
        title: "Quark-composition changes in β⁻ and β⁺ decay",
        paragraphs: [
          "In β⁻ decay at quark level, a down quark changes into an up quark. So a neutron (udd) becomes a proton (uud), which matches increase of nuclear proton number by 1.",
          "In β⁺ decay, an up quark changes into a down quark. So a proton (uud) becomes a neutron (udd), matching decrease of nuclear proton number by 1.",
          "These quark changes connect particle-physics description (Topic 11.2) to nuclear equations in Topic 11.1.",
        ],
      },
      {
        id: "leptons-in-topic11",
        title: "Leptons: electrons and neutrinos as fundamental particles",
        paragraphs: [
          "Electrons and neutrinos are fundamental particles called leptons. They are not made of quarks.",
          "In β decays, emitted electrons or positrons and neutrinos or antineutrinos are leptons. This is why decay equations in Topic 11.1 include lepton particles alongside daughter nuclides.",
          "A quick classification rule in exam questions: hadrons contain quarks; leptons do not.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Topic 11.2 questions are often short but unforgiving on definitions and particle classification. Examiners reward exact quark compositions and correct charge arithmetic.",
      items: [
        "Stating proton or neutron as fundamental particles instead of composite baryons.",
        "Mixing up proton and neutron quark compositions: proton is uud, neutron is udd.",
        "Giving quark charges as whole-number multiples of e instead of ±1/3e and ±2/3e values.",
        "Forgetting that antiquarks have opposite charge to corresponding quarks.",
        "Classifying mesons as three-quark particles. Mesons are quark-antiquark pairs.",
        "Explaining β decay without quark transition, or using wrong direction of change for β⁻ versus β⁺.",
      ],
    },
    workedExamples: [
      {
        id: "t11-2-ex1",
        title: "Finding hadron charge from quark content",
        problem: [
          "Determine total charge of (a) uud, (b) udd, (c) u anti-d. Identify each as baryon or meson.",
        ],
        solution: [
          "Use charges u = +2/3e and d = -1/3e, so anti-d = +1/3e.",
          "(a) uud: +2/3 +2/3 -1/3 = +1e. Three quarks means baryon (proton).",
          "(b) udd: +2/3 -1/3 -1/3 = 0. Three quarks means baryon (neutron).",
          "(c) u anti-d: +2/3 +1/3 = +1e. Quark + antiquark means meson.",
        ],
      },
      {
        id: "t11-2-ex2",
        title: "Quark-level description of β⁻ and β⁺ transformations",
        problem: [
          "Explain, using quark changes, how β⁻ decay can turn a neutron into a proton and how β⁺ decay can turn a proton into a neutron.",
        ],
        solution: [
          "Neutron has quark content udd. In β⁻ decay, one d quark changes to u, giving uud, which is a proton. This increases proton number in the nucleus by 1.",
          "Proton has quark content uud. In β⁺ decay, one u quark changes to d, giving udd, which is a neutron. This decreases proton number by 1.",
          "These quark transitions are consistent with the nuclear-level equation changes in Z while A remains constant in both β processes.",
        ],
      },
      {
        id: "t11-2-ex3",
        title: "Classifying particles as hadrons or leptons",
        problem: [
          "Classify the following as hadron (state baryon or meson where relevant) or lepton: proton, neutron, electron, electron neutrino, pion (quark-antiquark particle).",
        ],
        solution: [
          "Proton: hadron, specifically baryon (uud).",
          "Neutron: hadron, specifically baryon (udd).",
          "Electron: lepton (fundamental, not made of quarks).",
          "Electron neutrino: lepton (fundamental).",
          "Pion: hadron, specifically meson (quark-antiquark pair).",
        ],
      },
    ],
    selfTest: [
      {
        id: "t11-2-st1",
        question:
          "List the six quark flavours and state the charge of each type class (up-type and down-type).",
        modelAnswer: [
          "Flavours: up, down, strange, charm, top, bottom.",
          "Up-type quarks (up, charm, top) each have charge +2/3e.",
          "Down-type quarks (down, strange, bottom) each have charge -1/3e.",
        ],
      },
      {
        id: "t11-2-st2",
        question:
          "State quark compositions of proton and neutron, then explain why neither is fundamental.",
        modelAnswer: [
          "Proton is uud and neutron is udd.",
          "Each contains three quarks, so each has internal structure and is therefore not fundamental.",
        ],
      },
      {
        id: "t11-2-st3",
        question:
          "Define baryon and meson in terms of quark content. Include what an antibaryon contains.",
        modelAnswer: [
          "A baryon contains three quarks.",
          "A meson contains one quark and one antiquark.",
          "An antibaryon contains three antiquarks.",
        ],
      },
      {
        id: "t11-2-st4",
        question:
          "For β⁻ decay and β⁺ decay, state the quark flavour change and resulting nucleon change.",
        modelAnswer: [
          "β⁻: d → u, so neutron (udd) becomes proton (uud).",
          "β⁺: u → d, so proton (uud) becomes neutron (udd).",
        ],
      },
      {
        id: "t11-2-st5",
        question:
          "Why are electrons and neutrinos grouped as leptons rather than hadrons?",
        modelAnswer: [
          "Electrons and neutrinos are fundamental particles with no quark structure in this model.",
          "Hadrons are defined as particles made of quarks, so electrons and neutrinos are leptons, not hadrons.",
        ],
      },
    ],
  },
};
