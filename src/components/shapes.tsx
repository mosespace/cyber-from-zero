import type { CSSProperties } from "react";

type P = { color?: string; size?: number; className?: string; style?: CSSProperties; outline?: boolean };
const INK = "#16162b";

function svgProps(p: P, w = 100, h = 100) {
  return {
    viewBox: `0 0 ${w} ${h}`, width: p.size, height: p.size ? (p.size * h) / w : undefined,
    className: `${p.size ? "" : "shape"} ${p.className ?? ""}`, style: p.style, "aria-hidden": true as const,
  };
}
