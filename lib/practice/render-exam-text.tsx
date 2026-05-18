import type { ReactNode } from "react";
import s from "./render-exam-text.module.css";

/**
 * Renders practice strings:
 * - Common spelled Greek names → Unicode (lambda → λ, theta → θ, Delta → Δ, …)
 * - `^2` / `^{-3}` → superscript
 * - `Na_2CO_3` → `_` + digits
 * - `A_r`, `M_r` (relative atomic / molecular)
 * - `E_A` (activation energy)
 * - `n_i`, `x_i`, `p_i` (moles / fraction / partial pressure of component i; not `n_total`)
 * - `V_pp`, `V_0` (CRO / a.c. peak and peak-to-peak voltage)
 */
const SUBSCRIPT_TOKEN =
  /(_\d+|_pp|_rms|_max|_min|(?<=[AM])_r|(?<=[npx])_i|(?<=E)_A)/g;

/** Whole-word spellings used in authored drills → Unicode (avoid alpha/beta: biology/radiation wording). */
const GREEK_SPELLING =
  /\b(?:lambda|epsilon|omega|sigma|theta|gamma|phi|psi|rho|nu|mu|tau|Delta)\b/g;

const GREEK_SPELLING_TO_UNICODE: Record<string, string> = {
  lambda: "λ",
  epsilon: "ε",
  omega: "ω",
  sigma: "σ",
  theta: "θ",
  gamma: "γ",
  phi: "φ",
  psi: "ψ",
  rho: "ρ",
  nu: "ν",
  mu: "μ",
  tau: "τ",
  Delta: "Δ",
};

function injectUnicodeGreek(plain: string): string {
  return plain.replace(GREEK_SPELLING, (word) => GREEK_SPELLING_TO_UNICODE[word] ?? word);
}

function normalizeExamNotation(text: string): string {
  return text.replace(/\bdiv\^-1\b/g, "div⁻¹");
}

export function renderExamText(text: string): ReactNode {
  const normalized = normalizeExamNotation(text);
  const parts = normalized.split(/(\^\{[^}]+\}|\^[A-Za-z0-9+\-]+)/g);
  return parts.map((part, i) => {
    const m = /^\^(?:\{([^}]+)\}|([A-Za-z0-9+\-]+))$/.exec(part);
    if (m) {
      return (
        <sup key={`sup-${i}`} className={s.sup}>
          {m[1] ?? m[2]}
        </sup>
      );
    }
    return (
      <span key={`seg-${i}`}>{renderSubscriptPart(injectUnicodeGreek(part), i)}</span>
    );
  });
}

function renderSubscriptPart(plain: string, outerIndex: number): ReactNode {
  if (
    !/_\d/.test(plain) &&
    !/_pp|_rms|_max|_min/.test(plain) &&
    !/(?<=[AM])_r/.test(plain) &&
    !/(?<=[npx])_i/.test(plain) &&
    !/(?<=E)_A/.test(plain)
  ) {
    return plain;
  }
  const segs = plain.split(SUBSCRIPT_TOKEN);
  if (segs.length === 1) {
    return plain;
  }
  return segs.map((seg, j) => {
    const num = /^_(\d+)$/.exec(seg);
    if (num) {
      return (
        <sub key={`sub-${outerIndex}-${j}`} className={s.sub}>
          {num[1]}
        </sub>
      );
    }
    if (seg === "_r") {
      return (
        <sub key={`sub-${outerIndex}-${j}`} className={s.sub}>
          r
        </sub>
      );
    }
    if (seg === "_i") {
      return (
        <sub key={`sub-${outerIndex}-${j}`} className={s.sub}>
          i
        </sub>
      );
    }
    if (seg === "_A") {
      return (
        <sub key={`sub-${outerIndex}-${j}`} className={s.sub}>
          A
        </sub>
      );
    }
    const letters = /^_([a-z]{2,4})$/.exec(seg);
    if (letters) {
      return (
        <sub key={`sub-${outerIndex}-${j}`} className={s.sub}>
          {letters[1]}
        </sub>
      );
    }
    return seg;
  });
}
