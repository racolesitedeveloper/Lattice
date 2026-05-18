/**
 * Expand single-line chemistry self-test model answers to exam-register depth.
 * Run: node scripts/expand-chemistry-self-test-stubs.mjs
 */

import fs from "node:fs";
import path from "node:path";

const ROOT = path.join(import.meta.dirname, "..", "lib", "notes");

/** @type {Record<string, Record<string, string[]>>} */
const EXPANSIONS = {
  "chemistry-topic1-drafts.ts": {
    "t1-2-st5": [
      "Resolution is the minimum separation between two points that can still be distinguished as separate.",
      "It depends on the wavelength of radiation used and the quality of the optical system, not on magnification alone.",
    ],
    "t1-3-st2": [
      "Use M = image size ÷ actual size with both lengths in the same unit before dividing.",
      "Rearrange to actual size = image size ÷ M when magnification and image size are known.",
    ],
    "t1-3-st3": [
      "Convert 2.4 mm to μm: 2.4 × 10³ μm.",
      "M = 400, so actual size = (2.4 × 10³) ÷ 400 = 6.0 μm.",
    ],
    "t1-4-st3": [
      "Eyepiece graticule divisions must be calibrated against a stage micrometer at the same objective magnification.",
      "Only then can one division on the graticule be converted to a real distance in μm or mm.",
    ],
  },
  "chemistry-topic2-drafts.ts": {
    "t2-2-st2": [
      "n = N / L, where n is amount in mol, N is number of particles, and L is the Avogadro constant (6.02 × 10²³ mol⁻¹).",
      "Rearranging gives N = nL when amount of substance is known.",
    ],
    "t2-2-st3": [
      "Substitute n = 0.0100 mol and L = 6.02 × 10²³ mol⁻¹.",
      "N = 0.0100 × 6.02 × 10²³ = 6.02 × 10²¹ molecules.",
    ],
    "t2-2-st5": [
      "M(Na₂CO₃) = (2 × 23.0) + 12.0 + (3 × 16.0) = 106.0 g mol⁻¹.",
      "Use this molar mass to convert between mass and amount of substance in calculations.",
    ],
    "t2-3-st3": [
      "Hydrogencarbonate ion is HCO₃⁻ (one hydrogen, one carbon, three oxygen atoms, net charge −1).",
      "It is a common amphiprotic anion in neutralisation and buffer contexts.",
    ],
    "t2-4-st1": [
      "Percentage yield = (actual mass of product obtained ÷ theoretical maximum mass) × 100%.",
      "Values below 100% indicate side reactions, incomplete reaction, or practical losses during isolation.",
    ],
  },
  "chemistry-topic3-drafts.ts": {
    "t3-2-st2": [
      "Magnesium loses two electrons to form Mg²⁺ and oxygen gains two electrons to form O²⁻.",
      "The ionic compound formed has formula MgO with a 1:1 ratio of ions.",
    ],
    "t3-4-st5": [
      "A higher activation energy means fewer collisions have sufficient energy to react at a given temperature.",
      "The rate constant is therefore smaller and the reaction proceeds more slowly under otherwise identical conditions.",
    ],
    "t3-6-st2": [
      "A catalyst provides an alternative reaction pathway with lower activation energy.",
      "More collisions are successful per unit time, so rate increases without changing ΔH of the overall reaction.",
    ],
  },
  "chemistry-topic8-drafts.ts": {
    "t8-1-st4": [
      "Initial rate is found from the gradient of a concentration–time graph at t = 0 (tangent at the start).",
      "Steeper initial gradient indicates a faster reaction at the beginning of the run.",
    ],
  },
  "chemistry-topic11-drafts.ts": {
    "t11-3-st1": [
      "At room temperature chlorine is a pale green gas, bromine is a red-brown liquid, and iodine is a grey-black solid.",
      "This reflects increasing van der Waals forces down the group as electron shells increase.",
    ],
    "t11-3-st4": [
      "Down Group 17 the X–X covalent bond weakens because atomic radius increases and orbital overlap is less effective.",
      "Bond enthalpy therefore decreases from Cl–Cl to Br–Br to I–I.",
    ],
    "t11-3-st5": [
      "Volatility trend is governed by intermolecular London dispersion forces between X₂ molecules.",
      "Reactivity with hydrogen depends on H–X bond strength formed, which is a different molecular property.",
    ],
    "t11-4-st1": [
      "Oxidising power decreases down the group: Cl₂ > Br₂ > I₂.",
      "A stronger oxidising agent more readily accepts electrons from another species in redox reactions.",
    ],
    "t11-4-st2": [
      "H₂ + Cl₂ → 2HCl (chlorine oxidises hydrogen).",
      "H₂ + Br₂ → 2HBr (bromine oxidises hydrogen under suitable conditions).",
    ],
    "t11-4-st3": [
      "Down the group the H–X bond in the product becomes longer and weaker.",
      "Reaction vigour with hydrogen therefore decreases from chlorine to iodine.",
    ],
  },
  "chemistry-topic13-drafts.ts": {
    "t13-1-st4": [
      "Ethyl propanoate is the ester from ethanol and propanoic acid: CH₃CH₂COOCH₂CH₃.",
      "Name as alkyl alkanoate: ethyl from the alcohol residue, propanoate from the acid chain.",
    ],
  },
  "chemistry-topic19-drafts.ts": {
    "t19-1-st3": [
      "CH₃CH₂Cl + 2NH₃ → CH₃CH₂NH₂ + NH₄Cl under ethanol solvent, heat, and pressure.",
      "The halogenoalkane undergoes nucleophilic substitution by ammonia to form a primary amine.",
    ],
    "t19-1-st4": [
      "The carbon chain length is unchanged: three carbons in 1-chloropropane and three in propylamine.",
      "Only the functional group at the end of the chain is replaced (Cl → NH₂).",
    ],
  },
  "chemistry-topic23-drafts.ts": {
    "t23-1-st4": [
      "ΔS° is the standard entropy change for a reaction under standard conditions.",
      "Positive ΔS° implies greater disorder in products than reactants at the molecular level.",
    ],
  },
  "chemistry-topic25-drafts.ts": {
    "t25-1-st3": [
      "Kpc = [products] / [reactants] at partition equilibrium with concentrations in consistent units.",
      "Kpc = 3.0 means the solute is three times more concentrated in the organic layer than in water at equilibrium.",
    ],
  },
  "chemistry-topic28-drafts.ts": {
    "t28-1-st2": [
      "Kstab is the stability constant for a complex ion at equilibrium: Kstab = [complex] / ([metal ion][ligand]ⁿ).",
      "A larger Kstab indicates a more stable complex relative to free metal ion and ligand.",
    ],
  },
  "chemistry-topic32-drafts.ts": {
    "t32-2-st1": [
      "Ethyl propanoate: ester from ethanol + propanoic acid, structure CH₃CH₂COOCH₂CH₃.",
      "Systematic name: alkyl (ethyl) alkanoate (propanoate).",
    ],
    "t32-2-st2": [
      "Esterification: CH₃CH₂COOH + CH₃CH₂OH ⇌ CH₃CH₂COOCH₂CH₃ + H₂O with acid catalyst and heat.",
      "Reaction is reversible; remove water or use excess reagent to improve yield.",
    ],
  },
  "chemistry-topic33-drafts.ts": {
    "t33-1-st3": [
      "CH₃COCl + CH₃CH₂OH → CH₃COOCH₂CH₃ + HCl.",
      "Acyl chloride reacts vigorously with alcohol to form an ester and hydrogen chloride.",
    ],
    "t33-1-st4": [
      "CH₃CH₂COCl + NH₃ → CH₃CH₂CONH₂ + HCl.",
      "Acyl chloride reacts with ammonia to form a primary amide and HCl.",
    ],
  },
  "chemistry-topic34-drafts.ts": {
    "t34-1-st3": [
      "Step 1: nucleophilic addition of CN⁻ to the carbonyl carbon of ethanal.",
      "Step 2: protonation of the alkoxide intermediate gives 2-hydroxypropanenitrile (product of HCN addition).",
    ],
    "t34-1-st4": [
      "LiAlH₄ reduces the nitrile to a primary amine: 2-hydroxypropanenitrile → 2-hydroxypropylamine (after aqueous work-up).",
      "State that LiAlH₄ is used in dry ether and water is added only after the reduction step.",
    ],
  },
  "chemistry-topic37-drafts.ts": {
    "t37-1-st4": [
      "Rf = distance moved by component ÷ distance moved by solvent front.",
      "Rf = 2.4 cm ÷ 5.0 cm = 0.48 (dimensionless, must be less than 1).",
    ],
    "t37-3-st4": [
      "Lower Rf means the component spends less time in the mobile phase relative to adsorption on the stationary phase.",
      "More polar analytes often have lower Rf on silica unless the solvent polarity is increased.",
    ],
  },
};

function patchFile(fileName, idMap) {
  const fp = path.join(ROOT, fileName);
  let text = fs.readFileSync(fp, "utf8");
  let count = 0;
  for (const [id, lines] of Object.entries(idMap)) {
    const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(
      `(id: "${escaped}"[\\s\\S]*?modelAnswer: )\\[[\\s\\S]*?\\]`,
      "m",
    );
    const body = lines.map((l) => `          ${JSON.stringify(l)},`).join("\n");
    const replacement = `$1[\n${body}\n        ]`;
    const next = text.replace(re, replacement);
    if (next !== text) {
      text = next;
      count += 1;
    } else {
      console.warn(`  skip (not found): ${fileName} ${id}`);
    }
  }
  if (count > 0) {
    fs.writeFileSync(fp, text, "utf8");
    console.log(`${fileName}: ${count} expanded`);
  }
}

let total = 0;
for (const [file, ids] of Object.entries(EXPANSIONS)) {
  patchFile(file, ids);
  total += Object.keys(ids).length;
}
console.log(`\nTargeted ${total} self-test items.`);
