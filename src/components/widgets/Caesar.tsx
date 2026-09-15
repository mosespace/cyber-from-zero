"use client";

import { useState } from "react";

function shiftText(text: string, shift: number) {
  return text.replace(/[a-z]/gi, (ch) => {
    const base = ch <= "Z" ? 65 : 97;
    return String.fromCharCode(((ch.charCodeAt(0) - base + shift + 26) % 26) + base);
  });
}

export default function Caesar() {
  const [text, setText] = useState("Meet me at noon");
  const [shift, setShift] = useState(3);
  return (
