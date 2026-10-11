"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/lib/content";
import { recordQuiz } from "@/lib/store";
import { Star } from "./shapes";

export type PoolQuestion = QuizQuestion & { moduleTitle?: string };

