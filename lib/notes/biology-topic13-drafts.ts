import type { NoteDraft } from "./types";

/** Full teaching notes for 9700 Topic 13 — subtopics 13.1-13.2 (see lib/notes/AUTHORING.md). */
export const BIOLOGY_TOPIC13_DRAFTS: Record<string, NoteDraft> = {
  "t13-1": {
    noteId: "t13-1",
    syllabusNotes: [
      {
        id: "chloroplast-structure-and-functional-compartmentation",
        title: "Chloroplast structure and functional compartmentation",
        paragraphs: [
          "A chloroplast is a double-membrane organelle with an internal membrane system that separates photosynthesis into linked stages. Thylakoid membranes form flattened sacs; stacks of thylakoids are grana, connected by intergranal lamellae. The fluid matrix around thylakoids is the stroma.",
          "The light-dependent stage occurs at thylakoid membranes and across the thylakoid space. The light-independent stage (Calvin cycle) occurs in the stroma. This spatial separation is essential because ATP and reduced NADP made in the thylakoid system are then used in stroma reactions.",
          "When interpreting electron micrographs, high membrane surface area in grana indicates many sites for photosystems and electron transport chains. The stroma contains enzymes for carbon fixation, including rubisco.",
        ],
      },
      {
        id: "pigments-absorption-and-action-spectra",
        title: "Pigments, absorption spectra and action spectra",
        paragraphs: [
          "Chloroplast pigments include chlorophyll a, chlorophyll b, carotene and xanthophyll. Their role is to absorb light energy and transfer excitation energy to reaction centres where photoactivation of chlorophyll drives electron flow.",
          "An absorption spectrum shows how much light a specific pigment absorbs at each wavelength. An action spectrum shows the effectiveness of different wavelengths in driving photosynthesis rate. Action spectra resemble the combined absorption properties of pigment systems rather than any single pigment.",
          "Strong photosynthesis usually occurs in blue and red regions where chlorophylls absorb strongly, while lower rates are often seen in green wavelengths where absorption is weaker. Accessory pigments broaden useful wavelength range by absorbing wavelengths chlorophyll a alone absorbs less effectively.",
        ],
      },
      {
        id: "chromatography-and-rf-identification",
        title: "Chromatography and Rf values for chloroplast pigments",
        paragraphs: [
          "Paper chromatography or thin-layer chromatography can separate chloroplast pigments extracted from leaves. A solvent moves up the stationary phase, carrying pigments at different rates depending on solubility in the solvent and attraction to the stationary phase.",
          "Separated pigments appear as distinct bands. Identification is made by colour and by comparing Rf values with known standards. The Rf value is calculated as distance moved by pigment divided by distance moved by solvent front.",
          "To obtain reliable values, mark the origin line in pencil, keep solvent level below the origin at the start, and mark the solvent front immediately after removing the chromatogram. Using the same solvent system and stationary phase is essential when comparing Rf values.",
        ],
      },
      {
        id: "cyclic-and-non-cyclic-photophosphorylation",
        title: "Cyclic and non-cyclic photophosphorylation",
        paragraphs: [
          "Both cyclic and non-cyclic photophosphorylation are light-dependent processes in thylakoid membranes and both involve photoactivation of chlorophyll and ATP synthesis via a proton gradient.",
          "In cyclic photophosphorylation, only photosystem I (PSI) is involved. Excited electrons from PSI pass through electron carriers and return to PSI. Energy released during carrier transfer drives proton movement to generate the chemiosmotic gradient used to synthesise ATP. No reduced NADP is produced and no photolysis of water is required.",
          "In non-cyclic photophosphorylation, both photosystem II (PSII) and PSI operate. Electrons from PSII pass along carriers to PSI, and from PSI reduce NADP to reduced NADP. The oxygen-evolving complex at PSII catalyses photolysis of water, supplying replacement electrons, releasing protons and producing oxygen.",
        ],
      },
      {
        id: "chemiosmosis-and-atp-synthesis",
        title: "Electron transport, proton transfer and ATP synthesis",
        paragraphs: [
          "During photophosphorylation, energetic electrons passing through thylakoid electron transport chains release energy. This energy is used to transfer protons from the stroma into the thylakoid space.",
          "Because protons accumulate in the thylakoid space, an electrochemical gradient is formed across the thylakoid membrane. Protons then move back to the stroma by facilitated diffusion through ATP synthase.",
          "ATP synthase couples proton flow to ATP formation from ADP and inorganic phosphate. This chemiosmotic mechanism is the immediate source of ATP used in stroma reactions of the Calvin cycle.",
        ],
      },
      {
        id: "calvin-cycle-and-carbon-assimilation",
        title: "Calvin cycle stages and products of carbon assimilation",
        paragraphs: [
          "The Calvin cycle in the stroma has three main stages. First, rubisco catalyses fixation of carbon dioxide by combining CO2 with ribulose bisphosphate (RuBP, 5C) to produce two molecules of glycerate 3-phosphate (GP, 3C).",
          "Second, GP is reduced to triose phosphate (TP). This reduction requires ATP and reduced NADP supplied by the light-dependent stage, linking both stages as one integrated energy-transfer process.",
          "Third, most TP is used to regenerate RuBP in ATP-dependent reactions, allowing the cycle to continue. Some Calvin-cycle intermediates are withdrawn for biosynthesis: GP is used in synthesis pathways for some amino acids, while TP is used to form carbohydrates, lipids and amino acids.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "In Topic 13.1, examiners reward precise pathway language, correct photosystem roles and clear linkage between chloroplast structure and process.",
      items: [
        "Placing the Calvin cycle in thylakoids or the light-dependent stage in stroma; these locations must be stated correctly.",
        "Claiming cyclic photophosphorylation produces reduced NADP or oxygen; it produces ATP only and involves PSI only.",
        "Omitting the oxygen-evolving complex and photolysis role in non-cyclic photophosphorylation.",
        "Confusing absorption spectra with action spectra, or interpreting one as if it were the other.",
        "Using Rf values without controlling solvent system and stationary phase, making comparisons invalid.",
        "Describing Calvin cycle as simple 'CO2 plus water gives glucose' without rubisco, GP, TP and RuBP regeneration stages.",
      ],
    },
    workedExamples: [
      {
        id: "t13-1-ex1",
        title: "Comparing cyclic and non-cyclic pathways",
        problem: [
          "A student writes: 'Both photophosphorylation pathways use PSI and PSII, both make ATP and reduced NADP, and both release oxygen.' Correct this statement.",
        ],
        solution: [
          "Cyclic photophosphorylation uses PSI only. Photoactivated electrons return to PSI via carriers, generating ATP but not reduced NADP; oxygen is not released because water is not photolysed in this pathway.",
          "Non-cyclic photophosphorylation uses both PSII and PSI. Electrons move from PSII through carriers to PSI and finally reduce NADP to reduced NADP.",
          "In non-cyclic flow, the oxygen-evolving complex at PSII catalyses photolysis of water to replace electrons. This releases oxygen and contributes protons for gradient formation.",
        ],
      },
      {
        id: "t13-1-ex2",
        title: "Using spectra to infer pigment contribution",
        problem: [
          "An action spectrum shows high photosynthetic rates in blue and red light but much lower rates in green light. Explain this pattern using chloroplast pigments.",
        ],
        solution: [
          "Photosynthesis rate follows how effectively the chloroplast pigment system absorbs light and transfers energy to reaction centres.",
          "Chlorophyll a and b absorb strongly in blue and red regions, so these wavelengths drive high rates of photoactivation and electron flow.",
          "Green wavelengths are absorbed less strongly by chlorophylls, so action values are lower. Accessory pigments such as carotene and xanthophyll broaden absorption range, but overall efficiency still reflects combined pigment absorption peaks.",
        ],
      },
      {
        id: "t13-1-ex3",
        title: "Chromatography calculation and identification logic",
        problem: [
          "In a pigment chromatography practical, the solvent front moves 7.5 cm. Pigment band X moves 5.4 cm and pigment band Y moves 2.1 cm. Calculate Rf for each and state how these values are used.",
        ],
        solution: [
          "Rf for band X = 5.4 / 7.5 = 0.72. Rf for band Y = 2.1 / 7.5 = 0.28.",
          "Rf values are compared with reference values from known pigments under the same solvent and stationary-phase conditions.",
          "Therefore, identification is not based on Rf alone in isolation; valid matching requires consistent method conditions and is strengthened by band colour observations.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t13-1-st1",
        question:
          "Relate chloroplast structure to function by stating where the light-dependent and light-independent stages occur and why this organisation is effective.",
        modelAnswer: [
          "Thylakoid membranes and thylakoid spaces (in grana) are the site of the light-dependent stage; the stroma is the site of the Calvin cycle.",
          "This organisation is effective because photosystems and electron transport chains in thylakoid membranes generate ATP and reduced NADP, which are then used by stroma enzymes for carbon fixation and reduction reactions.",
        ],
      },
      {
        id: "t13-1-st2",
        question:
          "State roles of chlorophyll a, chlorophyll b, carotene and xanthophyll, and distinguish absorption spectra from action spectra.",
        modelAnswer: [
          "These pigments absorb light and transfer excitation energy to reaction centres, increasing the wavelength range over which photosynthesis can be driven.",
          "An absorption spectrum shows light absorption by a pigment across wavelengths; an action spectrum shows photosynthetic effectiveness across wavelengths for the organism or chloroplast system.",
        ],
      },
      {
        id: "t13-1-st3",
        question:
          "Describe cyclic and non-cyclic photophosphorylation, including photosystems involved and products formed.",
        modelAnswer: [
          "Cyclic photophosphorylation involves PSI only. Photoactivated electrons cycle back to PSI via carriers, producing ATP but not reduced NADP; oxygen is not produced.",
          "Non-cyclic photophosphorylation involves both PSII and PSI. Photolysis of water at PSII (via the oxygen-evolving complex) replaces electrons and releases oxygen; electron flow to PSI leads to ATP synthesis and reduction of NADP to reduced NADP.",
        ],
      },
      {
        id: "t13-1-st4",
        question:
          "Explain how ATP is synthesised during photophosphorylation using electron transport and proton movement.",
        modelAnswer: [
          "As energetic electrons move through electron carriers in thylakoid membranes, released energy is used to transfer protons into the thylakoid space.",
          "Protons then diffuse back to the stroma through ATP synthase. Energy from this proton flow drives phosphorylation of ADP to ATP.",
        ],
      },
      {
        id: "t13-1-st5",
        question:
          "Outline the three stages of the Calvin cycle and state how GP and TP can be used to make other molecules.",
        modelAnswer: [
          "Rubisco fixes CO2 by combining it with RuBP (5C), producing two GP (3C).",
          "GP is reduced to TP using ATP and reduced NADP.",
          "Most TP is used, with ATP, to regenerate RuBP; some intermediates leave the cycle. GP is used to produce some amino acids, while TP is used to produce carbohydrates, lipids and amino acids.",
        ],
      },
    ],
  },

  "t13-2": {
    noteId: "t13-2",
    syllabusNotes: [
      {
        id: "limiting-factor-principle",
        title: "Limiting factors in photosynthesis",
        paragraphs: [
          "A limiting factor is the factor in shortest effective supply that controls rate at a given moment. In photosynthesis, key limiting factors are light intensity, carbon dioxide concentration and temperature.",
          "If one factor is limiting, increasing other non-limiting factors gives little or no increase in rate. When the limiting factor is increased, rate rises until another factor becomes limiting.",
          "This principle explains why photosynthetic response curves often rise and then plateau. Plateaus do not mean photosynthesis has stopped; they indicate control has shifted to a different factor.",
        ],
      },
      {
        id: "effects-of-light-and-co2",
        title: "Effects of light intensity and carbon dioxide concentration",
        paragraphs: [
          "At low light intensity, light-dependent reactions supply ATP and reduced NADP slowly, so increasing light intensity increases photosynthesis rate. At higher intensity, the response levels off when another factor limits.",
          "Increasing carbon dioxide concentration increases rate when carbon fixation by rubisco is limited by substrate availability. At sufficiently high concentration, rate plateaus once biochemical capacity or light supply becomes limiting.",
          "For valid interpretation, keep other variables controlled. A single set of rate values has meaning only when temperature, chlorophyll amount, and measurement interval are standardised.",
        ],
      },
      {
        id: "effects-of-temperature",
        title: "Effects of temperature on photosynthesis rate",
        paragraphs: [
          "Temperature affects enzyme-catalysed reactions in photosynthesis, especially Calvin-cycle steps. As temperature rises from low values, rate often increases because enzyme and substrate collisions are more frequent.",
          "Beyond an optimum, rate decreases because enzymes and membrane-associated processes are disrupted, and stomatal closure in whole plants may reduce carbon dioxide entry.",
          "Therefore temperature response usually shows a peaked curve rather than a simple linear increase. Candidates should explain both the rising phase and the decline at high temperature.",
        ],
      },
      {
        id: "chloroplast-suspension-redox-indicator-practicals",
        title: "Using chloroplast suspensions with redox indicators",
        paragraphs: [
          "DCPIP and methylene blue are redox indicators used to follow light-dependent electron transfer in chloroplast suspensions. In oxidised form they are coloured; when reduced by electrons from the photosynthetic electron transport pathway they lose colour.",
          "Rate can be estimated by time to decolourisation or by colorimeter absorbance change. Shorter decolourisation time or faster absorbance decrease indicates higher rate under those conditions.",
          "To investigate light intensity, vary lamp distance or neutral-density filters while controlling chloroplast concentration and temperature. To investigate wavelength, use coloured filters or monochromatic light at equal intensity, and include a dark control.",
        ],
      },
      {
        id: "whole-plant-investigations",
        title: "Whole-plant investigations including aquatic plants",
        paragraphs: [
          "Whole plants, including aquatic plants such as Elodea, can be used to investigate limiting factors by measuring photosynthesis proxies such as oxygen output. Oxygen can be estimated by bubble count per unit time or more reliably by gas volume collected.",
          "Light intensity can be varied by changing lamp distance. Carbon dioxide concentration can be varied using sodium hydrogencarbonate concentration in the water. Temperature can be varied with water baths while allowing equilibration time.",
          "Design quality matters: control species and leaf area, keep measurement intervals constant, repeat measurements, and calculate mean rates. Avoid overheating from lamps and account for respiration when interpreting low net oxygen output.",
        ],
      },
      {
        id: "data-handling-and-conclusion-quality",
        title: "Data interpretation and evidence-based conclusions",
        paragraphs: [
          "Conclusions must match pattern evidence. If rate rises with a factor then plateaus, infer that the factor was initially limiting but ceased to limit at higher values.",
          "When comparing wavelengths in indicator practicals, link observed rate differences to pigment absorption and action spectrum logic rather than naming colours only.",
          "Evaluation marks are gained by identifying measurement uncertainty and proposing specific improvements, for example colorimetry instead of visual endpoint judgement, thermostatic control, and calibration of light intensity.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "For Topic 13.2, high-scoring responses combine limiting-factor theory with practical method control and cautious interpretation of rate data.",
      items: [
        "Treating bubble count as an exact oxygen rate without noting variability in bubble size or dissolved oxygen effects.",
        "Changing more than one variable at once in limiting-factor practicals, making results uninterpretable.",
        "Ignoring dark controls in redox-indicator experiments, so non-photosynthetic colour changes cannot be excluded.",
        "Stating that temperature 'always increases' photosynthesis without discussing optimum and decline at high temperature.",
        "Explaining wavelength effects only by colour names and not by absorption/action-spectrum reasoning.",
        "Concluding a factor is never limiting because a plateau is reached; a plateau usually indicates another factor has become limiting.",
      ],
    },
    workedExamples: [
      {
        id: "t13-2-ex1",
        title: "Interpreting a light-intensity response dataset",
        problem: [
          "An aquatic plant gives mean oxygen outputs of 1.8, 3.1, 4.0 and 4.1 cm3 min^-1 at increasing light intensities. Explain the pattern using limiting-factor language.",
        ],
        solution: [
          "From 1.8 to 4.0 cm3 min^-1, increasing light intensity increases rate, so light is limiting across the lower intensity range.",
          "The small change from 4.0 to 4.1 cm3 min^-1 indicates a near-plateau, so light is no longer the main limiting factor at the highest intensity.",
          "Another factor, typically carbon dioxide concentration or temperature-dependent enzyme activity, is now limiting rate under these conditions.",
        ],
      },
      {
        id: "t13-2-ex2",
        title: "Designing a DCPIP practical for wavelength effects",
        problem: [
          "Plan a chloroplast-suspension investigation to compare effects of red, blue and green light on photosynthesis rate using DCPIP.",
        ],
        solution: [
          "Prepare equal-volume chloroplast suspensions with equal DCPIP concentrations in identical cuvettes or tubes. Use red, blue and green filters with matched light intensity, plus a dark control wrapped in foil.",
          "Measure decolourisation time or absorbance decrease with a colorimeter at fixed intervals. Keep temperature constant and mix gently before readings to standardise suspension distribution.",
          "Repeat each wavelength condition and calculate mean rate (for example reciprocal time to endpoint). Faster DCPIP reduction indicates higher light-dependent electron transfer rate.",
          "Interpret differences using pigment absorption: red and blue are usually more effective than green because chlorophyll absorption is stronger in those regions.",
        ],
      },
      {
        id: "t13-2-ex3",
        title: "Explaining a temperature optimum curve",
        problem: [
          "A whole-leaf photosynthesis experiment shows rate increasing from 10 C to 30 C, then falling at 40 C. Explain both phases.",
        ],
        solution: [
          "From 10 C to 30 C, increasing temperature raises kinetic energy and collision frequency, so enzyme-catalysed reactions in photosynthesis proceed faster and rate increases.",
          "At 40 C, key enzymes and membrane systems become less effective, and stomatal behaviour may reduce carbon dioxide entry in whole plants, so rate declines.",
          "The curve therefore shows an optimum temperature range rather than indefinite increase.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t13-2-st1",
        question:
          "Define a limiting factor in photosynthesis and name three examples from this topic.",
        modelAnswer: [
          "A limiting factor is the factor in shortest effective supply that determines photosynthesis rate at a given time.",
          "Examples are light intensity, carbon dioxide concentration and temperature.",
        ],
      },
      {
        id: "t13-2-st2",
        question:
          "Explain how changes in light intensity and carbon dioxide concentration affect photosynthesis rate, including why plateaus occur.",
        modelAnswer: [
          "Increasing light intensity raises rate when light-dependent reactions are limiting, then rate plateaus when another factor limits.",
          "Increasing carbon dioxide concentration raises rate when carbon fixation is substrate-limited, then plateaus when light supply, enzyme capacity or another factor limits.",
          "Plateaus indicate a shift in limiting factor rather than cessation of photosynthesis.",
        ],
      },
      {
        id: "t13-2-st3",
        question:
          "Describe how temperature affects photosynthesis and why very high temperature can reduce rate.",
        modelAnswer: [
          "Rate typically increases with temperature up to an optimum because enzyme-catalysed reactions proceed faster.",
          "Above optimum, enzyme activity and membrane processes are disrupted and, in whole plants, stomata may close reducing CO2 entry, so photosynthesis rate decreases.",
        ],
      },
      {
        id: "t13-2-st4",
        question:
          "How are DCPIP or methylene blue used with chloroplast suspensions to investigate effects of light intensity or wavelength?",
        modelAnswer: [
          "These indicators are reduced during light-dependent electron transfer and change from coloured oxidised form to reduced form, so rate is measured by decolourisation time or absorbance change.",
          "For light intensity tests, vary intensity while controlling temperature and chloroplast concentration. For wavelength tests, use filters or monochromatic light of equal intensity and include a dark control.",
        ],
      },
      {
        id: "t13-2-st5",
        question:
          "Outline a whole-plant investigation (including aquatic plants) for one limiting factor and state two key reliability controls.",
        modelAnswer: [
          "Use an aquatic plant such as Elodea and measure oxygen production (gas volume per minute) while varying one factor, for example sodium hydrogencarbonate concentration for CO2, with light and temperature controlled.",
          "Reliability controls include repeating measurements and calculating means, and keeping plant size/leaf area and timing intervals constant. Additional controls include temperature equilibration and fixed lamp distance when not the test variable.",
        ],
      },
    ],
  },
};
