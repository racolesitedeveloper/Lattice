import type { NoteDraft } from "./types";

/** Full teaching notes for 9700 Topic 2 — subtopics 2.1-2.4. */
export const BIOLOGY_TOPIC2_DRAFTS: Record<string, NoteDraft> = {
  "t2-1": {
    noteId: "t2-1",
    syllabusNotes: [
      {
        id: "principles-of-qualitative-tests",
        title: "Core idea of biochemical tests",
        paragraphs: [
          "A biochemical test is only useful if the procedure is standardised and the observation is interpreted correctly. In Cambridge practical contexts, you are expected to describe both what reagent is added and what positive and negative results look like. Vague statements such as 'it changed colour' do not earn full credit unless the starting and final colours are named.",
          "Most tests in this topic are qualitative (present / absent), but Benedict's can also be used in a semi-quantitative way to estimate reducing sugar concentration. That estimate is only meaningful if temperature, reagent volume, sample volume and heating time are controlled.",
          "Always label tubes clearly and run a control where appropriate. A control helps distinguish a true biochemical result from a change caused by heating, contamination or incorrect reagent use.",
        ],
      },
      {
        id: "benedicts-reducing-sugars",
        title: "Benedict's test for reducing sugars",
        paragraphs: [
          "A reducing sugar donates electrons to Benedict's reagent when heated in alkaline conditions. Common reducing sugars at this level include glucose, fructose and maltose. The reagent changes from blue to green, yellow, orange or brick-red as reducing sugar concentration increases.",
          "Standard method: add Benedict's solution to the sample, heat in a near-boiling water bath for a set time, then record the final colour. A blue result means no detectable reducing sugar under the test conditions.",
          "In a strict written answer, include the need for heating in a water bath and state the expected colour change range. Stating only 'turns orange' is incomplete because lower concentrations may give green or yellow.",
        ],
      },
      {
        id: "iodine-starch-emulsion-biuret",
        title: "Iodine for starch, emulsion for lipids, biuret for proteins",
        paragraphs: [
          "Iodine in potassium iodide tests for starch. A positive result is a colour change from yellow-brown to blue-black. A negative result remains yellow-brown.",
          "The emulsion test identifies lipids. Shake sample with ethanol to dissolve any lipid, then add water. A milky white emulsion indicates lipid because tiny lipid droplets scatter light in the aqueous phase.",
          "Biuret reagent tests for peptide bonds in proteins. A positive result is lilac or purple from an initial blue reagent. The colour intensity may vary with protein concentration, but at this level the key interpretation is presence or absence of protein.",
        ],
      },
      {
        id: "semi-quantitative-benedicts",
        title: "Semi-quantitative Benedict's: estimating concentration",
        paragraphs: [
          "A semi-quantitative Benedict's test does not produce an exact molar concentration, but it can estimate concentration by comparison. To do this credibly, keep reagent volume, sample volume, heating temperature and heating duration identical across all tubes.",
          "One approach is to compare final colour against prepared standards of known reducing sugar concentration. Another is to record time to first colour change under constant conditions. Faster change usually indicates higher reducing sugar concentration.",
          "Without strict standardisation, colour differences cannot be attributed confidently to concentration. This is a common experimental-quality issue in planning and evaluation questions.",
        ],
      },
      {
        id: "non-reducing-sugars-hydrolysis",
        title: "Testing for non-reducing sugars by hydrolysis",
        paragraphs: [
          "A non-reducing sugar does not give a positive Benedict's result until it is hydrolysed to reducing monosaccharides. Sucrose is the standard example in this syllabus.",
          "Procedure: first confirm no reducing sugar by Benedict's (blue result after heating). Then boil with dilute acid to hydrolyse glycosidic bonds, cool, neutralise with alkali, and repeat Benedict's with heating.",
          "A positive Benedict's result only after acid hydrolysis and neutralisation indicates non-reducing sugar was present originally. Neutralisation is essential because Benedict's requires alkaline conditions; skipping this can produce a false negative.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Practical marks are often lost through incomplete method statements and weak interpretation rather than difficult theory.",
      items: [
        "For Benedict's, forgetting to state heating in a water bath and only naming a single positive colour instead of the blue to brick-red progression.",
        "Writing that iodine gives a 'black' result with starch; accepted wording is blue-black from yellow-brown.",
        "Confusing emulsion test steps by adding water before ethanol, or not stating the white cloudy emulsion observation clearly.",
        "In the non-reducing sugar test, missing the initial Benedict's step before hydrolysis, so there is no evidence the original sample lacked reducing sugar.",
        "After acid hydrolysis, failing to mention neutralisation before Benedict's, which can prevent the expected colour change.",
        "Calling semi-quantitative Benedict's 'accurate concentration determination' without describing standards or controlled conditions.",
      ],
    },
    workedExamples: [
      {
        id: "t2-1-ex1",
        title: "Interpreting a sequence of food tests",
        problem: [
          "A sample gives these results: iodine remains yellow-brown, biuret turns lilac, Benedict's remains blue before hydrolysis, then turns orange after acid hydrolysis and neutralisation. What molecules are present?",
        ],
        solution: [
          "Iodine stays yellow-brown, so starch is absent.",
          "Biuret turns lilac, so protein (peptide bonds) is present.",
          "Benedict's is negative before hydrolysis, so no reducing sugar is detected initially. After hydrolysis and neutralisation it becomes orange, indicating reducing sugars were produced from a non-reducing sugar.",
          "Therefore the sample contains protein and a non-reducing sugar (such as sucrose), but no starch under these test conditions.",
        ],
      },
      {
        id: "t2-1-ex2",
        title: "Planning a semi-quantitative Benedict's comparison",
        problem: [
          "Design a semi-quantitative Benedict's method to compare reducing sugar concentration in three fruit juices.",
        ],
        solution: [
          "Use equal volumes of filtered juice and Benedict's reagent in labelled tubes (for example 2 cm³ + 2 cm³).",
          "Heat all tubes at the same temperature in a water bath for the same time. Start timing when tubes enter the bath. Keep tube size, immersion depth and mixing approach constant.",
          "Either compare final colours to a prepared set of glucose standards or record time to first colour change from blue. Use at least three repeats per juice and calculate a mean.",
          "Interpretation: a faster shift from blue or a colour further toward orange/brick-red indicates a higher reducing sugar concentration, provided all control variables are matched.",
        ],
      },
      {
        id: "t2-1-ex3",
        title: "Diagnosing a failed non-reducing sugar test",
        problem: [
          "A student reports no non-reducing sugar in a sample. Their method: add Benedict's, heat, see blue; add dilute acid to a fresh sample, heat, then immediately add Benedict's and reheat, still blue. Suggest the procedural error and correction.",
        ],
        solution: [
          "The likely error is failure to neutralise after acid hydrolysis. Benedict's reagent works in alkaline conditions, so acidic sample conditions can stop the expected reduction reaction.",
          "Correction: after hydrolysis with dilute acid, cool and neutralise carefully with alkali (for example sodium hydrogencarbonate or sodium hydroxide as instructed), then repeat Benedict's with heating.",
          "A valid interpretation requires two linked observations: negative Benedict's before hydrolysis and positive after hydrolysis plus neutralisation.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t2-1-st1",
        question:
          "State the reagent, key condition, and positive result for Benedict's test for reducing sugars.",
        modelAnswer: [
          "Reagent: Benedict's solution. Key condition: heat the mixture in a hot water bath. Positive result: colour change from blue through green / yellow / orange to brick-red depending on concentration.",
        ],
      },
      {
        id: "t2-1-st2",
        question: "Describe how the emulsion test identifies lipids.",
        modelAnswer: [
          "Shake the sample with ethanol to dissolve any lipid, then add water. A white cloudy emulsion indicates lipid is present; no emulsion indicates a negative test.",
        ],
      },
      {
        id: "t2-1-st3",
        question:
          "Why must a non-reducing sugar test include an initial Benedict's test before hydrolysis?",
        modelAnswer: [
          "It confirms there is no reducing sugar in the original sample. Without this baseline, a positive Benedict's result after hydrolysis could simply be due to reducing sugar that was already present.",
        ],
      },
      {
        id: "t2-1-st4",
        question:
          "Give two variables that must be controlled in a semi-quantitative Benedict's comparison and explain why.",
        modelAnswer: [
          "Examples: water-bath temperature, heating time, Benedict's volume, and sample volume. They must be constant so differences in colour change can be attributed to reducing sugar concentration rather than experimental conditions.",
        ],
      },
      {
        id: "t2-1-st5",
        question:
          "A sample gives blue-black with iodine and stays blue with biuret. What can you conclude?",
        modelAnswer: [
          "Starch is present (blue-black iodine result). Protein is not detected by biuret under the test conditions (biuret remains blue).",
        ],
      },
    ],
  },

  "t2-2": {
    noteId: "t2-2",
    syllabusNotes: [
      {
        id: "carbohydrate-key-definitions",
        title: "Monomers, polymers and carbohydrate terms",
        paragraphs: [
          "A monomer is a small molecule that can join to others of the same or related type. A polymer is a large molecule formed by linking many monomers. A macromolecule is a very large molecule, often a polymer, important in living systems.",
          "In carbohydrate language, a monosaccharide is a single sugar unit (for example glucose or fructose), a disaccharide contains two monosaccharides linked together, and a polysaccharide contains many sugar units.",
          "Covalent bonds join the smaller units to make the larger molecule. In carbohydrates, the specific covalent link is a glycosidic bond.",
        ],
      },
      {
        id: "alpha-beta-glucose-and-reducing-sugars",
        title: "Ring structures of α-glucose and β-glucose, and reducing properties",
        paragraphs: [
          "Glucose commonly exists in ring form in aqueous solution. In both α-glucose and β-glucose the molecular formula is the same, but the position of the hydroxyl group on carbon 1 differs.",
          "In α-glucose, the hydroxyl on carbon 1 is below the plane of the ring (in common Haworth orientation); in β-glucose it is above. This small structural difference changes which polysaccharides are formed.",
          "At this level you should know that glucose, fructose and maltose are reducing sugars, while sucrose is non-reducing unless first hydrolysed.",
        ],
      },
      {
        id: "condensation-and-hydrolysis-carbohydrates",
        title: "Condensation and hydrolysis of glycosidic bonds",
        paragraphs: [
          "A glycosidic bond forms by condensation: two monosaccharides join and one water molecule is removed. Repeating condensation creates disaccharides and polysaccharides.",
          "Hydrolysis is the reverse process. Water is used to break glycosidic bonds, producing smaller carbohydrate molecules.",
          "The non-reducing sugar test uses this principle: sucrose is hydrolysed to reducing monosaccharides before Benedict's can give a positive result.",
        ],
      },
      {
        id: "starch-glycogen-structure-function",
        title: "Starch and glycogen: molecular structure related to storage",
        paragraphs: [
          "Starch is a storage polysaccharide in plants and has two components: amylose and amylopectin. Amylose is mostly unbranched with α-1,4 glycosidic bonds and coils into a compact helix. Amylopectin has α-1,4 chains with α-1,6 branch points.",
          "Glycogen is the main storage polysaccharide in animals and fungi. It has α-1,4 chains and many α-1,6 branches, usually more frequent than in amylopectin.",
          "These storage molecules are insoluble and therefore do not affect water potential strongly. Their branching gives many terminal ends for rapid enzyme action, allowing fast glucose release when needed.",
        ],
      },
      {
        id: "cellulose-and-plant-cell-wall",
        title: "Cellulose structure and cell wall function",
        paragraphs: [
          "Cellulose is built from β-glucose with β-1,4 glycosidic bonds. Alternate β-glucose units are inverted, creating straight, uncoiled chains rather than helices.",
          "Parallel cellulose chains hydrogen-bond to each other, forming microfibrils and then larger fibres. Many weak hydrogen bonds together produce high tensile strength.",
          "This arrangement gives plant cell walls rigidity, resistance to turgor pressure and structural support for tissues.",
        ],
      },
      {
        id: "triglycerides-structure-function",
        title: "Triglycerides: hydrophobic structure and biological roles",
        paragraphs: [
          "A triglyceride forms when one glycerol molecule bonds to three fatty acids by ester bonds in condensation reactions. Fatty acids may be saturated (no C=C double bonds) or unsaturated (one or more C=C double bonds).",
          "Triglycerides are non-polar and hydrophobic, so they are insoluble in water. They are compact energy stores with high energy per unit mass because of many C-H bonds.",
          "Their properties relate to function: energy storage, thermal insulation, cushioning of organs, and buoyancy in some aquatic organisms.",
        ],
      },
      {
        id: "phospholipids-and-amphipathic-nature",
        title: "Phospholipids: polar head and non-polar tails",
        paragraphs: [
          "Phospholipids resemble triglycerides but one fatty acid is replaced by a phosphate-containing group. The phosphate head is hydrophilic and polar, while the fatty acid tails are hydrophobic and non-polar.",
          "Because each molecule has both hydrophilic and hydrophobic regions, phospholipids are amphipathic and arrange into bilayers in water.",
          "This structural behaviour underpins membrane formation in cells and organelles, linking directly to later membrane-transport topics.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Questions in this subtopic reward structural detail linked to function, not lists of molecule names.",
      items: [
        "Describing all polysaccharides as 'just long chains of glucose' without distinguishing α- and β-linkages or branching patterns.",
        "Confusing condensation and hydrolysis, or omitting water as product/reactant in explanations of glycosidic bond formation and breakage.",
        "Saying sucrose is a reducing sugar without mentioning hydrolysis first.",
        "Mixing up starch components: amylose is mainly unbranched; amylopectin is branched.",
        "Writing that cellulose is made of α-glucose; it is formed from β-glucose.",
        "Calling triglycerides polar because they contain oxygen atoms; overall they are non-polar and hydrophobic.",
      ],
    },
    workedExamples: [
      {
        id: "t2-2-ex1",
        title: "Explaining reducing vs non-reducing sugars",
        problem: [
          "A student tests four solutions: glucose, fructose, maltose and sucrose. Predict Benedict's results before hydrolysis and explain.",
        ],
        solution: [
          "Glucose gives a positive Benedict's result because it is a reducing sugar.",
          "Fructose also gives a positive result at this level and is treated as reducing.",
          "Maltose gives a positive result because it is a reducing disaccharide.",
          "Sucrose gives a negative Benedict's result before hydrolysis because it is non-reducing. After hydrolysis, it yields reducing monosaccharides and then can give a positive result.",
        ],
      },
      {
        id: "t2-2-ex2",
        title: "Relating glycogen structure to function",
        problem: [
          "Explain why glycogen is well suited to rapid glucose release in animal cells.",
        ],
        solution: [
          "Glycogen has many α-1,6 branch points in addition to α-1,4 chains, so one glycogen molecule has many terminal ends.",
          "Hydrolytic enzymes can work simultaneously at many ends, increasing the rate of glucose release when demand is high.",
          "As a large insoluble polymer, glycogen also avoids creating a large osmotic effect that free glucose would cause in the cytoplasm.",
        ],
      },
      {
        id: "t2-2-ex3",
        title: "Comparing cellulose and starch",
        problem: [
          "Both cellulose and starch are glucose polymers. Why do they have different properties and roles?",
        ],
        solution: [
          "The key difference is glucose isomer and bond type. Starch uses α-glucose (α-1,4 and α-1,6 in amylopectin), which allows coiled and branched storage forms. Cellulose uses β-glucose with β-1,4 bonds, producing straight chains.",
          "Straight cellulose chains align and hydrogen-bond strongly between chains, forming microfibrils with high tensile strength.",
          "So starch is adapted to storage and enzyme access, while cellulose is adapted to mechanical support in plant cell walls.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t2-2-st1",
        question:
          "Define monomer, polymer, macromolecule, monosaccharide, disaccharide and polysaccharide.",
        modelAnswer: [
          "Monomer: a small unit molecule that can join others. Polymer: a large molecule made of repeated monomers. Macromolecule: a very large biological molecule (often a polymer). Monosaccharide: one sugar unit. Disaccharide: two monosaccharides joined by a glycosidic bond. Polysaccharide: many monosaccharides linked together.",
        ],
      },
      {
        id: "t2-2-st2",
        question:
          "How does α-glucose differ from β-glucose in ring form, and why does that matter biologically?",
        modelAnswer: [
          "They differ in the orientation of the hydroxyl group on carbon 1. In α-glucose it is below the ring plane (standard Haworth orientation), in β-glucose it is above. This affects bonding geometry, leading to different polymers such as starch/glycogen from α-glucose and cellulose from β-glucose.",
        ],
      },
      {
        id: "t2-2-st3",
        question:
          "Describe condensation and hydrolysis in carbohydrate chemistry, with one named example each.",
        modelAnswer: [
          "Condensation joins monosaccharides by forming a glycosidic bond and removing water, for example glucose + fructose to sucrose. Hydrolysis adds water to break a glycosidic bond, for example sucrose hydrolysed into reducing monosaccharides.",
        ],
      },
      {
        id: "t2-2-st4",
        question:
          "State two structural features of triglycerides and relate each to function.",
        modelAnswer: [
          "Feature 1: three fatty acids joined to glycerol by ester bonds, giving a compact molecule rich in C-H bonds, so it has high energy density for energy storage. Feature 2: overall non-polar and hydrophobic, so triglycerides are insoluble and suitable for long-term storage without affecting water potential.",
        ],
      },
      {
        id: "t2-2-st5",
        question:
          "Describe phospholipid structure using the terms polar, non-polar, hydrophilic and hydrophobic.",
        modelAnswer: [
          "A phospholipid has a phosphate-containing head that is polar and hydrophilic, and two fatty acid tails that are non-polar and hydrophobic. This amphipathic structure makes phospholipids form bilayers in water.",
        ],
      },
    ],
  },

  "t2-3": {
    noteId: "t2-3",
    syllabusNotes: [
      {
        id: "amino-acids-and-peptide-bonds",
        title: "General amino acid structure and peptide bond chemistry",
        paragraphs: [
          "An amino acid has a central carbon bonded to four groups: an amino group, a carboxyl group, a hydrogen atom and a variable side chain (R group). Different R groups give amino acids different chemical properties.",
          "A peptide bond forms by condensation between the carboxyl group of one amino acid and the amino group of another, releasing water. Repeated condensation forms a polypeptide.",
          "Hydrolysis breaks peptide bonds by adding water, producing shorter peptides or free amino acids.",
        ],
      },
      {
        id: "levels-of-protein-structure",
        title: "Primary, secondary, tertiary and quaternary structure",
        paragraphs: [
          "Primary structure is the amino acid sequence in a polypeptide. The sequence determines which intramolecular interactions are possible later.",
          "Secondary structure is local folding, mainly alpha-helices and beta-pleated sheets, stabilised by hydrogen bonds in the polypeptide backbone.",
          "Tertiary structure is the overall three-dimensional shape of one polypeptide chain, formed by interactions among side chains. Quaternary structure is the arrangement of two or more polypeptide subunits in one functional protein.",
        ],
      },
      {
        id: "interactions-stabilising-proteins",
        title: "Forces that stabilise protein shape",
        paragraphs: [
          "Hydrophobic interactions occur when non-polar side chains cluster away from water in aqueous environments. This drives folding in many globular proteins.",
          "Hydrogen bonds form between polar groups and can stabilise both secondary and tertiary structure. Ionic bonds form between oppositely charged side chains when conditions allow.",
          "Covalent disulfide bonds are strong links between sulfur-containing side chains (typically cysteine residues). They add extra stability to tertiary or quaternary structure.",
        ],
      },
      {
        id: "globular-vs-fibrous",
        title: "Globular and fibrous proteins: solubility and roles",
        paragraphs: [
          "Globular proteins are usually compact and generally soluble in water. They are commonly involved in physiological processes such as transport, catalysis and signalling.",
          "Fibrous proteins are usually elongated, repetitive and generally insoluble. Their structure supports mechanical roles, such as tensile strength in connective tissues.",
          "In exam answers, include both structure and function links: shape and surface chemistry explain solubility, which in turn helps explain biological role.",
        ],
      },
      {
        id: "haemoglobin-structure-and-function",
        title: "Haemoglobin as a globular protein",
        paragraphs: [
          "Haemoglobin has quaternary structure made of four polypeptide chains: two alpha-globin and two beta-globin chains. Each chain is associated with one haem group.",
          "Each haem group contains an iron ion that binds oxygen reversibly. This allows loading of oxygen where partial pressure is high and unloading where partial pressure is lower.",
          "The folded globular structure keeps haem groups in a functional environment and allows efficient oxygen transport in red blood cells.",
        ],
      },
      {
        id: "collagen-structure-and-fibres",
        title: "Collagen as a fibrous protein",
        paragraphs: [
          "A collagen molecule consists of three polypeptide chains wound into a triple helix. Many collagen molecules are then linked together to form strong collagen fibrils and fibres.",
          "Intermolecular cross-links and close packing of molecules increase tensile strength. The fibrous arrangement is adapted for load-bearing tissues such as tendons and skin.",
          "Collagen is generally insoluble and structural, illustrating the standard fibrous-protein pattern in this syllabus.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Protein questions are high-scoring when structure levels and bonding types are named precisely and linked to function.",
      items: [
        "Calling peptide bond formation hydrolysis; it is condensation, while hydrolysis breaks peptide bonds.",
        "Confusing tertiary and quaternary structure by describing subunit association as tertiary.",
        "Stating that hydrogen bonds are the only interactions in proteins and ignoring ionic, hydrophobic and disulfide interactions.",
        "Saying all proteins are soluble; fibrous proteins are generally insoluble and structural.",
        "Describing haemoglobin as one chain; it has four polypeptide subunits plus haem groups.",
        "Writing that collagen is a globular transport protein instead of a fibrous structural protein.",
      ],
    },
    workedExamples: [
      {
        id: "t2-3-ex1",
        title: "Classifying levels of protein structure",
        problem: [
          "For each statement, identify whether it describes primary, secondary, tertiary or quaternary structure: (a) sequence of amino acids, (b) alpha-helix stabilised by hydrogen bonds, (c) one polypeptide folded by side-chain interactions, (d) association of four polypeptides in haemoglobin.",
        ],
        solution: [
          "(a) Primary structure: amino acid sequence.",
          "(b) Secondary structure: local backbone folding such as alpha-helix with hydrogen bonding.",
          "(c) Tertiary structure: full 3D shape of one polypeptide due to side-chain interactions.",
          "(d) Quaternary structure: arrangement of multiple polypeptide subunits in one protein.",
        ],
      },
      {
        id: "t2-3-ex2",
        title: "Linking haemoglobin structure to oxygen transport",
        problem: [
          "Explain how haemoglobin structure enables oxygen transport in blood, including the role of iron.",
        ],
        solution: [
          "Haemoglobin is a globular protein with four subunits (two alpha and two beta chains), each carrying a haem group.",
          "Each haem contains iron, and each iron can bind one oxygen molecule reversibly. This provides multiple oxygen-binding sites per haemoglobin molecule.",
          "Because binding is reversible, haemoglobin can load oxygen in the lungs and unload oxygen in tissues. The quaternary and globular structure positions haem groups for effective transport.",
        ],
      },
      {
        id: "t2-3-ex3",
        title: "Relating collagen hierarchy to strength",
        problem: [
          "Why is collagen suitable for tensile support in connective tissue?",
        ],
        solution: [
          "At the molecular level, three polypeptide chains form a triple helix, giving a rope-like basic unit.",
          "Many collagen molecules align and cross-link into fibrils and then fibres. This hierarchical packing distributes pulling forces across many molecules.",
          "The result is high tensile strength and low extensibility, making collagen well suited to structural roles such as tendons and ligaments.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t2-3-st1",
        question:
          "Describe the general structure of an amino acid and how a peptide bond is formed and broken.",
        modelAnswer: [
          "An amino acid has a central carbon attached to an amino group, a carboxyl group, a hydrogen and an R group. A peptide bond forms by condensation between carboxyl and amino groups of two amino acids with release of water. It is broken by hydrolysis with addition of water.",
        ],
      },
      {
        id: "t2-3-st2",
        question:
          "State what is meant by primary, secondary, tertiary and quaternary structure of proteins.",
        modelAnswer: [
          "Primary: amino acid sequence. Secondary: local folding such as alpha-helices and beta-sheets, mainly backbone hydrogen bonding. Tertiary: overall 3D shape of one polypeptide from side-chain interactions. Quaternary: arrangement of multiple polypeptide chains into one functional protein.",
        ],
      },
      {
        id: "t2-3-st3",
        question:
          "Name four interaction types that help proteins keep their shape.",
        modelAnswer: [
          "Hydrophobic interactions, hydrogen bonds, ionic bonds, and covalent bonds including disulfide bonds.",
        ],
      },
      {
        id: "t2-3-st4",
        question:
          "Compare globular and fibrous proteins in terms of solubility and typical biological role.",
        modelAnswer: [
          "Globular proteins are generally soluble and usually perform physiological roles such as transport or catalysis. Fibrous proteins are generally insoluble and mainly perform structural roles such as mechanical support.",
        ],
      },
      {
        id: "t2-3-st5",
        question:
          "Outline haemoglobin and collagen structures and relate each to function.",
        modelAnswer: [
          "Haemoglobin: globular quaternary protein with two alpha and two beta chains, each with a haem group containing iron for reversible oxygen binding, so it transports oxygen. Collagen: fibrous protein of three chains in a triple helix, with many molecules forming cross-linked fibres for high tensile strength in connective tissue.",
        ],
      },
    ],
  },

  "t2-4": {
    noteId: "t2-4",
    syllabusNotes: [
      {
        id: "water-polarity-and-hydrogen-bonding",
        title: "How hydrogen bonds form between water molecules",
        paragraphs: [
          "Water is a polar molecule because oxygen is more electronegative than hydrogen, creating partial negative charge near oxygen and partial positive charges near hydrogens.",
          "Hydrogen bonding occurs when the partially positive hydrogen of one water molecule is attracted to the partially negative oxygen of another molecule.",
          "Each individual hydrogen bond is relatively weak, but many together give water unusual and biologically important bulk properties.",
        ],
      },
      {
        id: "water-as-solvent",
        title: "Solvent action and transport roles",
        paragraphs: [
          "Water dissolves many ionic and polar substances because charged or polar solute particles interact with water molecules. This allows reactions to occur in solution and enables transport in blood, tissue fluid and plant xylem/phloem sap.",
          "By forming hydration shells around ions and polar molecules, water keeps many solutes dispersed rather than aggregated.",
          "Substances that are non-polar, such as triglycerides, do not dissolve well in water, which is why different transport or storage strategies are required for lipids.",
        ],
      },
      {
        id: "high-specific-heat-capacity",
        title: "High specific heat capacity stabilises temperature",
        paragraphs: [
          "Specific heat capacity is the energy required to raise the temperature of 1 kg of a substance by 1 degree Celsius (or 1 kelvin). Water has a high value because energy input is used partly to disrupt hydrogen bonds before kinetic energy rises markedly.",
          "As a result, large bodies of water and water-rich organisms change temperature more slowly than materials with lower specific heat capacity.",
          "Biological importance includes thermal stability in cells and tissues, reduced rapid temperature fluctuations in aquatic habitats, and buffering of blood temperature.",
        ],
      },
      {
        id: "high-latent-heat-of-vaporisation",
        title: "Latent heat of vaporisation and cooling",
        paragraphs: [
          "Latent heat of vaporisation is the energy required to convert liquid water to water vapour without temperature change. Water has a high latent heat because many hydrogen bonds must be broken for molecules to escape the liquid.",
          "Evaporation therefore removes substantial energy from a surface. The highest-energy water molecules leave first, lowering the average kinetic energy of those left behind.",
          "This explains cooling by sweating in mammals and transpiration in plants.",
        ],
      },
      {
        id: "linking-properties-to-living-systems",
        title: "Integrating water properties with biological function",
        paragraphs: [
          "In exam responses, link property to role explicitly: polarity and hydrogen bonding explain solvent action; high specific heat capacity explains thermal buffering; high latent heat of vaporisation explains evaporative cooling.",
          "Answers that list properties without mechanism often miss development marks. Show the chain from intermolecular bonding to physical property to biological significance.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "This short subtopic is often under-answered. Examiners expect mechanism plus biological consequence.",
      items: [
        "Stating that hydrogen bonds are covalent bonds between different water molecules; they are intermolecular attractions, not shared-electron covalent bonds.",
        "Saying water is a 'universal solvent' without noting that non-polar molecules dissolve poorly.",
        "Defining specific heat capacity or latent heat vaguely without units or energy focus.",
        "Explaining cooling by evaporation as 'water is cold' rather than energy transfer due to high latent heat and escape of higher-energy molecules.",
        "Listing properties with no clear biological role, for example no reference to transport, thermal stability or cooling in organisms.",
      ],
    },
    workedExamples: [
      {
        id: "t2-4-ex1",
        title: "Explaining solvent action in blood plasma",
        problem: [
          "Why can blood plasma transport glucose and sodium ions effectively, but not triglycerides in true solution?",
        ],
        solution: [
          "Glucose is polar and sodium ions are charged, so both interact strongly with polar water molecules in plasma and remain dissolved.",
          "Water molecules surround ions and polar groups, forming hydration shells that stabilise them in solution.",
          "Triglycerides are non-polar and hydrophobic, so they do not interact favourably with water and do not form true aqueous solutions without additional transport mechanisms.",
        ],
      },
      {
        id: "t2-4-ex2",
        title: "High specific heat and habitat stability",
        problem: [
          "A shallow pond warms and cools more slowly than nearby dry soil over a day. Use water properties to explain this.",
        ],
        solution: [
          "Pond water has high specific heat capacity due to hydrogen bonding. A large energy input is needed for a relatively small temperature increase, and much energy must be lost for a similar decrease.",
          "So pond temperature changes more slowly than soil temperature under similar heating and cooling conditions.",
          "This stabilises aquatic environments, reducing rapid thermal stress on organisms.",
        ],
      },
      {
        id: "t2-4-ex3",
        title: "Evaporative cooling in leaves and skin",
        problem: [
          "Explain why evaporation of water from leaf surfaces or skin causes cooling.",
        ],
        solution: [
          "To evaporate, water molecules must overcome intermolecular attractions, so energy is required to break hydrogen bonds.",
          "This energy is taken from the leaf or skin surface. Molecules with higher kinetic energy are most likely to escape first, reducing average kinetic energy of the remaining liquid.",
          "Lower average kinetic energy means lower temperature, so the surface cools.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t2-4-st1",
        question:
          "Describe how hydrogen bonds arise between water molecules.",
        modelAnswer: [
          "Water is polar, with partial positive charges on hydrogen atoms and a partial negative charge on oxygen. The partially positive hydrogen of one molecule is attracted to the partially negative oxygen of another, forming a hydrogen bond.",
        ],
      },
      {
        id: "t2-4-st2",
        question:
          "Relate water's polarity to its role as a transport medium in organisms.",
        modelAnswer: [
          "Because water is polar, it dissolves many ionic and polar solutes, allowing substances such as ions, glucose and amino acids to be transported in blood, tissue fluid and plant transport systems.",
        ],
      },
      {
        id: "t2-4-st3",
        question:
          "What is meant by high specific heat capacity, and why is it biologically important?",
        modelAnswer: [
          "It means a large amount of energy is needed to raise water temperature by 1 degree per unit mass. Biologically this buffers temperature changes in organisms and aquatic habitats, helping maintain stable conditions for enzymes and metabolism.",
        ],
      },
      {
        id: "t2-4-st4",
        question:
          "Define latent heat of vaporisation and connect it to sweating.",
        modelAnswer: [
          "Latent heat of vaporisation is the energy needed to convert liquid water to vapour without temperature change. Because this value is high for water, evaporation of sweat removes substantial energy from skin, causing cooling.",
        ],
      },
      {
        id: "t2-4-st5",
        question:
          "A student writes: 'Water cools organisms because water itself is cold.' Rewrite this as an exam-quality explanation.",
        modelAnswer: [
          "Water cools organisms mainly through evaporation. High latent heat of vaporisation means energy is required to break hydrogen bonds so molecules can escape as vapour; this energy is taken from the organism, lowering surface temperature.",
        ],
      },
    ],
  },
};
