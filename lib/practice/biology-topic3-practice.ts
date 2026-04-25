import type { SubtopicPracticePack } from "./types";

/**
 * 9700 Topic 3 — enzymes (`t3-1`, `t3-2` only).
 * LO crosswalk: `data/syllabus/biology-9700-learning-outcomes.md` §3.1–3.2;
 * `data/courses/biology-9700.json` subtopic ids.
 *
 * t3-1 drill map (every §3.1 bullet has ≥1 item):
 *   d1 globular; intra- vs extracellular — d2–d4 active site, ES complex, Ea, specificity, lock-and-key, induced-fit —
 *   d5 catalase / product rate — d6 amylase / substrate loss — d7–d8 colorimeter — d9 specificity (MCQ) —
 *   d10 progress-curve / initial rate (ties practical LOs).
 * t3-2 drill map (every §3.2 bullet has ≥1 item):
 *   d1 temperature — d2 pH + buffers — d3 [enzyme] — d4 [substrate] — d5 Vmax and Km —
 *   d6 competitive inhibition — d7 non-competitive — d8 [inhibitor] — d9 immobilised vs free (alginate) —
 *   d10 integrated interpretation (MCQ).
 */
export const BIOLOGY_TOPIC3_PRACTICE: Record<string, SubtopicPracticePack> = {
  "t3-1": {
    noteId: "t3-1",
    drills: [
      // §3.1 — state globular proteins; intracellular vs extracellular catalysis
      {
        id: "t3-1-d1",
        noteId: "t3-1",
        kind: "mcq",
        difficulty: 1,
        stem: "Which statement best matches the syllabus description of enzymes in relation to where they work in or around cells?",
        options: [
          { id: "A", text: "Enzymes are always fibrous proteins that only work on the cell surface." },
          { id: "B", text: "Enzymes are globular proteins that may catalyse reactions inside cells or be secreted to catalyse reactions outside cells." },
          { id: "C", text: "Enzymes are nucleic acids that catalyse DNA replication only inside the nucleus." },
          { id: "D", text: "Enzymes are only extracellular, because the active site must be exposed to the external medium." },
        ],
        correctOptionId: "B",
        explanation: "For 9700 you state that enzymes are globular proteins acting as catalysts intracellularly (for example many metabolic enzymes in the cytosol) or extracellularly when secreted (for example digestive enzymes in the lumen of the gut).",
        distractorRationale: {
          A: "Fibrous proteins are typically structural; enzymes at this level are treated as globular, and many are intracellular.",
          C: "Catalytic RNA exists in nature, but the syllabus line here defines enzymes in this topic as globular proteins with the intra/extracellular pattern described.",
          D: "Many enzymes function inside the cytoplasm or within organelles; secretion is one pattern, not the only one.",
        },
        tags: ["definition", "enzymes"],
      },
      // §3.1 — explain mode of action: active site, ES complex, activation energy, specificity
      {
        id: "t3-1-d2",
        noteId: "t3-1",
        kind: "structured",
        difficulty: 2,
        marks: 6,
        stem: "Explain the mode of action of an enzyme as a biological catalyst, with reference to the active site, the enzyme–substrate complex, lowering of activation energy, and enzyme specificity.",
        modelAnswerPoints: [
          "The active site is a region with a specific 3D shape and chemical environment complementary to the substrate.",
          "The substrate binds to the active site forming an enzyme–substrate complex, holding substrates in a productive orientation.",
          "By providing an alternative reaction pathway, the enzyme lowers the activation energy so more substrate molecules are converted per unit time at a given temperature.",
          "Specificity arises because typically only substrates with a shape and chemistry that fit the active site bind and are converted efficiently.",
        ],
        workedSolution: [
          "An enzyme is a globular protein with a pocket or cleft called the active site, where particular amino acid side chains and the local folding create a three-dimensional surface that is complementary in shape and charge distribution to its substrate or substrates.",
          "When the substrate collides in the correct orientation, it binds non-covalently to the active site, producing a transient enzyme–substrate complex in which the substrate is held close to catalytic groups so that bond making and breaking can occur without the substrates drifting apart unproductively.",
          "For a reaction to run, colliding molecules must reach the transition state; the minimum energy required is the activation energy, and an enzyme stabilises the transition state relative to the uncatalysed path, which lowers the activation energy barrier so that a greater proportion of collisions lead to product formation at the same temperature.",
          "Enzyme specificity means that each enzyme usually converts a limited range of related substrates because only those molecules can bind effectively to the active site and reach the transition state on that enzyme, whereas unrelated molecules do not fit well enough to form a productive complex.",
        ],
        commonMistake: "Saying the enzyme supplies ‘energy’ to the reaction in the sense of overall free energy change for the pathway: catalysis changes the activation energy barrier, not the net energy difference between overall reactants and products.",
        tags: ["mode-of-action", "activation-energy"],
      },
      // §3.1 — lock-and-key and induced-fit hypotheses
      {
        id: "t3-1-d3",
        noteId: "t3-1",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "Describe the lock-and-key hypothesis and the induced-fit hypothesis as explanations of how substrates interact with enzymes at the active site.",
        modelAnswerPoints: [
          "Lock-and-key: the active site is a rigid complementary shape into which the substrate fits as a key in a lock.",
          "Induced-fit: binding of substrate causes a conformational change in the enzyme so the active site moulds around the substrate for tighter binding and catalysis.",
          "Both ideas account for specificity, but induced-fit emphasises flexibility and adjustment after initial contact.",
        ],
        workedSolution: [
          "In the lock-and-key model, the enzyme’s active site is pictured as having a fixed three-dimensional shape that is exactly complementary to the substrate, rather like a lock that only accepts one key, so only the correct substrate can enter the site in a way that aligns bonds for reaction.",
          "In the induced-fit model, the initial encounter between enzyme and substrate is followed by a change in the tertiary structure of the protein so that the active site closes or reshapes slightly around the substrate, improving the fit and positioning catalytic groups for bond strain or transition-state stabilisation.",
          "Both hypotheses explain why unrelated molecules react slowly or not at all, because they cannot occupy the site productively, but induced-fit better matches observations that enzymes are not completely rigid and that substrate binding can be accompanied by measurable conformational change.",
        ],
        commonMistake: "Presenting induced-fit as the opposite of specificity: both models are about selective binding; induced-fit adds that the enzyme shape adjusts on binding rather than staying absolutely rigid.",
        tags: ["lock-and-key", "induced-fit"],
      },
      // §3.1 — ties activation energy to rate (supports mode-of-action LO)
      {
        id: "t3-1-d4",
        noteId: "t3-1",
        kind: "structured",
        difficulty: 3,
        marks: 4,
        stem: "Explain why lowering the activation energy of a reaction increases the rate of an enzyme-catalysed reaction at a fixed temperature.",
        modelAnswerPoints: [
          "At a fixed temperature the kinetic energy distribution of molecules is fixed.",
          "Only collisions with sufficient energy to reach the transition state lead to product formation.",
          "A lower activation energy means a larger fraction of collisions is successful, so more product forms per unit time.",
        ],
        workedSolution: [
          "At a given temperature, substrate and enzyme molecules have a spread of kinetic energies described by a distribution curve, and only a certain proportion of molecular collisions involves enough energy along the reaction coordinate to distort bonds towards the high-energy transition state.",
          "The activation energy is the minimum energy input required to form that transition state from the reactants in the uncatalysed pathway, so if the barrier is high, only rare, high-energy collisions succeed and the reaction is slow.",
          "An enzyme provides an alternative pathway in which the transition state is stabilised, which corresponds to a lower activation energy, so for the same temperature a greater fraction of substrate molecules reaches the transition state per unit time and the rate of formation of product increases.",
        ],
        commonMistake: "Claiming that lowering activation energy raises the temperature of the molecules: the temperature is unchanged; it is the energy barrier that is lower, so more existing collisions are ‘successful’.",
        tags: ["activation-energy", "rate"],
      },
      // §3.1 — catalase; rate via product formation
      {
        id: "t3-1-d5",
        noteId: "t3-1",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "Describe how you could investigate the progress of a catalase-catalysed reaction by measuring the rate of formation of a product. Include one quantitative or semi-quantitative measurement strategy that examiners would accept.",
        modelAnswerPoints: [
          "Catalase catalyses the decomposition of hydrogen peroxide to water and oxygen, so oxygen is a product whose appearance reflects progress.",
          "A practical approach is to collect oxygen over water and record volume at timed intervals, or use a gas syringe, and calculate initial rate from the early, nearly linear part of the graph.",
          "Alternative acceptable approaches include counting bubbles per unit time at controlled temperature, or timing to a fixed volume, provided variables are controlled and rate is derived sensibly.",
        ],
        workedSolution: [
          "Catalase, commonly investigated using plant tissue or a yeast suspension, catalyses the breakdown of hydrogen peroxide into water and oxygen gas, so the reaction can be followed by detecting oxygen as it accumulates.",
          "A standard school method is to set up the reaction in a flask connected via a delivery tube to an inverted measuring cylinder or burette filled with water so that oxygen displaces water, and to read the cumulative gas volume at clock times such as every 10 seconds for the first minute.",
          "The initial rate is estimated from the steepest part of the graph of volume of oxygen against time (or from the gradient of a tangent at t = 0), using the same substrate concentration, same tissue mass or enzyme preparation, and constant temperature, because later the rate falls as substrate is used up or as product inhibition becomes relevant.",
        ],
        commonMistake: "Measuring only a single endpoint time with no repeat or no graph, then calling it a ‘rate’ without stating that rate is change of product per unit time, preferably from an initial slope.",
        tags: ["catalase", "practical", "rate"],
      },
      // §3.1 — amylase; rate via substrate disappearance
      {
        id: "t3-1-d6",
        noteId: "t3-1",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "Describe how you could investigate the progress of an amylase-catalysed reaction by measuring the rate of disappearance of starch as substrate.",
        modelAnswerPoints: [
          "Amylase hydrolyses starch; starch gives a blue-black colour with iodine solution.",
          "Samples are withdrawn from the reaction mixture at timed intervals and tested with iodine.",
          "While starch remains, iodine is blue-black; as starch is digested, the colour weakens to orange-brown/yellow of iodine alone; time to loss of blue-black or a serial dilution comparison gives a rate measure.",
        ],
        workedSolution: [
          "A starch solution is mixed with amylase in a buffer at the enzyme’s optimum pH in a water bath at a controlled temperature, and the clock is started as soon as the enzyme is added so that all times refer to the same zero point.",
          "At regular intervals, for example every 10 seconds at the start, a small aliquot is removed into a spotting tile well or a separate tube and mixed immediately with iodine in potassium iodide solution.",
          "While polymer starch is still present, the iodine test stays blue-black, and as amylase cleaves glycosidic bonds the chain length drops and the blue-black colour fades through shades until only the brown iodine colour remains, so recording the time until the blue-black just disappears, or comparing intensity to standards, gives a measure of how fast the substrate is being removed and an initial rate can be compared between conditions if the early time points are used.",
        ],
        commonMistake: "Using Benedict’s alone as the only test for ‘substrate disappearance’ without mentioning the iodine–starch colour change that directly tracks polymer starch in the classic practical.",
        tags: ["amylase", "starch", "practical"],
      },
      // §3.1 — colorimeter (outline)
      {
        id: "t3-1-d7",
        noteId: "t3-1",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "Outline how a colorimeter can be used to follow the progress of an enzyme-catalysed reaction that produces a colour change, such as the loss of the starch–iodine colour as amylase digests starch.",
        modelAnswerPoints: [
          "A colorimeter measures the absorbance (or transmission) of light through a coloured solution at a chosen wavelength.",
          "A cuvette containing the reaction mixture at known path length is placed in the instrument.",
          "Absorbance is read at timed intervals; as starch is hydrolysed, absorbance at the measuring wavelength falls if that wavelength was chosen where the blue starch–iodine complex absorbs.",
          "A calibration curve may relate absorbance to starch concentration; rate comes from the initial gradient of absorbance against time.",
        ],
        workedSolution: [
          "A colorimeter passes a narrow band of visible light through a sample in a square cuvette and compares the intensity of transmitted light to a blank, producing a reading proportional to absorbance according to the Beer–Lambert relationship for dilute solutions.",
          "For a starch–iodine digest, iodine is included in the reaction mixture or the mixture is already blue-black, and a filter or LED wavelength is selected where the starch–iodine complex absorbs strongly so that a drop in starch concentration produces a measurable fall in absorbance.",
          "The cuvette is returned to the instrument at fixed times without warming the sample unduly, and absorbance is recorded so that a graph of absorbance against time can be plotted.",
          "The initial rate of reaction is taken from the steepest downward slope at the start of the curve, before the reaction slows markedly, and if required a set of known starch–iodine standards can be read once to convert absorbance to an approximate starch concentration scale.",
        ],
        commonMistake: "Forgetting to set a blank (iodine without starch, or buffer baseline) or quoting ‘transmission’ and ‘absorbance’ as if they were unrelated: the instrument is standardised against a reference tube.",
        tags: ["colorimeter", "practical"],
      },
      // §3.1 — colorimeter practical detail / validity
      {
        id: "t3-1-d8",
        noteId: "t3-1",
        kind: "structured",
        difficulty: 3,
        marks: 4,
        stem: "State two reasons why readings from a colorimeter give a more objective measure of colour intensity than judging tubes by eye when following an enzyme-catalysed reaction with a colour change.",
        modelAnswerPoints: [
          "The detector response is consistent and not affected by individual colour perception or room lighting in the same way as naked-eye comparison.",
          "Numerical absorbance values allow plotting a graph against time and calculating an initial gradient reproducibly.",
        ],
        workedSolution: [
          "Human judgement of ‘the same shade of blue’ varies between people and with background light and viewing angle, whereas a colorimeter uses a fixed wavelength and a photodetector, so repeated measurements on the same mixture are more consistent and comparisons between lessons or groups are fairer.",
          "Because the instrument outputs a number such as absorbance at each time, the student can plot a smooth curve and draw a tangent for the initial rate, or average repeats, which is difficult when the only record is a subjective label like ‘medium blue’ without a scale.",
        ],
        commonMistake: "Saying the colorimeter ‘makes the reaction faster’: it only measures progress more precisely; it is not a catalyst.",
        tags: ["colorimeter", "validity"],
      },
      // §3.1 — specificity (mode of action)
      {
        id: "t3-1-d9",
        noteId: "t3-1",
        kind: "mcq",
        difficulty: 2,
        stem: "Why does urease catalyse urea but not cellulose?",
        options: [
          { id: "A", text: "Because cellulose has lower mass than urea, so it cannot collide with the enzyme." },
          { id: "B", text: "Because the active site of urease is complementary to urea but does not bind cellulose in a productive enzyme–substrate complex." },
          { id: "C", text: "Because cellulose is non-polar, so it cannot lower activation energy." },
          { id: "D", text: "Because urease only works extracellularly and cellulose is always intracellular." },
        ],
        correctOptionId: "B",
        explanation: "Specificity is explained by the shape and chemistry of the active site: urea fits and forms a productive complex; cellulose is a different substrate geometry and does not bind the urease active site in the same way.",
        distractorRationale: {
          A: "Mass alone does not determine catalysis; binding and transition-state stabilisation depend on complementarity at the active site.",
          C: "Polarity is not the whole story, and cellulose is acted on by other enzymes (cellulases) with different active sites.",
          D: "The location of the substrates is not the primary syllabus explanation for why one enzyme accepts urea and not cellulose.",
        },
        tags: ["specificity"],
      },
      // §3.1 — integrates practical measurement of rates
      {
        id: "t3-1-d10",
        noteId: "t3-1",
        kind: "structured",
        difficulty: 4,
        marks: 5,
        stem: "For an enzyme-catalysed reaction, explain why the **initial rate** of reaction is usually calculated from the early part of a progress curve (product against time or substrate-related signal against time), rather than using the average rate over the whole experiment until completion.",
        modelAnswerPoints: [
          "As substrate is consumed, its concentration falls, so the rate predicted by Michaelis–Menten kinetics drops.",
          "Product may accumulate and, in some systems, affect the enzyme (product inhibition) or the reverse reaction becomes significant at high product.",
          "The initial tangent therefore reflects the rate at close to the starting substrate concentration and defined enzyme concentration, which is what controlled comparisons between conditions require.",
        ],
        workedSolution: [
          "A progress curve for an enzyme-catalysed reaction typically rises steeply at first when substrate concentration is still close to its starting value, then levels as substrate becomes depleted, so the instantaneous rate is highest at the beginning and falls throughout the run.",
          "If a student averaged the total change in product by the total time to completion, that value would mix fast early behaviour with slow late behaviour and would depend on how long the reaction was left, which does not isolate the effect of the factor being investigated at a defined starting substrate level.",
          "Biochemical practice is therefore to draw a tangent to the product–time curve at t = 0, or to use the nearly straight early points to obtain an initial rate, so that comparisons between temperature, pH, or inhibitor treatments reflect the enzyme’s activity under the same initial conditions.",
        ],
        commonMistake: "Using a single endpoint time only and assuming it is proportional to rate without checking that the curve is linear over that interval.",
        tags: ["initial-rate", "progress-curve"],
      },
    ],
    flashcards: [
      { id: "t3-1-f1", noteId: "t3-1", difficulty: 1, front: "9700: enzymes are globular proteins that catalyse reactions where?", back: "Inside cells (intracellular enzymes) or outside cells when secreted (extracellular enzymes), e.g. digestive enzymes.", examPhrasing: "State where enzymes may catalyse reactions in relation to cells.", tags: ["definition"] },
      { id: "t3-1-f2", noteId: "t3-1", difficulty: 1, front: "What is the active site?", back: "The region of an enzyme (often a cleft or pocket) where the substrate binds and is converted.", examPhrasing: "Define the active site of an enzyme.", tags: ["active-site"] },
      { id: "t3-1-f3", noteId: "t3-1", difficulty: 2, front: "Enzyme–substrate complex: one sentence.", back: "Temporary intermediate formed when substrate is bound non-covalently at the active site, positioned for catalysis.", examPhrasing: "State what is meant by an enzyme–substrate complex.", tags: ["ES-complex"] },
      { id: "t3-1-f4", noteId: "t3-1", difficulty: 2, front: "How do enzymes increase reaction rate at a given temperature?", back: "They lower the activation energy by stabilising the transition state / providing an alternative pathway.", examPhrasing: "Explain the role of activation energy in enzyme catalysis.", tags: ["Ea"] },
      { id: "t3-1-f5", noteId: "t3-1", difficulty: 3, front: "Enzyme specificity in one line.", back: "Typically each enzyme converts a limited range of substrates because only they fit the active site productively.", examPhrasing: "Explain enzyme specificity.", tags: ["specificity"] },
      { id: "t3-1-f6", noteId: "t3-1", difficulty: 3, front: "Lock-and-key vs induced-fit (contrast).", back: "Lock-and-key: rigid complementary fit. Induced-fit: enzyme shape adjusts on substrate binding for tighter fit.", examPhrasing: "Describe the induced-fit hypothesis as distinct from lock-and-key.", tags: ["models"] },
      { id: "t3-1-f7", noteId: "t3-1", difficulty: 3, front: "Catalase practical: what product is often measured?", back: "Oxygen from breakdown of hydrogen peroxide (e.g. gas volume or bubble rate over time).", examPhrasing: "Describe following catalase using product formation.", tags: ["catalase"] },
      { id: "t3-1-f8", noteId: "t3-1", difficulty: 4, front: "Amylase on starch: how is substrate loss tracked classically?", back: "Timed iodine tests: blue-black while starch remains; fading as starch is hydrolysed.", examPhrasing: "Describe measuring the rate of disappearance of starch with amylase.", tags: ["amylase"] },
      { id: "t3-1-f9", noteId: "t3-1", difficulty: 4, front: "Colorimeter: what does it measure?", back: "Absorbance/transmittance of light through the solution at a set wavelength, related to colour intensity.", examPhrasing: "Outline use of a colorimeter for an enzyme reaction with a colour change.", tags: ["colorimeter"] },
      { id: "t3-1-f10", noteId: "t3-1", difficulty: 5, front: "Why use initial rate, not whole-run average?", back: "Substrate falls and rate drops; initial tangent reflects defined starting conditions.", examPhrasing: "Explain why initial rate is used from progress curves.", confusionPair: "initial vs average rate", tags: ["kinetics-intro"] },
    ],
  },

  "t3-2": {
    noteId: "t3-2",
    drills: [
      // §3.2 — temperature
      {
        id: "t3-2-d1",
        noteId: "t3-2",
        kind: "structured",
        difficulty: 2,
        marks: 6,
        stem: "Investigate and explain the effect of temperature on the rate of an enzyme-catalysed reaction. Describe the shape of the rate–temperature curve and explain it in terms of kinetic energy and enzyme structure.",
        modelAnswerPoints: [
          "As temperature rises from low values, rate increases because particles collide more often and with greater energy.",
          "There is an optimum temperature where rate is maximal for that enzyme preparation.",
          "Above the optimum, rate falls, mainly because excessive heat breaks interactions that maintain the active site shape (denaturation), so the enzyme is less effective.",
        ],
        workedSolution: [
          "In a typical class investigation, identical enzyme and substrate mixtures are incubated in water baths at a series of temperatures and initial rates are found from gas evolution, iodine fading, or absorbance, keeping pH and concentrations constant so temperature is the main variable.",
          "From a low temperature up to an optimum, the rate rises because substrate and enzyme molecules move faster and collide more frequently, and a greater proportion of collisions exceeds the activation energy of the catalysed step, so more product forms per minute.",
          "Beyond the optimum the rate decreases sharply even though collisions are still frequent, because thermal vibration disrupts hydrogen bonds and other forces holding the tertiary structure, changing the shape of the active site so substrates no longer form productive enzyme–substrate complexes, which is described as denaturation of the enzyme.",
        ],
        commonMistake: "Saying only ‘the enzyme is denatured’ for the rising part of the curve: below the optimum the rate is limited mainly by low collision energy, not by denaturation.",
        tags: ["temperature", "practical"],
      },
      // §3.2 — pH + buffers
      {
        id: "t3-2-d2",
        noteId: "t3-2",
        kind: "structured",
        difficulty: 2,
        marks: 5,
        stem: "Explain why buffer solutions are used when investigating the effect of pH on enzyme activity, and describe the general shape of a rate–pH curve.",
        modelAnswerPoints: [
          "Buffers resist pH change when small amounts of acid or base are produced or added, so pH stays at the value set for that tube.",
          "Without a buffer, enzyme action or CO2 in solution could shift pH and confuse the effect being tested.",
          "Rate is low at extremes, maximal near the enzyme’s optimum pH, because active-site charge pattern and folding suit that pH.",
        ],
        workedSolution: [
          "A buffer pair in solution can donate or accept protons so that the hydrogen ion concentration remains almost constant during the minutes of an enzyme assay, which matters because many enzymes produce or consume ions indirectly and because laboratory water is not perfectly stable in pH when biological material is added.",
          "If pH were uncontrolled, the measured ‘pH treatment’ would drift during the run, so two replicates at ‘pH 7’ might not experience the same proton concentration throughout, and any comparison of rates would be unreliable.",
          "A rate–pH graph therefore shows low activity at very acid or very alkaline pH where side chains in the active site carry the wrong charge pattern or the protein begins to denature, and a peak at the optimum pH where the tertiary structure and catalytic residues are in the form that binds substrate and stabilises the transition state best.",
        ],
        commonMistake: "Claiming a buffer ‘speeds up’ the enzyme: it stabilises pH; the intrinsic turnover is determined by the enzyme at that fixed pH.",
        tags: ["pH", "buffers"],
      },
      // §3.2 — enzyme concentration
      {
        id: "t3-2-d3",
        noteId: "t3-2",
        kind: "structured",
        difficulty: 2,
        marks: 4,
        stem: "Explain the effect of increasing enzyme concentration on the rate of an enzyme-catalysed reaction when substrate concentration is not limiting (high substrate relative to enzyme).",
        modelAnswerPoints: [
          "More enzyme molecules mean more active sites available at the same time.",
          "At saturating substrate, the rate is approximately proportional to enzyme concentration.",
          "Doubling enzyme doubles the number of catalytic events per second until another factor becomes limiting.",
        ],
        workedSolution: [
          "Each enzyme molecule can process substrate molecules in a steady cycle when substrate is abundant, so the total number of substrate molecules converted per unit time depends on how many enzyme molecules are present in the volume.",
          "If substrate concentration is high enough that most enzyme active sites are occupied, the overall initial rate is effectively limited by the total catalytic capacity, which scales with enzyme concentration, so doubling the enzyme concentration approximately doubles the initial rate.",
          "This proportionality breaks down if substrate becomes limiting, if inhibitors accumulate, or if the physical setup (stirring, surface attachment) prevents some enzyme molecules from accessing substrate equally.",
        ],
        commonMistake: "Stating proportionality when substrate is low: at low [S] many active sites are empty and rate is more sensitive to substrate than to further enzyme.",
        tags: ["enzyme-conc"],
      },
      // §3.2 — substrate concentration
      {
        id: "t3-2-d4",
        noteId: "t3-2",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "Explain the effect of increasing substrate concentration on the initial rate of an enzyme-catalysed reaction for a fixed enzyme concentration. Refer to active-site occupancy and the levelling-off of the rate at high substrate concentration.",
        modelAnswerPoints: [
          "At low substrate, many active sites are free; rate rises steeply as [S] increases because collisions forming ES complexes become more frequent.",
          "At high substrate, active sites are saturated most of the time.",
          "The rate approaches a maximum (Vmax) where adding more substrate cannot increase the rate because the catalytic step and enzyme turnover limit throughput.",
        ],
        workedSolution: [
          "When substrate concentration is low, enzyme molecules spend much of their time without bound substrate, so the overall rate depends strongly on how often a substrate molecule arrives at an empty active site and the initial rate increases rapidly when [S] is raised.",
          "As substrate concentration becomes large, the fraction of time each enzyme spends in the enzyme–substrate complex approaches its maximum, so almost all active sites are cycling through substrate binding, conversion, and product release as fast as the intrinsic turnover allows.",
          "The initial rate therefore levels off towards a plateau called the maximum rate Vmax for that enzyme concentration, because the system is saturated and adding further substrate only marginally increases the small pool of free enzyme waiting for substrate.",
        ],
        commonMistake: "Saying rate keeps rising linearly with [S] at all concentrations: saturation behaviour is essential for 9700 enzyme kinetics descriptions.",
        tags: ["substrate-conc", "Vmax"],
      },
      // §3.2 — Vmax and Km
      {
        id: "t3-2-d5",
        noteId: "t3-2",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "Explain how Vmax and the Michaelis–Menten constant Km are used to compare how tightly different enzymes bind their substrates (their relative affinity).",
        modelAnswerPoints: [
          "Vmax is the maximum rate approached at saturating substrate for a given enzyme concentration.",
          "Km is the substrate concentration at which the rate is half of Vmax under Michaelis–Menten conditions.",
          "A lower Km implies half-saturation at lower [S], interpreted as higher apparent affinity for substrate when comparing enzymes catalysing comparable reactions.",
        ],
        workedSolution: [
          "For a given amount of enzyme, Vmax is the plateau initial rate measured when substrate concentration is high enough that the curve of rate against [S] has flattened, representing the maximum turnover the preparation can achieve when active-site cycling is the limit.",
          "Km is derived from the same Michaelis–Menten relationship as the substrate concentration at which the observed initial rate equals exactly one half of Vmax, so it is a characteristic concentration scale for that enzyme–substrate pair at a defined temperature and pH.",
          "When two enzymes are compared, the one with the smaller Km reaches half its maximum rate at a lower substrate concentration, which is interpreted as binding substrate more tightly in the kinetic sense (higher affinity), whereas a very large Km means much more substrate is needed to push the rate towards Vmax.",
        ],
        commonMistake: "Calling Km ‘the same thing as Vmax’ or saying Km is always the dissociation constant Kd: for Michaelis–Menten kinetics Km is a kinetic parameter that equals Kd only in the simple rapid-equilibrium case.",
        tags: ["Km", "Vmax"],
      },
      // §3.2 — competitive inhibition
      {
        id: "t3-2-d6",
        noteId: "t3-2",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "Explain how a reversible **competitive** inhibitor affects enzyme activity, with reference to the active site and the effects on apparent Km and Vmax.",
        modelAnswerPoints: [
          "A competitive inhibitor is structurally similar to the substrate and binds reversibly at the active site.",
          "It blocks substrate binding, lowering the rate at a given [S].",
          "Vmax can still be reached if substrate concentration is raised high enough to out-compete the inhibitor; apparent Km increases.",
        ],
        workedSolution: [
          "A competitive inhibitor molecule is shaped like the substrate or part of it, so it can enter the active site and form non-covalent interactions there, but it is not converted to product, which physically blocks the substrate from occupying the site for part of the time.",
          "At moderate substrate concentration, part of the enzyme is tied up with inhibitor, so fewer productive enzyme–substrate complexes form per second and the initial rate is lower than in the absence of inhibitor.",
          "Because binding is reversible, sufficiently high substrate concentration can displace the inhibitor from the active site, so the same maximum rate Vmax as the uninhibited enzyme at saturation can in principle still be attained, which shows up as an increase in the apparent Km (more substrate needed for half-maximal rate) with an unchanged Vmax on a double-reciprocal plot in the simple model.",
        ],
        commonMistake: "Saying Vmax always falls in competitive inhibition: the key syllabus contrast is raised Km with Vmax unchanged in the ideal reversible competitive case at full saturation.",
        tags: ["competitive"],
      },
      // §3.2 — non-competitive inhibition
      {
        id: "t3-2-d7",
        noteId: "t3-2",
        kind: "structured",
        difficulty: 3,
        marks: 5,
        stem: "Explain how a reversible **non-competitive** inhibitor affects enzyme activity, and contrast its effects on Vmax and Km with those of a competitive inhibitor.",
        modelAnswerPoints: [
          "Non-competitive inhibitor binds reversibly away from the active site (allosteric site) or in a way that changes catalysis even if substrate can bind.",
          "It lowers Vmax because fewer productive catalytic cycles occur per unit time at any substrate concentration.",
          "Km may be essentially unchanged because substrate can still bind to the active site with similar affinity in the simple model.",
        ],
        workedSolution: [
          "A reversible non-competitive inhibitor binds to a region distinct from the substrate-binding site, or binds in a manner that alters the enzyme conformation so that the catalytic step is slowed even when substrate is present, which reduces the turnover number per enzyme molecule.",
          "Because the inhibitor does not have to occupy the substrate pocket to exert its effect, raising substrate concentration cannot fully restore the original maximum rate, so Vmax decreases compared with the uninhibited enzyme.",
          "In the textbook simple treatment, the substrate can still reach half-saturation at a similar concentration, so Km appears little changed while Vmax drops, which is the main qualitative contrast with competitive inhibition where Vmax is unchanged but a higher substrate concentration is needed to reach a given fraction of Vmax.",
        ],
        commonMistake: "Placing non-competitive inhibitors only in the active site like competitive ones: the syllabus expects you to distinguish binding locus and the different kinetic pattern.",
        tags: ["non-competitive"],
      },
      // §3.2 — inhibitor concentration
      {
        id: "t3-2-d8",
        noteId: "t3-2",
        kind: "structured",
        difficulty: 3,
        marks: 4,
        stem: "Explain how increasing the concentration of a reversible inhibitor generally affects the measured initial rate of an enzyme-catalysed reaction at fixed substrate and enzyme concentrations.",
        modelAnswerPoints: [
          "More inhibitor shifts equilibrium toward enzyme–inhibitor complexes.",
          "For competitive inhibition, a higher fraction of enzyme is unavailable at a given [S], so rate falls until substrate is raised.",
          "For non-competitive inhibition, more molecules are in a less active form, lowering Vmax apparent even at high [S].",
        ],
        workedSolution: [
          "Reversible inhibition depends on dynamic binding, so when inhibitor concentration rises, the law of mass action increases the proportion of enzyme molecules that have inhibitor bound rather than free or in a productive substrate complex.",
          "In competitive inhibition, a higher inhibitor concentration means that at the same moderate substrate concentration a larger share of enzyme time is spent with inhibitor in the active site, so the initial rate decreases, and only a higher substrate concentration can partially rescue the rate.",
          "In non-competitive inhibition, raising inhibitor concentration increases the fraction of enzyme molecules in a conformation or state with impaired catalysis, which lowers the measured rate at essentially any substrate concentration and reduces the plateau rate that could be achieved.",
        ],
        commonMistake: "Ignoring that ‘reversible’ means the effect depends on relative concentrations of substrate and inhibitor, not only on inhibitor alone.",
        tags: ["inhibitor-conc"],
      },
      // §3.2 — immobilised in alginate vs free; advantages
      {
        id: "t3-2-d9",
        noteId: "t3-2",
        kind: "structured",
        difficulty: 3,
        marks: 6,
        stem: "Describe an investigation comparing the activity of an enzyme immobilised in alginate beads with the same enzyme free in solution. State advantages of using immobilised enzymes in technology or processing.",
        modelAnswerPoints: [
          "Prepare alginate beads entrapping enzyme; run parallel assays with matched enzyme activity or protein on free enzyme at same temperature, pH, and substrate.",
          "Measure initial rates (e.g. product formation) and compare; stirring and surface access differ, so methodology should be fair.",
          "Advantages: enzyme reusable, easier separation from product, often greater stability, continuous flow possible in columns.",
        ],
        workedSolution: [
          "A common method is to mix a solution of sodium alginate with the enzyme and drop it into calcium chloride solution to form gel beads that trap the enzyme in a three-dimensional calcium alginate network, while a control tube contains the same total enzyme activity dissolved freely in buffer without beads.",
          "Both preparations are assayed at the same pH in a buffer, the same temperature, and the same starting substrate concentration, with mixing chosen so substrate reaches the beads (stirring) and the free enzyme is not limited only by diffusion in an unfair way, and initial rates are compared from the early linear part of product accumulation.",
          "Immobilised enzymes in industry or biotechnology can be recovered from the reaction mixture because they stay in the beads or column matrix, which allows the same catalyst to be reused for many batches, reduces contamination of the product with free protein, and can allow continuous processing, and the gel often protects the enzyme from shear or extremes compared with some free-enzyme processes.",
        ],
        commonMistake: "Claiming immobilised enzyme always has higher intrinsic activity per molecule: syllabus asks you to investigate the difference; diffusion into beads can lower apparent rate even when stability improves.",
        tags: ["immobilised", "alginate", "practical"],
      },
      // §3.2 — integrates inhibition patterns
      {
        id: "t3-2-d10",
        noteId: "t3-2",
        kind: "mcq",
        difficulty: 4,
        stem: "An enzyme follows Michaelis–Menten kinetics. A reversible inhibitor is added. At saturating substrate, the maximum rate is the same as without inhibitor, but at a moderate fixed substrate the rate is lower. Which type of inhibitor is most consistent with this pattern?",
        options: [
          { id: "A", text: "Irreversible inhibitor that destroys all enzyme instantly" },
          { id: "B", text: "Competitive inhibitor" },
          { id: "C", text: "Non-competitive inhibitor" },
          { id: "D", text: "Uncompetitive inhibitor (typically lowers Vmax and apparent Km)" },
        ],
        correctOptionId: "B",
        explanation: "Unchanged Vmax at saturating substrate with reduced rate at moderate [S] matches competitive inhibition: high substrate out-competes the inhibitor. Non-competitive inhibition typically lowers Vmax. Total destruction would remove Vmax entirely.",
        distractorRationale: {
          A: "If enzyme were destroyed, no amount of substrate would restore the original Vmax.",
          C: "Classic reversible non-competitive inhibition lowers Vmax even when substrate is saturating.",
          D: "Uncompetitive inhibition lowers Vmax (and in the usual model also changes apparent Km); the stem states Vmax at saturation is unchanged.",
        },
        tags: ["inhibition", "MCQ"],
      },
    ],
    flashcards: [
      { id: "t3-2-f1", noteId: "t3-2", difficulty: 1, front: "Sketch in words: rate vs temperature for an enzyme.", back: "Rises to an optimum, then falls; high T denatures tertiary structure / active site.", examPhrasing: "Explain the effect of temperature on enzyme rate.", tags: ["temperature"] },
      { id: "t3-2-f2", noteId: "t3-2", difficulty: 2, front: "Why use buffers in pH enzyme practicals?", back: "Maintain stable pH while reaction runs; otherwise pH drift confounds the variable tested.", examPhrasing: "Explain the use of buffer solutions when investigating pH.", tags: ["pH"] },
      { id: "t3-2-f3", noteId: "t3-2", difficulty: 2, front: "High substrate: effect of doubling [enzyme] on initial rate?", back: "Approximately doubles rate (twice as many active sites working at saturation).", examPhrasing: "State the effect of enzyme concentration at saturating substrate.", tags: ["enzyme-conc"] },
      { id: "t3-2-f4", noteId: "t3-2", difficulty: 3, front: "Substrate saturation: what is Vmax?", back: "Maximum initial rate as [S] is increased; plateau when all enzyme molecules work at full turnover.", examPhrasing: "Explain Vmax in enzyme-catalysed reactions.", tags: ["Vmax"] },
      { id: "t3-2-f5", noteId: "t3-2", difficulty: 3, front: "Define Km in words (Michaelis–Menten).", back: "Substrate concentration at which rate = 1/2 Vmax; lower Km → higher apparent affinity.", examPhrasing: "Explain how Km is used to compare affinity.", tags: ["Km"] },
      { id: "t3-2-f6", noteId: "t3-2", difficulty: 4, front: "Competitive inhibitor: Vmax and Km pattern (simple).", back: "Vmax unchanged; Km increased (more substrate needed for half-max rate).", examPhrasing: "Explain effects of a competitive inhibitor.", confusionPair: "competitive vs non-competitive", tags: ["competitive"] },
      { id: "t3-2-f7", noteId: "t3-2", difficulty: 4, front: "Non-competitive inhibitor: Vmax and Km pattern (simple).", back: "Vmax decreased; Km often ~unchanged.", examPhrasing: "Explain effects of a non-competitive inhibitor.", tags: ["non-competitive"] },
      { id: "t3-2-f8", noteId: "t3-2", difficulty: 4, front: "Higher [inhibitor] at fixed [S] and [E]: what happens?", back: "More enzyme time spent inhibited; rate falls (pattern details differ for competitive vs non-competitive).", examPhrasing: "Explain effect of inhibitor concentration.", tags: ["inhibitor"] },
      { id: "t3-2-f9", noteId: "t3-2", difficulty: 5, front: "Name two advantages of immobilised enzymes.", back: "Reuse; easy separation from product; possible continuous flow; often improved operational stability.", examPhrasing: "State advantages of immobilised enzymes.", tags: ["immobilised"] },
      { id: "t3-2-f10", noteId: "t3-2", difficulty: 5, front: "Alginate entrapment: one-line idea.", back: "Sodium alginate + enzyme dropped into Ca2+ forms gel beads trapping enzyme for comparison to free enzyme.", examPhrasing: "Describe immobilising enzyme in alginate.", tags: ["alginate"] },
    ],
  },
};
