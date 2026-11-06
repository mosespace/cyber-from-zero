export type Term = { term: string; def: string; module: string };

/** Short, plain-English definitions. Used by the glossary and the flashcards. */
export const glossary: Term[] = [
  { term: "Bit", def: "The smallest piece of data. It is either 0 or 1.", module: "digital-world" },
  { term: "Byte", def: "A group of eight bits. One letter takes one byte.", module: "digital-world" },
  { term: "CPU", def: "The processor. The part of a computer that does the thinking.", module: "digital-world" },
