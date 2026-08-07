"use client";

import { useSyncExternalStore } from "react";

export type State = {
  done: string[];                 // lesson ids like "networking/the-osi-model"
  xp: number;
  days: string[];                 // dates (YYYY-MM-DD) with any activity
  quiz: Record<string, number>;   // best score per quiz key
  cards: Record<string, number>;  // flashcard box 0-4 per term
  awarded: string[];              // one-time XP rewards already given
};

const KEY = "cfz-v2";
const EMPTY: State = { done: [], xp: 0, days: [], quiz: {}, cards: {}, awarded: [] };

let cache: { raw: string | null; state: State } | null = null;
const listeners = new Set<() => void>();

function load(): State {
  try {
    const raw = localStorage.getItem(KEY);
    if (cache && cache.raw === raw) return cache.state;
    let state = EMPTY;
    if (raw) state = { ...EMPTY, ...JSON.parse(raw) };
    else {
      // bring over progress saved by the first version of the site
      const old = JSON.parse(localStorage.getItem("cfz-progress") ?? "[]");
      if (Array.isArray(old) && old.length) state = { ...EMPTY, done: old, xp: old.length * 20 };
    }
    cache = { raw, state };
    return state;
  } catch {
    return EMPTY;
  }
}

function save(next: State) {
  try {
    const raw = JSON.stringify(next);
    localStorage.setItem(KEY, raw);
    cache = { raw, state: next };
  } catch {}
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("storage", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", cb);
