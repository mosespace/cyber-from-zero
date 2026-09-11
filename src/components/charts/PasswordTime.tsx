/** Time to try every combination, at 10 billion guesses per second. */
const GUESSES_PER_SECOND = 1e10;
const series = [
  { name: "Digits only (10 choices)", n: 10, c: "#fb7185" },
  { name: "Lowercase letters (26)", n: 26, c: "#fbbf24" },
  { name: "Letters, numbers, symbols (94)", n: 94, c: "#4ade80" },
];
const lengths = Array.from({ length: 13 }, (_, i) => i + 4); // 4..16
const refs: [string, number][] = [
  ["1 second", 1],
  ["1 hour", 3600],
  ["1 year", 31_557_600],
  ["1,000 years", 3.15576e10],
  ["Age of the universe", 4.35e17],
];

const W = 640, H = 360, L = 130, R = 24, T = 20, B = 52;
const yMin = -3, yMax = 22;
const x = (len: number) => L + ((len - 4) / 12) * (W - L - R);
const y = (log: number) => {
  const c = Math.min(yMax, Math.max(yMin, log));
  return T + (1 - (c - yMin) / (yMax - yMin)) * (H - T - B);
};
const logSeconds = (n: number, len: number) => len * Math.log10(n) - Math.log10(GUESSES_PER_SECOND);

export default function PasswordTime() {
  return (
    <figure className="figure">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Line chart: time to crack a password by length and character set">
        {refs.map(([label, s]) => (
          <g key={label}>
            <line x1={L} x2={W - R} y1={y(Math.log10(s))} y2={y(Math.log10(s))} stroke="var(--line)" strokeDasharray="4 4" />
            <text x={L - 8} y={y(Math.log10(s)) + 4} textAnchor="end" className="chart-muted" style={{ fontSize: 11 }}>{label}</text>
          </g>
        ))}
        {lengths.map((len) => (
          <text key={len} x={x(len)} y={H - B + 20} textAnchor="middle" className="chart-muted">{len}</text>
        ))}
        <text x={(L + W - R) / 2} y={H - 10} textAnchor="middle" className="chart-text">Password length (characters)</text>
        {series.map((s) => (
          <g key={s.name}>
            <polyline
              fill="none" stroke={s.c} strokeWidth="3" strokeLinejoin="round"
              points={lengths.map((len) => `${x(len)},${y(logSeconds(s.n, len))}`).join(" ")}
            />
            {lengths.map((len) => (
              <circle key={len} cx={x(len)} cy={y(logSeconds(s.n, len))} r="3" fill={s.c} />
            ))}
          </g>
        ))}
