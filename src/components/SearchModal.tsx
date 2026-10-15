"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export type SearchItem = { title: string; sub: string; href: string; color: string; kind: string };

export default function SearchModal({ items, onClose }: { items: SearchItem[]; onClose: () => void }) {
