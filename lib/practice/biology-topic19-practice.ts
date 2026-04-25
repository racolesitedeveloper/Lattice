import type { SubtopicPracticePack } from "./types";

/**
 * 9700 Topic 19 (Genetic technology) — `data/courses/biology-9700.json` (`t19-1` … `t19-3`).
 *
 * **Crosswalk to `data/syllabus/biology-9700-learning-outcomes.md` §19.1–19.3**
 *
 * **`t19-1` (19.1)** — d1: recombinant DNA + engineering overview; d2: gene sources (DNA, cDNA, chemical);
 * d3: restriction, ligase, plasmid, DNA polymerase, reverse transcriptase; d4: promoter; d5: fluorescent marker genes;
 * d6: gene editing; d7: PCR + Taq; d8: gel electrophoresis; d9: microarrays; d10: sequence databases.
 *
 * **`t19-2` (19.2)** — d1: recombinant proteins (insulin, factor VIII, ADA); d2–d4: screening BRCA, Huntington, CF;
 * d5–d6: gene therapy SCID, inherited eye disease; d7–d10: ethics of screening and gene therapy.
 *
 * **`t19-3` (19.3)** — d1–d3: GM salmon, herbicide-tolerant soybean, Bt/insect cotton + productivity/food demand; d4–d10: GMO food ethics.
 */
export const BIOLOGY_TOPIC19_PRACTICE: Record<string, SubtopicPracticePack> = {
  "t19-1": {
    noteId: "t19-1",
    drills: [
      {
        id: "t19-1-d1",
        noteId: "t19-1",
        kind: "structured",
        difficulty: 1,
        marks: 6,
        stem: "Define the term recombinant DNA. Explain what is meant by genetic engineering, and how transferring a gene into a recipient organism can lead to expression of a new polypeptide in that organism.",
        modelAnswerPoints: [
          "Recombinant DNA is DNA that contains a new combination of genetic material, often from two or more different sources, joined in vitro.",
          "Genetic engineering is the deliberate, directed change of an organism’s genetic material to obtain desired traits.",
          "A transferred gene, when integrated into a suitable vector or chromosome and provided with a compatible promoter, can be transcribed and translated, so a protein coded by that sequence is made in the host’s cells.",
        ],
        workedSolution: [
          "Recombinant DNA is DNA in which a segment from one source (for example a human gene) has been covalently joined to DNA from another source (commonly a bacterial plasmid or viral vector) so the molecule carries a sequence arrangement that would not occur naturally in either parent genome alone, which is the standard definitional line examiners want.",
          "Genetic engineering is the intentional manipulation of DNA—cutting, joining, and sometimes synthesising or editing sequences—so that the inheritable information of a cell or whole organism is modified in a way chosen by the researcher, usually to add or alter a heritable function rather than to rely on conventional breeding alone.",
          "If a eukaryotic or prokaryotic cell receives a new gene, whether on an extrachromosomal plasmid in bacteria or stably integrated in a nuclear genome, host RNA polymerase and ribosomes that recognise the same genetic code can transcribe the introduced coding sequence and translate the mRNA into a polypeptide, provided a functional promoter and other expression signals (terminator, in eukaryotes often a polyadenylation context) are present so the gene is ‘switched on’ in the right tissue and developmental stage in practice.",
        ],
        commonMistake:
          "Defining recombinant DNA as ‘any DNA in a plasmid’ without the idea of a novel combination of sequences from different origins, or claiming expression needs no control sequences.",
        tags: ["definitions", "recombinant-DNA"],
      },
      {
        id: "t19-1-d2",
        noteId: "t19-1",
        kind: "structured",
        difficulty: 1,
        marks: 5,
        stem: "Explain the three main ways a gene to be used in genetic engineering can be obtained: from donor genomic DNA, from donor mRNA, and by direct chemical synthesis from nucleotides.",
        modelAnswerPoints: [
          "From donor DNA: the gene of interest is isolated, often by restriction digestion, PCR, or from a library clone prepared from total genomic DNA.",
          "From mRNA: mRNA is isolated; reverse transcriptase is used to make complementary DNA (cDNA), giving a copy without introns, useful in bacteria.",
          "Chemical synthesis: the DNA sequence of the gene (or a codon-optimised version) is built nucleotide by nucleotide when the sequence is short enough or in overlapping fragments.",
        ],
        workedSolution: [
          "The classical route from a eukaryotic or prokaryotic donor begins with high-molecular-mass nuclear DNA, from which a particular locus can be excised with restriction endonucleases, amplified with primers in PCR if flanking sites are known, or retrieved as a larger clone from a genomic DNA library, then inserted into a vector for propagation and later transfer.",
          "Many eukaryotic protein-coding genes are split by introns that bacteria cannot splice; therefore workers often start from mature mRNA isolated from the tissue that expresses the gene, then use reverse transcriptase in vitro to make a first-strand cDNA, second-strand synthesis and cloning yielding a cDNA that represents only exonic sequence in one contiguous open reading frame suitable for a bacterial plasmid.",
          "For smaller genes, or to install preferred codon usage or to remove restriction sites, chemists or automated synthesiser runs can build single-stranded oligonucleotides that are annealed and ligated, which also allows introduction of known mutations or tag sequences, though cost and error-checking limit the length of what is made in one go compared with biological amplification.",
        ],
        commonMistake:
          "Saying cDNA comes from DNA without naming reverse transcriptase and mRNA, or implying genomic and cDNA are identical in structure for a eukaryotic gene.",
        tags: ["cDNA", "sources"],
      },
      {
        id: "t19-1-d3",
        noteId: "t19-1",
        kind: "structured",
        difficulty: 2,
        marks: 8,
        stem: "Describe the roles, in the transfer of a gene of interest into a host organism, of restriction endonucleases, DNA ligase, plasmids, DNA polymerase, and reverse transcriptase (only where cDNA is being prepared).",
        modelAnswerPoints: [
          "Restriction endonucleases (restriction enzymes) cut double-stranded DNA at specific palindromic recognition sites, producing ‘sticky’ or blunt ends to insert a foreign fragment.",
          "DNA ligase forms phosphodiester bonds, sealing nicks to join a foreign DNA insert covalently into a plasmid or other vector after matching ends (often after complementary overhangs base-pair).",
          "Plasmids (vectors) are small circular extrachromosomal DNA molecules, often in bacteria, carrying an origin of replication, selectable marker, and site into which a gene is inserted; they are replicated and can carry the transgene into host cells.",
          "DNA polymerase, for example in PCR, amplifies the gene to supply enough correct sequence for ligation, using a template and primers; in cloning it also features in cDNA second-strand synthesis and sequencing reactions.",
          "Reverse transcriptase, when cDNA is made from mRNA, synthesises DNA complementary to the RNA template so the eukaryotic coding sequence is obtained without introns for prokaryotic expression.",
        ],
        workedSolution: [
          "Restriction endonucleases recognise short, usually palindromic, base sequences in double-stranded DNA and cleave both strands, often leaving short single-stranded overhangs that can base-pair with a fragment cut with the same enzyme, which is the matching step that makes directed insertion of a ‘foreign’ piece between two cut sites in a plasmid possible without random shearing.",
          "A plasmid chosen as a vector is opened at a multiple cloning site; the same enzyme cuts the source DNA, so the insert and plasmid share compatible termini; after annealing, DNA ligase, which in cells normally seals Okazaki fragments, uses ATP or NAD+ depending on the enzyme to form a phosphodiester bond between 3' OH and 5' phosphate across each nick, producing a covalent recombinant plasmid that can be replicated in host bacteria and sometimes transferred to eukaryotes with electroporation or other means.",
          "DNA polymerase in PCR, typically a thermostable type used in each denature–anneal–extend cycle, extends primers to duplicate the region between their binding sites, which is the standard way to obtain milligram quantities of a flanked insert or to add restriction sites, while in making cDNA the reverse-transcriptase–generated first strand is converted to double-stranded DNA in procedures that also call on DNA polymerase activity.",
          "Reverse transcriptase, an RNA-dependent DNA polymerase from retroviruses or engineered variants, is not needed when the starting material is already double-stranded genomic DNA, but is central when the aim is a spliced-mRNA-like sequence from eukaryotes, and its mention must be clearly tied in answers to cDNA, not to random plasmid maintenance.",
        ],
        commonMistake:
          "Confusing restriction enzymes with ‘destroying’ DNA unselectively, or saying ligase joins unrelated blunt ends with no need for design of compatible ends; omitting the plasmid as replicon + carrier.",
        tags: ["enzymes", "vectors"],
      },
      {
        id: "t19-1-d4",
        noteId: "t19-1",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "Explain why, when someone transfers a eukaryotic protein-coding gene into a prokaryotic or different eukaryotic host, a promoter that functions in the recipient cells often has to be transferred (or already present) along with the coding sequence, not the coding region alone unregulated.",
        modelAnswerPoints: [
          "A promoter is the DNA region where RNA polymerase and transcription factors bind to initiate transcription; without a compatible promoter, the transgene is not expressed.",
          "Donor and host promoters may not be interchangeable between species, tissues, and programmes of gene control.",
          "Engineers place the gene downstream of a known strong or inducible host promoter (or a viral promoter) so expression is efficient and, where needed, controllable in time and place.",
        ],
        workedSolution: [
          "Protein-coding sequences do not, by themselves, attract RNA polymerase; transcription initiation depends on a promoter upstream (in eubacteria, σ-factor–mediated binding to -35 and -10 like regions; in eukaryotes, on core and regulatory promoter elements, enhancers, and chromatin state) that matches the host’s RNA polymerase and accessory proteins.",
          "A human structural gene, if excised with little upstream DNA, might lack the cis-regulatory control region needed in *E. coli* or in plant nuclei, or might carry a promoter that silenced bacteria entirely, so only the exons without the correct 5' regulatory context would fail to produce mRNA, even though the plasmid replicates and selection markers work.",
          "Therefore a construct typically places the cDNA or gene cassettes downstream of a promoter that is active in the intended host—bacterial, viral, or eukaryotic as appropriate—sometimes with a ribosome-binding sequence for prokaryotes or a Kozak context for eukaryotes, so a strong or regulatable product can be made on demand, which is the biological justification for “promoter with gene” answers.",
        ],
        commonMistake:
          "Claiming translation starts without mRNA, or that any random DNA before the ATG is automatically a promoter; ignoring tissue-specific eukaryotic needs.",
        tags: ["promoter", "expression"],
      },
      {
        id: "t19-1-d5",
        noteId: "t19-1",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "Explain how a marker gene whose product is fluorescent (for example, green fluorescent protein from a *jellyfish* gene) can be used in the same plasmid as a transgene to confirm that cells have been transformed and that expression machinery is working.",
        modelAnswerPoints: [
          "Cells that take up a plasmid can be co-selected with antibiotic resistance, but fluorescent markers add a direct visual or cytometric readout of gene expression.",
          "The fluorescent protein is produced if transcription and translation are successful, so it reports successful transgene function in that cellular environment.",
          "Under UV or appropriate excitation, transformed cells light up, allowing sorting or microcopy without killing cells (unlike some reporters).",
        ],
        workedSolution: [
          "After transformation, only a fraction of cells typically incorporate plasmid DNA; even when antibiotic selection removes non-expressors of a resistance gene, a second cassette coding for a fluorescent protein, driven by a promoter active in the host, can show that the same regulatory and translational context supports expression of a foreign open reading frame.",
          "If the fluorophore cDNA is fused in frame to another gene, fluorescence can also localise a fusion product, but the syllabus point is the simpler one: a glowing colony or glowing cell under the microscope is evidence that the introduced genetic programme is not only present but is being transcribed and translated to a stable folded protein.",
          "Flow cytometry and confocal imaging can then separate GFP-positive and negative populations, which is a powerful way to confirm successful gene delivery and expression in mixed cultures or in transgenic tissue culture lines beyond mere survival on kanamycin.",
        ],
        commonMistake:
          "Saying the fluorescent gene proves integration into chromosomal DNA in every case—plasmid expression in bacteria can be extrachromosomal; distinguish presence from function.",
        tags: ["markers", "GFP"],
      },
      {
        id: "t19-1-d6",
        noteId: "t19-1",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "Explain what is meant by gene editing in the context of genetic engineering, and how it differs in aim from ‘classical’ insertion of a plasmid-borne transgene that lands semi-randomly in a genome in some systems.",
        modelAnswerPoints: [
          "Gene editing is genetic engineering in which specific sites in a genome are targeted for insertion, deletion, or base replacement.",
          "Programmed nucleases or related systems (e.g. CRISPR–Cas) create breaks at or near a chosen sequence, and cell repair can introduce precise changes (with an exogenous template) or indels (without a template).",
          "Contrasts with adding a whole new cassette without precise homologous targeting in older random-integration methods, though the boundary can blur in modern targeting.",
        ],
        workedSolution: [
          "Gene editing is the deliberate alteration of a particular nucleotide or short stretch of DNA in situ—correcting a disease mutation, removing a few bases to disrupt a target gene, or replacing a small segment with a donor template—so the change is site-specific rather than only adding a new extrachromosomal replicon or a randomly integrated transgene in some eukaryotic systems.",
          "Programmable nuclease platforms generate double-strand breaks; non-homologous end joining often introduces small insertions or deletions at the cut; homology-directed repair, when supplied with a template homologous to the flanking region, can insert a precise new sequence, which is the mechanism basis behind ‘replace’ in syllabus wording.",
          "In examination answers you should name clearly that the syllabus defines it as a form of genetic engineering, so it is not a separate field exempt from the usual biosafety, consent, and equity discussions that apply to rDNA work more broadly, even though in popular language ‘editing’ sounds minimal compared with ‘transgenic’.",
        ],
        commonMistake:
          "Treating all CRISPR uses as the same: screening versus genuine editing, or conflating editing in somatic cells with germline changes without context.",
        tags: ["gene-editing", "CRISPR"],
      },
      {
        id: "t19-1-d7",
        noteId: "t19-1",
        kind: "structured",
        difficulty: 3,
        marks: 8,
        stem: "Describe and explain the main steps and repeated cycle of the polymerase chain reaction (PCR) to clone a defined segment of double-stranded DNA in vitro, and state why a thermostable (Taq) DNA polymerase is used rather than a typical mesophilic polymerase from the body.",
        modelAnswerPoints: [
          "Reaction mix contains template DNA, two primers, deoxyribonucleotide triphosphates, buffer with Mg2+, and a thermostable DNA polymerase.",
          "Each cycle: denaturation (about 95 °C) separates strands; annealing (lower temperature) lets primers bind to complementary flanking sites; extension (e.g. 72 °C) where Taq extends primers 5' to 3' along each strand.",
          "Exponential (near-doubling) accumulation of the sequence between the primers for many cycles.",
          "Taq *DNA polymerase* from *Thermus aquaticus* is stable at the high denaturation temperature, so a single enzyme aliquot lasts through 25–40 cycles; mesophilic enzymes would be denatured in the first hot step and would need to be re-added in older manual ‘Klenow’-style methods.",
        ],
        workedSolution: [
          "PCR sets up a pair of short oligonucleotide primers that bind to opposite strands and face each other flanking a region of interest, so when a heat-stable *Taq* polymerase extends from each 3' end after annealing, the product of one strand becomes a template in the next cycle, leading to a geometric increase in a fragment whose ends are defined by the primer sequences.",
          "At the start, a high-temperature hold—often near 95 °C for tens of seconds—melts hydrogen bonds between the double helix, producing single-stranded templates; cooling to 50–65 °C depending on primer design allows sequence-specific annealing; a DNA polymerase with 5' to 3' polymerase activity then extends each hybridised primer, copying hundreds to thousands of bases in the elongation step before the next cycle returns to the denaturing temperature.",
          "Because each completed duplex made in one cycle can serve as a template in the next, the amount of the specific amplicon increases roughly as 2^n until reagents (primers, dNTPs) or polymerase processivity limit plateau, and unspecific or primer-dimer products may compete if the programme is not optimised, which is why annealing temperature and cycle number are part of the experimental design, though the syllabus stops at the mechanistic account.",
          "A mesophilic DNA polymerase from a mammal or typical bacterium is irreversibly unfolded after the first 95 °C step, so before *Taq* and similar enzymes were employed, each cycle would have required a fresh non-thermostable polymerase, making automation impractical; *Taq* survives the thermal cycling and therefore supports automated thermal cyclers, which is the specific teaching point the board expects.",
        ],
        commonMistake:
          "Omitting primers, confusing RNA polymerase with DNA polymerase, or saying the reaction happens without a template DNA; claiming Taq proofreads 3' to 5' (wild-type *Taq* does not, though some commercial mixes add proofreading).",
        tags: ["PCR", "Taq"],
      },
      {
        id: "t19-1-d8",
        noteId: "t19-1",
        kind: "structured",
        difficulty: 2,
        marks: 6,
        stem: "Describe how gel electrophoresis of DNA in an agarose gel separates fragments of different lengths, and how shorter and longer double-stranded fragments behave differently in the electric field in such a set-up.",
        modelAnswerPoints: [
          "Gel: porous matrix; loaded wells at one end; buffer conducts current; an electric field applied (DNA negatively charged at neutral pH).",
          "DNA migrates towards the anode; shorter fragments pass through the pores more easily and travel further in a given time than longer fragments, which tangle/retard more in the same matrix.",
          "Staining (e.g. with ethidium bromide or safe dyes) and UV imaging reveals band positions, each band a population of a given size.",
        ],
        workedSolution: [
          "Agarose, dissolved, poured, and solidified, forms a three-dimensional network of polysaccharide fibres in which the effective pore size depends on the percentage of agarose, with higher gels better resolving small fragments, into which a neutral or slightly basic buffer (such as TAE or TBS) is placed so DNA phosphate groups, deprotonated, give a net movement toward the positive electrode when a voltage (often tens to hundreds of volts) is applied for tens of minutes to hours depending on the length range.",
          "A linear double-stranded DNA helix, regardless of its sequence, has roughly a constant charge-to-mass ratio per base pair, so free solution mobility would be similar, but the gel is a sieving environment: a short fragment of a few hundred base pairs can thread a tortuous path quickly, whereas a multi-kilobase fragment has more physical interaction with the matrix and a lower apparent mobility, so a ladder of size standards allows estimation of unknown fragment length by position.",
          "After the run, intercalating dyes in routine teaching labs or fluorescent intercalation in some instruments reveal bands, each a population of one length, so PCR products, digested plasmid lanes, and genomic restriction patterns can be compared side by side, which is the practical use examiners want alongside the ‘longer = slower in the same gel’ phrasing.",
        ],
        commonMistake:
          "Saying ‘heavy DNA’ migrates more—mass alone is not the right vocabulary; it is the sieving and length. Confusing anode and cathode direction.",
        tags: ["gel", "electrophoresis"],
      },
      {
        id: "t19-1-d9",
        noteId: "t19-1",
        kind: "mcq",
        difficulty: 2,
        stem: "Which application best matches the use of a DNA microarray in genome analysis, as in the 9700 syllabus description?",
        options: [
          { id: "A", text: "Determining the complete linear DNA sequence of a whole chromosome in one gel lane." },
          { id: "B", text: "Hybridising fluorescently labelled sample nucleic acid to a grid of many immobilised probe sequences, to detect which sequences are present or to compare relative abundance (e.g. mRNA levels)." },
          { id: "C", text: "Cutting a genome into restriction fragments of exactly equal length for cloning." },
          { id: "D", text: "Separating all cellular proteins by isoelectric point on a 2D gel without nucleic acid involvement." },
        ],
        correctOptionId: "B",
        explanation:
          "Microarrays (chips) carry thousands to millions of short DNA features; labelled cDNA or DNA from a sample is hybridised so that complementary binding reports presence or, in expression work, the relative level of many transcripts in parallel, supporting genome and transcriptome-scale comparisons.",
        distractorRationale: {
          A: "Sequencing by synthesis or longer-read platforms resolve full chromosome sequence; microarrays are typically hybridisation-based, not full Sanger/NGS in one run from one lane alone.",
          C: "Restriction enzymes cut at specific sites; fragments are not all equal in length, and that process is not microarray technology.",
          D: "2D-PAGE is protein work; microarrays in this context are DNA-based for hybridisation, though protein microarrays are a different branch.",
        },
        tags: ["microarray", "mcq"],
      },
      {
        id: "t19-1-d10",
        noteId: "t19-1",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "Outline the benefits, for a researcher, of using public databases of nucleotide sequences, amino-acid sequences, and (where available) three-dimensional protein structures, rather than working only with locally generated Sanger or short-read data in isolation.",
        modelAnswerPoints: [
          "Comparing a new or candidate gene to entries identifies homologues, orthologues, and conserved protein domains, guiding functional hypotheses.",
          "Designing PCR primers, qPCR probes, and CRISPR guide RNAs is faster when the exact surrounding sequence and SNP data are in databases.",
          "Structures (or structure predictions stored alongside) help model binding sites, drug design, and interpretation of pathogenic missense changes.",
        ],
        workedSolution: [
          "A newly sequenced stretch can be used as a query in BLAST- or other alignment-based search tools against GenBank, Ensembl, or UniProt so that, within seconds, a student or researcher can see which organism carries the most similar exon structure, which conserved metal-binding residues might exist, and which disease alleles in humans have been deposited with phenotype annotations, which is the central benefit: contextualisation in all prior science.",
          "Reproducibility improves because primer pairs can be taken from a shared accession, not from a one-off printout; gene synthesis orders quote accession and coordinates; and collaboration across countries assumes everyone refers to the same build of a reference genome, which in practice is a database- and version-number culture.",
          "Where experimental crystal structures, cryo-EM, or high-confidence AlphaFold-style models are linked to sequence, rational mutagenesis, vaccine antigen design, and even patent searches become tractable, which is a fair outline answer at A-level without requiring deep bioinformatics, provided you name the idea that sequences and structures are shared resources, not one-lab private facts.",
        ],
        commonMistake:
          "Claiming the database “proves” uncharacterised ORFs will always be essential genes—databases are repositories and annotations can be wrong or updated.",
        tags: ["databases", "bioinformatics"],
      },
    ],
    flashcards: [
      { id: "t19-1-f1", noteId: "t19-1", difficulty: 1, front: "Define recombinant DNA (one sentence).", back: "DNA containing a new combination of genetic material, often from different sources, joined in vitro (e.g. plasmid + insert).", examPhrasing: "Define the term recombinant DNA.", tags: ["def"] },
      { id: "t19-1-f2", noteId: "t19-1", difficulty: 1, front: "What is cDNA, and from what was it made?", back: "Complementary DNA; synthesised in vitro (via reverse transcriptase) using mRNA as template—no introns in the mature spliced form.", examPhrasing: "Explain cDNA in genetic engineering.", tags: ["cDNA"] },
      { id: "t19-1-f3", noteId: "t19-1", difficulty: 2, front: "Restriction endonuclease: what does it do at a recognition site?", back: "Cuts both strands of dsDNA in a specific base sequence, often making sticky ends (or sometimes blunt).", examPhrasing: "State the role of restriction endonucleases in gene transfer.", tags: ["restriction"] },
      { id: "t19-1-f4", noteId: "t19-1", difficulty: 2, front: "DNA ligase: job after restriction cuts?", back: "Seals nicks, forming covalent phosphodiester links between 3' OH and 5' P to join vector and insert (after base-pairing of sticky ends).", examPhrasing: "Explain the role of DNA ligase in constructing recombinant plasmids.", tags: ["ligase"] },
      { id: "t19-1-f5", noteId: "t19-1", difficulty: 2, front: "Why is a *promoter* often transferred with a transgene into a new host?", back: "RNA polymerase and transcription factors bind at the promoter; without a compatible promoter, the coding region may not be transcribed in that species/tissue context.", examPhrasing: "Explain why a promoter may have to be transferred with the desired gene.", tags: ["promoter"] },
      { id: "t19-1-f6", noteId: "t19-1", difficulty: 3, front: "Gene editing (insert/delete/replace) vs adding a plasmid randomly—syllabus contrast.", back: "Gene editing targets specific genomic sites; classical random integration of a cassette can land in unknown places with variable expression/risks.", examPhrasing: "Explain that gene editing is a form of genetic engineering involving changes at specific sites.", tags: ["editing"] },
      { id: "t19-1-f7", noteId: "t19-1", difficulty: 3, front: "PCR: three temperatures in a cycle, one purpose each.", back: "High (~95 °C) melt strands; anneal primers at lower T; extend (~72 °C) with Taq copying template 5' to 3'.", examPhrasing: "Describe the steps in one PCR cycle.", tags: ["PCR"] },
      { id: "t19-1-f8", noteId: "t19-1", difficulty: 3, front: "Why *Taq* polymerase, not a human DNA pol, in PCR?", back: "Taq is thermostable; survives 95 °C each cycle. Mesophilic polymerases would denature and stop working (unless re-added every cycle, as in early manual methods).", examPhrasing: "Explain the need for a thermostable DNA polymerase in PCR.", tags: ["Taq"] },
      { id: "t19-1-f9", noteId: "t19-1", difficulty: 4, front: "Agarose gel: do shorter or longer dsDNA fragments travel farther in a given time (same % gel, same voltage)?", back: "Shorter fragments move farther (sieve more easily) toward the anode; longer fragments are retarded in the matrix.", examPhrasing: "Explain how gel electrophoresis separates DNA by length.", tags: ["gel"] },
      { id: "t19-1-f10", noteId: "t19-1", difficulty: 4, front: "Microarray: one-line purpose for gene-expression studies.", back: "Hybridise labelled cDNA to many probes to see which mRNAs (transcripts) are present and often compare relative levels between conditions.", examPhrasing: "Outline the use of microarrays in studies of gene expression.", tags: ["microarray"] },
    ],
  },
  "t19-2": {
    noteId: "t19-2",
    drills: [
      {
        id: "t19-2-d1",
        noteId: "t19-2",
        kind: "structured",
        difficulty: 1,
        marks: 7,
        stem: "Explain the main advantages, for treating human disease, of supplying a therapeutic protein that has been made by genetic engineering in bacteria, yeast, or mammalian cell culture, using the examples insulin, factor VIII, and the enzyme adenosine deaminase (ADA).",
        modelAnswerPoints: [
          "Recombinant human proteins are identical or close to the natural sequence, reducing immunological rejection compared with some animal-sourced products.",
          "Insulin: consistent supply, scalable fermentation, and reduced reliance on abattoir-derived pancreatic extracts with batch variability and immunogenicity issues.",
          "Factor VIII: enables haemophilia A patients to access clotting factor that would be very scarce and risky from human plasma alone.",
          "ADA: enzyme for severe combined immunodeficiency in some cases can be produced as a purified recombinant form for *PEG*–ADA–style or related supportive therapy, complementing (or, historically, prior to) gene-corrected cells depending on the programme taught.",
        ],
        workedSolution: [
          "Recombinant DNA technology allows a human gene, sometimes codon-optimised for a heterologous host, to be expressed in *E. coli*, yeast, or Chinese hamster ovary (CHO) cells under cGMP production so that a single, well-characterised master cell bank supplies unlimited batches of a protein with reduced risk of pathogen transmission compared with direct blood-product pooling from thousands of donors, which is the first economic and safety advantage examiners like stated explicitly.",
          "Human pro-insulin, expressed in bacteria or in safer hosts after processing to mature insulin, replaced much of the earlier bovine and porcine sources for many patients, giving dose-standardised vials, fewer allergic responses to non-human sequences, and meeting global diabetes burden without depending on animal pancreas supply chains, which in teaching are the main comparative points.",
          "Recombinant factor VIII concentrates, often extended half-life, allow people with haemophilia A to self-infuse to prevent or treat bleeds, whereas plasma fractionation without recombinant production could never have scaled to prevalence with the same pathogen control story after HIV and hepatitis scares in historical pooled plasma.",
          "Adenosine deaminase, deficient in a subset of severe combined immunodeficiency, can be given as a purified (often PEGylated) enzyme produced recombinantly to detoxify dATP until longer-term gene- or cell-based curative options are in place, illustrating how ‘enzyme-replacement’ logic applies when the board lists ADA alongside the classic hormones—your answer need not be the complete clinical story if you keep the syllabic pattern: rDNA, scale, safety, and sequence fidelity.",
        ],
        commonMistake:
          "Saying ‘no immune response to recombinant human proteins at all’—rarely true (adjuvants, glycosylation differences); claim reduced risk, not total absence.",
        tags: ["recombinant-proteins", "therapeutics"],
      },
      {
        id: "t19-2-d2",
        noteId: "t19-2",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "Outline the advantages, for the individual and for relatives, of genetic screening that can identify pathogenic or high-risk alleles in *BRCA1* and *BRCA2* in a family with a strong pattern of early-onset breast and ovarian cancer.",
        modelAnswerPoints: [
          "Informed management: more intensive breast MRI/mammography, risk-reducing surgery, and chemo-prevention discussion for carriers.",
          "Cascade testing: relatives at 50% prior risk can be tested, clarifying who needs surveillance and who is at population risk, reducing anxiety and unnecessary screening for some.",
          "Reproductive options: preimplantation genetic testing or prenatal information where legally and ethically available—outline only at syllabus level.",
        ],
        workedSolution: [
          "A woman who carries a high-penetrance *BRCA* pathogenic variant faces substantially elevated lifetime risks of breast and epithelial ovarian cancer, so a positive test result, usually combined with a consistent family story and histopathology, allows personalised intensive surveillance to catch tumours at earlier, more treatable stages and discussion of prophylactic oophorectomy or mastectomy with realistic quantitative risk, which is a clear advantage over discovering cancer only through symptoms.",
          "Because the alleles are inherited in a Mendelian dominant pattern, each first-degree relative has a one-half chance; systematic cascade testing in the family, after the index case consents, can identify or reassure many members with one or two test rounds, avoiding unnecessary high-cost imaging for *true* negatives in branches that did not inherit the family mutation.",
          "In examination ethics sections you can note that the same information is psychologically and socially burdensome, but the specific advantage the syllabus requires is the prevention and early-detection power when action paths exist, not a Pollyanna claim that the test removes all uncertainty about cancer overall.",
        ],
        commonMistake:
          "Saying a positive test means cancer is inevitable, or that *BRCA* explains all familial cancer—other genes and non-genetic risk factors also matter.",
        tags: ["BRCA", "screening"],
      },
      {
        id: "t19-2-d3",
        noteId: "t19-2",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "Outline the potential advantages, and a major limitation, of pre-symptomatic genetic screening for Huntington’s disease, an autosomal dominant neurodegenerative disorder for which a trinucle-repeat expansion test exists.",
        modelAnswerPoints: [
          "Advantage: life planning—career, family, long-term care insurance discussion, and participation in research or trials; relatives can be informed.",
          "Limitation: no curative treatment yet, so a positive result may cause serious psychological harm and discrimination concerns without a therapy that alters the natural history—fair discussion required.",
        ],
        workedSolution: [
          "A child of an affected parent is at 50% risk, and a DNA test can, in many healthcare systems, determine whether the expanded CAG repeat crossing the pathogenic threshold is present long before involuntary movement or cognitive decline, which allows the person, if they choose to test after counselling, to make reproductive decisions, career timing, and advance directives in a more informed way than mid-life diagnosis alone, which the syllabus can accept as a stated advantage in outline answers though individual cases are morally heavy.",
          "In contrast to conditions where prophylactic surgery cuts risk dramatically, symptomatic treatment for HD remains supportive; therefore the major ethical tension the board expects in balance is the psychological burden, possible insurance or employment discrimination, and the irreversibility of knowing one will develop a late-onset fatal disease when no course-altering treatment is guaranteed, which is why pre-test genetic counselling and autonomy are emphasised in mark schemes for ‘discuss’ items.",
        ],
        commonMistake:
          "Omitting that HD is dominant with near-full penetrance in teaching—confusing with recessive carrier screening logic.",
        tags: ["Huntington", "ethics"],
      },
      {
        id: "t19-2-d4",
        noteId: "t19-2",
        kind: "structured",
        difficulty: 1,
        marks: 4,
        stem: "Outline the advantages, for a couple already known to be carriers of a recessive *CFTR* disease allele, of carrier or prenatal genetic screening in relation to cystic fibrosis risk to offspring.",
        modelAnswerPoints: [
          "Recessive inheritance: 25% chance each pregnancy for affected child if both are carriers; screening clarifies whether the foetus/embryo carries two pathogenic *CFTR* alleles in many protocols.",
          "Advantages: prepare for a child who may need multi-organ CF care, consider termination in jurisdictions where allowed, or use IVF with preimplantation testing—outline in neutral syllabus language.",
        ],
        workedSolution: [
          "Cystic fibrosis follows autosomal recessive inheritance, so if both members of a couple are *CFTR* variant carriers, each conception has a one-quarter risk of a child with two loss-of-function alleles, who can present with meconium ileus, pancreatic insufficiency, and chronic pulmonary disease, which is why expanded carrier screening in pregnancy or preconception may be offered, recognising that consent models vary by country.",
          "A positive or high-risk prenatal test after chorionic villus sampling or amniocentesis allows parents, within law and their values, to plan neonatal support, modify delivery location, and access specialist centres early, or to use reproductive technologies that select against affected embryos, which are the main ‘advantage’ story at A-level, always paired in longer answers with the ethical right not to test and the danger of eugenic interpretation if stated carelessly.",
        ],
        commonMistake:
          "Calling CF a dominant or X-linked disorder, or giving an incorrect 50% child risk in the carrier × carrier case.",
        tags: ["cystic-fibrosis", "screening"],
      },
      {
        id: "t19-2-d5",
        noteId: "t19-2",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "Describe the principle, at outline level, of ex vivo gene therapy for severe combined immunodeficiency (SCID) due to *ADA* deficiency, using a viral vector to deliver a working *ADA* gene into a patient’s own haematopoietic stem or progenitor cells before re-infusion.",
        modelAnswerPoints: [
          "Autologous cells avoid acute immunological rejection of the graft; CD34+ cells from bone marrow or blood are collected.",
          "Vector (often retroviral or lentiviral) integrates or persists so long-lived precursors can pass a functional *ADA* allele to lymphocyte lineages as they renew.",
          "Re-infused cells repopulate with functional lymphocytes, restoring adaptive immunity, though conditioning and leukaemia risk in early trials are teaching caveats in some examiners’ notes (outline only as nuance, not a required detail).",
        ],
        workedSolution: [
          "Lymphoid precursors in bone marrow that lack a working ADA build up toxic dATP, blocking normal T and B cell maturation, so the therapeutic idea is to insert a DNA copy of a healthy *ADA* gene into a patient’s autologous haematopoietic stem or early progenitor cells so the patient’s own immune system, after myeloablative or reduced-intensity conditioning in many protocols, reconstitutes from edited precursors, avoiding an allogeneic transplant while still engrafting a renewable source of the enzyme in lymphocytes.",
      "A replication-defective gammaretro- or lentivirus carries the cDNA, infects the *ex vivo* cell culture, and the cells are quality-checked, then re-infused intravenously; long-term *in vivo* expression depends on integration into a chromosomal locus in long-lived HSC, which is the mechanism story the syllabus can accept when named at ‘outline’ level.",
      "The classroom contrast is to enzyme injection alone: the gene-corrected clone continuously supplies ADA from within, whereas bolus PEG-ADA wanes, which is a fair one-line ‘advantage of gene therapy in principle’ when the question is framed to SCID, provided you do not overclaim ‘cure for all’ because immune reconstitution can be partial and clonal events require monitoring in historical trials.",
        ],
        commonMistake:
          "Saying a random allogeneic donor always gives perfect HLA match without immunosuppression, or conflating *ADA*-SCID with X-SCID in every line without naming the defect.",
        tags: ["SCID", "gene-therapy"],
      },
      {
        id: "t19-2-d6",
        noteId: "t19-2",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "Outline, at syllabus level, how in vivo or ex vivo delivery of a functional gene into retinal cells (for example in certain inherited monogenic retinal degenerations) can slow or stabilise loss of photoreceptors, and one reason delivery to the small volume of the eye is sometimes considered a favourable early target in gene therapy research.",
        modelAnswerPoints: [
          "Mutations in photoreceptor- or RPE-expressed genes cause progressive cell death; vectors (often AAV) deliver a cDNA to surviving cells, expressing a protein to preserve structure/function.",
          "Immune privilege and compartmentalisation of the vitreous–retina interface allow local transgene delivery with less systemic vector spread than a whole-body infusion, though immune responses in the eye are not zero; syllabus ‘outline’ = local treatment idea.",
        ],
        workedSolution: [
          "Leber congenital amaurosis due to biallelic *RPE65* loss and many other RHO- or CEP290-related monogenic blinding conditions share a final common pathway: photoreceptors or supporting retinal pigment epithelium (RPE) fail structurally, so a vector injected subretinally or into the vitreous can transduce the remaining RPE or cells that can be rescued, supplying a cDNA for the missing isomerase, structural protein, or channel so visual signalling and outer-segment maintenance improve or stabilise in paediatric and adult patients who still have a cell population left to transduce.",
      "The eye is a small, enclosed site where low vector doses in microlitres can achieve a high local copy number, enabling capsid choice (often AAV serotypes) with reduced systemic biodistribution, and the blood–retina barrier reduces immune surveillance in some ways compared with liver infusion, which is a standard teaching line for “why the eye is an early clinical success story in gene therapy,” always coupled with a honest note that not every patient responds equally and re-treatment is limited by anti-capsid immunity.",
        ],
        commonMistake:
          "Claiming a single injection can reverse total blindness in every genetic diagnosis—reality is more graded and age/stage dependent.",
        tags: ["retina", "gene-therapy"],
      },
      {
        id: "t19-2-d7",
        noteId: "t19-2",
        kind: "structured",
        difficulty: 3,
        marks: 7,
        stem: "Discuss social and ethical considerations that arise from population-wide or employer-driven genetic screening programmes, including handling of data, false positives, and family implications.",
        modelAnswerPoints: [
          "Autonomy: informed consent, genetic counselling, and the right not to know in predictive disorders.",
          "Privacy: who stores sequence data, access by insurers or employers, re-identification risk from de-identified databases, cross-border data flows.",
          "Psychological: anxiety, stigmatisation, blame within families, and ‘survivor guilt’ in tested relatives; false positives/negatives and variant of uncertain significance (VUS) problem.",
        ],
        workedSolution: [
          "A society that can cheaply read millions of loci from one cheek swab must decide if testing is an opt-in medical act or a de facto public-health surveillance act, and whether minors should be tested for late-onset conditions only when a therapy exists, all of which the syllabus’s ‘discuss’ verb expects as balanced, not a polemic, starting from respect for the person’s choice after counselling, including the right not to learn Huntington status despite family pressure, because irreversible information can alter life insurance eligibility and self-concept in democracies with imperfect regulation.",
      "Storing and sharing genome data creates cybersecurity and discrimination risks: a breach could expose not only the tested individual but, through allele sharing, the genotypes of relatives, which is a distinct harm from typical medical-record leaks; employers in many jurisdictions are barred from using genetic data, yet enforcement gaps and international transfer of data to private testing companies complicate the story.",
      "On the laboratory side, rare variants, incomplete penetrance, and laboratory-to-laboratory discordance in variant calling for cancer predisposition (for example) can create false reassurances or unnecessary surgery if clinicians act without a multidisciplinary tumour-board review, which is a practical failure mode examiners can reward when a candidate writes ‘quality assurance and re-testing’ in an ethics question rather than only emotional language.",
        ],
        commonMistake:
          "Arguing that screening is always obviously good; or that ‘nothing can go wrong’ with knowledge—both are underdeveloped at A-level compared with balanced lists.",
        tags: ["ethics", "screening"],
      },
      {
        id: "t19-2-d8",
        noteId: "t19-2",
        kind: "structured",
        difficulty: 3,
        marks: 7,
        stem: "Discuss social and ethical considerations that apply to offering somatic and germline (heritable) gene therapy in human medicine, including access, long-term follow-up, and the distinction between treatment of existing patients and genetic modification of future generations.",
        modelAnswerPoints: [
          "Somatic: intended to change non-reproductive body cells only; if off-target or oncogenic, harm is to the individual under treatment—still serious; consent is more straightforward than embryo editing.",
          "Germline (embryo or gamete): changes would be inherited, affecting descendants who cannot consent; most jurisdictions prohibit or highly restrict, except research contexts, because the risk:benefit to society and unknown long-term pleiotropy are contested.",
          "Equity: who pays? Rich-country advantage if pricing is per dose in rare disease; also selection pressure if some traits are ‘engineered’ for non-medical reasons, which the syllabus flags as a society-level fear.",
        ],
        workedSolution: [
          "Somatic ex vivo and *in vivo* delivery of a viral or lipid nanoparticle vector to liver, T cells, or retina aims to change disease in the treated person, and ethical review focuses on proportionality of risk from insertional mutagenesis and immune activation, availability of a natural-history comparator, and long-term registries, which is a tractable, patient-centred framework because no unconceived child’s genome is altered, though manufacturing inequality still leaves some countries with only supportive care, which is a fair social-justice line.",
      "By contrast, intentional germline ‘correction’ of a pathogenic allele in a one-cell zygote or in gametogenic precursors would, if the edit were efficient and on-target, remove the need for the next generation to repeat therapy, but also fixes that edit for all time in that lineage, including unknown off-targets and unplanned epigenetic readouts, and removes the unborn’s opportunity to an open future, which is the philosophical core of the near-global caution against clinical germline work after CRISPR babies reporting.",
      "Even where somatic therapy is unobjectionable in principle, price per patient for ultra-rare monogenic conditions can outstrip many national insurance budgets, while parallel conversations about somatic ‘enhancement’ in athletes or for cosmetic height risk creating new forms of social stratification, which you should not invent novel law but you may outline as a tension the syllabus can reward when linked to the words ‘ethics and social’.",
        ],
        commonMistake:
          "Treating all gene therapy as the same as germline; or dismissing all gene therapy as ‘playing God’ without analytical depth.",
        tags: ["ethics", "germline"],
      },
      {
        id: "t19-2-d9",
        noteId: "t19-2",
        kind: "mcq",
        difficulty: 2,
        stem: "Which scenario best matches *advantage* of pre-symptomatic carrier screening of a *recessive* disease allele in an unaffected partner when their spouse is a known carrier?",
        options: [
          { id: "A", text: "It guarantees a healthy child in every future pregnancy with no need for any further test." },
          { id: "B", text: "It can reveal whether the second partner is also a carrier, allowing accurate recurrence-risk counselling and informed reproductive choices, including more targeted prenatal or preimplantation testing if both are carriers." },
          { id: "C", text: "It removes the need for a paediatrician after birth, because the baby cannot be affected if one parent is not a carrier." },
          { id: "D", text: "It proves the couple’s children will be carriers but never affected, because the disease is recessive." },
        ],
        correctOptionId: "B",
        explanation:
          "For recessive conditions, the risk to a child of being ‘affected’ is high *only* if *both* parents carry a pathogenic allele; one partner not being a carrier (if truly cleared for the same gene) can reduce risk, but the advantage of the second’s carrier screen is the quantitative risk and option space when both or neither carry variants, which option B states.",
        distractorRationale: {
          A: "A negative carrier test reduces risk but is not a guarantee in every case (laboratory error, not testing all genes, *de novo* events for some disorders, etc.); ‘guarantee’ is too strong.",
          C: "Children may need paediatric care for unrelated issues; and carrier status of one locus is not a substitute for all neonatal care planning.",
          D: "If the tested partner is a carrier, children can be carriers; if both were carriers, children could be affected; option D mis-states the Mendelian risk.",
        },
        tags: ["MCQ", "recessive"],
      },
      {
        id: "t19-2-d10",
        noteId: "t19-2",
        kind: "mcq",
        difficulty: 2,
        stem: "Which statement best characterises a *disadvantage* of mandatory population-wide adult genetic carrier screening in a democracy, from an ethics perspective, relative to a voluntary, counselled programme?",
        options: [
          { id: "A", text: "Mandatory programmes remove all need for follow-up with health professionals." },
          { id: "B", text: "Coercion and lack of true informed consent, plus pressure on individuals who do not want to know their genotype, especially for late-onset disorders or secondary findings." },
          { id: "C", text: "They always make insurance cheaper and fairer, so are ethically unproblematic." },
          { id: "D", text: "They can never detect diseases early, by definition, because screening is not diagnostic." },
        ],
        correctOptionId: "B",
        explanation:
          "Autonomy, voluntariness, and time for counselling are central to ethical practice in genetics; mandatory programmes, even if public-health ‘efficient’, can violate these principles and stigmatise those who test positive, especially in poorly regulated data environments.",
        distractorRationale: {
          A: "Any positive screen requires genetic counselling, confirmatory testing, and often specialist referral—*more* not less HCP time.",
          C: "Insurers in many countries may *discriminate* on genetic data if allowed; and ‘fairer’ is contestable, not a universal outcome.",
          D: "Screening can *lead* to early diagnosis; and many programmes aim at risk, not a binary early clinical detection story—D is muddled.",
        },
        tags: ["ethics", "mcq"],
      },
    ],
    flashcards: [
      { id: "t19-2-f1", noteId: "t19-2", difficulty: 1, front: "One advantage of *recombinant* human insulin over animal-sourced in teaching.", back: "Consistent supply, lower pathogen load from large pooled animal batches, and human sequence (fewer non-human-sequence-based immune issues).", examPhrasing: "Explain the advantages of recombinant human insulin in treating disease.", tags: ["insulin"] },
      { id: "t19-2-f2", noteId: "t19-2", difficulty: 1, front: "Why recombinant factor VIII matters in haemophilia A (one line).", back: "Scalable, high-purity clotting factor from cell culture, reducing historical reliance on pathogen-laden pooled human plasma in many settings.", examPhrasing: "State an advantage of recombinant factor VIII for haemophilia A treatment.", tags: ["factorVIII"] },
      { id: "t19-2-f3", noteId: "t19-2", difficulty: 2, front: "*BRCA* screening: one benefit for a carrier.", back: "Intensified surveillance and risk-reduction options for breast/ovarian cancer; cascade testing in relatives to clarify who is at high risk.", examPhrasing: "Outline advantages of genetic screening using BRCA1/2 in familial breast cancer risk.", tags: ["BRCA"] },
      { id: "t19-2-f4", noteId: "t19-2", difficulty: 2, front: "Huntington test pre-symptomatic: main ethical ‘cost’ in one sentence.", back: "No curative treatment yet—knowing a fatal late-onset allele early can cause severe distress and discrimination; autonomy and counselling are critical.", examPhrasing: "Outline ethical issues in Huntington’s disease screening.", tags: ["Huntington"] },
      { id: "t19-2-f5", noteId: "t19-2", difficulty: 2, front: "CF: inheritance pattern + carrier couple risk to affected child.", back: "Autosomal recessive; if both are carriers, 25% risk per pregnancy of affected (two *CFTR* pathogenic alleles), 50% carrier, 25% non-carrier (if the alleles are clearly assigned).", examPhrasing: "Outline the advantages of CF carrier screening in at-risk families.", tags: ["CF"] },
      { id: "t19-2-f6", noteId: "t19-2", difficulty: 3, front: "Ex vivo *ADA* gene therapy: whose cells, and what is done to them (outline)?", back: "Autologous haematopoietic stem/progenitor cells; *ADA* cDNA in a vector; grown/transduced, then re-infused to repopulate immune lineages with functional ADA.", examPhrasing: "Outline gene therapy in severe combined immunodeficiency (ADA deficiency).", tags: ["SCID"] },
      { id: "t19-2-f7", noteId: "t19-2", difficulty: 3, front: "Why is the eye an attractive target for *some* in vivo gene therapies?", back: "Compartment: small, local, often subretinal or vitreal delivery; AAV in common approved uses; can slow degeneration with remaining cells to transduce; less systemic vector load than some routes.", examPhrasing: "Outline how inherited eye diseases can be treated with gene therapy in principle.", tags: ["retina"] },
      { id: "t19-2-f8", noteId: "t19-2", difficulty: 4, front: "Two ethical issues with genetic *screening* data in employment or life insurance (short).", back: "Discrimination; loss of insurability; also family privacy, re-identification, need for antidiscrimination law—any two in balance.", examPhrasing: "Discuss ethical issues of genetic screening in society.", tags: ["ethics"] },
      { id: "t19-2-f9", noteId: "t19-2", difficulty: 4, front: "Somatic vs germline gene therapy: one-line distinction examiners use.", back: "Somatic changes body cells, not expected to be inherited; germline (illegal in many places for humans) alters the heritable genome of embryos/gametes, affecting future generations who did not consent.", examPhrasing: "Discuss the ethics of gene therapy, including heritable change.", tags: ["germline"] },
      { id: "t19-2-f10", noteId: "t19-2", difficulty: 5, front: "One public-health equity issue with *expensive* rare-disease somatic gene therapy.", back: "Access: low/middle-income countries and uninsured patients may be excluded, widening health inequity unless price and global distribution are managed.", examPhrasing: "Discuss the social and ethical issues of using gene therapy in medicine.", tags: ["access"] },
    ],
  },
  "t19-3": {
    noteId: "t19-3",
    drills: [
      {
        id: "t19-3-d1",
        noteId: "t19-3",
        kind: "structured",
        difficulty: 2,
        marks: 6,
        stem: "Explain how the genetic engineering of faster-growing, larger Atlantic *salmon* that reach market size in fewer months than conventional farmed *salmon* is claimed to help meet rising global demand for high-quality animal protein, and one environmental risk that regulators monitor when approving such an organism.",
        modelAnswerPoints: [
          "Productivity: shorter production cycle, fewer feed and facility costs per unit mass, possibly smaller carbon footprint *per kilogram* if growth efficiency improves—outline only.",
          "Food-security framing: a stable supply of a familiar finfish in regions where catch fisheries are over-exploited, provided farming is well managed.",
          "Environmental risk: escape of transgenic individuals could interact with wild populations through competition or, if breeding occurred, introgression, changing ecosystem dynamics; net-pen and river interactions require regulation.",
        ],
        workedSolution: [
          "A growth-hormone–regulated transgene, combined with a suitable promoter, can keep Atlantic salmon in a more sustained juvenile growth state so farmed lines reach a harvest size in a shorter calendar window than unmodified contemporary lines, which, if the claims hold at commercial scale, increases tonnes of fillet from the same on-growing tank volume per year, directly addressing a protein gap without new ocean catch pressure from wild stocks alone.",
      "In global nutrition debates, a faster cycle also potentially lowers capital tied up in inventory and can reduce the energy per unit protein if the feed conversion ratio improves, which is a fair economic/food-system answer when the question asks to ‘improve quality and productivity’ in the board’s phrasing, without pretending every sustainability metric automatically improves, because more intensive feeding can have water-quality and feed-fishery impacts elsewhere.",
      "The usual regulatory package therefore demands containment, often sterile triploid female-only brood strategies or land-based recirculating systems, and post-market monitoring, because a net-pen break during a storm could release modified fish that might compete with or hybridise in river mouths with conspecifics, a concrete environmental anxiety examiners can credit alongside the productivity story.",
        ],
        commonMistake:
          "Saying transgenic *salmon* are automatically ‘bigger in every case’ with no health trade-offs—cite productivity claims carefully; or ignoring escape risk entirely.",
        tags: ["GM-salmon", "productivity"],
      },
      {
        id: "t19-3-d2",
        noteId: "t19-3",
        kind: "structured",
        difficulty: 1,
        marks: 5,
        stem: "Explain, with reference to agricultural weed control, the advantage to farmers and to yield stability in some regions of growing herbicide-tolerant (for example, glyphosate-tolerant) *soybean* lines produced by genetic engineering, and one agronomic or ecological risk often cited by critics of heavy herbicide use.",
        modelAnswerPoints: [
          "Simplified low-till or no-till systems: the crop survives broad-spectrum post-emergent herbicide that kills most dicot and other competing weeds, reducing ploughing and soil erosion in many rotations.",
      "Weed control improves yield in weed-infested land by reducing competition for light, water, and minerals.",
      "Risk: strong selection for herbicide-resistant weed biotypes in the landscape; also drift or off-target application harming neighbouring biodiversity if stewardship is poor.",
        ],
        workedSolution: [
          "A bacterial CP4 EPSP synthase allele or similar, expressed from a constitutive plant promoter, confers insensitivity to glyphosate, so a farmer can spray a single broad-spectrum treatment after crop emergence, replacing multiple mechanical or selective chemistry passes, which in teaching examples saves diesel, time, and topsoil in reduced-till systems, while clearing aggressive weeds that would otherwise depress *Glycine max* pod fill.",
      "Where labour is scarce, such reliability can be yield-stabilising because fewer emergency rescue herbicide events are needed, which is a second-order ‘productivity and quality of harvest’ line when fewer green weed seeds end up in the load delivered to a crusher, improving oil and meal specifications.",
      "Ecologically, the same post-emergent chemistry applied repeatedly in monocultures selects for *Amaranthus* and other problem weeds that accrue their own target-site or metabolic resistance alleles, which then demand higher rates, tank-mixes, or older chemistry, a resistance treadmill critics contrast with the early simplicity narrative, and drift onto non-target plants around field margins is a second teaching risk when the syllabus asks for balance.",
        ],
        commonMistake:
          "Claiming glyphosate is harmless in all environmental contexts, or that HT soy eliminates all weeding labour—perennial weeds, volunteers, and resistance still matter.",
        tags: ["soybean", "herbicide"],
      },
      {
        id: "t19-3-d3",
        noteId: "t19-3",
        kind: "structured",
        difficulty: 2,
        marks: 6,
        stem: "Explain how *Bt* (*Bacillus thuringiensis*) toxin transgenes in insect-resistant *cotton* can reduce the need for broad-spectrum insecticide sprays, improve lint yield in pest-heavy seasons, and still raise concerns about long-term *evolution* of pest resistance and effects on non-target *Lepidoptera*.",
        modelAnswerPoints: [
          "Cry proteins bind midgut receptors in susceptible pest larvae, forming pores; tissue-specific/constitutive plant promoters drive expression, especially in bolls where *Heliothis* / *Pectinophora* and similar bollworms feed.",
      "Fewer indiscriminate organophosphate or pyrethroid sprays → lower direct farmworker exposure, less non-target insect kill in the field, and, when pressure is bollworm-dominated, higher yield/quality of fibre.",
      "Refuge and stacked traits needed to slow resistance; non-target moths in shared habitats, and biodiversity in mosaics, remain debate points; outline without needing local species lists.",
        ],
        workedSolution: [
          "Bacillus thuringiensis naturally encodes *cry* and *cyt* delta-endotoxins, which in solubilised form after ingestion bind brush-border aminopeptidases in insect midgut cells of susceptible *Lepidoptera* species, creating pores that depolarise the epithelium and lead to stoppage of feeding and death, a mechanism narrow enough in principle that, compared with organophosphates that also hit beneficial hymenopterans in a cotton canopy, a plant-expressed *cry1Ac* or *cry2Ab* cassette can be more targeted when properly deployed.",
      "Where bollworms and budworms are yield-limiting, season-long (or boll stage–boosted) expression in transgenic *Gossypium hirsutum* lines can reduce the number of broad-spectrum spray passes, with conventional farmers sometimes describing improved beneficial insect returns and more predictable picking dates, all of which are fair ‘improved productivity/quality of farmed’ examples when the board wants GM *cotton* specifically.",
      "Yet strong continuous selection on *Helicoverpa* populations drives alleles in receptor loci that reduce Cry binding, which is why regulators mandate non-Bt *refuge* areas or use *pyramided* events with two distinct toxins, and why conservationists raise concern for rare wild silk moths in overlapping ranges—tensions that a balanced answer must mention rather than a one-sided 'Bt is perfect' claim.",
        ],
        commonMistake:
          "Saying *Bt* cotton is insecticide-free; auxin, fungicide, and at times secondary sprays are still used; and resistance management is a real issue.",
        tags: ["cotton", "Bt"],
      },
      {
        id: "t19-3-d4",
        noteId: "t19-3",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "Explain, in the language of the 9700 syllabus, how the genetic engineering of farmed *animals* and *crop* plants, including the three examples in this topic, is argued to help address the global *demand* for *food* by improving the quality and the productivity of production systems, without claiming that GMOs are the *only* solution.",
        modelAnswerPoints: [
          "Productivity: more kilograms of food per unit land, time, and sometimes water when traits reduce losses to pests, drought, or slow growth, subject to good agronomy.",
      "Quality: e.g. higher protein/energy in animal products, or cleaner grains with less mycotoxin from insect damage, depending on the trait, stated cautiously.",
      "Global context: not a single silver bullet; must sit alongside better storage, food waste reduction, and equitable distribution, which a fair student answer concedes in one line.",
        ],
        workedSolution: [
          "The board’s phrasing is explicitly about helping to *solve* or *alleviate* a growing human population’s caloric and protein need by *biological* change in the organisms we farm, so faster *salmon* shortens the interval between smolt and harvest, *Roundup* Ready soy and similar can stabilise output on weed-prone land, and *Bt* cotton (not eaten directly in many countries) frees productive land elsewhere in rotation systems to grow food crops when bollworms are no longer a chronic ceiling on lint yield, which together illustrate multiple branches of the same 'productivity' argument in different taxa and markets.",
      "Quality, in a defensible A-level way, is about fewer aflatoxin-laden maize cobs in insect-damaged years (parallel examples), or about fish with predictable fat profiles when growth is more controlled, always avoiding absolute 'always healthier' marketing language unless the study design is in the stem, because the syllabus is content with mechanism-level, not company-pamphlet, claims.",
      "Any mature paragraph should, however, note that entitlements, post-harvest loss, and meat-heavy diets in rich countries also shape hunger, so genetic engineering in elite hybrid seed lines, while a powerful tool, is one component of a food-security portfolio rather than a solo fix, which examiners in ‘discuss’ items sometimes reward with a mark for intellectual honesty.",
        ],
        commonMistake:
          "Saying all GMOs *automatically* increase yield in every year—drought, markets, and soil still matter; yield is a distribution, not a constant.",
        tags: ["food-security", "overview"],
      },
      {
        id: "t19-3-d5",
        noteId: "t19-3",
        kind: "structured",
        difficulty: 3,
        marks: 7,
        stem: "Discuss ethical and social implications of marketing genetically modified food ingredients (for example *soy* oil, *cotton*seed cake, and animal products fed GM crops) in countries where *consumer choice* and *regulatory* frameworks differ, including labelling, trust in agencies, and international trade frictions.",
        modelAnswerPoints: [
          "Right to know: mandatory vs voluntary *GM* / ‘derived from’ labelling, costs for small companies, and whether consumers can meaningfully parse technical notices.",
      "Equity: higher seed prices and IP restrictions on re-saved seed may disadvantage smallholder farmers in some regions relative to the industrial seed + herbicide package.",
      "Trust: if regulators are perceived as close to industry, public rejection may exceed scientific risk estimates, affecting exports (e.g. EU vs major GM producers).",
        ],
        workedSolution: [
          "A jurisdiction that does not require explicit ‘produced with genetic engineering’ text on a bottle of *soy* oil, on the ground that highly refined end-products contain no detectable rDNA, still faces consumers who, for non-scientific or precautionary worldviews, want process-based labels, so policy splits between the ‘substantial equivalence’ view of some authorities and a ‘right to moral avoidance’ view of some NGOs, a genuine social cleavage the syllabus can reward when you describe both without mockery, because the ethics are about autonomy and information, not only acute toxicity data.",
      "In developing economies, a cotton farmer who adopts *Bt* seeds and pays technology fees may out-yield a neighbour, creating visible inequality and debt if season finances fail, while golden rice–style public-good traits raise different justice questions (who funded whom), which is the social-justice line examiners can credit under ‘implications in food *production*’ rather than a narrow 'lab rat' worry alone.",
      "International trade: if a major importer (such as a cautious regional bloc) rejects certain events not approved in its list, a ship carrying bulk maize with low-level adventitious presence can be held at a port, causing farmer losses in the exporting country and diplomatic strain, a concrete social consequence that pairs well in answers with a sentence on harmonised *Codex* safety standards versus national sovereignty, without needing the student to be a WTO expert.",
        ],
        commonMistake:
          "Conflating every GM with ‘unsafe’; the syllabus *discuss* item wants balanced ethical threads, not only hazard.",
        tags: ["ethics", "labelling"],
      },
      {
        id: "t19-3-d6",
        noteId: "t19-3",
        kind: "structured",
        difficulty: 3,
        marks: 6,
        stem: "Discuss environmental-ethical issues raised by large-scale release of *GM* crops, including *gene flow* to wild relatives, effects on in-field biodiversity, and the evolution of *resistant* pests and herbicide-tolerant weeds, using teaching-level examples, not a specific region’s data requirement.",
        modelAnswerPoints: [
          "Outcrossing: *Brassica*, *Glycine*, or other species where compatible wild types exist; transgenes could, rarely, move into feral or weedy lineages, shifting fitness.",
      "In-field: simplified rotations with heavy herbicide use may deplete floral resources for generalist pollinators relative to weedy, mixed farming in some baselines, though the causality is multifactorial.",
      "Selection: *Bt* and HT traits select strongly on pest and weed genomes, requiring *integrated pest management* and refuge strategies—ethical to future farmers if we exhaust tools.",
        ],
        workedSolution: [
          "The possibility that a *bar* (phosphinothricin) or *cp4* transgene in an oilseed *Brassica napus* outcrossing to a weedy *Brassica rapa* could give an herbicide-tolerant feral form is a concrete lesson used in some curricula to illustrate the difference between a contained lab experiment and a continent-scale deployment that cannot be re-called if seeds disperse, which is an environmental-ethics 'open-air experiment on landscapes' line some thinkers object to, even if acute human toxicity from food is not the primary worry, because the irreversibility and unknown ecosystem coupling worry those who value procedural caution.",
      "Biodiversity arguments are messy: a *Bt* maize field may have fewer *Lepidopteran* folivores, changing bird diet items at field edges, while heavy insecticide in non-GM alternatives might be worse, so a sophisticated answer juxtaposes 'net harm vs counterfactual' without pretending any simple winner, and notes that *Bt* plus refuge is a regulatory *ethical* promise to the future that resistance is being slowed intentionally.",
      "Herbicide-tolerant *soy* expansion into previously marginal *cerrado* or tropical forest, where land-use *change* is the bigger lever than the GM trait *per se*, is also a deforestation ethics issue some campaigns blend with GMO branding, and a fair 'discuss' line is to tease that apart so marker sees you understand the bundle of 'green' concerns, not a single 'Frankenfood' slur only.",
        ],
        commonMistake:
          "Pretending gene flow is impossible from self-pollinating species—still possible at low rate; or ignoring IPM in resistance answers.",
        tags: ["environment", "resistance"],
      },
      {
        id: "t19-3-d7",
        noteId: "t19-3",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "Discuss the tension between *intellectual property* on engineered crop genes and the food-security *argument* that staple crops should be freely shareable for the poorest, including how patent-protected *events* and seed *contracts* can affect farmer *autonomy* and *research* access in social-ethical terms.",
        modelAnswerPoints: [
          "Private investment in deregulation and breeding needs return via patents, licences, and tech fees—supports innovation but concentrates control.",
      "Contractual terms may forbid re-planting saved seed, criminalising a traditional practice, which is a cultural and justice issue, not just economics.",
      "Public-sector, humanitarian, and open-licence (e.g. some biofortified lines) are proposed countermeasures, without guaranteeing adoption.",
        ],
        workedSolution: [
          "Multinational seed firms justify multi-year, multi-site safety dossiers to regulators by pointing to the large fixed cost, which is defensible in industrial economics, yet critics argue a patent thicket on stacked-trait *soy* or maize *events* can leave small public breeders unable to cross elite germplasm, slowing adaptation to local blights, which is a *social* harm couched in food-system resilience language rather than a narrow consumer-rights point.",
      "Where subsistence maize culture expects bin annual seed from last season’s cobs, a licensed bag with a no-resow clause, enforced through litigation in some high-profile cases, is experienced as a loss of agricultural sovereignty, even if the average yield is higher, so the ethical debate is 'who decides the rules of farming', not a simple yield maximisation, which is a fair paragraph for 19.3 when the past paper asks for “ethical *and social* implications of GMOs in *food* production*”.",
        ],
        commonMistake:
          "Saying *all* GM seed is illegal to save; some jurisdictions differ; focus on the principle of IP vs tradition.",
        tags: ["IP", "ethics"],
      },
      {
        id: "t19-3-d8",
        noteId: "t19-3",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "Outline social concerns about the *concentration* of the global seed and agrochemical *market* if a small number of firms own many transgenic and conventional varieties, in terms of farmer bargaining power, price, and the resilience of a diverse seed supply, without naming specific companies as villains.",
        modelAnswerPoints: [
          "Oligopoly can raise input costs and limit variety choice if most elite genetics are in few portfolios.",
      "Economic lock-in: farmers depend on a matching herbicide + seed package, reducing local alternatives.",
      "Biodiversity of crop landraces: concern that landraces are displaced by a few high-yield hybrids, losing alleles for future breeding—social *and* agro-ecology point.",
        ],
        workedSolution: [
          "A concentration ratio where a handful of companies license both the glyphosate formula *and* the herbicide-tolerant germplasm can leave growers with little effective competition on price, which is a competition-law and rural-politics issue beyond toxicology, and one that the syllabus 'social' bullet can support when a student says farmers may be price-takers on both chemical and bag seed, reducing resilience if one supplier delays delivery in a short planting window (weather risk in monsoon agriculture).",
      "Parallel social anxiety is the homogenisation of the landscape, where successful hybrids displace many local landraces, eroding a genetic reservoir and cultural food diversity that NGOs sometimes defend under 'biocultural rights', a phrase examiners are not required but may smile at if the mechanism is right; the core point is that economic structure colours ethical feelings about *GM* not because every GM is a monopoly, but because *who owns the trait map* is salient in modern agriculture.",
        ],
        commonMistake:
          "Conflating all hybrid seeds with *GM*—many high-yield hybrids are non-GMO, but the market-structure story is related.",
        tags: ["markets", "concentration"],
      },
      {
        id: "t19-3-d9",
        noteId: "t19-3",
        kind: "mcq",
        difficulty: 1,
        stem: "Which effect is a *stated* syllabus-level advantage of *Bt* insect-resistant *cotton* in many pest pressure situations?",
        options: [
          { id: "A", text: "It eliminates the need to rotate *cotton* with non-*cotton* crops for any agronomic or soil-fertility reason." },
          { id: "B", text: "It can reduce reliance on some broad-spectrum foliar insecticide sprays targeted at bollworms, with potential benefits for on-farm non-target insect communities relative to some spray-heavy regimes." },
          { id: "C", text: "It makes *cotton* lint edible for humans as a major staple carbohydrate." },
          { id: "D", text: "It always prevents the evolution of any pest *resistance* to the *Bt* toxin, because the toxin is ‘natural’." },
        ],
        correctOptionId: "B",
        explanation:
          "The 9700 story emphasises *Bt* plant-expressed *Cry* proteins as an alternative to some chemical sprays, improving yield/quality; rotation and IRM (refuge, pyramids) remain necessary, and *Bt* does not end evolution of resistance or replace all agronomy.",
        distractorRationale: {
          A: "Rotation still matters for soil *Fusarium* / nematode management, fertility, and other issues—*Bt* is not a universal agronomic free pass.",
          C: "Lint and fibre; not a dietary staple; seed oil/cake is separate story.",
          D: "Resistance to *Bt* in target pests is a documented, strongly selected phenomenon; *natural* does not mean unevolvable.",
        },
        tags: ["Bt", "mcq"],
      },
      {
        id: "t19-3-d10",
        noteId: "t19-3",
        kind: "mcq",
        difficulty: 2,
        stem: "In the ethics of GM *food* for human consumption, which concern is *primarily* a **social/justice** issue rather than a direct acute-toxicity hypothesis?",
        options: [
          { id: "A", text: "Whether the protein encoded by a well-studied *cry* transgene is folded identically in plant plastids, which a regulatory dossier can measure." },
          { id: "B", text: "Whether rural smallholders in some regions can *afford* or *access* approved GM seed, herbicide partners, and credit compared with wealthier commercial farms—equity, not a stomach-poison claim." },
          { id: "C", text: "Whether a plant-expressed *cry* mRNA is translated by plant ribosomes at all, which a Western blot in trials addresses." },
          { id: "D", text: "Whether random chemical contaminants from industrial accidents enter the *field*, which is not uniquely a GMO issue." },
        ],
        correctOptionId: "B",
        explanation:
          "The syllabus’s ‘social and ethical’ bullet alongside GM food is served by *access, equity, justice, and power in food systems* as well as *safety*; option B is the best match for a *social* question.",
        distractorRationale: {
          A: "A molecular consistency question, part of a safety/characterisation file, not primarily social justice in the way B is.",
          C: "Expression proof is a lab science/registration issue; not a justice framing.",
          D: "True as far as it goes, but is generic to agriculture, not the distinctive ethics bundle for GMOs; B is more targeted.",
        },
        tags: ["ethics", "mcq"],
      },
    ],
    flashcards: [
      { id: "t19-3-f1", noteId: "t19-3", difficulty: 1, front: "GM *salmon*: one productivity reason (syllabus).", back: "Faster time to market weight / more efficient use of the growth window (hormone pathway transgene) → more protein from the same capital per year, if well contained.", examPhrasing: "Explain the use of GM farmed *salmon* in meeting food demand (outline).", tags: ["salmon"] },
      { id: "t19-3-f2", noteId: "t19-3", difficulty: 1, front: "Herbicide-tolerant *soybean*: one farmer-facing advantage in weed control (short).", back: "Post-emergent spray that kills most weeds but not the *cp4* / tolerant crop → simpler weed control, often with reduced ploughing (context-dependent).", examPhrasing: "Explain herbicide resistance in *soy* for productivity.", tags: ["soy"] },
      { id: "t19-3-f3", noteId: "t19-3", difficulty: 2, front: "Insect-resistant *cotton* (*Bt*): mechanism in caterpillars (one line).", back: "*Cry* (or *Vip*) protein ingested, activated in the alkaline gut, binds specific receptors, forms pores, kills or stops feeding in susceptible *Lepidoptera*—often fewer broad-spectrum sprays *when* the pest suite matches.", examPhrasing: "Explain *Bt* cotton in productivity of farming.", tags: ["cotton"] },
      { id: "t19-3-f4", noteId: "t19-3", difficulty: 2, front: "Two categories of *environmental* risk often paired with *GM* *salmon* escape.", back: "Competition with / predation on wild *salmon*; possible genetic introgression in rivers where *salmon* can hybridise; pathogen/parasite load differences if farmed escapees are net pens—*any two sensible ones* in teaching.", examPhrasing: "Outline concerns if GM *salmon* enter wild ecosystems.", tags: ["escape"] },
      { id: "t19-3-f5", noteId: "t19-3", difficulty: 2, front: "Why HT crops can select *resistant* weeds (concept).", back: "Repeated use of the same mode-of-action chemistry selects for alleles in local weed metapopulation that allow survival—'superweeds' are strong herbicide *resistance*, not transgenic *plants* themselves.", examPhrasing: "Discuss a downside of herbicide-tolerant *soy* in agriculture.", tags: ["resistance"] },
      { id: "t19-3-f6", noteId: "t19-3", difficulty: 3, front: "GMO *food* ethics: labelling (autonomy) in one sentence.", back: "Some consumers want process-based *GM* labels for moral, religious, or precautionary reasons even when safety is accepted—conflicts with 'substantial equivalence' labelling policy in some countries.", examPhrasing: "Discuss ethical and social issues of *GM* *food*.", tags: ["labelling"] },
      { id: "t19-3-f7", noteId: "t19-3", difficulty: 3, front: "Patented GM seed: one social-justice *tension* (short).", back: "Tech fee + *no* second-generation seed culture may displace a subsistence re-sow tradition, concentrating benefit with the licensor; raises questions of *who controls food systems*.", examPhrasing: "Discuss the social and ethical issues of *GMO* *food* production.", tags: ["IP"] },
      { id: "t19-3-f8", noteId: "t19-3", difficulty: 3, front: "Gene flow: why some oppose open-field *GM* on ‘irreversibility’ grounds (outline).", back: "Pollen or seed *escape* is hard to *un-release*; transgenes, if outcross, may persist in feral/weed lineages, which is a *precaution* argument beyond acute human toxicity of the meal *today*.", examPhrasing: "Discuss the environmental-ethical *issues* of *GM* *crops*.", tags: ["gene-flow"] },
      { id: "t19-3-f9", noteId: "t19-3", difficulty: 4, front: "International trade: one ethical tension when major importers and exporters differ in *event* *approval*.", back: "Low-level *adventitious* presence in bulk shipments can *reject* a cargo—economic harm to farmers, diplomatic strain—aside from a clean safety narrative on a single locus, which is a *social* *consequence* of *regulatory* *fragmentation*.", examPhrasing: "Discuss social and ethical *issues* in *GMO* *food* *trade*.", tags: ["trade"] },
      { id: "t19-3-f10", noteId: "t19-3", difficulty: 4, front: "Food security: one sentence *why* *GMO* *alone* is *not* the full answer.", back: "Access, *poverty*, *losses* in storage, and *diet* *equity* matter; *GMO* *raises* *yield* *ceilings* *in* *some* *systems* *but* *does* *not* *distribute* *calories* *fairly* *by* *itself*.", examPhrasing: "Explain how *GE* *may* *help* *meet* *global* *food* *demand* (balanced).", tags: ["food-security"] },
    ],
  },
};
