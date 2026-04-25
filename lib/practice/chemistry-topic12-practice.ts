import type { SubtopicPracticePack } from "./types";

/**
 * 9701 Topic 12 / 12.1 — Nitrogen and sulfur: one course subtopic `t12-1`.
 *
 * LO crosswalk (each bullet in `data/syllabus/chemistry-9701-learning-outcomes.md` §12.1
 * is hit by ≥1 drill id):
 * - N2 lack of reactivity (triple bond, non-polarity) → d1, d9
 * - NH3 basicity (Brønsted–Lowry); NH4+ structure/formation; displacement from ammonium salts → d2, d3, d4
 * - Natural/man-made NOx; catalytic removal from exhaust → d5, d8
 * - NO/NO2 + hydrocarbons → PAN (photochemical smog) → d6
 * - Acid rain: NO/NO2 directly; catalytic oxidation of atmospheric SO2 → d7, d10
 */
export const CHEMISTRY_TOPIC12_PRACTICE: Record<string, SubtopicPracticePack> = {
  "t12-1": {
    noteId: "t12-1",
    drills: [
      {
        id: "t12-1-d1",
        noteId: "t12-1",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "Explain why nitrogen gas, N2, is relatively unreactive at room temperature even though nitrogen atoms are very electronegative. Your answer should refer to the strength of the bond in N2 and to the polarity of the molecule.",
        modelAnswerPoints: [
          "N2 contains a very strong triple bond between the two nitrogen atoms, so a large amount of energy is needed to break it before nitrogen can take part in most reactions.",
          "The triple bond consists of one sigma and two pi interactions holding the atoms together tightly, which makes the molecule kinetically inert under ordinary conditions.",
          "The N2 molecule is homonuclear, so the electron pair in the bond is shared equally and the molecule has no overall dipole moment (it is non-polar).",
          "Because the bond is non-polar and very strong, there is no easy handle for polar attack and the activation energy for reaction with typical reagents is high, so N2 does not behave like a small polar molecule of similar molecular mass.",
        ],
        workedSolution: [
          "Nitrogen exists in the atmosphere mainly as N2, and each molecule contains a nitrogen–nitrogen triple bond that is among the strongest covalent bonds encountered at this level, so breaking that bond to allow nitrogen atoms to rearrange into new compounds requires a great deal of energy and does not happen readily at room temperature.",
          "The bonding picture is that one sigma overlap and two pi overlaps between the two atoms lock the nuclei together, which is why industrial fixation processes use high temperature, high pressure and a catalyst, or biological nitrogenase systems, rather than expecting useful rates from mixing N2 with reagents in a beaker at 298 K.",
          "The molecule is also non-polar because the two atoms are identical, so the shared bonding electrons are not pulled toward one end of the molecule and there is no permanent dipole moment across the bond axis.",
          "Together, the very high bond dissociation energy and the lack of polarity mean that most reagents cannot approach with a pathway that lowers the activation energy enough for a fast reaction, which is why nitrogen gas is often described as unreactive even though nitrogen itself is electronegative when considered as an atom forming other compounds.",
        ],
        commonMistake:
          "Arguing only from electronegativity of nitrogen atoms while ignoring the triple bond strength, or claiming N2 is highly polar because nitrogen is electronegative.",
        tags: ["nitrogen", "bonding", "reactivity", "definitions"],
      },
      {
        id: "t12-1-d2",
        noteId: "t12-1",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "Describe ammonia as a base using the Brønsted–Lowry theory. Explain how an ammonia molecule can accept a proton from an acid in the gas phase and relate this idea to ammonia acting as a weak base in aqueous solution.",
        modelAnswerPoints: [
          "A Brønsted–Lowry base is defined as a species that accepts a proton (H+) from a Brønsted–Lowry acid.",
          "The ammonia molecule has a lone pair of electrons on the nitrogen atom that can form a coordinate bond to an incoming proton, giving NH4+.",
          "In the gas phase, NH3 accepts H+ from an acid such as HCl to form NH4+ and Cl- in the solid ammonium chloride that is observed when the gases meet.",
          "In water, NH3 accepts protons from H3O+ in an equilibrium, so the solution contains NH4+ and OH- and is weakly alkaline, which shows the same proton-accepting role in a different solvent system.",
        ],
        workedSolution: [
          "According to the Brønsted–Lowry definition, a base is any species that can accept a proton from another species acting as an acid, so the emphasis is on proton transfer rather than on producing OH- as the sole criterion for basic behaviour.",
          "Ammonia qualifies because the nitrogen atom carries a non-bonding lone pair that is sufficiently electron-rich to attack a proton, forming a new N–H bond and converting NH3 into the ammonium ion NH4+ while the acid supplies the proton.",
          "When dry ammonia gas and dry hydrogen chloride gas mix, white solid ammonium chloride forms because each NH3 molecule has accepted H+ from HCl in a simple acid–base sense, which is the gas-phase illustration the syllabus uses alongside the aqueous picture.",
          "In aqueous chemistry the solvent participates, but ammonia still behaves as a Brønsted base by accepting protons from the hydronium ions present in water, establishing an equilibrium that produces ammonium ions and hydroxide ions, so the solution becomes basic even though ammonia is only partially ionised and is therefore classified as a weak base.",
        ],
        commonMistake:
          "Defining a Brønsted base only as 'produces OH-' without mentioning proton acceptance, or calling NH3 a strong base in water.",
        tags: ["ammonia", "bronsted-lowry", "acids-bases"],
      },
      {
        id: "t12-1-d3",
        noteId: "t12-1",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "Describe the structure of the ammonium ion, NH4+, and explain how it is formed when ammonia reacts with an acid. Use the idea of a coordinate (dative) bond where appropriate.",
        modelAnswerPoints: [
          "NH4+ is tetrahedral about nitrogen, with four N–H bonds arranged symmetrically like a slightly shrunken methane geometry.",
          "One of the four N–H bonds can be described as arising when the lone pair on NH3 forms a coordinate bond to H+ (the proton has no electrons of its own to contribute).",
          "Once formed, all four N–H bonds in NH4+ are equivalent in the ion, so the ion is often drawn as a regular tetrahedron with a + charge on the whole unit.",
          "The formation is an acid–base reaction: NH3 + H+ -> NH4+ (or NH3 + H3O+ -> NH4+ + H2O in aqueous acid), where ammonia is the base and the acid supplies the proton.",
        ],
        workedSolution: [
          "The ammonium ion consists of a central nitrogen atom bonded to four hydrogen atoms in a tetrahedral arrangement, which matches the electron-pair geometry expected for four bonding pairs around nitrogen in this ion.",
          "When ammonia acts as a base toward a proton, the lone pair on nitrogen overlaps with the empty 1s orbital on H+, and both electrons in the new bond come from nitrogen, which is exactly what is meant by a coordinate or dative covalent bond at the point of formation.",
          "After the ion is made, it is not meaningful in exam answers to label one N–H as permanently 'different' from the others, because rapid exchange and symmetry mean we treat NH4+ as having four equivalent N–H links within the tetrahedral NH4+ unit.",
          "The overall process is an acid–base reaction in which ammonia molecules accept protons from the acid, written in minimal form as NH3 + H+ -> NH4+, or with water as the proton carrier as NH3 + H3O+ -> NH4+ + H2O when dilute acid is added to aqueous ammonia.",
        ],
        commonMistake:
          "Drawing NH4+ as square planar, or forgetting that the proton has no electron to share until the lone pair donates both electrons.",
        tags: ["ammonium-ion", "structure", "coordinate-bonding"],
      },
      {
        id: "t12-1-d4",
        noteId: "t12-1",
        kind: "structured",
        difficulty: 3,
        marks: 6,
        stem: "Explain what is meant by the displacement of ammonia from an ammonium salt. Write a balanced ionic equation, including state symbols, for solid ammonium chloride reacting with aqueous sodium hydroxide in excess, and state what you would observe if the mixture were warmed gently.",
        modelAnswerPoints: [
          "Displacement here means a stronger base removes NH3 from NH4+ by accepting the proton, regenerating free ammonia.",
          "Ionic equation: NH4+(aq) + OH-(aq) -> NH3(g) + H2O(l) (with Cl-(aq) and Na+(aq) as spectators if starting from NH4Cl(s) dissolving then reacting).",
          "From solid NH4Cl, a satisfactory molecular picture is NH4Cl(s) + NaOH(aq) -> NaCl(aq) + NH3(g) + H2O(l) once the chloride dissolves and OH- meets NH4+.",
          "On warming, ammonia gas escapes, recognised by its characteristic pungent smell and by turning damp red litmus blue when the gas is collected or detected near the mouth of the tube.",
        ],
        workedSolution: [
          "Ammonium salts contain NH4+ ions in contact with an anion such as chloride; if a stronger base such as hydroxide ion is supplied, it competes successfully for the proton and converts NH4+ back into NH3, which is what the syllabus means by displacement of ammonia from the salt.",
          "In ionic terms the essential chemical change is proton transfer from NH4+ to OH-, which is written as NH4+(aq) + OH-(aq) -> NH3(g) + H2O(l), where sodium and chloride ions are spectators when sodium hydroxide and ammonium chloride are the reagents in solution.",
          "If solid ammonium chloride is treated with aqueous sodium hydroxide, the salt first dissolves to release NH4+(aq) and Cl-(aq), then the hydroxide from NaOH(aq) reacts as above, and a full molecular equation can be given as NH4Cl(s) + NaOH(aq) -> NaCl(aq) + NH3(g) + H2O(l), which conserves atoms and reflects the loss of a volatile base from the mixture.",
          "When the system is warmed gently, the equilibrium and vapour pressure favour escape of ammonia gas, so a pungent smell becomes obvious and gaseous ammonia turns damp red litmus paper blue, which is the standard qualitative sign that NH3 has been displaced from the ammonium salt.",
        ],
        commonMistake:
          "Writing NH3(aq) only and never NH3(g), or omitting OH- as the base that removes the proton from NH4+.",
        tags: ["ammonium-salts", "displacement", "equations"],
      },
      {
        id: "t12-1-d5",
        noteId: "t12-1",
        kind: "structured",
        difficulty: 4,
        marks: 6,
        stem: "State and explain important natural and man-made sources of oxides of nitrogen in the atmosphere. Outline how a catalytic converter on a petrol engine reduces the emission of nitrogen oxides in exhaust gases, mentioning one representative overall transformation.",
        modelAnswerPoints: [
          "Natural sources include lightning discharges (high temperature air fixes small amounts of NO) and bacterial action in soils (nitrifying processes that release nitrogen oxides to a minor extent).",
          "Man-made sources are dominated by high-temperature combustion in engines and furnaces, where N2 and O2 in air combine to NO, which is further oxidised to NO2 in the exhaust and atmosphere.",
          "A catalytic converter contains a honeycomb coated with platinum, palladium and rhodium (as appropriate) and works when hot, providing surfaces that catalyse redox reactions in the exhaust stream.",
          "NOx reduction is achieved partly by reaction with carbon monoxide on the catalyst surface, for example 2NO + 2CO -> N2 + 2CO2, which returns nitrogen to the atmosphere as N2 and oxidises toxic CO to CO2.",
        ],
        workedSolution: [
          "Oxides of nitrogen are not only produced by industry that handles nitric acid; they also arise naturally when lightning heats air strongly enough for nitrogen and oxygen to combine reversibly to nitric oxide, and in smaller contributions from microbial cycles in soils that process nitrogen compounds and can release traces of nitrogen oxides.",
          "The largest anthropogenic contribution comes from internal combustion engines (and other high-temperature burning of fuels in air), where cylinder temperatures are high enough for nitrogen and oxygen from the intake air to react, forming NO that cools into the exhaust line and is partly converted further to NO2 once mixed with excess oxygen downstream.",
          "To limit what reaches the open air, a catalytic converter is fitted so that hot exhaust gases pass over a thin layer of precious metals on a high-surface-area support, which lowers the activation energy for desired conversions without being consumed in the stoichiometric sense of a reagent.",
          "A key job of the three-way system on a petrol car is to reduce nitrogen oxides using carbon monoxide still present in the rich pulse of exhaust chemistry, and a representative overall change is 2NO + 2CO -> N2 + 2CO2, which removes harmful NO by turning it into harmless nitrogen gas while simultaneously cleaning up CO.",
        ],
        commonMistake:
          "Claiming the catalyst is used up mole-for-mole in each car journey, or that converters work efficiently when the engine is cold immediately after start-up.",
        tags: ["nox", "pollution", "catalytic-converter"],
      },
      {
        id: "t12-1-d6",
        noteId: "t12-1",
        kind: "structured",
        difficulty: 4,
        marks: 5,
        stem: "Explain how atmospheric oxides of nitrogen such as NO and NO2 can react with unburned hydrocarbons in sunlight to produce peroxyacetyl nitrate, PAN, as a component of photochemical smog. Name the type of environmental problem this contributes to and state why PAN is harmful.",
        modelAnswerPoints: [
          "Photochemical smog builds in strong sunlight when NOx and volatile hydrocarbons from vehicle exhaust accumulate together.",
          "Free-radical chain reactions initiated by photolysis of NO2 produce oxidising species that attack hydrocarbon fragments.",
          "These processes lead to peroxy radicals that combine with NO2 to form PAN-type nitrates (the syllabus names PAN specifically as a product pathway involving NOx and hydrocarbons).",
          "PAN is an eye and respiratory irritant and is part of the oxidant mix that makes smog episodes harmful to health and vegetation.",
        ],
        workedSolution: [
          "Photochemical smog is not simply 'dark smoke'; it is a sun-driven photochemical mixture in which nitrogen oxides and unburned or partially burned hydrocarbons from engines undergo radical chemistry after NO2 absorbs ultraviolet light and generates oxygen atoms that begin oxidation chains.",
          "Those chains create reactive organic intermediates and peroxy species that can combine further with NO2 in the low atmosphere, which is the conceptual route to peroxyacetyl nitrate, PAN, as a secondary pollutant rather than something emitted directly from the tailpipe.",
          "Because PAN incorporates NO2 chemistry with oxidised carbon fragments derived from hydrocarbons, it ties together the syllabus statements about NOx acting alongside unburned fuel in sunlight to build the characteristic Los-Angeles-type smog mixture.",
          "PAN is harmful because it is a strong lachrymator and respiratory irritant and contributes to the overall oxidising, plant-damaging character of smog episodes, so controlling NOx and hydrocarbon emissions is aimed at reducing exactly this class of secondary product.",
        ],
        commonMistake:
          "Treating PAN as a primary exhaust gas like CO, or confusing photochemical smog with acid rain caused mainly by distant sulfate and nitrate deposition.",
        tags: ["pan", "photochemical-smog", "hydrocarbons"],
      },
      {
        id: "t12-1-d7",
        noteId: "t12-1",
        kind: "structured",
        difficulty: 4,
        marks: 6,
        stem: "Describe the role of NO and NO2 in acid rain. Include (i) how nitrogen dioxide can contribute acid directly to rainwater, and (ii) how oxides of nitrogen can catalyse the oxidation of atmospheric sulfur dioxide to sulfuric acid in cloud droplets, showing how NOx is regenerated in the catalytic cycle.",
        modelAnswerPoints: [
          "Acid rain means rainfall (or fog or snow) with pH lowered by dissolved strong acids such as sulfuric and nitric acids formed from atmospheric pollutants.",
          "NO2 dissolves and reacts with water to give nitric acid (simplified as 3NO2 + H2O -> 2HNO3 + NO), so nitrogen oxides contribute nitric acid directly to droplets.",
          "Sulfur dioxide dissolves in water as sulfurous species that can be oxidised to sulfate, forming sulfuric acid in the droplet phase.",
          "NO2 can oxidise dissolved SO2 / sulfite to sulfate while being reduced to NO; NO is then reoxidised by oxygen to NO2, so NOx acts as a homogeneous catalyst for the overall conversion of SO2 and O2 to sulfuric acid conditions in cloud water.",
        ],
        workedSolution: [
          "Acid deposition occurs when gases such as sulfur dioxide and nitrogen oxides are converted in the atmosphere into strong acids that dissolve in rain, so the rain becomes more acidic than naturally carbonic acid rain and can damage ecosystems and stonework over years of exposure.",
          "Nitrogen dioxide reacts with water in a way that can be summarised as 3NO2 + H2O -> 2HNO3 + NO, which shows that nitrogen dioxide is not only a precursor that waits for other chemistry but can itself be converted into nitric acid in droplets, contributing the nitric acid component of acid rain directly alongside sulfur-derived acidity.",
          "Sulfur dioxide from fuel combustion dissolves in cloud droplets as sulfurous acid / bisulfite type species that must be oxidised to sulfate before the full sulfuric acid contribution appears, and that oxidation step can be slow in clean air but faster when oxidants are available.",
          "Oxides of nitrogen catalyse the sulfur oxidation because NO2 can oxidise sulfite in solution to sulfate while being reduced to NO, and the NO released can react with oxygen in the air to regenerate NO2, which re-enters the cycle; overall, sulfur dioxide plus oxygen and water is turned into acidic sulfate solution with NOx present at the start and end of the cycle, which is the hallmark of catalytic behaviour the syllabus expects you to describe.",
        ],
        commonMistake:
          "Writing only SO2 -> acid rain with no mention of NO2 dissolving to nitric acid, or describing NOx as consumed completely rather than regenerated in the sulfur oxidation cycle.",
        tags: ["acid-rain", "so2", "nox", "catalysis"],
      },
      {
        id: "t12-1-d8",
        noteId: "t12-1",
        kind: "mcq",
        difficulty: 3,
        stem: "Which statement best describes the catalytic removal of nitrogen oxides from the exhaust of a working three-way petrol engine converter at normal operating temperature?",
        options: [
          { id: "A", text: "The precious metal coating stores NOx permanently so that only N2 and O2 leave the tailpipe." },
          { id: "B", text: "The catalyst provides a surface pathway that converts NO (and related NOx) into N2 while also oxidising CO to CO2, without being consumed in the overall stoichiometry." },
          { id: "C", text: "NOx is removed mainly by dissolving it in water condensed inside the hot converter." },
          { id: "D", text: "The converter works equally well when cold at start-up as when fully hot." },
        ],
        correctOptionId: "B",
        explanation:
          "Heterogeneous catalysis on the metal surface lowers the activation energy for redox steps that return nitrogen to N2 and complete oxidation of CO; the catalyst is regenerated at the surface and is not a bulk reagent that is used up each cycle.",
        distractorRationale: {
          A: "NOx is converted and released as N2 rather than being trapped forever as NOx inside the monolith; storage systems exist on some designs but the core idea examined here is catalytic conversion, not permanent storage of NOx as NOx.",
          C: "A hot gas-phase converter is not relying on aqueous dissolution of NOx as the main removal mechanism.",
          D: "Light-off temperature matters: below operating temperature the converter is much less efficient, which is why cold-start emissions are a real issue.",
        },
        tags: ["catalytic-converter", "nox"],
      },
      {
        id: "t12-1-d9",
        noteId: "t12-1",
        kind: "mcq",
        difficulty: 2,
        stem: "Which factor is the main reason nitrogen molecules, N2, do not react appreciably with oxygen at room temperature to give NO?",
        options: [
          { id: "A", text: "Nitrogen atoms are less electronegative than oxygen atoms, so N2 cannot donate electrons." },
          { id: "B", text: "The triple bond in N2 is very strong and the molecule is non-polar, so the activation energy for reaction with O2 is very high." },
          { id: "C", text: "N2 is lighter than O2, so collisions between them are too infrequent in air." },
          { id: "D", text: "N2 has no lone pairs of electrons on nitrogen, so it cannot begin any reaction." },
        ],
        correctOptionId: "B",
        explanation:
          "Thermodynamics and lightning chemistry aside, at room temperature the kinetic barrier is dominated by the enormous bond strength of N2 and its non-polar character, so mixing N2 with O2 does not give useful rates of NO without very high temperature or a catalyst.",
        distractorRationale: {
          A: "Electronegativity of atoms does not override the fact that the triple bond in N2 is the dominant kinetic barrier here.",
          C: "Collision frequency in the gas is not the limiting issue; even with many collisions the reaction pathway is too slow without very high T or a catalyst.",
          D: "Each nitrogen in N2 has a lone pair; the problem is not absence of lone pairs but the stability of the triple-bonded unit.",
        },
        tags: ["nitrogen", "bonding", "reactivity"],
      },
      {
        id: "t12-1-d10",
        noteId: "t12-1",
        kind: "structured",
        difficulty: 5,
        marks: 5,
        stem: "Show how nitrogen dioxide can catalyse the oxidation of sulfur dioxide to sulfur trioxide in the gas phase by writing two steps in which NO2 is first consumed and then regenerated, and combine them with sulfur trioxide reacting with water to show how dilute sulfuric acid forms in rain droplets. State how this illustrates the catalytic role of NOx in acid rain linked to sulfur dioxide emissions.",
        modelAnswerPoints: [
          "Step involving NO2 as oxidant: NO2 + SO2 -> NO + SO3 (NO2 is reduced, SO2 is oxidised).",
          "Regeneration of NO2: 2NO + O2 -> 2NO2 (NO from the first step is reoxidised).",
          "SO3 + H2O -> H2SO4 shows how sulfur trioxide becomes sulfuric acid in droplets.",
          "NO2 is present at the end as well as participating in the middle, so it speeds the overall oxidation of SO2 to acidic sulfate without being permanently consumed, linking SO2 emissions to acid rain catalysed by NOx.",
        ],
        workedSolution: [
          "A simple two-step gas-phase picture is that nitrogen dioxide oxidises sulfur dioxide to sulfur trioxide while nitrogen dioxide is itself reduced to nitric oxide, written as NO2 + SO2 -> NO + SO3, which makes clear that NO2 carries oxygen across from the nitrogen oxide framework to the sulfur oxide framework.",
          "The nitric oxide produced is not stable indefinitely in hot oxygen-containing exhaust or air, and is reoxidised by molecular oxygen according to 2NO + O2 -> 2NO2, which returns the nitrogen dioxide so it can attack further sulfur dioxide molecules.",
          "Once sulfur trioxide is present in humid air or cloud water, it reacts very readily with water to give sulfuric acid, SO3 + H2O -> H2SO4, which is the species that lowers pH when sulfate aerosols and rain droplets reach the surface.",
          "Because NO2 is used in one step and reformed in another while the net process converts sulfur dioxide and oxygen into sulfur trioxide that becomes acid, the nitrogen oxides fulfil the syllabus idea of a catalytic role in oxidising atmospheric sulfur dioxide even though real atmospheric chemistry is more complex than these two gas-phase equations alone.",
        ],
        commonMistake:
          "Writing SO2 + O2 -> SO3 with no role for NO2, or forgetting to show NO2 reappearing after being used as the oxidant.",
        tags: ["acid-rain", "catalysis", "so2", "equations"],
      },
    ],
    flashcards: [
      {
        id: "t12-1-f1",
        noteId: "t12-1",
        difficulty: 1,
        front: "Why is N2 unreactive at room temperature?",
        back: "Very strong triple bond in N2 and a non-polar molecule, so a high activation energy for most reactions.",
        examPhrasing: "Explain the lack of reactivity of nitrogen with reference to triple bond strength and lack of polarity.",
        tags: ["nitrogen", "bonding"],
      },
      {
        id: "t12-1-f2",
        noteId: "t12-1",
        difficulty: 1,
        front: "Brønsted–Lowry definition of a base?",
        back: "A proton acceptor: a species that accepts H+ from a Brønsted–Lowry acid.",
        examPhrasing: "Define a Brønsted–Lowry base.",
        tags: ["ammonia", "bronsted-lowry"],
      },
      {
        id: "t12-1-f3",
        noteId: "t12-1",
        difficulty: 2,
        front: "Shape of the ammonium ion NH4+?",
        back: "Tetrahedral; formed when NH3 donates its lone pair to H+ (coordinate bond formation).",
        examPhrasing: "Describe the structure of the ammonium ion and its formation by an acid–base reaction.",
        tags: ["ammonium-ion", "structure"],
      },
      {
        id: "t12-1-f4",
        noteId: "t12-1",
        difficulty: 2,
        front: "How is NH3 displaced from an ammonium salt?",
        back: "Add a stronger base (e.g. OH-): NH4+ + OH- -> NH3 + H2O; NH3 escapes as gas when warmed.",
        examPhrasing: "Describe the displacement of ammonia from ammonium salts by an acid–base reaction.",
        confusionPair: "NH4+ + acid vs NH4+ + alkali",
        tags: ["ammonium-salts"],
      },
      {
        id: "t12-1-f5",
        noteId: "t12-1",
        difficulty: 3,
        front: "Two man-made sources of atmospheric NOx?",
        back: "High-temperature combustion in vehicle engines and in power generation / furnaces (air N2 + O2 -> NO, then NO2).",
        examPhrasing: "State man-made occurrences of oxides of nitrogen.",
        tags: ["nox", "pollution"],
      },
      {
        id: "t12-1-f6",
        noteId: "t12-1",
        difficulty: 3,
        front: "One natural way NOx enters the air?",
        back: "Lightning fixes small amounts from N2 + O2 at very high temperature.",
        examPhrasing: "State a natural occurrence of oxides of nitrogen.",
        tags: ["nox"],
      },
      {
        id: "t12-1-f7",
        noteId: "t12-1",
        difficulty: 4,
        front: "How does a catalytic converter cut NOx from exhaust?",
        back: "Hot precious-metal surface catalyses redox: e.g. NO + CO converted to N2 + CO2 (with related NOx steps in a real three-way system).",
        examPhrasing: "Explain the catalytic removal of oxides of nitrogen from the exhaust gases of internal combustion engines.",
        confusionPair: "converter vs cold exhaust",
        tags: ["catalytic-converter"],
      },
      {
        id: "t12-1-f8",
        noteId: "t12-1",
        difficulty: 4,
        front: "What is PAN linked to?",
        back: "Photochemical smog: NOx + unburned hydrocarbons + sunlight -> PAN among other oxidants.",
        examPhrasing: "State that atmospheric NO and NO2 can react with unburned hydrocarbons to form PAN.",
        tags: ["pan", "smog"],
      },
      {
        id: "t12-1-f9",
        noteId: "t12-1",
        difficulty: 5,
        front: "How does NO2 contribute to acid rain directly?",
        back: "Reacts with water to form nitric acid (e.g. 3NO2 + H2O -> 2HNO3 + NO).",
        examPhrasing: "Describe the role of NO2 in the formation of acid rain.",
        tags: ["acid-rain", "nox"],
      },
      {
        id: "t12-1-f10",
        noteId: "t12-1",
        difficulty: 5,
        front: "Catalytic role of NOx in acid rain involving SO2?",
        back: "NO2 oxidises SO2 to SO3 (then H2SO4); NO is reoxidised to NO2 by O2, so NOx speeds sulfur oxidation without being used up.",
        examPhrasing: "Describe the catalytic role of NO and NO2 in the oxidation of atmospheric sulfur dioxide in acid rain.",
        confusionPair: "direct nitric acid vs catalytic sulfate route",
        tags: ["acid-rain", "catalysis", "so2"],
      },
    ],
  },
};
