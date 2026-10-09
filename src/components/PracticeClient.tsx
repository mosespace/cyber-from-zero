"use client";

import { useState } from "react";
import QuizRunner, { type PoolQuestion } from "./QuizRunner";
import ModuleIcon from "./ModuleIcon";
import { Star } from "./shapes";

type Mod = { slug: string; title: string; color: string; count: number };

function shuffle<T>(a: T[]) {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
