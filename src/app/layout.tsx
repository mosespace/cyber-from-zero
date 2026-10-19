import type { Metadata } from "next";
import { IBM_Plex_Sans, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { getModules } from "@/lib/content";
import { getCheatsheets, getLabs } from "@/lib/extras";
import type { SearchItem } from "@/components/SearchModal";

const display = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-bricolage", weight: ["600", "700", "800"] });
const body = IBM_Plex_Sans({ subsets: ["latin"], variable: "--font-dm", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: { default: "Cyber From Zero", template: "%s · Cyber From Zero" },
  description: "Learn cybersecurity from zero. Free lessons in simple English with audio, quizzes, flashcards and a learning path.",
