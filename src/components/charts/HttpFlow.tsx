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
      <svg viewBox="0 0 640 310" role="img" aria-label="Sequence diagram: browser asks DNS for an address, then asks the web server for the page">
        <defs>
          <marker id="arr" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="#151515" />
          </marker>
        </defs>
        {cols.map((c) => (
          <g key={c.t}>
            <line x1={c.x} y1="56" x2={c.x} y2="300" stroke="#bfbfbc" strokeDasharray="5 5" strokeWidth="2" />
            <rect x={c.x - 66} y="8" width="132" height="44" rx="8" fill={c.c} stroke="#151515" strokeWidth="1.5" />
