import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getLesson, getModules, getNeighbours } from "@/lib/content";
import AudioPlayer from "@/components/AudioPlayer";
import CompleteButton from "@/components/CompleteButton";
