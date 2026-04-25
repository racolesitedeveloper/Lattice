import type { NoteDraft } from "./types";

/** Full teaching notes for 9700 Topic 8 — subtopics 8.1-8.3 (see lib/notes/AUTHORING.md). */
export const BIOLOGY_TOPIC8_DRAFTS: Record<string, NoteDraft> = {
  "t8-1": {
    noteId: "t8-1",
    syllabusNotes: [
      {
        id: "closed-double-circulation-overview",
        title: "Closed double circulation in mammals",
        paragraphs: [
          "The mammalian circulatory system is a closed double circulation. Closed means blood remains inside vessels and the heart, rather than directly bathing tissues. Double means blood passes through the heart twice in one complete body circuit: once through pulmonary circulation and once through systemic circulation.",
          "The system consists of the heart, blood, and blood vessels: arteries, arterioles, capillaries, venules and veins. Each vessel class has a structural pattern suited to pressure, flow speed, and exchange requirements.",
          "In pulmonary circulation, blood flows between heart and lungs for gas exchange. In systemic circulation, blood flows between heart and the rest of the body to deliver oxygen and nutrients and remove wastes.",
        ],
      },
      {
        id: "major-vessels-pulmonary-systemic",
        title: "Main blood vessels of pulmonary and systemic circulation",
        paragraphs: [
          "The pulmonary artery carries deoxygenated blood from the right ventricle to the lungs. The pulmonary vein carries oxygenated blood from the lungs to the left atrium.",
          "The aorta carries oxygenated blood from the left ventricle to the systemic circulation at high pressure. The vena cava returns deoxygenated blood from the body to the right atrium.",
          "When describing vessels, exam answers should identify both direction of flow and oxygenation status. Avoid the common shortcut that arteries always carry oxygenated blood and veins always carry deoxygenated blood; pulmonary vessels are the key exception.",
        ],
      },
      {
        id: "vessel-types-structure-function",
        title: "Arteries, veins and capillaries: recognition and structural adaptation",
        paragraphs: [
          "Arteries have thick walls with relatively narrow lumens. Their tunica media contains smooth muscle and elastic fibres to withstand and maintain high pressure from ventricular contraction.",
          "Elastic arteries (for example the aorta) contain high elastic fibre content and stretch during systole, then recoil during diastole to smooth pressure fluctuations. Muscular arteries contain more smooth muscle relative to elastic tissue and control regional blood flow by vasoconstriction and vasodilation.",
          "Veins have thinner walls, wider lumens, less smooth muscle and elastic tissue, and often valves to prevent backflow at low pressure. They are suited to return blood to the heart with support from skeletal muscle action.",
          "Capillaries are microscopic vessels with very narrow lumens and walls one endothelial cell thick. Their short diffusion distance, large total cross-sectional area, and close contact with tissue cells make them efficient exchange surfaces.",
        ],
      },
      {
        id: "recognising-vessels-and-plan-diagrams",
        title: "Recognising vessels in TS and LS, and plan-diagram expectations",
        paragraphs: [
          "In transverse section (TS), arteries usually appear with thick walls and rounder profiles; veins often show thinner walls and more irregular, collapsed outlines due to lower pressure. Capillaries appear as tiny vessels with very thin walls and narrow lumens.",
          "In longitudinal section (LS), arteries and veins show layered walls along vessel length; veins may show valves as inward folds. Capillaries appear as narrow endothelial tubes closely associated with tissue spaces.",
          "Plan diagrams for practical papers should show tissue-level arrangement, not ultrastructural detail. Use clear outlines, correct relative wall thickness and lumen size, and accurate labelling of vessel type.",
        ],
      },
      {
        id: "blood-cells-water-and-tissue-fluid",
        title: "Blood cell recognition, water transport role, and tissue fluid formation",
        paragraphs: [
          "Red blood cells (erythrocytes) are biconcave discs in mammals and lack nuclei at maturity. Monocytes are large leukocytes with kidney-shaped nuclei; neutrophils have multi-lobed nuclei and granular cytoplasm; lymphocytes are smaller with large nuclei and thin rims of cytoplasm.",
          "Water is the main component of blood and tissue fluid. Its solvent action allows transport of ions, glucose, amino acids, urea, hormones and carbon dioxide derivatives. High specific heat capacity helps buffer temperature change during circulation.",
          "Tissue fluid forms where plasma is forced out of capillaries at the arterial end by hydrostatic pressure. Large plasma proteins and cells are mostly retained in capillaries, while water and small solutes enter intercellular spaces. Tissue fluid bathes cells, enabling exchange of oxygen, nutrients and wastes before much of the fluid returns to capillaries or lymphatic vessels.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "High-mark responses in this subtopic combine accurate vessel and blood-cell identification with precise structure-function links and clear flow pathways.",
      items: [
        "Stating that all arteries carry oxygenated blood and all veins carry deoxygenated blood, without recognising pulmonary artery and pulmonary vein exceptions.",
        "Describing arteries and veins only by thickness words without linking those differences to pressure, flow, and valve function.",
        "Confusing muscular arteries with elastic arteries; elastic arteries smooth pressure pulses, while muscular arteries are key distribution vessels controlling regional flow.",
        "Drawing vessel diagrams with incorrect relative lumen sizes or adding cell-level detail in a plan diagram question.",
        "Calling all white blood cells 'lymphocytes' in micrographs; monocytes and neutrophils must be distinguished by nucleus shape and cytoplasmic appearance.",
        "Explaining tissue fluid formation without hydrostatic pressure or without noting that large proteins and blood cells generally remain in capillaries.",
      ],
    },
    workedExamples: [
      {
        id: "t8-1-ex1",
        title: "Tracing blood flow through closed double circulation",
        problem: [
          "Trace the path of a red blood cell from the right ventricle until it returns to the right atrium, naming the major vessels listed in the syllabus.",
        ],
        solution: [
          "From the right ventricle, blood enters the pulmonary artery and travels to the lungs (pulmonary circulation).",
          "After gas exchange, oxygenated blood returns via the pulmonary vein to the left atrium, then passes to the left ventricle.",
          "From the left ventricle, blood enters the aorta and travels through systemic vessels to tissues. Deoxygenated blood then returns through systemic veins to the vena cava, which empties into the right atrium.",
          "The path shows double circulation because blood passes through the heart between pulmonary and systemic circuits.",
        ],
      },
      {
        id: "t8-1-ex2",
        title: "Identifying vessel type from transverse section features",
        problem: [
          "A vessel in TS has a thick wall, a relatively small circular lumen, and abundant elastic tissue. Identify the vessel class and explain why these features are adaptive.",
        ],
        solution: [
          "This is an artery, likely an elastic artery if elastic tissue is especially prominent.",
          "A thick wall resists high pressure generated by ventricular systole, while elastic tissue allows wall stretch and recoil.",
          "Recoil maintains forward blood flow and helps smooth pressure variation between systole and diastole.",
          "A relatively narrow lumen helps sustain pressure in arterial circulation compared with veins.",
        ],
      },
      {
        id: "t8-1-ex3",
        title: "Explaining formation and function of tissue fluid",
        problem: [
          "Explain how tissue fluid forms in capillary networks and why it is important for cells.",
        ],
        solution: [
          "At the arterial end of capillaries, hydrostatic pressure forces water and small dissolved solutes out through capillary walls.",
          "Blood cells and most plasma proteins are retained because they are too large to pass through intact capillary endothelium.",
          "The resulting tissue fluid surrounds cells and provides a medium for exchange: oxygen and nutrients diffuse to cells, while carbon dioxide and metabolic wastes diffuse into fluid for removal.",
          "Much fluid re-enters capillaries toward the venous end, with excess returned via lymphatic drainage.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t8-1-st1",
        question:
          "Define a closed double circulation and name the vessel types that make up the mammalian circulatory system.",
        modelAnswer: [
          "Closed means blood remains in vessels and heart rather than directly bathing tissues. Double means blood passes through the heart twice in one complete body circuit (pulmonary and systemic).",
          "The vessel types are arteries, arterioles, capillaries, venules and veins, with major named vessels including pulmonary artery, pulmonary vein, aorta and vena cava.",
        ],
      },
      {
        id: "t8-1-st2",
        question:
          "State the functions of the pulmonary artery, pulmonary vein, aorta and vena cava.",
        modelAnswer: [
          "Pulmonary artery: carries deoxygenated blood from right ventricle to lungs.",
          "Pulmonary vein: carries oxygenated blood from lungs to left atrium.",
          "Aorta: carries oxygenated blood from left ventricle to systemic circulation.",
          "Vena cava: returns deoxygenated blood from systemic circulation to right atrium.",
        ],
      },
      {
        id: "t8-1-st3",
        question:
          "Compare structural adaptations of elastic arteries, muscular arteries, veins and capillaries to their functions.",
        modelAnswer: [
          "Elastic arteries have thick walls rich in elastic fibres, allowing stretch and recoil to withstand and smooth high pressure close to the heart.",
          "Muscular arteries have relatively more smooth muscle, enabling vasoconstriction and vasodilation to distribute blood flow to organs.",
          "Veins have thinner walls, wider lumens and valves, suiting low-pressure return of blood to the heart and prevention of backflow.",
          "Capillaries have one-cell-thick walls and narrow lumens, providing short diffusion distance and efficient exchange with tissues.",
        ],
      },
      {
        id: "t8-1-st4",
        question:
          "How would you recognise red blood cells, monocytes, neutrophils and lymphocytes in microscope images?",
        modelAnswer: [
          "Red blood cells are biconcave discs and lack nuclei in mammalian blood smears.",
          "Monocytes are large cells with kidney-shaped nuclei.",
          "Neutrophils have multi-lobed nuclei and granular cytoplasm.",
          "Lymphocytes are typically smaller with a large round nucleus and a thin rim of cytoplasm.",
        ],
      },
      {
        id: "t8-1-st5",
        question:
          "Relate two properties of water to transport in blood and tissue fluid, and state one function of tissue fluid.",
        modelAnswer: [
          "Water acts as a solvent for many ions and polar molecules, allowing transport in plasma and tissue fluid.",
          "Water has high specific heat capacity, helping blood transport and buffer heat with limited temperature fluctuation.",
          "Tissue fluid functions as the immediate exchange medium between capillary blood and body cells.",
        ],
      },
    ],
  },

  "t8-2": {
    noteId: "t8-2",
    syllabusNotes: [
      {
        id: "red-cells-haemoglobin-and-co2-enzymes",
        title: "Red blood cells in oxygen and carbon dioxide transport",
        paragraphs: [
          "Red blood cells transport oxygen mainly by reversible binding to haemoglobin. Haemoglobin loading occurs where partial pressure of oxygen is high (lungs) and unloading where it is lower (respiring tissues).",
          "Red blood cells also contribute strongly to carbon dioxide transport. Carbonic anhydrase in red blood cells catalyses rapid conversion between carbon dioxide and carbonic acid, supporting transport as hydrogencarbonate ions in plasma.",
          "Within red blood cells, some hydrogen ions bind to haemoglobin, forming haemoglobinic acid (HHb). Some carbon dioxide binds directly to haemoglobin to form carbaminohaemoglobin. These forms help buffer pH and support efficient gas carriage.",
        ],
      },
      {
        id: "chloride-shift-mechanism",
        title: "Chloride shift and its physiological importance",
        paragraphs: [
          "In tissues, carbon dioxide diffuses into red blood cells and is converted to carbonic acid by carbonic anhydrase, then dissociates to H+ and HCO3-. Hydrogencarbonate accumulates in red blood cells and diffuses out into plasma.",
          "To maintain electrical neutrality, chloride ions move from plasma into red blood cells as hydrogencarbonate leaves. This exchange is the chloride shift.",
          "In lungs, events reverse: hydrogencarbonate re-enters red cells, chloride ions move out, carbonic acid reforms and dissociates to carbon dioxide and water, and carbon dioxide diffuses into alveoli for exhalation.",
          "The chloride shift is important because it allows large-scale transport of carbon dioxide in plasma as hydrogencarbonate while maintaining ionic balance between red cells and plasma.",
        ],
      },
      {
        id: "co2-transport-in-plasma",
        title: "Role of plasma in carbon dioxide transport",
        paragraphs: [
          "Plasma transports carbon dioxide in three main forms: mostly as hydrogencarbonate ions, some dissolved carbon dioxide, and some as plasma proteins in carbamino compounds.",
          "Although many conversion reactions occur inside red blood cells, plasma is the major medium carrying hydrogencarbonate through circulation. This is why plasma is central to carbon dioxide transport, not just a passive background fluid.",
          "In structured responses, it is best to state relative importance qualitatively: most carbon dioxide is transported as hydrogencarbonate in plasma, smaller fractions dissolved or bound to proteins and haemoglobin.",
        ],
      },
      {
        id: "oxygen-dissociation-curve",
        title: "Oxygen dissociation curve of adult haemoglobin",
        paragraphs: [
          "The oxygen dissociation curve plots percentage saturation of haemoglobin against partial pressure of oxygen (pO2). For adult haemoglobin it is sigmoidal (S-shaped) because of cooperative binding.",
          "At low pO2, haemoglobin affinity is relatively low so loading is limited. Binding of one oxygen molecule induces conformational changes that increase affinity for further oxygen molecules, causing a steeper mid-section. At high pO2, saturation approaches a plateau as binding sites become occupied.",
          "The sigmoidal shape supports physiology: in lungs (high pO2), haemoglobin becomes highly saturated; in respiring tissues (lower pO2), saturation falls and oxygen unloads substantially.",
        ],
      },
      {
        id: "bohr-shift-and-importance",
        title: "Bohr shift and adaptation to metabolic demand",
        paragraphs: [
          "The Bohr shift describes the rightward shift of the oxygen dissociation curve when carbon dioxide concentration increases and pH falls. Under these conditions, haemoglobin affinity for oxygen decreases.",
          "In actively respiring tissues, high carbon dioxide and H+ promote oxygen unloading where it is most needed. In lungs, where carbon dioxide is lower and pH relatively higher, the curve shifts leftward relative to tissues, favouring oxygen loading.",
          "This dynamic shift links carbon dioxide transport and oxygen delivery, improving matching of oxygen release to tissue metabolic activity.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "This subtopic rewards clear sequence logic from tissues to lungs and accurate curve interpretation using pO2, saturation, and affinity language.",
      items: [
        "Stating that all carbon dioxide is carried by haemoglobin; most is transported as hydrogencarbonate ions in plasma.",
        "Describing chloride shift as chloride leaving red blood cells in tissues; in tissues chloride enters red blood cells as hydrogencarbonate leaves.",
        "Using the term Bohr shift without direction or consequence; full credit usually requires rightward shift with reduced affinity and enhanced unloading in respiring tissues.",
        "Confusing haemoglobinic acid with carbonic acid; haemoglobinic acid is H+ bound to haemoglobin, while carbonic acid comes from dissolved carbon dioxide hydration.",
        "Interpreting the oxygen dissociation curve as linear and missing the cooperative binding explanation for the sigmoidal shape.",
        "Discussing lungs and tissues without linking each site to characteristic pO2 and resulting loading/unloading outcomes.",
      ],
    },
    workedExamples: [
      {
        id: "t8-2-ex1",
        title: "Following carbon dioxide from tissue cell to alveolus",
        problem: [
          "Trace the pathway of carbon dioxide produced in respiring tissues until it is exhaled, including carbonic anhydrase, chloride shift and plasma transport.",
        ],
        solution: [
          "Carbon dioxide diffuses from tissue cells into blood and then into red blood cells. Carbonic anhydrase catalyses formation of carbonic acid, which dissociates to H+ and HCO3-.",
          "H+ is buffered partly by binding to haemoglobin (forming haemoglobinic acid). HCO3- diffuses into plasma; chloride ions enter red blood cells to maintain charge balance (chloride shift). Most carbon dioxide is then carried in plasma as hydrogencarbonate.",
          "In lungs, processes reverse: hydrogencarbonate returns to red blood cells as chloride leaves, carbonic acid reforms and is converted to carbon dioxide and water, and carbon dioxide diffuses into alveoli for exhalation.",
        ],
      },
      {
        id: "t8-2-ex2",
        title: "Using the oxygen dissociation curve in lungs and tissues",
        problem: [
          "Explain why adult haemoglobin can load oxygen efficiently in lungs and unload oxygen effectively in actively respiring tissues using the shape of its dissociation curve.",
        ],
        solution: [
          "At lung pO2 (high), the curve is near the plateau, so haemoglobin reaches high saturation and loads oxygen efficiently.",
          "At tissue pO2 (lower), the curve passes through the steeper region, so a moderate drop in pO2 causes a relatively large drop in saturation and therefore substantial oxygen unloading.",
          "Because the curve is sigmoidal due to cooperative binding, haemoglobin acts as both an effective loader in lungs and unloader in tissues.",
        ],
      },
      {
        id: "t8-2-ex3",
        title: "Explaining the Bohr shift in exercise",
        problem: [
          "During vigorous exercise, muscle carbon dioxide production increases and local pH decreases. Predict and explain how this affects oxygen release from haemoglobin.",
        ],
        solution: [
          "Higher carbon dioxide and lower pH cause a Bohr shift: the oxygen dissociation curve shifts right.",
          "A right shift means haemoglobin has lower affinity for oxygen at a given pO2, so saturation is lower and oxygen unloading is increased.",
          "This increases oxygen delivery to the most metabolically active tissues, matching supply to demand during exercise.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t8-2-st1",
        question:
          "State roles of haemoglobin, carbonic anhydrase, haemoglobinic acid and carbaminohaemoglobin in transport of oxygen and carbon dioxide.",
        modelAnswer: [
          "Haemoglobin reversibly binds oxygen for transport between lungs and tissues.",
          "Carbonic anhydrase in red blood cells catalyses conversion between carbon dioxide and carbonic acid, enabling rapid formation/removal of hydrogencarbonate.",
          "Haemoglobinic acid forms when H+ binds haemoglobin, helping buffer H+ generated during carbon dioxide transport.",
          "Carbaminohaemoglobin forms when some carbon dioxide binds directly to haemoglobin, contributing to carbon dioxide transport.",
        ],
      },
      {
        id: "t8-2-st2",
        question:
          "Describe the chloride shift in tissues and explain why it is important.",
        modelAnswer: [
          "In tissues, carbon dioxide entering red blood cells is converted to hydrogencarbonate, which diffuses out into plasma. Chloride ions move into red blood cells as hydrogencarbonate leaves.",
          "This chloride shift maintains electrical neutrality and permits large amounts of carbon dioxide to be transported in plasma as hydrogencarbonate.",
        ],
      },
      {
        id: "t8-2-st3",
        question:
          "How does plasma transport carbon dioxide?",
        modelAnswer: [
          "Plasma carries most carbon dioxide as hydrogencarbonate ions, with smaller amounts as dissolved carbon dioxide and as carbamino compounds on plasma proteins.",
          "Because hydrogencarbonate is the dominant form, plasma is a major transport medium for carbon dioxide.",
        ],
      },
      {
        id: "t8-2-st4",
        question:
          "Describe and explain the sigmoidal oxygen dissociation curve of adult haemoglobin.",
        modelAnswer: [
          "The curve is S-shaped when haemoglobin saturation is plotted against pO2. At low pO2 loading is limited; once one oxygen molecule binds, affinity rises and the curve steepens (cooperative binding). At high pO2 the curve plateaus as binding sites approach full occupancy.",
          "This supports efficient loading in lungs (high pO2) and unloading in tissues (lower pO2).",
        ],
      },
      {
        id: "t8-2-st5",
        question:
          "Define the Bohr shift and explain its significance in gas exchange.",
        modelAnswer: [
          "The Bohr shift is the rightward shift of the oxygen dissociation curve at higher carbon dioxide concentration and lower pH.",
          "It lowers haemoglobin oxygen affinity, increasing oxygen unloading in respiring tissues. In lungs, relatively lower carbon dioxide favors the opposite tendency, assisting oxygen loading.",
        ],
      },
    ],
  },

  "t8-3": {
    noteId: "t8-3",
    syllabusNotes: [
      {
        id: "heart-structure-external-internal",
        title: "External and internal structure of the mammalian heart",
        paragraphs: [
          "The mammalian heart is a muscular, four-chambered organ: right atrium, right ventricle, left atrium and left ventricle. A septum separates right (deoxygenated side) and left (oxygenated side), preventing mixing under normal conditions.",
          "Externally, major vessels include the aorta, pulmonary artery, pulmonary veins and vena cava. Coronary arteries supply oxygenated blood to cardiac muscle itself, highlighting that myocardium has high metabolic demand.",
          "Internally, atrioventricular valves (tricuspid on right, bicuspid/mitral on left) lie between atria and ventricles, while semilunar valves are at exits of right ventricle (pulmonary valve) and left ventricle (aortic valve). Papillary muscles and tendinous cords help prevent atrioventricular valve inversion during ventricular systole.",
        ],
      },
      {
        id: "wall-thickness-differences",
        title: "Why chamber wall thickness differs",
        paragraphs: [
          "Atrial walls are thinner than ventricular walls because atria only push blood a short distance into ventricles at relatively low pressure.",
          "Ventricular walls are thicker because ventricles must generate higher pressure to eject blood into arteries.",
          "The left ventricle has the thickest wall because it pumps blood through systemic circulation, which has greater resistance and longer pathway than pulmonary circulation. The right ventricle pumps to nearby lungs at lower pressure and therefore has a thinner wall.",
        ],
      },
      {
        id: "cardiac-cycle-and-valves",
        title: "Cardiac cycle: pressure changes, systole/diastole and valve action",
        paragraphs: [
          "The cardiac cycle is one complete heartbeat sequence, including atrial systole, ventricular systole and overall diastole. Blood flow direction is governed by pressure gradients and valve states.",
          "During atrial systole, atrial pressure exceeds ventricular pressure, atrioventricular valves are open, and blood is forced into ventricles. During ventricular systole, ventricular pressure rises sharply; atrioventricular valves close as ventricular pressure exceeds atrial pressure, and semilunar valves open once ventricular pressure exceeds arterial pressure.",
          "During diastole, ventricles relax and ventricular pressure falls below arterial pressure, causing semilunar valves to close and preventing backflow. As ventricular pressure falls below atrial pressure, atrioventricular valves reopen and passive ventricular filling resumes.",
          "The sequence of opening and closing is therefore pressure-dependent, not actively pulled open by muscles in the valve cusps.",
        ],
      },
      {
        id: "conduction-system-nodes-purkyne",
        title: "Electrical coordination by SAN, AVN and Purkyne tissue",
        paragraphs: [
          "The sinoatrial node (SAN) in the right atrium acts as the pacemaker, generating rhythmic waves of excitation that spread across atrial muscle and trigger atrial systole.",
          "Insulating tissue between atria and ventricles prevents direct spread of excitation, so impulses reach ventricles via the atrioventricular node (AVN). The AVN introduces a short delay, allowing atria to complete contraction and ventricular filling before ventricular systole begins.",
          "From AVN, excitation passes through conduction pathways in the septum and then through Purkyne tissue in ventricular walls. This causes coordinated ventricular contraction from apex upward, efficiently ejecting blood into pulmonary artery and aorta.",
          "At this syllabus level, focus is intrinsic conduction sequence rather than nervous or hormonal control.",
        ],
      },
      {
        id: "integrating-structure-pressure-and-conduction",
        title: "Integrated view of heart function in exam responses",
        paragraphs: [
          "Strong responses link anatomy to mechanics and timing: chamber structure establishes pressure capability, valves enforce one-way flow, and conduction tissue sequences contraction.",
          "When asked to explain blood pressure changes during systole and diastole, include both which chamber is contracting and which valves are open or closed at that time.",
          "When asked node roles, describe order and consequence: SAN initiates, AVN delays and relays, Purkyne network coordinates ventricular systole.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Most marks are lost when candidates list parts of the heart without connecting them to pressure gradients, valve function and conduction sequence.",
      items: [
        "Mixing up left and right ventricle thickness explanations, or claiming right ventricle is thickest because it pumps first.",
        "Saying valves open and close because they are actively contracted by muscles; valve movement is passive and driven by pressure differences.",
        "Describing systole and diastole without specifying whether atrial or ventricular events are being discussed.",
        "Stating SAN directly stimulates ventricles; ventricular excitation is relayed via AVN and Purkyne tissue.",
        "Ignoring AVN delay, which is essential for atrial emptying before ventricular contraction.",
        "Omitting internal structures (valves, septum, chamber arrangement) when asked for heart structure.",
      ],
    },
    workedExamples: [
      {
        id: "t8-3-ex1",
        title: "Explaining ventricular wall thickness asymmetry",
        problem: [
          "Explain why the left ventricular wall is thicker than the right ventricular wall, and why both ventricles are thicker than atria.",
        ],
        solution: [
          "Both ventricles need thicker myocardium than atria because they generate higher pressure to eject blood into arteries, whereas atria only move blood into ventricles.",
          "The left ventricle must generate the highest pressure to drive blood through systemic circulation with greater resistance and longer pathway.",
          "The right ventricle pumps only to lungs over a shorter, lower-resistance pathway, so a thinner wall is sufficient and helps avoid excessive pulmonary pressure.",
        ],
      },
      {
        id: "t8-3-ex2",
        title: "Linking pressure changes to valve movements in one cycle",
        problem: [
          "Describe what happens to atrioventricular and semilunar valves as the heart moves from ventricular diastole to ventricular systole and back to diastole.",
        ],
        solution: [
          "During ventricular diastole, ventricular pressure is low; atrioventricular valves are open when atrial pressure exceeds ventricular pressure, allowing filling. Semilunar valves are closed because arterial pressure exceeds ventricular pressure.",
          "As ventricular systole begins, ventricular pressure rises above atrial pressure, so atrioventricular valves close. When ventricular pressure exceeds arterial pressure, semilunar valves open and blood is ejected.",
          "As ventricles relax in diastole, ventricular pressure falls below arterial pressure, semilunar valves close, and when ventricular pressure falls below atrial pressure, atrioventricular valves reopen for filling.",
        ],
      },
      {
        id: "t8-3-ex3",
        title: "Explaining conduction order and coordinated contraction",
        problem: [
          "A student writes: 'The AVN starts each heartbeat and then the SAN contracts ventricles.' Correct this statement and explain the actual conduction pathway.",
        ],
        solution: [
          "The statement is reversed. The SAN initiates each heartbeat as the pacemaker and causes atrial excitation and contraction.",
          "Impulse then reaches the AVN, where a brief delay allows ventricular filling to complete.",
          "Excitation passes from AVN through conducting tissue in the septum to Purkyne tissue in ventricles, causing coordinated ventricular contraction from apex upward.",
          "This order ensures efficient one-way pumping and proper timing between atrial and ventricular systole.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t8-3-st1",
        question:
          "Describe key external and internal structural features of the mammalian heart.",
        modelAnswer: [
          "The heart has four chambers (right/left atria and ventricles) separated by a septum. Major vessels are aorta, pulmonary artery, pulmonary veins and vena cava. Internally it has atrioventricular valves (tricuspid and bicuspid/mitral), semilunar valves at ventricular exits, and muscular walls adapted to pumping demands.",
        ],
      },
      {
        id: "t8-3-st2",
        question:
          "Explain differences in wall thickness between atria and ventricles, and between left and right ventricles.",
        modelAnswer: [
          "Atria have thinner walls because they pump blood only into ventricles at low pressure. Ventricles have thicker walls because they pump blood into arteries at higher pressure.",
          "Left ventricle is thickest because it pumps through the whole systemic circulation; right ventricle is thinner because it pumps to lungs at lower pressure.",
        ],
      },
      {
        id: "t8-3-st3",
        question:
          "Describe the cardiac cycle with reference to systole, diastole, pressure changes and valve opening/closing.",
        modelAnswer: [
          "In atrial systole, atrial pressure rises above ventricular pressure so atrioventricular valves are open and ventricles fill. In ventricular systole, ventricular pressure rises so atrioventricular valves close; when ventricular pressure exceeds arterial pressure, semilunar valves open and blood is ejected.",
          "During diastole, ventricles relax; semilunar valves close when arterial pressure exceeds ventricular pressure, and atrioventricular valves open again when ventricular pressure falls below atrial pressure, allowing filling.",
        ],
      },
      {
        id: "t8-3-st4",
        question:
          "State roles of the SAN, AVN and Purkyne tissue in the cardiac cycle.",
        modelAnswer: [
          "SAN acts as pacemaker, initiating rhythmic excitation and atrial systole.",
          "AVN receives excitation, delays it briefly, and relays it to ventricular conducting pathways.",
          "Purkyne tissue rapidly distributes excitation through ventricles, coordinating ventricular systole.",
        ],
      },
      {
        id: "t8-3-st5",
        question:
          "Why is AVN delay important for efficient heart function?",
        modelAnswer: [
          "The delay ensures atria contract and empty blood into ventricles before ventricles begin systole.",
          "Without this timing separation, ventricular filling would be reduced and cardiac output would be less efficient.",
        ],
      },
    ],
  },
};
