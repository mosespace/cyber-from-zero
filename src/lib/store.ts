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
