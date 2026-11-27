// Takes the README screenshots with your installed Chrome (no extra packages).
//
//   npm run build && npm start        # in one terminal
//   npm run screenshots               # in another
//
// Set CHROME=/path/to/chrome if Chrome is not found, BASE_URL if the site is not on :3000.
// The pictures use demo progress (streak, XP, badges) so the dashboard is not empty.
import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const OUT = path.join(process.cwd(), "docs", "screenshots");
const PORT = 9333;
const CANDIDATES = [
  process.env.CHROME,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
].filter(Boolean);
const CHROME = CANDIDATES.find((p) => fs.existsSync(p));
if (!CHROME) throw new Error("Chrome not found. Set the CHROME environment variable.");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const day = (n) => {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

// Demo progress: two finished modules, a 5 day streak, some flashcards learned.
const DEMO = {
  done: [
    "digital-world/what-is-a-computer",
    "digital-world/bits-and-data",
    "digital-world/how-the-internet-works",
    "security-mindset/the-cia-triad",
    "security-mindset/risk-threats-vulnerabilities",
    "security-mindset/who-are-the-attackers",
    "networking/ip-addresses-and-ports",
    "networking/protocols-tcp-udp-http",
  ],
  xp: 340,
  days: [0, 1, 2, 3, 4].map(day),
  quiz: { "quiz:digital-world": 5, "quiz:security-mindset": 4, "practice:mixed": 7 },
  cards: Object.fromEntries(
    [
      "Bit",
      "Byte",
      "CPU",
      "RAM",
      "Bug",
      "IP address",
      "DNS",
      "Packet",
      "Server",
      "Confidentiality",
      "Integrity",
      "Availability",
      "Vulnerability",
      "Threat",
      "Risk",
      "White hat",
      "Port",
      "TCP",
      "UDP",
      "HTTPS",
      "Protocol",
      "OSI model",
    ].map((t, i) => [t, 1 + (i % 3)]),
  ),
  awarded: [],
};

const SHOTS = [
  { name: "home", url: "/", w: 1280, h: 860 },
  {
    name: "home-modules",
    url: "/",
    w: 1280,
    h: 900,
    js: `document.querySelector("#modules").scrollIntoView()`,
  },
  {
    name: "path",
    url: "/path",
    w: 1280,
    h: 900,
    js: `document.querySelector(".start-tag").scrollIntoView({block:"center"})`,
  },
  { name: "lesson", url: "/learn/security-mindset/the-cia-triad", w: 1280, h: 960 },
  {
    name: "quiz",
    url: "/modules/networking",
    w: 1280,
    h: 820,
    js: `document.querySelectorAll(".opt")[2].click(); document.querySelector("#quiz").scrollIntoView()`,
  },
  {
    name: "flashcards",
    url: "/flashcards",
    w: 1280,
    h: 860,
    js: `document.querySelector(".card3d").click(); document.querySelector(".fc-meta").scrollIntoView({block:"start"})`,
  },
  { name: "dashboard", url: "/me", w: 1280, h: 1000 },
  { name: "labs", url: "/labs", w: 1280, h: 900 },
  { name: "mobile-home", url: "/", w: 390, h: 844, dpr: 2, mobile: true },
  {
    name: "mobile-lesson",
    url: "/learn/networking/the-osi-model",
    w: 390,
    h: 844,
    dpr: 2,
    mobile: true,
  },
];

const profile = fs.mkdtempSync(path.join(os.tmpdir(), "cfz-shots-"));
const chrome = spawn(
  CHROME,
  [
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${profile}`,
    "--headless=new",
    "--hide-scrollbars",
    "--disable-gpu",
    "--no-first-run",
    "about:blank",
  ],
  { stdio: "ignore" },
);

try {
  let targets;
  for (let i = 0; i < 50; i++) {
    try {
      targets = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
      if (targets.some((t) => t.type === "page")) break;
    } catch {}
    await sleep(200);
  }
  const ws = new WebSocket(targets.find((t) => t.type === "page").webSocketDebuggerUrl);
  await new Promise((r) => (ws.onopen = r));
  let id = 0;
  const pending = new Map();
  ws.onmessage = (m) => {
    const msg = JSON.parse(m.data);
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg);
      pending.delete(msg.id);
    }
  };
  const send = (method, params = {}) =>
    new Promise((res) => {
      const n = ++id;
      pending.set(n, res);
      ws.send(JSON.stringify({ id: n, method, params }));
    });
  const evaluate = (expression) => send("Runtime.evaluate", { expression, awaitPromise: true });
  const go = async (url) => {
    await send("Page.navigate", { url: BASE + url });
    for (let i = 0; i < 40; i++) {
      const r = await evaluate(
        "document.readyState === 'complete' && document.fonts.status === 'loaded'",
      );
      if (r.result?.result?.value) break;
      await sleep(150);
    }
    await sleep(900);
  };

  await send("Page.enable");
  await go("/");
  await evaluate(`localStorage.setItem("cfz-v2", ${JSON.stringify(JSON.stringify(DEMO))})`);

  fs.mkdirSync(OUT, { recursive: true });
  for (const s of SHOTS) {
    await send("Emulation.setDeviceMetricsOverride", {
      width: s.w,
      height: s.h,
      deviceScaleFactor: s.dpr ?? 1.5,
      mobile: !!s.mobile,
    });
    await go(s.url);
    if (s.js) {
      await evaluate(s.js);
      await sleep(700);
    }
    const shot = await send("Page.captureScreenshot", { format: "png" });
    fs.writeFileSync(path.join(OUT, `${s.name}.png`), Buffer.from(shot.result.data, "base64"));
    console.log("saved", `docs/screenshots/${s.name}.png`);
  }
  ws.close();
} finally {
  chrome.kill();
  await new Promise((r) => (chrome.exitCode !== null ? r() : chrome.once("exit", r)));
  await sleep(300);
  try {
    fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  } catch {}
}
