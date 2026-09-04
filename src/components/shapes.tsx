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
    return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
  });
  const mid = (a: number[], b: number[]) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  let d = `M${mid(pts[n - 1], pts[0]).map((v) => v.toFixed(1)).join(",")}`;
  for (let i = 0; i < n; i++) {
    const m = mid(pts[i], pts[(i + 1) % n]);
    d += ` Q${pts[i][0].toFixed(1)},${pts[i][1].toFixed(1)} ${m[0].toFixed(1)},${m[1].toFixed(1)}`;
  }
  return d + "Z";
}
const BLOBS = [
  [44, 38, 46, 40, 47, 36, 45, 41],
  [40, 47, 38, 45, 41, 48, 37, 44],
  [46, 42, 36, 44, 47, 39, 43, 46],
];

export function Blob({ color = "#FFC93C", variant = 0, ...p }: P & { variant?: number }) {
  return <svg {...svgProps(p)}><path d={blobPath(BLOBS[variant % 3])} fill={color} {...stroke(p)} /></svg>;
}
export function Circle({ color = "#FF6B57", ...p }: P) {
  return <svg {...svgProps(p)}><circle cx="50" cy="50" r="42" fill={color} {...stroke(p)} /></svg>;
}
export function Ring({ color = "#27D3A2", ...p }: P) {
  return <svg {...svgProps(p)}><circle cx="50" cy="50" r="36" fill="none" stroke={INK} strokeWidth="26" /><circle cx="50" cy="50" r="36" fill="none" stroke={color} strokeWidth="19" /></svg>;
}
export function Triangle({ color = "#B9A2FF", ...p }: P) {
  return <svg {...svgProps(p)}><path d="M50 10 L92 86 L8 86 Z" fill={color} {...stroke(p)} /></svg>;
}
export function Square({ color = "#7CCBFF", ...p }: P) {
  return <svg {...svgProps(p)}><rect x="12" y="12" width="76" height="76" rx="18" fill={color} {...stroke(p)} /></svg>;
}
export function Star({ color = "#FFC93C", points = 8, ...p }: P & { points?: number }) {
  const pts = Array.from({ length: points * 2 }, (_, i) => {
    const r = i % 2 ? 26 : 44;
    const a = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
    return `${(50 + Math.cos(a) * r).toFixed(1)},${(50 + Math.sin(a) * r).toFixed(1)}`;
  }).join(" ");
  return <svg {...svgProps(p)}><polygon points={pts} fill={color} {...stroke(p)} /></svg>;
}
export function Plus({ color = "#FF9BC9", ...p }: P) {
  return <svg {...svgProps(p)}><path d="M38 10h24v28h28v24H62v28H38V62H10V38h28z" fill={color} {...stroke(p)} /></svg>;
}
export function Squiggle({ color = "#16162b", ...p }: P) {
  return <svg {...svgProps(p, 160, 40)}><path d="M6 20 Q 26 -4 46 20 T 86 20 T 126 20 T 156 20" fill="none" stroke={color} strokeWidth="7" strokeLinecap="round" /></svg>;
}
export function Dots({ color = "#16162b", ...p }: P) {
  return <svg {...svgProps(p)}>{Array.from({ length: 25 }, (_, i) => <circle key={i} cx={10 + (i % 5) * 20} cy={10 + Math.floor(i / 5) * 20} r="4" fill={color} />)}</svg>;
}
export function Half({ color = "#FF6B57", ...p }: P) {
  return <svg {...svgProps(p, 100, 55)}><path d="M6 50a44 44 0 0 1 88 0z" fill={color} {...stroke(p)} /></svg>;
}

/** Wavy edge between sections. */
export function Wave({ color, flip }: { color: string; flip?: boolean }) {
  return (
    <svg viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden style={{ display: "block", width: "100%", height: 34, transform: flip ? "scaleY(-1)" : undefined }}>
      <path d="M0 40V20Q75 0 150 20T300 20T450 20T600 20T750 20T900 20T1050 20T1200 20V40Z" fill={color} stroke="#16162b" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/** The site logo mark: a shield built from simple shapes. */
export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden>
      <path d="M24 4 L41 10 V24 C41 34 34 41 24 45 C14 41 7 34 7 24 V10 Z" fill="#3B5BFF" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="24" cy="21" r="5.5" fill="#FFC93C" stroke={INK} strokeWidth="2.5" />
      <path d="M24 25 L24 34" stroke={INK} strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}

export function Flame({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden>
      <path d="M12 2c1 4 6 6 6 12a6 6 0 0 1-12 0c0-3 2-4 3-6 1 1 1 2 2 2 1-3 0-5 1-8z" fill="#FF8A3C" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
export function Bolt({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden>
      <path d="M13 2 4 14h6l-1 8 9-12h-6z" fill="#FFC93C" stroke={INK} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

/** Hero illustration: a mock "app window" that previews what learning here feels like. */
export function HeroArt() {
  const bars = [30, 46, 38, 62, 52, 78, 70];
  return (
    <div className="hero-art" aria-hidden>
