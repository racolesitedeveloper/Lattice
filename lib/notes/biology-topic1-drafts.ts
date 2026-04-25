import type { NoteDraft } from "./types";

/** Full teaching notes for 9700 Topic 1 — subtopics 1.1-1.2. */
export const BIOLOGY_TOPIC1_DRAFTS: Record<string, NoteDraft> = {
  "t1-1": {
    noteId: "t1-1",
    syllabusNotes: [
      {
        id: "temporary-preparations",
        title: "Temporary preparations for light microscopy",
        paragraphs: [
          "A temporary preparation is a fresh specimen mounted so that cells can be observed quickly with a light microscope. Typical material includes onion epidermis, Elodea leaf, cheek epithelium or pond samples. The aim is to obtain a thin, undamaged sample so that light passes through and cell boundaries are clear.",
          "A standard method is: place a small drop of water or stain on a clean slide, transfer a very thin specimen into the drop, lower a coverslip at an angle to reduce air bubbles, and remove excess liquid with filter paper. Stains such as iodine solution (plant material) or methylene blue (animal cells) can increase contrast so structures are easier to see.",
          "Good practical technique matters in Cambridge practical papers. Avoid thick samples, folded tissue, excess stain and cracked coverslips. Begin focusing with low power objective, use coarse focus first, then fine focus only at higher power.",
        ],
      },
      {
        id: "biological-drawing",
        title: "Drawing cells from microscope views and photomicrographs",
        paragraphs: [
          "Biological drawings are communication tools, not sketches. Draw what is visible, not what is expected. Use a sharp pencil, clear continuous lines, no shading, and labels that are ruled and horizontal. Include a title and either a scale bar or magnification statement if required.",
          "When drawing from a microscope field or photomicrograph, judge proportions first: overall cell outline, relative nucleus size, wall thickness, and arrangement of visible organelles. Examiners credit accuracy of shape and proportion more than decorative detail.",
          "If the source image is an electron micrograph, represent ultrastructure that is genuinely visible (for example cristae, thylakoids, nuclear envelope) and avoid adding features that are not present in that image.",
        ],
      },
      {
        id: "magnification-and-size",
        title: "Magnification and actual size calculations",
        paragraphs: [
          "Magnification is how many times larger an image is than the actual specimen. Use M = image size / actual size and rearrange as needed. If two values are known, the third follows directly by algebra.",
          "Always use consistent units before substitution. For cell biology, mm, μm and nm are common. Useful conversions: 1 mm = 1000 μm and 1 μm = 1000 nm (so 1 mm = 10⁶ nm).",
          "The same calculation methods apply to drawings, photomicrographs, scanning electron micrographs (SEM) and transmission electron micrographs (TEM). Electron micrographs often have large stated magnifications, so unit conversion errors are a frequent source of lost marks.",
        ],
      },
      {
        id: "graticule-and-micrometer",
        title: "Using eyepiece graticule and stage micrometer",
        paragraphs: [
          "An eyepiece graticule has arbitrary divisions, so it must be calibrated against a stage micrometer at each objective lens. A stage micrometer is a slide with a precise scale (commonly 1 mm divided into 100 divisions, so each division is 0.01 mm = 10 μm).",
          "Calibration procedure: focus both scales, align zero marks, count how many eyepiece divisions match a known stage-micrometer distance, then compute the value of one eyepiece division in μm (or nm for very small structures). Repeat calibration when objective magnification changes.",
          "After calibration, measure the specimen in eyepiece divisions and convert to actual size. Report in sensible units: cells often in μm, larger tissues in mm, viruses in nm.",
        ],
      },
      {
        id: "magnification-vs-resolution",
        title: "Magnification and resolution in light and electron microscopes",
        paragraphs: [
          "Magnification is enlargement. Resolution is the ability to distinguish two close points as separate. High magnification without sufficient resolution gives a larger but not clearer image.",
          "Light microscopes typically resolve down to about 200 nm, limited by the wavelength of visible light. Electron microscopes use electron beams with much shorter effective wavelength, so resolution is much higher and ultrastructural detail becomes visible.",
          "SEM gives detailed 3-D surface views; TEM gives high-resolution 2-D internal ultrastructure. Both can achieve much greater magnification and resolution than light microscopy, but specimens are dead and preparation is complex.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners reward precise practical language, correct unit handling and clear distinction between imaging terms. Marks are often lost by technically weak definitions and calibration mistakes.",
      items: [
        "Defining magnification as image clarity, or resolution as image size; magnification and resolution are different properties.",
        "Using M = actual size / image size instead of M = image size / actual size.",
        "Mixing mm, μm and nm in one calculation without converting first.",
        "Calibrating an eyepiece graticule once and assuming that value is unchanged at all objective lenses.",
        "Adding shading and artistic detail to biological drawings instead of clear outlines and accurate proportions.",
      ],
    },
    workedExamples: [
      {
        id: "t1-1-ex1",
        title: "Actual size from photomicrograph and magnification",
        problem: [
          "A plant cell in a photomicrograph measures 48 mm. The stated magnification is ×1200. Calculate the actual cell length in μm.",
        ],
        solution: [
          "Use M = image size / actual size, so actual size = image size / M.",
          "Actual size = 48 mm / 1200 = 0.040 mm.",
          "Convert to micrometres: 0.040 mm × 1000 = 40 μm. The actual cell length is 40 μm.",
        ],
      },
      {
        id: "t1-1-ex2",
        title: "Calibrating an eyepiece graticule",
        problem: [
          "At a given objective lens, 50 eyepiece divisions align with 0.20 mm on the stage micrometer. Find the value of one eyepiece division in μm.",
        ],
        solution: [
          "Convert stage distance to micrometres: 0.20 mm = 200 μm.",
          "If 50 eyepiece divisions correspond to 200 μm, then 1 eyepiece division = 200/50 μm.",
          "So 1 eyepiece division = 4.0 μm. This calibration is valid only for this objective lens.",
        ],
      },
      {
        id: "t1-1-ex3",
        title: "Resolution versus magnification judgement",
        problem: [
          "Image A is a light-microscope image at ×1000. Image B is an electron-microscope image at ×800. Which is more suitable to resolve ribosomes, and why?",
        ],
        solution: [
          "Ribosomes are very small structures, so the key requirement is high resolution, not just a larger magnification number.",
          "Even at lower stated magnification, an electron microscope has far higher resolving power than a light microscope.",
          "Therefore Image B is more suitable for resolving ribosomes because resolution determines whether close details are distinguishable.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t1-1-st1",
        question:
          "Outline a safe, effective method to produce a temporary slide of onion epidermis for light microscopy.",
        modelAnswer: [
          "Place a drop of water or iodine on a clean slide, transfer a very thin epidermal strip into the drop, and lower a coverslip at an angle to minimise bubbles.",
          "Blot excess liquid, start focusing on low power with coarse focus, then use fine focus at higher power.",
          "Accept references to careful handling, thin specimen and appropriate staining for contrast.",
        ],
      },
      {
        id: "t1-1-st2",
        question:
          "Define magnification and resolution, then state one key difference between them.",
        modelAnswer: [
          "Magnification is image size divided by actual size.",
          "Resolution is the ability to distinguish two close points as separate.",
          "Magnification enlarges; resolution determines clarity of close detail.",
        ],
      },
      {
        id: "t1-1-st3",
        question:
          "A TEM image is labelled ×25 000. A mitochondrion appears 75 mm long in the image. Calculate its actual length in μm.",
        modelAnswer: [
          "Actual size = image size / magnification = 75 mm / 25 000 = 0.0030 mm.",
          "0.0030 mm = 3.0 μm.",
        ],
      },
      {
        id: "t1-1-st4",
        question:
          "At one objective lens, 1 eyepiece division equals 2.5 μm. A chloroplast measures 6 eyepiece divisions. Estimate its length.",
        modelAnswer: [
          "Length = 6 × 2.5 μm = 15 μm.",
        ],
      },
      {
        id: "t1-1-st5",
        question:
          "State one reason an SEM is preferred to a light microscope for detailed surface study, and one limitation of SEM.",
        modelAnswer: [
          "SEM has much higher resolution, so fine surface detail is distinguishable.",
          "A limitation is that specimens are dead and preparation is complex (for example vacuum conditions and coating).",
        ],
      },
    ],
  },

  "t1-2": {
    noteId: "t1-2",
    syllabusNotes: [
      {
        id: "eukaryotic-organelles",
        title: "Eukaryotic cell structures: recognition, structure and function",
        paragraphs: [
          "Cambridge expects accurate identification of organelles in photomicrographs, electron micrographs and clear line drawings. In eukaryotic cells, compartmentalisation allows different biochemical processes to occur efficiently in specific regions.",
          "Cell surface membrane: phospholipid bilayer with proteins, controlling movement of substances and cell signalling. Nucleus: contains chromatin; nuclear envelope is a double membrane with pores for exchange; nucleolus is the site of rRNA synthesis and ribosome assembly.",
          "Rough endoplasmic reticulum (RER): flattened cisternae with bound 80S ribosomes, involved in synthesis and transport of proteins for secretion or membranes. Smooth endoplasmic reticulum (SER): no ribosomes, associated with lipid synthesis and intracellular transport. Golgi body modifies proteins and lipids, sorts them, and packages vesicles including lysosomes.",
          "Mitochondria have double membranes, folded inner membrane (cristae), matrix enzymes, and small circular DNA; they are major sites of aerobic respiration and ATP production. Ribosomes are 80S in eukaryotic cytoplasm; 70S occur in chloroplasts and mitochondria.",
          "Lysosomes are membrane-bound vesicles containing hydrolytic enzymes for intracellular digestion. Centrioles and associated microtubules organise spindle formation in cell division. Cilia contain microtubules and move fluid or cells. Microvilli are membrane projections that increase surface area for absorption.",
          "Plant-specific structures include chloroplasts with thylakoids and stroma, and small circular DNA; a cellulose cell wall for support; plasmodesmata connecting adjacent cell cytoplasm; a large permanent vacuole containing cell sap; and tonoplast, the vacuolar membrane regulating exchange.",
        ],
      },
      {
        id: "interpreting-cell-images",
        title: "Interpreting photomicrographs, electron micrographs and drawings",
        paragraphs: [
          "Photomicrographs from light microscopes show general cell outlines and larger structures; electron micrographs reveal ultrastructure. Correct interpretation depends on scale, contrast and section orientation.",
          "In electron micrographs, identify membranes, double-membrane organelles, ribosomes as small dense dots, and stacked membranes such as RER or Golgi cisternae. Distinguish preparation artefacts from true structures by consistency across the image.",
          "When interpreting drawings, use labelled features and proportions to infer cell type. A thick wall, chloroplasts and large central vacuole indicate a typical plant cell; lack of cell wall and chloroplasts with flexible outline suggests a typical animal cell.",
        ],
      },
      {
        id: "plant-vs-animal",
        title: "Comparison of typical plant and animal cells",
        paragraphs: [
          "Both plant and animal cells are eukaryotic and share key structures such as nucleus, mitochondria, ER, Golgi, cell surface membrane and 80S cytoplasmic ribosomes.",
          "Typical plant cells possess a cellulose cell wall, chloroplasts in photosynthetic tissues, plasmodesmata, and a large permanent vacuole with tonoplast. These features contribute to support, intercellular communication, photosynthesis and osmotic regulation.",
          "Typical animal cells lack a cellulose wall, chloroplasts and a large permanent central vacuole. They often show centrioles and can have specialised surface structures such as microvilli or cilia depending on function.",
        ],
      },
      {
        id: "atp-and-cellular-work",
        title: "ATP as the immediate energy source in cells",
        paragraphs: [
          "Cells require energy for active processes including active transport, biosynthesis, movement of cilia or microtubules, and cell division. In both plant and animal cells, ATP from respiration provides this immediate transferable energy.",
          "ATP hydrolysis releases usable energy in small steps, allowing coupling to endergonic reactions. Mitochondria are central to ATP generation in aerobic respiration in eukaryotic cells.",
          "Stating only that cells need energy is insufficient in exam answers: the syllabus wording expects explicit reference to ATP from respiration for energy-requiring processes.",
        ],
      },
      {
        id: "prokaryotic-cell-structure",
        title: "Typical prokaryotic cell (bacterium): key structural features",
        paragraphs: [
          "A typical bacterium is a unicellular prokaryote, commonly about 1-5 μm in diameter. Prokaryotic cells have peptidoglycan cell walls, circular DNA, and 70S ribosomes.",
          "They lack membrane-bound organelles with double membranes, such as nucleus, mitochondria and chloroplasts. Genetic material is not enclosed by a nuclear envelope.",
          "Some prokaryotes may have additional structures such as capsules, plasmids or flagella, but core syllabus comparison focuses on the listed features.",
        ],
      },
      {
        id: "prokaryote-vs-eukaryote-and-viruses",
        title: "Comparing prokaryotic and eukaryotic cells, and the non-cellular nature of viruses",
        paragraphs: [
          "Compared with typical plant and animal eukaryotic cells, prokaryotic cells are smaller, structurally simpler, and lack membrane-bound organelles. Eukaryotes contain compartmentalised organelles and linear chromosomes in a nucleus.",
          "Ribosome size differs: prokaryotic cytoplasmic ribosomes are 70S, whereas eukaryotic cytoplasmic ribosomes are 80S. Both mitochondria and chloroplasts contain 70S ribosomes and small circular DNA, a key comparative point in cell biology.",
          "Viruses are non-cellular structures, not cells. All viruses have a nucleic acid core (DNA or RNA) and a protein capsid; some also possess an outer phospholipid envelope. Because they are acellular, viruses do not have cytoplasm, ribosomes or independent metabolism.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "High-scoring answers use exact cell-biology vocabulary and clear structural-function links. Generic statements such as 'contains organelles' are usually too weak for full credit.",
      items: [
        "Confusing 70S and 80S ribosome locations, especially forgetting that mitochondria and chloroplasts contain 70S ribosomes.",
        "Describing prokaryotes as having a nucleus or mitochondria; these are absent.",
        "Stating that viruses are very small cells; viruses are non-cellular.",
        "Listing organelles without linking at least one structural feature to function when the question asks for outline structure and function.",
        "Using plant-animal comparisons that ignore key plant features such as cell wall, chloroplasts, large permanent vacuole and plasmodesmata.",
      ],
    },
    workedExamples: [
      {
        id: "t1-2-ex1",
        title: "Identifying cell type from ultrastructure",
        problem: [
          "An electron micrograph shows a cell with a cellulose wall, chloroplasts, plasmodesmata and a large vacuole. Identify the cell type and justify your answer using visible features.",
        ],
        solution: [
          "This is a typical plant eukaryotic cell.",
          "A cellulose wall and plasmodesmata are plant structural features, and chloroplasts indicate photosynthetic plant tissue.",
          "A large permanent vacuole with tonoplast is also characteristic of plant cells and not typical of animal cells.",
        ],
      },
      {
        id: "t1-2-ex2",
        title: "Prokaryote-eukaryote comparison",
        problem: [
          "State three structural differences between a typical bacterium and a typical animal cell.",
        ],
        solution: [
          "A bacterium has no nucleus (DNA is circular and not enclosed by a nuclear envelope), whereas an animal cell has a nucleus with linear chromosomes.",
          "A bacterium has 70S ribosomes, while an animal cell cytoplasm has 80S ribosomes.",
          "A bacterium lacks membrane-bound organelles such as mitochondria; an animal cell contains mitochondria and other membrane-bound organelles.",
        ],
      },
      {
        id: "t1-2-ex3",
        title: "Viruses and cellular organisation",
        problem: [
          "Explain why viruses are described as non-cellular, and list the universal and variable structural components of viruses.",
        ],
        solution: [
          "Viruses are non-cellular because they are not made of cells and lack cytoplasm, ribosomes and independent metabolic machinery.",
          "All viruses possess a nucleic acid core (either DNA or RNA) and a protein capsid.",
          "Some viruses additionally have an outer phospholipid envelope, but this envelope is not universal.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t1-2-st1",
        question:
          "State the structure and one function each of the nucleus, RER and Golgi body.",
        modelAnswer: [
          "Nucleus: double-membrane nuclear envelope with pores, containing chromatin; function is storage and control of genetic information and transcriptional control.",
          "RER: flattened membrane cisternae with attached ribosomes; function is synthesis and transport of proteins for secretion or membranes.",
          "Golgi body: stack of flattened membrane sacs with associated vesicles; function is modification, sorting and packaging of proteins or lipids, including lysosome formation.",
        ],
      },
      {
        id: "t1-2-st2",
        question:
          "Give five features that distinguish a typical plant cell from a typical animal cell.",
        modelAnswer: [
          "Plant cell has cellulose cell wall, chloroplasts in photosynthetic cells, large permanent vacuole, tonoplast, and plasmodesmata.",
          "Typical animal cell lacks these plant-specific structures.",
        ],
      },
      {
        id: "t1-2-st3",
        question:
          "Outline key structural features of a typical prokaryotic cell as required by the syllabus.",
        modelAnswer: [
          "Unicellular; typically about 1-5 μm diameter; peptidoglycan cell wall; circular DNA; 70S ribosomes; no organelles surrounded by double membranes.",
        ],
      },
      {
        id: "t1-2-st4",
        question:
          "State where 80S and 70S ribosomes are found in eukaryotic cells.",
        modelAnswer: [
          "80S ribosomes are in the eukaryotic cytoplasm (including on RER).",
          "70S ribosomes are inside mitochondria and chloroplasts.",
        ],
      },
      {
        id: "t1-2-st5",
        question:
          "Explain the statement: cells use ATP from respiration for energy-requiring processes.",
        modelAnswer: [
          "Respiration releases energy used to synthesise ATP, and ATP hydrolysis supplies immediate usable energy for cellular work such as active transport, biosynthesis, movement and division.",
          "Therefore ATP is the direct energy currency linking respiration to energy-requiring processes.",
        ],
      },
    ],
  },
};
