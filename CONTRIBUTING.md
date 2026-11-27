# Contributing to Cyber From Zero

Thank you for helping people learn cybersecurity! 💛 This project is for beginners, and the best
contributions come from people who remember what it felt like to be one.

You do **not** need to write code. Most contributions are just Markdown files.

## Ways to help

| I want to...                                 | Do this                                                                             |
| -------------------------------------------- | ----------------------------------------------------------------------------------- |
| Fix a typo or unclear sentence               | Edit the file and open a pull request. No issue needed                              |
| Report a mistake in a lesson                 | Open a [Content fix](../../issues/new?template=content_fix.yml) issue               |
| Suggest a lesson, lab, quiz or glossary term | Open a [Content suggestion](../../issues/new?template=content_suggestion.yml) issue |
| Report a bug in the website                  | Open a [Bug report](../../issues/new?template=bug_report.yml)                       |
| Propose a feature or design change           | Open a [Feature request](../../issues/new?template=feature_request.yml)             |
| Ask a question or share an idea              | Open an issue, or start a discussion if enabled                                     |
| Report a security problem                    | Do **not** open a public issue. See [SECURITY.md](SECURITY.md)                      |

Good first contributions: add a quiz question, add a glossary term, improve an analogy, add alt text
or fix a layout problem on a small screen.

## Before you start

1. **Check existing issues and pull requests** so you do not duplicate work.
2. For anything bigger than a small fix (a new lesson, a new page, a new dependency), **open an
   issue first** and say you would like to work on it. This avoids wasted effort.
3. Read the [Code of Conduct](CODE_OF_CONDUCT.md) and the [content style guide](docs/CONTENT-STYLE-GUIDE.md).

## Set up the project

You need **Node.js 20.9 or newer**.

```bash
# 1. Fork the repository on GitHub, then clone your fork
git clone https://github.com/<your-username>/cyber-from-zero.git
cd cyber-from-zero

# 2. Install and run
npm install
npm run dev          # http://localhost:3000

# 3. Create a branch for your work
git checkout -b fix/typo-in-osi-lesson
```

**Code style:** this project uses [Prettier](https://prettier.io) so everyone's code and Markdown looks the
same. Install the recommended editor extensions when your editor asks (VS Code will suggest Prettier
and EditorConfig), and files are formatted when you save. You can also run it by hand:

```bash
npm run format         # fix the style of every file
npm run format:check   # only check (this is what CI runs)
```

Before opening a pull request, run:

```bash
npm run format:check   # Prettier style
npm run check:content  # quizzes, front matter, labs and glossary
npm run typecheck
npm run build
```

All of them must pass. The same checks run automatically on every pull request.

## Writing and editing content

All course content lives in [`content/`](content). The site reads it at build time.

### Add or edit a lesson

Lessons are in `content/modules/NN-module-name/` and are named `NN-lesson-name.md`.

```markdown
---
title: Your Lesson Title
summary: One sentence that says what the learner will get.
minutes: 7
---

A short, friendly introduction (2 to 3 sentences).

## First big idea

Explain it with an everyday comparison.

| Term   | Simple meaning        |
| ------ | --------------------- |
| Packet | A small piece of data |

## Try it yourself

Something the learner can do in a minute or two.

## Remember

- Three short bullet points.
- Each one a full thought.
- The last section must be called "Remember".
```

Rules the site relies on:

- If a front matter value contains a colon followed by a space (for example a title like
  `Protocols: TCP and UDP`), wrap it in quotes: `title: "Protocols: TCP and UDP"`.
- The file name's number sets the order. The text after the number becomes the URL.
- Use `##` for section headings (these build the contents list). Do not use `#`.
- The final section named **Remember** becomes the green takeaway card. Keep it to bullet points.
- Tables, lists, bold, links and code blocks all work (GitHub-flavoured Markdown).
- To add a diagram or widget, use a fenced block with a special name:

  ````markdown
  ```chart:osi-layers

  ```
  ````

  Available charts: `cia-triad`, `osi-layers`, `http-flow`, `attack-motives`, `password-time`,
  `defense-in-depth`, `kill-chain`. Available widgets: `widget:caesar`, `widget:password-meter`.
  New ones go in `src/components/charts/` or `src/components/widgets/` and are registered in
  `charts/index.tsx` or `Markdown.tsx`.

### Add quiz questions

Each module has a `quiz.json` with an array of questions:

```json
{
  "q": "Which port is normally used for secure websites?",
  "options": ["21", "80", "443", "25"],
  "answer": 2,
  "why": "HTTPS uses port 443."
}
```

- `answer` is the **zero-based** index of the correct option. Use exactly 4 options.
- `why` is a one-sentence explanation shown after the answer. It teaches, so make it useful.
- Wrong options should be believable, not silly.

### Add a glossary term (and flashcard)

Add an entry to `src/data/glossary.ts`. It becomes a glossary card and a flashcard automatically.

```ts
{ term: "Hash", def: "A one-way fingerprint of data. You cannot turn it back.", module: "cryptography" },
```

Keep definitions to one or two simple sentences. The `module` value is the module's slug (the folder
name without its number).

### Add a lab or cheat sheet

- Labs: `content/labs/NN-name.md` with `title`, `summary`, `minutes`, `module` (a module slug) and `level` in the front matter.
- Cheat sheets: `content/cheatsheets/name.md` with `title`, `summary` and `color` in the front matter.

Labs must be **safe and legal**: only the learner's own computer, local practice apps or targets that
explicitly allow testing. See the safety rules below.

### Add a whole new module

This is a larger change, so please open an issue first. You will need:

1. A folder `content/modules/NN-name/` with `index.md`, lessons and `quiz.json`.
2. The front matter in `index.md`: `title`, `color`, `level`, `hours`, `blurb`.
3. An icon case in `src/components/ModuleIcon.tsx` (a simple geometric drawing).
4. Video search links in `src/data/resources.ts` and glossary terms.

### Audio narration

Narration files are generated from the lesson text, so you do not need to record anything.
If your change alters a lesson, mention it in the pull request and a maintainer will re-record it.
If you want to do it yourself, install [`edge-tts`](https://github.com/rany2/edge-tts) and run:

```bash
ONLY=the-lesson-slug FORCE=1 npm run audio
```

Please do not commit audio files for lessons you did not change.

## Content rules

The [content style guide](docs/CONTENT-STYLE-GUIDE.md) has details and examples. In short:

- **Simple English.** Short sentences. One idea at a time. Explain every new word the first time it appears.
- **Comparisons first.** Start from something familiar (a house, a post office) before the technical term.
- **Accurate.** Check facts against trustworthy sources. If a number is made up for illustration, say so.
- **Original.** Write in your own words. Do not copy text from books, courses or websites.
- **Inclusive and kind.** No jokes at the learner's expense. No assumptions about who they are.

### Safety and ethics (non-negotiable)

This is a defensive, educational project. We will **not** accept:

- step-by-step instructions to attack systems the reader does not own or have permission to test
- working malware, ransomware, credential stealers or exploit code aimed at real products
- ways to avoid detection, hide crimes or target specific people or organisations
- anything that encourages illegal access

Fine: explaining **how** attacks work at a concept level, safe demonstrations on the learner's own
machine, deliberately vulnerable practice apps, and defensive techniques. When in doubt, ask in an issue first.

## Code contributions

- **TypeScript**, strict mode. Prefer small, readable components.
- **Formatting is automatic.** Do not argue about style in reviews. Run `npm run format` and let Prettier decide (see `.prettierrc.json`).
- Pages are **statically generated**. Keep new pages static where possible.
- **No new dependencies** without discussing them in an issue first. The project is deliberately light.
- **Styling:** plain CSS in `src/app/globals.css` using the existing tokens (`--ink`, `--paper`, `--sun`, `--coral`...).
  Match the design language: flat colours, thin dark borders, press-down buttons, geometric shapes. No gradients.
- **Accessibility matters:** real buttons and links, visible focus, enough contrast, labels on icons,
  respect `prefers-reduced-motion`, and test on a narrow phone screen.
- **No tracking or accounts.** Progress stays in the browser's `localStorage`.
- Decorative shapes live in `src/components/shapes.tsx`. Draw new icons and diagrams as inline SVG.

### Testing your change

There is no test runner yet (a great area to help). Until then:

1. `npm run format:check`, `npm run check:content`, `npm run typecheck` and `npm run build` pass.
2. Click through the pages you touched, on desktop width and phone width.
3. Check keyboard use (Tab, Enter, Space) if you changed anything interactive.
4. Include a screenshot in your pull request for visual changes.

## Commits and pull requests

- Keep each pull request **focused on one thing**.
- Write clear commit messages in the present tense, for example `Add quiz question on port 443` or
  `Fix START tag position on the learning path`. Prefixes like `fix:`, `feat:`, `docs:`, `content:` are welcome but optional.
- Fill in the pull request template. Link the issue it closes (for example `Closes #12`).
- Be patient and kind in review. A maintainer will reply as soon as they can. Small content fixes are usually merged quickly.
- You may be asked to make changes. That is a normal, friendly part of the process.

By submitting a pull request you agree that your contribution is licensed under the project's licenses:
**CC BY 4.0** for content and **MIT** for code (see [CONTENT-LICENSE.md](CONTENT-LICENSE.md) and [LICENSE](LICENSE)).

## Suggested labels (for maintainers)

`bug` · `enhancement` · `content` · `content: fix` · `good first issue` · `help wanted` ·
`design` · `accessibility` · `audio` · `documentation` · `needs triage` · `wontfix`

## Getting help

Stuck? Open an issue describing what you tried and what you expected. There are no silly questions here.
