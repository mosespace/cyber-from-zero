const steps = [
  ["Recon", "Collect public info", "#38bdf8"],
  ["Scan", "Find open doors", "#60a5fa"],
  ["Break in", "Use a weakness", "#a78bfa"],
  ["Stay in", "Hidden way back", "#c084fc"],
  ["Spread", "Move computer to computer", "#f472b6"],
  ["Goal", "Steal or damage data", "#fb7185"],
  ["Hide", "Cover tracks", "#fbbf24"],
] as const;

export default function KillChain() {
  return (
    <figure className="figure">
      <ol className="chain" style={{ listStyle: "none", paddingLeft: 0 }}>
        {steps.map(([t, s, c]) => (
          <li key={t} style={{ ["--c" as string]: c }}>
