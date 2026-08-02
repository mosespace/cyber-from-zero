import fs from "node:fs";
import path from "node:path";
import { slugify } from "./slug";

const ROOT = path.join(process.cwd(), "content", "modules");

export type Lesson = {
  slug: string;
  moduleSlug: string;
  order: number;
  title: string;
