import type { ReactNode } from "react";
import s from "./render-exam-text.module.css";

/**
 * Renders practice strings:
 * - `^2` / `^{-3}` → superscript
 * - `Na_2CO_3` → `_` + digits
 * - `A_r`, `M_r` (relative atomic / molecular)
 * - `E_A` (activation energy)
 * - `n_i`, `x_i`, `p_i` (moles / fraction / partial pressure of component i; not `n_total`)
 */
const SUBSCRIPT_TOKEN =
  /(_\d+|(?<=[AM])_r|(?<=[npx])_i|(?<=E)_A)/g;

export function renderExamText(text: string): ReactNode {
  const parts = text.split(/(\^\{[^}]+\}|\^[A-Za-z0-9+\-]+)/g);
  return parts.map((part, i) => {
    const m = /^\^(?:\{([^}]+)\}|([A-Za-z0-9+\-]+))$/.exec(part);
    if (m) {
      return (
        <sup key={`sup-${i}`} className={s.sup}>
          {m[1] ?? m[2]}
        </sup>
      );
    }
    return <span key={`seg-${i}`}>{renderSubscriptPart(part, i)}</span>;
  });
}

function renderSubscriptPart(plain: string, outerIndex: number): ReactNode {
  if (
    !/_\d/.test(plain) &&
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
    return seg;
  });
}
