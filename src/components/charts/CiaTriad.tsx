export default function CiaTriad() {
  const nodes = [
    { x: 320, y: 118, c: "#A9D1FF", t: "Confidentiality", s: "Only the right people see it", ly: 30 },
    { x: 110, y: 318, c: "#C9B6FF", t: "Integrity", s: "It stays correct", ly: 396 },
    { x: 530, y: 318, c: "#8FD9B6", t: "Availability", s: "It works when needed", ly: 396 },
  ];
  return (
    <figure className="figure">
      <svg viewBox="0 0 640 430" role="img" aria-label="The CIA triad: confidentiality, integrity and availability">
