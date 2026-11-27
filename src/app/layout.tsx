import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { getModules } from "@/lib/content";
import { getCheatsheets, getLabs } from "@/lib/extras";
import type { SearchItem } from "@/components/SearchModal";

/** One clean, friendly family for all text. */
const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});
/** Source Code Pro is the code font PostHog uses too. */
const code = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: { default: "Cyber From Zero", template: "%s · Cyber From Zero" },
  description:
    "Learn cybersecurity from zero. Free lessons in simple English with audio, quizzes, flashcards and a learning path.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const mods = getModules();
  const items: SearchItem[] = mods.flatMap((m) => [
    { title: m.title, sub: m.blurb, href: `/modules/${m.slug}`, color: m.color, kind: "Module" },
    ...m.lessons.map((l) => ({
      title: l.title,
      sub: l.summary,
      href: `/learn/${m.slug}/${l.slug}`,
      color: m.color,
      kind: `Lesson · ${m.title}`,
    })),
  ]);
  items.push(
    ...getLabs().map((l) => ({
      title: l.title,
      sub: l.summary,
      href: `/labs/${l.slug}`,
      color: l.color,
      kind: "Lab",
    })),
    ...getCheatsheets().map((c) => ({
      title: c.title,
      sub: c.summary,
      href: `/cheatsheets/${c.slug}`,
      color: c.color,
      kind: "Cheat sheet",
    })),
  );
  return (
    <html lang="en" className={`${sans.variable} ${code.variable}`}>
      <body>
        <Header items={items} />
        <main>{children}</main>
      </body>
    </html>
  );
}
