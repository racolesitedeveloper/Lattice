import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 13 — subtopics 13.1-13.4 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC13_DRAFTS: Record<string, NoteDraft> = {
  "t13-1": {
    noteId: "t13-1",
    syllabusNotes: [
      {
        id: "hydrocarbon-and-functional-group-core",
        title: "Hydrocarbons, functional groups and why they control reactions",
        paragraphs: [
          "A hydrocarbon is a compound made up of carbon and hydrogen atoms only. Alkanes are simple hydrocarbons with no functional group, so their chemistry is dominated by relatively non-polar C-C and C-H bonds and they are less reactive than many functionalised molecules.",
          "Most organic compounds studied in 9701 contain a functional group. A functional group is the specific atom or group of atoms responsible for characteristic physical properties and characteristic reactions of the molecule.",
          "Examples include C=C (alkenes), C-X (halogenoalkanes), -OH (alcohols), -CHO (aldehydes), >C=O (ketones), -COOH (carboxylic acids), -COO- (esters), -CN (nitriles) and -NH2 (primary amines). Learning to spot the functional group first is the fastest route to predicting reactivity and choosing suitable reagents.",
        ],
      },
      {
        id: "formula-representations",
        title: "General, structural, displayed and skeletal formulae",
        paragraphs: [
          "General formula gives the algebraic pattern for a homologous series, for example alkane CnH2n+2 and alkene CnH2n. It is useful for composition checks but does not show arrangement.",
          "Structural formula shows connectivity in a compact way, for example CH3CH2OH. Displayed formula shows all atoms and all covalent bonds explicitly.",
          "Skeletal formula shows the carbon framework as lines, omits C symbols at line ends and vertices, and omits H atoms attached to carbon. H atoms attached to heteroatoms (such as O-H and N-H) are shown. Correct reading and drawing of skeletal formulae is required throughout organic chemistry questions, including isomer counting.",
        ],
      },
      {
        id: "systematic-naming-principles",
        title: "Systematic naming of simple aliphatic compounds",
        paragraphs: [
          "IUPAC naming at this level follows a stable sequence: choose the longest carbon chain containing the principal functional group, number the chain to give the principal functional group the lowest possible locant, then place substituents with their locants in alphabetical order.",
          "Use suffixes for principal groups, for example -ane, -ene, -ol, -al, -one, -oic acid, and use prefixes where appropriate (for example bromo-, chloro-, amino-). For esters, name the alkyl part from the alcohol first, then the carboxylate part from the acid (for example ethyl ethanoate).",
          "At Topic 13 level, compounds are simple aliphatic molecules up to six carbon atoms (with six plus six for esters, and straight chains only for esters and nitriles). Correct numbering and consistent hyphenation are important because exam mark schemes treat ambiguous names as incorrect.",
        ],
      },
      {
        id: "naming-workflow-and-common-cases",
        title: "A practical naming workflow for exam questions",
        paragraphs: [
          "Step 1: identify the principal functional group to decide the suffix and the parent chain requirement. Step 2: find the longest chain containing that group. Step 3: number from the end giving the principal group the lowest locant.",
          "Step 4: identify and locate substituents (alkyl groups, halogens, additional unsaturation). Step 5: assemble the full name with commas between numbers and hyphens between numbers and words.",
          "For compounds with C=C and another principal group, numbering prioritises the principal group first, then the position of unsaturation. Always check that your final name corresponds to exactly one structure.",
        ],
      },
      {
        id: "formula-deduction-between-representations",
        title: "Deducing molecular and empirical formulae from structure",
        paragraphs: [
          "From displayed, structural or skeletal formulae, count atoms directly to obtain molecular formula. For skeletal drawings, remember each unlabeled vertex/end is a carbon atom and add implied hydrogens to complete valency.",
          "Empirical formula is the simplest whole-number ratio of atoms. After obtaining molecular formula, divide subscripts by their highest common factor where possible.",
          "These conversion skills are tested in both directions: naming from structure, drawing from name, and formula deduction from either representation. Strong students cross-check valency and unsaturation before finalising.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "In Topic 13.1, marks are usually lost through representation and naming precision rather than deep theory. Examiners reward unambiguous structure-to-name logic and correct functional-group identification.",
      items: [
        "Calling any C and H containing compound a hydrocarbon even when O, N or halogen atoms are present.",
        "Forgetting that alkanes have no functional group and are defined as saturated hydrocarbons with only single C-C bonds.",
        "Misreading skeletal formula by counting line segments instead of carbon vertices and endpoints.",
        "Choosing a parent chain that is longest overall but does not contain the principal functional group.",
        "Numbering from the wrong end so the principal functional group does not receive the lowest locant.",
        "Giving ester names in reverse order (acid part first) instead of alkyl + carboxylate format.",
      ],
    },
    workedExamples: [
      {
        id: "t13-1-ex1",
        title: "Interpreting formula representations",
        problem: [
          "A compound is written as CH3CH(OH)CH2CH3. State (a) its functional group, (b) its displayed-formula class, and (c) its molecular formula.",
        ],
        solution: [
          "The fragment -OH identifies an alcohol functional group. The carbon framework has four carbons in a chain, so this is an aliphatic alcohol.",
          "Count atoms from the structural formula: C = 4. Hydrogens are 3 + 1 + 2 + 3 + 1(on O-H) = 10. Oxygen = 1.",
          "So molecular formula is C4H10O. The structure corresponds to butan-2-ol when named systematically.",
        ],
      },
      {
        id: "t13-1-ex2",
        title: "Systematic naming with locants",
        problem: [
          "Give the systematic name of CH3CH2CH(Br)CH3 and explain the numbering choice.",
        ],
        solution: [
          "The parent chain has four carbons, so base name is butane. There is one bromo substituent.",
          "Number from the end nearest the substituent. From the right, Br is on carbon 2; from the left, it would be carbon 3.",
          "Use the lower locant, so the correct name is 2-bromobutane.",
        ],
      },
      {
        id: "t13-1-ex3",
        title: "From skeletal formula to molecular and empirical formula",
        problem: [
          "A skeletal formula represents a straight-chain ester with six carbons total: CH3CH2COOCH2CH3 (ethyl propanoate). Deduce its molecular and empirical formulae.",
        ],
        solution: [
          "Count atoms directly from the structural form: carbons = 5? Check carefully: CH3CH2COOCH2CH3 has 2 (ethyl) + 3 (propanoate carbon count including carbonyl carbon) = 5 carbons total.",
          "Hydrogens: 3 + 2 + 0 + 2 + 3 = 10. Oxygens = 2. So molecular formula is C5H10O2.",
          "Subscripts 5, 10 and 2 share no common factor greater than 1 across all three values, so empirical formula is also C5H10O2.",
          "The key exam skill is careful atom counting around the -COO- linkage.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t13-1-st1",
        question:
          "Define a hydrocarbon and state what distinguishes an alkane from other hydrocarbons at this level.",
        modelAnswer: [
          "A hydrocarbon is a compound containing carbon and hydrogen atoms only.",
          "An alkane is a saturated hydrocarbon with only single C-C bonds and no functional group.",
        ],
      },
      {
        id: "t13-1-st2",
        question:
          "State one key feature each of general, structural, displayed and skeletal formulae.",
        modelAnswer: [
          "General formula gives a pattern for a homologous series (for example CnH2n+2).",
          "Structural formula shows atom connectivity in condensed form (for example CH3CH2OH).",
          "Displayed formula shows every atom and bond explicitly.",
          "Skeletal formula shows the carbon framework with implied carbon labels and implied C-H bonds.",
        ],
      },
      {
        id: "t13-1-st3",
        question:
          "Name CH3CH2CH2CHO systematically and identify its functional group.",
        modelAnswer: [
          "The functional group is aldehyde (-CHO).",
          "The parent chain has four carbons including the aldehyde carbon, so the compound is butanal.",
        ],
      },
      {
        id: "t13-1-st4",
        question:
          "A molecule has molecular formula C4H8O2 and is known to be a straight-chain carboxylic acid. Give its systematic name.",
        modelAnswer: [
          "A straight-chain C4 carboxylic acid is butanoic acid.",
        ],
      },
      {
        id: "t13-1-st5",
        question:
          "From the structural formula CH2=CHCH2CH3, deduce (a) molecular formula and (b) systematic name.",
        modelAnswer: [
          "Molecular formula is C4H8.",
          "The compound is but-1-ene (double bond starting at carbon 1).",
        ],
      },
    ],
  },

  "t13-2": {
    noteId: "t13-2",
    syllabusNotes: [
      {
        id: "core-terminology-series-saturation",
        title: "Homologous series, saturation and unsaturation",
        paragraphs: [
          "A homologous series is a family of organic compounds with the same functional group, similar chemical properties, and a regular pattern in formula where successive members differ by CH2.",
          "Saturated compounds contain only single C-C bonds (for example alkanes). Unsaturated compounds contain at least one multiple bond, usually C=C or C≡C in this course context.",
          "This terminology predicts reactivity: unsaturated compounds typically undergo addition, while saturated compounds often undergo substitution under suitable conditions.",
        ],
      },
      {
        id: "bond-fission-and-radical-language",
        title: "Homolytic and heterolytic fission; free radicals",
        paragraphs: [
          "Homolytic fission breaks a covalent bond so each atom takes one electron, producing radicals. A free radical is a species with one or more unpaired electrons.",
          "Heterolytic fission breaks a bond so both electrons go to one atom, producing ions. This is common in polar bond cleavage and ionic mechanism steps.",
          "Free-radical substitution terminology includes initiation (radical generation), propagation (radical sustained chain steps), and termination (radicals removed by combination).",
        ],
      },
      {
        id: "nucleophile-electrophile-definitions",
        title: "Nucleophiles, electrophiles and reaction classes",
        paragraphs: [
          "A nucleophile is an electron-pair donor (Lewis base) that attacks electron-deficient centres. Common examples include OH-, CN-, NH3 and H2O.",
          "An electrophile is an electron-pair acceptor (Lewis acid) that attacks electron-rich regions such as pi bonds. Examples include H+, Br2 (polarised), and carbocations.",
          "Key reaction-type terms: addition, substitution, elimination, hydrolysis, condensation, oxidation and reduction. In organic redox shorthand, [O] can represent oxygen supplied by an oxidising agent and [H] can represent hydrogen supplied by a reducing agent.",
        ],
      },
      {
        id: "required-mechanism-families",
        title: "Mechanism families required at Topic 13 level",
        paragraphs: [
          "Free-radical substitution typically appears in alkane halogenation under UV light. Electrophilic addition is central to alkene reactions with Br2, HX and H2O (with catalysts where required).",
          "Nucleophilic substitution is central for halogenoalkanes where a nucleophile replaces the halogen-bearing group. Nucleophilic addition is central for carbonyl compounds where nucleophile attack occurs at C=O carbon.",
          "Mechanism notation uses curly arrows for electron-pair movement. Each curly arrow must begin at a lone pair or a covalent bond, and point to where that electron pair moves.",
        ],
      },
      {
        id: "curly-arrow-discipline",
        title: "Curly arrows and mechanism presentation",
        paragraphs: [
          "In ionic mechanisms, show full curly arrows for electron pairs. In radical mechanisms, fish-hook single-electron arrows may be used in advanced contexts, but this syllabus mainly expects clear stepwise radical equations and ionic curly-arrow work where relevant.",
          "Always include key intermediates and charges in mechanism steps. A correct final product with wrong electron-flow arrows is usually not full credit.",
          "Mechanism answers should be chemically plausible: nucleophile attacks electron-deficient centres, electrophile attacks pi-electron regions, and leaving groups depart with the bonding pair in heterolytic steps.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Topic 13.2 is heavily language-driven. Examiners often test whether candidates can distinguish similar terms and apply them consistently in mechanism and equation contexts.",
      items: [
        "Describing a nucleophile as electron-pair acceptor (this is electrophile behaviour).",
        "Confusing homolytic fission (radicals) with heterolytic fission (ions).",
        "Using mechanism names (for example substitution) that do not match the structural change shown.",
        "Drawing curly arrows from positively charged atoms instead of from electron pairs or bonds.",
        "Missing propagation and termination distinctions in free-radical substitution descriptions.",
        "Calling any reaction with oxygen an oxidation without considering oxidation-state or hydrogen/oxygen gain-loss logic in organic context.",
      ],
    },
    workedExamples: [
      {
        id: "t13-2-ex1",
        title: "Classifying reaction and mechanism language",
        problem: [
          "Classify each transformation by reaction type and mechanism family: (a) CH2=CH2 + Br2 -> BrCH2CH2Br, (b) CH3CH2Br + OH- -> CH3CH2OH + Br-, (c) CH4 + Cl2 (UV) -> CH3Cl + HCl.",
        ],
        solution: [
          "(a) Ethene reacts by addition overall, and the mechanism class is electrophilic addition.",
          "(b) Bromoethane with hydroxide reacts by substitution overall, and mechanism class is nucleophilic substitution.",
          "(c) Methane chlorination under UV is substitution overall, with free-radical substitution mechanism.",
          "Correct naming links product change and electron-flow model.",
        ],
      },
      {
        id: "t13-2-ex2",
        title: "Homolytic versus heterolytic bond fission",
        problem: [
          "Explain the difference between homolytic and heterolytic fission for a C-Br bond, including species formed.",
        ],
        solution: [
          "In homolytic fission, one electron from the C-Br bond goes to carbon and one to bromine, giving radicals (for example carbon radical and Br.).",
          "In heterolytic fission, both bonding electrons go to one atom, usually bromine for C-Br, giving ions (for example carbocation and Br-).",
          "So homolytic cleavage produces unpaired-electron species, while heterolytic cleavage produces charged species.",
        ],
      },
      {
        id: "t13-2-ex3",
        title: "Free-radical substitution chain stages",
        problem: [
          "For chlorination of methane, write one initiation step, one propagation step and one termination step.",
        ],
        solution: [
          "Initiation: Cl2 -> 2Cl. (under UV light).",
          "Propagation example 1: Cl. + CH4 -> HCl + CH3..",
          "Propagation example 2: CH3. + Cl2 -> CH3Cl + Cl..",
          "Termination example: Cl. + CH3. -> CH3Cl (or Cl. + Cl. -> Cl2, CH3. + CH3. -> C2H6).",
          "Propagation regenerates radicals; termination removes radicals.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t13-2-st1",
        question:
          "Define homologous series, saturated and unsaturated.",
        modelAnswer: [
          "A homologous series is a family of compounds with the same functional group and similar chemistry, where successive members differ by CH2.",
          "Saturated compounds have only single C-C bonds.",
          "Unsaturated compounds contain at least one multiple bond (such as C=C).",
        ],
      },
      {
        id: "t13-2-st2",
        question:
          "Define homolytic fission and heterolytic fission, and name the species produced in each case.",
        modelAnswer: [
          "Homolytic fission is bond breaking where each atom takes one electron, producing radicals.",
          "Heterolytic fission is bond breaking where both electrons go to one atom, producing ions.",
        ],
      },
      {
        id: "t13-2-st3",
        question:
          "What is a nucleophile? Give two examples from AS/A Level organic chemistry.",
        modelAnswer: [
          "A nucleophile is an electron-pair donor that attacks electron-deficient centres.",
          "Examples include OH-, CN-, NH3 and H2O (any two).",
        ],
      },
      {
        id: "t13-2-st4",
        question:
          "Identify the reaction type in each: (a) elimination of HBr from bromoethane to form ethene, (b) hydrolysis of an ester with dilute acid and heat, (c) reaction of an aldehyde with HCN.",
        modelAnswer: [
          "(a) Elimination.",
          "(b) Hydrolysis.",
          "(c) Nucleophilic addition.",
        ],
      },
      {
        id: "t13-2-st5",
        question:
          "In mechanism diagrams, where must a curly arrow begin and what does it represent?",
        modelAnswer: [
          "A curly arrow must begin at a lone pair or a covalent bond.",
          "It represents movement of an electron pair from that source to a new position.",
        ],
      },
    ],
  },

  "t13-3": {
    noteId: "t13-3",
    syllabusNotes: [
      {
        id: "chain-branch-cyclic-classification",
        title: "Straight-chain, branched and cyclic organic molecules",
        paragraphs: [
          "Organic molecules can be straight-chain (continuous unbranched carbon skeleton), branched (side chains attached to main chain), or cyclic (ring structures). This structural classification affects naming, isomer counting, and sometimes physical properties.",
          "A structure can contain the same molecular formula but differ in carbon skeleton arrangement, which is the basis of chain isomerism discussed in Topic 13.4.",
          "When analysing a displayed or skeletal formula, classify backbone shape first; this often simplifies later decisions about hybridisation, bond angles and stereochemistry.",
        ],
      },
      {
        id: "hybridisation-and-shape",
        title: "sp, sp2 and sp3 hybridisation with shapes and bond angles",
        paragraphs: [
          "A carbon (or other atom) with four sigma bonds is typically sp3 hybridised, giving tetrahedral geometry and bond angles about 109.5 degrees.",
          "An atom with three sigma regions and one unhybridised p orbital is sp2 hybridised, giving trigonal planar geometry and bond angles about 120 degrees. The unhybridised p orbital enables pi bonding.",
          "An atom with two sigma regions and two unhybridised p orbitals is sp hybridised, giving linear geometry and bond angle 180 degrees. This appears in C≡C systems and nitrile C atoms.",
        ],
      },
      {
        id: "sigma-and-pi-arrangements",
        title: "Arrangement of sigma and pi bonds in organic molecules",
        paragraphs: [
          "A sigma bond forms by direct overlap along the internuclear axis. All single bonds are sigma bonds.",
          "A double bond consists of one sigma bond and one pi bond. A triple bond consists of one sigma bond and two pi bonds.",
          "Pi bonds arise from sideways overlap of adjacent p orbitals above and below (and for triple bonds, in two perpendicular planes around) the sigma framework. Because pi overlap is directional, it influences rotation and stereochemistry.",
        ],
      },
      {
        id: "planarity-in-organic-structures",
        title: "Planar arrangements in molecules such as ethene",
        paragraphs: [
          "Planar means atoms lie in the same geometric plane. In ethene, each carbon is sp2 hybridised and the local geometry at each carbon is trigonal planar.",
          "The C=C and atoms directly attached to each double-bond carbon are in one plane because effective p-orbital overlap for the pi bond requires this alignment.",
          "Planarity is not universal for all organic molecules: sp3 centres are tetrahedral and generally non-planar. Distinguishing planar and non-planar regions is essential for mechanism and isomerism reasoning.",
        ],
      },
      {
        id: "shape-bonding-link-to-reactivity",
        title: "How shape and bonding language supports later organic topics",
        paragraphs: [
          "Hybridisation, bond angles and sigma/pi arrangement explain why alkenes undergo electrophilic addition and why C=C rotation is restricted.",
          "They also explain why carbonyl carbons are trigonal planar and susceptible to nucleophilic attack, and why tetrahedral centres can become chiral when bonded to four different groups.",
          "High-scoring exam responses connect geometry (sp, sp2, sp3), bond type (sigma or pi), and observable behaviour rather than giving definitions in isolation.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "In Topic 13.3, common errors come from mixing geometric language with bonding language. Examiners expect both to be correct and linked.",
      items: [
        "Stating that a double bond contains two sigma bonds (it is one sigma and one pi).",
        "Calling sp2 centres tetrahedral or assigning 109.5 degrees to trigonal planar atoms.",
        "Forgetting that triple bonds are linear around the bonded atoms.",
        "Using 'flat' vaguely without specifying which atoms are planar in the molecule.",
        "Claiming all molecules with carbon are non-planar due to tetrahedral carbon, ignoring sp2/sp regions.",
      ],
    },
    workedExamples: [
      {
        id: "t13-3-ex1",
        title: "Hybridisation and angle assignment in one molecule",
        problem: [
          "For CH3CH=CHCN, state the hybridisation and approximate bond angle at (a) the methyl carbon, (b) each alkene carbon, and (c) the nitrile carbon in -CN.",
        ],
        solution: [
          "The methyl carbon (CH3-) has four sigma bonds, so it is sp3 with about 109.5 degrees.",
          "Each alkene carbon in CH=CH has three sigma regions and one p orbital for pi bonding, so each is sp2 with about 120 degrees.",
          "The nitrile carbon in -C≡N has two sigma regions (one to adjacent C, one in C≡N framework) and two unhybridised p orbitals for two pi bonds, so it is sp with 180 degrees (linear).",
        ],
      },
      {
        id: "t13-3-ex2",
        title: "Counting sigma and pi bonds",
        problem: [
          "Count sigma and pi bonds in propene, CH3CH=CH2.",
        ],
        solution: [
          "C-H bonds: there are 6, all sigma.",
          "C-C framework: one C-C single bond gives one sigma; one C=C gives one sigma plus one pi.",
          "Total sigma bonds = 6 + 1 + 1 = 8. Total pi bonds = 1.",
          "So propene has 8 sigma bonds and 1 pi bond.",
        ],
      },
      {
        id: "t13-3-ex3",
        title: "Using planarity precisely",
        problem: [
          "Explain why ethene is described as planar around the double bond.",
        ],
        solution: [
          "Each carbon in ethene is sp2 hybridised, so each has trigonal planar arrangement with three sigma regions.",
          "The unhybridised p orbitals on the two carbons must remain parallel for sideways overlap, forming the pi bond.",
          "This requirement places the C=C and the four directly attached H atoms in one plane, so the local structure is planar.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t13-3-st1",
        question:
          "Classify each as straight-chain, branched or cyclic: (a) hexane, (b) 2-methylpentane, (c) cyclohexane.",
        modelAnswer: [
          "(a) Hexane is straight-chain.",
          "(b) 2-methylpentane is branched.",
          "(c) Cyclohexane is cyclic.",
        ],
      },
      {
        id: "t13-3-st2",
        question:
          "State geometry and approximate bond angle for sp3, sp2 and sp centres.",
        modelAnswer: [
          "sp3: tetrahedral, about 109.5 degrees.",
          "sp2: trigonal planar, about 120 degrees.",
          "sp: linear, 180 degrees.",
        ],
      },
      {
        id: "t13-3-st3",
        question:
          "How many sigma and pi bonds are present in a C=C bond and in a C≡C bond?",
        modelAnswer: [
          "C=C contains one sigma and one pi bond.",
          "C≡C contains one sigma and two pi bonds.",
        ],
      },
      {
        id: "t13-3-st4",
        question:
          "Define the term planar and give one organic example.",
        modelAnswer: [
          "Planar means atoms lie in the same geometric plane.",
          "Example: the atoms directly involved around the C=C in ethene are planar.",
        ],
      },
      {
        id: "t13-3-st5",
        question:
          "Why does identifying hybridisation help when predicting reaction behaviour in organic chemistry?",
        modelAnswer: [
          "Hybridisation identifies geometry and the presence of pi systems, which determine electron density and steric arrangement.",
          "For example, sp2 centres with pi bonds are typical sites for electrophilic addition, while tetrahedral sp3 centres often undergo substitution.",
        ],
      },
    ],
  },

  "t13-4": {
    noteId: "t13-4",
    syllabusNotes: [
      {
        id: "structural-isomerism-overview",
        title: "Structural isomerism: same formula, different connectivity",
        paragraphs: [
          "Structural isomers have the same molecular formula but different structural formulae because atoms are connected differently.",
          "At this level, structural isomerism is divided into chain isomerism (different carbon skeleton), positional isomerism (same functional group in different positions), and functional-group isomerism (different functional groups for same formula).",
          "When deducing possible isomers from molecular formula, avoid duplicates by checking both connectivity and symmetry.",
        ],
      },
      {
        id: "chain-positional-functional-examples",
        title: "Chain, positional and functional-group isomerism in practice",
        paragraphs: [
          "Chain isomerism example: C5H12 gives pentane, 2-methylbutane and 2,2-dimethylpropane. Functional group is unchanged (alkane), but carbon skeleton differs.",
          "Positional isomerism example: C4H9Br gives 1-bromobutane and 2-bromobutane (among chain variants if considered). Functional group is the same; position changes.",
          "Functional-group isomerism example: C3H6O can represent an aldehyde (propanal) or ketone (propanone). Same formula but different principal functional group and different chemistry.",
        ],
      },
      {
        id: "stereoisomerism-overview",
        title: "Stereoisomerism: same connectivity, different spatial arrangement",
        paragraphs: [
          "Stereoisomers have the same structural formula (same connectivity) but differ in three-dimensional arrangement of atoms. In Topic 13 this divides into geometrical (cis/trans) and optical isomerism.",
          "Geometrical isomerism at this level is usually discussed as cis/trans in alkenes and can also occur in suitable cyclic compounds. Optical isomerism arises from chirality, typically a tetrahedral carbon bonded to four different groups.",
          "E/Z naming may be accepted, but cis/trans understanding remains the required core for this section.",
        ],
      },
      {
        id: "geometrical-isomerism-origin",
        title: "Geometrical (cis/trans) isomerism and restricted rotation",
        paragraphs: [
          "A C=C double bond contains one sigma and one pi bond. Rotation about the sigma axis would break the side-on p-orbital overlap that forms the pi bond, so free rotation is restricted at ordinary conditions.",
          "Geometrical isomerism in alkenes requires each double-bond carbon to be attached to two different groups. If one carbon has two identical groups, cis/trans is not possible.",
          "Cis means selected similar groups are on the same side of the double bond; trans means they are on opposite sides. The same spatial principle is used when identifying analogous restricted-rotation systems in simple cyclic molecules.",
        ],
      },
      {
        id: "optical-isomerism-and-chiral-centres",
        title: "Chiral centres, enantiomers and optical isomerism",
        paragraphs: [
          "A chiral centre is usually a tetrahedral carbon atom attached to four different substituents. Such a centre gives two non-superimposable mirror-image forms called enantiomers.",
          "A molecule can contain more than one chiral centre, although detailed meso/diastereoisomer nomenclature is not required here. The required skill is to identify chiral centres in a given structural formula and infer optical isomerism where applicable.",
          "When deducing isomer counts, include both structural and stereoisomer possibilities where the question scope requires it.",
        ],
      },
      {
        id: "systematic-isomer-deduction",
        title: "A method for deducing all possible isomers from molecular formula",
        paragraphs: [
          "Start by listing possible functional-group classes consistent with the formula and hydrogen deficiency. Then generate distinct connectivities (chain/position/functional-group possibilities) without duplication by symmetry.",
          "For each valid structure, check whether stereoisomerism applies: cis/trans for suitable C=C or cyclic restriction, and optical isomerism for chiral centres with four different groups.",
          "Present final answers as a complete but non-redundant set. In exams, incomplete lists and duplicated structures are the most common reasons for lost marks in isomerism questions.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Isomerism questions are algorithmic: candidates score highly when they apply a complete method. Most errors come from omitted cases or invalid stereoisomer claims.",
      items: [
        "Treating chain and positional isomers as the same category.",
        "Claiming cis/trans isomerism for alkenes where one double-bond carbon has two identical substituents.",
        "Forgetting that geometrical isomerism originates from restricted rotation about C=C (pi-bond constraint).",
        "Identifying any carbon with four bonds as chiral without checking whether all four attached groups are different.",
        "Listing mirror-image drawings of achiral structures as optical isomers.",
        "Missing cyclic examples when asked to identify possible geometrical isomerism from a structural formula set.",
      ],
    },
    workedExamples: [
      {
        id: "t13-4-ex1",
        title: "Classifying structural isomer types",
        problem: [
          "For C4H10O, give one pair each of (a) chain isomers, (b) positional isomers, and (c) functional-group isomers where possible.",
        ],
        solution: [
          "Chain isomer pair (alcohol class): butan-1-ol and 2-methylpropan-1-ol (different carbon skeleton).",
          "Positional isomer pair (same skeleton and group): butan-1-ol and butan-2-ol (same alcohol group, different position).",
          "Functional-group isomer pair: butan-1-ol and methoxypropane (alcohol versus ether, same molecular formula C4H10O).",
        ],
      },
      {
        id: "t13-4-ex2",
        title: "Testing for cis/trans possibility",
        problem: [
          "Determine whether each alkene can show cis/trans isomerism: (a) CH3CH=CHCH3, (b) CH2=CHCH2CH3, (c) CH3CH=C(CH3)2.",
        ],
        solution: [
          "(a) But-2-ene can show cis/trans because each double-bond carbon has two different groups (H and CH3 on each carbon).",
          "(b) But-1-ene cannot show cis/trans because the terminal double-bond carbon is CH2 and has two identical H substituents.",
          "(c) CH3CH=C(CH3)2 cannot show cis/trans because one double-bond carbon has two identical CH3 groups.",
          "Rule: both double-bond carbons must each have two different attached groups.",
        ],
      },
      {
        id: "t13-4-ex3",
        title: "Identifying chiral centres and optical isomerism",
        problem: [
          "Identify the chiral centre in 2-bromobutane and state the number of optical isomers formed.",
        ],
        solution: [
          "In 2-bromobutane, carbon-2 is bonded to four different groups: H, Br, CH3 and CH2CH3.",
          "So carbon-2 is a chiral centre.",
          "A molecule with one chiral centre gives two enantiomers (a pair of optical isomers).",
        ],
      },
    ],
    selfTest: [
      {
        id: "t13-4-st1",
        question:
          "Define structural isomerism and name its three divisions required in this syllabus section.",
        modelAnswer: [
          "Structural isomerism is when compounds have the same molecular formula but different structural formulae (different connectivity).",
          "Its divisions are chain isomerism, positional isomerism, and functional-group isomerism.",
        ],
      },
      {
        id: "t13-4-st2",
        question:
          "Define stereoisomerism and name the two divisions required here.",
        modelAnswer: [
          "Stereoisomerism is when compounds have the same structural formula but different spatial arrangement of atoms.",
          "The required divisions are geometrical (cis/trans) and optical isomerism.",
        ],
      },
      {
        id: "t13-4-st3",
        question:
          "Why does a C=C bond allow cis/trans isomerism while a C-C single bond usually does not?",
        modelAnswer: [
          "C=C contains a pi bond formed by sideways p-orbital overlap, which restricts rotation unless the pi bond is broken.",
          "C-C single bonds are sigma bonds that allow relatively free rotation, so fixed cis/trans arrangements are usually not maintained.",
        ],
      },
      {
        id: "t13-4-st4",
        question:
          "What is a chiral centre, and how many enantiomers arise from one such centre in a molecule with no other stereochemical features?",
        modelAnswer: [
          "A chiral centre is typically a tetrahedral carbon attached to four different groups.",
          "One such centre gives two enantiomers.",
        ],
      },
      {
        id: "t13-4-st5",
        question:
          "Molecular formula C4H8 has several isomers. Give one example each of (a) chain structural isomerism and (b) geometrical isomerism.",
        modelAnswer: [
          "(a) Chain structural isomerism: but-1-ene versus 2-methylpropene.",
          "(b) Geometrical isomerism: cis-but-2-ene and trans-but-2-ene.",
        ],
      },
    ],
  },
};
