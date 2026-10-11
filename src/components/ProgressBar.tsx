"use client";

import { useStore } from "@/lib/store";

export default function ProgressBar({ ids, color, label }: { ids: string[]; color?: string; label?: boolean }) {
