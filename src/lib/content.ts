import fs from "node:fs";
import path from "node:path";
import { slugify } from "./slug";

const ROOT = path.join(process.cwd(), "content", "modules");

export type Lesson = {
  slug: string;
  moduleSlug: string;
  order: number;
  title: string;
  summary: string;
  minutes: number;
  body: string;
  plain: string;
  headings: { id: string; text: string }[];
  remember: string[];
};

export type QuizQuestion = {
  q: string;
  options: string[];
  answer: number;
  why: string;
};

export type Module = {
  slug: string;
  order: number;
  title: string;
  color: string;
  level: string;
  hours: number;
  blurb: string;
  overview: string;
  lessons: Lesson[];
  quiz: QuizQuestion[];
};

function parseFrontmatter(raw: string) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {} as Record<string, string>, body: raw };
  const data: Record<string, string> = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    const value = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
    data[key] = value;
  }
  return { data, body: m[2].trim() };
}

/** Turn lesson Markdown into text that sounds natural when read aloud. */
export function toPlainText(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, " ")
    .split("\n")
    .filter((l) => !/^\s*\|?\s*[-:| ]+\|?\s*$/.test(l) || !l.includes("|"))
    .map((l) =>
      l.includes("|")
        ? l.split("|").map((c) => c.trim()).filter(Boolean).join(": ") + "."
        : l,
    )
    .join("\n")
    .replace(/^#+\s*/gm, "")
    .replace(/^>\s?/gm, "")
    .replace(/^\s*[-*]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/[*_`]/g, "")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

function num(name: string) {
  return parseInt(name.match(/^(\d+)/)?.[1] ?? "0", 10);
}

/** Pulls the closing "Remember" bullets out so the page can show them as a takeaway card. */
function splitRemember(body: string) {
  const i = body.search(/^## Remember\s*$/m);
  const main = i === -1 ? body : body.slice(0, i).trimEnd();
  const tail = i === -1 ? "" : body.slice(i);
  const remember = tail.split("\n").filter((l) => /^\s*[-*]\s+/.test(l)).map((l) => l.replace(/^\s*[-*]\s+/, "").replace(/\*\*/g, ""));
  const headings = [...main.matchAll(/^## (.+)$/gm)].map((m) => ({ text: m[1].trim(), id: slugify(m[1]) }));
  return { body: main, headings, remember };
}

let cache: Module[] | null = null;

export function getModules(): Module[] {
  if (cache) return cache;
  const dirs = fs
    .readdirSync(ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();

