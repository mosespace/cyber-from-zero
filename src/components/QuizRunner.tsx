"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/lib/content";
import { recordQuiz } from "@/lib/store";
import { Star } from "./shapes";

export type PoolQuestion = QuizQuestion & { moduleTitle?: string };

/** One question at a time, with instant feedback. Gives XP for improving your best score. */
export default function QuizRunner({ questions, storeKey, onExit }: { questions: PoolQuestion[]; storeKey: string; onExit?: () => void }) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [gain, setGain] = useState(0);
  const [run, setRun] = useState(0);

  const q = questions[i];

  function pick(n: number) {
    if (picked !== null) return;
    setPicked(n);
    if (n === q.answer) setScore((s) => s + 1);
  }
  function next() {
    if (i + 1 < questions.length) {
      setI(i + 1);
      setPicked(null);
    } else {
      setGain(recordQuiz(storeKey, score));
      setFinished(true);
    }
  }
  function again() {
    setI(0); setPicked(null); setScore(0); setFinished(false); setRun((r) => r + 1);
  }

  if (finished) {
    const stars = score === questions.length ? 3 : score >= questions.length * 0.6 ? 2 : 1;
    return (
      <div className="qr pop result">
        <div className="stars">
          {[1, 2, 3].map((n) => (
            <Star key={n} size={64} color={n <= stars ? "#FFC93C" : "#e6dcc4"} />
          ))}
        </div>
        <h3>{score} / {questions.length} correct</h3>
        <p>{score === questions.length ? "Perfect score!" : stars === 2 ? "Great job. A little more practice and you will ace it." : "Good start. Read the lessons again and retry."}</p>
        {gain > 0 && <p><b>+{gain} XP</b> for beating your best.</p>}
        <div className="cta-row" style={{ justifyContent: "center", marginTop: 18 }}>
          <button className="btn blue" onClick={again}>Try again</button>
          {onExit && <button className="btn" onClick={onExit}>Back</button>}
        </div>
      </div>
    );
  }

  return (
    <div className="qr pop" key={run}>
      <div className="head">
        <span>Question {i + 1} of {questions.length}</span>
        <span>{q.moduleTitle ?? ""}</span>
      </div>
      <div className="bar" style={{ marginTop: 0 }}><i style={{ width: `${(i / questions.length) * 100}%` }} /></div>
      <h3>{q.q}</h3>
      <div className="opts">
        {q.options.map((o, n) => {
          const state = picked === null ? "" : n === q.answer ? "right" : n === picked ? "wrong" : "";
          return (
            <button key={o} className={`opt ${state}`} disabled={picked !== null} onClick={() => pick(n)}>
              <span className="k">{"ABCD"[n]}</span>{o}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <>
          <div className="explain"><b>{picked === q.answer ? "Correct! " : "Not quite. "}</b>{q.why}</div>
          <div className="foot">
            <button className="btn blue" onClick={next}>{i + 1 < questions.length ? "Next question →" : "See my score"}</button>
          </div>
        </>
      )}
    </div>
