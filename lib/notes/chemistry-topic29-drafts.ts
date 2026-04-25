import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 29 — subtopics 29.1-29.4 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC29_DRAFTS: Record<string, NoteDraft> = {
  "t29-1": {
    noteId: "t29-1",
    syllabusNotes: [
      {
        id: "functional-groups-and-why-they-matter",
        title: "Functional groups at A Level extension: recognition and consequences",
        paragraphs: [
          "At A Level extension, the new families include arenes, halogenoarenes, phenols, acyl chlorides, secondary and tertiary amines, amides, and amino acids. A functional group is still the reactive part of the molecule, so it controls the typical physical properties and the main reactions.",
          "You should be able to identify these groups from structural, displayed and skeletal forms quickly. For example, phenol is an –OH directly attached to a benzene ring, not an alcohol side-chain; an acyl chloride contains –C(=O)Cl; an amide contains –C(=O)N–; and a halogenoarene has halogen directly bonded to the aromatic ring.",
          "A useful exam habit is to classify by the atom next to the key bond: for C–Cl, ask whether carbon is aromatic (halogenoarene), acyl (acyl chloride), or aliphatic (halogenoalkane). That single check prevents many misclassifications and wrong mechanism choices.",
        ],
      },
      {
        id: "formula-representations-and-conversions",
        title: "General, structural, displayed and skeletal formulae",
        paragraphs: [
          "You must interpret and use all common representations. General formulae show the pattern for a homologous series; structural formulae condense connectivity; displayed formulae show every bond; skeletal formulae show carbon skeleton and functional groups with carbon-bound H implied.",
          "For aromatic compounds, a benzene ring is commonly shown as a hexagon with alternating double bonds or a circle for delocalised π electrons. In skeletal formulae, the ring itself represents six carbon atoms; hetero atoms and functional groups must be drawn explicitly.",
          "At this level you are expected to move between representations and deduce molecular formula correctly. Count ring carbons and substituent atoms carefully; errors often come from forgetting that each ring substitution replaces one ring hydrogen.",
        ],
      },
      {
        id: "naming-aliphatic-and-cyclic-extension",
        title: "Systematic naming of simple aliphatic and cyclic compounds",
        paragraphs: [
          "For aliphatic compounds, choose the parent chain containing the highest-priority functional group, number to give that group the lowest possible locant, then place substituent locants and names in alphabetical order. Use di-, tri-, tetra- for repeated identical substituents.",
          "Single-ring cyclo compounds (up to six ring carbons) are named with the prefix cyclo-. Number from the highest-priority substituent and proceed to give the lowest set of locants overall. In substituted cyclo compounds, avoid numbering gaps that increase the first point of difference.",
          "A Level extension includes simple amides and secondary/tertiary amines in naming decisions. For amides, the carbonyl carbon is carbon-1 of the parent amide chain. For secondary/tertiary amines, N-substituents are indicated with N- prefixes where required by IUPAC style.",
        ],
      },
      {
        id: "naming-aromatic-with-multiple-substituents",
        title: "Systematic naming of aromatic molecules with one benzene ring",
        paragraphs: [
          "For aromatic naming, identify the principal functional group that sets the parent name, such as benzoic acid, benzaldehyde, phenol or benzenamine. Number the ring so this principal group is at position 1, then assign locants to other substituents for the lowest possible set.",
          "Examples such as 3-nitrobenzoic acid and 2,4,6-tribromophenol show two common patterns: a parent aromatic functional group plus ring substituents, and repeated substituents requiring multiple locants.",
          "When no higher-priority group is present, benzene may be the parent with substituent prefixes, for example chlorobenzene or 1-bromo-3-methylbenzene. Use commas between numbers and hyphens between numbers and words consistently.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Naming and formula interpretation questions are high-yield marks, but examiners penalise small structural misunderstandings very heavily because they propagate into mechanism and synthesis errors.",
      items: [
        "Treating phenol as an alcohol side-chain instead of an –OH directly bonded to the aromatic ring.",
        "Confusing acyl chlorides with halogenoalkanes because both contain chlorine.",
        "Choosing a parent chain that does not include the highest-priority functional group.",
        "Misnumbering aromatic substituents, especially when the principal group fixes carbon-1.",
        "Forgetting that each substituent replaces one ring hydrogen when deducing molecular formulae.",
      ],
    },
    workedExamples: [
      {
        id: "t29-1-ex1",
        title: "From skeletal aromatic structure to systematic name",
        problem: [
          "A benzene ring has a carboxylic acid group at carbon-1 and nitro groups at carbons-2 and -4. Give the systematic name and state the parent.",
        ],
        solution: [
          "The highest-priority functional group is carboxylic acid, so the parent is benzoic acid and that group is fixed at carbon-1.",
          "The two substituents are nitro at positions 2 and 4.",
          "The correct name is 2,4-dinitrobenzoic acid.",
          "This naming order makes the parent clear first, then substituent locants and prefixes.",
        ],
      },
      {
        id: "t29-1-ex2",
        title: "Classifying extension functional groups correctly",
        problem: [
          "Classify each compound: C₆H₅Cl, C₆H₅OH, CH₃COCl, CH₃CONH₂, and state one key structural feature for each class.",
        ],
        solution: [
          "C₆H₅Cl is a halogenoarene because Cl is directly attached to an aromatic ring carbon.",
          "C₆H₅OH is phenol because the –OH group is directly bonded to the benzene ring.",
          "CH₃COCl is an acyl chloride because it contains the –C(=O)Cl group.",
          "CH₃CONH₂ is an amide because it contains the –C(=O)NH₂ group.",
          "The key structural check is the atom environment around the functional bond, not just the formula symbols present.",
        ],
      },
      {
        id: "t29-1-ex3",
        title: "Deducing molecular formula from named aromatic compound",
        problem: [
          "Deduce the molecular formula of 2,4,6-tribromophenol.",
        ],
        solution: [
          "Start from phenol, which is C₆H₆O.",
          "Three bromine substituents replace three ring hydrogens at positions 2, 4 and 6.",
          "So hydrogen count decreases from 6 to 3, and Br₃ is added.",
          "The molecular formula is C₆H₃Br₃O.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t29-1-st1",
        question:
          "Explain why functional-group identification is more informative than molecular formula alone when predicting organic reactions.",
        modelAnswer: [
          "Molecular formula gives composition but not bonding environment. Functional groups specify the reactive site and electron distribution, so they determine mechanism type and typical reagents/conditions.",
        ],
      },
      {
        id: "t29-1-st2",
        question:
          "State one structural feature that distinguishes each pair: (a) phenol vs alcohol, (b) acyl chloride vs halogenoalkane.",
        modelAnswer: [
          "(a) In phenol, –OH is directly attached to an aromatic ring; in an alcohol, –OH is attached to an aliphatic carbon.",
          "(b) Acyl chloride contains –C(=O)Cl; a halogenoalkane has C–X without an adjacent carbonyl group.",
        ],
      },
      {
        id: "t29-1-st3",
        question:
          "Name the aromatic compound with substituents: –COOH at carbon-1, Br at carbon-3, and CH₃ at carbon-4.",
        modelAnswer: [
          "The parent is benzoic acid, numbered from the –COOH group as carbon-1.",
          "Substituents are bromo at 3 and methyl at 4, written alphabetically in the name.",
          "Name: 3-bromo-4-methylbenzoic acid.",
        ],
      },
      {
        id: "t29-1-st4",
        question:
          "A ring structure is named cyclohexanecarboxamide. What does this tell you about (i) the ring and (ii) the functional group?",
        modelAnswer: [
          "(i) The parent contains a six-carbon single ring framework (cyclohexane).",
          "(ii) The compound contains an amide functional group attached as a carboxamide substituent, so a carbonyl and nitrogen are present in –CONH₂ or substituted equivalent.",
        ],
      },
      {
        id: "t29-1-st5",
        question:
          "Give the molecular formula of chlorobenzene and explain your atom count briefly.",
        modelAnswer: [
          "Molecular formula is C₆H₅Cl.",
          "Start from benzene C₆H₆ and replace one ring hydrogen by Cl, giving one fewer hydrogen and one chlorine atom.",
        ],
      },
    ],
  },

  "t29-2": {
    noteId: "t29-2",
    syllabusNotes: [
      {
        id: "electrophilic-substitution-core-idea",
        title: "Electrophilic substitution: definition and electron-flow logic",
        paragraphs: [
          "Electrophilic substitution is a mechanism in which an electrophile attacks an electron-rich organic system and ultimately replaces an atom or group, rather than adding across a multiple bond permanently.",
          "In aromatic chemistry this mechanism dominates because the ring is stabilised by delocalised π electrons. The mechanism temporarily disrupts aromaticity, then restores it by loss of H⁺, giving substitution product and preserving the aromatic ring.",
          "Curly arrows must begin at an electron pair source (a bond or lone pair) and point toward the electron-poor centre. Accurate arrow direction is essential evidence of mechanistic understanding in mark schemes.",
        ],
      },
      {
        id: "electrophilic-substitution-steps-arene",
        title: "Stepwise pattern in aromatic electrophilic substitution",
        paragraphs: [
          "Typical steps are: (1) generation of a strong electrophile by reagent/catalyst system, (2) attack of ring π electrons to form a positively charged intermediate, (3) deprotonation to regenerate aromaticity and catalyst where relevant.",
          "For halogenation of benzene, a Lewis acid catalyst such as AlCl₃ polarises X₂ to create an effective electrophile. For nitration, mixed acids generate NO₂⁺ as the attacking species.",
          "The key energetic idea is aromatic stabilisation: substitution is favoured over direct addition because final products retain the aromatic π system.",
        ],
      },
      {
        id: "addition-elimination-definition-and-scope",
        title: "Addition-elimination: definition and where it appears",
        paragraphs: [
          "Addition-elimination is a two-stage mechanism common for acyl compounds. First, a nucleophile adds to an electron-deficient carbonyl carbon. Second, a leaving group is eliminated, restoring the C=O bond.",
          "At this level, acyl chlorides are classic substrates: water, alcohols, phenols, ammonia and amines all react rapidly at room temperature via addition-elimination.",
          "The mechanism name reflects bond changes explicitly: temporary addition to carbonyl followed by elimination of chloride (or another leaving group), not direct substitution in one concerted step.",
        ],
      },
      {
        id: "addition-elimination-curly-arrows-and-products",
        title: "Electron-pair movement and product prediction in acyl chemistry",
        paragraphs: [
          "In acyl chloride reactions, a lone pair on nucleophile attacks the carbonyl carbon; the C=O π bond shifts to oxygen, giving a tetrahedral intermediate. Then electrons on oxygen reform C=O while Cl⁻ leaves.",
          "Product class depends on nucleophile: water gives carboxylic acid, alcohol/phenol gives ester, ammonia or amine gives amide. Hydrogen chloride is also formed, so basic conditions or excess amine may be needed to neutralise HCl.",
          "When writing mechanisms, include charges on intermediates and show where proton transfers occur. This is often the difference between partial and full-credit mechanism answers.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Mechanism questions test terminology, electron-flow accuracy and product logic together. Examiners reward correct step labels and complete curly-arrow sequences, not just final products.",
      items: [
        "Calling aromatic halogenation an addition mechanism instead of electrophilic substitution.",
        "Drawing curly arrows from electrophile to ring instead of from electron pair source to electrophile.",
        "Omitting the deprotonation step that restores aromaticity in electrophilic substitution.",
        "Writing acyl chloride reactions as one-step substitution without the tetrahedral addition intermediate.",
        "Forgetting HCl by-product or failing to account for proton transfer in addition-elimination mechanisms.",
      ],
    },
    workedExamples: [
      {
        id: "t29-2-ex1",
        title: "Identify mechanism type from reaction pattern",
        problem: [
          "Classify the mechanism in each case and justify briefly: (a) benzene + Br₂/AlBr₃ gives bromobenzene + HBr, (b) CH₃COCl + CH₃CH₂OH gives CH₃COOCH₂CH₃ + HCl.",
        ],
        solution: [
          "(a) Electrophilic substitution, because an electrophile attacks the aromatic ring and one hydrogen is replaced while aromaticity is retained in the product.",
          "(b) Addition-elimination, because ethanol adds to the acyl carbonyl carbon, then chloride is eliminated as the carbonyl reforms.",
          "Mechanism names match the bond-making and bond-breaking sequence, not just reagent identity.",
        ],
      },
      {
        id: "t29-2-ex2",
        title: "Outline electrophilic substitution steps for nitration",
        problem: [
          "Give a concise mechanism outline for nitration of benzene and state why substitution is favoured over addition.",
        ],
        solution: [
          "Mixed acids generate NO₂⁺ as electrophile.",
          "Ring π electrons attack NO₂⁺ to form a positively charged intermediate (arenium ion), temporarily breaking full aromatic delocalisation.",
          "A base removes H⁺ from the same carbon, and electrons restore the aromatic π system to form nitrobenzene.",
          "Substitution is favoured because the final product regains aromatic stabilisation, whereas stable addition products would lose that stabilisation.",
        ],
      },
      {
        id: "t29-2-ex3",
        title: "Predict products of acyl chloride addition-elimination",
        problem: [
          "Propanoyl chloride reacts separately with (i) water, (ii) phenol, (iii) methylamine. State the organic product in each case.",
        ],
        solution: [
          "(i) Water gives propanoic acid via nucleophilic addition to the carbonyl then elimination of Cl⁻.",
          "(ii) Phenol gives phenyl propanoate (an ester).",
          "(iii) Methylamine gives N-methylpropanamide (an amide); HCl is also formed and can react further with amine unless excess amine/base is present.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t29-2-st1",
        question:
          "Define electrophilic substitution and addition-elimination in one sentence each.",
        modelAnswer: [
          "Electrophilic substitution is a mechanism in which an electrophile attacks an electron-rich organic system and ultimately replaces a group (often H) while retaining the core framework, especially in arenes.",
          "Addition-elimination is a mechanism where a nucleophile first adds to a polar multiple bond (commonly C=O), then a leaving group is eliminated to reform the multiple bond.",
        ],
      },
      {
        id: "t29-2-st2",
        question:
          "Why must aromatic electrophilic substitution include a step that removes H⁺ from the intermediate?",
        modelAnswer: [
          "Removal of H⁺ restores the aromatic delocalised π system. Without this deprotonation step, aromatic stabilisation is not regained and the substitution mechanism is incomplete.",
        ],
      },
      {
        id: "t29-2-st3",
        question:
          "In acyl chloride hydrolysis, what is the role of the tetrahedral intermediate in mechanism terms?",
        modelAnswer: [
          "It is the addition intermediate formed after nucleophilic attack at carbonyl carbon; its collapse allows elimination of Cl⁻ and reformation of C=O, completing addition-elimination.",
        ],
      },
      {
        id: "t29-2-st4",
        question:
          "State the mechanism type and expected product class when benzene reacts with concentrated HNO₃/H₂SO₄.",
        modelAnswer: [
          "Mechanism type is electrophilic substitution, and the product class is nitroarene (for benzene, nitrobenzene).",
        ],
      },
      {
        id: "t29-2-st5",
        question:
          "Ethanoyl chloride reacts with ammonia. Give the mechanism family and main organic product.",
        modelAnswer: [
          "The reaction follows an addition-elimination mechanism at the acyl carbonyl.",
          "The main organic product is ethanamide.",
        ],
      },
    ],
  },

  "t29-3": {
    noteId: "t29-3",
    syllabusNotes: [
      {
        id: "benzene-shape-and-planarity",
        title: "Aromatic shape: benzene as a planar hexagon",
        paragraphs: [
          "Benzene is a planar hexagonal molecule with all C–C bond angles close to 120°. Each carbon is bonded to two neighbouring carbons and one hydrogen in a trigonal planar arrangement.",
          "Planarity matters because continuous sideways overlap of p orbitals requires parallel alignment across the ring. Distorting the ring would reduce overlap and destabilise the delocalised π system.",
          "Other simple aromatic molecules keep the same local sp² geometry at ring carbons, even when substituents are present.",
        ],
      },
      {
        id: "sp2-hybridisation-in-aromatic-rings",
        title: "sp² hybridisation and σ framework",
        paragraphs: [
          "Each ring carbon in benzene is sp² hybridised. Three sp² orbitals lie in the molecular plane and form σ bonds: two C–C σ bonds and one C–H σ bond.",
          "The remaining unhybridised p orbital on each carbon is perpendicular to the plane. These six p orbitals overlap sideways around the ring.",
          "The σ framework gives structural rigidity, while the p-orbital overlap creates the aromatic π system responsible for characteristic stability and reactivity patterns.",
        ],
      },
      {
        id: "delocalised-pi-system-and-bonding-consequences",
        title: "Delocalised π bonding and equalised C–C bond lengths",
        paragraphs: [
          "The six π electrons in benzene are delocalised over all six carbon atoms, not confined to three isolated C=C bonds. This is why all six C–C bonds are equal in length and intermediate between typical single and double bond lengths.",
          "Representations with alternating double bonds are useful historical models but do not imply alternating long and short bonds in the real molecule. A circle inside the hexagon better communicates ring-wide delocalisation.",
          "Delocalisation lowers the energy of benzene (aromatic stabilisation). This stabilisation explains why benzene usually undergoes substitution rather than addition under moderate conditions.",
        ],
      },
      {
        id: "applying-aromatic-bonding-model",
        title: "Applying σ/π ideas to aromatic derivatives",
        paragraphs: [
          "In halogenoarenes and phenols, the benzene ring retains its sp² planar σ framework and delocalised π cloud. Substituents modify electron density but do not remove aromatic bonding unless severe reaction conditions force addition/hydrogenation.",
          "When asked to explain aromatic shape or bond lengths, include all three ideas explicitly: sp² hybridisation, σ skeleton in plane, and delocalised π electrons above and below the plane.",
          "This combined description is the expected A Level standard; giving only one component usually misses explanatory marks.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Aromatic structure questions often look descriptive, but mark schemes require precise bonding language. Vague statements like 'benzene has double bonds' do not meet the A Level explanation standard.",
      items: [
        "Describing benzene as alternating C–C single and double bonds in the real structure.",
        "Omitting sp² hybridisation when explaining 120° trigonal planar geometry.",
        "Confusing the σ framework (in-plane) with π system (above and below plane).",
        "Failing to link delocalisation to equal C–C bond lengths and aromatic stability.",
        "Using substitution/addition reactivity statements without structural justification.",
      ],
    },
    workedExamples: [
      {
        id: "t29-3-ex1",
        title: "Explain benzene bond-angle and planarity data",
        problem: [
          "Benzene has C–C–C bond angles of about 120° and is planar. Explain these observations using hybridisation.",
        ],
        solution: [
          "Each ring carbon is sp² hybridised, giving trigonal planar geometry at each carbon with ideal bond angle near 120°.",
          "Because all six carbons are sp² and connected in a ring, the whole ring is planar.",
          "Planarity allows effective sideways overlap of all p orbitals, supporting delocalised π bonding.",
        ],
      },
      {
        id: "t29-3-ex2",
        title: "Account for equal C–C bond lengths in benzene",
        problem: [
          "Experimental data show all C–C bonds in benzene have the same length. Explain why this contradicts a fixed alternating single/double model.",
        ],
        solution: [
          "If fixed alternating single and double bonds existed, two distinct C–C bond lengths would be measured.",
          "In benzene, π electrons are delocalised around the ring, so each C–C bond has the same bond order between single and double.",
          "Therefore all C–C bond lengths are equal and intermediate, consistent with aromatic delocalisation.",
        ],
      },
      {
        id: "t29-3-ex3",
        title: "Link aromatic bonding to substitution preference",
        problem: [
          "Why does benzene usually undergo electrophilic substitution rather than electrophilic addition under standard laboratory conditions?",
        ],
        solution: [
          "Benzene is stabilised by a delocalised aromatic π system spread across the ring.",
          "Electrophilic addition would convert ring carbons from sp² toward sp³ and remove that delocalisation in the product.",
          "Electrophilic substitution temporarily disrupts aromaticity, then restores it after deprotonation, so the final product keeps aromatic stabilisation.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t29-3-st1",
        question:
          "State the hybridisation of each carbon in benzene and the corresponding approximate bond angle.",
        modelAnswer: [
          "Each carbon is sp² hybridised, giving approximately 120° bond angles around each ring carbon.",
        ],
      },
      {
        id: "t29-3-st2",
        question:
          "Describe where the σ bonds and π system are located in benzene.",
        modelAnswer: [
          "σ bonds form the in-plane framework: C–C and C–H bonds from sp² orbitals.",
          "The π system comes from sideways overlap of unhybridised p orbitals and is delocalised above and below the ring plane.",
        ],
      },
      {
        id: "t29-3-st3",
        question:
          "Why are all six C–C bonds in benzene the same length?",
        modelAnswer: [
          "Because π electrons are delocalised over all six carbons, each C–C bond has equal intermediate bond character rather than separate single and double bonds.",
        ],
      },
      {
        id: "t29-3-st4",
        question:
          "Give one structural reason benzene is planar.",
        modelAnswer: [
          "Planarity is required for parallel alignment and effective overlap of all unhybridised p orbitals, which sustains aromatic delocalisation.",
        ],
      },
      {
        id: "t29-3-st5",
        question:
          "In one sentence, connect aromatic bonding to benzene’s preferred mechanism type.",
        modelAnswer: [
          "Benzene prefers substitution because products retain the stabilising delocalised aromatic π system, whereas addition products would lose that stabilisation.",
        ],
      },
    ],
  },

  "t29-4": {
    noteId: "t29-4",
    syllabusNotes: [
      {
        id: "enantiomers-core-properties",
        title: "Enantiomers: same bulk properties, different optical and biological behavior",
        paragraphs: [
          "Enantiomers are non-superimposable mirror-image isomers, usually arising from a chiral centre (commonly a carbon attached to four different groups). In achiral environments, enantiomers have identical melting point, boiling point, solubility and most chemical reactivity.",
          "They differ in two crucial ways required at A Level: the direction they rotate plane-polarised light, and their potential biological activity in chiral biological systems.",
          "So exam statements must separate 'identical physical and chemical properties' from 'different optical and biochemical interactions'. This distinction is central to medicinal relevance.",
        ],
      },
      {
        id: "optically-active-and-racemic-definitions",
        title: "Optically active substances and racemic mixtures",
        paragraphs: [
          "A sample is optically active if it rotates plane-polarised light. A pure enantiomer is optically active; one enantiomer rotates clockwise and the other rotates by the same magnitude anticlockwise under identical conditions.",
          "A racemic mixture contains equal amounts of both enantiomers. Their opposite optical rotations cancel, so the mixture is optically inactive overall even though each molecule is chiral.",
          "When describing optical behavior, always specify whether you are discussing a pure enantiomer or a racemate; this avoids contradictory statements.",
        ],
      },
      {
        id: "plane-polarised-light-effects",
        title: "Effect of the two optical isomers on plane-polarised light",
        paragraphs: [
          "If enantiomer A rotates plane-polarised light by +θ, enantiomer B rotates it by −θ under the same path length, concentration, solvent and temperature.",
          "The signs (+/−) denote direction only and are not the same as absolute stereochemical labels such as R/S. Optical rotation is an experimental property and must be measured.",
          "A sample with unequal enantiomer amounts shows partial net rotation; zero rotation indicates either a racemate or an achiral/non-optically-active substance.",
        ],
      },
      {
        id: "chirality-in-drug-synthesis",
        title: "Chirality in pharmaceuticals: separation and asymmetric synthesis",
        paragraphs: [
          "Biological receptors and enzymes are chiral, so two enantiomers of a drug candidate can bind differently. One enantiomer may provide therapeutic effect while the other may be inactive or harmful.",
          "If synthesis gives a racemic mixture, separation (resolution) may be needed to isolate the desired pure enantiomer. This can add cost and complexity to manufacturing.",
          "An alternative is to use a chiral catalyst or chiral synthetic route that preferentially forms one enantiomer. This improves selectivity and reduces the burden of downstream separation.",
          "The syllabus expectation is conceptual: understand why chirality matters in drug development and why enantiomerically pure products are often required.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Optical-isomerism questions often combine definition marks with application to drugs. Examiners reward precise terminology and penalise conflating optical activity with all physical properties.",
      items: [
        "Saying enantiomers have different melting/boiling points in ordinary achiral conditions.",
        "Using 'racemic' to mean any mixture of enantiomers rather than specifically 1:1 composition.",
        "Confusing direction of optical rotation with R/S naming.",
        "Claiming racemic mixtures rotate light because molecules are chiral individually.",
        "Discussing drug chirality without explaining receptor chirality and differential biological response.",
      ],
    },
    workedExamples: [
      {
        id: "t29-4-ex1",
        title: "Classify sample optical behavior",
        problem: [
          "Three samples of the same chiral compound are tested: Sample A rotates plane-polarised light +12°, Sample B rotates −12°, Sample C shows 0°. Interpret each sample.",
        ],
        solution: [
          "Sample A is optically active and enriched in one enantiomer (or pure enantiomer) giving clockwise rotation by the chosen sign convention.",
          "Sample B is the opposite enantiomeric form under same conditions, rotating by equal magnitude in the opposite direction.",
          "Sample C is optically inactive overall; for this chiral compound the most likely interpretation is a racemic 1:1 mixture, though an achiral impurity scenario would need further evidence.",
        ],
      },
      {
        id: "t29-4-ex2",
        title: "Explain identical vs different properties of enantiomers",
        problem: [
          "A student says: 'Enantiomers always have different physical properties because they look different in a mirror.' Correct this statement.",
        ],
        solution: [
          "In achiral environments, enantiomers have the same bulk physical properties such as melting point, boiling point and solubility, and usually similar chemical reactivity.",
          "They differ in optical activity (equal and opposite rotation of plane-polarised light) and in interactions with other chiral systems, including biological molecules.",
          "So the mirror-image relationship does not imply different ordinary physical data tables.",
        ],
      },
      {
        id: "t29-4-ex3",
        title: "Drug-development implication of racemate formation",
        problem: [
          "A synthetic route gives a 50:50 racemate, but only one enantiomer has desired pharmacological activity. Give two realistic strategies and explain why each helps.",
        ],
        solution: [
          "Strategy 1: resolve the racemic mixture into separate enantiomers, then formulate only the active enantiomer. This removes inactive or potentially harmful opposite enantiomer.",
          "Strategy 2: redesign synthesis using a chiral catalyst or asymmetric route to form predominantly one enantiomer directly. This improves enantiomeric purity at source and reduces separation effort.",
          "Both strategies address the same core issue: biological systems distinguish enantiomers, so enantiomer composition influences efficacy and safety.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t29-4-st1",
        question:
          "State two ways enantiomers can differ and one way they are usually the same.",
        modelAnswer: [
          "They differ in direction of rotation of plane-polarised light and can differ in biological activity in chiral systems.",
          "They are usually the same in ordinary physical properties such as melting point/boiling point in achiral conditions.",
        ],
      },
      {
        id: "t29-4-st2",
        question:
          "Define optically active and racemic mixture.",
        modelAnswer: [
          "Optically active means a sample rotates plane-polarised light.",
          "A racemic mixture contains equal amounts of two enantiomers and has no net optical rotation.",
        ],
      },
      {
        id: "t29-4-st3",
        question:
          "Describe the effect of each pure enantiomer of a single substance on plane-polarised light.",
        modelAnswer: [
          "Each pure enantiomer rotates plane-polarised light by the same magnitude but in opposite directions under identical measurement conditions.",
        ],
      },
      {
        id: "t29-4-st4",
        question:
          "Why can two enantiomers of a drug have different biological activity?",
        modelAnswer: [
          "Biological targets such as enzymes and receptors are chiral, so each enantiomer fits and interacts differently, leading to different activity, potency or side-effect profiles.",
        ],
      },
      {
        id: "t29-4-st5",
        question:
          "State one reason to use chiral catalysts in pharmaceutical synthesis.",
        modelAnswer: [
          "Chiral catalysts can direct formation of one enantiomer preferentially, increasing enantiomeric purity and reducing the need to separate racemic mixtures later.",
        ],
      },
    ],
  },
};
