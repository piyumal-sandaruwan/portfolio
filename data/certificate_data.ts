
export type Certification = {
  number: string;
  title: string;
  issuer: string;
  description: string;
  category: string;
  year: string;
  image: string;
  href: string;
};

export const certifications: Certification[] = [
  {
    number: "01",
    title: "CLOUD FOUNDATIONS",
    issuer: "AWS Academy",
    description:
      "Fundamentals of cloud computing, AWS services and core cloud concepts.",
    category: "CLOUD",
    year: "2026",
    image: "/images/certifications/aws-cloud-foundations.png",
    href: "#",
  },
  {
    number: "02",
    title: "GETTING STARTED WITH LINUX FUNDAMENTALS",
    issuer: "Red Hat Academy",
    description:
      "An introduction to Linux fundamentals and essential Linux system concepts.",
    category: "LINUX",
    year: "2026",
    image: "/images/certifications/redhat-linux.png",
    href: "#",
  },
  {
    number: "03",
    title: "INTRODUCTION TO CYBERSECURITY",
    issuer: "Cisco Networking Academy",
    description:
      "Fundamentals of cybersecurity, common threats, security concepts and protection.",
    category: "CYBERSECURITY",
    year: "2026",
    image: "/images/certifications/cisco-cybersecurity.png",
    href: "#",
  },
  {
    number: "04",
    title: "FULL-STACK WEB DEVELOPMENT (MERN)",
    issuer: "SKYREK",
    description:
      "An online course covering full-stack web development using the MERN stack.",
    category: "FULL STACK",
    year: "2026",
    image: "/images/certifications/skyrek-mern.png",
    href: "#",
  },
  {
    number: "05",
    title: "EXPLORING NETWORKING WITH CISCO PACKET TRACER",
    issuer: "Cisco Networking Academy",
    description:
      "Networking concepts and practical network simulations using Cisco Packet Tracer.",
    category: "NETWORKING",
    year: "2026",
    image: "/images/certifications/cisco-packet-tracer.png",
    href: "#",
  },
  {
    number: "06",
    title: "NETWORKING BASICS",
    issuer: "Cisco Networking Academy",
    description:
      "Networking devices, protocols, connectivity and fundamental network communication.",
    category: "NETWORKING",
    year: "2026",
    image: "/images/certifications/cisco-networking-basics.png",
    href: "#",
  },
  {
    number: "07",
    title: "CRASH COURSE: DOCKER FOR ABSOLUTE BEGINNERS",
    issuer: "KodeKloud",
    description:
      "An introduction to Docker, containerization and essential container workflows.",
    category: "DEVOPS",
    year: "2026",
    image: "/images/certifications/kodekloud-docker-crash-course.png",
    href: "#",
  },
  {
    number: "08",
    title: "DOCKER TRAINING COURSE FOR THE ABSOLUTE BEGINNER",
    issuer: "KodeKloud",
    description:
      "Introductory Docker training covering containers and fundamental Docker concepts.",
    category: "DEVOPS",
    year: "2026",
    image: "/images/certifications/kodekloud-docker-training.png",
    href: "#",
  },
];
