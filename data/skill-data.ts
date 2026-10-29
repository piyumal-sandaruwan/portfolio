
import {
  Atom,
  Activity,
  Globe,
  FileCode2,
  Code2,
  Server,
  Database,
  Coffee,
  Layers,
  Smartphone,
  Flame,
  Container,
  GitBranch,
  Cloud,
  Terminal,
  Network,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Skill = {
  name: string;
  icon?: LucideIcon;
};

export type SkillGroup = {
  number: string;
  title: string;
  description: string;
  status: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    number: "01",
    title: "Full Stack Development",
    description:
      "Building web applications with React, Next.js and the MERN stack through academic and personal projects.",
    status: "HANDS-ON",
    skills: [
      { name: "React", icon: Atom },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: FileCode2 },
      { name: "JavaScript", icon: Code2 },
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Workflow },
      { name: "MongoDB", icon: Database },
      { name: "Tailwind CSS", icon: Layers },
    ],
  },
  {
    number: "02",
    title: "Java & Backend",
    description:
      "Working with Java backend development, object-oriented programming and REST API fundamentals.",
    status: "HANDS-ON",
    skills: [
      { name: "Java", icon: Coffee },
      { name: "Spring Boot", icon: Layers },
      { name: "Maven", icon: Terminal },
      { name: "REST APIs", icon: Globe },
      { name: "MySQL", icon: Database },
      { name: "OOP", icon: Code2 },
    ],
  },
  {
    number: "03",
    title: "Android Development",
    description:
      "Building Android applications with Java and Firebase-based services through mobile development projects.",
    status: "HANDS-ON",
    skills: [
      { name: "Android", icon: Smartphone },
      { name: "Java", icon: Coffee },
      { name: "Firebase", icon: Flame },
      { name: "Firestore", icon: Database },
      { name: "REST APIs", icon: Globe },
    ],
  },
  {
    number: "04",
    title: "DevOps & Cloud",
    description:
      "Working with containerization, CI/CD pipelines, Linux servers, reverse proxies and cloud platforms.",
    status: "HANDS-ON",
    skills: [
      { name: "Docker", icon: Container },
      { name: "Docker Compose", icon: Container },
      { name: "GitHub Actions", icon: GitBranch },
      { name: "Jenkins", icon: Workflow },
      { name: "AWS", icon: Cloud },
      { name: "Azure", icon: Cloud },
      { name: "Linux", icon: Terminal },
      { name: "Nginx", icon: Server },
    ],
  },
  {
    number: "05",
    title: "Networks & Security",
    description:
      "Exploring networking fundamentals, connectivity, Linux systems and practical security concepts.",
    status: "LEARNING",
    skills: [
      { name: "Networking", icon: Network },
      { name: "TCP/IP", icon: Network },
      { name: "Nmap", icon: ShieldCheck },
      { name: "Linux", icon: Terminal },
    ],
  },
  {
    number: "06",
    title: "Infrastructure & Automation",
    description:
      "Learning infrastructure automation, container orchestration, configuration management and monitoring.",
    status: "LEARNING",
    skills: [
      { name: "Kubernetes", icon: Layers },
      { name: "Terraform", icon: Workflow },
      { name: "Ansible", icon: Terminal },
      { name: "Prometheus", icon: Activity },
    ],
  },
];
