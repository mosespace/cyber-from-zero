"use client";

import { useState } from "react";

function estimate(pw: string) {
  let pool = 0;
  if (/[a-z]/.test(pw)) pool += 26;
  if (/[A-Z]/.test(pw)) pool += 26;
  if (/\d/.test(pw)) pool += 10;
  if (/[^a-zA-Z0-9]/.test(pw)) pool += 33;
  const seconds = pool ? Math.pow(pool, pw.length) / 1e10 : 0;
  return seconds;
}

function human(s: number) {
  if (s < 1) return "instantly";
  const units: [string, number][] = [
    ["years", 31_557_600], ["days", 86_400], ["hours", 3600], ["minutes", 60], ["seconds", 1],
  ];
  if (s > 31_557_600 * 1e9) return "longer than the age of the universe";
  for (const [name, size] of units) {
    if (s >= size) return `about ${Math.round(s / size).toLocaleString()} ${name}`;
  }
  return "instantly";
}

export default function PasswordMeter() {
  const [pw, setPw] = useState("");
  const s = estimate(pw);
  const score = s < 1 ? 0 : s < 3600 ? 1 : s < 31_557_600 ? 2 : s < 31_557_600 * 1e3 ? 3 : 4;
  const labels = ["Very weak", "Weak", "OK", "Strong", "Excellent"];
  const colors = ["#fb7185", "#fb923c", "#fbbf24", "#a3e635", "#4ade80"];
  return (
    <div className="widget">
      <h4>Password strength meter</h4>
      <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="Type a made-up password" aria-label="Password" autoComplete="off" />
      <div className="bar" style={{ ["--c" as string]: colors[score] }}>
        <i style={{ width: pw ? `${(score + 1) * 20}%` : "0%" }} />
      </div>
      {pw && (
