"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoMark, Flame, Bolt } from "./shapes";
import SearchModal, { type SearchItem } from "./SearchModal";
import { streakOf, useStore } from "@/lib/store";

const links = [
  ["/path", "Path"],
