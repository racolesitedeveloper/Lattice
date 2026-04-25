import type { SubtopicPracticePack } from "./types";

/**
 * 9701 Topic 20 / 20.1 — Addition polymerisation: one course subtopic `t20-1`.
 *
 * LO crosswalk (`data/syllabus/chemistry-9701-learning-outcomes.md` §20.1; each bullet hit by ≥1 drill id):
 * - Describe addition polymerisation exemplified by poly(ethene) and poly(chloroethene) (PVC) → d1, d2, d10
 * - Deduce the repeat unit from a given monomer → d3, d4, d5
 * - Identify monomer(s) from a given addition polymer section / repeat unit → d6, d7
 * - Disposal of poly(alkene)s: non-biodegradability and harmful combustion products → d8, d9
 */
export const CHEMISTRY_TOPIC20_PRACTICE: Record<string, SubtopicPracticePack> = {
  "t20-1": {
    noteId: "t20-1",
    drills: [
      {
        id: "t20-1-d1",
        noteId: "t20-1",
        kind: "structured",
        difficulty: 1,
        marks: 6,
        stem: "Define addition polymerisation. State how it differs from condensation polymerisation in terms of atoms retained in the polymer, and name the structural feature a monomer must possess for addition polymerisation to be possible. State the two addition polymers named in the syllabus as required exemplars of this process.",
        modelAnswerPoints: [
          "Addition polymerisation is the joining of many unsaturated monomer molecules to form one long-chain polymer with no small molecule eliminated.",
          "All atoms from the monomer are retained in the polymer (repeat unit mass equals monomer mass); condensation polymerisation eliminates a small molecule such as H2O or HCl between monomer units.",
          "The monomer must contain carbon–carbon double bond (alkene-type) unsaturation so the π bond can open during chain growth.",
          "Required exemplars are poly(ethene) from ethene and poly(chloroethene) (PVC) from chloroethene.",
        ],
        workedSolution: [
          "Addition polymerisation means many monomer units add together to build a saturated carbon-chain polymer without losing atoms as a separate small molecule, so the empirical composition of the repeat unit matches that of the monomer.",
          "By contrast, in condensation polymerisation each step (or each linkage) typically eliminates a small molecule such as water or hydrogen chloride, so not all atoms of the original monomer fragments remain in the polymer backbone in the same stoichiometric way as for a simple addition repeat.",
          "For addition polymerisation at this level the monomer is an alkene (or related unsaturated species) because the C=C bond can break partially to give new C–C single bonds along the chain while substituents stay on their original carbons.",
          "The syllabus requires students to describe the process using poly(ethene), made from ethene, and poly(chloroethene), commonly called PVC, made from chloroethene (vinyl chloride), as the standard illustrations of addition polymerisation.",
        ],
        commonMistake:
          "Saying ‘no product is formed’ instead of ‘no small molecule is eliminated’, or naming polyethylene without linking it to ethene as monomer.",
        tags: ["definitions", "addition-polymerisation", "polyethene", "pvc"],
      },
      {
        id: "t20-1-d2",
        noteId: "t20-1",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "Write equations, using n for the degree of polymerisation and square brackets with continuation bonds through the brackets, for the addition polymerisation of (i) ethene to poly(ethene) and (ii) chloroethene, CH2=CHCl, to poly(chloroethene) (PVC). State in one sentence what happens to the carbon–carbon bonding in the monomer when each polymer forms.",
        modelAnswerPoints: [
          "(i) nCH2=CH2 -> [-CH2-CH2-]n.",
          "(ii) nCH2=CHCl -> [-CH2-CH(Cl)-]n.",
          "The C=C double bond in each monomer is converted into C–C single bonds along the polymer backbone (π bond broken, σ framework extended).",
        ],
        workedSolution: [
          "Ethene undergoes addition polymerisation according to nCH2=CH2 -> [-CH2-CH2-]n, where n identical monomer units are shown on the left and the repeat unit of poly(ethene) is drawn in brackets with bonds extending through the bracket to indicate continuation of the chain.",
          "Chloroethene polymerises in the same general way, nCH2=CHCl -> [-CH2-CH(Cl)-]n, which is poly(chloroethene), known as PVC, with the chlorine substituent carried on every second backbone carbon in the repeat-unit representation.",
          "In both equations the original carbon–carbon double bond of the monomer is lost as such, because each monomer contributes its two sp2 carbons to new backbone single bonds, so the polymer contains only single C–C links between repeat units along the chain.",
        ],
        commonMistake:
          "Leaving a double bond inside the bracketed repeat unit, or omitting n / continuation bonds so the drawing does not read as a polymer.",
        tags: ["equations", "polyethene", "pvc", "repeat-unit"],
      },
      {
        id: "t20-1-d3",
        noteId: "t20-1",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem: "The monomer propene has the structure CH2=CHCH3. Deduce the repeat unit of its addition polymer, drawing it in the usual bracketed form with continuation bonds and subscript n outside the brackets.",
        modelAnswerPoints: [
          "Open the C=C bond and connect the two carbons by a backbone single bond.",
          "The methyl group remains attached to the same carbon as in the monomer (the middle carbon of the original propene unit becomes the CH(CH3) backbone carbon).",
          "Repeat unit: [-CH2-CH(CH3)-]n (poly(propene)).",
        ],
        workedSolution: [
          "In propene, CH2=CHCH3, the double bond lies between the CH2 group and the CHCH3 group, so when this bond opens for polymerisation those two carbons become adjacent saturated centres in the growing chain.",
          "The methyl substituent must stay on the carbon that bore it in the monomer, which is the second carbon of the original alkene unit, so after polymerisation that carbon appears as CH(CH3) in the backbone.",
          "The repeat unit is therefore written as [-CH2-CH(CH3)-]n with brackets and external n, showing two backbone carbons per propene molecule and no side products.",
        ],
        commonMistake:
          "Moving the methyl group onto the wrong backbone carbon or retaining a C=C inside the repeat unit.",
        tags: ["repeat-unit", "deduction", "propene"],
      },
      {
        id: "t20-1-d4",
        noteId: "t20-1",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "Tetrafluoroethene, CF2=CF2, is the monomer for poly(tetrafluoroethene), PTFE. Deduce the repeat unit of PTFE in the standard bracketed polymer notation. Explain briefly why the relative molecular mass of a high-molecular-mass PTFE chain is much larger than that of a single monomer molecule.",
        modelAnswerPoints: [
          "Opening the C=C in CF2=CF2 gives repeat unit [-CF2-CF2-]n (or equivalent clear drawing with four F atoms per repeat).",
          "A polymer molecule contains many linked repeat units (large n), so its Mr is roughly n times the monomer Mr (minus negligible end-group effects).",
        ],
        workedSolution: [
          "Each tetrafluoroethene molecule contains two doubly bonded carbon atoms each carrying two fluorine atoms, and addition polymerisation converts the C=C linkage into a C–C single bond between those carbons while every fluorine remains bonded to its original carbon.",
          "The repeat unit is therefore written as [-CF2-CF2-]n using the same bracket-and-continuation convention as for poly(ethene), which displays a perfluorinated two-carbon segment along the chain.",
          "A single monomer unit has a modest relative molecular mass, but in PTFE commercial chains n is very large, so many repeat units are joined in one macromolecule, which multiplies the mass almost in proportion to the number of monomer units incorporated, giving a vastly larger Mr than one CF2=CF2 molecule.",
        ],
        commonMistake:
          "Drawing only one CF2 in the repeat unit or losing fluorine atoms when opening the double bond.",
        tags: ["repeat-unit", "ptfe", "deduction"],
      },
      {
        id: "t20-1-d5",
        noteId: "t20-1",
        kind: "mcq",
        difficulty: 2,
        stem: "Which formula best represents the repeat unit of poly(chloroethene) (PVC)?",
        options: [
          { id: "A", text: "[-CH2-CH2-]n" },
          { id: "B", text: "[-CH2-CH(Cl)-]n" },
          { id: "C", text: "[-CHCl-CHCl-]n" },
          { id: "D", text: "[-CH2=CHCl-]n" },
        ],
        correctOptionId: "B",
        explanation:
          "PVC comes from CH2=CHCl; opening the double bond gives a two-carbon saturated repeat with Cl on the second carbon: [-CH2-CH(Cl)-]n.",
        distractorRationale: {
          A: "That repeat unit is poly(ethene), which lacks the chlorine substituent from chloroethene.",
          C: "That would imply both backbone carbons are CHCl units, which does not match addition polymerisation of vinyl chloride.",
          D: "A repeat unit must not contain a C=C double bond; the polymer backbone is built from single bonds after addition.",
        },
        tags: ["repeat-unit", "pvc", "mcq"],
      },
      {
        id: "t20-1-d6",
        noteId: "t20-1",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem: "A section of an addition polymer chain has the repeat unit shown in skeletal form as bracketed [-CH2-C(CH3)2-]n. Identify the alkene monomer from which this polymer is formed, and explain how you reconstruct it from the repeat unit.",
        modelAnswerPoints: [
          "Select two adjacent backbone carbons that form one repeat.",
          "Reinsert a C=C double bond between those carbons while keeping each substituent on the same carbon as in the repeat unit.",
          "Monomer is 2-methylpropene, CH2=C(CH3)2 (acceptable names: methylpropene / isobutene in common usage).",
        ],
        workedSolution: [
          "The bracketed unit contains a CH2 group bonded to a quaternary-style carbon bearing two methyl groups in the repeat-unit drawing, which corresponds to the two carbons that were originally sp2-hybridised in the monomer’s double bond.",
          "To recover the monomer, imagine pulling the two backbone carbons slightly apart and placing a double bond between them again, without moving methyl groups between carbons.",
          "That reconstruction gives CH2=C(CH3)2, 2-methylpropene, because the CH2 end of the repeat unit was one end of the original C=C and the carbon carrying two methyls was the other trisubstituted alkene carbon before polymerisation.",
        ],
        commonMistake:
          "Giving propene instead of 2-methylpropene, which would produce [-CH2-CH(CH3)-]n rather than a gem-dimethyl pattern.",
        tags: ["monomer", "identification", "repeat-unit"],
      },
      {
        id: "t20-1-d7",
        noteId: "t20-1",
        kind: "mcq",
        difficulty: 3,
        stem: "A polymer chain contains the repeating sequence …-CH2-CH(CN)-CH2-CH(CN)-… . Which compound is the monomer?",
        options: [
          { id: "A", text: "CH3-CH2-CN" },
          { id: "B", text: "CH2=CHCN" },
          { id: "C", text: "NC-CH2-CH2-CN" },
          { id: "D", text: "CH2=CH-CH2-CN" },
        ],
        correctOptionId: "B",
        explanation:
          "The two-carbon repeat -CH2-CH(CN)- comes from opening CH2=CHCN (propenenitrile / acrylonitrile); the CN stays on the second carbon.",
        distractorRationale: {
          A: "That is a saturated nitrile, not an alkene monomer for addition polymerisation.",
          C: "A dinitrile would not give this alternating CH2 / CH(CN) two-carbon repeat from simple alkene addition polymerisation.",
          D: "That structure would place the nitrile on a terminal saturated carbon after incorrect reconstruction, not the documented CH(CN) backbone position.",
        },
        tags: ["monomer", "acrylonitrile", "mcq"],
      },
      {
        id: "t20-1-d8",
        noteId: "t20-1",
        kind: "structured",
        difficulty: 3,
        marks: 6,
        stem: "Explain why disposal of poly(alkene) waste is chemically difficult. Your answer should refer to non-biodegradability and to harmful products that may form when such polymers are burned, including one specific hazard associated with combustion of PVC.",
        modelAnswerPoints: [
          "Poly(alkene)s have saturated C–C backbones that are chemically inert and not readily broken down by microorganisms, so they are essentially non-biodegradable and persist in landfill or the environment for long timescales.",
          "Incineration can produce harmful combustion products such as carbon monoxide and soot/particulates, especially under incomplete combustion.",
          "PVC contains chlorine in the chain; combustion can release hydrogen chloride gas, which is acidic, corrosive, and environmentally harmful unless scrubbed.",
        ],
        workedSolution: [
          "Most poly(alkene) materials consist of long hydrocarbon chains with strong, non-polar C–C and C–H bonds, which means common biological pathways do not easily oxidise or hydrolyse the backbone, so waste persists rather than being rapidly mineralised; this is what is meant by non-biodegradability in this context.",
          "When poly(alkene)s are burned, particularly if oxygen supply is poor, incomplete oxidation produces toxic or irritating species such as carbon monoxide and carbonaceous particulates, which are harmful to health and difficult to release unchecked.",
          "PVC additionally contains chlorine atoms along the chain, so thermal breakdown and combustion chemistry can generate hydrogen chloride, an acidic gas that contributes to acid gas emissions and requires careful flue-gas treatment, illustrating why simple open burning of mixed plastics is especially problematic.",
        ],
        commonMistake:
          "Vague answers about ‘plastics polluting’ without mentioning persistence of the carbon chain and named combustion hazards.",
        tags: ["disposal", "environment", "pvc"],
      },
      {
        id: "t20-1-d9",
        noteId: "t20-1",
        kind: "mcq",
        difficulty: 2,
        stem: "Which statement about poly(ethene) waste is most accurate in a syllabus context?",
        options: [
          { id: "A", text: "It is readily biodegradable in soil because the chains are non-polar." },
          { id: "B", text: "It is non-biodegradable, so it persists, yet incineration may still produce harmful combustion products if not well controlled." },
          { id: "C", text: "Landfill disposal removes the carbon from the geochemical cycle permanently within weeks." },
          { id: "D", text: "Complete combustion always produces only oxygen and nitrogen with no other gases." },
        ],
        correctOptionId: "B",
        explanation:
          "Saturated poly(alkene) backbones resist biological attack (non-biodegradable persistence), while burning can still yield CO, particulates, and other pollutants without proper engineering controls.",
        distractorRationale: {
          A: "Non-polarity does not make poly(ethene) biodegradable; persistence is the usual teaching point.",
          C: "Poly(alkene)s persist for long periods in landfill rather than disappearing in weeks.",
          D: "Even ‘complete’ combustion of hydrocarbon polymers produces carbon dioxide and water at minimum; nitrogen from air may form oxides, and real systems are rarely perfectly complete.",
        },
        tags: ["disposal", "polyethene", "mcq"],
      },
      {
        id: "t20-1-d10",
        noteId: "t20-1",
        kind: "structured",
        difficulty: 4,
        marks: 5,
        stem: "Outline typical industrial conditions used to convert ethene to poly(ethene) on a large scale (refer to high pressure and temperature, and to the role of a catalyst or trace initiator). Explain briefly why such conditions are used in terms of overcoming electrostatic repulsion between monomers and promoting formation of reactive species that start chain growth.",
        modelAnswerPoints: [
          "Industrial poly(ethene) is often made under high pressure (order 10^2–10^3 atm depending on process) and elevated temperature so collisions are frequent and chains propagate rapidly.",
          "A catalyst (e.g. Ziegler–Natta type for HDPE) or a radical initiator / trace oxygen (historical high-pressure radical PE) is used to generate chain carriers that add monomer.",
          "High pressure increases ethene concentration, favouring collision-driven propagation; initiator or catalyst lowers activation barrier for starting the polymer chains compared with uncatalysed thermal coupling alone.",
        ],
        workedSolution: [
          "Large-scale poly(ethene) production from ethene commonly uses high pressure together with moderately high temperature so that gaseous monomer is forced into close contact and reaction rates are economically viable, whether the route is a free-radical high-pressure process or a lower-pressure catalytic route depending on the manufacturer’s technology.",
          "A heterogeneous or homogeneous catalyst (such as a Ziegler–Natta or Phillips-type system for certain grades) or, in classic high-pressure radical polymerisation, a peroxide or trace oxygen, generates the active centres that add to the C=C bond of ethene and propagate a growing chain.",
          "Ethene molecules repel each other somewhat at the molecular level until they are packed closely, so high pressure increases the liquid-like density of the monomer phase and collision frequency, while the initiator or catalyst provides a low-energy pathway to radicals or coordinated centres that can attack the π bond, without which direct thermal polymerisation would be impractically slow or unselective.",
        ],
        commonMistake:
          "Listing ‘catalyst’ with no mention of pressure/temperature, or claiming a small molecule such as water is eliminated during poly(ethene) formation.",
        tags: ["conditions", "polyethene", "industrial"],
      },
    ],
    flashcards: [
      {
        id: "t20-1-f1",
        noteId: "t20-1",
        difficulty: 1,
        front: "What is addition polymerisation?",
        back: "Many unsaturated monomers join to form one long polymer with no small molecule eliminated; all monomer atoms stay in the chain.",
        examPhrasing: "Define addition polymerisation.",
        tags: ["definitions"],
      },
      {
        id: "t20-1-f2",
        noteId: "t20-1",
        difficulty: 1,
        front: "Which two polymers are named syllabus exemplars of addition polymerisation?",
        back: "Poly(ethene) from ethene, and poly(chloroethene) (PVC) from chloroethene.",
        examPhrasing: "Name the polymers used as examples of addition polymerisation.",
        tags: ["polyethene", "pvc"],
      },
      {
        id: "t20-1-f3",
        noteId: "t20-1",
        difficulty: 2,
        front: "Equation for ethene forming poly(ethene)?",
        back: "nCH2=CH2 -> [-CH2-CH2-]n.",
        examPhrasing: "Write an equation for the polymerisation of ethene.",
        tags: ["equations", "polyethene"],
      },
      {
        id: "t20-1-f4",
        noteId: "t20-1",
        difficulty: 2,
        front: "Equation for chloroethene forming PVC?",
        back: "nCH2=CHCl -> [-CH2-CH(Cl)-]n.",
        examPhrasing: "Write an equation for the formation of PVC from chloroethene.",
        tags: ["equations", "pvc"],
      },
      {
        id: "t20-1-f5",
        noteId: "t20-1",
        difficulty: 3,
        front: "Repeat unit from CH2=CHCH3?",
        back: "[-CH2-CH(CH3)-]n (poly(propene)).",
        examPhrasing: "Deduce the repeat unit formed from propene.",
        confusionPair: "monomer vs repeat unit",
        tags: ["repeat-unit"],
      },
      {
        id: "t20-1-f6",
        noteId: "t20-1",
        difficulty: 3,
        front: "Repeat unit from CF2=CF2?",
        back: "[-CF2-CF2-]n (PTFE).",
        examPhrasing: "Deduce the repeat unit of poly(tetrafluoroethene).",
        tags: ["repeat-unit", "ptfe"],
      },
      {
        id: "t20-1-f7",
        noteId: "t20-1",
        difficulty: 3,
        front: "How do you find the monomer from a repeat unit like [-CH2-CH(Cl)-]n?",
        back: "Take the two backbone carbons of one repeat, reinsert C=C between them, keep substituents on the same carbons → CH2=CHCl.",
        examPhrasing: "Identify the monomer in a section of an addition polymer.",
        tags: ["monomer"],
      },
      {
        id: "t20-1-f8",
        noteId: "t20-1",
        difficulty: 4,
        front: "Why are poly(alkene)s hard to dispose of by biodegradation?",
        back: "Saturated C–C backbones are chemically inert and not easily broken down by microbes, so they persist.",
        examPhrasing: "Explain why poly(alkene)s are non-biodegradable.",
        tags: ["disposal"],
      },
      {
        id: "t20-1-f9",
        noteId: "t20-1",
        difficulty: 4,
        front: "One combustion hazard specific to PVC?",
        back: "Hydrogen chloride (acidic, toxic/corrosive gas) can form from chlorine in the chain.",
        examPhrasing: "State a harmful product of burning PVC.",
        confusionPair: "landfill persistence vs incineration hazards",
        tags: ["disposal", "pvc"],
      },
      {
        id: "t20-1-f10",
        noteId: "t20-1",
        difficulty: 5,
        front: "Typical features of industrial ethene polymerisation?",
        back: "High pressure and raised temperature; catalyst or initiator to start chains; promotes fast propagation and practical rates.",
        examPhrasing: "State conditions used to manufacture poly(ethene) from ethene.",
        tags: ["conditions", "polyethene"],
      },
    ],
  },
};
