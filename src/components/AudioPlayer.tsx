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
    <div className="audio pop">
      <audio
        ref={ref} src={src} preload="none"
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)}
        onLoadedMetadata={(e) => setDur(e.currentTarget.duration)}
        onTimeUpdate={(e) => setT(e.currentTarget.currentTime)}
      />
      <div className="row">
        <button className="play" onClick={toggle} aria-label={playing ? "Pause" : "Play"}>
          {playing ? (
            <svg width="22" height="22" viewBox="0 0 24 24"><rect x="5" y="4" width="5" height="16" rx="1.5" fill="#16162b" /><rect x="14" y="4" width="5" height="16" rx="1.5" fill="#16162b" /></svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24"><path d="M7 4 20 12 7 20Z" fill="#16162b" stroke="#16162b" strokeWidth="2" strokeLinejoin="round" /></svg>
          )}
        </button>
        <div>
          <b>{title}</b>
          <small>{note ?? "Narrated by a natural voice"}</small>
        </div>
      </div>
      <input
        type="range" min={0} max={dur || 1} step={0.1} value={t} aria-label="Seek"
        onChange={(e) => { if (ref.current) ref.current.currentTime = +e.target.value; }}
      />
      <div className="times">
        <span>{fmt(t)} / {fmt(dur)}</span>
        <button className="speed" onClick={cycle} aria-label="Playback speed">{SPEEDS[speed]}x</button>
