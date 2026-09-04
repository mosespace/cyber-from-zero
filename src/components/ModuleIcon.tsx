const INK = "#16162b";
const sw = { stroke: INK, strokeWidth: 3, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };

/** One hand-built geometric icon per module. */
export default function ModuleIcon({ slug, size = 44 }: { slug: string; size?: number }) {
  const W = "#fff";
  let g: React.ReactNode;
