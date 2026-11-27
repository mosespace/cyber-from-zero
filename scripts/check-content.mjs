// Quick checks for contributors: run with `npm run check:content`.
// Catches the most common mistakes in quizzes, lessons, labs and the glossary before a build does.
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];
const fail = (file, msg) => errors.push(`${path.relative(root, file)}: ${msg}`);

function frontMatter(file) {
  const raw = fs.readFileSync(file, "utf8");
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) {
    fail(file, "missing front matter (--- block at the top)");
    return null;
  }
  const data = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i <= 0) continue;
    const value = line.slice(i + 1).trim();
    data[line.slice(0, i).trim()] = value;
    // A second colon makes the line invalid YAML unless the value is in quotes
    if (/:\s/.test(value) && !/^["']/.test(value))
      fail(file, `front matter value contains ": ", wrap it in quotes: ${line.trim()}`);
  }
  return { data, body: m[2] };
}

const modulesDir = path.join(root, "content", "modules");
const moduleSlugs = [];

for (const dir of fs
  .readdirSync(modulesDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())) {
  const base = path.join(modulesDir, dir.name);
  moduleSlugs.push(dir.name.replace(/^\d+-/, ""));
  if (!/^\d+-/.test(dir.name))
    fail(base, "module folder must start with a number, like 03-networking");

  const idx = path.join(base, "index.md");
  if (!fs.existsSync(idx)) fail(base, "missing index.md");
  else {
    const fm = frontMatter(idx);
    for (const k of ["title", "color", "level", "hours", "blurb"])
      if (fm && !fm.data[k]) fail(idx, `front matter is missing "${k}"`);
  }

  for (const f of fs.readdirSync(base).filter((x) => /^\d+-.*\.md$/.test(x))) {
    const file = path.join(base, f);
    const fm = frontMatter(file);
    if (!fm) continue;
    for (const k of ["title", "summary", "minutes"])
      if (!fm.data[k]) fail(file, `front matter is missing "${k}"`);
    if (/^# /m.test(fm.body))
      fail(file, 'use "##" for headings, not "#" (the page title comes from the front matter)');
    if (!/^## Remember\s*$/m.test(fm.body))
      fail(file, 'lessons should end with a "## Remember" section');
  }

  const quiz = path.join(base, "quiz.json");
  if (!fs.existsSync(quiz)) {
    fail(base, "missing quiz.json");
    continue;
  }
  let data;
  try {
    data = JSON.parse(fs.readFileSync(quiz, "utf8"));
  } catch (e) {
    fail(quiz, `invalid JSON: ${e.message}`);
    continue;
  }
  if (!Array.isArray(data) || data.length === 0) fail(quiz, "must be a non-empty array");
  (data ?? []).forEach((q, i) => {
    const at = `question ${i + 1}`;
    if (typeof q.q !== "string" || !q.q.trim()) fail(quiz, `${at}: "q" is missing`);
    if (!Array.isArray(q.options) || q.options.length !== 4)
      fail(quiz, `${at}: needs exactly 4 options`);
    else if (new Set(q.options).size !== 4)
      fail(quiz, `${at}: options must be different from each other`);
    if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3)
      fail(quiz, `${at}: "answer" must be 0, 1, 2 or 3`);
    if (typeof q.why !== "string" || !q.why.trim())
      fail(quiz, `${at}: "why" explanation is missing`);
  });
}

for (const [dir, keys] of [
  ["labs", ["title", "summary", "minutes", "module", "level"]],
  ["cheatsheets", ["title", "summary", "color"]],
]) {
  const base = path.join(root, "content", dir);
  if (!fs.existsSync(base)) continue;
  for (const f of fs.readdirSync(base).filter((x) => x.endsWith(".md"))) {
    const file = path.join(base, f);
    const fm = frontMatter(file);
    if (!fm) continue;
    for (const k of keys) if (!fm.data[k]) fail(file, `front matter is missing "${k}"`);
    if (dir === "labs" && fm.data.module && !moduleSlugs.includes(fm.data.module))
      fail(file, `unknown module "${fm.data.module}"`);
  }
}

const glossary = fs.readFileSync(path.join(root, "src", "data", "glossary.ts"), "utf8");
const seen = new Set();
for (const m of glossary.matchAll(
  /\{\s*term:\s*"([^"]+)",\s*def:\s*"([^"]+)",\s*module:\s*"([^"]+)"/g,
)) {
  if (seen.has(m[1].toLowerCase())) fail("src/data/glossary.ts", `duplicate term "${m[1]}"`);
  seen.add(m[1].toLowerCase());
  if (!moduleSlugs.includes(m[3]))
    fail("src/data/glossary.ts", `term "${m[1]}" uses unknown module "${m[3]}"`);
}

if (errors.length) {
  console.error(`\n${errors.length} problem(s) found:\n`);
  for (const e of errors) console.error(" - " + e);
  process.exit(1);
}
console.log(
  `Content looks good: ${moduleSlugs.length} modules checked, ${seen.size} glossary terms.`,
);
