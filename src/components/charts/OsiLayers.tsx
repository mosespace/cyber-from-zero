const layers = [
  [7, "Application", "Websites, email apps", "#f472b6"],
  [6, "Presentation", "Encryption, file formats", "#c084fc"],
  [5, "Session", "Keeps conversations open", "#a78bfa"],
  [4, "Transport", "TCP and UDP, ports", "#60a5fa"],
  [3, "Network", "IP addresses, routers", "#38bdf8"],
  [2, "Data link", "Wi-Fi, MAC addresses", "#34d399"],
  [1, "Physical", "Cables and radio waves", "#4ade80"],
] as const;

export default function OsiLayers() {
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 400" role="img" aria-label="The seven layers of the OSI model">
        {layers.map(([n, name, ex, c], i) => (
          <g key={n} transform={`translate(0 ${i * 56})`}>
