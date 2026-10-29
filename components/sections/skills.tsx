
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
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-violet-500/[.025] blur-[120px]"
      />

      <div className="container relative">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Stack"
            title="Tools I build with."
            description="A practical technology stack built through coursework, personal projects and hands-on development."
          />

          <div className="mt-7 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[.2em] text-zinc-700">
            <Terminal
              size={13}
              className="text-cyan-300/70"
              strokeWidth={1.5}
            />
            <span>Technical capabilities</span>
            <span className="h-px w-10 bg-cyan-300/15" />
            <span>
              {String(skillGroups.length).padStart(2, "0")} groups
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.number} delay={index * 0.05}>
              <SkillCard group={group} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
