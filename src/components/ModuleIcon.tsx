const INK = "#16162b";
const sw = { stroke: INK, strokeWidth: 3, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };

/** One hand-built geometric icon per module. */
export default function ModuleIcon({ slug, size = 44 }: { slug: string; size?: number }) {
  const W = "#fff";
  let g: React.ReactNode;
  switch (slug) {
    case "digital-world":
      g = <><circle cx="32" cy="32" r="22" fill={W} {...sw} /><ellipse cx="32" cy="32" rx="9" ry="22" fill="none" {...sw} /><path d="M10 32h44M14 20h36M14 44h36" fill="none" {...sw} /></>;
