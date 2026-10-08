"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";
import ModuleIcon from "./ModuleIcon";
import { Star } from "./shapes";

export type TrailModule = {
  slug: string; title: string; color: string; order: number; level: string;
  lessons: { slug: string; title: string; minutes: number }[];
};

