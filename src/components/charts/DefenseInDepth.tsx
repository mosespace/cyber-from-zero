const rings = [
  ["People", 160, "#f472b6"],
  ["Perimeter", 134, "#a78bfa"],
  ["Network", 108, "#60a5fa"],
  ["Host", 82, "#38bdf8"],
  ["Application", 56, "#34d399"],
] as const;

export default function DefenseInDepth() {
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 340" role="img" aria-label="Concentric rings of defence with data in the middle">
        {rings.map(([name, r, c]) => (
