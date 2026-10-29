
import type { LucideIcon } from "lucide-react";
import {
  Code2,
  GitBranch,
  CheckCircle2,
  ShieldCheck,
  Container,
  Cloud,
  Activity,
} from "lucide-react";

export type PipelineStage = {
  number: string;
  title: string;
  icon: LucideIcon;
};

export type JourneyStage = {
  number: string;
  title: string;
  period: string;
  description: string;
  technologies: string[];
  status: string;
  icon: LucideIcon;
};

export const pipelineStages: PipelineStage[] = [
  { number: "01", title: "CODE", icon: Code2 },
  { number: "02", title: "GIT", icon: GitBranch },
  { number: "03", title: "CI / CD", icon: Activity },
  { number: "04", title: "TEST", icon: CheckCircle2 },
  { number: "05", title: "SECURITY", icon: ShieldCheck },
  { number: "06", title: "DOCKER", icon: Container },
  { number: "07", title: "CLOUD", icon: Cloud },
];

export const journeyStages: JourneyStage[] = [
  {
    number: "01",
    title: "Application Development",
    period: "FOUNDATION",
    description:
      "Building applications and understanding how frontend, backend services, APIs and databases work together.",
    technologies: ["React", "Next.js", "Node.js", "REST APIs", "MongoDB"],
    status: "PROJECT EXPERIENCE",
    icon: Code2,
  },
  {
    number: "02",
    title: "Version Control & CI/CD",
    period: "AUTOMATION",
    description:
      "Using Git and GitHub Actions to manage source code, automate builds and create repeatable delivery workflows.",
    technologies: ["Git", "GitHub", "GitHub Actions", "YAML"],
    status: "HANDS-ON",
    icon: GitBranch,
  },
  {
    number: "03",
    title: "Containers & Infrastructure",
    period: "DEPLOYMENT",
    description:
      "Packaging applications with Docker and deploying services on Linux servers with Nginx reverse proxy configuration.",
    technologies: ["Docker", "Docker Compose", "Linux", "Nginx"],
    status: "HANDS-ON",
    icon: Container,
  },
  {
    number: "04",
    title: "Cloud & Observability",
    period: "CONTINUOUS LEARNING",
    description:
      "Expanding cloud infrastructure knowledge while learning monitoring, metrics and orchestration for reliable deployments.",
    technologies: [
      "AWS EC2",
      "Cloudflare",
      "Prometheus",
      "Grafana",
      "Kubernetes",
    ],
    status: "LEARNING",
    icon: Cloud,
  },
];
