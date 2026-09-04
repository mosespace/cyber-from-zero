const INK = "#16162b";
const sw = { stroke: INK, strokeWidth: 3, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };

/** One hand-built geometric icon per module. */
export default function ModuleIcon({ slug, size = 44 }: { slug: string; size?: number }) {
  const W = "#fff";
  let g: React.ReactNode;
  switch (slug) {
    case "digital-world":
      g = <><circle cx="32" cy="32" r="22" fill={W} {...sw} /><ellipse cx="32" cy="32" rx="9" ry="22" fill="none" {...sw} /><path d="M10 32h44M14 20h36M14 44h36" fill="none" {...sw} /></>;
      break;
    case "security-mindset":
      g = <><path d="M32 8 56 52H8Z" fill={W} {...sw} /><circle cx="32" cy="14" r="6" fill="#FFC93C" {...sw} /><circle cx="13" cy="50" r="6" fill="#FF6B57" {...sw} /><circle cx="51" cy="50" r="6" fill="#27D3A2" {...sw} /></>;
      break;
    case "networking":
      g = <><path d="M32 14 14 48M32 14 50 48M14 48H50" fill="none" {...sw} /><circle cx="32" cy="14" r="8" fill="#FFC93C" {...sw} /><circle cx="14" cy="48" r="8" fill="#FF6B57" {...sw} /><circle cx="50" cy="48" r="8" fill="#7CCBFF" {...sw} /></>;
      break;
    case "operating-systems":
      g = <><rect x="6" y="10" width="52" height="44" rx="8" fill={W} {...sw} /><path d="M6 22h52" {...sw} /><path d="M17 31l8 6-8 6" fill="none" {...sw} /><path d="M30 44h14" {...sw} /></>;
      break;
    case "cryptography":
      g = <><circle cx="20" cy="32" r="13" fill="#FFC93C" {...sw} /><circle cx="20" cy="32" r="4" fill={W} {...sw} /><path d="M33 32h24M48 32v10M56 32v8" fill="none" {...sw} /></>;
      break;
    case "threats":
      g = <><path d="M32 8 58 54H6Z" fill="#FFC93C" {...sw} /><path d="M32 24v14" {...sw} strokeWidth={5} /><circle cx="32" cy="46" r="2.5" fill={INK} /></>;
      break;
    case "web-security":
      g = <><rect x="6" y="10" width="52" height="44" rx="8" fill={W} {...sw} /><path d="M6 22h52" {...sw} /><circle cx="14" cy="16" r="1.8" fill={INK} /><circle cx="21" cy="16" r="1.8" fill={INK} /><rect x="22" y="33" width="20" height="15" rx="4" fill="#27D3A2" {...sw} /><path d="M26 33v-4a6 6 0 0 1 12 0v4" fill="none" {...sw} /></>;
