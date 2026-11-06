export type Term = { term: string; def: string; module: string };

/** Short, plain-English definitions. Used by the glossary and the flashcards. */
export const glossary: Term[] = [
  { term: "Bit", def: "The smallest piece of data. It is either 0 or 1.", module: "digital-world" },
  { term: "Byte", def: "A group of eight bits. One letter takes one byte.", module: "digital-world" },
  { term: "CPU", def: "The processor. The part of a computer that does the thinking.", module: "digital-world" },
  { term: "RAM", def: "Short-term memory that holds what you are using right now.", module: "digital-world" },
  { term: "Bug", def: "A mistake in software. Some bugs become vulnerabilities.", module: "digital-world" },
  { term: "IP address", def: "The home address of a computer on a network.", module: "digital-world" },
  { term: "DNS", def: "The internet phone book. It turns names into IP addresses.", module: "digital-world" },
  { term: "Packet", def: "A small piece of data sent over a network.", module: "digital-world" },
  { term: "Server", def: "A computer that gives things (pages, files) to other computers.", module: "digital-world" },
  { term: "Confidentiality", def: "Only the right people can see the data.", module: "security-mindset" },
  { term: "Integrity", def: "Data is correct and has not been secretly changed.", module: "security-mindset" },
  { term: "Availability", def: "Systems and data work when you need them.", module: "security-mindset" },
  { term: "Vulnerability", def: "A weakness that could be used to cause harm.", module: "security-mindset" },
  { term: "Threat", def: "Someone or something that could use a weakness.", module: "security-mindset" },
  { term: "Risk", def: "How likely a bad thing is, times how much it would hurt.", module: "security-mindset" },
