"use client";

import Link from "next/link";
import { useState } from "react";
import { computeBadges, levelOf, resetAll, streakOf, todayKey, useStore, XP_PER_LEVEL, type ModuleIds } from "@/lib/store";
import { Circle, Flame, Square, Star, Triangle } from "./shapes";
import ModuleIcon from "./ModuleIcon";
