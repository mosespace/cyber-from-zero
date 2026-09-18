"use client";

import { useState } from "react";
import { completeLesson, uncompleteLesson, useStore } from "@/lib/store";

const COLORS = ["#FFC93C", "#FF6B57", "#27D3A2", "#7CCBFF", "#B9A2FF", "#FF9BC9"];

export default function CompleteButton({ id }: { id: string }) {
  const { done } = useStore();
  const isDone = done.includes(id);
  const [burst, setBurst] = useState(0);
  const [toast, setToast] = useState(false);

