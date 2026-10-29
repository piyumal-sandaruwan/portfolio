
"use client";

import {
  ArrowUpRight,
  Braces,
  CheckCircle2,
  Compass,
  Layers3,
  Terminal,
} from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { focusAreas } from "@/data/portfolio";

const icons = [Layers3, Braces, Compass];

const principles = [
  "Hands-on learning",
  "Automation mindset",
  "Continuous improvement",
];

export function About() {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Subtle section background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-cyan-400/[0.04] blur-[100px]"
      />

      <div className="container relative">
        {/* Section heading */}
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="About me"
            title="Curious by nature. Systems-minded by design."
            description="I enjoy understanding how the pieces fit together — from application code and APIs to networks, infrastructure, and delivery pipelines."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
          {/* Main introduction card */}
          <Reveal>
            <div className="glass group relative h-full overflow-hidden rounded-3xl p-6 transition-colors duration-300 hover:border-cyan-300/20 sm:p-9">
              {/* Decorative corner accent */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 h-36 w-36 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_70%)]"
              />

              <div className="relative">
                {/* Card label */}
                <div className="mb-7 flex items-center justify-between gap-4">
                  <span className="font-mono text-[10px] tracking-[.2em] text-cyan-200">
                    / THE APPROACH
                  </span>

                  <Terminal
                    size={18}
                    strokeWidth={1.5}
                    className="text-slate-600 transition-colors group-hover:text-cyan-200"
                  />
                </div>

                <h3 className="max-w-md text-2xl font-bold leading-tight tracking-tight text-slate-100 sm:text-3xl">
                  Build it.
                  <span className="text-slate-500"> Understand it.</span>
                  <span className="block text-cyan-200">
                    Improve it.
                  </span>
                </h3>

                <p className="mt-6 text-sm leading-8 text-slate-400">
                  I&apos;m a BICT (Hons) undergraduate at the University
                  of Colombo with an interest in cloud engineering,
                  DevOps, networking, cybersecurity, and full-stack
                  development. I learn by building practical projects,
                  troubleshooting real issues, and improving systems
                  step by step.
                </p>

                {/* Working principles */}
                <div className="mt-8 border-t border-white/[0.08] pt-6">
                  <p className="mb-4 font-mono text-[9px] tracking-[.18em] text-slate-600">
                    WORKING PRINCIPLES
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {principles.map((principle) => (
                      <span
                        key={principle}
                        className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-2 text-[11px] text-slate-300 transition-colors hover:border-cyan-300/25 hover:bg-cyan-300/[0.04]"
                      >
                        <CheckCircle2
                          size={13}
                          className="text-cyan-300"
                        />
                        {principle}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom signature */}
                <div className="mt-8 flex items-center justify-between border-t border-white/[0.08] pt-5">
                  <span className="font-mono text-[9px] tracking-[.14em] text-slate-600">
                    LEARN / BUILD / ITERATE
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-slate-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-200"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Focus area cards */}
          <div className="grid content-start gap-4">
            {focusAreas.map((item, index) => {
              const Icon = icons[index] ?? Layers3;

              return (
                <Reveal key={item.number} delay={index * 0.08}>
                  <article className="glass group relative flex gap-4 overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.035] sm:p-6">
                    {/* Hover accent */}
                    <div
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-px w-0 bg-cyan-300/60 transition-all duration-500 group-hover:w-full"
                    />

                    <div className="icon-tile flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors group-hover:border-cyan-300/25 group-hover:text-cyan-200">
                      <Icon size={21} strokeWidth={1.6} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <span className="font-mono text-[9px] tracking-[.18em] text-slate-600">
                          {item.number} / FOCUS
                        </span>

                        <ArrowUpRight
                          size={14}
                          className="shrink-0 text-slate-700 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-200"
                        />
                      </div>

                      <h3 className="font-semibold tracking-tight text-slate-100 transition-colors group-hover:text-cyan-100">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {item.detail}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
