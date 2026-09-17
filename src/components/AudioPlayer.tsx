"use client";

import { useRef, useState } from "react";

const fmt = (s: number) => (isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}` : "0:00");
const SPEEDS = [1, 1.25, 1.5, 0.85];

export default function AudioPlayer({ src, title, note }: { src: string; title: string; note?: string }) {
  const ref = useRef<HTMLAudioElement>(null);
