
"use client";

import { ArrowUpRight } from "lucide-react";
import type { SkillGroup } from "@/data/skill-data";

type SkillCardProps = {
  group: SkillGroup;
};

export function SkillCard({ group }: SkillCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[20px] border border-white/[.08] bg-white/[.012] p-6 transition-colors duration-300 hover:border-cyan-300/20 hover:bg-white/[.025] sm:p-7">
      {/* Heading */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-mono text-[10px] font-semibold uppercase tracking-[.2em] text-cyan-300 sm:text-[11px]">
          {group.title}
        </h3>

        <div className="flex shrink-0 items-center gap-2">
          <span className="h-px w-8 bg-cyan-300/15 transition-colors group-hover:bg-cyan-300/40" />
          <span className="font-mono text-[9px] text-zinc-700">
            {group.number}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-5 text-sm leading-7 text-zinc-500">
        {group.description}
      </p>

      {/* Skills with icons */}
      <div className="mt-6 flex flex-wrap gap-2">
        {group.skills.map(({ name, icon: Icon }) => (
          <span
            key={name}
            className="inline-flex items-center gap-2 rounded-lg border border-white/[.08] bg-white/[.02] px-3 py-2 font-mono text-[10px] text-zinc-500 transition-colors hover:border-cyan-300/20 hover:text-zinc-300"
          >
            {Icon && (
              <Icon
                size={14}
                strokeWidth={1.7}
                className="shrink-0"
                aria-hidden="true"
              />
            )}
            {name}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-center gap-2 pt-7">
        <span className="h-1 w-1 rounded-full bg-cyan-400/70" />
        <span className="h-px w-8 bg-white/[.07] transition-all group-hover:w-12 group-hover:bg-cyan-300/25" />

        <span className="font-mono text-[8px] uppercase tracking-[.2em] text-zinc-700">
          {group.status}
        </span>

        <ArrowUpRight
          size={13}
          className="ml-auto text-zinc-700 transition-colors group-hover:text-cyan-300"
        />
      </div>

      {/* Bottom hover accent */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px w-0 bg-cyan-300/40 transition-all duration-500 group-hover:w-full"
      />
    </article>
  );
}
