// Records a natural-sounding narration for every module and lesson using
// Microsoft's neural voices through the free `edge-tts` tool.
//
//   pip install edge-tts
//   npm run audio              (skips files that already exist)
//   FORCE=1 npm run audio      (re-record everything)
//   VOICE=en-US-AndrewNeural npm run audio
//
// Only the public course text is sent to the speech service.
import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { getModules } from "../src/lib/content.ts";

const VOICE = process.env.VOICE ?? "en-US-AvaNeural";
const RATE = process.env.RATE ?? "-4%";
const BIN = process.env.EDGE_TTS ?? "edge-tts";
const FORCE = !!process.env.FORCE;
const JOBS = 4;

const out = path.join(process.cwd(), "public", "audio");
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "cfz-tts-"));

const tasks = [];
for (const m of getModules()) {
  tasks.push({
    file: path.join(out, "modules", `${m.slug}.mp3`),
    text: `Module ${m.order}. ${m.title}. ${m.overview}`,
  });
