
"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

import type { Certification } from "@/data/certificate_data";
import { Reveal } from "@/components/ui/reveal";

type CertificationCardProps = {
  item: Certification;
  index: number;
};

export function CertificationCard({
  item,
  index,
}: CertificationCardProps) {
  const [imageOpen, setImageOpen] = useState(false);

  return (
    <>
      <Reveal delay={index * 0.05}>
        <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.012] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.025] sm:p-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs tracking-[0.15em] text-cyan-300">
              {item.number}
            </span>

            <span className="font-mono text-[9px] tracking-[0.15em] text-slate-600">
              {item.year}
            </span>
          </div>

          {/* Certificate image */}
          <button
            type="button"
            onClick={() => setImageOpen(true)}
            aria-label={`Preview ${item.title} certificate`}
            className="mt-5 block w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#0b1018] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={item.image}
                alt={`${item.title} certificate`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </button>

          {/* Certificate details */}
          <div className="mt-6 flex flex-1 flex-col">
            <p className="font-mono text-[9px] tracking-[0.2em] text-cyan-300">
              / {item.category}
            </p>

            <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-slate-100">
              {item.title}
            </h3>

            <p className="mt-2 font-mono text-[11px] text-slate-500">
              {item.issuer}
            </p>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              {item.description}
            </p>

            {/* Footer */}
            <div className="mt-auto flex items-center gap-2 border-t border-white/[0.07] pt-5 mt-6">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />

              <span className="font-mono text-[9px] tracking-[0.16em] text-slate-600">
                CERTIFICATE
              </span>

              {item.href && item.href !== "#" ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.12em] text-slate-400 transition-colors hover:text-cyan-300"
                >
                  VIEW
                  <ArrowUpRight size={13} />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => setImageOpen(true)}
                  className="ml-auto inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.12em] text-slate-400 transition-colors hover:text-cyan-300"
                >
                  PREVIEW
                  <ArrowUpRight size={13} />
                </button>
              )}
            </div>
          </div>

          {/* Hover accent */}
          <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-cyan-300/60 transition-all duration-500 group-hover:w-full" />
        </article>
      </Reveal>

      {/* Image preview modal */}
      {imageOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} certificate preview`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setImageOpen(false)}
        >
          <button
            type="button"
            aria-label="Close certificate preview"
            onClick={() => setImageOpen(false)}
            className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-slate-300 transition-colors hover:border-cyan-300/40 hover:text-cyan-300"
          >
            <X size={20} />
          </button>

          <div
            className="w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative mx-auto h-[65vh] w-full sm:h-[75vh]">
              <Image
                src={item.image}
                alt={`${item.title} certificate enlarged`}
                fill
                sizes="95vw"
                className="object-contain"
              />
            </div>

            <p className="mt-4 text-center font-mono text-xs tracking-[0.16em] text-slate-400">
              {item.title} / {item.issuer}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
