"use client";

import { useStore } from "@/lib/store";

export default function LessonStatus({ id, n }: { id: string; n: number }) {
  const { done } = useStore();
  const isDone = done.includes(id);
  return <span className={`n ${isDone ? "done" : ""}`}>{isDone ? "✓" : n}</span>;
}
