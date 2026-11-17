import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCheatsheets } from "@/lib/extras";
import Markdown from "@/components/Markdown";

type Props = { params: Promise<{ slug: string }> };

