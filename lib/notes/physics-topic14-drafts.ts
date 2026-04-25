import type { NoteDraft } from "./types";

/** Full teaching notes for 9702 Topic 14 — subtopics 14.1–14.3 (see lib/notes/AUTHORING.md). */
export const PHYSICS_TOPIC14_DRAFTS: Record<string, NoteDraft> = {
  "t14-1": {
    noteId: "t14-1",
    syllabusNotes: [
      {
        id: "direction-of-thermal-energy-transfer",
        title: "Direction of thermal energy transfer",
        paragraphs: [
          "Thermal energy is transferred when there is a temperature difference. The transfer is always from a region at higher temperature to a region at lower temperature.",
          "This statement does not require the two regions to be different substances. It can be between two solids in contact, between a fluid and container wall, or between parts of one body if a temperature gradient exists.",
          "The transfer mechanisms can be conduction, convection and radiation, but for this subtopic the key requirement is the direction rule set by temperature difference.",
        ],
      },
      {
        id: "meaning-of-equal-temperature",
        title: "Equal temperature and thermal equilibrium",
        paragraphs: [
          "Two regions are in thermal equilibrium when they are at the same temperature and there is no net transfer of thermal energy between them.",
          "If temperature is equal, microscopic exchanges still occur, but opposite directions balance so net transfer is zero.",
          "Thermal equilibrium is therefore a condition about net transfer, not about absence of molecular motion.",
        ],
      },
      {
        id: "zeroth-law-idea",
        title: "Why thermal equilibrium allows temperature measurement",
        paragraphs: [
          "If system A is in thermal equilibrium with system B, and B is in thermal equilibrium with system C, then A and C are also in thermal equilibrium. This transitive property is the practical basis of temperature measurement.",
          "A thermometer works by reaching thermal equilibrium with what it measures. The thermometer reading then represents the temperature of that system.",
          "In careful experiments, allow sufficient time for equilibrium before recording readings.",
        ],
      },
      {
        id: "net-vs-total-transfer-language",
        title: "Precise language for examination answers",
        paragraphs: [
          "Use net transfer language precisely. Saying no heat transfer at equilibrium can be accepted in simple contexts, but more accurate phrasing is no net transfer of thermal energy.",
          "When two objects at different temperatures are brought into contact in an insulated environment, they move toward a common final temperature between the initial values.",
          "The hotter object loses thermal energy and the cooler object gains thermal energy until thermal equilibrium is reached.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Examiners reward exact thermal language. Most lost marks here come from vague wording about heat flow direction and misunderstanding what equilibrium means.",
      items: [
        "Stating thermal energy can flow from colder to hotter region by itself in ordinary contact situations.",
        "Defining thermal equilibrium as both objects having same internal energy rather than same temperature with no net thermal transfer.",
        "Saying all molecular motion stops at equilibrium. Motion continues; only net transfer vanishes.",
        "Using heat as a stored quantity in an object without context. In this course, heat is better treated as thermal energy in transfer.",
        "For contact problems, forgetting that final equilibrium temperature must lie between initial temperatures for an isolated pair.",
      ],
    },
    workedExamples: [
      {
        id: "t14-1-ex1",
        title: "Predicting transfer direction",
        problem: [
          "A metal block at 80 °C is placed in contact with water at 25 °C in an insulated beaker. State the direction of thermal energy transfer at first contact and at final equilibrium.",
        ],
        solution: [
          "At first contact, thermal energy transfers from the hotter metal (80 °C) to the cooler water (25 °C).",
          "As temperatures approach each other, net transfer rate decreases.",
          "At final thermal equilibrium, both are at the same temperature and net thermal energy transfer is zero.",
        ],
      },
      {
        id: "t14-1-ex2",
        title: "Checking thermal-equilibrium logic",
        problem: [
          "Object A is in thermal equilibrium with B. Object B is in thermal equilibrium with C. What can be concluded about A and C, and what does this imply about their temperatures?",
        ],
        solution: [
          "A and C are in thermal equilibrium with each other.",
          "Therefore A and C have equal temperature.",
          "This is the key principle that allows a thermometer (B) to compare temperatures of different systems reliably.",
        ],
      },
      {
        id: "t14-1-ex3",
        title: "Interpreting net transfer at equal temperature",
        problem: [
          "Two identical containers of different substances are both measured at 40.0 °C and placed in contact in an insulated box. A student says no energy exchange occurs because both are at same temperature. Comment.",
        ],
        solution: [
          "The correct statement is no net thermal energy transfer.",
          "Microscopic exchange can occur in both directions, but because temperatures are equal, opposite exchanges balance.",
          "So thermal equilibrium means zero net transfer, not zero microscopic interaction.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t14-1-st1",
        question:
          "State the direction of thermal energy transfer between two regions at different temperatures.",
        modelAnswer: [
          "Thermal energy transfers from the region at higher temperature to the region at lower temperature.",
        ],
      },
      {
        id: "t14-1-st2",
        question:
          "Define thermal equilibrium between two regions.",
        modelAnswer: [
          "Thermal equilibrium means equal temperature and no net transfer of thermal energy between the regions.",
        ],
      },
      {
        id: "t14-1-st3",
        question:
          "A cup of tea cools from 90 °C toward room temperature 22 °C. Explain the direction of thermal transfer during cooling.",
        modelAnswer: [
          "The tea is initially hotter than surroundings, so thermal energy transfers from tea to surroundings.",
          "As tea cools, the temperature difference decreases, so transfer rate decreases.",
          "At thermal equilibrium with room air, net thermal transfer is zero.",
        ],
      },
      {
        id: "t14-1-st4",
        question:
          "Why does a thermometer need time before giving a reliable reading?",
        modelAnswer: [
          "The thermometer must reach thermal equilibrium with the measured system.",
          "Before equilibrium, thermometer temperature is still changing, so reading is not final.",
        ],
      },
      {
        id: "t14-1-st5",
        question:
          "Two blocks in contact remain at different temperatures after a long time. Give one possible reason based on system conditions.",
        modelAnswer: [
          "They may not be an isolated pair; one or both blocks may exchange thermal energy with surroundings, so a steady state with different temperatures can persist.",
        ],
      },
    ],
  },

  "t14-2": {
    noteId: "t14-2",
    syllabusNotes: [
      {
        id: "thermometric-properties",
        title: "Thermometric properties and examples",
        paragraphs: [
          "Temperature can be measured using any physical property that changes in a predictable way with temperature. Such a property is called a thermometric property.",
          "Syllabus examples include density of a liquid, volume of a gas at constant pressure, resistance of a metal, and e.m.f. of a thermocouple.",
          "A useful thermometer needs a property that is reproducible, sensitive enough over the required range, and calibratable against fixed points or a standard scale.",
        ],
      },
      {
        id: "thermodynamic-scale-independence",
        title: "Thermodynamic temperature scale",
        paragraphs: [
          "The thermodynamic temperature scale (kelvin scale) does not depend on the property of any particular substance.",
          "This differs from practical thermometers, which rely on one chosen thermometric property and may require calibration corrections.",
          "Because the thermodynamic scale is fundamental, it provides a common reference for all thermal physics equations.",
        ],
      },
      {
        id: "kelvin-celsius-relationship",
        title: "Converting kelvin and degree Celsius",
        paragraphs: [
          "Thermodynamic temperature T in kelvin and Celsius temperature θ are related by T/K = θ/°C + 273.15.",
          "Numerically this means T = θ + 273.15 and θ = T - 273.15.",
          "A temperature interval has the same size in kelvin and Celsius units, so a change of 1 K equals a change of 1 °C.",
        ],
      },
      {
        id: "absolute-zero-meaning",
        title: "Absolute zero",
        paragraphs: [
          "Zero kelvin is the lowest possible temperature on the thermodynamic scale. It is called absolute zero.",
          "Absolute zero corresponds to T = 0 K, which is θ = -273.15 °C.",
          "No physical temperature can be lower than 0 K within this scale.",
        ],
      },
      {
        id: "good-exam-practice-on-scales",
        title: "Scale conventions in exam calculations",
        paragraphs: [
          "In gas-law and thermodynamics calculations, use kelvin unless a relation explicitly uses Celsius difference only.",
          "Write units clearly as K or °C. Do not write degree symbol with kelvin.",
          "Check for common arithmetic slip: adding 273 instead of 273.15 where precision is required.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Temperature-scale questions are usually direct, but markers penalise careless unit handling and confusion between practical thermometers and the thermodynamic scale.",
      items: [
        "Writing 25 K for room temperature because Celsius-to-kelvin offset was omitted.",
        "Attaching degree symbol to kelvin, for example 300 °K.",
        "Claiming thermodynamic scale is based on one specific substance property.",
        "Using Celsius values directly in equations that require absolute temperature.",
        "Treating 0 °C as absolute zero instead of 0 K.",
      ],
    },
    workedExamples: [
      {
        id: "t14-2-ex1",
        title: "Celsius to kelvin conversion",
        problem: [
          "Convert 27.0 °C and -15.0 °C to thermodynamic temperature.",
        ],
        solution: [
          "Use T = θ + 273.15.",
          "For 27.0 °C: T = 27.0 + 273.15 = 300.15 K.",
          "For -15.0 °C: T = -15.0 + 273.15 = 258.15 K.",
        ],
      },
      {
        id: "t14-2-ex2",
        title: "Kelvin to Celsius conversion",
        problem: [
          "A sample is at 350 K. Find its Celsius temperature and state whether it is above or below room temperature (assume room temperature is about 20 °C).",
        ],
        solution: [
          "Use θ = T - 273.15.",
          "θ = 350 - 273.15 = 76.85 °C.",
          "So the sample is well above room temperature.",
        ],
      },
      {
        id: "t14-2-ex3",
        title: "Identifying thermometric properties",
        problem: [
          "A student proposes four devices: (i) liquid-in-glass thermometer using liquid density change, (ii) constant-pressure gas thermometer using gas volume, (iii) platinum resistance thermometer, (iv) thermocouple meter. Explain the thermometric property in each case.",
        ],
        solution: [
          "(i) Uses change of liquid density (or equivalent column-length effect linked to density/volume change).",
          "(ii) Uses gas volume at constant pressure as temperature-dependent property.",
          "(iii) Uses resistance of a metal (platinum) varying with temperature.",
          "(iv) Uses thermocouple e.m.f. varying with junction temperature difference.",
          "All are practical thermometers based on a measurable property that varies with temperature.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t14-2-st1",
        question:
          "State four examples of physical properties that can be used to measure temperature in this syllabus.",
        modelAnswer: [
          "Density of a liquid, volume of a gas at constant pressure, resistance of a metal, and e.m.f. of a thermocouple.",
        ],
      },
      {
        id: "t14-2-st2",
        question:
          "Write the relationship between kelvin and Celsius temperatures.",
        modelAnswer: [
          "T/K = θ/°C + 273.15, equivalently T = θ + 273.15.",
        ],
      },
      {
        id: "t14-2-st3",
        question:
          "Convert 0.0 °C and 100.0 °C to kelvin.",
        modelAnswer: [
          "0.0 °C = 273.15 K.",
          "100.0 °C = 373.15 K.",
        ],
      },
      {
        id: "t14-2-st4",
        question:
          "What is absolute zero in kelvin and in degrees Celsius?",
        modelAnswer: [
          "Absolute zero is 0 K, which is -273.15 °C.",
        ],
      },
      {
        id: "t14-2-st5",
        question:
          "Explain in one clear statement what is meant by saying the thermodynamic scale does not depend on any particular substance.",
        modelAnswer: [
          "Its definition is fundamental and independent of a chosen thermometer material, so it is not tied to one specific thermometric property such as liquid expansion or metal resistance.",
        ],
      },
    ],
  },

  "t14-3": {
    noteId: "t14-3",
    syllabusNotes: [
      {
        id: "specific-heat-capacity-definition",
        title: "Specific heat capacity",
        paragraphs: [
          "Specific heat capacity c is defined as the thermal energy required to raise the temperature of unit mass of a substance by 1 K (or 1 °C).",
          "For temperature change without phase change, Q = mcΔT, where Q is thermal energy transferred, m is mass, and ΔT is temperature change.",
          "SI unit of c is J kg⁻¹ K⁻¹. Because 1 K and 1 °C represent equal interval size, J kg⁻¹ °C⁻¹ is numerically equivalent for interval calculations.",
        ],
      },
      {
        id: "using-q-m-c-delta-t",
        title: "Applying Q = mcΔT correctly",
        paragraphs: [
          "Use this relation only when substance remains in the same phase over the temperature interval.",
          "The sign of Q follows transfer direction: Q positive when thermal energy is supplied to the substance, Q negative when it loses thermal energy.",
          "For mixed-substance energy balance in insulated systems, total energy lost equals total energy gained, with each part often modeled by Q = mcΔT.",
        ],
      },
      {
        id: "specific-latent-heat-definition",
        title: "Specific latent heat",
        paragraphs: [
          "Specific latent heat L is thermal energy required to change phase of unit mass at constant temperature.",
          "For phase change, Q = mL.",
          "During a pure phase change at fixed pressure, temperature stays constant even though thermal energy is transferred, because energy changes internal molecular configuration rather than average kinetic energy.",
        ],
      },
      {
        id: "fusion-vaporisation-distinction",
        title: "Fusion and vaporisation latent heats",
        paragraphs: [
          "Specific latent heat of fusion Lf refers to solid-liquid change at melting/freezing point.",
          "Specific latent heat of vaporisation Lv refers to liquid-gas change at boiling/condensation point.",
          "Typically Lv is much larger than Lf for the same substance because separating molecules into gas phase requires larger energy change.",
        ],
      },
      {
        id: "combined-heating-and-phase-change-processes",
        title: "Processes with both temperature change and phase change",
        paragraphs: [
          "Many practical questions involve multiple stages, for example heating ice to 0 °C, melting it, then heating water to a final temperature.",
          "Treat each stage separately: use Q = mcΔT for temperature-change stages and Q = mL for phase-change stages, then sum energies.",
          "Use consistent SI units for mass and temperature intervals, and distinguish carefully between c and L symbols in calculations.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "This section is calculation-heavy but highly scorable. Examiners mainly penalise mixing c and L equations, unit slips, and forgetting that temperature is constant during phase change.",
      items: [
        "Using Q = mcΔT during melting or boiling where ΔT is zero and phase is changing.",
        "Using Q = mL for ordinary temperature rise with no phase change.",
        "Confusing latent heat of fusion with latent heat of vaporisation.",
        "Leaving mass in g when c is in J kg⁻¹ K⁻¹.",
        "Subtracting 273.15 when only temperature interval is needed in Q = mcΔT.",
      ],
    },
    workedExamples: [
      {
        id: "t14-3-ex1",
        title: "Specific heat capacity calculation",
        problem: [
          "A 0.80 kg aluminium block receives 18 000 J of thermal energy and its temperature rises from 22 °C to 46 °C. Calculate the specific heat capacity of aluminium from these data.",
        ],
        solution: [
          "Use Q = mcΔT, so c = Q/(mΔT).",
          "Temperature change ΔT = 46 - 22 = 24 K.",
          "c = 18 000/(0.80 x 24) = 937.5 J kg⁻¹ K⁻¹.",
          "So c is about 9.38 x 10² J kg⁻¹ K⁻¹.",
        ],
      },
      {
        id: "t14-3-ex2",
        title: "Specific latent heat of fusion",
        problem: [
          "An ice sample of mass 0.15 kg at 0 °C is completely melted to water at 0 °C by supplying 50 100 J. Determine the specific latent heat of fusion.",
        ],
        solution: [
          "Phase change at constant temperature uses Q = mL.",
          "So Lf = Q/m = 50 100/0.15 = 334 000 J kg⁻¹.",
          "Specific latent heat of fusion is 3.34 x 10⁵ J kg⁻¹.",
        ],
      },
      {
        id: "t14-3-ex3",
        title: "Combined-stage heating and vaporisation",
        problem: [
          "Calculate total thermal energy required to convert 0.20 kg of water at 25 °C to steam at 100 °C. Use cwater = 4200 J kg⁻¹ K⁻¹ and Lv = 2.26 x 10⁶ J kg⁻¹.",
        ],
        solution: [
          "Stage 1: heat water from 25 °C to 100 °C.",
          "Q1 = mcΔT = 0.20 x 4200 x (100 - 25) = 63 000 J.",
          "Stage 2: vaporise at 100 °C.",
          "Q2 = mLv = 0.20 x 2.26 x 10⁶ = 452 000 J.",
          "Total Q = Q1 + Q2 = 515 000 J = 5.15 x 10⁵ J.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t14-3-st1",
        question:
          "Define specific heat capacity and write its standard equation.",
        modelAnswer: [
          "Specific heat capacity is the thermal energy needed to raise temperature of unit mass by 1 K.",
          "Equation: Q = mcΔT.",
        ],
      },
      {
        id: "t14-3-st2",
        question:
          "Define specific latent heat and write its standard equation.",
        modelAnswer: [
          "Specific latent heat is the thermal energy needed to change phase of unit mass at constant temperature.",
          "Equation: Q = mL.",
        ],
      },
      {
        id: "t14-3-st3",
        question:
          "State clearly the difference between specific latent heat of fusion and specific latent heat of vaporisation.",
        modelAnswer: [
          "Specific latent heat of fusion refers to energy per unit mass for solid-liquid phase change at melting/freezing point.",
          "Specific latent heat of vaporisation refers to energy per unit mass for liquid-gas phase change at boiling/condensation point.",
        ],
      },
      {
        id: "t14-3-st4",
        question:
          "A 0.50 kg metal sample with c = 380 J kg⁻¹ K⁻¹ cools by 40 K. Find the magnitude of thermal energy transferred.",
        modelAnswer: [
          "Use Q = mcΔT in magnitude form.",
          "Q = 0.50 x 380 x 40 = 7600 J.",
          "Magnitude of thermal transfer is 7.6 x 10³ J.",
        ],
      },
      {
        id: "t14-3-st5",
        question:
          "A heater supplies 9.0 x 10⁴ J to 0.040 kg of a liquid at its boiling point, producing complete vaporisation with no temperature rise. Calculate specific latent heat of vaporisation.",
        modelAnswer: [
          "Use Lv = Q/m because phase change occurs at constant temperature.",
          "Lv = (9.0 x 10⁴)/0.040 = 2.25 x 10⁶ J kg⁻¹.",
        ],
      },
    ],
  },
};
