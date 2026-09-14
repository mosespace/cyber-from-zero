import type { ComponentType } from "react";
import AttackMotives from "./AttackMotives";
import CiaTriad from "./CiaTriad";
import DefenseInDepth from "./DefenseInDepth";
import HttpFlow from "./HttpFlow";
import KillChain from "./KillChain";
import OsiLayers from "./OsiLayers";
import PasswordTime from "./PasswordTime";

/** Lessons use ```chart:name to place one of these. */
export const charts: Record<string, ComponentType> = {
  "cia-triad": CiaTriad,
  "osi-layers": OsiLayers,
  "http-flow": HttpFlow,
  "attack-motives": AttackMotives,
  "password-time": PasswordTime,
  "defense-in-depth": DefenseInDepth,
  "kill-chain": KillChain,
};
