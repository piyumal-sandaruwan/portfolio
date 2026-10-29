
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { CertificationCard } from "@/components/cards/certification-card";
import { certifications } from "@/data/certificate_data";

export function Certifications() {
  return (
    <section
      id="certifications"
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
            index="04"
            eyebrow="CERTIFICATIONS"
            title="Certifications & achievements."
            description="A record of technical learning across cloud computing, Linux, cybersecurity, networking and containerization."
          />
        </Reveal>

        {/* Section metadata */}
        <Reveal>
          <div className="mt-8 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
            <span className="text-cyan-300">&gt;_</span>
            <span>Learning milestones</span>
            <span className="h-px w-8 bg-cyan-300/20" />
            <span>
              {String(certifications.length).padStart(2, "0")} certificates
            </span>
          </div>
        </Reveal>

        {/* Certificate grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((item, index) => (
            <CertificationCard
              key={item.number}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
