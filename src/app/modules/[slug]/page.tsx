import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getModule, getModules } from "@/lib/content";
import { moduleVideos } from "@/data/resources";
import { glossary } from "@/data/glossary";
import AudioPlayer from "@/components/AudioPlayer";
import LessonStatus from "@/components/LessonStatus";
import ModuleIcon from "@/components/ModuleIcon";
