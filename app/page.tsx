
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects_section";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { Extracurricular } from "@/components/sections/extracurricular";
import { DevOpsJourney } from "@/components/sections/DevOpsJourney";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Extracurricular />
      <DevOpsJourney />
      <Contact />
    </main>
  );
}
