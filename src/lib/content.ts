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
