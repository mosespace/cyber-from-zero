"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoMark, Flame, Bolt } from "./shapes";
import SearchModal, { type SearchItem } from "./SearchModal";
import { streakOf, useStore } from "@/lib/store";

const links = [
  ["/path", "Path"],
  ["/practice", "Practice"],
  ["/flashcards", "Flashcards"],
  ["/glossary", "Glossary"],
  ["/labs", "Labs"],
  ["/resources", "Resources"],
];

export default function Header({ items }: { items: SearchItem[] }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const s = useStore();

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearch(true);
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <LogoMark /> Cyber From Zero
        </Link>
        <nav className={`nav ${open ? "open" : ""}`} aria-label="Main">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className={path.startsWith(href) ? "on" : ""} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="hdr-right">
          <button className="icon-btn" onClick={() => setSearch(true)} aria-label="Search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><circle cx="10" cy="10" r="7" /><path d="m16 16 5 5" /></svg>
            <span className="t">Search</span> <kbd>⌘K</kbd>
          </button>
          <Link href="/me" className="stat-chip" aria-label="Your progress">
            <span><Flame /> {streakOf(s.days)}</span>
            <span><Bolt /> {s.xp}</span>
