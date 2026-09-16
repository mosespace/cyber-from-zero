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
