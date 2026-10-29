
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { DevOpsPipeline } from "@/components/diagrams/DevOpsPipeline";
import { JourneyTimeline } from "@/components/diagrams/JourneyTimeline";

const principles = [
  {
    title: "AUTOMATE",
    description:
      "Automate repetitive tasks to make builds and deployments consistent and repeatable.",
    icon: Workflow,
  },
  {
    title: "VERIFY",
    description:
      "Use tests and quality checks to identify issues before changes reach production.",
    icon: CheckCircle2,
  },
  {
    title: "SECURE",
    description:
      "Keep secrets outside source control and apply security practices throughout delivery.",
    icon: ShieldCheck,
  },
];

export function DevOpsJourney() {
  const reduced = useReducedMotion();

  return (
    <section
      id="journey"
      className="relative overflow-hidden border-y border-white/[0.06] py-20 sm:py-28"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_20%,rgba(34,211,238,0.045),transparent_40%),radial-gradient(ellipse_at_90%_75%,rgba(34,211,238,0.025),transparent_40%)]"
      />

      <div className="container relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <div className="flex items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
            <span>06</span>
            <span className="h-px w-10 bg-cyan-300/40" />
            <span>DevOps Journey</span>
          </div>

          <h2 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            From commit to{" "}
            <span className="text-cyan-300">cloud.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            The engineering mindset I want to demonstrate: automate the
            path from source code to a reproducible deployment.
          </p>
        </motion.div>

        {/* Pipeline diagram */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 sm:mt-16"
        >
          <DevOpsPipeline />
        </motion.div>

        {/* Journey timeline */}
        <div className="mt-16 sm:mt-20">
          <JourneyTimeline />
        </div>

        {/* Engineering principles */}
        <div className="mt-16 sm:mt-20">
          <div className="mb-7 flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.2em] text-cyan-300">
              ENGINEERING PRINCIPLES
            </span>
            <span className="h-px flex-1 bg-white/[0.07]" />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={reduced ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6 transition-colors duration-300 hover:border-cyan-300/20 hover:bg-white/[0.025] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-cyan-300">
                      {item.title}
                    </span>

                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-slate-600 transition-colors group-hover:text-cyan-300"
                    />
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/70" />
                    <span className="h-px w-8 bg-white/[0.08] transition-all group-hover:w-12 group-hover:bg-cyan-300/30" />

                    <ArrowRight
                      size={13}
                      className="ml-auto text-slate-700 transition-all group-hover:translate-x-1 group-hover:text-cyan-300"
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
