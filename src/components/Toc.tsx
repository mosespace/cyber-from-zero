"use client";

import { useEffect, useState } from "react";

export default function Toc({ items }: { items: { id: string; text: string }[] }) {
