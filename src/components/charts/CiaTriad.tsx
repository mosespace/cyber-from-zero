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
