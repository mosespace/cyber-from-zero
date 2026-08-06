import fs from "node:fs";
import path from "node:path";
import { getModules } from "./content";

const ROOT = path.join(process.cwd(), "content");

export type Extra = {
  slug: string;
  title: string;
  summary: string;
  body: string;
  minutes: number;
  level: string;
  moduleSlug?: string;
  moduleTitle?: string;
  color: string;
};

function read(dir: "labs" | "cheatsheets"): Extra[] {
  const base = path.join(ROOT, dir);
  if (!fs.existsSync(base)) return [];
  const modules = getModules();
  return fs
    .readdirSync(base)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .map((f) => {
      const raw = fs.readFileSync(path.join(base, f), "utf8");
      const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
      const data: Record<string, string> = {};
      for (const line of (m?.[1] ?? "").split("\n")) {
        const i = line.indexOf(":");
        if (i > 0) data[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
      }
      const mod = modules.find((x) => x.slug === data.module);
      return {
