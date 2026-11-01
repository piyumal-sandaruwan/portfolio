
"use client";

import { Terminal } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillCard } from "@/components/skills/SkillCard";
import { skillGroups } from "@/data/skill-data";

export function Skills() {
  return (
    <section
      id="skills"
      className="section relative overflow-hidden border-y border-white/[.06]"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-violet-500/[.035] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-cyan-400/[.025] blur-[110px]"
      />

      <div className="container relative">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="STACK"
            title="Tools I build with."
            description="A practical technology stack built through coursework, personal projects and hands-on development."
          />

          {/* Section metadata */}
          <div className="mt-6 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[.18em] text-zinc-500">
            <Terminal
              size={13}
              className="text-cyan-300"
              strokeWidth={1.5}
            />

            <span>Technical capabilities</span>

            <span className="h-px w-8 bg-cyan-300/20" />

            <span>
              {String(skillGroups.length).padStart(2, "0")} groups
            </span>
          </div>
        </Reveal>

        {/* Animated skill cards */}
        <div className="mt-9 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.number} delay={index * 0.07}>
              <SkillCard group={group} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
