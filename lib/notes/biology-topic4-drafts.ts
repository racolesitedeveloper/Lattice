import type { NoteDraft } from "./types";

/** Full teaching notes for 9700 Topic 4 — subtopics 4.1-4.2. */
export const BIOLOGY_TOPIC4_DRAFTS: Record<string, NoteDraft> = {
  "t4-1": {
    noteId: "t4-1",
    syllabusNotes: [
      {
        id: "fluid-mosaic-core-idea",
        title: "Fluid mosaic model: what the membrane is and why it forms",
        paragraphs: [
          "The cell surface membrane is described as a fluid mosaic. Fluid means many membrane components can move laterally within the plane of the membrane. Mosaic means the membrane is a mixture of phospholipids, proteins, cholesterol, glycolipids and glycoproteins arranged in an uneven pattern rather than a repeating crystal-like pattern.",
          "A phospholipid has a hydrophilic phosphate head and hydrophobic fatty acid tails. In water, phospholipids spontaneously arrange as a bilayer with heads facing watery environments on both sides and tails pointing inward away from water. The bilayer forms because this arrangement is energetically more stable than exposing hydrophobic tails to water.",
          "Membrane proteins are arranged with hydrophobic regions in the hydrophobic core and hydrophilic regions where they contact aqueous cytoplasm or tissue fluid. Some proteins span the bilayer (intrinsic proteins), while others are attached to one surface (extrinsic proteins).",
        ],
      },
      {
        id: "membrane-components-arrangement",
        title: "Arrangement of cholesterol, glycolipids and glycoproteins",
        paragraphs: [
          "Cholesterol molecules are positioned between phospholipid molecules in both halves of the bilayer. Their small polar region associates near phospholipid heads, while the non-polar steroid region lies among fatty acid tails.",
          "Glycolipids are lipids with short carbohydrate chains projecting from the outer surface of the membrane. Glycoproteins are membrane proteins with carbohydrate chains that also project from the outer surface. These carbohydrate chains are therefore mainly exposed to the extracellular side of the membrane.",
          "Because their carbohydrate chains project outward, glycolipids and glycoproteins contribute to membrane asymmetry: the two membrane surfaces are not chemically identical.",
        ],
      },
      {
        id: "roles-of-major-components",
        title: "Roles of membrane components in stability, fluidity, permeability and transport",
        paragraphs: [
          "Phospholipids create the selectively permeable barrier. Small non-polar molecules (such as oxygen and carbon dioxide) pass through relatively easily, while ions and most polar molecules require proteins. This is the basis of selective permeability.",
          "Cholesterol contributes to mechanical stability and regulates fluidity. It restrains phospholipid movement at high temperatures, reducing excessive membrane fluidity and permeability. At lower temperatures, it helps prevent phospholipids from packing too tightly, reducing membrane solidification.",
          "Channel proteins form hydrophilic pores for specific ions or water to cross by diffusion. Carrier proteins bind a specific substance and change shape to move it across the membrane. These proteins are central to membrane transport in both facilitated diffusion and active transport systems.",
        ],
      },
      {
        id: "cell-signalling-and-recognition",
        title: "Cell signalling, receptors and cell recognition",
        paragraphs: [
          "Cell surface receptors are usually proteins or glycoproteins that bind specific signalling molecules (ligands). The shape and chemical properties of the receptor binding site determine ligand specificity.",
          "Main stages of cell signalling are: secretion of a specific ligand by one cell, transport of that ligand to target cells (for example in tissue fluid or blood), and binding of ligand to complementary receptors on target cell membranes. This binding triggers intracellular responses that alter cell activity.",
          "Glycoproteins and glycolipids also act in cell recognition, especially as cell surface antigens. These surface markers allow cells to distinguish self from non-self, which is essential for immune responses and tissue compatibility.",
        ],
      },
      {
        id: "integrated-model",
        title: "How structure explains membrane behaviour",
        paragraphs: [
          "The membrane is dynamic: phospholipids and many proteins move laterally, so local composition can change during processes such as vesicle fusion, receptor clustering and endocytosis. This dynamic behavior is why the model is fluid, not static.",
          "The membrane is not just a boundary; it is an interface for controlled exchange, communication and identification. In exam responses, the highest-level explanations connect a named structure (for example channel protein, cholesterol, glycoprotein) to a specific function (for example ion transport, fluidity control, antigenic recognition).",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners reward precise links between membrane structure and function. Marks are often lost when candidates list components without explaining the role each one plays.",
      items: [
        "Describing the membrane as a rigid phospholipid sheet; the model is fluid and includes mobile proteins.",
        "Saying all molecules diffuse directly through phospholipids; ions and many polar solutes need channel or carrier proteins.",
        "Mixing up glycoproteins and glycolipids with phospholipids; only glyco-components carry exposed carbohydrate chains for recognition/signalling.",
        "Claiming cholesterol always increases membrane fluidity; it buffers fluidity, reducing excess fluidity at high temperature and reducing solidification at low temperature.",
        "Giving cell signalling as a single event; Cambridge expects secretion of ligand, transport to target, and receptor binding to be outlined clearly.",
      ],
    },
    workedExamples: [
      {
        id: "t4-1-ex1",
        title: "Linking membrane components to function",
        problem: [
          "A marker molecule is impermeable to phospholipid bilayers unless a membrane protein is present. Explain which membrane component is most likely responsible for its transport and why phospholipids alone are insufficient.",
        ],
        solution: [
          "If the molecule cannot cross a pure phospholipid bilayer, it is likely to be polar, charged, or relatively large. Such molecules are blocked by the hydrophobic core of fatty acid tails.",
          "Transport is therefore likely via a specific membrane protein. If movement is down a concentration gradient, it is facilitated diffusion through a channel protein or carrier protein. If movement is against a concentration gradient, it involves a carrier associated with active transport and ATP use.",
          "Phospholipids form the selective barrier; proteins provide selective pathways through that barrier.",
        ],
      },
      {
        id: "t4-1-ex2",
        title: "Predicting effects of cholesterol removal",
        problem: [
          "A student artificially removes much of the cholesterol from mammalian cell membranes and then raises temperature. Predict two likely membrane effects and explain them.",
        ],
        solution: [
          "Without normal cholesterol content, phospholipids move more freely at higher temperature. Membrane fluidity therefore increases more than usual.",
          "Greater fluidity usually increases permeability, so leakage of ions or small polar solutes becomes more likely.",
          "Cholesterol normally stabilises membrane structure and restrains phospholipid movement; removing it reduces thermal stability.",
        ],
      },
      {
        id: "t4-1-ex3",
        title: "Applying the cell-signalling stages",
        problem: [
          "Outline the stages by which a hormone released from endocrine cells produces a response in distant target cells with appropriate receptors.",
        ],
        solution: [
          "First, endocrine cells secrete the specific hormone ligand into the bloodstream.",
          "Second, blood transports the ligand throughout the body, bringing it into contact with many cells, but only some are target cells.",
          "Third, target cells have complementary cell surface receptors that bind the ligand. Ligand-receptor binding causes a membrane or intracellular signalling change that initiates a specific cellular response.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t4-1-st1",
        question:
          "Describe the fluid mosaic model, including hydrophobic and hydrophilic interactions that produce phospholipid bilayers.",
        modelAnswer: [
          "The cell surface membrane is a phospholipid bilayer containing proteins, cholesterol and glyco-components in a mosaic arrangement. Phospholipid hydrophilic heads face aqueous environments on both sides, while hydrophobic tails face inward away from water. This arrangement forms spontaneously because it is energetically stable in water. Fluid means many phospholipids and proteins can move laterally within the bilayer.",
        ],
      },
      {
        id: "t4-1-st2",
        question:
          "State where cholesterol, glycolipids and glycoproteins are arranged in cell surface membranes.",
        modelAnswer: [
          "Cholesterol is located between phospholipids within the bilayer. Glycolipids are lipids in the membrane with carbohydrate chains projecting from the outer surface. Glycoproteins are membrane proteins with carbohydrate chains that also project from the outer surface.",
        ],
      },
      {
        id: "t4-1-st3",
        question:
          "Explain two roles of proteins in membranes, referring to channel proteins, carrier proteins and receptors.",
        modelAnswer: [
          "Channel proteins form hydrophilic pores for specific ions or water to cross membranes by diffusion. Carrier proteins bind specific solutes and change shape to move them across the membrane in facilitated diffusion or active transport. Receptor proteins on the cell surface bind specific ligands and initiate signalling responses inside target cells.",
        ],
      },
      {
        id: "t4-1-st4",
        question:
          "How do glycolipids and glycoproteins contribute to cell recognition?",
        modelAnswer: [
          "Their carbohydrate chains project from the outer membrane surface and act as cell surface markers (antigens). These markers allow recognition of cell identity, including self versus non-self in immune responses.",
        ],
      },
      {
        id: "t4-1-st5",
        question:
          "Outline the main stages of cell signalling from one cell to a specific target cell.",
        modelAnswer: [
          "A signalling cell secretes a specific chemical ligand. The ligand is transported to target cells (for example in tissue fluid or blood). It binds to complementary receptors on the target cell surface membrane, triggering specific intracellular responses.",
        ],
      },
    ],
  },

  "t4-2": {
    noteId: "t4-2",
    syllabusNotes: [
      {
        id: "passive-and-active-transport",
        title: "Simple diffusion, facilitated diffusion and active transport",
        paragraphs: [
          "Simple diffusion is the net movement of molecules from higher to lower concentration due to random molecular motion, without metabolic energy. It can occur through phospholipid bilayers for small non-polar molecules such as oxygen and carbon dioxide.",
          "Facilitated diffusion is also passive (no ATP required) and down a concentration gradient, but it depends on membrane proteins. Channel proteins provide hydrophilic pores, while carrier proteins bind solutes and change conformation. This allows polar molecules and ions to cross membranes selectively.",
          "Active transport moves substances against their concentration gradient (from lower to higher concentration), so metabolic energy is required, usually from ATP. Carrier proteins or pumps are involved. This process is essential where cells must accumulate ions or molecules above external levels.",
        ],
      },
      {
        id: "osmosis-and-water-potential",
        title: "Osmosis and water potential",
        paragraphs: [
          "Osmosis is the net movement of water molecules across a partially permeable membrane from higher water potential to lower water potential. Water potential is a measure of free energy of water; by convention pure water has the highest water potential (0 kPa) and adding solute lowers water potential (more negative values).",
          "Water moves into cells if the outside solution has a higher water potential than the cell contents, and moves out of cells if outside water potential is lower. Knowledge of separate solute and pressure potential terms is not required here; water potential gradients are sufficient.",
          "Plant and animal cells respond differently to water movement because plants have a cellulose cell wall while animal cells do not. Plant cells can become turgid in higher external water potential and plasmolysed when water leaves; animal cells can swell and burst in very dilute solutions or shrink (crenate) in concentrated solutions.",
        ],
      },
      {
        id: "bulk-transport-vesicles",
        title: "Endocytosis and exocytosis",
        paragraphs: [
          "Endocytosis is uptake of material into a cell by infolding of the cell surface membrane to form vesicles. It allows bulk transport of large particles or large volumes of fluid that cannot pass through transport proteins.",
          "Exocytosis is release of material when intracellular vesicles fuse with the cell surface membrane and discharge contents outside the cell. Secretion of enzymes, hormones and neurotransmitters uses exocytosis.",
          "Both endocytosis and exocytosis require ATP and involve dynamic membrane behaviour, including membrane reshaping and vesicle movement.",
        ],
      },
      {
        id: "surface-area-volume-principle",
        title: "Surface area to volume ratio and exchange efficiency",
        paragraphs: [
          "For simple shapes, surface area scales with length squared while volume scales with length cubed. As size increases, volume rises faster than surface area, so surface area to volume ratio (SA:V) decreases.",
          "A high SA:V supports faster exchange per unit volume because more membrane area is available relative to metabolic demand. A low SA:V can limit diffusion rates relative to cell volume, which is one reason many cells remain microscopic or develop exchange adaptations.",
          "In practical calculations, use SA:V = total surface area / volume with consistent units. For example, for a cube of side length l: SA = 6l², V = l³, so SA:V = 6/l.",
        ],
      },
      {
        id: "required-practicals-topic-4-2",
        title: "Required practical investigations and interpretation",
        paragraphs: [
          "Simple diffusion and osmosis can be investigated using non-living materials such as agar and dialysis (Visking) tubing, and using plant tissues such as potato cylinders. In diffusion practicals with indicator agar, diffusion distance or decolourised volume is used as a proxy for rate.",
          "To test SA:V effects, compare agar blocks of different sizes in the same diffusion conditions. Smaller blocks, with larger SA:V, show more rapid penetration relative to block size. This supports the principle that decreasing size increases relative exchange area.",
          "Water potential of plant tissue is estimated by immersing equal-sized tissue samples in solutions of known water potential (or known concentration of a solute such as sucrose), then measuring mass or length change. The solution giving approximately no net change indicates tissue water potential.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Most marks are lost by confusing transport definitions or by giving practical conclusions without linking them to gradients and membrane properties.",
      items: [
        "Defining osmosis as movement of water from dilute to concentrated solution without mentioning a partially permeable membrane or water potential gradient.",
        "Calling facilitated diffusion active transport; facilitated diffusion is passive and down a concentration gradient.",
        "Stating active transport is 'faster diffusion'; active transport is a different ATP-dependent process against a gradient.",
        "Using SA:V language backwards (for example saying SA:V increases as size increases).",
        "Estimating plant tissue water potential from a single sample rather than a range that identifies the point of no net mass or length change.",
      ],
    },
    workedExamples: [
      {
        id: "t4-2-ex1",
        title: "Classifying membrane transport processes",
        problem: [
          "For each process below, state whether ATP is required and whether movement is down or against a concentration gradient: simple diffusion, facilitated diffusion, active transport.",
        ],
        solution: [
          "Simple diffusion: no ATP required; net movement is down a concentration gradient.",
          "Facilitated diffusion: no ATP required; net movement is down a concentration gradient via channel or carrier proteins.",
          "Active transport: ATP required; net movement is against a concentration gradient via specific transport proteins.",
        ],
      },
      {
        id: "t4-2-ex2",
        title: "Surface area to volume comparison with cubes",
        problem: [
          "Calculate SA:V for agar cubes of side 1 cm and 3 cm. Use this to predict which cube shows faster diffusion to the centre in the same time.",
        ],
        solution: [
          "For side 1 cm: SA = 6(1²) = 6 cm², V = 1³ = 1 cm³, so SA:V = 6:1.",
          "For side 3 cm: SA = 6(3²) = 54 cm², V = 3³ = 27 cm³, so SA:V = 2:1.",
          "The 1 cm cube has the larger SA:V, so diffusion reaches the centre more quickly relative to cube size. Therefore smaller cubes show faster complete penetration in diffusion practicals.",
        ],
      },
      {
        id: "t4-2-ex3",
        title: "Estimating tissue water potential from mass-change data",
        problem: [
          "Potato cylinders are immersed in sucrose solutions of known water potential. Mean percentage mass changes are: -12%, -6%, -1%, +4%, +9% as solution water potential becomes less negative across the series. Estimate the potato tissue water potential.",
        ],
        solution: [
          "No net water movement corresponds to approximately 0% mass change. In the data, values around -1% and +4% bracket the zero point.",
          "So tissue water potential is close to the solution water potential at the point between those two solutions. If exact solution values are provided, estimate by interpolation between them.",
          "Biological meaning: at this water potential, water enters and leaves tissue cells at equal rates, so mass is approximately unchanged.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t4-2-st1",
        question:
          "Define simple diffusion, facilitated diffusion and active transport, highlighting one key difference between each pair.",
        modelAnswer: [
          "Simple diffusion is passive net movement down a concentration gradient directly through the bilayer (typically for small non-polar molecules). Facilitated diffusion is passive net movement down a concentration gradient through specific channel or carrier proteins. Active transport is ATP-dependent movement through transport proteins against a concentration gradient.",
        ],
      },
      {
        id: "t4-2-st2",
        question:
          "Define osmosis in terms of water potential and explain why a partially permeable membrane is required.",
        modelAnswer: [
          "Osmosis is the net movement of water molecules across a partially permeable membrane from a region of higher water potential to a region of lower water potential. A partially permeable membrane is required so water can pass while at least some solutes are restricted, allowing a water potential gradient to drive net water movement.",
        ],
      },
      {
        id: "t4-2-st3",
        question:
          "Explain why plant and animal cells behave differently in very low external water potential solutions.",
        modelAnswer: [
          "In low external water potential, water leaves both cell types by osmosis. Plant cells lose turgor and may become plasmolysed as the protoplast pulls away from the cell wall; the wall limits complete collapse. Animal cells lack a cell wall, so water loss causes them to shrink (crenate) more directly.",
        ],
      },
      {
        id: "t4-2-st4",
        question:
          "What are endocytosis and exocytosis, and why are they important for transport of some substances?",
        modelAnswer: [
          "Endocytosis is membrane infolding to form vesicles that bring materials into the cell. Exocytosis is vesicle fusion with the plasma membrane to release materials outside the cell. They are important for bulk transport of large particles or macromolecules that cannot cross through channel or carrier proteins.",
        ],
      },
      {
        id: "t4-2-st5",
        question:
          "Describe how you would use plant tissue in different sucrose solutions to estimate tissue water potential.",
        modelAnswer: [
          "Prepare equal-sized tissue samples and measure their initial mass (or length). Immerse samples in a range of sucrose solutions of known water potentials for the same time at controlled temperature. Re-measure mass or length and calculate percentage change. Plot or inspect results to find the solution giving about 0% change; that solution water potential estimates the tissue water potential.",
        ],
      },
    ],
  },
};
