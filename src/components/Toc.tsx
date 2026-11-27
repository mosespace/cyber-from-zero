"use client";

import { useEffect, useState } from "react";

export default function Toc({ items }: { items: { id: string; text: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-90px 0px -65% 0px" },
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items]);
  if (!items.length) return null;
  return (
    <nav className="toc pop" aria-label="On this page">
      <h4>In this lesson</h4>
      {items.map((i) => (
        <a key={i.id} href={`#${i.id}`} className={active === i.id ? "on" : ""}>
          {i.text}
        </a>
      ))}
    </nav>
  );
}
