/** Time to try every combination, at 10 billion guesses per second. */
const GUESSES_PER_SECOND = 1e10;
const series = [
  { name: "Digits only (10 choices)", n: 10, c: "#fb7185" },
  { name: "Lowercase letters (26)", n: 26, c: "#fbbf24" },
  { name: "Letters, numbers, symbols (94)", n: 94, c: "#4ade80" },
