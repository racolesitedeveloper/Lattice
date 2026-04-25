import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 35 — subtopics 35.1-35.3 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC35_DRAFTS: Record<string, NoteDraft> = {
  "t35-1": {
    noteId: "t35-1",
    syllabusNotes: [
      {
        id: "condensation-polymerisation-core-principle",
        title: "Condensation polymerisation: the linking principle",
        paragraphs: [
          "Condensation polymerisation forms a long-chain polymer by repeated reactions between monomers that each contain at least two reactive functional groups. Every new link forms with elimination of a small molecule, commonly H₂O or HCl.",
          "This differs from addition polymerisation, where unsaturated monomers add without loss of a small molecule. In condensation polymerisation, bond formation and small-molecule elimination are inseparable features of each chain-growth step.",
          "In exam responses, name both the new link formed in the chain (for example ester or amide link) and the small molecule eliminated. This shows full understanding of the process rather than simple recall of monomer names.",
        ],
      },
      {
        id: "polyester-formation-diol-diacid-dioylchloride",
        title: "Forming polyesters from diols and dicarboxylic derivatives",
        paragraphs: [
          "A polyester forms when a diol reacts with a dicarboxylic acid or with a dioyl chloride. Repetition of esterification-type steps produces many ester links (–COO–) along the chain.",
          "With a dicarboxylic acid, each link forms with elimination of H₂O. With a dioyl chloride, each link forms with elimination of HCl because the acyl chloride group is more reactive.",
          "Both monomers must be bifunctional to sustain chain growth in both directions. If one monomer is only monofunctional, polymer growth terminates quickly because chain extension cannot continue at both ends.",
        ],
      },
      {
        id: "polyester-formation-hydroxycarboxylic-acid",
        title: "Forming polyesters from a hydroxycarboxylic acid",
        paragraphs: [
          "A hydroxycarboxylic acid contains both –OH and –COOH groups in one molecule, so a single monomer can self-condense repeatedly.",
          "During polymerisation, the –OH group of one monomer reacts with the –COOH group of another to form an ester link, eliminating H₂O at each condensation step.",
          "This route can produce a polyester from one monomer type rather than two, but the repeat-unit logic is the same: identify the atoms that remain after removing the elements of water for each newly formed ester link.",
        ],
      },
      {
        id: "polyamide-formation-diamine-diacid-dioylchloride",
        title: "Forming polyamides from diamines and dicarboxylic derivatives",
        paragraphs: [
          "A polyamide forms when a diamine reacts with a dicarboxylic acid or dioyl chloride. The chain contains amide links (–CONH–) formed repeatedly between amino and carboxyl-derived groups.",
          "Diamine + dicarboxylic acid forms polyamide with elimination of H₂O. Diamine + dioyl chloride forms polyamide with elimination of HCl, often rapidly at room temperature in practical demonstrations.",
          "The amide link identity is essential in naming and structural deduction. In a repeat unit, spotting –CONH– indicates condensation polymerisation from nitrogen-containing and carboxyl-derived monomer functionality.",
        ],
      },
      {
        id: "polyamide-formation-aminocarboxylic-acids-amino-acids",
        title: "Forming polyamides from aminocarboxylic acids and amino acids",
        paragraphs: [
          "An aminocarboxylic acid (including amino acids) contains both –NH₂ and –COOH groups, so one monomer type can self-condense to form a polyamide.",
          "Each link forms when the amino group of one molecule reacts with the carboxyl group of another, eliminating H₂O and creating an amide (peptide-type) bond in the chain.",
          "When amino acids are used as monomers, the polymerisation chemistry is still condensation polymerisation. The repeating amide linkage is chemically equivalent to the bond formed between amino-acid residues in peptides.",
        ],
      },
      {
        id: "deducing-repeat-unit-and-monomers",
        title: "Deducing repeat units and identifying monomers",
        paragraphs: [
          "To deduce a repeat unit from monomer(s), join monomers through the functional groups that react and remove the atoms of the eliminated small molecule for each link formed. Then place continuation bonds at both ends of the minimal repeating fragment.",
          "To identify monomer(s) from a polymer section, locate the linkage type first: ester links suggest diol + dicarboxylic derivative or hydroxycarboxylic-acid monomer; amide links suggest diamine + dicarboxylic derivative or aminocarboxylic-acid/amino-acid monomer.",
          "If a polymer segment is symmetrical and built from one repeating bifunctional unit, it may come from one self-condensing monomer. If two clearly different residue blocks alternate, two different monomers are usually involved.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Condensation polymerisation questions reward precise linkage logic. Examiners look for correct functional-group pairing, correct eliminated molecule, and structurally accurate repeat units with continuation bonds.",
      items: [
        "Calling condensation polymerisation 'addition' polymerisation because a chain is formed, while ignoring elimination of H₂O or HCl.",
        "Drawing polyester repeat units with amide links, or polyamide repeat units with ester links.",
        "Forgetting that dioyl chlorides eliminate HCl, not H₂O, when links form.",
        "Using monomers with only one reactive functional group and still claiming long-chain polymer formation.",
        "Failing to identify monomer(s) from a polymer segment because continuation bonds and repeat boundaries are not handled correctly.",
      ],
    },
    workedExamples: [
      {
        id: "t35-1-ex1",
        title: "Polyester from a diol and a dicarboxylic acid",
        problem: [
          "A polymer is formed from ethane-1,2-diol and benzene-1,4-dicarboxylic acid. State the polymer type, the linkage in the chain, and the small molecule eliminated at each link-forming step.",
        ],
        solution: [
          "This is a condensation polymer and specifically a polyester because the monomers are a diol and a dicarboxylic acid.",
          "The chain linkage is an ester link, written as –COO– within the repeat structure.",
          "Each ester link forms with elimination of H₂O from the reacting –OH and –COOH groups.",
          "Because both monomers are bifunctional, repeated condensation extends the chain in both directions to give a high Mr polymer.",
        ],
      },
      {
        id: "t35-1-ex2",
        title: "Polyamide from a diamine and a dioyl chloride",
        problem: [
          "Hexane-1,6-diamine reacts with hexanedioyl chloride to form a polymer. Identify the polymer class and name the molecule eliminated during link formation.",
        ],
        solution: [
          "The polymer class is polyamide because amino groups react with acyl chloride groups to create amide links, –CONH–, along the chain.",
          "The eliminated small molecule is HCl, not H₂O, because the carboxyl-derived monomer is a dioyl chloride.",
          "Each repeat-linking step forms one amide bond and releases one HCl molecule from the reacting –NH₂ and –COCl functionalities.",
          "This is a standard condensation-polymerisation route used for nylon-type materials.",
        ],
      },
      {
        id: "t35-1-ex3",
        title: "Identifying monomer origin from a polymer segment",
        problem: [
          "A polymer segment contains repeating –NH–CH₂–CH₂–CO– units. Deduce whether the monomer origin is one monomer type or two, and suggest the monomer class.",
        ],
        solution: [
          "The linkage present is amide (–CO–NH–), so the polymer is a polyamide formed by condensation polymerisation.",
          "Because the residue pattern can be written as one repeating unit that already contains both nitrogen and carbonyl-origin functionality, one plausible origin is a single aminocarboxylic-acid monomer.",
          "An appropriate monomer class is an aminocarboxylic acid, for example H₂N–CH₂–CH₂–COOH, which self-condenses with elimination of H₂O.",
          "A two-monomer route is also possible in some cases, but this segment most directly indicates a self-condensing monomer carrying both required functional groups.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t35-1-st1",
        question:
          "State what is meant by condensation polymerisation and include one structural feature and one by-product feature in your answer.",
        modelAnswer: [
          "Condensation polymerisation is polymer formation by repeated reaction between monomers with two reactive functional groups.",
          "Each new chain link forms with elimination of a small molecule such as H₂O or HCl, and the chain contains characteristic links such as ester or amide groups.",
        ],
      },
      {
        id: "t35-1-st2",
        question:
          "How can a polyester be formed from (a) two monomers and (b) one monomer type? Name the monomer classes in each case.",
        modelAnswer: [
          "(a) Two-monomer route: a diol reacts with a dicarboxylic acid or dioyl chloride to form ester links.",
          "(b) One-monomer route: a hydroxycarboxylic acid self-condenses because it contains both –OH and –COOH groups.",
        ],
      },
      {
        id: "t35-1-st3",
        question:
          "How can a polyamide be formed from (a) two monomers and (b) one monomer type? Name the monomer classes in each case.",
        modelAnswer: [
          "(a) Two-monomer route: a diamine reacts with a dicarboxylic acid or dioyl chloride to form amide links.",
          "(b) One-monomer route: an aminocarboxylic acid (including an amino acid) self-condenses via –NH₂ and –COOH groups.",
        ],
      },
      {
        id: "t35-1-st4",
        question:
          "A condensation polymer contains ester links and no nitrogen atoms in the chain backbone. Suggest the most likely monomer combination.",
        modelAnswer: [
          "Most likely monomer combination is a diol with a dicarboxylic acid (or dioyl chloride), or a hydroxycarboxylic acid self-condensing.",
          "Absence of nitrogen makes a polyamide route unlikely.",
        ],
      },
      {
        id: "t35-1-st5",
        question:
          "Describe a reliable method for identifying monomer(s) from a displayed section of a condensation polymer chain.",
        modelAnswer: [
          "First identify the linkage type in the chain, ester (–COO–) or amide (–CONH–).",
          "Then conceptually split each link at the bond formed during condensation and restore the eliminated atoms to recover monomer functional groups.",
          "Check whether the recovered fragments indicate two different bifunctional monomers or one self-condensing monomer with both required groups.",
        ],
      },
    ],
  },

  "t35-2": {
    noteId: "t35-2",
    syllabusNotes: [
      {
        id: "polymerisation-type-decision-framework",
        title: "A fast framework for predicting polymerisation type",
        paragraphs: [
          "Predicting polymerisation type starts with monomer structure. If monomers contain C=C unsaturation and no need to eliminate a small molecule, the process is usually addition polymerisation.",
          "If monomer(s) contain two functional groups that can react together (for example –OH with –COOH, or –NH₂ with –COOH/–COCl) and each link formation eliminates H₂O or HCl, the process is condensation polymerisation.",
          "In mixed questions, always justify your choice using both structural evidence and by-product logic. Examiners reward the reasoning chain, not only the final label.",
        ],
      },
      {
        id: "predicting-from-single-monomer",
        title: "Predicting polymerisation type from a single monomer",
        paragraphs: [
          "A single monomer with a C=C bond, such as an alkene, is a strong indicator of addition polymerisation because chains form by opening the double bond without elimination of a small molecule.",
          "A single monomer containing two complementary condensation groups in one molecule, such as a hydroxycarboxylic acid or aminocarboxylic acid, is a strong indicator of condensation polymerisation by self-condensation.",
          "A monomer with only one reactive functional group and no C=C typically cannot produce a long polymer alone under syllabus-level mechanisms because chain extension cannot continue repeatedly.",
        ],
      },
      {
        id: "predicting-from-monomer-pairs",
        title: "Predicting polymerisation type from monomer pairs",
        paragraphs: [
          "A pair of monomers each carrying one of two complementary groups (for example diol + dicarboxylic acid, diamine + dioyl chloride) indicates condensation polymerisation because links form with small-molecule elimination.",
          "A pair of vinyl-type monomers containing C=C bonds can copolymerise by addition polymerisation if radical or catalytic conditions allow double-bond opening and chain growth.",
          "Bifunctionality still matters: each monomer must provide repeated connection capacity. If one monomer is monofunctional, it tends to cap chains rather than sustain high-Mr polymer growth.",
        ],
      },
      {
        id: "deducing-type-from-polymer-segment",
        title: "Deducing polymerisation type from a polymer fragment",
        paragraphs: [
          "Given a polymer section, identify whether the backbone includes functional links such as –COO– or –CONH–. Presence of these links usually indicates condensation polymerisation.",
          "If the backbone is mainly saturated C–C with side groups and no ester/amide-type linking groups, the polymer is likely formed by addition polymerisation from unsaturated monomer(s).",
          "Then reverse-engineer likely monomer(s): condensation polymers reconstruct functional-group monomers; addition polymers reconstruct C=C monomer fragments by reintroducing unsaturation at repeat-unit boundaries.",
        ],
      },
      {
        id: "borderline-cases-and-exam-language",
        title: "Handling borderline structures with precise exam language",
        paragraphs: [
          "Some monomers contain both C=C and other functional groups, so context matters. If polymerisation proceeds by C=C opening without elimination, classify as addition. If chain growth proceeds via functional-group reaction with elimination, classify as condensation.",
          "Use wording such as 'predicted condensation polymerisation because each repeating link forms an ester bond with elimination of water' rather than a bare one-word answer.",
          "When deducing from polymer fragments, state the observed structural evidence first, then the type. This ordering makes your conclusion logically transparent and easier for an examiner to credit.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Prediction questions are often straightforward if you apply a fixed decision sequence. Most lost marks come from identifying one clue but ignoring a contradictory one, such as a C=C bond plus clear condensation-link evidence.",
      items: [
        "Classifying any polymer from organic monomers as addition polymerisation without checking for eliminated small molecules.",
        "Using the word 'condensation' just because two monomers are present, even when chain growth is by C=C addition.",
        "Ignoring bifunctionality and predicting long-chain polymer formation from monofunctional monomers.",
        "Deducing type from polymer fragment without checking for ester or amide links in the backbone.",
        "Giving one-word answers without structural justification, so reasoning marks are lost.",
      ],
    },
    workedExamples: [
      {
        id: "t35-2-ex1",
        title: "Predicting type from monomer structure",
        problem: [
          "For each monomer set, predict polymerisation type and justify briefly: (a) CH₂=CHCl, (b) HO–(CH₂)₄–OH with HOOC–(CH₂)₂–COOH, (c) H₂N–CH₂–COOH.",
        ],
        solution: [
          "(a) CH₂=CHCl undergoes addition polymerisation because chain growth occurs by opening the C=C bond and no small molecule is eliminated.",
          "(b) The diol with dicarboxylic acid undergoes condensation polymerisation, forming ester links with elimination of H₂O at each link-forming step.",
          "(c) H₂N–CH₂–COOH can self-condense, so it undergoes condensation polymerisation to form amide links with elimination of H₂O.",
          "Each prediction is based on functional-group pattern plus elimination behavior.",
        ],
      },
      {
        id: "t35-2-ex2",
        title: "Deducing type from a polymer segment",
        problem: [
          "A polymer fragment is shown as –CH₂–CH(CH₃)–CH₂–CH(CH₃)– repeating. Deduce the polymerisation type and suggest the monomer.",
        ],
        solution: [
          "The backbone is saturated C–C with no ester or amide linking groups, indicating addition polymerisation.",
          "Reintroducing a C=C across one repeat boundary gives monomer CH₂=CHCH₃ (propene).",
          "So the polymer is formed by addition polymerisation of propene.",
          "The absence of small-molecule-elimination linkage confirms the classification.",
        ],
      },
      {
        id: "t35-2-ex3",
        title: "Resolving a mixed-feature monomer pair",
        problem: [
          "A student sees a monomer containing C=C and –COOH and assumes addition polymerisation must occur. Explain why this conclusion is incomplete and what extra evidence is needed.",
        ],
        solution: [
          "A C=C bond alone suggests possible addition polymerisation, but –COOH allows possible condensation pathways if paired with an appropriate complementary functional group.",
          "You must determine which bond actually forms the polymer link under stated reagents and conditions: C=C opening (addition) or functional-group coupling with elimination (condensation).",
          "Evidence from polymer structure is decisive: C–C saturated backbone favors addition, while ester/amide links favor condensation.",
          "Therefore the correct type depends on reaction route evidence, not one isolated structural feature.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t35-2-st1",
        question:
          "Give two structural indicators that support addition polymerisation and two that support condensation polymerisation.",
        modelAnswer: [
          "Addition indicators: monomer C=C bonds used for chain growth; polymer backbone mainly C–C single bonds without ester/amide linking groups or small-molecule elimination.",
          "Condensation indicators: monomer(s) with complementary bifunctional groups such as –OH/–COOH or –NH₂/–COOH; chain contains ester or amide links formed with elimination of H₂O or HCl.",
        ],
      },
      {
        id: "t35-2-st2",
        question:
          "Why can two monomers still give addition polymerisation rather than condensation polymerisation?",
        modelAnswer: [
          "The number of monomers is not the deciding factor. If chain growth occurs by C=C opening with no elimination of a small molecule, the process is addition polymerisation even for two monomer types (copolymerisation).",
        ],
      },
      {
        id: "t35-2-st3",
        question:
          "A polymer contains repeated –COO– links in the backbone. What type of polymerisation produced it, and what broad monomer pattern is expected?",
        modelAnswer: [
          "It is produced by condensation polymerisation.",
          "Expected monomer pattern is either two bifunctional monomers such as diol + dicarboxylic derivative, or one hydroxycarboxylic-acid monomer that self-condenses.",
        ],
      },
      {
        id: "t35-2-st4",
        question:
          "A monomer has formula CH₂=CH–CH₂OH. Does the formula alone force one polymerisation type? Explain.",
        modelAnswer: [
          "No. The monomer contains both a C=C bond and an –OH group, so the type depends on which functional feature is used for chain growth under given conditions.",
          "You need reaction conditions or polymer-structure evidence to decide between addition and possible condensation routes.",
        ],
      },
      {
        id: "t35-2-st5",
        question:
          "Describe a three-step method for deducing polymerisation type from a displayed polymer fragment.",
        modelAnswer: [
          "Step 1: inspect the backbone for characteristic links such as ester (–COO–) or amide (–CONH–).",
          "Step 2: if such links are present, infer condensation; if backbone is mainly saturated C–C, infer addition.",
          "Step 3: reconstruct plausible monomer(s) and check whether link formation requires elimination of H₂O/HCl or simple C=C opening.",
        ],
      },
    ],
  },

  "t35-3": {
    noteId: "t35-3",
    syllabusNotes: [
      {
        id: "polyalkene-inertness-and-disposal-problem",
        title: "Why many poly(alkenes) are difficult to biodegrade",
        paragraphs: [
          "Many poly(alkenes) have strong C–C and C–H bonds in a non-polar, chemically unreactive backbone. This makes them resistant to attack by water, enzymes, and common environmental chemical agents.",
          "Because biodegradation relies on microorganisms and enzymes breaking susceptible bonds, chemically inert poly(alkenes) usually persist for long periods in landfill and natural environments.",
          "This persistence creates disposal challenges. Mechanical recycling can help but is limited by sorting, contamination, and polymer quality loss after repeated processing.",
        ],
      },
      {
        id: "photodegradation-mechanism-overview",
        title: "Degradation by light: what photodegradable means",
        paragraphs: [
          "Some polymers are designed or modified so that light, especially ultraviolet radiation, initiates bond-breaking reactions in the chain. This is photodegradation.",
          "Photodegradation often begins with radical formation at vulnerable sites, followed by chain scission that lowers polymer molecular mass and weakens mechanical properties.",
          "Light-driven degradation may fragment plastics into smaller pieces, but this is not the same as full mineralisation to CO₂, H₂O, and inorganic ions. Fragmentation can still leave persistent microplastic material.",
        ],
      },
      {
        id: "hydrolysable-links-in-polyesters-polyamides",
        title: "Why polyesters and polyamides can be biodegradable",
        paragraphs: [
          "Polyesters contain ester links and polyamides contain amide links. These bonds are susceptible to hydrolysis, unlike the mostly inert C–C backbone in many addition polymers.",
          "Under acidic or alkaline conditions, hydrolysis cleaves these links and breaks long chains into shorter fragments or monomer-derived products.",
          "Because chain cleavage reduces molecular mass and introduces smaller, more mobile products, environmental and biological breakdown can proceed more readily for hydrolysable polymers.",
        ],
      },
      {
        id: "acidic-and-alkaline-hydrolysis-details",
        title: "Acidic and alkaline hydrolysis of condensation polymers",
        paragraphs: [
          "Acid hydrolysis of polyesters and polyamides uses H⁺-catalysed cleavage of ester or amide links, ultimately giving carboxylic-acid-containing products and alcohol or amine-containing products.",
          "Alkaline hydrolysis uses OH⁻ as the reacting species. For polyesters, products include carboxylate salts and alcohols; for polyamides, products include carboxylate salts and amines.",
          "In exam explanations, the key idea is link susceptibility: hydrolysable functional links permit degradation pathways not available to inert poly(alkenes).",
        ],
      },
      {
        id: "evaluating-degradable-polymer-claims",
        title: "Evaluating claims about degradable polymers",
        paragraphs: [
          "A polymer described as degradable may be photodegradable, hydrolysable, biodegradable, or a combination. These terms are related but not identical.",
          "Photodegradable materials rely on light exposure; hydrolysable materials rely on chemical cleavage by water under suitable pH conditions; biodegradable materials can be metabolised by microorganisms, often after abiotic chain weakening.",
          "When comparing waste strategies, judge both chemistry and conditions. A polymer may degrade in industrial composting or controlled hydrolysis but remain persistent in cool, dark landfill conditions.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Degradable-polymer questions often test subtle distinctions between inertness, photodegradation, hydrolysis, and full biodegradation. Marks are lost when candidates treat all 'degradable' labels as chemically identical.",
      items: [
        "Stating that all polymers biodegrade easily, ignoring inert C–C backbones in many poly(alkenes).",
        "Confusing photodegradation (light-driven chain scission) with complete biodegradation by microorganisms.",
        "Claiming polyesters and polyamides are inert to hydrolysis despite containing hydrolysable ester or amide links.",
        "Describing alkaline hydrolysis products as carboxylic acids rather than carboxylate salts.",
        "Assuming a polymer labelled degradable will necessarily degrade rapidly in every disposal environment.",
      ],
    },
    workedExamples: [
      {
        id: "t35-3-ex1",
        title: "Comparing disposal behavior of two polymer classes",
        problem: [
          "Compare expected biodegradation behavior of a poly(alkene) and a polyester, and explain the structural reason for the difference.",
        ],
        solution: [
          "A typical poly(alkene) has a largely non-polar C–C/C–H backbone that is chemically inert, so biodegradation is usually slow and difficult.",
          "A polyester contains ester links in the backbone, and these links can be hydrolysed under acidic or alkaline conditions, causing chain cleavage.",
          "Because hydrolysis creates smaller fragments and functionalised products, polyesters are generally more susceptible to environmental breakdown pathways than inert poly(alkenes).",
          "So the key distinction is the presence or absence of hydrolysable functional links in the chain backbone.",
        ],
      },
      {
        id: "t35-3-ex2",
        title: "Interpreting a photodegradable-plastic claim",
        problem: [
          "A manufacturer states: 'Our packaging is photodegradable, so it disappears harmlessly in all environments.' Evaluate this claim chemically.",
        ],
        solution: [
          "Photodegradable means light can initiate chain scission, usually under UV exposure, reducing molecular mass and material strength.",
          "This does not guarantee complete mineralisation or harmless disappearance in all conditions.",
          "In low-light environments such as buried landfill, photodegradation may be very limited.",
          "Even in sunlight, degradation may produce smaller plastic fragments unless further biological or chemical breakdown occurs.",
          "So the claim is overgeneralised and should be qualified by environmental conditions and extent of breakdown.",
        ],
      },
      {
        id: "t35-3-ex3",
        title: "Predicting hydrolysis products class for a polyamide",
        problem: [
          "A polyamide is heated with aqueous sodium hydroxide. State the product classes expected after extensive chain hydrolysis.",
        ],
        solution: [
          "Alkaline hydrolysis cleaves amide links in the polymer backbone.",
          "The carboxyl-derived part forms carboxylate salt groups under alkaline conditions.",
          "The nitrogen-containing part forms amine-containing products.",
          "Therefore expected product classes are carboxylate salts and amines, with long chains converted into shorter fragments or monomer-derived species.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t35-3-st1",
        question:
          "Why are many poly(alkenes) difficult to biodegrade? Give a bond-level explanation.",
        modelAnswer: [
          "Their backbones are dominated by strong, relatively non-polar C–C and C–H bonds, which are chemically inert toward many biological and environmental attack pathways.",
          "Because microorganisms and enzymes cannot easily cleave these bonds, biodegradation is typically slow.",
        ],
      },
      {
        id: "t35-3-st2",
        question:
          "State what is meant by photodegradation of a polymer and one limitation of relying on it for waste management.",
        modelAnswer: [
          "Photodegradation is light-initiated polymer breakdown, often via radical processes that cause chain scission.",
          "A limitation is that it depends on sufficient light exposure and may produce fragments rather than complete biodegradation.",
        ],
      },
      {
        id: "t35-3-st3",
        question:
          "Explain why polyesters and polyamides are generally more degradable than many addition polymers.",
        modelAnswer: [
          "Polyesters and polyamides contain hydrolysable ester or amide links in their backbones, which can be cleaved under acidic or alkaline conditions.",
          "Many addition polymers lack these susceptible links and are therefore chemically more inert.",
        ],
      },
      {
        id: "t35-3-st4",
        question:
          "Give the broad product classes from alkaline hydrolysis of (a) a polyester and (b) a polyamide.",
        modelAnswer: [
          "(a) Polyester hydrolysis in alkali gives carboxylate salts and alcohol-containing products.",
          "(b) Polyamide hydrolysis in alkali gives carboxylate salts and amine-containing products.",
        ],
      },
      {
        id: "t35-3-st5",
        question:
          "A question states that a polymer is 'degradable'. List two follow-up details you should ask for before concluding it is environmentally benign.",
        modelAnswer: [
          "Ask what degradation mechanism is meant (photodegradation, hydrolysis, biodegradation, or a combination).",
          "Ask under what conditions degradation occurs (for example UV exposure, pH, temperature, moisture, microbial activity) and whether breakdown is complete or only fragmenting.",
        ],
      },
    ],
  },
};
