
"use client";

import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const learningTopics = [
  "Kubernetes",
  "Terraform",
  "Ansible",
  "Cloud Infrastructure",
];

export function About() {
  return (
    <section
      id="about"
      className="section relative overflow-hidden"
    >
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

        {/* Balanced two-column layout */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">

          {/* LEFT: Mindset and current focus */}
          <Reveal>
            <div className="flex h-full flex-col">
              <div>
                <p className="mb-5 font-mono text-[10px] tracking-[0.2em] text-cyan-300">
                  / MY APPROACH
                </p>

                <h3 className="max-w-md text-3xl font-semibold leading-tight tracking-tight text-slate-100 sm:text-4xl">
                  Build. Automate.
                  <span className="block text-slate-400">
                    Learn. Deploy.
                  </span>
                </h3>

                <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                  My learning style is practical: build a system,
                  understand how it works, automate the repetitive
                  parts, and keep improving.
                </p>
              </div>

              {/* Engineering mindset */}
              <div className="mt-8 flex items-center gap-3 font-mono text-[9px] tracking-[0.17em] text-slate-500">
                <span className="text-cyan-300">&gt;_</span>
                <span>ENGINEERING MINDSET</span>
                <span className="h-px flex-1 bg-white/10" />
                <span>01 / 04</span>
              </div>

              {/* Current focus */}
              <div className="mt-10 flex-1 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between gap-4">
                  <h4 className="font-mono text-[10px] tracking-[0.18em] text-slate-500">
                    CURRENT FOCUS
                  </h4>

                  <span className="flex items-center gap-2 font-mono text-[9px] tracking-wider text-cyan-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    LEARNING
                  </span>
                </div>

                <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400">
                  Developing practical skills in DevOps, cloud
                  infrastructure, container orchestration and
                  infrastructure automation.
                </p>
              </div>
            </div>
          </Reveal>

          {/* RIGHT: Background and learning roadmap */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col">
              <div>
                <p className="mb-5 font-mono text-[10px] tracking-[0.2em] text-cyan-300">
                  / BACKGROUND
                </p>

                <p className="text-xl leading-relaxed tracking-tight text-slate-200 sm:text-2xl">
                  I&apos;m a BICT (Hons) undergraduate at the
                  University of Colombo, building a career around{" "}
                  <span className="text-cyan-300">
                    DevOps, cloud, networking and full-stack
                    engineering.
                  </span>
                </p>

                <p className="mt-6 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                  My projects have given me experience across
                  application development, deployment and
                  infrastructure. I enjoy understanding what happens
                  beyond the application itself — from source code
                  and containers to networks, servers and production
                  environments.
                </p>
              </div>

              {/* Learning topics */}
              <div className="mt-10 flex-1 border-t border-white/10 pt-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h4 className="font-mono text-[10px] tracking-[0.18em] text-cyan-300">
                    CURRENTLY LEARNING
                  </h4>

                  <span className="h-px w-8 bg-cyan-300/25" />

                  <span className="font-mono text-[10px] text-slate-600">
                    2026
                  </span>
                </div>

                <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {learningTopics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <span className="text-cyan-400">/</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Career goal */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex items-start gap-3">
                  <ArrowUpRight
                    size={18}
                    className="mt-1 shrink-0 text-cyan-300"
                  />

                  <p className="text-sm leading-7 text-slate-400">
                    My goal is to grow from building applications
                    into designing, automating and operating
                    reliable systems.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
