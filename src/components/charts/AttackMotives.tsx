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
