
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { pipelineStages } from "@/data/journey";

export function DevOpsPipeline() {
  const reduced = useReducedMotion();

  return (
    <div className="relative">
      <div className="mb-6 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[.2em] text-slate-600">
        <span className="text-cyan-300">&gt;_</span>
        <span>Delivery workflow</span>
        <span className="h-px w-10 bg-cyan-300/20" />
        <span>End-to-end</span>
      </div>

      <div className="overflow-x-auto pb-4">
        <div className="relative flex min-w-[760px] items-center justify-between gap-3 px-2 py-5 sm:min-w-0">
          {/* Connecting line */}
          <div className="absolute left-10 right-10 top-1/2 h-px -translate-y-1/2 bg-white/[0.08]" />

          <motion.div
            aria-hidden="true"
            className="absolute left-10 top-1/2 h-px w-16 -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
            animate={reduced ? undefined : { x: [0, 180, 360, 540, 720], opacity: [0, 1, 1, 1, 0] }}
            transition={
              reduced
                ? undefined
                : { duration: 5, repeat: Infinity, ease: "linear" }
            }
          />

          {pipelineStages.map(({ number, title, icon: Icon }, index) => (
            <motion.div
              key={number}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
              className={`group relative z-10 flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-2xl border bg-[#090c11] transition-colors duration-300 ${
                index === 2
                  ? "border-cyan-300/20 bg-cyan-300/[0.04]"
                  : "border-white/[0.09] hover:border-cyan-300/30"
              }`}
            >
              <Icon
                size={21}
                strokeWidth={1.6}
                className="text-cyan-300 transition-transform duration-300 group-hover:-translate-y-1"
              />

              <span className="mt-3 font-mono text-[10px] font-bold tracking-[.14em] text-slate-200">
                {title}
              </span>

              <span className="mt-2 font-mono text-[8px] text-slate-600">
                {number}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <p className="mt-1 font-mono text-[9px] tracking-[.12em] text-slate-600">
        SOURCE CODE → AUTOMATED CHECKS → CONTAINER → DEPLOYMENT
      </p>
    </div>
  );
}
