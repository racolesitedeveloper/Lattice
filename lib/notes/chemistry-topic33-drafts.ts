import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 33 — subtopics 33.1-33.3 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC33_DRAFTS: Record<string, NoteDraft> = {
  "t33-1": {
    noteId: "t33-1",
    syllabusNotes: [
      {
        id: "benzoic-acid-from-alkylbenzene-oxidation",
        title: "Producing benzoic acid from alkylbenzenes",
        paragraphs: [
          "A key A Level route to aromatic carboxylic acids is oxidation of an alkylbenzene side-chain using hot alkaline KMnO₄, followed by acidification. The required example is methylbenzene to benzoic acid.",
          "The carbon directly attached to the benzene ring is oxidised fully to a carboxyl group, regardless of whether the side-chain is one carbon or longer, provided there is at least one benzylic hydrogen. The aromatic ring remains intact under these syllabus conditions.",
          "This transforms an alkyl substituent (electron-donating, weakly activating) into a carboxyl substituent (electron-withdrawing, deactivating and 3-directing), so oxidation can strongly change subsequent ring reactivity as well as functional group class.",
        ],
      },
      {
        id: "converting-carboxylic-acids-to-acyl-chlorides",
        title: "Carboxylic acids to acyl chlorides: reagents and rationale",
        paragraphs: [
          "Carboxylic acids react with PCl₃ (with heat), PCl₅ or SOCl₂ to form acyl chlorides. These reagents replace the -OH part of the acid group with Cl, converting a relatively less reactive acyl derivative into a much more reactive one.",
          "Acyl chlorides are then used for rapid acylation reactions with water, alcohols, phenols, ammonia and amines at room temperature. So this conversion is often a strategic activation step in synthesis.",
          "In exam equations, ensure functional-group accuracy: carboxylic acid RCOOH becomes acyl chloride RCOCl. Do not confuse this with substitution at an aromatic ring or with halogenoalkane chemistry.",
        ],
      },
      {
        id: "further-oxidation-of-special-carboxylic-acids",
        title: "Further oxidation of methanoic and ethanedioic acids",
        paragraphs: [
          "Most carboxylic acids are resistant to oxidation under routine conditions, but methanoic acid and ethanedioic acid are important exceptions in this syllabus.",
          "Methanoic acid, HCOOH, can be oxidised to CO₂ and H₂O by Fehling’s reagent, Tollens’ reagent, acidified KMnO₄ or acidified K₂Cr₂O₇. This behaviour reflects that methanoic acid still has a hydrogen attached to the carboxyl carbon, making further oxidation feasible.",
          "Ethanedioic acid, HOOCCOOH, is also readily oxidised (for example by warm acidified KMnO₄) to CO₂. Recognising these exceptions prevents over-generalising the statement that carboxylic acids do not oxidise further.",
        ],
      },
      {
        id: "relative-acidity-alcohol-phenol-carboxylic-acid",
        title: "Comparing acid strength: alcohols, phenols and carboxylic acids",
        paragraphs: [
          "Relative acidity follows: carboxylic acids > phenols > alcohols. The key explanation is stability of the conjugate base formed after H⁺ loss.",
          "Carboxylate ions are strongly stabilised because negative charge is delocalised over two oxygen atoms by resonance. Phenoxide ions are also resonance-stabilised, but delocalisation places charge partly into less electronegative ring carbons, so stabilisation is weaker than in carboxylates.",
          "Alkoxide ions from alcohols have no comparable resonance delocalisation; charge is mainly localised on one oxygen. Their conjugate bases are less stabilised, so alcohols are the weakest acids of the three.",
        ],
      },
      {
        id: "effect-of-chlorine-substitution-on-acidity",
        title: "Why chlorine-substituted carboxylic acids are stronger acids",
        paragraphs: [
          "Chlorine is strongly electron-withdrawing by the inductive effect (-I). In chlorinated carboxylic acids, this effect pulls electron density away from the carboxyl group and stabilises the negative charge on the carboxylate conjugate base.",
          "Greater stabilisation of the conjugate base means easier proton loss, so acidity increases. Therefore chloroethanoic acid is stronger than ethanoic acid, dichloroethanoic acid is stronger still, and trichloroethanoic acid is stronger again.",
          "The effect is stronger when chlorine atoms are closer to the -COOH group and when more chlorine atoms are present. This is a standard structure-acidity trend at A Level.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "This subtopic mixes synthetic recall with acid-strength explanation. Examiners usually award marks for precise reagent conditions and for conjugate-base stability reasoning rather than memorised order alone.",
      items: [
        "Writing benzoic acid formation from methylbenzene without hot alkaline KMnO₄ and the final acidification step.",
        "Confusing conversion of RCOOH to RCOCl with aromatic ring chlorination conditions.",
        "Stating that all carboxylic acids resist oxidation, ignoring methanoic acid and ethanedioic acid exceptions.",
        "Giving acidity order correctly but not explaining it using relative conjugate-base stabilisation.",
        "Describing chlorine substitution as donating electrons; the chlorine substituent increases acidity by an electron-withdrawing inductive effect.",
      ],
    },
    workedExamples: [
      {
        id: "t33-1-ex1",
        title: "Oxidising methylbenzene to benzoic acid",
        problem: [
          "Outline reagents and conditions for converting methylbenzene into benzoic acid, and explain what happens to the side-chain carbon attached to the ring.",
        ],
        solution: [
          "Heat methylbenzene with alkaline KMnO₄, then acidify the reaction mixture with dilute acid.",
          "The benzylic side-chain carbon is oxidised fully to the carboxyl carbon of -COOH, so the product is benzoic acid.",
          "The aromatic ring remains intact in this transformation, while the alkyl side-chain is the part oxidised.",
        ],
      },
      {
        id: "t33-1-ex2",
        title: "Explaining acidity order with conjugate bases",
        problem: [
          "Explain why carboxylic acids are stronger acids than phenols, and phenols are stronger acids than alcohols.",
        ],
        solution: [
          "Acid strength increases as conjugate-base stability increases. Carboxylate ions are most stable because negative charge is delocalised over two oxygen atoms.",
          "Phenoxide ions are less stabilised: charge delocalises into the aromatic ring as well as on oxygen, so stabilisation is weaker than in carboxylates.",
          "Alkoxide ions from alcohols have no resonance delocalisation comparable to the other two, so they are least stabilised and alcohols are least acidic.",
        ],
      },
      {
        id: "t33-1-ex3",
        title: "Trend in chlorine-substituted carboxylic acids",
        problem: [
          "Put ethanoic acid, chloroethanoic acid and trichloroethanoic acid in increasing acid strength, and justify your order.",
        ],
        solution: [
          "Increasing acid strength: ethanoic acid < chloroethanoic acid < trichloroethanoic acid.",
          "Chlorine atoms withdraw electron density by the inductive effect, stabilising the carboxylate anion formed after deprotonation.",
          "More chlorine substituents produce stronger electron withdrawal and greater conjugate-base stabilisation, so proton loss becomes easier.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t33-1-st1",
        question:
          "State reagents and conditions for preparing benzoic acid from methylbenzene.",
        modelAnswer: [
          "Use hot alkaline KMnO₄ to oxidise the side-chain, then acidify with dilute acid to obtain benzoic acid.",
        ],
      },
      {
        id: "t33-1-st2",
        question:
          "How can a carboxylic acid be converted into an acyl chloride? Give the three syllabus reagents.",
        modelAnswer: [
          "React the carboxylic acid with PCl₃ and heat, or with PCl₅, or with SOCl₂ to form the corresponding acyl chloride.",
        ],
      },
      {
        id: "t33-1-st3",
        question:
          "Which two carboxylic acids in this topic can be further oxidised readily, and what is the common oxidation product?",
        modelAnswer: [
          "Methanoic acid and ethanedioic acid are readily oxidised further.",
          "Both give carbon dioxide (with water also formed where hydrogen is present).",
        ],
      },
      {
        id: "t33-1-st4",
        question:
          "Explain the acidity order carboxylic acids > phenols > alcohols in terms of conjugate-base stability.",
        modelAnswer: [
          "Carboxylate conjugate bases are most stabilised by resonance over two oxygen atoms, so carboxylic acids are strongest.",
          "Phenoxide ions are resonance-stabilised but less effectively, so phenols are intermediate.",
          "Alkoxide ions are least stabilised because charge is more localised, so alcohols are weakest acids.",
        ],
      },
      {
        id: "t33-1-st5",
        question:
          "Why does replacing hydrogens with chlorine in a carboxylic acid usually increase acid strength?",
        modelAnswer: [
          "Chlorine withdraws electron density by the inductive effect and stabilises the carboxylate anion.",
          "Greater conjugate-base stabilisation makes proton loss easier, so acidity increases.",
        ],
      },
    ],
  },

  "t33-2": {
    noteId: "t33-2",
    syllabusNotes: [
      {
        id: "ester-formation-from-acyl-chlorides-overview",
        title: "Making esters from acyl chlorides",
        paragraphs: [
          "A Level extension adds a high-reactivity ester route: acyl chlorides react with alcohols or phenols at room temperature to form esters and HCl.",
          "This is a condensation in overall outcome (two species combine with loss of a small molecule, HCl), but mechanistically it proceeds by nucleophilic addition-elimination at the acyl carbonyl carbon.",
          "Compared with Fischer esterification (carboxylic acid + alcohol, acid catalyst, reversible), acyl chloride routes are much faster and usually do not need a strong acid catalyst because the acyl chloride is intrinsically very reactive.",
        ],
      },
      {
        id: "required-examples-ethyl-ethanoate-phenyl-benzoate",
        title: "Required examples: ethyl ethanoate and phenyl benzoate",
        paragraphs: [
          "Ethyl ethanoate is formed when ethanoyl chloride reacts with ethanol: CH₃COCl + CH₃CH₂OH → CH₃COOCH₂CH₃ + HCl.",
          "Phenyl benzoate is formed when benzoyl chloride reacts with phenol: C₆H₅COCl + C₆H₅OH → C₆H₅COOC₆H₅ + HCl.",
          "These examples test both aliphatic and aromatic ester contexts. Product naming should reflect the alcohol/phenol-derived part first (alkyl or aryl) and the acyl-derived part second (-oate).",
        ],
      },
      {
        id: "mechanistic-basis-addition-elimination",
        title: "Why the reaction is fast: nucleophilic addition-elimination",
        paragraphs: [
          "The carbonyl carbon in an acyl chloride is strongly δ+ because of the polar C=O bond and the electron-withdrawing influence of chlorine. This makes nucleophilic attack by alcohol or phenol oxygen favorable.",
          "Nucleophilic attack gives a tetrahedral intermediate. Reformation of the C=O bond then expels Cl⁻ as a leaving group, producing the ester framework.",
          "Because chloride is a good leaving group, elimination is easy and reaction rate is high even at room temperature. This contrasts with less reactive acyl derivatives where leaving groups are poorer.",
        ],
      },
      {
        id: "handling-hcl-byproduct-and-practical-points",
        title: "HCl formation and practical implications",
        paragraphs: [
          "Hydrogen chloride is generated in each acyl chloride esterification, so fumes are often observed and reaction conditions must account for acidic byproduct formation.",
          "In synthetic practice, a base (or excess nucleophile) may be used to neutralise HCl and prevent protonation of nucleophiles. For syllabus purposes, the essential point is that ester plus HCl are formed at room temperature.",
          "When writing equations, include HCl explicitly. Omitting HCl is a common mark loss because atom balance and reaction type are then incomplete.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Questions on this note are usually short but precise. Marks are gained by correct reactant pairing and full equations, especially inclusion of HCl and correct ester naming.",
      items: [
        "Using carboxylic acid + alcohol conditions when asked specifically for ester formation from an acyl chloride.",
        "Omitting HCl as a byproduct in equations for acyl chloride reactions.",
        "Confusing phenyl esters with benzyl esters when naming aromatic products.",
        "Writing conditions requiring heating/reflux as default, despite syllabus emphasis on room-temperature reactivity.",
        "Classifying the process as simple substitution without acknowledging nucleophilic addition-elimination at the carbonyl.",
      ],
    },
    workedExamples: [
      {
        id: "t33-2-ex1",
        title: "Forming ethyl ethanoate from an acyl chloride",
        problem: [
          "Write the equation for producing ethyl ethanoate from an acyl chloride route, and state the byproduct.",
        ],
        solution: [
          "Use ethanoyl chloride with ethanol: CH₃COCl + CH₃CH₂OH → CH₃COOCH₂CH₃ + HCl.",
          "The organic product is ethyl ethanoate, and the inorganic byproduct is hydrogen chloride.",
          "This reaction occurs readily at room temperature because the acyl chloride is highly reactive.",
        ],
      },
      {
        id: "t33-2-ex2",
        title: "Forming phenyl benzoate and naming correctly",
        problem: [
          "Benzoyl chloride reacts with phenol. Give the structural formula of the ester and its name.",
        ],
        solution: [
          "The ester formed is C₆H₅COOC₆H₅.",
          "Its name is phenyl benzoate: 'phenyl' comes from the phenol-derived oxygen substituent and 'benzoate' from the benzoyl (benzoic acid) part.",
          "Hydrogen chloride is also formed: C₆H₅COCl + C₆H₅OH → C₆H₅COOC₆H₅ + HCl.",
        ],
      },
      {
        id: "t33-2-ex3",
        title: "Mechanism explanation in words",
        problem: [
          "Explain briefly why acyl chlorides react with alcohols faster than carboxylic acids do under similar temperature conditions.",
        ],
        solution: [
          "Acyl chlorides have a strongly electrophilic carbonyl carbon and chloride is an excellent leaving group, so nucleophilic addition followed by elimination is rapid.",
          "Carboxylic acids are less electrophilic and do not have chloride as a leaving group, so direct esterification with alcohols is slower and usually needs acid catalysis and heating.",
          "Therefore acyl chloride routes form esters readily at room temperature.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t33-2-st1",
        question:
          "State the reaction type and products when an acyl chloride reacts with an alcohol at room temperature.",
        modelAnswer: [
          "The reaction is nucleophilic addition-elimination at the acyl carbonyl.",
          "Products are an ester and hydrogen chloride.",
        ],
      },
      {
        id: "t33-2-st2",
        question:
          "Write the equation for ethanoyl chloride reacting with ethanol.",
        modelAnswer: [
          "CH₃COCl + CH₃CH₂OH → CH₃COOCH₂CH₃ + HCl.",
        ],
      },
      {
        id: "t33-2-st3",
        question:
          "Write the equation for benzoyl chloride reacting with phenol.",
        modelAnswer: [
          "C₆H₅COCl + C₆H₅OH → C₆H₅COOC₆H₅ + HCl.",
        ],
      },
      {
        id: "t33-2-st4",
        question:
          "Why is HCl almost always included explicitly in equations for ester formation from acyl chlorides?",
        modelAnswer: [
          "Hydrogen chloride is a true stoichiometric byproduct formed when the acyl chloride chlorine leaves and the nucleophile proton is released.",
          "Including HCl ensures correct atom balance and accurate reaction description.",
        ],
      },
      {
        id: "t33-2-st5",
        question:
          "Give one mechanistic reason acyl chlorides form esters rapidly at room temperature.",
        modelAnswer: [
          "Chloride is a very good leaving group after nucleophilic attack, so addition-elimination proceeds quickly.",
        ],
      },
    ],
  },

  "t33-3": {
    noteId: "t33-3",
    syllabusNotes: [
      {
        id: "preparing-acyl-chlorides",
        title: "Preparation of acyl chlorides from carboxylic acids",
        paragraphs: [
          "Acyl chlorides are prepared by reacting carboxylic acids with PCl₃ (and heat), PCl₅ or SOCl₂. This replaces the hydroxyl part of the carboxyl group with chlorine to give RCOCl.",
          "These methods are important because acyl chlorides are versatile intermediates for forming esters and amides rapidly under mild conditions.",
          "When recalling preparations, give reagent and condition exactly. PCl₃ requires heating in the syllabus wording; PCl₅ and SOCl₂ are used as chlorinating reagents for the same functional conversion.",
        ],
      },
      {
        id: "core-reactions-of-acyl-chlorides",
        title: "Hydrolysis, esterification and amide formation at room temperature",
        paragraphs: [
          "Acyl chlorides hydrolyse rapidly with water at room temperature to give a carboxylic acid and HCl. This is why moist air can cause visible acidic fumes near acyl chlorides.",
          "With alcohols or phenols, acyl chlorides form esters and HCl at room temperature. With ammonia, they form primary amides; with primary or secondary amines, they form N-substituted amides. All proceed by the same acyl substitution logic.",
          "Because HCl is produced, an additional equivalent of ammonia or amine often neutralises acid in practice. For exam equations, ensure both the organic acyl product and HCl are represented unless specific neutralisation products are required.",
        ],
      },
      {
        id: "addition-elimination-mechanism-acyl-chlorides",
        title: "Addition-elimination mechanism across all acyl chloride reactions",
        paragraphs: [
          "All required acyl chloride reactions in this topic share one mechanism family: nucleophile attacks the carbonyl carbon (addition), then the tetrahedral intermediate collapses to reform C=O and expel Cl⁻ (elimination).",
          "Proton-transfer steps then give the neutral carboxylic acid, ester or amide product and HCl (or ammonium/amine salt under some conditions).",
          "A strong answer identifies electron flow and intermediate type, not just reagent-product pairs. The mechanism is called addition-elimination because both stages are essential.",
        ],
      },
      {
        id: "comparing-hydrolysis-ease-acyl-alkyl-aryl-chlorides",
        title: "Why acyl chlorides hydrolyse more easily than alkyl and aryl chlorides",
        paragraphs: [
          "Hydrolysis ease trend is: acyl chlorides (very fast) >> alkyl chlorides (variable, generally slower) > halogenoarenes/aryl chlorides (very difficult under mild conditions).",
          "Acyl chlorides are highly reactive because the carbonyl strongly polarises the acyl carbon and chloride is a good leaving group in addition-elimination. Water can attack readily at room temperature.",
          "Alkyl chlorides hydrolyse by nucleophilic substitution at saturated carbon, where reactivity depends on structure and mechanism (Sₙ1/Sₙ2 context). They are not activated by an adjacent carbonyl.",
          "Aryl chlorides resist hydrolysis because the C-Cl bond has partial double-bond character from interaction with the aromatic system and because nucleophilic substitution at an sp² aryl carbon is difficult under mild conditions.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Acyl chloride questions are usually mechanism-rich and comparison-heavy. Examiners look for both correct product sets and a defensible reason for relative hydrolysis trends.",
      items: [
        "Forgetting that acyl chloride reactions in this topic are specified at room temperature.",
        "Writing hydrolysis of acyl chlorides without HCl as byproduct.",
        "Calling reaction with ammonia an amine product instead of an amide product.",
        "Describing acyl chloride reactions as direct substitution with no tetrahedral intermediate.",
        "Claiming halogenoarenes hydrolyse more easily than alkyl chlorides; in this syllabus comparison they are least reactive.",
      ],
    },
    workedExamples: [
      {
        id: "t33-3-ex1",
        title: "Preparation and hydrolysis sequence",
        problem: [
          "A student wants to convert ethanoic acid into ethanamide via an acyl chloride intermediate. Outline the two steps with suitable reagents.",
        ],
        solution: [
          "Step 1: convert ethanoic acid to ethanoyl chloride using PCl₅ (or SOCl₂, or PCl₃ with heat).",
          "Step 2: react ethanoyl chloride with NH₃ at room temperature to form ethanamide; HCl is also formed (and may be neutralised by excess NH₃).",
          "This route uses the high reactivity of the acyl chloride to make amide formation rapid under mild conditions.",
        ],
      },
      {
        id: "t33-3-ex2",
        title: "Product prediction across five nucleophiles",
        problem: [
          "State the organic product class when benzoyl chloride reacts separately with (i) water, (ii) ethanol, (iii) phenol, (iv) ammonia, (v) methylamine.",
        ],
        solution: [
          "(i) Water gives a carboxylic acid (benzoic acid).",
          "(ii) Ethanol gives an ester (ethyl benzoate).",
          "(iii) Phenol gives an ester (phenyl benzoate).",
          "(iv) Ammonia gives a primary amide (benzamide).",
          "(v) Methylamine gives an N-substituted amide (N-methylbenzamide).",
          "Each reaction also generates HCl as byproduct.",
        ],
      },
      {
        id: "t33-3-ex3",
        title: "Explaining relative hydrolysis ease",
        problem: [
          "Explain why ethanoyl chloride hydrolyses rapidly in water at room temperature, while chlorobenzene does not hydrolyse appreciably under similar conditions.",
        ],
        solution: [
          "In ethanoyl chloride, the acyl carbon is highly electrophilic due to the adjacent C=O, and chloride is a good leaving group in an addition-elimination pathway, so water attacks readily.",
          "In chlorobenzene, the C-Cl bond is strengthened by interaction with the aromatic ring (partial double-bond character), and nucleophilic substitution at the sp² aryl carbon is difficult.",
          "Therefore acyl chlorides hydrolyse rapidly under mild conditions, whereas aryl chlorides are far less reactive toward hydrolysis.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t33-3-st1",
        question:
          "Give three reagent options for converting RCOOH to RCOCl, including any condition required by syllabus wording.",
        modelAnswer: [
          "Use PCl₃ with heat, or PCl₅, or SOCl₂ to convert a carboxylic acid to the corresponding acyl chloride.",
        ],
      },
      {
        id: "t33-3-st2",
        question:
          "State products when an acyl chloride reacts with (a) water and (b) a primary amine at room temperature.",
        modelAnswer: [
          "(a) With water: carboxylic acid + HCl.",
          "(b) With a primary amine: N-substituted amide + HCl (often with further acid-base neutralisation in mixture).",
        ],
      },
      {
        id: "t33-3-st3",
        question:
          "Name the mechanism family for acyl chloride reactions with water, alcohols, phenols, ammonia and amines, and state the two stages.",
        modelAnswer: [
          "Mechanism family: nucleophilic addition-elimination.",
          "Stage 1: nucleophilic addition to the carbonyl carbon to form a tetrahedral intermediate.",
          "Stage 2: elimination of Cl⁻ as C=O reforms, followed by proton transfer.",
        ],
      },
      {
        id: "t33-3-st4",
        question:
          "Compare ease of hydrolysis for acyl chlorides, alkyl chlorides and aryl chlorides under mild conditions.",
        modelAnswer: [
          "Acyl chlorides hydrolyse most easily (very rapid at room temperature), alkyl chlorides are less reactive and variable, and aryl chlorides are least reactive toward hydrolysis under mild conditions.",
        ],
      },
      {
        id: "t33-3-st5",
        question:
          "Why does the reaction of an acyl chloride with an alcohol usually proceed faster than hydrolysis of a halogenoalkane?",
        modelAnswer: [
          "Acyl chloride carbonyl carbon is strongly electrophilic and chloride leaves readily in addition-elimination, so acyl substitution is very fast.",
          "Halogenoalkane hydrolysis requires nucleophilic substitution at saturated carbon without carbonyl activation, so it is usually slower.",
        ],
      },
    ],
  },
};
