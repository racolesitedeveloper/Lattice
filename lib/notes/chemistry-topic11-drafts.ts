import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 11 — subtopics 11.1-11.4 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC11_DRAFTS: Record<string, NoteDraft> = {
  "t11-1": {
    noteId: "t11-1",
    syllabusNotes: [
      {
        id: "group17-colours-and-states",
        title: "Colours and physical appearance of chlorine, bromine and iodine",
        paragraphs: [
          "At room temperature and pressure, chlorine is a pale green gas, bromine is a red-brown liquid, and iodine is a grey-black solid that forms a violet vapour on warming.",
          "These observations show a clear down-group increase in colour intensity and a shift from gas to liquid to solid. The particles are all simple diatomic molecules, Cl2, Br2 and I2, but intermolecular attractions become stronger down the group.",
          "In practical work, halogens are identified by both colour and physical state, so accurate descriptive language matters in examination responses.",
        ],
      },
      {
        id: "volatility-trend-explained",
        title: "Volatility trend from chlorine to iodine",
        paragraphs: [
          "Volatility is the tendency of a substance to vaporise. A more volatile substance has a lower boiling point and evaporates more easily.",
          "Across chlorine to iodine, volatility decreases down Group 17. Chlorine is most volatile, bromine is less volatile, and iodine is least volatile under ordinary conditions.",
          "This trend is explained by stronger intermolecular forces down the group: larger molecules with more electrons are more easily polarised, so London dispersion attractions between molecules become stronger and more energy is needed to separate molecules into the gas phase.",
        ],
      },
      {
        id: "instantaneous-dipole-forces",
        title: "Instantaneous dipole-induced dipole forces in halogen molecules",
        paragraphs: [
          "Cl2, Br2 and I2 are non-polar molecules, so the intermolecular force responsible for their boiling-point and volatility trend is instantaneous dipole-induced dipole attraction (London dispersion force).",
          "As electron cloud size increases from Cl2 to I2, temporary dipoles are formed more easily and induce stronger dipoles in neighbouring molecules. This increases attraction between molecules.",
          "Stronger dispersion forces give higher melting and boiling points and therefore lower volatility down the group.",
        ],
      },
      {
        id: "x-x-bond-strength-trend",
        title: "Bond strength trend in halogen molecules",
        paragraphs: [
          "The X-X bond strength in halogen molecules does not change in a simple straight line from F2 to I2. For the required chlorine, bromine and iodine set, bond strength decreases down the group: Cl-Cl is stronger than Br-Br, and Br-Br is stronger than I-I.",
          "Down the group, atomic size increases and the bonded atoms are further apart, so overlap of valence orbitals becomes less effective. Weaker overlap gives weaker covalent bonds and lower bond dissociation enthalpy.",
          "This bond-strength trend is distinct from volatility trends: volatility depends on intermolecular forces between molecules, whereas bond strength refers to the covalent bond within each molecule.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners reward clear separation of intramolecular and intermolecular ideas in this topic. Most errors come from mixing bond-strength arguments with volatility arguments.",
      items: [
        "Describing iodine as a gas at room temperature rather than a grey-black solid that sublimes to violet vapour.",
        "Explaining boiling-point/volatility trend using X-X bond strength instead of intermolecular London dispersion forces.",
        "Stating that Cl2, Br2 and I2 are polar molecules; they are non-polar diatomic molecules.",
        "Giving a simple monotonic F2 to I2 bond-strength statement without noting that the syllabus focus here is Cl2 to I2 trend.",
        "Using 'stronger intermolecular bonds' wording that confuses intermolecular attraction with covalent bonding within molecules.",
      ],
    },
    workedExamples: [
      {
        id: "t11-1-ex1",
        title: "Linking colour and state down Group 17",
        problem: [
          "State the colour and physical state of chlorine, bromine and iodine at room temperature and pressure.",
        ],
        solution: [
          "Chlorine is a pale green gas.",
          "Bromine is a red-brown liquid.",
          "Iodine is a grey-black solid (forming violet vapour when heated).",
          "These observations show increasing colour intensity and decreasing volatility down the group.",
        ],
      },
      {
        id: "t11-1-ex2",
        title: "Explaining volatility order",
        problem: [
          "Explain why Cl2 is more volatile than Br2, and Br2 is more volatile than I2.",
        ],
        solution: [
          "Volatility is controlled here by intermolecular London dispersion forces between non-polar X2 molecules.",
          "From Cl2 to I2, molecules become larger with more electrons, so electron clouds are more polarisable and instantaneous dipole-induced dipole attractions become stronger.",
          "Stronger intermolecular attractions require more energy to overcome, so boiling point increases and volatility decreases down the group.",
        ],
      },
      {
        id: "t11-1-ex3",
        title: "Distinguishing intermolecular trend from bond-strength trend",
        problem: [
          "A student says, 'Iodine is less volatile because the I-I bond is strongest.' Correct this statement fully.",
        ],
        solution: [
          "The statement is incorrect for two reasons. First, iodine is less volatile mainly because intermolecular dispersion forces between I2 molecules are strongest among Cl2/Br2/I2.",
          "Second, the I-I covalent bond is actually weaker than Cl-Cl and Br-Br for this set, due to poorer orbital overlap at larger atomic size.",
          "So low volatility of iodine is an intermolecular-force effect, not a consequence of a stronger I-I bond.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t11-1-st1",
        question:
          "State the colours and physical states of chlorine, bromine and iodine at room temperature and pressure.",
        modelAnswer: [
          "Chlorine is a pale green gas, bromine is a red-brown liquid, and iodine is a grey-black solid.",
        ],
      },
      {
        id: "t11-1-st2",
        question:
          "Define volatility and give the volatility order for chlorine, bromine and iodine.",
        modelAnswer: [
          "Volatility is the tendency of a substance to vaporise (higher volatility means lower boiling point).",
          "Order: chlorine > bromine > iodine.",
        ],
      },
      {
        id: "t11-1-st3",
        question:
          "Why does the strength of instantaneous dipole-induced dipole forces increase from Cl2 to I2?",
        modelAnswer: [
          "Molecules become larger and have more electrons down the group, so electron clouds are more easily distorted to form temporary dipoles, giving stronger induced-dipole attractions.",
        ],
      },
      {
        id: "t11-1-st4",
        question:
          "State the trend in bond strength from Cl2 to I2 and explain briefly.",
        modelAnswer: [
          "Bond strength decreases down the group (Cl-Cl > Br-Br > I-I) because atomic size increases, orbital overlap becomes less effective, and the covalent bond is weaker.",
        ],
      },
      {
        id: "t11-1-st5",
        question:
          "In one sentence, distinguish the cause of halogen volatility trend from the cause of halogen bond-strength trend.",
        modelAnswer: [
          "Volatility trend depends on intermolecular London dispersion forces between molecules, whereas bond-strength trend depends on covalent X-X orbital overlap within each molecule.",
        ],
      },
    ],
  },

  "t11-2": {
    noteId: "t11-2",
    syllabusNotes: [
      {
        id: "halogens-as-oxidising-agents",
        title: "Relative oxidising power of halogen elements",
        paragraphs: [
          "Halogen molecules gain electrons to form halide ions, so they act as oxidising agents. Oxidising power decreases down Group 17: Cl2 is a stronger oxidising agent than Br2, and Br2 is stronger than I2.",
          "This trend reflects decreasing tendency to gain electrons as atomic radius and shielding increase down the group, so attraction for an incoming electron is weaker.",
          "In displacement reactions, a more reactive halogen oxidises halide ions of a less reactive halogen. For example, Cl2 oxidises Br- and I-, while Br2 oxidises I- but not Cl-.",
        ],
      },
      {
        id: "reactions-with-hydrogen",
        title: "Reactions of halogens with hydrogen and relative reactivity",
        paragraphs: [
          "Hydrogen reacts with halogens to form hydrogen halides: H2 + X2 -> 2HX (X = Cl, Br, I).",
          "Reactivity with hydrogen decreases down Group 17. Chlorine reacts rapidly, bromine reacts more slowly (often requiring heating), and iodine reacts only to a limited extent because the equilibrium is less favourable and the reaction is slower.",
          "The trend is linked to the balance between bond breaking and bond making: as X2 bonds become weaker down the group they are easier to break, but H-X bonds also become weaker down the group, so less energy is released on formation. Overall, hydrogen-halogen reaction vigour decreases from chlorine to iodine.",
        ],
      },
      {
        id: "hydrogen-halide-bonding-and-stability",
        title: "Thermal stability of hydrogen halides and bond strength",
        paragraphs: [
          "Thermal stability of hydrogen halides decreases down the group: HCl is more thermally stable than HBr, and HBr is more stable than HI.",
          "This trend is explained by H-X bond strength. Bond length increases down the group, orbital overlap between H and X decreases, and bond dissociation enthalpy decreases.",
          "Because H-I bonds are weakest, HI decomposes most readily on heating. H-Cl bonds are strongest among these three, so HCl is most resistant to thermal decomposition.",
        ],
      },
      {
        id: "connecting-halogen-and-hydrogen-halide-trends",
        title: "Linking element and hydrogen-halide trends",
        paragraphs: [
          "Two down-group trends are tested together in this subtopic: halogen oxidising power decreases, and hydrogen-halide thermal stability decreases.",
          "These are not contradictory. Halogen oxidising power depends on tendency of X2 to gain electrons, whereas hydrogen-halide stability depends mainly on H-X bond strength.",
          "High-scoring responses identify the correct trend, then give the correct mechanism-level reason (electron-gain tendency for halogens; bond enthalpy for hydrogen halides).",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "The common issue here is mixing two separate trend sets. Examiners expect you to keep oxidising power, reaction vigour with hydrogen, and hydrogen-halide thermal stability logically separate.",
      items: [
        "Writing oxidising power trend in the wrong direction (it decreases from chlorine to iodine).",
        "Explaining hydrogen-halide stability with acidity alone instead of H-X bond strength.",
        "Claiming iodine reacts with hydrogen as vigorously as chlorine under normal conditions.",
        "Confusing 'more reactive halogen' in displacement with 'more stable hydrogen halide'.",
        "Giving unbalanced hydrogen-halogen equations (correct general form is H2 + X2 -> 2HX).",
      ],
    },
    workedExamples: [
      {
        id: "t11-2-ex1",
        title: "Predicting halogen displacement outcomes",
        problem: [
          "Predict whether a reaction occurs when (a) chlorine is added to potassium bromide solution, and (b) bromine is added to potassium chloride solution. Give ionic equations where reaction occurs.",
        ],
        solution: [
          "Chlorine is a stronger oxidising agent than bromine, so (a) reaction occurs: Cl2 + 2Br- -> 2Cl- + Br2.",
          "Bromine is weaker oxidising agent than chlorine, so (b) no reaction occurs with Cl- under these conditions.",
          "This follows the oxidising-power order Cl2 > Br2 > I2.",
        ],
      },
      {
        id: "t11-2-ex2",
        title: "Explaining reactivity with hydrogen",
        problem: [
          "Hydrogen is reacted separately with chlorine, bromine and iodine. Explain the relative vigour of these reactions.",
        ],
        solution: [
          "All three follow H2 + X2 -> 2HX, but observed vigour decreases down the group from chlorine to iodine.",
          "From chlorine to iodine, the H-X bond formed becomes weaker, so the stabilising energy released on bond formation decreases.",
          "Although X-X bonds also weaken down the group, the overall reaction profile becomes less favourable kinetically/thermodynamically, so reaction vigour decreases.",
        ],
      },
      {
        id: "t11-2-ex3",
        title: "Thermal decomposition order of hydrogen halides",
        problem: [
          "A teacher heats equal amounts of HCl, HBr and HI gases. Predict which decomposes most and least, and explain.",
        ],
        solution: [
          "HI decomposes most readily and HCl decomposes least readily.",
          "Thermal stability depends on H-X bond strength: H-Cl is strongest, H-Br is intermediate, and H-I is weakest due to increasing bond length and poorer overlap down the group.",
          "Therefore stability order is HCl > HBr > HI, and decomposition tendency is the reverse.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t11-2-st1",
        question:
          "State the relative oxidising power order of chlorine, bromine and iodine.",
        modelAnswer: [
          "Chlorine is strongest, then bromine, then iodine (Cl2 > Br2 > I2 as oxidising agents).",
        ],
      },
      {
        id: "t11-2-st2",
        question:
          "Write balanced equations for reaction of hydrogen with chlorine and with bromine.",
        modelAnswer: [
          "H2 + Cl2 -> 2HCl.",
          "H2 + Br2 -> 2HBr.",
        ],
      },
      {
        id: "t11-2-st3",
        question:
          "Explain why reactivity of halogens with hydrogen decreases down Group 17.",
        modelAnswer: [
          "Down the group, the H-X bonds formed become weaker and less stabilising, so reaction vigour decreases from chlorine to iodine.",
        ],
      },
      {
        id: "t11-2-st4",
        question:
          "State the thermal stability order of HCl, HBr and HI and the reason for this order.",
        modelAnswer: [
          "Thermal stability: HCl > HBr > HI.",
          "Reason: H-X bond strength decreases down the group as bond length increases and orbital overlap becomes less effective.",
        ],
      },
      {
        id: "t11-2-st5",
        question:
          "In one sentence, explain why a strong oxidising halogen does not automatically imply its hydrogen halide is least stable.",
        modelAnswer: [
          "Halogen oxidising power depends on electron-gain tendency of X2, while hydrogen-halide thermal stability depends on H-X bond strength, so they are controlled by different factors.",
        ],
      },
    ],
  },

  "t11-3": {
    noteId: "t11-3",
    syllabusNotes: [
      {
        id: "halide-ions-as-reducing-agents",
        title: "Relative reducing power of halide ions",
        paragraphs: [
          "Halide ions act as reducing agents by losing electrons to form halogen molecules: 2X- -> X2 + 2e-.",
          "Reducing power increases down Group 17: Cl- is weakest, Br- is stronger, and I- is strongest among the three ions in this topic.",
          "This trend is the reverse of halogen oxidising power and reflects the increasing ease of oxidation of larger halide ions down the group.",
        ],
      },
      {
        id: "silver-nitrate-test-and-ammonia",
        title: "Reaction with aqueous silver ions and follow-up with aqueous ammonia",
        paragraphs: [
          "Acidified silver nitrate is used to test for halide ions. Silver halide precipitates form: AgCl (white), AgBr (cream), and AgI (yellow).",
          "Net ionic equations are Ag+(aq) + Cl-(aq) -> AgCl(s), Ag+(aq) + Br-(aq) -> AgBr(s), and Ag+(aq) + I-(aq) -> AgI(s).",
          "On adding aqueous ammonia, AgCl dissolves in dilute ammonia, AgBr dissolves only in concentrated ammonia, and AgI remains insoluble. This differential solubility is used for identification.",
        ],
      },
      {
        id: "halides-with-concentrated-sulfuric-acid-overview",
        title: "Halide ions with concentrated sulfuric acid: acid-base and redox stages",
        paragraphs: [
          "When a solid halide reacts with concentrated sulfuric acid, the first step is acid-base proton transfer producing hydrogen halide gas. For example, NaCl + H2SO4 -> NaHSO4 + HCl.",
          "For chloride, reaction is essentially acid-base only. For bromide and especially iodide, additional redox reactions occur because Br- and I- are stronger reducing agents and can reduce sulfuric acid.",
          "As reducing power increases from Br- to I-, sulfur in sulfuric acid is reduced to progressively lower oxidation states, giving characteristic gases and solids.",
        ],
      },
      {
        id: "bromide-with-concentrated-sulfuric-acid",
        title: "Detailed chemistry of bromide with concentrated sulfuric acid",
        paragraphs: [
          "Initial acid-base step: KBr + H2SO4 -> KHSO4 + HBr.",
          "Then redox occurs: bromide (or HBr) reduces sulfuric acid and is oxidised to bromine. A useful balanced redox equation is 2HBr + H2SO4 -> Br2 + SO2 + 2H2O.",
          "Observed products include steamy acidic fumes and brown/orange bromine vapour, with sulfur dioxide as a reducing-gas product from sulfuric acid reduction.",
        ],
      },
      {
        id: "iodide-with-concentrated-sulfuric-acid",
        title: "Detailed chemistry of iodide with concentrated sulfuric acid",
        paragraphs: [
          "Initial acid-base step: KI + H2SO4 -> KHSO4 + HI.",
          "HI is a strong reducing agent and reduces sulfuric acid further than HBr does. Sulfur-containing products can include SO2, S and H2S, while iodide is oxidised to iodine (purple vapour/black solid).",
          "Balanced redox equations commonly used are:",
        ],
        bullets: [
          "2HI + H2SO4 -> I2 + SO2 + 2H2O",
          "6HI + H2SO4 -> 3I2 + S + 4H2O",
          "8HI + H2SO4 -> 4I2 + H2S + 4H2O",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "This section is heavily mark-scheme based: product identity, colour observations, and balanced equations are all assessed. Examiners penalise answers that give trends without specific evidence.",
      items: [
        "Calling Br- a stronger reducing agent than I-; the correct order is I- > Br- > Cl-.",
        "Giving wrong silver halide colours or failing to distinguish cream AgBr from yellow AgI.",
        "Stating that all silver halides dissolve in ammonia; AgI does not dissolve.",
        "Treating chloride with concentrated sulfuric acid as a redox reaction; it is mainly acid-base proton transfer.",
        "Writing unbalanced sulfuric-acid redox equations for bromide/iodide reactions.",
      ],
    },
    workedExamples: [
      {
        id: "t11-3-ex1",
        title: "Using silver nitrate and ammonia to identify halides",
        problem: [
          "Three solutions each contain one halide ion. With acidified AgNO3 they give white, cream and yellow precipitates respectively. Describe what happens when dilute then concentrated ammonia is added, and identify each halide.",
        ],
        solution: [
          "White precipitate is AgCl; it dissolves in dilute ammonia, so this sample contains Cl-.",
          "Cream precipitate is AgBr; it does not dissolve in dilute ammonia but dissolves in concentrated ammonia, so this sample contains Br-.",
          "Yellow precipitate is AgI; it remains insoluble even in concentrated ammonia, so this sample contains I-.",
        ],
      },
      {
        id: "t11-3-ex2",
        title: "Predicting sulfuric-acid reaction products for bromide",
        problem: [
          "Potassium bromide is warmed with concentrated sulfuric acid. Write equations for the acid-base step and one redox step, then name the key redox products.",
        ],
        solution: [
          "Acid-base step: KBr + H2SO4 -> KHSO4 + HBr.",
          "Redox step: 2HBr + H2SO4 -> Br2 + SO2 + 2H2O.",
          "Key redox products are bromine (Br2) and sulfur dioxide (SO2). Bromide acts as reducing agent and sulfuric acid acts as oxidising agent.",
        ],
      },
      {
        id: "t11-3-ex3",
        title: "Why iodide gives more extensive reduction of sulfuric acid",
        problem: [
          "Explain why iodide can produce sulfur, sulfur dioxide and hydrogen sulfide when reacted with concentrated sulfuric acid, whereas chloride does not.",
        ],
        solution: [
          "Iodide is a much stronger reducing agent than chloride and can donate electrons more readily, so it reduces sulfur in H2SO4 to lower oxidation states (+4 in SO2, 0 in S, and -2 in H2S).",
          "Chloride is a weak reducing agent and does not significantly reduce sulfuric acid under these conditions, so mainly acid-base reaction occurs with HCl formation.",
          "The deeper reduction products with iodide therefore reflect the higher reducing strength of I-.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t11-3-st1",
        question:
          "State the reducing-agent order of Cl-, Br- and I-.",
        modelAnswer: [
          "At room temperature chlorine is a pale green gas, bromine is a red-brown liquid, and iodine is a grey-black solid.",
          "This reflects increasing van der Waals forces down the group as electron shells increase.",
        ],
      },
      {
        id: "t11-3-st2",
        question:
          "Write ionic equations for formation of silver chloride and silver iodide precipitates.",
        modelAnswer: [
          "Ag+(aq) + Cl-(aq) -> AgCl(s).",
          "Ag+(aq) + I-(aq) -> AgI(s).",
        ],
      },
      {
        id: "t11-3-st3",
        question:
          "How do AgCl, AgBr and AgI behave with aqueous ammonia?",
        modelAnswer: [
          "AgCl dissolves in dilute ammonia, AgBr dissolves only in concentrated ammonia, and AgI is insoluble in both dilute and concentrated ammonia.",
        ],
      },
      {
        id: "t11-3-st4",
        question:
          "Give one balanced redox equation showing bromide reducing concentrated sulfuric acid.",
        modelAnswer: [
          "Down Group 17 the X–X covalent bond weakens because atomic radius increases and orbital overlap is less effective.",
          "Bond enthalpy therefore decreases from Cl–Cl to Br–Br to I–I.",
        ],
      },
      {
        id: "t11-3-st5",
        question:
          "Give one balanced redox equation showing iodide reducing concentrated sulfuric acid to hydrogen sulfide.",
        modelAnswer: [
          "Volatility trend is governed by intermolecular London dispersion forces between X₂ molecules.",
          "Reactivity with hydrogen depends on H–X bond strength formed, which is a different molecular property.",
        ],
      },
    ],
  },

  "t11-4": {
    noteId: "t11-4",
    syllabusNotes: [
      {
        id: "chlorine-with-cold-alkali",
        title: "Reaction of chlorine with cold aqueous sodium hydroxide",
        paragraphs: [
          "In cold, dilute aqueous sodium hydroxide, chlorine reacts to form chloride and chlorate(I) (hypochlorite): Cl2 + 2OH- -> Cl- + ClO- + H2O.",
          "In full sodium-salt form: Cl2 + 2NaOH -> NaCl + NaClO + H2O.",
          "This is a disproportionation reaction because chlorine in Cl2 (oxidation number 0) is simultaneously reduced to -1 in Cl- and oxidised to +1 in ClO-.",
        ],
      },
      {
        id: "chlorine-with-hot-alkali",
        title: "Reaction of chlorine with hot aqueous sodium hydroxide",
        paragraphs: [
          "In hot, concentrated aqueous sodium hydroxide, chlorine gives chloride and chlorate(V): 3Cl2 + 6OH- -> 5Cl- + ClO3- + 3H2O.",
          "In sodium-salt form: 3Cl2 + 6NaOH -> 5NaCl + NaClO3 + 3H2O.",
          "This is also disproportionation: chlorine(0) is reduced to chlorine(-1) in chloride and oxidised to chlorine(+5) in chlorate(V).",
        ],
      },
      {
        id: "oxidation-number-interpretation",
        title: "Interpreting disproportionation using oxidation numbers",
        paragraphs: [
          "For cold alkali reaction, oxidation states of chlorine are 0 -> -1 and 0 -> +1. For hot alkali reaction, they are 0 -> -1 and 0 -> +5.",
          "Examination questions often ask for both equations and oxidation-number explanation; both parts are required for full credit.",
          "A concise method is: state oxidation number in reactant, state two product oxidation numbers, then identify reduction and oxidation branches explicitly.",
        ],
      },
      {
        id: "chlorine-in-water-purification",
        title: "Chlorine in water purification and active disinfecting species",
        paragraphs: [
          "When chlorine is added to water, it hydrolyses to form hydrochloric acid and chloric(I) acid (hypochlorous acid): Cl2 + H2O <=> HCl + HOCl.",
          "HOCl is a weak acid that partially dissociates: HOCl <=> H+ + ClO-. Both HOCl and ClO- are active species that kill bacteria by oxidation.",
          "In practice, HOCl is usually the more effective disinfecting species, and the HOCl/ClO- balance depends on pH. The syllabus requirement is to recognise production of HOCl and ClO- and their role in bacterial killing.",
        ],
      },
      {
        id: "practical-chemical-context",
        title: "Chemical rationale for chlorination treatment",
        paragraphs: [
          "Chlorination provides residual disinfecting action as water travels through distribution systems, reducing risk of microbial contamination after initial treatment.",
          "The chemistry links directly to redox behavior: chlorine-containing species oxidise biomolecules in microorganisms, leading to inactivation.",
          "Exam answers should include the hydrolysis equation and identify HOCl and ClO- as active bactericidal species rather than giving only descriptive statements about 'cleaning water'.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "This subtopic is highly specific: equation conditions (cold vs hot alkali), oxidation-number interpretation, and chlorination chemistry are all explicitly assessed.",
      items: [
        "Using chlorate(V) product for cold alkali conditions or hypochlorite product for hot concentrated alkali conditions.",
        "Calling the NaOH reactions simple redox without naming disproportionation.",
        "Giving equations without ionic charge balance or with wrong stoichiometric coefficients.",
        "Describing water chlorination without including HOCl and ClO- formation.",
        "Stating that chlorine itself alone is the only active disinfectant species in water.",
      ],
    },
    workedExamples: [
      {
        id: "t11-4-ex1",
        title: "Cold alkali disproportionation analysis",
        problem: [
          "Write the ionic equation for chlorine with cold aqueous sodium hydroxide and show, using oxidation numbers, why this is disproportionation.",
        ],
        solution: [
          "Ionic equation: Cl2 + 2OH- -> Cl- + ClO- + H2O.",
          "Chlorine in Cl2 has oxidation number 0. In Cl-, chlorine is -1 (reduction). In ClO-, chlorine is +1 (oxidation).",
          "Because chlorine is both reduced and oxidised in the same reaction, the process is disproportionation.",
        ],
      },
      {
        id: "t11-4-ex2",
        title: "Hot alkali equation and oxidation states",
        problem: [
          "Write the ionic equation for chlorine with hot concentrated aqueous sodium hydroxide and state the oxidation-number changes of chlorine.",
        ],
        solution: [
          "Ionic equation: 3Cl2 + 6OH- -> 5Cl- + ClO3- + 3H2O.",
          "Chlorine changes from 0 in Cl2 to -1 in Cl- (reduction) and to +5 in ClO3- (oxidation).",
          "This confirms hot-alkali reaction is also disproportionation.",
        ],
      },
      {
        id: "t11-4-ex3",
        title: "Water purification species from chlorine hydrolysis",
        problem: [
          "Show, with equations, how chlorine in water produces active disinfecting species.",
        ],
        solution: [
          "Hydrolysis in water: Cl2 + H2O <=> HCl + HOCl.",
          "Acid dissociation of hypochlorous acid: HOCl <=> H+ + ClO-.",
          "Therefore HOCl and ClO- are formed and act as active oxidising species that kill bacteria in treated water.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t11-4-st1",
        question:
          "Write the ionic equation for chlorine reacting with cold aqueous sodium hydroxide.",
        modelAnswer: [
          "Oxidising power decreases down the group: Cl₂ > Br₂ > I₂.",
          "A stronger oxidising agent more readily accepts electrons from another species in redox reactions.",
        ],
      },
      {
        id: "t11-4-st2",
        question:
          "Write the ionic equation for chlorine reacting with hot concentrated aqueous sodium hydroxide.",
        modelAnswer: [
          "H₂ + Cl₂ → 2HCl (chlorine oxidises hydrogen).",
          "H₂ + Br₂ → 2HBr (bromine oxidises hydrogen under suitable conditions).",
        ],
      },
      {
        id: "t11-4-st3",
        question:
          "For the cold-alkali reaction, state the oxidation numbers of chlorine in Cl2, Cl- and ClO-.",
        modelAnswer: [
          "Down the group the H–X bond in the product becomes longer and weaker.",
          "Reaction vigour with hydrogen therefore decreases from chlorine to iodine.",
        ],
      },
      {
        id: "t11-4-st4",
        question:
          "Give equations showing formation of HOCl and ClO- when chlorine is added to water.",
        modelAnswer: [
          "Cl2 + H2O <=> HCl + HOCl.",
          "HOCl <=> H+ + ClO-.",
        ],
      },
      {
        id: "t11-4-st5",
        question:
          "Why is the term disproportionation used for chlorine in both cold and hot NaOH reactions?",
        modelAnswer: [
          "In each case chlorine starts at oxidation number 0 and forms products where chlorine is both reduced (to -1 in Cl-) and oxidised (to +1 in ClO- or +5 in ClO3-), so one element undergoes simultaneous oxidation and reduction.",
        ],
      },
    ],
  },
};
