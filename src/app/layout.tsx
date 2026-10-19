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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const mods = getModules();
  const items: SearchItem[] = mods.flatMap((m) => [
    { title: m.title, sub: m.blurb, href: `/modules/${m.slug}`, color: m.color, kind: "Module" },
    ...m.lessons.map((l) => ({ title: l.title, sub: l.summary, href: `/learn/${m.slug}/${l.slug}`, color: m.color, kind: `Lesson · ${m.title}` })),
  ]);
  items.push(
    ...getLabs().map((l) => ({ title: l.title, sub: l.summary, href: `/labs/${l.slug}`, color: l.color, kind: "Lab" })),
    ...getCheatsheets().map((c) => ({ title: c.title, sub: c.summary, href: `/cheatsheets/${c.slug}`, color: c.color, kind: "Cheat sheet" })),
  );
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Header items={items} />
        <main>{children}</main>
      </body>
    </html>
