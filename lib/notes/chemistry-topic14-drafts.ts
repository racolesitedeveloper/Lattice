import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 14 — subtopics 14.1-14.2 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC14_DRAFTS: Record<string, NoteDraft> = {
  "t14-1": {
    noteId: "t14-1",
    syllabusNotes: [
      {
        id: "alkane-production-routes",
        title: "How alkanes are produced in this syllabus",
        paragraphs: [
          "Two required preparation routes are hydrogenation of alkenes and cracking of longer-chain alkanes. In hydrogenation, H2(g) adds across a C=C bond using a Ni or Pt catalyst and heat, converting an unsaturated hydrocarbon into an alkane.",
          "Example: C2H4 + H2 -> C2H6 (Ni/Pt, heat). This is an addition reaction and is also important industrially for reducing unsaturation in feedstocks.",
          "Cracking is thermal decomposition of long-chain alkanes into shorter alkanes and alkenes, typically using heat and an Al2O3 catalyst (catalytic cracking). This converts less useful heavy fractions into more valuable fuels and alkene feedstocks.",
        ],
      },
      {
        id: "combustion-of-alkanes",
        title: "Complete and incomplete combustion of alkanes",
        paragraphs: [
          "In excess oxygen, alkanes burn completely to carbon dioxide and water. Example: CH4 + 2O2 -> CO2 + 2H2O. Complete combustion is highly exothermic and underpins fuel use.",
          "In limited oxygen, incomplete combustion occurs and products include carbon monoxide and/or carbon (soot) with water. Example: 2CH4 + 3O2 -> 2CO + 4H2O.",
          "Incomplete combustion wastes fuel energy and produces toxic or polluting products. Understanding oxygen supply and equation balancing is essential in combustion questions.",
        ],
      },
      {
        id: "free-radical-substitution-ethane",
        title: "Free-radical substitution of alkanes with chlorine or bromine",
        paragraphs: [
          "Alkanes react with Cl2 or Br2 under ultraviolet light by free-radical substitution. For ethane, one H can be substituted by Cl to give chloroethane and HCl: C2H6 + Cl2 -> C2H5Cl + HCl (UV light).",
          "This reaction is not ionic or nucleophilic/electrophilic substitution; it proceeds via radicals formed by homolytic bond fission.",
          "Further substitution can occur (for example dichloroethane, trichloroethane) if halogen is in excess. Product mixtures are common unless conditions are controlled.",
        ],
      },
      {
        id: "radical-mechanism-steps",
        title: "Mechanism: initiation, propagation and termination",
        paragraphs: [
          "Initiation step: ultraviolet radiation breaks Cl-Cl (or Br-Br) homolytically to form radicals. Example: Cl2 -> 2Cl.",
          "Propagation steps for chlorination of ethane: (1) Cl + C2H6 -> HCl + C2H5. (2) C2H5 + Cl2 -> C2H5Cl + Cl. The radical is regenerated, so the chain can continue.",
          "Termination steps remove radicals by combining them. Typical examples are Cl + Cl -> Cl2, C2H5 + Cl -> C2H5Cl, and C2H5 + C2H5 -> C4H10.",
          "Mechanism marks usually depend on correct radical species, correct sequence labels, and use of single-headed (fish-hook) arrows where mechanism notation is requested.",
        ],
      },
      {
        id: "why-alkanes-are-unreactive",
        title: "General unreactivity of alkanes towards polar reagents",
        paragraphs: [
          "Alkanes are relatively unreactive because C-C and C-H sigma bonds are strong and non-polar (or only very weakly polar).",
          "Because there is little electron-rich or electron-poor region, alkanes do not attract polar reagents strongly. They therefore resist nucleophilic and electrophilic attack under ordinary conditions.",
          "This is why alkanes typically react only under harsher conditions, such as combustion at high temperature or radical substitution under UV light.",
        ],
      },
      {
        id: "cracking-and-environmental-consequences",
        title: "Cracking value and environmental consequences of alkane combustion",
        paragraphs: [
          "Cracking improves fuel economy by converting heavy crude fractions (low demand, poor ignition properties) into shorter-chain alkanes used in petrol and into alkenes used as chemical feedstocks.",
          "Combustion in internal combustion engines can release carbon monoxide (toxic, binds strongly to haemoglobin), oxides of nitrogen (NO and NO2, linked to acid rain and photochemical smog), and unburnt hydrocarbons (air pollutants).",
          "Catalytic converters reduce these emissions by redox reactions on Pt/Pd/Rh surfaces, converting NOx to N2 and oxidising CO and hydrocarbons to CO2 and H2O. This is a direct chemistry application of catalyst action in heterogeneous systems.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Alkane questions are often straightforward but mark schemes are strict on mechanism stages, conditions, and environmental chemistry language.",
      items: [
        "Writing free-radical substitution without ultraviolet light, or using ionic-arrow notation instead of radical mechanism notation.",
        "Omitting propagation chain steps or confusing initiation with termination in ethane chlorination.",
        "Treating alkanes as reactive to polar reagents without discussing non-polar bonds and strong C-H/C-C sigma bonds.",
        "Giving only CO2 and H2O for all combustion conditions; incomplete combustion must include CO and/or carbon.",
        "Describing cracking only as 'breaking molecules' without stating production of more useful lower Mr alkanes and alkenes from heavy fractions.",
        "Naming pollutants from engines but not linking them to catalytic removal (NOx reduction, CO/hydrocarbon oxidation).",
      ],
    },
    workedExamples: [
      {
        id: "t14-1-ex1",
        title: "Writing free-radical substitution mechanism for ethane chlorination",
        problem: [
          "Write the initiation, two propagation, and two possible termination steps for chlorination of ethane under UV light.",
        ],
        solution: [
          "Initiation: Cl2 -> 2Cl.",
          "Propagation 1: Cl + C2H6 -> HCl + C2H5.",
          "Propagation 2: C2H5 + Cl2 -> C2H5Cl + Cl.",
          "Possible termination examples: Cl + Cl -> Cl2; C2H5 + Cl -> C2H5Cl; C2H5 + C2H5 -> C4H10.",
          "These steps show chain initiation, chain-carrying propagation, and radical removal by termination.",
        ],
      },
      {
        id: "t14-1-ex2",
        title: "Complete and incomplete combustion equations",
        problem: [
          "Write balanced equations for complete combustion and one incomplete-combustion pathway of propane, C3H8.",
        ],
        solution: [
          "Complete combustion: C3H8 + 5O2 -> 3CO2 + 4H2O.",
          "One incomplete pathway producing CO: 2C3H8 + 7O2 -> 6CO + 8H2O.",
          "Another possible incomplete pathway can produce carbon (soot), for example C3H8 + 2O2 -> 3C + 4H2O.",
          "The product set depends on oxygen availability, and incomplete combustion products are environmentally harmful.",
        ],
      },
      {
        id: "t14-1-ex3",
        title: "Using cracking and hydrogenation in a refinery sequence",
        problem: [
          "A long-chain alkane fraction is cracked to give C10H22 -> C6H14 + C4H8. The alkene is then hydrogenated. Write equations and explain why this sequence is useful.",
        ],
        solution: [
          "Cracking equation (example): C10H22 -> C6H14 + C4H8 (heat, Al2O3 catalyst).",
          "Hydrogenation of alkene: C4H8 + H2 -> C4H10 (Ni/Pt catalyst, heat).",
          "Usefulness: cracking converts heavy, less useful feed to lighter hydrocarbons and alkene feedstock; hydrogenation then adjusts saturation to make stable alkane fuels where needed.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t14-1-st1",
        question:
          "State two syllabus preparation routes to alkanes and give one reagent/condition detail for each.",
        modelAnswer: [
          "Route 1: hydrogenation of an alkene using H2 with Ni or Pt catalyst and heat.",
          "Route 2: cracking of a longer-chain alkane using heat with Al2O3 catalyst to form shorter hydrocarbons including alkanes.",
        ],
      },
      {
        id: "t14-1-st2",
        question:
          "Define complete and incomplete combustion of alkanes and name one characteristic product of each.",
        modelAnswer: [
          "Complete combustion is burning in excess oxygen to form CO2 and H2O.",
          "Incomplete combustion is burning in limited oxygen to form CO and/or C (soot) with H2O.",
        ],
      },
      {
        id: "t14-1-st3",
        question:
          "For free-radical substitution of ethane with chlorine, write one initiation and one propagation step.",
        modelAnswer: [
          "Initiation: Cl2 -> 2Cl.",
          "Propagation example: Cl + C2H6 -> HCl + C2H5, followed by C2H5 + Cl2 -> C2H5Cl + Cl.",
        ],
      },
      {
        id: "t14-1-st4",
        question:
          "Explain why alkanes are generally unreactive towards polar reagents.",
        modelAnswer: [
          "Alkanes contain strong C-C and C-H sigma bonds and are largely non-polar, so they do not provide strongly electron-rich or electron-deficient sites for attack by polar reagents.",
        ],
      },
      {
        id: "t14-1-st5",
        question:
          "Name three harmful engine-emission products from alkane combustion and state how catalytic converters reduce harm.",
        modelAnswer: [
          "Harmful products include CO, NO/NO2 (NOx), and unburnt hydrocarbons.",
          "Catalytic converters (Pt/Pd/Rh) reduce NOx to N2 and oxidise CO and hydrocarbons to CO2 and H2O.",
        ],
      },
    ],
  },

  "t14-2": {
    noteId: "t14-2",
    syllabusNotes: [
      {
        id: "alkene-production-routes",
        title: "How alkenes are produced in this syllabus",
        paragraphs: [
          "Three required routes are elimination from halogenoalkanes, dehydration of alcohols, and cracking of long-chain alkanes.",
          "Elimination from halogenoalkanes uses ethanolic NaOH and heat. Example: CH3CH2Br + NaOH(ethanol) -> CH2=CH2 + NaBr + H2O.",
          "Dehydration of alcohols removes H2O using either a heated catalyst (for example Al2O3) or concentrated acid (for example concentrated H2SO4). Example: CH3CH2OH -> CH2=CH2 + H2O.",
          "Cracking also forms alkenes from heavy fractions, making alkenes available as key feedstocks for addition reactions and polymer manufacture.",
        ],
      },
      {
        id: "electrophilic-addition-reactions",
        title: "Electrophilic addition reactions of alkenes",
        paragraphs: [
          "The C=C bond contains a sigma bond and an electron-rich pi bond. The pi bond is weaker and is attacked by electrophiles, so alkenes undergo addition readily.",
          "Required additions are: hydrogenation (H2, Ni/Pt, heat), hydration with steam (H2O(g), H3PO4 catalyst), addition of hydrogen halide HX(g) at room temperature, and addition of halogen X2.",
          "Examples with ethene: CH2=CH2 + H2 -> CH3CH3; CH2=CH2 + H2O -> CH3CH2OH; CH2=CH2 + HBr -> CH3CH2Br; CH2=CH2 + Br2 -> BrCH2CH2Br.",
          "For unsymmetrical alkenes reacting with HX, major-product prediction usually follows carbocation stability (Markovnikov orientation), though you should always follow the exact syllabus wording and question context.",
        ],
      },
      {
        id: "electrophilic-addition-mechanism",
        title: "Mechanistic view of electrophilic addition",
        paragraphs: [
          "In electrophilic addition, the pi bond donates an electron pair to an electrophile, creating a carbocation intermediate. A nucleophile then attacks that carbocation to form the product.",
          "For bromination, the electrophile is generated from Br2 as the pi bond polarises the molecule; the key idea is addition across C=C with decolourisation of bromine solution.",
          "Mechanism questions require curly arrows showing electron-pair movement from the pi bond and from nucleophile lone pairs/bonds, consistent with Topic 13 mechanism conventions.",
        ],
      },
      {
        id: "oxidation-cold-kmno4",
        title: "Oxidation with cold dilute acidified KMnO4: diol formation",
        paragraphs: [
          "Cold dilute acidified potassium manganate(VII) oxidises alkenes to vicinal diols (1,2-diols) by addition of OH groups across the double bond.",
          "Example: CH2=CH2 -> HOCH2CH2OH (ethane-1,2-diol).",
          "This reaction removes the C=C and is often recognised by decolourisation of purple manganate(VII) solution under the stated mild conditions.",
        ],
      },
      {
        id: "oxidation-hot-concentrated-kmno4",
        title: "Oxidation with hot concentrated acidified KMnO4: C=C cleavage",
        paragraphs: [
          "Hot concentrated acidified KMnO4 causes oxidative cleavage of C=C bonds. The double bond is broken and each alkene carbon is oxidised to carbonyl/carboxyl products depending on substitution.",
          "If a double-bond carbon has at least one H, oxidation can proceed to a carboxylic acid on that side. A terminal CH2 side can be oxidised further to CO2 (via methanoic acid). A fully substituted double-bond carbon can give a ketone.",
          "These product patterns allow deduction of double-bond position in larger molecules: identify oxidation fragments, then reconstruct where the C=C must have been.",
        ],
      },
      {
        id: "addition-polymerisation",
        title: "Addition polymerisation of alkenes",
        paragraphs: [
          "In addition polymerisation, many alkene monomers join by opening C=C bonds to form long saturated chains with no small-molecule by-product.",
          "Ethene forms poly(ethene) with repeat unit [-CH2-CH2-]n. Propene forms poly(propene) with repeat unit [-CH2-CH(CH3)-]n.",
          "You should be able to draw repeat units correctly and distinguish monomer from polymer segment. Addition polymerisation is a major industrial use of alkene chemistry.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Alkene questions often combine routes, reagents/conditions, mechanism language, and oxidation deductions; missing one condition can lose otherwise easy marks.",
      items: [
        "Using aqueous NaOH instead of ethanolic NaOH for elimination to alkene from halogenoalkane.",
        "Describing alkene additions as substitution reactions rather than electrophilic addition across C=C.",
        "Confusing cold dilute KMnO4 (diol formation) with hot concentrated KMnO4 (bond cleavage).",
        "Giving hydration conditions without steam/H3PO4 catalyst details when conditions are requested.",
        "Drawing incorrect repeat units for poly(ethene) or poly(propene), especially leaving C=C in the polymer chain.",
        "Failing to use oxidation-fragment logic to locate C=C position in structure-deduction questions.",
      ],
    },
    workedExamples: [
      {
        id: "t14-2-ex1",
        title: "Producing an alkene by elimination and dehydration",
        problem: [
          "Write one equation for making propene from a halogenoalkane and one equation for making propene from an alcohol, including key conditions.",
        ],
        solution: [
          "From halogenoalkane (elimination): CH3CH2CH2Br + NaOH(ethanol) -> CH3CH=CH2 + NaBr + H2O (heat).",
          "From alcohol (dehydration): CH3CH2CH2OH -> CH3CH=CH2 + H2O (heated Al2O3 catalyst, or concentrated H2SO4 with heat).",
          "Both are elimination routes removing HX or H2O to generate the C=C bond.",
        ],
      },
      {
        id: "t14-2-ex2",
        title: "Comparing oxidation outcomes with KMnO4 conditions",
        problem: [
          "State products when but-2-ene, CH3CH=CHCH3, is oxidised by (a) cold dilute acidified KMnO4 and (b) hot concentrated acidified KMnO4.",
        ],
        solution: [
          "(a) Cold dilute acidified KMnO4 gives butane-2,3-diol: CH3CH(OH)CH(OH)CH3.",
          "(b) Hot concentrated acidified KMnO4 cleaves the C=C. Each alkene carbon in but-2-ene has one H, so each side oxidises to a carboxylic acid: two molecules of ethanoic acid, CH3COOH.",
          "The key contrast is addition to diol under mild conditions versus oxidative cleavage under vigorous conditions.",
        ],
      },
      {
        id: "t14-2-ex3",
        title: "Using cleavage products to locate a double bond",
        problem: [
          "An unknown C5H10 alkene gives CH3COOH and propanoic acid (CH3CH2COOH) on oxidation with hot concentrated acidified KMnO4. Deduce the alkene structure.",
        ],
        solution: [
          "Hot concentrated acidified KMnO4 cleaves C=C into two oxidised fragments. Getting ethanoic acid and propanoic acid means the two alkene carbons each carried one H and became carboxylic acids after cleavage.",
          "Reversing this, join the carbonyl carbons of CH3COOH and CH3CH2COOH as the original C=C carbons. This reconstructs CH3CH=CHCH2CH3.",
          "So the alkene is pent-2-ene (cis/trans not required for this deduction unless the question asks for stereoisomers).",
        ],
      },
    ],
    selfTest: [
      {
        id: "t14-2-st1",
        question:
          "List three syllabus routes for preparing alkenes and one key condition for each.",
        modelAnswer: [
          "Route 1: elimination from halogenoalkane using ethanolic NaOH and heat.",
          "Route 2: dehydration of alcohol using heated Al2O3 catalyst or concentrated H2SO4 with heat.",
          "Route 3: cracking of a longer-chain alkane using heat (often with catalyst in catalytic cracking).",
        ],
      },
      {
        id: "t14-2-st2",
        question:
          "State reagents/conditions and products for adding (a) steam and (b) bromine to ethene.",
        modelAnswer: [
          "(a) Steam addition: H2O(g), H3PO4 catalyst, heat/pressure -> ethanol (CH3CH2OH).",
          "(b) Halogen addition: Br2 at room temperature -> 1,2-dibromoethane (BrCH2CH2Br).",
        ],
      },
      {
        id: "t14-2-st3",
        question:
          "What is the product type when an alkene reacts with cold dilute acidified KMnO4, and what major structural change occurs?",
        modelAnswer: [
          "A vicinal diol (1,2-diol) is formed.",
          "The C=C bond is converted to C-C with an OH group added to each of the former double-bond carbons.",
        ],
      },
      {
        id: "t14-2-st4",
        question:
          "Why is hot concentrated acidified KMnO4 useful for identifying double-bond positions in larger molecules?",
        modelAnswer: [
          "It cleaves the C=C and gives oxidation fragments (carboxylic acids/ketones/CO2 patterns) that reveal what groups were attached to each alkene carbon, allowing reconstruction of the original C=C position.",
        ],
      },
      {
        id: "t14-2-st5",
        question:
          "Write the repeat unit for poly(propene) and state what happens to the monomer C=C bond during polymerisation.",
        modelAnswer: [
          "Repeat unit is [-CH2-CH(CH3)-]n.",
          "The monomer C=C bond opens and becomes single C-C bonds linking monomer units in the polymer chain.",
        ],
      },
    ],
  },
};
