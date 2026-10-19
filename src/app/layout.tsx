import type { Metadata } from "next";
import { IBM_Plex_Sans, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { getModules } from "@/lib/content";
import { getCheatsheets, getLabs } from "@/lib/extras";
