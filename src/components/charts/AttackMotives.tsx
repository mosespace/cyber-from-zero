const data = [
  ["Money", 70, "#4ade80"],
  ["Spying", 15, "#38bdf8"],
  ["Protest / activism", 8, "#a78bfa"],
  ["Fun or fame", 7, "#f472b6"],
] as const;

export default function AttackMotives() {
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 230" role="img" aria-label="Bar chart of why attackers attack">
        {data.map(([label, v, c], i) => (
          <g key={label} transform={`translate(0 ${i * 52 + 14})`}>
            <text x="170" y="26" textAnchor="end" className="chart-text">{label}</text>
            <rect x="184" y="6" width="420" height="30" rx="8" fill="var(--line)" opacity="0.5" />
            <rect x="184" y="6" width={(v / 100) * 420} height="30" rx="8" fill={c} />
            <text x={184 + (v / 100) * 420 - 10} y="27" textAnchor="end" style={{ fontWeight: 800, fontSize: 14, fill: "#07101f" }}>{v}%</text>
          </g>
        ))}
