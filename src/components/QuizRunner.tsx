"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/lib/content";
import { recordQuiz } from "@/lib/store";
import { Star } from "./shapes";

export type PoolQuestion = QuizQuestion & { moduleTitle?: string };

/** One question at a time, with instant feedback. Gives XP for improving your best score. */
export default function QuizRunner({ questions, storeKey, onExit }: { questions: PoolQuestion[]; storeKey: string; onExit?: () => void }) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
