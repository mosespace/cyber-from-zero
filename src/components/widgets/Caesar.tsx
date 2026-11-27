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
    <div className="widget">
      <h4>Caesar cipher playground</h4>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="Message"
      />
      <label>
        Shift: <b>{shift}</b>
        <input
          type="range"
          min={1}
          max={25}
          value={shift}
          onChange={(e) => setShift(+e.target.value)}
        />
      </label>
      <div className="out">{shiftText(text, shift)}</div>
      <p className="why">To decode, shift the other way by the same amount ({26 - shift}).</p>
    </div>
  );
}
