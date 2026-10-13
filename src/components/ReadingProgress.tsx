"use client";

import { useEffect, useRef } from "react";

export default function ReadingProgress() {
  const bar = useRef<HTMLElement>(null);
  useEffect(() => {
    const h = () => {
