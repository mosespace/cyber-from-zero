export default function CiaTriad() {
  const nodes = [
    { x: 320, y: 118, c: "#A9D1FF", t: "Confidentiality", s: "Only the right people see it", ly: 30 },
    { x: 110, y: 318, c: "#C9B6FF", t: "Integrity", s: "It stays correct", ly: 396 },
    { x: 530, y: 318, c: "#8FD9B6", t: "Availability", s: "It works when needed", ly: 396 },
  ];
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 430" role="img" aria-label="The CIA triad: confidentiality, integrity and availability">
        <polygon points="320,118 110,318 530,318" fill="#fff4d6" stroke="#151515" strokeWidth="2" strokeLinejoin="round" />
        <text x="320" y="268" textAnchor="middle" className="chart-text" style={{ fontSize: 24, fontWeight: 800 }}>SECURITY</text>
        {nodes.map((n) => (
          <g key={n.t}>
            <circle cx={n.x} cy={n.y} r="46" fill={n.c} stroke="#151515" strokeWidth="2" />
            <text x={n.x} y={n.y + 11} textAnchor="middle" className="chart-text" style={{ fontWeight: 800, fontSize: 32 }}>{n.t[0]}</text>
            <text x={n.x} y={n.ly} textAnchor="middle" className="chart-text" style={{ fontWeight: 800, fontSize: 18 }}>{n.t}</text>
            <text x={n.x} y={n.ly + 18} textAnchor="middle" className="chart-muted" style={{ fontSize: 13 }}>{n.s}</text>
          </g>
        ))}
      </svg>
      <figcaption>The three goals of security.</figcaption>
    </figure>
  );
}
