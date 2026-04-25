import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 9 — subtopics 9.1-9.3 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC9_DRAFTS: Record<string, NoteDraft> = {
  "t9-1": {
    noteId: "t9-1",
    syllabusNotes: [
      {
        id: "period3-overview-structure-change",
        title: "Period 3 overview: how structure changes across the period",
        paragraphs: [
          "Period 3 runs from sodium to argon. Across this period, the type of structure changes from giant metallic (Na, Mg, Al) to giant molecular/covalent network (Si), then to simple molecular substances (P4, S8, Cl2) and finally monatomic argon.",
          "Because physical properties depend strongly on structure and bonding, there is no single smooth trend in melting point or electrical conductivity across all of Period 3. Instead, each property must be interpreted by linking each element to its bonding and structure.",
          "Atomic radius decreases across Period 3 because nuclear charge increases while added electrons enter the same principal shell, so shielding changes less than nuclear attraction.",
        ],
      },
      {
        id: "atomic-and-ionic-radius-periodicity",
        title: "Atomic radius and ionic radius periodicity",
        paragraphs: [
          "Atomic radius decreases from Na to Cl because proton number increases and electrons are added to the same shell, so effective nuclear attraction pulls the outer electrons closer. Argon is usually treated separately because it is a noble gas with different radius definitions in some data tables.",
          "For ionic radii, cations are smaller than their atoms because electrons are removed and, for Na+, Mg2+ and Al3+, the outer shell is lost. Within this isoelectronic set (10 electrons), radius decreases from Na+ to Al3+ as nuclear charge increases.",
          "Anions such as P3-, S2- and Cl- are larger than their atoms because extra electrons increase electron-electron repulsion. Within the isoelectronic set P3-/S2-/Cl- (18 electrons), radius decreases from P3- to Cl- with increasing nuclear charge.",
          "When comparing ionic sizes, first check whether ions are cations or anions and whether they are isoelectronic; direct comparison without this check is often invalid.",
        ],
      },
      {
        id: "melting-point-across-period3",
        title: "Melting point trend across Period 3",
        paragraphs: [
          "From Na to Al, melting point generally rises because metallic bonding becomes stronger: cation charge increases, ionic radius decreases, and more delocalised electrons are available per atom. This increases electrostatic attraction in the metallic lattice.",
          "Silicon has a very high melting point because it has a giant molecular (covalent network) structure. Melting requires breaking many strong Si-Si covalent bonds, so much energy is needed.",
          "A large drop occurs from Si to P4 because phosphorus is simple molecular; melting only overcomes intermolecular forces between P4 molecules.",
          "Sulfur (S8) has higher melting point than phosphorus (P4) because larger molecules have stronger London dispersion forces. Chlorine (Cl2) has lower melting point than sulfur because Cl2 molecules are smaller and less polarisable than S8.",
          "Argon has the lowest melting point among these because it is monatomic and has only very weak instantaneous dipole-induced dipole attractions.",
        ],
      },
      {
        id: "electrical-conductivity-across-period3",
        title: "Electrical conductivity trend across Period 3",
        paragraphs: [
          "Na, Mg and Al conduct electricity because they have delocalised electrons in giant metallic lattices. Conductivity generally increases across these three as the number density of delocalised electrons increases.",
          "Silicon is a semiconductor: it has a giant covalent network and does not conduct like metals at room temperature, but conductivity increases with temperature as more charge carriers are generated.",
          "Phosphorus, sulfur, chlorine and argon are poor conductors because they are simple molecular or monatomic substances with no mobile ions or delocalised electrons.",
          "So conductivity shows a marked transition from good conductors (metals) to non-conductors (non-metals), with silicon showing intermediate semiconductor behaviour.",
        ],
      },
      {
        id: "periodicity-summary-for-physical-properties",
        title: "Interpreting periodicity qualitatively",
        paragraphs: [
          "The key examination skill is to state the periodic pattern and then justify it using bonding and structure for each region of the period.",
          "Atomic radius shows a clear periodic decrease across the period. Melting point and conductivity show region-based periodicity that tracks structure changes, not a single monotonic line.",
          "High-scoring explanations therefore combine trend description and bonding-based reasoning rather than listing isolated values.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Most marks are lost when candidates quote trends without linking them to structure and bonding in each part of Period 3.",
      items: [
        "Stating a single smooth melting-point trend across Na to Ar and ignoring the silicon peak and Si to P4 drop.",
        "Saying silicon is metallic because it forms a giant structure; silicon is giant covalent and is a semiconductor.",
        "Comparing ionic radii without checking whether ions are isoelectronic or whether they are cations versus anions.",
        "Explaining conductivity in simple molecular substances using 'free electrons'; these species do not have mobile delocalised electrons.",
        "Describing sulfur and phosphorus as giant structures; both are simple molecular in standard Period 3 allotropes (S8 and P4).",
      ],
    },
    workedExamples: [
      {
        id: "t9-1-ex1",
        title: "Explaining melting points from structure",
        problem: [
          "Explain why the melting point rises from Na to Al, is highest at Si, then falls sharply at P.",
        ],
        solution: [
          "From Na to Al, all three are giant metallic lattices. Metallic bonding strengthens because cation charge increases, atomic/ionic size decreases, and more delocalised electrons contribute to attraction.",
          "Silicon has a giant covalent network. Melting requires breaking many strong Si-Si covalent bonds, so very high energy is needed, giving the highest melting point in Period 3.",
          "Phosphorus exists as P4 molecules. On melting, only intermolecular forces are overcome, which need much less energy than breaking giant-lattice bonds, so melting point drops sharply after silicon.",
        ],
      },
      {
        id: "t9-1-ex2",
        title: "Ionic radius comparison using isoelectronic logic",
        problem: ["Put Na+, Mg2+, Al3+ in order of increasing ionic radius and explain."],
        solution: [
          "Na+, Mg2+ and Al3+ are isoelectronic (each has 10 electrons).",
          "In an isoelectronic series, greater nuclear charge pulls the same electron cloud closer, so radius decreases as proton number increases.",
          "Proton numbers are Na 11, Mg 12, Al 13. Therefore increasing ionic radius is Al3+ < Mg2+ < Na+.",
        ],
      },
      {
        id: "t9-1-ex3",
        title: "Conductivity pattern across Period 3",
        problem: [
          "Describe and explain the electrical conductivity trend from Na to Ar, including silicon.",
        ],
        solution: [
          "Na, Mg and Al are good conductors due to mobile delocalised electrons in metallic lattices; conductivity is highest among these for Al in a simple qualitative model.",
          "Silicon is not a metal conductor at room temperature but is a semiconductor because its giant covalent structure has limited charge carriers unless thermally promoted.",
          "P4, S8, Cl2 and Ar are non-conductors because they are simple molecular or monatomic with no mobile charged particles.",
          "So the periodic pattern is a transition from metallic conduction to non-conduction, with silicon intermediate as a semiconductor.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t9-1-st1",
        question:
          "State the qualitative trend in atomic radius across Period 3 and explain it in terms of nuclear charge and shielding.",
        modelAnswer: [
          "Atomic radius decreases across Period 3 because proton number increases while electrons are added to the same shell, so shielding does not increase enough to offset increased nuclear attraction.",
        ],
      },
      {
        id: "t9-1-st2",
        question:
          "Why does silicon have a much higher melting point than phosphorus?",
        modelAnswer: [
          "Silicon has a giant covalent network and melting requires breaking many strong covalent bonds.",
          "Phosphorus is simple molecular (P4), so melting only overcomes intermolecular forces, which are much weaker.",
        ],
      },
      {
        id: "t9-1-st3",
        question:
          "State and explain the order of electrical conductivity for Na, Si and Cl2.",
        modelAnswer: [
          "Na is the best conductor because it is metallic with delocalised electrons.",
          "Si is intermediate (semiconductor) due to giant covalent bonding with limited charge carriers.",
          "Cl2 is a non-conductor because it is simple molecular with no mobile ions or delocalised electrons.",
        ],
      },
      {
        id: "t9-1-st4",
        question:
          "For the isoelectronic ions P3-, S2- and Cl-, give the order of decreasing ionic radius.",
        modelAnswer: [
          "Decreasing ionic radius: P3- > S2- > Cl-.",
          "All have 18 electrons; radius decreases as nuclear charge increases from P to Cl.",
        ],
      },
      {
        id: "t9-1-st5",
        question:
          "Describe one feature of periodicity in Period 3 melting points that shows it is not a simple monotonic trend.",
        modelAnswer: [
          "Melting point increases from Na to Al, peaks very high at Si, then drops sharply to P4 and varies at lower values for S8, Cl2 and Ar; this reflects structure changes across the period.",
        ],
      },
    ],
  },

  "t9-2": {
    noteId: "t9-2",
    syllabusNotes: [
      {
        id: "period3-reactions-elements-with-oxygen-chlorine-water",
        title: "Reactions of Period 3 elements with oxygen, chlorine and water",
        paragraphs: [
          "With oxygen, Period 3 elements form a sequence of oxides that shifts from ionic/basic to covalent/acidic character. Required products include Na2O, MgO, Al2O3, P4O10 and SO2 (with SO3 also important later for acid-base discussion).",
          "With chlorine, required chlorides include NaCl, MgCl2, AlCl3, SiCl4 and PCl5. Bonding shifts from mainly ionic on the left to covalent molecular on the right, with AlCl3 showing significant covalent character.",
          "With water, sodium reacts vigorously to give sodium hydroxide and hydrogen: 2Na + 2H2O -> 2NaOH + H2.",
          "Magnesium reacts very slowly with cold water to form Mg(OH)2 and H2, but reacts more readily with steam to form MgO and H2.",
        ],
      },
      {
        id: "oxidation-number-trend-oxides-chlorides",
        title: "Oxidation-number variation in Period 3 oxides and chlorides",
        paragraphs: [
          "In oxides from Na2O to SO3, oxidation number of the Period 3 element increases across the period: Na +1, Mg +2, Al +3, Si +4 (in SiO2), P +5 (in P4O10), S +4 in SO2 and +6 in SO3.",
          "In chlorides NaCl, MgCl2, AlCl3, SiCl4 and PCl5, oxidation number also rises from +1 to +5.",
          "This trend follows the increasing number of valence electrons available for bonding as you move across Period 3.",
        ],
      },
      {
        id: "oxides-with-water-and-ph",
        title: "Reactions of Period 3 oxides with water and resulting pH",
        paragraphs: [
          "Na2O reacts vigorously with water to form NaOH, giving strongly alkaline solution: Na2O + H2O -> 2NaOH.",
          "MgO reacts with water only slightly to form sparingly soluble Mg(OH)2, giving a weakly alkaline mixture: MgO + H2O -> Mg(OH)2.",
          "Al2O3 and SiO2 do not react with water under normal conditions.",
          "P4O10 reacts with water to form phosphoric(V) acid: P4O10 + 6H2O -> 4H3PO4, giving acidic solution.",
          "SO2 dissolves to form sulfurous acid, H2SO3(aq) (often represented through hydration and ionisation steps), giving acidic solution. SO3 reacts with water to form sulfuric acid: SO3 + H2O -> H2SO4, giving strongly acidic solution.",
        ],
      },
      {
        id: "acid-base-behaviour-oxides-and-hydroxides",
        title: "Acid-base behaviour of oxides and hydroxides, including amphoterism",
        paragraphs: [
          "Na2O and MgO are basic oxides. They react with acids to form salts and water. NaOH is a strong base; Mg(OH)2 is a weakly soluble base.",
          "Al2O3 and Al(OH)3 are amphoteric: they react with acids and with bases. With acids they act as bases; with aqueous sodium hydroxide they act as acids to form aluminate-containing solutions.",
          "SiO2 is an acidic oxide (weakly acidic in behaviour) that reacts with strong bases but not with water or most acids.",
          "P4O10, SO2 and SO3 are acidic oxides; they react with bases to form salts (and water where relevant).",
          "Across Period 3, oxide character changes from basic to amphoteric to acidic, tracking increasing covalent character and electronegativity.",
        ],
      },
      {
        id: "chlorides-with-water-and-ph",
        title: "Hydrolysis of Period 3 chlorides and pH outcomes",
        paragraphs: [
          "NaCl dissolves in water with essentially neutral pH (about 7) because it is a salt of strong acid and strong base and does not hydrolyse significantly.",
          "MgCl2 dissolves to give a mildly acidic solution because hydrated Mg2+ undergoes slight hydrolysis.",
          "AlCl3 hydrolyses more strongly to give acidic solution; in simple equation form: AlCl3 + 3H2O -> Al(OH)3 + 3HCl (or equivalent ionic hydrolysis description).",
          "SiCl4 reacts vigorously with water: SiCl4 + 2H2O -> SiO2 + 4HCl, giving acidic products and steamy HCl fumes.",
          "PCl5 reacts with water, ultimately producing phosphoric(V) acid and HCl (often via POCl3 intermediate): PCl5 + 4H2O -> H3PO4 + 5HCl.",
        ],
      },
      {
        id: "bonding-electronegativity-trend-explanations",
        title: "Explaining trends using bonding and electronegativity",
        paragraphs: [
          "From Na to P, electronegativity of the Period 3 element increases, so oxides and chlorides change from more ionic to more covalent.",
          "Ionic oxides contain oxide ions, O2-, which are strongly basic in water and with acids. Covalent oxides react as molecular acid anhydrides, often producing acids in water.",
          "Covalent chlorides hydrolyse because the central atom is electron-deficient and susceptible to nucleophilic attack by water; ionic chlorides tend to dissolve without extensive covalent hydrolysis.",
          "Observed physical and chemical properties (melting point, conductivity, hydrolysis behaviour, pH) therefore allow deduction of likely bonding type in these compounds.",
        ],
      },
      {
        id: "bonding-deduction-from-observations",
        title: "Suggesting bonding type from observations",
        paragraphs: [
          "A high-melting solid that conducts when molten and forms alkaline solution from oxide ions suggests ionic bonding (for example Na2O, MgO, NaCl, MgCl2).",
          "A low-boiling liquid chloride that fumes in moist air and hydrolyses rapidly suggests covalent molecular bonding (for example SiCl4).",
          "A high-melting oxide that is insoluble, non-conducting and reacts with both acids and bases suggests giant ionic/covalent with amphoteric behaviour (for example Al2O3).",
          "Exam answers should use observed data and then justify suggested bonding with electronegativity and structure arguments.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "This subtopic is equation-heavy and concept-heavy; candidates lose marks by giving trends without equations or equations without explanation.",
      items: [
        "Writing incorrect formulas such as P2O5 instead of the required molecular form P4O10 in this syllabus context.",
        "Assuming all chlorides simply dissolve; SiCl4 and PCl5 hydrolyse, producing acidic solutions/fumes.",
        "Calling Al2O3 purely basic or purely acidic; it is amphoteric and must be shown reacting with both acids and bases.",
        "Failing to link oxide/chloride trend explanations to changing bonding character and electronegativity across Period 3.",
        "Giving pH descriptions opposite to chemistry (for example claiming Na2O in water gives acidic solution).",
        "Suggesting SiO2 reacts with water to form silicic acid under standard classroom conditions; it does not react with water in this context.",
      ],
    },
    workedExamples: [
      {
        id: "t9-2-ex1",
        title: "Equations for required element reactions",
        problem: [
          "Write balanced equations for: (a) sodium with oxygen to form Na2O, (b) magnesium with chlorine to form MgCl2, and (c) sodium with water.",
        ],
        solution: [
          "For sodium with oxygen (forming oxide): 4Na + O2 -> 2Na2O.",
          "For magnesium with chlorine: Mg + Cl2 -> MgCl2.",
          "For sodium with water: 2Na + 2H2O -> 2NaOH + H2.",
          "These equations reflect the required products and correct stoichiometry for Topic 9.",
        ],
      },
      {
        id: "t9-2-ex2",
        title: "Acid-base and amphoteric equations",
        problem: [
          "Show with equations that Al2O3 is amphoteric using one reaction with acid and one reaction with aqueous sodium hydroxide.",
        ],
        solution: [
          "With acid (acts as base): Al2O3 + 6HCl -> 2AlCl3 + 3H2O.",
          "With aqueous sodium hydroxide (acts as acid): Al2O3 + 2NaOH + 3H2O -> 2Na[Al(OH)4].",
          "Because Al2O3 reacts with both acids and bases, it is amphoteric.",
        ],
      },
      {
        id: "t9-2-ex3",
        title: "Hydrolysis and pH comparison of chlorides",
        problem: [
          "Compare what happens when NaCl and SiCl4 are added to water, including equations and likely pH.",
        ],
        solution: [
          "NaCl dissolves to give hydrated ions without significant hydrolysis: NaCl(s) -> Na+(aq) + Cl-(aq). Solution is approximately neutral (pH around 7).",
          "SiCl4 reacts vigorously with water: SiCl4 + 2H2O -> SiO2 + 4HCl.",
          "Because HCl is produced, the resulting mixture is strongly acidic, and steamy fumes are observed.",
          "The contrast reflects largely ionic behaviour for NaCl versus covalent molecular hydrolysis for SiCl4.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t9-2-st1",
        question:
          "State the oxidation numbers of the Period 3 element in Na2O, Al2O3, SiO2, P4O10, SO2 and SO3.",
        modelAnswer: [
          "Na in Na2O is +1; Al in Al2O3 is +3; Si in SiO2 is +4; P in P4O10 is +5; S in SO2 is +4; S in SO3 is +6.",
        ],
      },
      {
        id: "t9-2-st2",
        question:
          "Write equations for reactions of Na2O and SO3 with water, and state likely pH of each resulting solution.",
        modelAnswer: [
          "Na2O + H2O -> 2NaOH, giving strongly alkaline solution (high pH).",
          "SO3 + H2O -> H2SO4, giving strongly acidic solution (low pH).",
        ],
      },
      {
        id: "t9-2-st3",
        question:
          "Describe the trend in acid-base character of Period 3 oxides from Na2O to SO3.",
        modelAnswer: [
          "Oxides change from basic (Na2O, MgO) through amphoteric (Al2O3) to acidic (SiO2 weakly acidic, then strongly acidic molecular oxides P4O10, SO2, SO3).",
        ],
      },
      {
        id: "t9-2-st4",
        question:
          "Why do chlorides become more prone to hydrolysis from NaCl/MgCl2 to SiCl4/PCl5?",
        modelAnswer: [
          "Across Period 3, bonding becomes more covalent and central atoms in molecular chlorides are more electron-deficient, so water can attack and hydrolyse them. More ionic chlorides mainly dissolve rather than hydrolyse extensively.",
        ],
      },
      {
        id: "t9-2-st5",
        question:
          "A chloride is a low-boiling liquid, does not conduct electricity, and fumes in moist air to give acidic products. Suggest bonding type and one likely Period 3 chloride.",
        modelAnswer: [
          "The chloride is likely covalent molecular because of low boiling point, non-conductivity, and hydrolysis/fuming behaviour.",
          "A likely example is SiCl4 (or PCl5 in conditions where molecular behaviour is considered).",
        ],
      },
    ],
  },

  "t9-3": {
    noteId: "t9-3",
    syllabusNotes: [
      {
        id: "using-group-trends-to-predict-properties",
        title: "Predicting properties from group periodicity",
        paragraphs: [
          "Elements in the same group have the same valence-electron pattern, so they show similar chemical behaviour. This allows prediction of characteristic reactions and compound formulas for unfamiliar elements.",
          "For Group 1, predict +1 ions, vigorous reaction with water, and basic oxides/hydroxides. For Group 2, predict +2 ions, less vigorous water reactions (down-group increase), and basic oxides/hydroxides.",
          "For Group 17, predict diatomic molecules, coloured non-metals, decreasing oxidising power down the group, and -1 halide ions.",
          "For Group 18, predict monatomic, very low-reactivity gases with low boiling points that increase down the group due to stronger London dispersion forces.",
        ],
      },
      {
        id: "predicting-unknown-element-position",
        title: "Deducing position from physical and chemical evidence",
        paragraphs: [
          "To deduce position of an unknown element, combine several clues: conductivity, melting point, reaction with water/oxygen/chlorine, oxide/chloride acid-base character, and ion charges.",
          "A metal that forms M2O and MCl and reacts vigorously with water is likely Group 1. A metal forming MO and MCl2 suggests Group 2. A non-metal forming volatile covalent chlorides and acidic oxides may lie toward the right side of a period.",
          "Atomic radius and ionisation-energy trends can support placement: lower ionisation energy and larger radius indicate lower positions in a group.",
          "No single test is usually decisive; reliable deduction comes from pattern matching across multiple periodic properties.",
        ],
      },
      {
        id: "identity-deduction-workflow",
        title: "Workflow for identifying unknown elements",
        paragraphs: [
          "Step 1: classify as metal, metalloid, or non-metal from conductivity and physical appearance/reactivity.",
          "Step 2: infer likely group from formulae of common compounds (especially oxide and chloride stoichiometry) and ion charge.",
          "Step 3: infer likely period from relative reactivity, atomic size trends, and physical-state clues (for example halogen volatility or alkali metal vigor).",
          "Step 4: test candidate identities against all provided data, not just one observation.",
          "This approach supports both prediction of characteristic properties and deduction of nature, position and identity, as required by the syllabus outcomes.",
        ],
      },
      {
        id: "examples-of-cross-topic-periodicity-use",
        title: "Applying periodicity beyond memorised lists",
        paragraphs: [
          "If given an element that forms an amphoteric oxide and a +3 chloride, you should consider Group 13-like behaviour (for example aluminium region) and expect intermediate metallic/covalent character.",
          "If given a diatomic non-metal that displaces bromide ions but not chloride ions, periodic oxidising-power trends point to chlorine-like behaviour.",
          "If an element forms a +2 ion and its sulfate is sparingly soluble while hydroxide solubility increases down the group, Group 2 trend logic helps narrow identity.",
          "These inference tasks reward understanding of periodic relationships, not recall of isolated facts.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "In deduction questions, examiners reward coherent chain-of-evidence reasoning; unsupported guesses usually score poorly even if identity happens to be correct.",
      items: [
        "Using one data point only (for example one oxide formula) to assign full identity without cross-checking other observations.",
        "Confusing group and period trends, such as applying across-period oxidation-power changes to down-group halogen comparisons.",
        "Ignoring whether compounds indicate ionic or covalent bonding when positioning unknowns in the table.",
        "Assigning exact identity when evidence supports only group or period-level deduction.",
        "Forgetting that periodicity gives characteristic patterns, so anomalies must be justified rather than ignored.",
      ],
    },
    workedExamples: [
      {
        id: "t9-3-ex1",
        title: "Predicting group properties from position",
        problem: [
          "Element X is in Group 2 and Period 4. Predict (a) ion charge, (b) oxide formula, and (c) qualitative reaction with water compared with magnesium.",
        ],
        solution: [
          "Group 2 elements typically form X2+ ions, so ion charge is +2.",
          "With O2-, charge balance gives oxide formula XO.",
          "Period 4 Group 2 corresponds to calcium-like behaviour, which reacts with cold water more readily than magnesium. So X is predicted to react faster with water than Mg, producing X(OH)2 and H2.",
        ],
      },
      {
        id: "t9-3-ex2",
        title: "Deducing nature and position from compounds",
        problem: [
          "An unknown element Y forms YCl2, YO, and Y(OH)2. The metal conducts electricity and reacts with dilute acids to release hydrogen. Deduce the likely nature and position of Y.",
        ],
        solution: [
          "Y behaves as a metal (conductive, reacts with acids to produce H2).",
          "Compound stoichiometry YCl2, YO and Y(OH)2 indicates a stable +2 oxidation state.",
          "This strongly suggests Group 2 positioning (or a metal with dominant +2 chemistry in similar region).",
          "Given typical periodicity in foundational questions, the most likely placement is Group 2 of the Periodic Table.",
        ],
      },
      {
        id: "t9-3-ex3",
        title: "Identifying a halogen from displacement evidence",
        problem: [
          "A brown solution of bromide ions is treated with gas Z and turns orange due to bromine formation. The same gas Z does not oxidise chloride ions. Use periodicity to identify Z.",
        ],
        solution: [
          "Displacing bromide to bromine means Z is a stronger oxidising agent than bromine.",
          "Failure to oxidise chloride means Z is weaker oxidising agent than chlorine.",
          "In Group 17, oxidising power decreases down the group: Cl2 > Br2 > I2.",
          "So Z fits chlorine-like behaviour relative to bromide/chloride tests in classic displacement context; gas Z is chlorine.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t9-3-st1",
        question:
          "An unknown element forms an oxide E2O and chloride ECl. What ion charge is suggested, and which group is most likely?",
        modelAnswer: [
          "E is likely to form E+ ions, suggesting Group 1, because E2O and ECl correspond to +1 oxidation state compounds with O2- and Cl-.",
        ],
      },
      {
        id: "t9-3-st2",
        question:
          "State two characteristic chemical properties you would predict for an element in Group 17.",
        modelAnswer: [
          "Group 17 elements form -1 halide ions and act as oxidising agents in displacement reactions.",
          "They also form diatomic molecules and react with metals to form ionic halides.",
        ],
      },
      {
        id: "t9-3-st3",
        question:
          "How can oxide and chloride formulas help deduce an unknown element's position in the Periodic Table?",
        modelAnswer: [
          "The stoichiometry reveals common oxidation state/valence electron pattern, which points to likely group. For example MCl2 and MO imply +2 chemistry typical of Group 2-like elements.",
        ],
      },
      {
        id: "t9-3-st4",
        question:
          "An unknown non-metal has low boiling point, exists as diatomic molecules, and its oxidising power is weaker than chlorine but stronger than iodine. Identify it.",
        modelAnswer: [
          "It is bromine, based on Group 17 periodic trend in oxidising power (Cl2 > Br2 > I2) and simple molecular diatomic character.",
        ],
      },
      {
        id: "t9-3-st5",
        question:
          "Why is it better to use multiple observations rather than one test when identifying an unknown element by periodicity?",
        modelAnswer: [
          "Different elements can share one property, but the full combination of physical and chemical properties forms a stronger periodic pattern match.",
          "Using multiple observations reduces misidentification and supports justified deduction of group, period and likely identity.",
        ],
      },
    ],
  },
};
