import Link from "next/link";
import { getModules, totals } from "@/lib/content";
import { glossary } from "@/data/glossary";
import ModuleCard from "@/components/ModuleCard";
import ContinueCard from "@/components/ContinueCard";
import { Blob, Circle, Dots, Half, HeroArt, Plus, Ring, Squiggle, Star, Triangle, Square, Wave } from "@/components/shapes";

const features = [
  { t: "Learning path", d: "A winding trail that shows exactly what to learn next.", href: "/path", c: "#7CCBFF", s: <Circle size={34} color="#fff" /> },
  { t: "Audio lessons", d: "Every lesson is narrated, so you can learn on the go.", href: "/modules/digital-world", c: "#FF9BC9", s: <Ring size={36} color="#fff" /> },
