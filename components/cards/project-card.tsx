
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, GitBranch, X, ZoomIn } from "lucide-react";

import type { Project } from "@/data/project_data";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [imageOpen, setImageOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!imageOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setImageOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [imageOpen]);

  return (
    <>
      <motion.article
        initial={reducedMotion ? false : { opacity: 0, y: 25 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.55,
          delay: index * 0.08,
        }}
        className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#080b10] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/25"
      >
        {/* Project image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.07] bg-[#0c111a]">
          <button
            type="button"
            onClick={() => setImageOpen(true)}
            aria-label={`Preview ${project.title} project image`}
            className="absolute inset-0 z-10 flex cursor-zoom-in items-center justify-center"
          >
            <Image
              src={project.image}
              alt={`${project.title} project screenshot`}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
            />

            {/* Image hover overlay */}
            <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
              <span className="flex h-11 w-11 scale-90 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                <ZoomIn size={19} />
              </span>
            </span>
          </button>

          {/* Project number */}
          <span className="pointer-events-none absolute left-4 top-4 z-20 rounded-md border border-white/10 bg-black/60 px-3 py-1.5 font-mono text-[10px] text-cyan-200 backdrop-blur-md">
            {project.number}
          </span>

          <span className="pointer-events-none absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-black/50 text-white/70 backdrop-blur-md">
            <GitBranch size={15} />
          </span>
        </div>

        {/* Project content */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          {/* Category */}
          <p className="font-mono text-[9px] font-semibold tracking-[0.2em] text-cyan-300">
            {project.category}
          </p>

          {/* Title */}
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-100 sm:text-2xl">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm leading-7 text-slate-400">
            {project.description}
          </p>

          {/* Technology badges */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 font-mono text-[10px] text-slate-400 transition-colors duration-200 hover:border-cyan-300/25 hover:text-cyan-200"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/[0.07] pt-5 mt-7">
            <button
              type="button"
              onClick={() => setImageOpen(true)}
              className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.13em] text-slate-500 transition-colors hover:text-cyan-300"
            >
              <ZoomIn size={13} />
              PREVIEW IMAGE
            </button>

            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.12em] text-slate-300 transition-colors hover:text-cyan-300"
            >
              REPOSITORY
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </motion.article>

      {/* Full-screen image preview */}
      {imageOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} image preview`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setImageOpen(false)}
        >
          <button
            type="button"
            onClick={() => setImageOpen(false)}
            aria-label="Close image preview"
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-zinc-900 text-white transition-colors hover:border-cyan-300/40 hover:text-cyan-300"
          >
            <X size={21} />
          </button>

          <div
            className="relative flex max-h-[90vh] max-w-[95vw] flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={project.image}
              alt={`${project.title} full-size screenshot`}
              width={1800}
              height={1200}
              sizes="95vw"
              className="max-h-[82vh] w-auto max-w-full rounded-lg object-contain"
            />

            <p className="mt-4 font-mono text-[10px] tracking-[0.2em] text-zinc-400">
              {project.number} / {project.title.toUpperCase()}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
