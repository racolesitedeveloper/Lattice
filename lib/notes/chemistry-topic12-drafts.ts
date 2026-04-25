import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 12 - subtopic 12.1 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC12_DRAFTS: Record<string, NoteDraft> = {
  "t12-1": {
    noteId: "t12-1",
    syllabusNotes: [
      {
        id: "nitrogen-unreactivity",
        title: "Why nitrogen gas is relatively unreactive",
        paragraphs: [
          "Dinitrogen, N2, is very unreactive under ordinary conditions because of its N=N triple bond (one sigma and two pi bonds). The N=N bond has very high bond enthalpy, so a large activation energy is needed to break it.",
          "N2 is also non-polar because it is a homonuclear diatomic molecule. The electron density is shared symmetrically, so there is no permanent dipole to attract polar reagents strongly.",
          "Together, high bond strength and lack of polarity make spontaneous reactions with many substances slow at room temperature, despite many N-containing products being thermodynamically stable.",
        ],
      },
      {
        id: "ammonia-basicity-and-ammonium",
        title: "Ammonia as a base and formation of ammonium ions",
        paragraphs: [
          "In Brønsted-Lowry terms, ammonia is a base because it accepts a proton. The nitrogen atom in NH3 has a lone pair that can bond to H+.",
          "In water: NH3 + H2O <=> NH4+ + OH-. This equilibrium explains why aqueous ammonia is alkaline and why NH3 is a weak base (partial protonation).",
          "The ammonium ion, NH4+, has tetrahedral shape with approximately 109.5 degrees bond angles. It forms by acid-base reaction when NH3 accepts H+, for example NH3 + H+ -> NH4+.",
          "At the point of formation, the new N-H bond originates from nitrogen's lone pair (dative description), but in NH4+ all four N-H bonds are equivalent in the final ion.",
        ],
      },
      {
        id: "ammonium-salts-and-ammonia-displacement",
        title: "Displacing ammonia from ammonium salts",
        paragraphs: [
          "Ammonium salts release ammonia when warmed with a strong base. Hydroxide ions remove a proton from NH4+, regenerating NH3.",
          "Net ionic equation: NH4+ + OH- -> NH3 + H2O.",
          "Example with ammonium chloride and sodium hydroxide: NH4Cl + NaOH -> NH3 + NaCl + H2O.",
          "This is an acid-base reaction (not redox): NH4+ behaves as a Brønsted-Lowry acid, while OH- behaves as a Brønsted-Lowry base.",
        ],
      },
      {
        id: "nox-occurrence-and-catalytic-removal",
        title: "Natural and man-made NOx, and catalytic removal in engines",
        paragraphs: [
          "Atmospheric nitrogen oxides (NOx, mainly NO and NO2) have both natural and human sources. Natural sources include lightning (high-temperature reaction of N2 and O2) and microbial processes in soils. Man-made sources include internal combustion engines, power stations and high-temperature industrial combustion.",
          "In car engines, very high combustion temperatures allow N2 and O2 from air to react: N2 + O2 -> 2NO. Nitric oxide then oxidises in air: 2NO + O2 -> 2NO2.",
          "Modern catalytic converters (Pt/Pd/Rh systems) remove NOx by redox reactions, converting NO and NO2 to N2 while oxidising CO and unburned hydrocarbons. One representative reaction is 2NO -> N2 + O2 (on catalyst surface), followed by oxygen consumption in oxidation steps such as 2CO + O2 -> 2CO2.",
          "Catalytic removal matters because it reduces harmful NOx emissions before exhaust gases enter the atmosphere.",
        ],
      },
      {
        id: "pan-and-photochemical-smog",
        title: "NOx reaction with unburned hydrocarbons to form PAN",
        paragraphs: [
          "In sunlight, NO and NO2 participate in radical photochemistry with volatile unburned hydrocarbons from vehicle emissions.",
          "These reaction chains generate peroxyacyl radicals that combine with NO2 to form peroxyacetyl nitrate (PAN). PAN is a key component of photochemical smog.",
          "PAN is a strong eye and respiratory irritant, and it also damages plant tissues. Its formation links NOx pollution directly to urban smog episodes under bright, stagnant conditions.",
        ],
      },
      {
        id: "nox-sulfur-dioxide-and-acid-rain",
        title: "How NO and NO2 contribute to acid rain",
        paragraphs: [
          "NOx contributes to acid rain directly because atmospheric oxidation and hydration produce nitric acid. A simplified sequence is 2NO2 + H2O -> HNO2 + HNO3, with further oxidation driving nitrate formation.",
          "NO2 also promotes acidification indirectly by catalysing oxidation of atmospheric SO2 to sulfate species, increasing formation of sulfuric acid in cloud droplets.",
          "So NOx worsens acid rain in two ways: by producing nitrogen acids itself and by accelerating conversion of sulfur dioxide into stronger sulfur oxyacids.",
          "Acid rain lowers pH of soils and lakes, damages vegetation, and corrodes buildings, especially carbonate stone and metal surfaces.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "This subtopic is assessed through linked inorganic and environmental chemistry. Examiners reward clear chemical reasoning, balanced equations, and accurate distinction between acid-base and redox ideas.",
      items: [
        "Saying N2 is unreactive only because it is non-polar; the dominant reason is very high N=N bond enthalpy, with non-polarity as an additional factor.",
        "Describing NH3 as an Arrhenius alkali only, without Brønsted-Lowry proton-acceptor language when asked for theory-based explanation.",
        "Writing ammonia displacement from ammonium salts as a redox reaction; it is an acid-base proton-transfer process.",
        "Confusing NO and NO2 sources by claiming they are only man-made; lightning and biological pathways are natural sources too.",
        "Stating that catalytic converters 'absorb' NOx rather than chemically converting it to less harmful gases, mainly N2.",
        "Treating PAN as the only smog component or calling it harmless; PAN is a toxic photochemical-smog component formed from NOx and hydrocarbons.",
        "Explaining acid rain from NOx only via direct nitric acid production and omitting NOx-catalysed oxidation of SO2.",
      ],
    },
    workedExamples: [
      {
        id: "t12-1-ex1",
        title: "Explaining N2 inertness with correct emphasis",
        problem: [
          "A student writes: 'Nitrogen gas is unreactive because it is non-polar.' Evaluate this statement and give a full exam-quality explanation.",
        ],
        solution: [
          "The statement is incomplete. Non-polarity contributes, but the main reason for low reactivity is the very strong N=N triple bond, which has high bond enthalpy and gives a large activation energy for many reactions.",
          "Because N2 is homonuclear and non-polar, it also does not attract polar reagents strongly, which further reduces reaction rate under ordinary conditions.",
          "So the best explanation combines both points: very strong triple bond (principal reason) and lack of polarity (additional reason).",
        ],
      },
      {
        id: "t12-1-ex2",
        title: "Ammonium formation and ammonia displacement equations",
        problem: [
          "Write equations for (a) formation of NH4+ from NH3 by proton transfer and (b) displacement of NH3 from NH4+ by hydroxide ions. Name the Brønsted-Lowry acid and base in part (b).",
        ],
        solution: [
          "Formation of ammonium ion: NH3 + H+ -> NH4+ (or NH3 + H2O <=> NH4+ + OH- in aqueous equilibrium context).",
          "Displacement by hydroxide ions: NH4+ + OH- -> NH3 + H2O.",
          "In part (b), NH4+ is the Brønsted-Lowry acid (proton donor) and OH- is the Brønsted-Lowry base (proton acceptor).",
          "This confirms the displacement reaction is acid-base, not redox.",
        ],
      },
      {
        id: "t12-1-ex3",
        title: "Linking NOx to smog and acid rain",
        problem: [
          "Outline how NO and NO2 from vehicle exhaust contribute to (i) photochemical smog and (ii) acid rain. Include PAN and sulfur dioxide in your answer.",
        ],
        solution: [
          "In sunlight, NOx reacts with unburned hydrocarbons through radical pathways, generating peroxyacyl species that combine with NO2 to form PAN. PAN is a harmful component of photochemical smog.",
          "NOx also causes acid rain directly because oxidation/hydration of NO2 forms nitric acid species in atmospheric moisture.",
          "In addition, NOx acts catalytically in atmospheric oxidation of SO2, increasing sulfate and sulfuric-acid formation. Therefore NOx worsens acid rain both directly and by accelerating sulfur dioxide oxidation.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t12-1-st1",
        question:
          "Explain the lack of reactivity of nitrogen gas in terms of bond type and molecular polarity.",
        modelAnswer: [
          "N2 is relatively unreactive mainly because it contains a very strong N=N triple bond with high bond enthalpy, so many reactions have high activation energy.",
          "N2 is also non-polar, so it has limited attraction to polar reagents, further reducing reactivity under normal conditions.",
        ],
      },
      {
        id: "t12-1-st2",
        question:
          "Using Brønsted-Lowry theory, explain why ammonia is basic and describe the structure and formation of NH4+.",
        modelAnswer: [
          "NH3 is a Brønsted-Lowry base because it accepts a proton using the lone pair on nitrogen.",
          "It forms NH4+ by proton transfer (NH3 + H+ -> NH4+).",
          "NH4+ is tetrahedral with four equivalent N-H bonds and bond angles close to 109.5 degrees.",
        ],
      },
      {
        id: "t12-1-st3",
        question:
          "Write an equation showing displacement of ammonia from an ammonium salt by sodium hydroxide, and state the net ionic equation.",
        modelAnswer: [
          "Example molecular equation: NH4Cl + NaOH -> NH3 + NaCl + H2O.",
          "Net ionic equation: NH4+ + OH- -> NH3 + H2O.",
        ],
      },
      {
        id: "t12-1-st4",
        question:
          "State one natural and one man-made source of NOx, and explain how catalytic converters reduce NOx emissions from internal combustion engines.",
        modelAnswer: [
          "Natural source: lightning (or microbial soil processes). Man-made source: high-temperature combustion in vehicle engines (or power stations).",
          "Catalytic converters use Pt/Pd/Rh catalysts to convert NO and NO2 into N2 via redox processes while also oxidising CO and hydrocarbons, reducing NOx released to the atmosphere.",
        ],
      },
      {
        id: "t12-1-st5",
        question:
          "Explain how atmospheric NO and NO2 contribute to photochemical smog and acid rain, including PAN and sulfur dioxide.",
        modelAnswer: [
          "NOx reacts with unburned hydrocarbons in sunlight to form PAN, a toxic component of photochemical smog.",
          "NOx contributes directly to acid rain by forming nitric acid species in atmospheric moisture.",
          "NOx also acts catalytically in oxidation of atmospheric SO2 to sulfate/sulfuric-acid products, further increasing acid-rain formation.",
        ],
      },
    ],
  },
};
