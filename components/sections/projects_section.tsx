
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/cards/project-card";
import { projects } from "@/data/project_data";

export function Projects() {
  return (
    <section
      id="projects"
      className="section relative overflow-hidden border-y border-white/[.06]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-400/[.02] to-transparent"
      />

      <div className="container relative">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="PROJECTS"
            title="Selected builds from the lab."
            description="Each project is an opportunity to understand a different layer of the engineering stack."
          />
        </Reveal>

        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
