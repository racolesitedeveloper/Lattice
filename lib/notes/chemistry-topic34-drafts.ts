import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 34 — subtopics 34.1-34.4 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC34_DRAFTS: Record<string, NoteDraft> = {
  "t34-1": {
    noteId: "t34-1",
    syllabusNotes: [
      {
        id: "preparation-of-primary-and-secondary-amines",
        title: "Preparing primary and secondary amines: required routes and conditions",
        paragraphs: [
          "Primary amines can be prepared from halogenoalkanes by reaction with ammonia in ethanol, heated in a sealed tube or under pressure. The ethanolic medium keeps both reactants in one phase, while pressure or a sealed system allows heating above ethanol's boiling point to increase reaction rate.",
          "Secondary amines are prepared by reacting a halogenoalkane with a primary amine in ethanol under similar heated sealed-tube or pressure conditions. This is a nucleophilic substitution route where the nitrogen nucleophile replaces halogen on the carbon chain.",
          "Two reduction routes are also required. Amides are reduced by LiAlH₄ to amines, and nitriles are reduced either by LiAlH₄ or by H₂/Ni. Nitrile reduction increases carbon-chain length relative to a halogenoalkane route because the nitrile carbon becomes part of the amine product chain.",
        ],
        bullets: [
          "Primary amine from halogenoalkane + NH₃: ethanolic conditions, heated under pressure or in sealed tube.",
          "Secondary amine from halogenoalkane + primary amine: ethanolic conditions, heated under pressure or in sealed tube.",
          "Amide to amine reduction: LiAlH₄.",
          "Nitrile to amine reduction: LiAlH₄ or H₂/Ni.",
        ],
      },
      {
        id: "condensation-with-acyl-chlorides",
        title: "Condensation of ammonia or amines with acyl chlorides",
        paragraphs: [
          "Acyl chlorides react rapidly at room temperature with ammonia or amines to form amides. This is a condensation process because two reactants combine and a small molecule, hydrogen chloride, is produced.",
          "With ammonia, the product is a primary amide. With a primary amine, the product is an N-substituted amide. In both cases the carbonyl group is retained and chloride leaves from the acyl chloride.",
          "Because HCl is produced, practical conditions often use excess ammonia or amine so that the base can neutralise acid formed. This helps prevent protonation of nucleophile and keeps the reaction proceeding to amide formation.",
        ],
      },
      {
        id: "basicity-of-aqueous-amines",
        title: "Why aqueous amines are basic",
        paragraphs: [
          "Amines act as Brønsted-Lowry bases in water because the lone pair on nitrogen can accept a proton. The base equilibrium can be represented as RNH₂ + H₂O ⇌ RNH₃⁺ + OH⁻, showing why pH rises above 7.",
          "Amines are weak bases, so the protonation equilibrium is partial rather than complete. The position of equilibrium depends on electron density at nitrogen and on how stable the protonated amine is in aqueous solution.",
          "Alkyl groups generally increase electron density on nitrogen by inductive effects, tending to strengthen basicity relative to ammonia. However, in water, solvation and steric effects also matter, so simple alkyl substitution trends should be discussed with care rather than as absolute rules for every amine.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "This subtopic mixes synthetic pathways with acid-base explanation. Examiners reward complete reagent-and-condition statements and penalise route confusion between substitution and reduction chemistry.",
      items: [
        "Giving NH₃(aq) conditions for halogenoalkane amination instead of ethanol with heating in a sealed tube or under pressure.",
        "Describing formation of secondary amines without stating that a primary amine is the nucleophile in the second substitution route.",
        "Forgetting that LiAlH₄ reduction is required for amides and is one valid route for nitriles.",
        "Omitting H₂/Ni as an alternative reduction route for nitriles to amines.",
        "Stating that amines are strong bases in water, rather than weak bases that partially protonate and generate OH⁻.",
      ],
    },
    workedExamples: [
      {
        id: "t34-1-ex1",
        title: "Selecting a route to a primary amine",
        problem: [
          "Give reagents and conditions to convert 1-bromopropane into propan-1-amine, and identify the mechanism family.",
        ],
        solution: [
          "Use ammonia in ethanol and heat in a sealed tube (or under pressure).",
          "The reaction is nucleophilic substitution: NH₃ acts as nucleophile and replaces Br on the alkyl chain.",
          "A full-condition answer must include ethanolic medium and heated sealed/pressure conditions, not just 'add ammonia'.",
        ],
      },
      {
        id: "t34-1-ex2",
        title: "Condensation with an acyl chloride",
        problem: [
          "Propanoyl chloride reacts with methylamine at room temperature. State the organic product and explain why excess methylamine is often used.",
        ],
        solution: [
          "The organic product is N-methylpropanamide.",
          "The reaction is condensation to an amide with HCl as by-product.",
          "Excess methylamine helps neutralise HCl formed, reducing protonation of nucleophile and driving amide formation more effectively.",
        ],
      },
      {
        id: "t34-1-ex3",
        title: "Comparing reduction routes to amines",
        problem: [
          "State two different reductions that produce amines and name one suitable reducing system for each.",
        ],
        solution: [
          "Amide reduction to amine: use LiAlH₄.",
          "Nitrile reduction to amine: use LiAlH₄ or catalytic hydrogenation with H₂/Ni.",
          "Both are reduction routes, but nitrile reduction is especially useful for introducing an extra carbon from the nitrile carbon into the final amine chain.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t34-1-st1",
        question:
          "How are primary amines prepared from halogenoalkanes in this syllabus? Include reagent and conditions.",
        modelAnswer: [
          "React the halogenoalkane with NH₃ in ethanol, heating in a sealed tube or under pressure.",
          "This is nucleophilic substitution where ammonia replaces the halogen.",
        ],
      },
      {
        id: "t34-1-st2",
        question:
          "How are secondary amines prepared from halogenoalkanes, and what nitrogen nucleophile is used?",
        modelAnswer: [
          "React the halogenoalkane with a primary amine in ethanol, heated in a sealed tube or under pressure.",
          "The primary amine provides the nucleophilic nitrogen.",
        ],
      },
      {
        id: "t34-1-st3",
        question:
          "Name the required reduction routes from (a) amides and (b) nitriles to amines.",
        modelAnswer: [
          "Step 1: nucleophilic addition of CN⁻ to the carbonyl carbon of ethanal.",
          "Step 2: protonation of the alkoxide intermediate gives 2-hydroxypropanenitrile (product of HCN addition).",
        ],
      },
      {
        id: "t34-1-st4",
        question:
          "Describe the condensation reaction of ammonia with an acyl chloride at room temperature.",
        modelAnswer: [
          "LiAlH₄ reduces the nitrile to a primary amine: 2-hydroxypropanenitrile → 2-hydroxypropylamine (after aqueous work-up).",
          "State that LiAlH₄ is used in dry ether and water is added only after the reduction step.",
        ],
      },
      {
        id: "t34-1-st5",
        question: "Why are aqueous amine solutions basic?",
        modelAnswer: [
          "The nitrogen lone pair accepts a proton from water, forming an ammonium ion and OH⁻.",
          "Because OH⁻ is produced, the solution is alkaline; amines behave as weak Brønsted-Lowry bases in water.",
        ],
      },
    ],
  },

  "t34-2": {
    noteId: "t34-2",
    syllabusNotes: [
      {
        id: "preparing-phenylamine-from-benzene",
        title: "Preparation of phenylamine from benzene",
        paragraphs: [
          "Phenylamine is prepared in two stages from benzene. First, benzene is nitrated to nitrobenzene using concentrated HNO₃ and concentrated H₂SO₄ under controlled warming. Second, nitrobenzene is reduced using hot tin and concentrated HCl to give an anilinium salt, then treated with NaOH(aq) to liberate free phenylamine.",
          "The post-reduction NaOH step is essential because reduction in acidic medium gives the protonated amine. Without basification, the product remains as the ammonium salt rather than free amine.",
          "This sequence links aromatic electrophilic substitution (nitration) with reduction chemistry and acid-base workup.",
        ],
      },
      {
        id: "reactions-of-phenylamine",
        title: "Key reactions of phenylamine: bromination and diazotisation pathways",
        paragraphs: [
          "Phenylamine reacts readily with Br₂(aq) at room temperature because the -NH₂ group strongly activates the aromatic ring. The typical observation is rapid decolourisation of bromine water and formation of a white precipitate of 2,4,6-tribromophenylamine.",
          "Phenylamine also reacts with nitrous acid generated from NaNO₂ and dilute acid below 10 °C to form benzenediazonium chloride. Low temperature is required because diazonium salts are unstable at higher temperatures.",
          "If the cold diazonium salt solution is warmed with water, phenol is formed. This conversion is a standard transformation route from phenylamine to phenol through the diazonium intermediate.",
        ],
      },
      {
        id: "relative-basicity-ammonia-ethylamine-phenylamine",
        title: "Explaining basicity order: ammonia, ethylamine, phenylamine",
        paragraphs: [
          "In aqueous solution, ethylamine is more basic than ammonia because the ethyl group donates electron density to nitrogen by an inductive effect, making proton acceptance more favorable.",
          "Phenylamine is less basic than ammonia because the nitrogen lone pair is partially delocalised into the aromatic ring. This reduces lone-pair availability for protonation and therefore lowers basicity.",
          "A useful comparative order is: ethylamine > ammonia > phenylamine. Explanations must include electron donation for alkyl amines and lone-pair delocalisation for phenylamine.",
        ],
      },
      {
        id: "azo-coupling-and-dyes",
        title: "Azo compounds: coupling, structure, and dye use",
        paragraphs: [
          "Azo compounds contain the azo group -N=N- linking two carbon frameworks, often aromatic rings. They are commonly formed by coupling a diazonium salt with an activated aromatic compound such as phenol in alkaline solution.",
          "A required example is coupling of benzenediazonium chloride with phenol in NaOH(aq), giving an intensely coloured azo product. Mildly alkaline conditions keep phenol in its more nucleophilic phenoxide form, which couples readily with the diazonium electrophile.",
          "Azo compounds are often used as dyes because extended conjugation across aromatic systems and the azo linkage leads to strong absorption in the visible region. Other azo dyes can be made by similar diazonium-coupling routes with different aromatic partners.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Questions here combine synthesis, conditions, and qualitative reactivity. Marks are frequently lost through missing temperature control for diazotisation or weak explanations of relative basicity.",
      items: [
        "Omitting the NaOH(aq) step after Sn/HCl reduction of nitrobenzene, leaving phenylamine in protonated salt form.",
        "Stating diazonium salt formation without keeping temperature below 10 °C.",
        "Confusing bromination of phenylamine with benzene conditions and adding unnecessary Lewis-acid catalyst.",
        "Giving the wrong basicity trend by treating phenylamine as more basic than ammonia.",
        "Describing azo compounds without identifying the -N=N- linkage or without linking coupling to dye formation.",
      ],
    },
    workedExamples: [
      {
        id: "t34-2-ex1",
        title: "Multi-step synthesis to phenylamine",
        problem: [
          "Outline the sequence and key reagents to prepare phenylamine starting from benzene.",
        ],
        solution: [
          "Step 1: Nitrate benzene with concentrated HNO₃ and concentrated H₂SO₄ to form nitrobenzene.",
          "Step 2: Reduce nitrobenzene with hot Sn/concentrated HCl to form the anilinium salt.",
          "Step 3: Add NaOH(aq) to liberate free phenylamine.",
          "The final alkaline workup is required to convert protonated amine into phenylamine.",
        ],
      },
      {
        id: "t34-2-ex2",
        title: "Diazonium chemistry and conversion to phenol",
        problem: [
          "Phenylamine is treated with NaNO₂ and dilute HCl below 10 °C, then the mixture is warmed with water. Identify the intermediate and final product.",
        ],
        solution: [
          "At below 10 °C, phenylamine forms benzenediazonium chloride.",
          "On warming with water, the diazonium group is replaced to form phenol.",
          "Temperature control is critical: diazonium salts are formed and handled cold before further transformation.",
        ],
      },
      {
        id: "t34-2-ex3",
        title: "Basicity comparison explanation",
        problem: [
          "Put ethylamine, ammonia, and phenylamine in order of decreasing basicity in water, and justify.",
        ],
        solution: [
          "Decreasing basicity: ethylamine > ammonia > phenylamine.",
          "Ethylamine is stronger than ammonia because alkyl electron donation increases lone-pair availability on nitrogen.",
          "Phenylamine is weaker than ammonia because the nitrogen lone pair is delocalised into the benzene ring, so it is less available to bind H⁺.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t34-2-st1",
        question:
          "How is phenylamine prepared from benzene in this syllabus sequence?",
        modelAnswer: [
          "Nitrate benzene to nitrobenzene using concentrated HNO₃/H₂SO₄.",
          "Reduce nitrobenzene with hot Sn/concentrated HCl, then add NaOH(aq) to release phenylamine from its salt.",
        ],
      },
      {
        id: "t34-2-st2",
        question:
          "State two required reactions of phenylamine: one with Br₂(aq) and one with nitrous acid conditions.",
        modelAnswer: [
          "With Br₂(aq) at room temperature, phenylamine gives rapid bromination of the ring and forms 2,4,6-tribromophenylamine (white precipitate).",
          "With HNO₂ (or NaNO₂/dilute acid) below 10 °C, phenylamine forms benzenediazonium chloride.",
        ],
      },
      {
        id: "t34-2-st3",
        question:
          "What happens when benzenediazonium chloride is warmed with water?",
        modelAnswer: [
          "The diazonium salt is converted to phenol on warming with water.",
        ],
      },
      {
        id: "t34-2-st4",
        question:
          "Explain the relative basicity of aqueous ammonia, ethylamine and phenylamine.",
        modelAnswer: [
          "Ethylamine is most basic because the ethyl group donates electron density to nitrogen.",
          "Ammonia is intermediate.",
          "Phenylamine is least basic because the nitrogen lone pair is delocalised into the aromatic ring and less available for protonation.",
        ],
      },
      {
        id: "t34-2-st5",
        question:
          "What is the azo group, and how is a required azo compound made from benzenediazonium chloride?",
        modelAnswer: [
          "The azo group is -N=N-.",
          "Benzenediazonium chloride couples with phenol in NaOH(aq) to form an azo compound.",
          "Azo compounds are commonly used as dyes, and other dyes are prepared by similar coupling routes.",
        ],
      },
    ],
  },

  "t34-3": {
    noteId: "t34-3",
    syllabusNotes: [
      {
        id: "preparing-amides-from-acyl-chlorides",
        title: "Preparation of amides from acyl chlorides",
        paragraphs: [
          "Amides are prepared at room temperature by reaction of acyl chlorides with ammonia or with primary amines. Reaction with ammonia gives primary amides, while reaction with primary amines gives N-substituted amides.",
          "Both routes proceed rapidly because acyl chlorides are highly reactive acylating agents. The C=O group remains in the product and chloride is replaced by the nitrogen-containing nucleophile.",
          "Hydrogen chloride is formed as by-product, so excess ammonia or amine is often used in practice to neutralise acid and maintain nucleophile availability.",
        ],
      },
      {
        id: "hydrolysis-of-amides",
        title: "Hydrolysis of amides under acidic and alkaline conditions",
        paragraphs: [
          "Amides undergo hydrolysis with aqueous acid or aqueous alkali, usually with heating. Hydrolysis breaks the C-N bond and converts the carbonyl-containing fragment into carboxylic-acid-derived products.",
          "In acidic hydrolysis, the organic product is the carboxylic acid and the nitrogen fragment becomes an ammonium or substituted ammonium ion in solution.",
          "In alkaline hydrolysis, the organic product is the carboxylate salt, while ammonia or amine is released from the nitrogen side. Acidification after alkaline hydrolysis can convert carboxylate into the free carboxylic acid where required.",
        ],
      },
      {
        id: "reduction-of-amides-and-basicity-comparison",
        title: "Reduction of amides and why amides are weaker bases than amines",
        paragraphs: [
          "The carbonyl group in an amide can be reduced with LiAlH₄ to give an amine. This is a key synthetic transformation because it removes oxygen functionality and increases the reduced character of the nitrogen-containing product.",
          "Amides are much weaker bases than amines because the nitrogen lone pair is delocalised into the adjacent carbonyl system by resonance. As a result, the lone pair is less available to accept a proton.",
          "In amines, the lone pair is localised and more available, so amines are significantly more basic. Explanations must explicitly mention lone-pair delocalisation in amides rather than only saying 'amide has oxygen so it is less basic'.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "This section rewards clear reaction-outcome language and correct acid-base reasoning. Examiners look for condition specificity and for mechanistic-quality explanations of weak amide basicity.",
      items: [
        "Giving high-temperature or catalyst-heavy conditions for amide formation from acyl chlorides instead of room temperature conditions.",
        "Confusing products of acidic and alkaline amide hydrolysis, especially carboxylic acid versus carboxylate salt.",
        "Forgetting that LiAlH₄ reduction of an amide gives an amine.",
        "Claiming amides are stronger bases than amines because they contain nitrogen.",
        "Explaining weak amide basicity without mentioning resonance delocalisation of the nitrogen lone pair into C=O.",
      ],
    },
    workedExamples: [
      {
        id: "t34-3-ex1",
        title: "Choosing amide synthesis conditions",
        problem: [
          "State reagents and conditions to make ethanamide from ethanoyl chloride, and identify the by-product.",
        ],
        solution: [
          "React ethanoyl chloride with ammonia at room temperature.",
          "The product is ethanamide, and hydrogen chloride is formed as by-product.",
          "Using excess ammonia helps neutralise HCl and supports formation of amide product.",
        ],
      },
      {
        id: "t34-3-ex2",
        title: "Hydrolysis outcome under different media",
        problem: [
          "Propanamide is hydrolysed (a) with aqueous acid and heat, (b) with aqueous alkali and heat. State the main organic product in each case.",
        ],
        solution: [
          "(a) Acidic hydrolysis gives propanoic acid as the main organic product.",
          "(b) Alkaline hydrolysis gives propanoate ions (for example sodium propanoate if NaOH is used).",
          "The nitrogen-containing fragment appears as ammonium/substituted ammonium in acid or as ammonia/amine in alkali.",
        ],
      },
      {
        id: "t34-3-ex3",
        title: "Basicity comparison: amide versus amine",
        problem: [
          "Explain why ethanamide is much less basic than ethylamine.",
        ],
        solution: [
          "In ethanamide, the nitrogen lone pair is delocalised into the adjacent carbonyl group through resonance.",
          "Because lone-pair electron density is shared with the C=O system, it is less available to bond to H⁺.",
          "In ethylamine, the lone pair is more localised on nitrogen, so proton acceptance is easier and basicity is higher.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t34-3-st1",
        question:
          "How can amides be prepared from acyl chlorides at room temperature?",
        modelAnswer: [
          "React an acyl chloride with ammonia to form a primary amide, or with a primary amine to form an N-substituted amide.",
          "Both reactions occur at room temperature and produce HCl as by-product.",
        ],
      },
      {
        id: "t34-3-st2",
        question:
          "Describe amide hydrolysis with aqueous acid.",
        modelAnswer: [
          "With aqueous acid and heat, an amide hydrolyses to a carboxylic acid and an ammonium (or substituted ammonium) species.",
        ],
      },
      {
        id: "t34-3-st3",
        question:
          "Describe amide hydrolysis with aqueous alkali.",
        modelAnswer: [
          "With aqueous alkali and heat, an amide hydrolyses to a carboxylate salt and ammonia or amine.",
          "Acidification can convert the carboxylate to the corresponding carboxylic acid.",
        ],
      },
      {
        id: "t34-3-st4",
        question:
          "What is the result of reducing an amide with LiAlH₄?",
        modelAnswer: [
          "LiAlH₄ reduces the amide carbonyl group to give an amine.",
        ],
      },
      {
        id: "t34-3-st5",
        question:
          "Why are amides much weaker bases than amines?",
        modelAnswer: [
          "The nitrogen lone pair in an amide is delocalised into the adjacent carbonyl group, so it is less available for protonation.",
          "In amines, the lone pair is more localised and therefore more basic.",
        ],
      },
    ],
  },

  "t34-4": {
    noteId: "t34-4",
    syllabusNotes: [
      {
        id: "amino-acid-acid-base-behaviour-and-zwitterions",
        title: "Acid-base behavior of amino acids and zwitterion formation",
        paragraphs: [
          "Amino acids contain both an acidic carboxyl group and a basic amino group, so they are amphoteric. In water, internal proton transfer commonly gives a zwitterion containing both -NH₃⁺ and -COO⁻ in the same molecule.",
          "At low pH, amino acids are protonated overall and tend to carry net positive charge. At high pH, they are deprotonated overall and tend to carry net negative charge.",
          "At an intermediate pH, the isoelectric point, the average net charge is zero and the zwitterionic form dominates. This charge behavior underpins separation methods such as electrophoresis.",
        ],
      },
      {
        id: "isoelectric-point-and-charge-prediction",
        title: "Isoelectric point and predicting amino-acid charge with pH",
        paragraphs: [
          "The isoelectric point (pI) is the pH at which an amino acid has no net movement in an electric field because its average net charge is zero.",
          "A practical rule is: pH < pI gives a net positive species, pH = pI gives net zero (zwitterion-dominated), and pH > pI gives a net negative species.",
          "Examination questions usually provide enough information to decide relative pH positions and therefore migration direction in electrophoresis without requiring advanced pKa calculations.",
        ],
      },
      {
        id: "peptide-bond-formation",
        title: "Formation of amide (peptide) bonds: dipeptides and tripeptides",
        paragraphs: [
          "A peptide bond is an amide linkage formed when the -COOH group of one amino acid reacts with the -NH₂ group of another. This is a condensation reaction with removal of water.",
          "Two amino acids give a dipeptide containing one peptide bond. Three amino acids give a tripeptide containing two peptide bonds.",
          "Sequence matters: different amino-acid orderings produce different peptides even with the same set of amino-acid residues. Hydrolysis of peptides breaks peptide bonds back to amino-acid-derived fragments.",
        ],
      },
      {
        id: "electrophoresis-of-amino-acid-and-dipeptide-mixtures",
        title: "Electrophoresis at varying pH: interpreting mixtures of amino acids and dipeptides",
        paragraphs: [
          "Electrophoresis separates charged species by their movement in an electric field. Cations move toward the negative electrode (cathode), and anions move toward the positive electrode (anode). Species with net zero charge remain close to the origin.",
          "For each component in a mixture, compare the buffer pH to its isoelectric point. Below pI it moves as a cation; above pI it moves as an anion; at pI it has minimal net migration.",
          "Dipeptides also show pH-dependent charge behavior because they contain ionisable end groups and sometimes ionisable side chains. Prediction follows the same pH-versus-pI logic used for single amino acids.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Most lost marks come from sign errors in charge and electrode direction. Strong answers state charge first, then migration direction, and explicitly connect this to pH relative to isoelectric point.",
      items: [
        "Describing amino acids as only acidic or only basic, instead of amphoteric species that can act as both.",
        "Forgetting that the zwitterion has both positive and negative sites in the same molecule.",
        "Mixing up pH < pI and pH > pI when assigning net charge.",
        "Stating peptide-bond formation without identifying it as amide-bond condensation with loss of water.",
        "Reversing electrophoresis direction by sending cations to the anode and anions to the cathode.",
      ],
    },
    workedExamples: [
      {
        id: "t34-4-ex1",
        title: "Charge state at different pH values",
        problem: [
          "An amino acid has pI = 6.0. Predict its net charge at pH 2, pH 6, and pH 10.",
        ],
        solution: [
          "At pH 2 (below pI), the amino acid is net positive.",
          "At pH 6 (equal to pI), net charge is approximately zero and zwitterion form dominates.",
          "At pH 10 (above pI), the amino acid is net negative.",
          "This follows the general rule based on pH relative to pI.",
        ],
      },
      {
        id: "t34-4-ex2",
        title: "Building a tripeptide from amino acids",
        problem: [
          "Explain how three amino acids join to form a tripeptide and state how many peptide bonds are present.",
        ],
        solution: [
          "The carboxyl group of one amino acid condenses with the amino group of another to form one amide (peptide) bond and release water.",
          "Repeating this once more links three amino-acid residues into one chain.",
          "A tripeptide therefore contains two peptide bonds and is formed by two condensation steps.",
        ],
      },
      {
        id: "t34-4-ex3",
        title: "Electrophoresis interpretation for a mixture",
        problem: [
          "A mixture contains species A (pI 5.0) and species B (pI 8.0). The buffer pH is 7.0. Predict movement of each species during electrophoresis.",
        ],
        solution: [
          "Species A has pH above pI, so it is net negative and moves toward the positive electrode (anode).",
          "Species B has pH below pI, so it is net positive and moves toward the negative electrode (cathode).",
          "If a species had pI near 7.0, it would remain close to the origin because net charge would be near zero.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t34-4-st1",
        question:
          "Why are amino acids described as amphoteric, and what is a zwitterion?",
        modelAnswer: [
          "Amino acids are amphoteric because they contain both acidic (-COOH) and basic (-NH₂) groups and can react as acids or bases.",
          "A zwitterion is a species with both positive and negative charges in the same molecule, typically -NH₃⁺ and -COO⁻ for amino acids in water.",
        ],
      },
      {
        id: "t34-4-st2",
        question:
          "Define the isoelectric point and relate it to net charge.",
        modelAnswer: [
          "The isoelectric point is the pH at which an amino acid has zero average net charge.",
          "Below pI it is net positive; above pI it is net negative.",
        ],
      },
      {
        id: "t34-4-st3",
        question:
          "Describe how a dipeptide forms from two amino acids.",
        modelAnswer: [
          "A dipeptide forms when the carboxyl group of one amino acid reacts with the amino group of another in a condensation reaction.",
          "A peptide (amide) bond forms and one molecule of water is removed.",
        ],
      },
      {
        id: "t34-4-st4",
        question:
          "How many peptide bonds are present in a tripeptide, and why?",
        modelAnswer: [
          "A tripeptide has two peptide bonds because linking three amino-acid residues into one chain requires two linkages.",
        ],
      },
      {
        id: "t34-4-st5",
        question:
          "In electrophoresis, where do positively charged and negatively charged amino-acid species move?",
        modelAnswer: [
          "Positively charged species move to the negative electrode (cathode).",
          "Negatively charged species move to the positive electrode (anode).",
          "Species with net zero charge remain near the origin.",
        ],
      },
    ],
  },
};
