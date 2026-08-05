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

