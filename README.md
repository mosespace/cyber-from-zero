# Cyber From Zero 🛡️

A free, beginner-friendly **cybersecurity course** written in simple English, so that anyone aged 18 or older (or curious younger readers) can follow it with no experience.

The repository has two parts:

1. **`content/`** – the course itself: 10 modules, 30 short lessons, quizzes and a study plan, all in plain Markdown.
2. **A Next.js (App Router) learning site** – turns the Markdown into a visual course with diagrams, charts, interactive widgets, narrated audio, video resources and progress tracking.

## The course map

| #   | Module                                   | Level        |
| --- | ---------------------------------------- | ------------ |
| 1   | How the Digital World Works              | Beginner     |
| 2   | The Security Mindset                     | Beginner     |
| 3   | Networking Basics                        | Beginner     |
| 4   | Operating Systems and Linux              | Beginner     |
| 5   | Passwords and Cryptography               | Beginner     |
| 6   | Malware, Phishing and Social Engineering | Beginner     |
| 7   | Web Security Essentials                  | Intermediate |
| 8   | Defending Systems                        | Intermediate |
| 9   | Ethical Hacking and Pentesting           | Intermediate |
| 10  | Incident Response and Your Career        | Advanced     |

## Features of the site

- **Learning path**: a winding trail through every lesson, with a "START" marker on your next one.
- **Narrated audio**: every lesson and module overview has a natural neural voice, with seek and speed control.
- **Quizzes and practice mode**: 50 questions, one at a time with instant explanations, plus a mixed challenge.
- **Flashcards and glossary**: 58 plain-English terms with a flip-card trainer that brings back the words you miss.
- **XP, levels, streaks and badges**: saved in your browser only (no accounts).
- **Labs and cheat sheets**: 10 hands-on labs (one per module) and 6 quick reference sheets.
- **Search** with `Ctrl/Cmd + K`, reading progress bar, lesson contents list and a takeaway card on every lesson.
- **Diagrams and widgets**: SVG charts and a Caesar cipher and password meter you can play with.

The look is flat and product-like, inspired by PostHog: a greige paper background, near-black ink, orange and amber accents, thin borders, press-down buttons, app-window panels and a small library of geometric shapes (`src/components/shapes.tsx`, `ModuleIcon.tsx`).

## Run the site

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Narrated audio

Audio is recorded with Microsoft's free neural voices through [`edge-tts`](https://github.com/rany2/edge-tts). Only the public course text is sent to the speech service.

```bash
pip install edge-tts
npm run audio                        # records missing files
FORCE=1 npm run audio                # re-record everything
VOICE=en-US-AndrewNeural npm run audio
```

Good voices to try: `en-US-AvaNeural` (default), `en-US-EmmaNeural`, `en-US-AndrewNeural`, `en-US-BrianNeural`.

## Ground rules

This course teaches defence and ethical hacking. **Only test systems you own or have written permission to test.**
