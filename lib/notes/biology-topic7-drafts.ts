import type { NoteDraft } from "./types";

/** Full teaching notes for 9700 Topic 7 — subtopics 7.1-7.2. */
export const BIOLOGY_TOPIC7_DRAFTS: Record<string, NoteDraft> = {
  "t7-1": {
    noteId: "t7-1",
    syllabusNotes: [
      {
        id: "plan-diagrams-and-biological-drawings",
        title: "Plan diagrams and labelled drawings from transport tissues",
        paragraphs: [
          "A plan diagram shows the distribution of tissues in a transverse section (TS) without drawing individual cell detail. In Topic 7, plan diagrams are required for herbaceous dicotyledonous stems, roots and leaves, so the key skill is placing tissue regions accurately in proportion.",
          "Detailed labelled drawings are then used for specific transport cell types: xylem vessel elements, phloem sieve tube elements and companion cells. In these drawings, examiners expect clear continuous lines, correct relative sizes, and labels that indicate recognisable structural features.",
          "When drawing from microscope slides, photomicrographs or electron micrographs, draw what is visible in that image. Do not add extra structures from memory if they are not visible; this is a common reason for losing biological-drawing marks.",
        ],
      },
      {
        id: "dicot-stem-ts-distribution",
        title: "Distribution of xylem and phloem in dicot stem transverse section",
        paragraphs: [
          "In a herbaceous dicot stem TS, vascular bundles are arranged in a ring near the outer region of the stem. This ring arrangement leaves a central pith and supports the stem while allowing transport to and from leaves and roots.",
          "Within each vascular bundle, xylem is on the inner side (towards the pith) and phloem is on the outer side (towards the cortex/epidermis). This inside-outside arrangement is a core identification feature in stem sections.",
          "Plan diagrams should therefore show separate bundles around the stem circumference, each with inner xylem and outer phloem, not a single central vascular cylinder as in roots.",
        ],
      },
      {
        id: "dicot-root-ts-distribution",
        title: "Distribution of xylem and phloem in dicot root transverse section",
        paragraphs: [
          "In a herbaceous dicot root TS, xylem is usually central, often star-shaped or X-shaped depending on section and species. Phloem occurs in groups between the arms of the xylem.",
          "This arrangement contrasts strongly with stems. In roots, the vascular tissues are centrally arranged rather than in separate peripheral bundles.",
          "Accurate recognition of this pattern is essential in practical interpretation questions: central xylem with phloem between xylem arms indicates a dicot root section.",
        ],
      },
      {
        id: "dicot-leaf-ts-distribution",
        title: "Distribution of xylem and phloem in dicot leaf transverse section",
        paragraphs: [
          "In a dicot leaf TS, vascular tissue lies in veins (vascular bundles) within the mesophyll. Xylem is oriented towards the upper epidermis (adaxial side), while phloem is oriented towards the lower epidermis (abaxial side).",
          "Large veins (for example the midrib) show this arrangement clearly, while smaller veins follow the same principle with reduced scale.",
          "In plan and interpretive diagrams, this upper-xylem/lower-phloem orientation helps identify whether a section is from leaf tissue and confirms transport polarity in relation to leaf surfaces.",
        ],
      },
      {
        id: "xylem-vessel-element-structure-function",
        title: "Xylem vessel elements: structure linked to transport and support",
        paragraphs: [
          "Xylem vessel elements are elongated dead cells joined end-to-end to form continuous vessels for water transport. Loss of cell contents and absence of an intact cross-wall lumen in mature vessels reduce resistance to mass flow of water.",
          "Their walls are thickened with lignin. Lignification strengthens vessel walls so they resist collapse under the negative pressure (tension) generated during transpiration pull.",
          "Cellulose contributes wall framework, while lignin adds rigidity and waterproofing. Pits (unlignified regions) allow lateral movement of water between adjacent vessels and surrounding tissues when pathways are blocked or demand shifts.",
        ],
      },
      {
        id: "sieve-tubes-and-companion-cells",
        title: "Phloem sieve tube elements and companion cells: structure linked to translocation",
        paragraphs: [
          "Sieve tube elements are living cells arranged end-to-end. Their end walls form sieve plates with pores that allow movement of phloem sap between neighbouring sieve elements.",
          "Mature sieve tube elements have very little cytoplasm and no nucleus, which reduces resistance to mass flow of assimilates. Because of this reduced internal machinery, they depend metabolically on adjacent companion cells.",
          "Companion cells contain a nucleus, many mitochondria and dense cytoplasm. They are connected to sieve tube elements by plasmodesmata and provide ATP and transport proteins needed for loading and unloading assimilates, especially sucrose and amino acids.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Topic 7.1 practical and theory marks depend on precise tissue distribution and explicit structure-function links. High-scoring answers do more than name xylem and phloem; they explain why each structural feature matters.",
      items: [
        "Drawing cell-level details in a plan diagram. A plan diagram should show tissue arrangement only, with accurate relative positions.",
        "Confusing stem and root distribution: dicot stem has vascular bundles in a ring, whereas dicot root has central xylem with phloem between xylem arms.",
        "In leaf TS, reversing vascular orientation; xylem is nearer upper epidermis and phloem nearer lower epidermis.",
        "Calling xylem vessels living transport cells; mature vessel elements are dead and hollow for low-resistance water flow.",
        "Describing sieve tube elements as independent cells with a nucleus; mature sieve tube elements lack a nucleus and rely on companion cells.",
      ],
    },
    workedExamples: [
      {
        id: "t7-1-ex1",
        title: "Identifying dicot stem, root and leaf transport arrangements",
        problem: [
          "Three transverse sections are described. Section A has separate vascular bundles in a ring, each with inner xylem and outer phloem. Section B has central star-shaped xylem with phloem between arms. Section C has veins with xylem towards upper surface and phloem towards lower surface. Identify each organ.",
        ],
        solution: [
          "Section A is a dicot stem because ring-arranged vascular bundles with inner xylem and outer phloem are characteristic of herbaceous dicot stems.",
          "Section B is a dicot root because central star/X-shaped xylem with phloem between xylem arms is the characteristic root vascular pattern.",
          "Section C is a dicot leaf because leaf veins show xylem on the upper side and phloem on the lower side within the vascular bundle.",
        ],
      },
      {
        id: "t7-1-ex2",
        title: "Explaining xylem vessel structure-function links",
        problem: [
          "A student writes: 'Xylem transports water because it is made of strong cells.' Rewrite this as an exam-quality explanation using at least three structural features.",
        ],
        solution: [
          "Xylem vessel elements are elongated dead cells joined end-to-end, forming continuous hollow tubes that allow low-resistance movement of water.",
          "Their walls are thickened and lignified, which gives mechanical strength and prevents collapse under tension generated during transpiration pull.",
          "Pits in vessel walls permit lateral water movement between vessels and neighbouring tissues, helping maintain transport if one pathway is disrupted.",
        ],
      },
      {
        id: "t7-1-ex3",
        title: "Distinguishing sieve tube elements from companion cells",
        problem: [
          "Describe two structural differences between phloem sieve tube elements and companion cells, and explain one functional consequence of each difference.",
        ],
        solution: [
          "Sieve tube elements have reduced cytoplasm and no nucleus at maturity, while companion cells have dense cytoplasm and a nucleus. Functional consequence: companion cells provide metabolic support for sieve tube function.",
          "Sieve tube elements are connected by sieve plates with pores for sap flow, whereas companion cells are closely associated but not arranged as the main longitudinal transport channel. Functional consequence: mass flow of assimilates occurs mainly through the sieve tube pathway.",
          "Companion cells have many mitochondria, supporting ATP-dependent loading/unloading of assimilates into or out of sieve tube elements via membrane transport proteins.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t7-1-st1",
        question:
          "State what a plan diagram should show for a transverse section and name one drawing feature examiners expect.",
        modelAnswer: [
          "A plan diagram should show tissue distribution and relative positions (for example epidermis, cortex, vascular tissues), not individual cell detail.",
          "Examiners expect clear continuous lines with correct proportions and accurate labels.",
        ],
      },
      {
        id: "t7-1-st2",
        question:
          "Describe the distribution of xylem and phloem in transverse sections of herbaceous dicot stem, root and leaf.",
        modelAnswer: [
          "Stem: vascular bundles in a ring, with xylem on the inner side and phloem on the outer side of each bundle.",
          "Root: central star/X-shaped xylem, with phloem between xylem arms.",
          "Leaf: vascular bundles in veins, with xylem towards the upper epidermis and phloem towards the lower epidermis.",
        ],
      },
      {
        id: "t7-1-st3",
        question:
          "Outline three structural features of xylem vessel elements and relate each to function.",
        modelAnswer: [
          "Dead, hollow, end-to-end vessel elements form continuous tubes for low-resistance water flow.",
          "Lignified thick walls provide strength and prevent collapse under tension.",
          "Pits allow lateral movement of water between vessels and surrounding tissues.",
        ],
      },
      {
        id: "t7-1-st4",
        question:
          "Why do sieve tube elements require companion cells? Include at least one structural point.",
        modelAnswer: [
          "Mature sieve tube elements have very little cytoplasm and lack a nucleus, so their own metabolic and protein-synthesis capacity is limited.",
          "Companion cells, with nucleus and many mitochondria, provide metabolic support and ATP-dependent transport processes for loading and unloading assimilates.",
        ],
      },
      {
        id: "t7-1-st5",
        question:
          "A photomicrograph shows central xylem and phloem in patches between xylem arms. Identify the organ and justify your answer.",
        modelAnswer: [
          "It is a herbaceous dicot root transverse section.",
          "The diagnostic feature is central star/X-shaped xylem with phloem located between the xylem arms.",
        ],
      },
    ],
  },

  "t7-2": {
    noteId: "t7-2",
    syllabusNotes: [
      {
        id: "transported-solutes-in-plants",
        title: "What moves in plant transport systems",
        paragraphs: [
          "Plants transport substances internally in water. Mineral ions absorbed from soil and many organic compounds are transported in aqueous solution through xylem or phloem depending on function and direction.",
          "Xylem mainly carries water and dissolved mineral ions from roots to aerial parts. Phloem carries assimilates dissolved in water, especially sucrose and amino acids, from sources to sinks.",
          "This distinction helps interpret practical and theory questions: xylem is linked to transpiration stream and mineral transport; phloem is linked to translocation of assimilated organic molecules.",
        ],
      },
      {
        id: "root-pathways-apoplast-and-symplast",
        title: "Water movement from soil to xylem: apoplast and symplast pathways",
        paragraphs: [
          "From the soil, water enters root hair cells and then moves across cortex tissues toward the xylem by two main routes. The apoplast pathway follows cell walls and intercellular spaces, where movement is through cellulose-containing walls outside the plasma membrane.",
          "The symplast pathway moves through cytoplasm connected by plasmodesmata, so water crosses a plasma membrane once to enter the symplast and then moves cell-to-cell through living contents.",
          "At the endodermis, the Casparian strip contains suberin and blocks apoplastic flow. This forces water and dissolved ions into the symplast before entering xylem, allowing selective control of ion entry by endodermal membranes.",
          "Lignin and cellulose in root tissues influence pathway properties: cellulose-rich walls support apoplastic movement, while lignified barriers and endodermal suberin constrain and direct flow toward controlled entry points.",
        ],
      },
      {
        id: "transpiration-process",
        title: "Transpiration as evaporation then diffusion",
        paragraphs: [
          "Transpiration begins with evaporation of water from moist internal cell surfaces in the leaf (mainly mesophyll cell walls) into intercellular air spaces.",
          "Water vapour then diffuses from leaf air spaces to the atmosphere down a water vapour concentration gradient, usually through stomata.",
          "As water is lost from leaves, a water potential gradient is maintained from xylem to leaf cells and from roots to leaves, supporting continued upward movement of water through the plant.",
        ],
      },
      {
        id: "cohesion-tension-and-adhesion",
        title: "Hydrogen bonding in xylem transport: cohesion, tension and adhesion",
        paragraphs: [
          "Hydrogen bonds between water molecules produce cohesion, so water molecules tend to remain linked as a continuous column in xylem vessels.",
          "During transpiration, tension is generated in leaf xylem as water is removed. This tension is transmitted down the cohesive water column, creating transpiration pull that draws water upward from roots.",
          "Hydrogen bonding also contributes to adhesion between water molecules and hydrophilic cellulose in xylem and surrounding cell walls. Adhesion helps maintain water columns against gravity and supports capillary effects in narrow conduits.",
        ],
      },
      {
        id: "xerophyte-leaf-adaptations",
        title: "Xerophytic leaf adaptations shown in transverse sections",
        paragraphs: [
          "Xerophytes are plants adapted to dry conditions, where reducing transpiration is critical. In annotated TS drawings, candidates should identify structural features and explain how each reduces water loss.",
          "Common xerophytic adaptations include a thick cuticle (longer diffusion pathway for water vapour), sunken stomata (humid air trapped near stomata reduces diffusion gradient), reduced leaf area or rolled leaves (lower exposed surface), and hairs in stomatal crypts (retain humid boundary layer).",
          "Some xerophytes also have multiple epidermal layers or water-storage tissues. Full-credit explanations link the observed structure directly to reduced evaporation or reduced vapour diffusion out of the leaf.",
        ],
      },
      {
        id: "phloem-source-sink-overview",
        title: "Source-sink transport of assimilates in phloem",
        paragraphs: [
          "Assimilates such as sucrose and amino acids move in phloem sieve tubes from sources to sinks. A source is a region that produces or releases assimilates (for example mature photosynthesising leaves). A sink is a region that uses or stores assimilates (for example roots, developing fruits, seeds, or growing shoots).",
          "Direction of flow in a particular sieve tube is source to sink, but whole-plant translocation patterns can vary with developmental stage and tissue demands.",
        ],
      },
      {
        id: "loading-by-companion-cells",
        title: "Companion-cell loading: proton pumps and cotransporters",
        paragraphs: [
          "Companion cells use ATP-powered proton pumps to export H+ into the cell wall/apoplast, establishing a proton electrochemical gradient across the membrane.",
          "H+ then moves back into companion cells via cotransporter proteins that simultaneously carry sucrose (or other assimilates) into the cell against its concentration gradient.",
          "Assimilates are then transferred into sieve tube elements, increasing solute concentration of phloem sap near the source. This lowers water potential in sieve tubes so water enters osmotically from nearby xylem.",
        ],
      },
      {
        id: "mass-flow-pressure-gradient",
        title: "Mass flow in phloem down a hydrostatic pressure gradient",
        paragraphs: [
          "At sources, loading of assimilates into sieve tubes draws in water osmotically, raising hydrostatic pressure in source-region phloem.",
          "At sinks, assimilates are unloaded and used or stored, so phloem water potential rises and water leaves (often returning to xylem), lowering hydrostatic pressure.",
          "This pressure difference drives bulk (mass) flow of phloem sap from source to sink through sieve tubes down the hydrostatic pressure gradient. The mechanism explains long-distance translocation without requiring each sucrose molecule to be actively transported for the entire distance.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Topic 7.2 requires mechanistic sequencing. Examiners often penalise answers that list keywords without showing pathway logic from soil to xylem or from source loading to sink unloading.",
      items: [
        "Confusing apoplast and symplast pathways, or forgetting that Casparian strip blocks apoplastic flow at the endodermis.",
        "Defining transpiration only as water loss through stomata without stating evaporation from internal surfaces followed by diffusion of water vapour.",
        "Using cohesion-tension language without mention of hydrogen bonding between water molecules.",
        "Stating xerophyte features without explaining how each reduces water loss (for example by reducing gradient, diffusion pathway, or exposed area).",
        "Writing that phloem transport is only passive diffusion; long-distance movement is mass flow driven by hydrostatic pressure gradient.",
        "Omitting proton pumps/cotransporters when explaining companion-cell loading of assimilates.",
      ],
    },
    workedExamples: [
      {
        id: "t7-2-ex1",
        title: "Explaining root-to-xylem water pathway with endodermal control",
        problem: [
          "Describe how water moves from soil into root xylem, including apoplast and symplast pathways and the role of endodermis/Casparian strip.",
        ],
        solution: [
          "Water enters root hair cells from soil by osmosis and then crosses cortex toward xylem by apoplast (cell wall/intercellular route) and symplast (cytoplasm/plasmodesmata route) pathways.",
          "At the endodermis, the Casparian strip containing suberin blocks the apoplast pathway. Water and ions must therefore cross a plasma membrane into the symplast before reaching xylem.",
          "This enforced membrane crossing provides selective control of ion entry and helps regulate composition of xylem sap.",
        ],
      },
      {
        id: "t7-2-ex2",
        title: "Linking transpiration pull to hydrogen bonding",
        problem: [
          "A candidate states: 'Water rises in xylem because leaves pull water up like a pump.' Improve this explanation using correct cohesion-tension and adhesion terms.",
        ],
        solution: [
          "Transpiration removes water from leaf cell walls, generating tension (negative pressure) in leaf xylem. This tension is transmitted down the xylem water column.",
          "Hydrogen bonding causes cohesion between water molecules, maintaining a continuous column so the tension can pull water upward from roots.",
          "Hydrogen bonding also contributes to adhesion between water and cellulose in xylem walls, helping stabilise the column against gravity.",
        ],
      },
      {
        id: "t7-2-ex3",
        title: "From source loading to sink mass flow in phloem",
        problem: [
          "Outline how sucrose moves from a photosynthesising leaf to a root storage sink, referring to proton pumps, cotransporters and pressure gradient.",
        ],
        solution: [
          "At the source, companion cells use ATP-driven proton pumps to move H+ out of the cell, creating a proton gradient.",
          "H+ re-enters through cotransporter proteins carrying sucrose into companion cells, and sucrose is transferred to sieve tube elements. This lowers phloem water potential, so water enters from xylem, raising hydrostatic pressure at the source.",
          "At the sink, sucrose is unloaded and used/stored, water potential in phloem rises, and water leaves so hydrostatic pressure is lower.",
          "Phloem sap therefore moves by mass flow from high hydrostatic pressure at source to lower hydrostatic pressure at sink.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t7-2-st1",
        question:
          "State two categories of substances transported in plants dissolved in water, and name the main tissue associated with each category.",
        modelAnswer: [
          "Mineral ions are transported dissolved in water mainly in xylem.",
          "Organic assimilates such as sucrose and amino acids are transported dissolved in water mainly in phloem.",
        ],
      },
      {
        id: "t7-2-st2",
        question:
          "Compare apoplast and symplast pathways for water movement across roots, and explain the effect of the Casparian strip.",
        modelAnswer: [
          "Apoplast pathway is through cell walls and intercellular spaces outside plasma membranes. Symplast pathway is through cytoplasm connected by plasmodesmata.",
          "The Casparian strip (suberin) in endodermis blocks apoplastic movement, forcing water and ions through membranes into the symplast before entering xylem, enabling selective uptake control.",
        ],
      },
      {
        id: "t7-2-st3",
        question:
          "Define transpiration in mechanistic steps and relate it to movement of water in xylem.",
        modelAnswer: [
          "Transpiration is evaporation of water from internal leaf surfaces followed by diffusion of water vapour to the atmosphere, usually through stomata.",
          "This water loss generates tension in leaf xylem and maintains a water potential gradient that supports upward water movement through xylem.",
        ],
      },
      {
        id: "t7-2-st4",
        question:
          "List four xerophytic leaf features visible in TS and state how each reduces transpiration.",
        modelAnswer: [
          "Thick cuticle: increases diffusion pathway resistance for water vapour loss.",
          "Sunken stomata: trap humid air near stomata, reducing vapour concentration gradient.",
          "Leaf hairs in stomatal crypts: hold still, humid air and reduce diffusion away from stomata.",
          "Rolled/reduced leaves: decrease exposed surface area and reduce total evaporative surface.",
        ],
      },
      {
        id: "t7-2-st5",
        question:
          "Explain how companion cells and sieve tube elements together produce mass flow from source to sink.",
        modelAnswer: [
          "Companion cells actively load assimilates into phloem using ATP-driven proton pumps and H+ cotransporters, increasing solute concentration in sieve tubes at the source.",
          "Water enters source phloem osmotically, raising hydrostatic pressure; at sinks, unloading lowers solute concentration and pressure.",
          "This pressure difference drives mass flow of phloem sap down a hydrostatic pressure gradient from source to sink.",
        ],
      },
    ],
  },
};
