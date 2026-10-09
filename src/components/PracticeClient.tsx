"use client";

import { useState } from "react";
import QuizRunner, { type PoolQuestion } from "./QuizRunner";
import ModuleIcon from "./ModuleIcon";
import { Star } from "./shapes";

type Mod = { slug: string; title: string; color: string; count: number };

