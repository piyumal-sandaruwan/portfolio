
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ChevronDown,
  X,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import {
  activities,
  gallery,
} from "@/data/extracurricular";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type PreviewImage = {
  src: string;
  title: string;
};

export function Extracurricular() {
  const [showMore, setShowMore] = useState(false);
  const [preview, setPreview] = useState<PreviewImage | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!preview) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreview(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [preview]);

  const visibleGallery = gallery.slice(
    0,
    showMore ? gallery.length : 3,
  );

  return (
    <>
      <section
        id="extracurricular"
        className="section relative overflow-hidden border-y border-white/[0.06]"
      >
        {/* Background accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -left-40 top-24 h-80 w-80 rounded-full bg-cyan-300/[0.035] blur-[120px]" />

          <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-violet-500/[0.035] blur-[120px]" />
        </div>

        <div className="container relative">
          {/* Section heading */}
          <Reveal>
            <SectionHeading
              index="05"
              eyebrow="EXTRACURRICULAR ACTIVITIES"
              title="Beyond the classroom."
              description="Club involvement, editorial responsibilities, media work and creative contributions beyond my academic work."
            />
          </Reveal>

          {/* Editorial positions */}
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {activities.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.08}>
                <article className="group relative h-full overflow-hidden rounded-[22px] border border-white/[0.08] bg-white/[0.015] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.025] sm:p-7">
                  {/* Subtle accent */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute right-0 top-0 h-40 w-40 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.07),transparent_70%)]"
                  />

                  {/* Card header */}
                  <div className="relative flex items-start justify-between gap-4">
                    <span className="font-mono text-2xl tracking-tight text-cyan-300">
                      {item.number}
                    </span>

                    <span className="text-right font-mono text-[9px] leading-5 tracking-[0.16em] text-slate-500 sm:text-[10px]">
                      {item.category}
                    </span>
                  </div>

                  {/* Information and image */}
                  <div className="relative mt-6 grid gap-6 sm:grid-cols-[minmax(0,1fr)_180px] sm:items-center">
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 font-mono text-[11px] leading-5 text-cyan-300">
                        {item.organization}
                      </p>

                      <p className="mt-5 text-sm leading-7 text-slate-400">
                        {item.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setPreview({
                          src: item.image,
                          title: item.title,
                        })
                      }
                      aria-label={`Preview ${item.title} image`}
                      className="relative block w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#0b1018] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={item.image}
                          alt={`${item.title} — ${item.organization}`}
                          fill
                          sizes="(max-width: 640px) 100vw, 180px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </button>
                  </div>

                  {/* Bottom accent */}
                  <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-cyan-300/60 transition-all duration-500 group-hover:w-full" />
                </article>
              </Reveal>
            ))}
          </div>

          {/* Creative gallery */}
          <div className="mt-20">
            <Reveal>
              <div className="mb-8">
                <p className="font-mono text-[10px] tracking-[0.2em] text-cyan-300">
                  CREATIVE &amp; EVENT WORK
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Selected contributions.
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                  A collection of editorial, media, publication and
                  creative work from my university experience.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visibleGallery.map((item, index) => (
                <motion.article
                  key={`${item.title}-${index}`}
                  layout={!reducedMotion}
                  initial={
                    reducedMotion ? false : { opacity: 0, y: 16 }
                  }
                  whileInView={
                    reducedMotion
                      ? undefined
                      : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.35,
                    delay: reducedMotion ? 0 : index * 0.04,
                  }}
                  className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.015] transition-colors duration-300 hover:border-cyan-300/25"
                >
                  {/* Clickable image */}
                  <button
                    type="button"
                    onClick={() =>
                      setPreview({
                        src: item.image,
                        title: item.title,
                      })
                    }
                    aria-label={`Preview ${item.title}`}
                    className="relative block w-full overflow-hidden bg-[#0b1018] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070b]/70 via-transparent to-transparent" />

                      <span className="absolute left-4 top-4 rounded-md border border-white/10 bg-black/50 px-2.5 py-1.5 font-mono text-[9px] tracking-[0.15em] text-cyan-200 backdrop-blur-md">
                        {item.category}
                      </span>
                    </div>
                  </button>

                  {/* Gallery details */}
                  <div className="flex items-center justify-between gap-4 p-5">
                    <h4 className="text-sm font-medium leading-6 text-slate-200 transition-colors group-hover:text-cyan-100">
                      {item.title}
                    </h4>

                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-slate-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
                    />
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Show more / less */}
            {gallery.length > 3 && (
              <div className="mt-9 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowMore((value) => !value)}
                  aria-expanded={showMore}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/[0.09] bg-white/[0.02] px-5 py-3 font-mono text-[10px] tracking-[0.16em] text-slate-400 transition-colors hover:border-cyan-300/25 hover:text-cyan-200"
                >
                  {showMore ? "SHOW LESS" : "SHOW MORE"}

                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      showMore ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Image preview modal */}
      {preview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${preview.title} image preview`}
          onClick={() => setPreview(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
        >
          <button
            type="button"
            aria-label="Close image preview"
            onClick={() => setPreview(null)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white transition hover:border-cyan-300/30 hover:text-cyan-200 sm:right-6 sm:top-6"
          >
            <X size={20} />
          </button>

          <div
            className="w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative mx-auto h-[65vh] max-h-[760px] w-full">
              <Image
                src={preview.src}
                alt={preview.title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <p className="mt-4 text-center font-mono text-xs tracking-[0.16em] text-slate-400">
              {preview.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
