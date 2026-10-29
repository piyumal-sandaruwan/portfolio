
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Github,
  Gitlab,
  Linkedin,
} from "lucide-react";

type HeroContentProps = {
  reduced?: boolean;
};

const technologies = [
  "NEXT.JS",
  "DOCKER",
  "JENKINS",
  "AWS",
  "SONARQUBE",
  "AZURE",
  "LINUX",
  "MERN",
];

const stats = [
  { value: "03+", label: "YEARS LEARNING" },
  { value: "08+", label: "PROJECTS" },
  { value: "06+", label: "CORE TOOLS" },
];

const socials = [
  {
    label: "GITLAB",
    href: "https://gitlab.com/",
    Icon: Gitlab,
  },
  {
    label: "GITHUB",
    href: "https://github.com/",
    Icon: Github,
  },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/",
    Icon: Linkedin,
  },
];

export function HeroContent({ reduced = false }: HeroContentProps) {
  const systemReduced = useReducedMotion();
  const noMotion = reduced || !!systemReduced;

  return (
    <div className="relative z-10 w-full">
      {/* Intro badge */}
      

      <p className=" font-mono text-sm text-slate-400">
        Hello, world. I&apos;m
      </p>

      {/* Keep your existing name and gradient */}
      <motion.h1
        initial={noMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-5xl font-black leading-[.98] tracking-[-.065em] sm:text-7xl xl:text-[3.4rem]"
      >
        Piyumal
       
      </motion.h1>
      <span className="gradient text-5xl font-black leading-[.98] tracking-[-.065em] sm:text-7xl xl:text-[5.4rem]">Sandaruwan.</span>

      {/* Role keywords */}
      <motion.div
        initial={noMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] font-bold tracking-[.16em] text-slate-200 sm:text-xs"
      >
        <span className="text-emerald-300">→</span>
        <span>DEVOPS</span>
        <span className="text-slate-600">/</span>
        <span>CLOUD</span>
        <span className="text-slate-600">/</span>
        <span>NETWORKING</span>
        <span className="text-slate-600">/</span>
        <span>FULL STACK</span>
      </motion.div>

      {/* Description */}
      {/* <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
        ICT undergraduate focused on building applications, automating
        CI/CD pipelines and deploying cloud-ready systems.
      </p> */}

      {/* Terminal profile card */}
      <motion.div
        initial={noMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-7 overflow-hidden rounded-2xl border border-white/[.10] bg-[#080b10]/90"
      >
        {/* Terminal title bar */}
        <div className="flex items-center justify-between border-b border-white/[.08] px-4 py-3 sm:px-5">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-zinc-700" />
            <span className="h-3 w-3 rounded-full bg-zinc-700" />
            <span className="h-3 w-3 rounded-full bg-zinc-700" />
          </div>

          <span className="font-mono text-[9px] tracking-[.2em] text-slate-600">
            profile.sh
          </span>

          <span className="font-mono text-[9px] font-bold text-emerald-400">
            RUNNING
          </span>
        </div>

        {/* Terminal content */}
        <div className="space-y-3 px-4 py-5 font-mono text-xs sm:px-5 sm:text-[13px]">
          <p className="mb-5 text-slate-300">
            <span className="font-bold text-slate-100">
              piyumal@portfolio
            </span>
            <span className="text-slate-600">:~ $ </span>
            <span>cat profile.txt</span>
          </p>

          <p>
            <span className="text-slate-600">role: </span>
            <span className="text-slate-300">ICT Undergraduate</span>
          </p>

          <p>
            <span className="text-slate-600">focus: </span>
            <span className="text-slate-300">DevOps / Cloud</span>
          </p>

          <p>
            <span className="text-slate-600">environment: </span>
            <span className="text-slate-300">Linux</span>
          </p>

          <p>
            <span className="text-slate-600">status: </span>
            <span className="text-emerald-400">
              open_to_internships
            </span>
          </p>
        </div>
      </motion.div>

      {/* Main action and social links */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="button primary inline-flex items-center gap-2"
        >
          VIEW PROJECTS <ArrowDown size={15} />
        </a>

        {socials.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            // className="button secondary inline-flex items-center gap-2 font-mono text-[10px] tracking-[.12em]"
            className="button secondary !px-3 !py-2 inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[.08em]"
          >
            <Icon size={12} />
            {label}
            <ArrowUpRight size={13} />
          </a>
        ))}
      </div>

      {/* Technology chips */}
      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded border border-white/[.10] bg-white/[.02] px-2.5 py-1 font-mono text-[9px] tracking-[.12em] text-slate-500 transition-colors hover:border-cyan-300/30 hover:text-cyan-200"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Stats */}
      {/* <div className="mt-7 flex flex-wrap gap-x-9 gap-y-5 border-t border-white/[.08] pt-5">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <p className="text-2xl font-black tracking-tight text-slate-100">
              {value}
            </p>
            <p className="mt-1 font-mono text-[8px] tracking-[.17em] text-slate-600">
              {label}
            </p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
