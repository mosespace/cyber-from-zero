"use client";

import { useState } from "react";
import { completeLesson, uncompleteLesson, useStore } from "@/lib/store";

const COLORS = ["#FFC93C", "#FF6B57", "#27D3A2", "#7CCBFF", "#B9A2FF", "#FF9BC9"];

export default function CompleteButton({ id }: { id: string }) {
  const { done } = useStore();
  const isDone = done.includes(id);
  const [burst, setBurst] = useState(0);
  const [toast, setToast] = useState(false);

  function click() {
    if (isDone) return uncompleteLesson(id);
    const gained = completeLesson(id);
    setBurst((b) => b + 1);
    if (gained) {
      setToast(true);
      setTimeout(() => setToast(false), 2200);
    }
  }

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <button className={`btn ${isDone ? "done" : "blue"}`} onClick={click}>
        {isDone ? "✓ Lesson complete" : "Complete lesson  +20 XP"}
      </button>
      {burst > 0 && (
        <span className="burst" key={burst} aria-hidden>
          {Array.from({ length: 16 }, (_, i) => {
            const a = (i / 16) * Math.PI * 2;
            const d = 70 + (i % 3) * 28;
            return (
              <i
