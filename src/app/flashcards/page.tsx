import type { Metadata } from "next";
import { getModules } from "@/lib/content";
import { glossary } from "@/data/glossary";
import FlashcardsClient from "@/components/FlashcardsClient";
import { Plus, Square } from "@/components/shapes";

export const metadata: Metadata = { title: "Flashcards" };

