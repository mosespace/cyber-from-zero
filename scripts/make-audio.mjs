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
