
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { JourneyStage } from "@/data/journey";

export function JourneyCard({
  item,
  index,
}: {
  item: JourneyStage;
  index: number;
}) {
  const reduced = useReducedMotion();
  const Icon = item.icon;

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6 transition-colors duration-300 hover:border-cyan-300/25 hover:bg-white/[0.025] sm:p-7"
    >
      <div className="absolute right-6 top-7 h-px w-8 bg-cyan-300/20 transition-all duration-300 group-hover:w-12 group-hover:bg-cyan-300/50" />

      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[10px] tracking-[.18em] text-cyan-300">
          {item.period}
        </span>

        <span className="font-mono text-[10px] text-slate-600">
          {item.number}
        </span>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.04] text-cyan-300 transition-colors group-hover:border-cyan-300/30">
          <Icon size={20} strokeWidth={1.6} />
        </div>

        <h3 className="pr-4 text-lg font-semibold tracking-tight text-slate-100">
          {item.title}
        </h3>
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-400">
        {item.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {item.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-2 font-mono text-[10px] text-slate-400 transition-colors hover:border-cyan-300/20 hover:text-slate-200"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-2 pt-7">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/80" />

        <span className="h-px w-8 bg-white/[0.08]" />

        <span className="font-mono text-[8px] tracking-[.18em] text-slate-600">
          {item.status}
        </span>

        <ArrowUpRight
          size={14}
          className="ml-auto text-slate-700 transition-colors group-hover:text-cyan-300"
        />
      </div>
    </motion.article>
  );
}
