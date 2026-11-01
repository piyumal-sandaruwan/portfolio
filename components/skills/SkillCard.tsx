
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { SkillGroup } from "@/data/skill-data";

type SkillCardProps = {
  group: SkillGroup;
};

export function SkillCard({ group }: SkillCardProps) {
  const isHandsOn = group.status === "HANDS-ON";

  return (
    <motion.article
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="
        group relative h-full overflow-hidden
        rounded-2xl border border-white/[0.10]
        bg-gradient-to-br from-[#101722] to-[#090d15]
        p-5 shadow-[0_8px_30px_rgba(0,0,0,0.15)]
        transition-all duration-300
        hover:border-cyan-300/30
        hover:shadow-[0_12px_40px_rgba(34,211,238,0.07)]
        sm:p-5
      "
    >
      {/* Hover glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-16 -top-16
          h-40 w-40 rounded-full bg-cyan-400/[0.07]
          blur-[65px] opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-[12px] font-bold uppercase tracking-[0.13em] text-zinc-100">
            {group.title}
          </h3>

          <span className="font-mono text-[10px] text-zinc-500">
            {group.number}
          </span>
        </div>

        {/* Description */}
        <p className="mt-2.5 max-w-md text-[12px] leading-5 text-slate-400">
          {group.description}
        </p>

        {/* Skills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {group.skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.035,
                }}
                className="
                  inline-flex items-center gap-1.5
                  rounded-lg border border-white/[0.10]
                  bg-white/[0.045]
                  px-2.5 py-1.5
                  font-mono text-[10px] font-medium
                  text-slate-300
                  transition-all duration-200
                  hover:border-cyan-300/35
                  hover:bg-cyan-300/[0.08]
                  hover:text-cyan-200
                "
              >
                {Icon && (
                  <Icon
                    size={12}
                    strokeWidth={1.8}
                    className="shrink-0 text-cyan-300/80"
                  />
                )}

                {skill.name}
              </motion.span>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-white/[0.08] pt-3">
          <div className="flex items-center gap-2">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isHandsOn ? "bg-cyan-300" : "bg-violet-400"
              }`}
            />

            <span
              className={`font-mono text-[9px] font-semibold tracking-[0.14em] ${
                isHandsOn ? "text-cyan-200" : "text-violet-300"
              }`}
            >
              {group.status}
            </span>
          </div>

          <div className="flex items-center gap-2 text-zinc-500 transition-colors group-hover:text-cyan-300">
            <span className="font-mono text-[9px]">
              {String(group.skills.length).padStart(2, "0")} SKILLS
            </span>
            <ArrowUpRight size={13} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
