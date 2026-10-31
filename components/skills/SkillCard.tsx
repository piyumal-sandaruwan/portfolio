"use client";

import type { SkillGroup } from "@/data/skill-data";

type SkillCardProps = {
  group: SkillGroup;
};

export function SkillCard({ group }: SkillCardProps) {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-[#090c12]/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-[#0c1119] sm:p-6">
      {/* Subtle hover accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/[0.035] blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative">
        {/* Card Header */}
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-200">
            {group.title}
          </h3>

          <span className="font-mono text-[10px] text-zinc-700">
            {group.number}
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 max-w-2xl text-[13px] leading-6 text-zinc-500">
          {group.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {group.skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <span
                key={skill.name}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 font-mono text-[10px] text-zinc-400 transition-colors duration-200 hover:border-cyan-300/25 hover:bg-cyan-300/[0.04] hover:text-cyan-200"
              >
                {Icon && (
                  <Icon
                    size={12}
                    strokeWidth={1.5}
                    className="shrink-0 text-zinc-500"
                  />
                )}

                {skill.name}
              </span>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center gap-2 border-t border-white/[0.06] pt-3">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              group.status === "HANDS-ON"
                ? "bg-cyan-300"
                : "bg-violet-400"
            }`}
          />

          <span className="font-mono text-[9px] tracking-[0.16em] text-zinc-600">
            {group.status}
          </span>

          <span className="ml-auto h-px w-8 bg-white/[0.07]" />

          <span className="font-mono text-[9px] text-zinc-700">
            {String(group.skills.length).padStart(2, "0")} SKILLS
          </span>
        </div>
      </div>
    </article>
  );
}