
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import { HeroContent } from "./hero-content";
import { HeroVisual } from "./hero-visual";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[760px] items-center overflow-hidden pb-20 pt-32"
    >
      {/* Background glows */}
      <div className="glow left-[12%] top-[22%]" />

      <div
        className="glow right-[7%] top-[35%]"
        style={{ background: "#8b5cf6" }}
      />

      {/* Left content + right visualization */}
      <div className="container grid items-center gap-14 lg:grid-cols-[1.12fr_.88fr]">
        <HeroContent reduced={!!reduced} />
        <HeroVisual reduced={!!reduced} />
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[9px] tracking-[.2em] text-slate-600 transition-colors hover:text-cyan-200 sm:flex"
      >
        SCROLL TO EXPLORE
        <ArrowDown size={13} />
      </a>
    </section>
  );
}
