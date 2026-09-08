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
          <g key={name}>
            <circle cx="320" cy="170" r={r} fill={c} opacity="0.12" stroke={c} strokeWidth="2" />
            <text x="320" y={170 - r + 17} textAnchor="middle" className="chart-text" style={{ fontWeight: 700, fontSize: 13 }}>{name}</text>
          </g>
        ))}
        <circle cx="320" cy="180" r="30" fill="#fbbf24" />
        <text x="320" y="185" textAnchor="middle" style={{ fontWeight: 800, fontSize: 14, fill: "#07101f" }}>DATA</text>
      </svg>
      <figcaption>An attacker must get through every ring to reach the data.</figcaption>
