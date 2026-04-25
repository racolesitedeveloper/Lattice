import type { NoteDraft } from "./types";

/** Full teaching notes for 9701 Topic 4 — subtopics 4.1-4.2 (see lib/notes/AUTHORING.md). */
export const CHEMISTRY_TOPIC4_DRAFTS: Record<string, NoteDraft> = {
  "t4-1": {
    noteId: "t4-1",
    syllabusNotes: [
      {
        id: "pressure-origin",
        title: "How gas pressure arises from particle collisions",
        paragraphs: [
          "Gas pressure is the force per unit area on the walls of a container. At particle level, pressure comes from gas molecules moving randomly and colliding with the container walls. Each collision changes the momentum of a molecule; by Newton's laws, that momentum change means a force is exerted on the wall.",
          "If there are more collisions per second, or each collision is harder (greater momentum change), the average force on the wall is larger and pressure increases. This particle-collision picture is the physical origin of the pressure term p in pV = nRT.",
          "Increasing temperature raises the average kinetic energy of molecules, so collisions become more frequent and more forceful. At constant volume, this gives a higher pressure. Increasing volume at fixed amount and temperature spreads particles out, so collision frequency with any given wall area decreases and pressure falls.",
        ],
      },
      {
        id: "ideal-gas-model",
        title: "Ideal-gas assumptions and why they matter",
        paragraphs: [
          "An ideal gas is a simplified model with two key assumptions: gas particles have zero volume, and there are no intermolecular forces of attraction between particles. With these assumptions, particles move independently except for perfectly elastic collisions.",
          "Zero particle volume means the whole container volume is available for motion. No intermolecular attraction means molecules do not pull each other together, so collisions with walls are not reduced by attractive forces near the wall.",
          "Real gases only approach ideal behaviour most closely at low pressure and high temperature. Low pressure keeps particles far apart, so particle volume and attractions become less significant. High temperature gives particles high kinetic energy, so weak attractions have less effect on motion.",
        ],
      },
      {
        id: "ideal-gas-equation-use",
        title: "Using pV = nRT correctly",
        paragraphs: [
          "The ideal gas equation is pV = nRT, where p is pressure in pascals (Pa), V is volume in m³, n is amount in mol, T is thermodynamic temperature in kelvin (K), and R is the gas constant (8.31 J mol⁻¹ K⁻¹ in standard examination use unless another value is supplied).",
          "This equation links measurable macroscopic quantities and is used in many forms: n = pV/RT, p = nRT/V, V = nRT/p. Always convert temperatures from degrees Celsius to kelvin using T/K = θ/°C + 273 (or 273.15 when required).",
          "Unit consistency is essential: if pressure is given in kPa and volume in dm³, convert to Pa and m³ before substitution unless the question explicitly provides a consistent alternative value of R for other units.",
        ],
      },
      {
        id: "mr-determination",
        title: "Determining Mᵣ of a gas from pV = nRT",
        paragraphs: [
          "A major syllabus application is determination of relative molecular mass Mᵣ. If a gas sample has mass m (in g) and amount n (in mol), then n = m/Mᵣ. Substituting into pV = nRT gives pV = (m/Mᵣ)RT.",
          "Rearranging gives Mᵣ = mRT/pV. Use mass in grams if you want Mᵣ as a numerical relative molecular mass, because Mᵣ has no unit. If you use mass in kg, you obtain molar mass in kg mol⁻¹ and must convert to g mol⁻¹ to compare with Mᵣ.",
          "In practical data questions, examiners reward clear algebra, correct unit conversion, and sensible significant figures. If the calculated Mᵣ is very different from an expected formula, check for common conversion errors first (especially cm³ to m³ and degrees Celsius to kelvin).",
        ],
      },
      {
        id: "real-gas-deviation",
        title: "Why real gases deviate from ideal behaviour",
        paragraphs: [
          "Real gases deviate from ideal behaviour because real molecules occupy volume and experience intermolecular attractions. These effects are negligible only when particles are far apart and moving fast enough that attractions do not dominate.",
          "At high pressure, molecules are crowded, so particle volume is no longer negligible compared with container volume. At low temperature, molecular kinetic energy is lower and intermolecular attractions become more important.",
          "A common consequence is that real pressure can be lower than ideal predictions at moderate pressure due to attractive forces reducing wall-collision force. Near very high pressure, finite particle volume becomes dominant and behaviour can deviate in the opposite direction. For this syllabus, qualitative understanding is required rather than derivation of advanced equations of state.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "In gas-law questions, marks are usually lost through conversion mistakes and weak particle-level explanations rather than difficult algebra.",
      items: [
        "Using temperature in degrees Celsius directly in pV = nRT instead of converting to kelvin.",
        "Leaving volume in cm³ or dm³ when using R = 8.31 J mol⁻¹ K⁻¹ (which requires m³).",
        "Giving a memorised statement for pressure without linking it to momentum change and wall collisions.",
        "Saying 'real gases are never ideal' without stating the conditions where real behaviour is closest to ideal (low pressure, high temperature).",
        "Confusing Mᵣ with molar mass units: Mᵣ is relative and unitless, while molar mass is typically quoted in g mol⁻¹.",
        "Rearranging pV = nRT incorrectly when solving for n or Mᵣ, especially moving V to numerator by mistake.",
      ],
    },
    workedExamples: [
      {
        id: "t4-1-ex1",
        title: "Amount of gas from pressure, volume and temperature",
        problem: [
          "A sample of nitrogen occupies 500 cm³ at 101 kPa and 27 °C. Calculate the amount of gas, n, in mol.",
        ],
        solution: [
          "Convert to SI units: V = 500 cm³ = 5.00 x 10⁻⁴ m³, p = 101 kPa = 1.01 x 10⁵ Pa, T = 27 + 273 = 300 K.",
          "Use n = pV/RT.",
          "n = (1.01 x 10⁵ x 5.00 x 10⁻⁴) / (8.31 x 300) = 50.5 / 2493 = 2.03 x 10⁻² mol.",
          "So the amount of nitrogen is 2.03 x 10⁻² mol (or 0.0203 mol, 3 s.f.).",
        ],
      },
      {
        id: "t4-1-ex2",
        title: "Determining Mᵣ of an unknown gas",
        problem: [
          "An unknown gas has mass 0.880 g and occupies 400 cm³ at 100 kPa and 298 K. Determine its relative molecular mass, Mᵣ.",
        ],
        solution: [
          "Use Mᵣ = mRT/pV with m in g.",
          "Convert units: p = 1.00 x 10⁵ Pa, V = 400 cm³ = 4.00 x 10⁻⁴ m³, T = 298 K, m = 0.880 g.",
          "Mᵣ = (0.880 x 8.31 x 298) / (1.00 x 10⁵ x 4.00 x 10⁻⁴).",
          "Numerator = 2179.5; denominator = 40.0; so Mᵣ = 54.5.",
          "Therefore the gas has Mᵣ approximately 54.5 (about 55 to 2 s.f.).",
        ],
      },
      {
        id: "t4-1-ex3",
        title: "Explaining non-ideal behaviour qualitatively",
        problem: [
          "A gas sample gives measured pressure lower than the ideal-gas prediction at the same n, V and T. Explain this using the real-gas model.",
        ],
        solution: [
          "In a real gas, molecules attract each other weakly. Molecules approaching the container wall are pulled slightly back toward the bulk gas by neighbouring molecules.",
          "That attraction reduces the momentum transferred to the wall during collisions, so the average force on the wall is lower than for an ideal gas with no intermolecular forces.",
          "Hence measured pressure can be lower than the ideal prediction under conditions where attractions matter (typically lower temperature and/or moderate pressure).",
        ],
      },
    ],
    selfTest: [
      {
        id: "t4-1-st1",
        question:
          "Explain the origin of gas pressure in terms of molecular motion and collisions with container walls.",
        modelAnswer: [
          "Gas molecules move randomly and collide with the container walls. In each collision, molecular momentum changes, so a force is exerted on the wall. The total force per unit area from many such collisions is the gas pressure.",
        ],
      },
      {
        id: "t4-1-st2",
        question:
          "State the two assumptions of an ideal gas and explain one condition under which real gases are closest to ideal behaviour.",
        modelAnswer: [
          "Ideal-gas assumptions: (1) particles have zero volume, (2) no intermolecular attractive forces. Real gases are closest to ideal at low pressure (particles far apart, so volume and attractions are less significant) and also at high temperature (kinetic energy dominates weak attractions).",
        ],
      },
      {
        id: "t4-1-st3",
        question:
          "A gas occupies 2.40 x 10⁻³ m³ at 95.0 kPa and 310 K. Calculate n using pV = nRT.",
        modelAnswer: [
          "Convert pressure: 95.0 kPa = 9.50 x 10⁴ Pa. Then n = pV/RT = (9.50 x 10⁴ x 2.40 x 10⁻³) / (8.31 x 310) = 228 / 2576.1 = 8.85 x 10⁻² mol.",
        ],
      },
      {
        id: "t4-1-st4",
        question:
          "Show how pV = nRT can be rearranged to determine Mᵣ when gas mass m is known.",
        modelAnswer: [
          "Use n = m/Mᵣ. Substitute into pV = nRT: pV = (m/Mᵣ)RT. Rearranging gives Mᵣ = mRT/pV.",
        ],
      },
      {
        id: "t4-1-st5",
        question:
          "State two common unit-conversion errors in gas-law calculations and the correct conversions.",
        modelAnswer: [
          "Common errors: (1) using °C directly instead of K; correct conversion is T/K = θ/°C + 273. (2) using cm³ or dm³ with R = 8.31 without conversion; correct conversions are 1 cm³ = 1 x 10⁻⁶ m³ and 1 dm³ = 1 x 10⁻³ m³.",
        ],
      },
    ],
  },

  "t4-2": {
    noteId: "t4-2",
    syllabusNotes: [
      {
        id: "crystalline-lattice-overview",
        title: "Crystalline solids and lattice structure",
        paragraphs: [
          "A crystalline solid has particles arranged in a regular repeating three-dimensional pattern called a lattice. The identity of the particles (ions, molecules, or atoms) and the type of bonding between them determine the physical properties.",
          "For this syllabus, you must describe four broad structure types: giant ionic, simple molecular, giant molecular (covalent network), and giant metallic. You must also link each structure type to melting point, boiling point, electrical conductivity and solubility.",
          "Property prediction is a reasoning task: identify what strong interactions must be overcome on melting or boiling, whether mobile charged particles are present for conduction, and whether solvent-particle interactions can overcome the structure.",
        ],
      },
      {
        id: "giant-ionic",
        title: "Giant ionic lattices: sodium chloride and magnesium oxide",
        paragraphs: [
          "In a giant ionic structure, a crystal consists of alternating positive and negative ions in a regular array held by strong electrostatic attractions in all directions. Sodium chloride and magnesium oxide are standard examples.",
          "Because electrostatic attractions are strong throughout the lattice, giant ionic solids usually have high melting and boiling points. They do not conduct electricity as solids because ions are fixed in position, but they conduct when molten or in aqueous solution because ions become mobile.",
          "Many ionic compounds are soluble in water because ion-dipole attractions between ions and water molecules can compensate for lattice disruption. Solubility varies with lattice energy and hydration effects, so 'all ionic compounds are soluble' is incorrect.",
        ],
      },
      {
        id: "simple-molecular",
        title: "Simple molecular solids: iodine, C60 and ice",
        paragraphs: [
          "Simple molecular solids contain discrete molecules. Within each molecule, covalent bonds are strong, but molecules are held together by intermolecular forces (van der Waals' forces and, in ice, hydrogen bonding).",
          "Iodine (I2) and buckminsterfullerene (C60) are molecular solids with intermolecular attractions between molecules. Ice is also molecular, with water molecules arranged in an open hydrogen-bonded lattice.",
          "Because intermolecular forces are weaker than giant lattice bonding, simple molecular solids generally have lower melting and boiling points than giant ionic or giant molecular solids. They are poor electrical conductors because there are no mobile ions or delocalised electrons in the solid.",
          "Solubility follows polarity: non-polar molecular solids (such as iodine) are more soluble in non-polar solvents, while polar/hydrogen-bonding substances may dissolve better in water.",
        ],
      },
      {
        id: "giant-molecular",
        title: "Giant molecular (covalent network): SiO2, diamond and graphite",
        paragraphs: [
          "Giant molecular substances have an extended network of covalent bonds throughout the structure. There are no separate molecules. Silicon(IV) oxide and diamond are classic three-dimensional covalent networks.",
          "Strong covalent bonds throughout the lattice give very high melting points and very high hardness (especially diamond). They are insoluble in common solvents because dissolving would require breaking many strong covalent bonds.",
          "Graphite is also giant molecular but with layered structure: each carbon bonds to three others in hexagonal sheets, leaving one electron per carbon delocalised within each layer. This gives electrical conductivity along layers, unlike diamond which has no mobile electrons.",
          "Layers in graphite are held together by weaker forces, so layers can slide, making graphite soft and useful as a lubricant.",
        ],
      },
      {
        id: "giant-metallic",
        title: "Giant metallic lattice: copper",
        paragraphs: [
          "In giant metallic structures, positive metal ions are arranged in a lattice surrounded by a sea of delocalised electrons. Metallic bonding is the electrostatic attraction between metal cations and delocalised electrons.",
          "Copper has a giant metallic lattice. Strong metallic bonding usually gives relatively high melting and boiling points. Metals conduct electricity in both solid and molten states because delocalised electrons are mobile.",
          "Metals are generally insoluble in water and most molecular solvents because dissolving a metallic lattice is not favoured thermodynamically under normal conditions.",
        ],
      },
      {
        id: "deducing-structure",
        title: "Deducing bonding and structure from physical data",
        paragraphs: [
          "To deduce structure type, combine clues rather than relying on one property. For example, high melting point plus conductivity as a solid suggests metallic or graphite-like behaviour; high melting point but no solid conductivity and conductivity when molten suggests ionic.",
          "Low melting point and non-conductivity in both solid and liquid usually indicate simple molecular structure. Extremely high melting point with no conduction in either solid or molten state suggests giant molecular (except graphite, which is the key conducting giant molecular exception).",
          "Solubility gives additional evidence: ionic compounds may dissolve in water and conduct in solution; non-polar simple molecular substances dissolve better in non-polar solvents; giant molecular and metallic solids are usually insoluble.",
        ],
      },
    ],
    examinerPitfalls: {
      intro:
        "Bonding-and-structure questions reward clear linkage between structure, bonding, and each physical property tested.",
      items: [
        "Stating only 'strong bonds' without specifying whether these are ionic attractions, covalent network bonds, metallic bonding, or intermolecular forces.",
        "Claiming ionic solids conduct electricity as solids; conduction requires mobile ions, which are present only when molten or dissolved.",
        "Saying graphite is simple molecular; it is giant molecular with delocalised electrons in layers.",
        "Assuming all molecular solids have very low melting points; hydrogen-bonded molecular solids (such as ice) can have higher values than expected from size alone.",
        "Using one property to identify structure type when another property contradicts it (for example, high melting point but no molten conduction does not support ionic without further evidence).",
        "Confusing solubility trends by writing 'like dissolves like' without relating to particle interactions and lattice disruption.",
      ],
    },
    workedExamples: [
      {
        id: "t4-2-ex1",
        title: "Explaining property differences: sodium chloride vs iodine",
        problem: [
          "Sodium chloride has a much higher melting point than iodine. Explain this difference in terms of bonding and structure.",
        ],
        solution: [
          "Sodium chloride has a giant ionic lattice with strong electrostatic attractions between Na+ and Cl- ions in all directions.",
          "Iodine is a simple molecular solid made of I2 molecules. On melting iodine, only intermolecular forces between molecules are overcome; the covalent I-I bond inside each molecule is not broken.",
          "Because ionic attractions in NaCl are much stronger than intermolecular forces between I2 molecules, much more energy is required to melt NaCl, so its melting point is much higher.",
        ],
      },
      {
        id: "t4-2-ex2",
        title: "Deducing structure from conductivity and melting data",
        problem: [
          "Substance X has high melting point, does not conduct as a solid, conducts when molten, and is soluble in water to give a conducting solution. Deduce the likely structure and bonding.",
        ],
        solution: [
          "These data are characteristic of a giant ionic lattice.",
          "High melting point indicates strong attractions throughout the solid. Lack of solid conductivity shows there are no mobile charge carriers in the solid state. Conductivity when molten shows charged particles become mobile in the liquid.",
          "Solubility in water with conducting solution supports presence of ions in solution. Therefore X is most likely ionic, with electrostatic attraction between oppositely charged ions.",
        ],
      },
      {
        id: "t4-2-ex3",
        title: "Graphite and diamond: same element, different properties",
        problem: [
          "Graphite and diamond are both forms of carbon, but graphite conducts electricity and is soft, while diamond does not conduct and is very hard. Explain in terms of bonding and structure.",
        ],
        solution: [
          "In diamond, each carbon forms four covalent bonds in a three-dimensional tetrahedral network. All valence electrons are localised in sigma bonds, so there are no mobile electrons for conduction. Strong covalent bonds throughout the structure make diamond very hard.",
          "In graphite, each carbon forms three covalent bonds in planar hexagonal layers. The fourth electron per carbon is delocalised within the layer, allowing electrical conduction along the layers.",
          "Layers in graphite are held together by weaker forces, so they slide over each other, making graphite soft compared with diamond.",
        ],
      },
    ],
    selfTest: [
      {
        id: "t4-2-st1",
        question:
          "Describe, in simple terms, what is meant by a giant ionic lattice and give one example.",
        modelAnswer: [
          "A giant ionic lattice is a regular three-dimensional arrangement of positive and negative ions held together by strong electrostatic attraction in all directions. Example: sodium chloride (or magnesium oxide).",
        ],
      },
      {
        id: "t4-2-st2",
        question:
          "Why do simple molecular solids usually have lower melting points than giant molecular solids?",
        modelAnswer: [
          "Simple molecular solids melt by overcoming intermolecular forces between molecules, which are relatively weak. Giant molecular solids require breaking strong covalent bonds in an extended network, which needs much more energy, so melting points are much higher.",
        ],
      },
      {
        id: "t4-2-st3",
        question:
          "State how electrical conductivity differs for ionic compounds in solid and molten states, and explain why.",
        modelAnswer: [
          "Ionic compounds do not conduct as solids because ions are fixed in the lattice. They conduct when molten because ions are free to move and carry charge.",
        ],
      },
      {
        id: "t4-2-st4",
        question:
          "A solid has very high melting point, is insoluble in water, and does not conduct electricity in either solid or molten form. Suggest a likely structure type and one possible substance.",
        modelAnswer: [
          "Likely structure: giant molecular (covalent network). Possible substance: silicon(IV) oxide or diamond (graphite would be excluded because it conducts).",
        ],
      },
      {
        id: "t4-2-st5",
        question:
          "Identify the structure type most consistent with each set of properties: (a) low melting point, non-conductor, soluble in non-polar solvent; (b) conductor as solid and liquid, insoluble in water.",
        modelAnswer: [
          "(a) Simple molecular structure (for example iodine). (b) Giant metallic structure (for example copper).",
        ],
      },
    ],
  },
};
