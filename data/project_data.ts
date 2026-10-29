
export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  href: string;
  image: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Student API",
    category: "BACKEND / DEVOPS",
    description:
      "A Spring Boot REST API built to practise backend development, containerization and CI/CD deployment.",
    stack: ["Java", "Spring Boot", "Maven", "MySQL", "Docker"],
    href: "YOUR_STUDENT_API_REPOSITORY_URL",
    image: "/images/projects/1.png",
  },
  {
    number: "02",
    title: "i-Computers",
    category: "FULL STACK / CLOUD",
    description:
      "A computer-related web application developed as a practical full-stack project.",
    stack: ["React", "Node.js", "MongoDB", "Docker"],
    href: "YOUR_I_COMPUTERS_REPOSITORY_URL",
    image: "/images/projects/2.png",
  },
  {
    number: "03",
    title: "Cloud Infrastructure",
    category: "CLOUD / NETWORKING",
    description:
      "An infrastructure project exploring domain routing, Cloudflare DNS, EC2 and Nginx reverse proxy configuration.",
    stack: ["AWS", "EC2", "Cloudflare", "Nginx", "Linux"],
    href: "YOUR_INFRASTRUCTURE_REPOSITORY_URL",
    image: "/images/projects/3.png",
  },
];
