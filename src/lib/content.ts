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
