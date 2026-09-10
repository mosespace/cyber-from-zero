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

