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
  };
}

export function useStore(): State {
  return useSyncExternalStore(subscribe, load, () => EMPTY);
}

export const todayKey = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

function touch(s: State): State {
  const t = todayKey();
  return s.days.includes(t) ? s : { ...s, days: [...s.days, t] };
}

function award(s: State, key: string, xp: number): State {
  return s.awarded.includes(key) ? s : { ...s, xp: s.xp + xp, awarded: [...s.awarded, key] };
}

/** Returns true when this completion gave new XP. */
export function completeLesson(id: string) {
  const s = load();
  if (s.done.includes(id)) return false;
  const fresh = !s.awarded.includes(`lesson:${id}`);
  save(touch(award({ ...s, done: [...s.done, id] }, `lesson:${id}`, 20)));
  return fresh;
}

