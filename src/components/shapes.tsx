import type { CSSProperties } from "react";

type P = { color?: string; size?: number; className?: string; style?: CSSProperties; outline?: boolean };
const INK = "#16162b";

function svgProps(p: P, w = 100, h = 100) {
  return {
    viewBox: `0 0 ${w} ${h}`, width: p.size, height: p.size ? (p.size * h) / w : undefined,
    className: `${p.size ? "" : "shape"} ${p.className ?? ""}`, style: p.style, "aria-hidden": true as const,
  };
}
const stroke = (p: P) => (p.outline === false ? {} : { stroke: INK, strokeWidth: 2.5, strokeLinejoin: "round" as const });

/** Smooth closed blob built from radii around a circle. */
export function blobPath(radii: number[], cx = 50, cy = 50) {
  const n = radii.length;
  const pts = radii.map((r, i) => {
    const a = (i / n) * Math.PI * 2;
