"use client";

import { useSyncExternalStore } from "react";

export type State = {
  done: string[];                 // lesson ids like "networking/the-osi-model"
  xp: number;
  days: string[];                 // dates (YYYY-MM-DD) with any activity
