import Link from "next/link";
import { getModules, totals } from "@/lib/content";
import { glossary } from "@/data/glossary";
import ModuleCard from "@/components/ModuleCard";
import ContinueCard from "@/components/ContinueCard";
import { Blob, Circle, Dots, Half, HeroArt, Plus, Ring, Squiggle, Star, Triangle, Square, Wave } from "@/components/shapes";

const features = [
  { t: "Learning path", d: "A winding trail that shows exactly what to learn next.", href: "/path", c: "#7CCBFF", s: <Circle size={34} color="#fff" /> },
  { t: "Audio lessons", d: "Every lesson is narrated, so you can learn on the go.", href: "/modules/digital-world", c: "#FF9BC9", s: <Ring size={36} color="#fff" /> },
  { t: "Quizzes", d: "Short quizzes after every module. Earn XP for each win.", href: "/practice", c: "#27D3A2", s: <Star size={36} color="#fff" /> },
  { t: "Flashcards", d: "50+ key words to flip, learn and remember.", href: "/flashcards", c: "#B9A2FF", s: <Square size={34} color="#fff" /> },
  { t: "Streaks and badges", d: "Come back each day, grow your streak, collect badges.", href: "/me", c: "#FF8A6B", s: <Triangle size={34} color="#fff" /> },
  { t: "Glossary", d: "Look up any security word in plain English.", href: "/glossary", c: "#8BE04E", s: <Plus size={34} color="#fff" /> },
];

const topics = ["Networking", "Linux", "Encryption", "Phishing", "Malware", "Web security", "Firewalls", "Ethical hacking", "Incident response", "Careers"];

export default function Home() {
  const mods = getModules();
  const t = totals();
