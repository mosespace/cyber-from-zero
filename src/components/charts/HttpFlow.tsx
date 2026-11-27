const cols = [
  { x: 90, t: "Your browser", c: "#A9D1FF" },
  { x: 320, t: "DNS server", c: "#D3BFFF" },
  { x: 550, t: "Web server", c: "#8FD9B6" },
];
const steps = [
  { n: 1, from: 0, to: 1, y: 112, label: "Where is example.com?" },
  { n: 2, from: 1, to: 0, y: 160, label: "It is at 93.184.216.34" },
  { n: 3, from: 0, to: 2, y: 226, label: "Please send me the page" },
  { n: 4, from: 2, to: 0, y: 274, label: "Here is the web page" },
];

export default function HttpFlow() {
  return (
    <figure className="figure">
      <svg
        viewBox="0 0 640 310"
        role="img"
        aria-label="Sequence diagram: browser asks DNS for an address, then asks the web server for the page"
      >
        <defs>
          <marker id="arr" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="#151515" />
          </marker>
        </defs>
        {cols.map((c) => (
          <g key={c.t}>
            <line
              x1={c.x}
              y1="56"
              x2={c.x}
              y2="300"
              stroke="#bfbfbc"
              strokeDasharray="5 5"
              strokeWidth="2"
            />
            <rect
              x={c.x - 66}
              y="8"
              width="132"
              height="44"
              rx="8"
              fill={c.c}
              stroke="#151515"
              strokeWidth="1.5"
            />
            <text
              x={c.x}
              y="36"
              textAnchor="middle"
              className="chart-text"
              style={{ fontWeight: 800, fontSize: 15 }}
            >
              {c.t}
            </text>
          </g>
        ))}
        {steps.map((s) => {
          const x1 = cols[s.from].x + (s.to > s.from ? 6 : -6);
          const x2 = cols[s.to].x + (s.to > s.from ? -8 : 8);
          const mid = (cols[s.from].x + cols[s.to].x) / 2;
          return (
            <g key={s.n}>
              <line
                x1={x1}
                y1={s.y}
                x2={x2}
                y2={s.y}
                stroke="#151515"
                strokeWidth="2"
                markerEnd="url(#arr)"
              />
              <circle
                cx={Math.min(x1, x2) + 20}
                cy={s.y - 24}
                r="11"
                fill="#f7a501"
                stroke="#151515"
                strokeWidth="1.5"
              />
              <text
                x={Math.min(x1, x2) + 20}
                y={s.y - 20}
                textAnchor="middle"
                style={{ fontSize: 12, fontWeight: 800, fill: "#151515" }}
              >
                {s.n}
              </text>
              <text
                x={mid + 14}
                y={s.y - 12}
                textAnchor="middle"
                className="chart-text"
                style={{ fontSize: 14 }}
              >
                {s.label}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption>What happens in a fraction of a second when you open a website.</figcaption>
    </figure>
  );
}
