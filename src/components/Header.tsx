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
