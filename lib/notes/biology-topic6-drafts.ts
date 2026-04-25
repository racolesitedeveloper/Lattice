import type { NoteDraft } from "./types";

/** Full teaching notes for 9700 Topic 6 — subtopics 6.1-6.2. */
export const BIOLOGY_TOPIC6_DRAFTS: Record<string, NoteDraft> = {
  "t6-1": {
    noteId: "t6-1",
    syllabusNotes: [
      {
        id: "nucleotide-structure-and-atp",
        title: "Nucleotide structure and ATP as a phosphorylated nucleotide",
        paragraphs: [
          "A nucleotide has three components: a pentose sugar, a nitrogen-containing base and at least one phosphate group. In nucleic acids, nucleotides are joined into long polynucleotide chains.",
          "In DNA and RNA, the sugar is pentose (deoxyribose in DNA, ribose in RNA). The base can be adenine, guanine, cytosine, thymine or uracil depending on molecule type. The phosphate group links neighbouring sugars through phosphodiester bonds.",
          "ATP is a phosphorylated nucleotide containing adenine, ribose and three phosphate groups. Hydrolysis of the terminal phosphate bond releases usable energy for cellular work, so ATP links nucleotide chemistry to metabolism.",
        ],
      },
      {
        id: "purines-pyrimidines-and-base-pairing",
        title: "Purines, pyrimidines and complementary base pairing",
        paragraphs: [
          "Adenine and guanine are purines with a double ring structure, while cytosine, thymine and uracil are pyrimidines with a single ring structure. This size difference is essential in maintaining regular helix width.",
          "In DNA, complementary base pairing occurs between adenine and thymine, and between cytosine and guanine. Pairing is specific because of hydrogen-bond donor and acceptor arrangements on each base.",
          "C-G base pairs have three hydrogen bonds, while A-T pairs have two. Therefore C-G pairing is more strongly bonded and contributes more to local thermal stability of the DNA double helix.",
        ],
      },
      {
        id: "dna-double-helix-antiparallel-and-phosphodiester",
        title: "DNA double helix: antiparallel strands and phosphodiester linkage",
        paragraphs: [
          "A DNA molecule consists of two polynucleotide strands coiled into a double helix. Sugar-phosphate backbones lie on the outside, while bases project inward and pair specifically.",
          "The strands run in opposite directions: one strand is oriented 5′ to 3′ and the complementary strand is 3′ to 5′. This antiparallel arrangement is required for correct base pairing and for replication enzyme function.",
          "Adjacent nucleotides within each strand are joined by phosphodiester bonds between the phosphate group of one nucleotide and the sugar of the next. These covalent bonds form the strong backbone of each strand.",
        ],
      },
      {
        id: "semi-conservative-replication-overview",
        title: "Semi-conservative DNA replication in S phase",
        paragraphs: [
          "DNA replication occurs in S phase of the cell cycle before mitosis. It is semi-conservative: each daughter DNA molecule contains one original parental strand and one newly synthesised complementary strand.",
          "Hydrogen bonds between base pairs are broken, exposing template bases on each parental strand. Free nucleotides align by complementary pairing with exposed bases.",
          "DNA polymerase catalyses formation of phosphodiester bonds to build new DNA strands. DNA ligase then joins adjacent DNA fragments where discontinuous synthesis has produced separate pieces.",
        ],
      },
      {
        id: "leading-lagging-and-5-to-3-synthesis",
        title: "Leading and lagging strands from 5′ to 3′ polymerase directionality",
        paragraphs: [
          "DNA polymerase can add nucleotides only to the 3′ end of a growing strand, so new DNA is synthesised only in the 5′ to 3′ direction.",
          "At each replication fork, one new strand is synthesised continuously toward the fork; this is the leading strand. The opposite new strand is synthesised discontinuously away from the fork as short fragments; this is the lagging strand.",
          "DNA ligase is required to seal phosphodiester bonds between lagging-strand fragments to make one continuous strand. The leading/lagging difference is therefore a direct consequence of 5′ to 3′ polymerase activity.",
        ],
      },
      {
        id: "rna-structure-using-mrna",
        title: "RNA structure using mRNA as the model",
        paragraphs: [
          "RNA is usually single stranded and built from ribonucleotides. Each nucleotide contains ribose, phosphate and one base (A, U, C or G).",
          "Compared with DNA, RNA has ribose instead of deoxyribose and uracil instead of thymine. It still has a sugar-phosphate backbone linked by phosphodiester bonds.",
          "Messenger RNA (mRNA) carries coded base sequence information from DNA to ribosomes for protein synthesis, so its nucleotide sequence is central to gene expression.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners reward precise nucleic-acid language and directional notation. Marks are commonly lost by mixing DNA and RNA features or by giving replication descriptions without enzyme roles.",
      items: [
        "Confusing nucleoside and nucleotide, or omitting phosphate groups when defining a nucleotide.",
        "Stating that purines are single ring or that pyrimidines are double ring; this is reversed.",
        "Writing that all base pairs have equal hydrogen bonding; C-G has three hydrogen bonds and A-T has two.",
        "Forgetting antiparallel orientation and giving both DNA strands as 5′ to 3′ in the same direction.",
        "Describing replication as conservative or dispersive instead of semi-conservative.",
        "Claiming DNA polymerase synthesises both strands continuously; lagging-strand discontinuity and ligase are required.",
      ],
    },
    workedExamples: [
      {
        id: "t6-1-ex1",
        title: "Using base composition to infer strand complementarity",
        problem: [
          "A double-stranded DNA sample contains 18% adenine. Calculate percentages of thymine, cytosine and guanine, and explain your reasoning using complementary pairing.",
        ],
        solution: [
          "In double-stranded DNA, adenine pairs with thymine, so %A = %T. Therefore thymine is 18%.",
          "The remaining percentage is 100 - 18 - 18 = 64%, which must be cytosine plus guanine.",
          "Because %C = %G, each is 32%. Final composition: T = 18%, C = 32%, G = 32%.",
        ],
      },
      {
        id: "t6-1-ex2",
        title: "Explaining leading and lagging synthesis at one replication fork",
        problem: [
          "At a replication fork, one template strand is oriented 3′ to 5′ toward the fork. Predict whether its complementary daughter strand is leading or lagging, and justify with polymerase directionality.",
        ],
        solution: [
          "DNA polymerase synthesises only 5′ to 3′ by adding nucleotides to the 3′ end of the new strand.",
          "A template oriented 3′ to 5′ toward the fork allows continuous complementary synthesis toward the fork in 5′ to 3′ direction.",
          "Therefore this daughter strand is the leading strand. The opposite template produces a lagging strand in fragments that are later joined by DNA ligase.",
        ],
      },
      {
        id: "t6-1-ex3",
        title: "Comparing DNA and mRNA structures",
        problem: [
          "A student writes: 'mRNA is double stranded, contains thymine and deoxyribose, and has no phosphate backbone.' Correct this statement fully.",
        ],
        solution: [
          "mRNA is usually single stranded, not double stranded.",
          "Its sugar is ribose, not deoxyribose, and it contains uracil instead of thymine.",
          "Like DNA, mRNA has a sugar-phosphate backbone with phosphodiester bonds between adjacent nucleotides.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t6-1-st1",
        question:
          "Describe nucleotide structure and use ATP as an example of a phosphorylated nucleotide.",
        modelAnswer: [
          "A nucleotide consists of a pentose sugar, a nitrogenous base and one or more phosphate groups. ATP is a nucleotide containing adenine, ribose and three phosphate groups; hydrolysis of the terminal phosphate bond releases energy for cellular processes.",
        ],
      },
      {
        id: "t6-1-st2",
        question:
          "State which bases are purines and which are pyrimidines, and explain one significance for DNA structure.",
        modelAnswer: [
          "Purines: adenine and guanine (double ring). Pyrimidines: cytosine, thymine and uracil (single ring). Pairing a purine with a pyrimidine helps maintain a constant width of the DNA double helix.",
        ],
      },
      {
        id: "t6-1-st3",
        question:
          "Describe the DNA double helix with reference to antiparallel strands, complementary pairing, hydrogen-bond differences and phosphodiester bonds.",
        modelAnswer: [
          "DNA has two antiparallel strands (one 5′ to 3′, the other 3′ to 5′) forming a double helix. Bases pair specifically (A with T, C with G) by hydrogen bonding; C-G pairs have three hydrogen bonds and A-T pairs have two. Within each strand, nucleotides are linked by covalent phosphodiester bonds in the sugar-phosphate backbone.",
        ],
      },
      {
        id: "t6-1-st4",
        question:
          "Outline semi-conservative DNA replication in S phase, including roles of DNA polymerase and DNA ligase.",
        modelAnswer: [
          "In S phase, the two parental DNA strands separate as hydrogen bonds break. Each parental strand acts as a template for complementary base pairing. DNA polymerase adds nucleotides to form new strands in 5′ to 3′ direction by catalysing phosphodiester bond formation. Lagging-strand synthesis produces fragments that are joined into a continuous strand by DNA ligase. Each daughter DNA molecule contains one parental and one newly synthesised strand.",
        ],
      },
      {
        id: "t6-1-st5",
        question:
          "Compare DNA and mRNA structure in three clear points.",
        modelAnswer: [
          "DNA is usually double stranded, while mRNA is usually single stranded.",
          "DNA contains deoxyribose and thymine; mRNA contains ribose and uracil.",
          "Both are polynucleotides with phosphodiester-linked sugar-phosphate backbones, but mRNA is typically shorter and functions in carrying coding information for translation.",
        ],
      },
    ],
  },

  "t6-2": {
    noteId: "t6-2",
    syllabusNotes: [
      {
        id: "gene-polypeptide-and-code-principle",
        title: "Gene, polypeptide and the universal genetic code",
        paragraphs: [
          "A gene is a sequence of nucleotides that forms part of a DNA molecule. The base sequence in a gene provides the information used to build a polypeptide.",
          "A polypeptide is a chain of amino acids joined by peptide bonds. Different amino acid sequences produce different protein structures and functions, so gene sequence underlies phenotype.",
          "The genetic code is read in triplets. Different DNA base triplets correspond either to specific amino acids, to a start signal, or to stop signals. The code is universal in principle: the same triplet generally specifies the same amino acid across living organisms.",
        ],
      },
      {
        id: "transcription-core-steps",
        title: "Transcription: from DNA template strand to RNA",
        paragraphs: [
          "During transcription, RNA polymerase binds to DNA and separates the strands locally. One DNA strand acts as the template (transcribed strand), while the other is the non-transcribed strand.",
          "RNA polymerase assembles an RNA molecule by complementary base pairing with the template strand and by forming phosphodiester bonds. The RNA sequence is therefore complementary to the template strand and similar to the non-transcribed strand except that uracil replaces thymine.",
          "In exam answers, identify RNA polymerase explicitly as the enzyme making RNA and distinguish template strand from non-template strand precisely.",
        ],
      },
      {
        id: "eukaryotic-rna-processing",
        title: "Primary transcript processing in eukaryotes",
        paragraphs: [
          "In eukaryotes, transcription first produces a primary transcript containing coding regions (exons) and non-coding regions (introns).",
          "Before translation, introns are removed and exons are joined together by RNA processing (splicing), producing mature mRNA suitable for export and translation.",
          "This processing step explains why eukaryotic gene expression includes an additional control stage between transcription and translation.",
        ],
      },
      {
        id: "translation-codons-trna-ribosomes",
        title: "Translation: codons, tRNA anticodons and ribosomes",
        paragraphs: [
          "Translation occurs at ribosomes, where the codon sequence of mRNA is read in triplets from a start codon to a stop codon.",
          "Each transfer RNA (tRNA) carries a specific amino acid and has an anticodon complementary to a codon on mRNA. Codon-anticodon pairing ensures amino acids are added in the correct order.",
          "The ribosome positions mRNA and tRNAs, catalyses peptide bond formation, and moves along mRNA codon by codon until a stop codon is reached. The resulting polypeptide then folds into its functional form.",
        ],
      },
      {
        id: "linking-dna-information-to-polypeptide",
        title: "How DNA information is used to construct polypeptides",
        paragraphs: [
          "DNA sequence information is transferred to mRNA during transcription and then interpreted during translation. This two-stage flow preserves genetic information while allowing protein synthesis to occur at ribosomes.",
          "Because codons are read in order and without overlap in a fixed reading frame, nucleotide sequence integrity is crucial. A change in sequence can alter one amino acid, many amino acids, or produce premature termination.",
          "The sequence relationship is directional: DNA template strand -> RNA transcript -> mRNA codons -> tRNA-guided amino acid sequence.",
        ],
      },
      {
        id: "gene-mutation-types-and-polypeptide-effects",
        title: "Gene mutations: substitution, deletion, insertion and protein effects",
        paragraphs: [
          "A gene mutation is a change in the base-pair sequence of DNA. Mutation can alter codons in mRNA and therefore alter the polypeptide produced.",
          "Substitution replaces one nucleotide with another. It may be silent (same amino acid), missense (different amino acid), or nonsense (stop codon formed), depending on codon change.",
          "Deletion removes nucleotide(s) and insertion adds nucleotide(s). If deletion or insertion is not in multiples of three, the reading frame shifts (frameshift), changing downstream codons and often causing major changes to the polypeptide.",
          "Even when mutation does not alter amino acid sequence, it is still a sequence change in DNA. Biological impact depends on position and resulting effect on transcription, translation and protein function.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Protein-synthesis questions are high scoring when candidates keep strand identity and codon logic precise. Most errors arise from mixing DNA and RNA terminology or from weak mutation-effect explanations.",
      items: [
        "Defining a gene as 'a protein' rather than a DNA nucleotide sequence that codes for a polypeptide.",
        "Using codon and anticodon interchangeably; codons are on mRNA and anticodons are on tRNA.",
        "Saying transcription uses the non-transcribed strand as template; RNA polymerase uses the transcribed (template) strand.",
        "Omitting eukaryotic RNA processing, especially intron removal and exon joining, when asked about primary transcripts.",
        "Writing that all substitutions change amino acids; some are silent because of degeneracy of the code.",
        "Describing insertion/deletion without mentioning possible frameshift and downstream codon changes.",
      ],
    },
    workedExamples: [
      {
        id: "t6-2-ex1",
        title: "From DNA template triplets to mRNA codons",
        problem: [
          "A DNA template (transcribed) strand segment is 3′-TAC GAA CCG ATT-5′. Write the complementary mRNA sequence and state where translation starts and stops if AUG is present and UAA is a stop codon.",
        ],
        solution: [
          "mRNA is synthesised complementary and antiparallel to the template strand, with U in place of T.",
          "Template 3′-TAC GAA CCG ATT-5′ gives mRNA 5′-AUG CUU GGC UAA-3′.",
          "AUG is a start codon, so translation can begin at AUG. UAA is a stop codon, so translation terminates at UAA.",
        ],
      },
      {
        id: "t6-2-ex2",
        title: "Explaining transcription and translation roles clearly",
        problem: [
          "A student answer says: 'Ribosomes make mRNA in the nucleus, then RNA polymerase reads anticodons to join amino acids.' Rewrite this as a correct sequence of events with named roles.",
        ],
        solution: [
          "RNA polymerase, not ribosomes, synthesises RNA during transcription using the DNA template strand in the nucleus (for eukaryotes).",
          "The primary transcript is processed by intron removal and exon joining to form mature mRNA, which leaves the nucleus.",
          "At ribosomes, translation occurs: mRNA codons are read, tRNA anticodons pair with codons, and amino acids are joined by peptide bonds to form a polypeptide.",
        ],
      },
      {
        id: "t6-2-ex3",
        title: "Predicting mutation consequences",
        problem: [
          "A coding sequence originally contains the mRNA codons AUG-AAA-GCU-UGG-UAA. A mutation inserts one nucleotide near the start, changing the reading frame from the second codon onward. Explain likely effects on the polypeptide.",
        ],
        solution: [
          "Insertion of one nucleotide causes a frameshift because codons are read in triplets. All downstream codons are regrouped from the insertion point onward.",
          "Therefore many subsequent amino acids are likely to differ from the original sequence, not just one amino acid.",
          "A new stop codon may appear earlier than expected, producing a truncated polypeptide that is often non-functional.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t6-2-st1",
        question:
          "State what is meant by a gene and explain how a gene is related to a polypeptide.",
        modelAnswer: [
          "A gene is a sequence of nucleotides forming part of a DNA molecule. Its base sequence is transcribed and then translated to determine the amino acid sequence of a polypeptide.",
        ],
      },
      {
        id: "t6-2-st2",
        question:
          "Describe the principle of the universal genetic code, including triplets, start codons and stop codons.",
        modelAnswer: [
          "The genetic code is read in triplets of bases. Different triplets specify particular amino acids, while specific triplets act as start and stop signals for translation. The code is universal in principle, meaning a given codon generally specifies the same amino acid in different organisms.",
        ],
      },
      {
        id: "t6-2-st3",
        question:
          "Describe transcription and translation with roles of RNA polymerase, mRNA, codons, tRNA, anticodons and ribosomes.",
        modelAnswer: [
          "In transcription, RNA polymerase uses the DNA template (transcribed) strand to synthesise RNA by complementary pairing. The resulting mRNA carries codons. In translation, ribosomes read mRNA codons; tRNA molecules carrying specific amino acids bind through complementary anticodon-codon pairing; the ribosome catalyses peptide bond formation to build the polypeptide.",
        ],
      },
      {
        id: "t6-2-st4",
        question:
          "Distinguish the transcribed strand from the non-transcribed strand, and explain eukaryotic primary-transcript processing.",
        modelAnswer: [
          "The transcribed strand (template strand) is the DNA strand used by RNA polymerase during transcription. The non-transcribed strand is not used as template and has a sequence similar to mRNA except T replaces U. In eukaryotes, the initial RNA primary transcript is processed by removal of introns and joining of exons to form mature mRNA.",
        ],
      },
      {
        id: "t6-2-st5",
        question:
          "Define gene mutation and compare how substitution, deletion and insertion may affect the polypeptide produced.",
        modelAnswer: [
          "A gene mutation is a change in the DNA base-pair sequence. Substitution may be silent, missense or nonsense depending on codon outcome. Deletion and insertion alter nucleotide number; if not in multiples of three they cause frameshifts, changing many downstream codons and often producing a substantially altered or truncated polypeptide.",
        ],
      },
    ],
  },
};
