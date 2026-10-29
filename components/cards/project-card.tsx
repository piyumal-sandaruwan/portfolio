
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, GitBranch, X } from "lucide-react";

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

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [imageOpen]);

  return (
    <>
      <motion.article
        initial={reducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.5,
          delay: index * 0.08,
        }}
        className="group relative flex min-h-[500px] flex-col overflow-hidden rounded-[26px] border border-white/[.09] bg-[#080a0e] transition-colors duration-300 hover:border-cyan-300/20"
      >
        {/* Clickable project image */}
        <button
          type="button"
          onClick={() => setImageOpen(true)}
          aria-label={`View ${project.title} image`}
          className="absolute inset-0 cursor-zoom-in"
        >
          <Image
            src={project.image}
            alt={`${project.title} project screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top opacity-70 transition-transform duration-700 group-hover:scale-[1.03] group-hover:opacity-85"
          />
        </button>

        {/* Readability overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050609]/10 via-[#050609]/55 to-[#050609]/[.98]"
        />

        {/* Card content */}
        <div className="pointer-events-none relative z-10 flex min-h-[500px] flex-1 flex-col p-6 sm:p-7">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-cyan-300">
              {project.number}
            </span>

            <GitBranch
              size={16}
              className="text-zinc-300/70 transition-colors group-hover:text-cyan-300"
            />
          </div>

          <div className="mt-auto pt-24">
            <p className="font-mono text-[9px] tracking-[.22em] text-cyan-200/80">
              {project.category}
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              {project.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-300">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/15 bg-black/35 px-3 py-1.5 font-mono text-[10px] text-zinc-200 backdrop-blur-sm"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
              <span className="font-mono text-[9px] tracking-[.16em] text-zinc-300">
                CLICK IMAGE TO PREVIEW
              </span>

              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="pointer-events-auto inline-flex items-center gap-2 font-mono text-[10px] tracking-[.12em] text-zinc-300 transition-colors hover:text-cyan-300"
              >
                REPOSITORY
                <ArrowUpRight size={14} />
              </a>
            </div>
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

            <p className="mt-4 font-mono text-[10px] tracking-[.2em] text-zinc-400">
              {project.number} / {project.title.toUpperCase()}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
