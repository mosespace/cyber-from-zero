"use client";

import { useRef, useState } from "react";

const fmt = (s: number) => (isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}` : "0:00");
const SPEEDS = [1, 1.25, 1.5, 0.85];

export default function AudioPlayer({ src, title, note }: { src: string; title: string; note?: string }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0);
  const [dur, setDur] = useState(0);
  const [speed, setSpeed] = useState(0);

  function toggle() {
    const a = ref.current;
    if (!a) return;
    if (a.paused) a.play(); else a.pause();
  }
  function cycle() {
    const next = (speed + 1) % SPEEDS.length;
    setSpeed(next);
    if (ref.current) ref.current.playbackRate = SPEEDS[next];
  }

  return (
