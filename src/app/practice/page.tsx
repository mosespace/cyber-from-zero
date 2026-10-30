import type { Metadata } from "next";
import { getModules } from "@/lib/content";
import PracticeClient from "@/components/PracticeClient";
import { Blob, Star } from "@/components/shapes";

export const metadata: Metadata = { title: "Practice" };

export default function Practice() {
