
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type HeroContentProps = {
  reduced?: boolean;
};

export function HeroContent({ reduced = false }: HeroContentProps) {
  const systemReduced = useReducedMotion();
  const noMotion = reduced || !!systemReduced;

  return (
    <div className="relative z-10">
      <motion.div
        initial={noMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-7 inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-300/[.06] px-3 py-2 font-mono text-[10px] tracking-[.13em] text-cyan-100"
      >
        <span className="mr-2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_#58f3ff]" />
        CLOUD / DEVOPS / SOFTWARE
      </motion.div>

      <p className="mb-4 font-mono text-sm text-slate-400">
        Hello, world. I&apos;m
      </p>

      <motion.h1
        initial={noMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-5xl font-black leading-[.98] tracking-[-.065em] sm:text-7xl xl:text-[5.4rem]"
      >
        Piyumal
        <br />
        <span className="gradient">Sandaruwan.</span>
      </motion.h1>

      <p className="mt-7 text-sm text-slate-400 sm:text-base">
        Building in the space between{" "}
        <b className="text-cyan-200">code</b> /{" "}
        <b className="text-violet-300">cloud</b> /{" "}
        <b className="text-slate-100">automation.</b>
      </p>

      <p className="mt-5 max-w-xl text-sm leading-8 text-slate-400 sm:text-base">
        BICT (Hons) undergraduate exploring cloud infrastructure,
        DevOps practices, networking, and secure software delivery
        — turning complex systems into reliable solutions.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#projects" className="button primary">
          Explore my work <ArrowRight size={16} />
        </a>

        <a href="#contact" className="button secondary">
          Get in touch <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/[.07] pt-6 text-[11px] text-slate-500">
        <span>● Cloud &amp; DevOps</span>
        <span>● Full-stack development</span>
        <span>● Networking &amp; security</span>
      </div>
    </div>
  );
}
