
export type ExtracurricularActivity = {
  number: string;
  title: string;
  organization: string;
  category: string;
  description: string;
  image: string;
};

export type ExtracurricularGalleryItem = {
  title: string;
  category: string;
  image: string;
};

export const activities: ExtracurricularActivity[] = [
  {
    number: "01",
    title: "SENIOR EDITOR",
    organization: "Arts Club · Faculty of Technology",
    category: "EDITORIAL / DESIGN",
    description:
      "Served as a Senior Editor of the Arts Club, contributing to editorial activities, publication work, creative content and student media initiatives.",
    image: "/images/extracurricular/arts-club.jpg",
  },
  {
    number: "02",
    title: "EDITOR",
    organization: "Technomedia · Faculty of Technology",
    category: "MEDIA / COMMUNICATION",
    description:
      "Contributed as an Editor to Technomedia through creative content development, visual communication and publication activities.",
    image: "/images/extracurricular/technomedia.jpeg",
  },
  {
  number: "03",
  title: "ICT DEPARTMENT REPRESENTATIVE",
  organization: "Department of Information and Communication Technology · UoC FoT",
  category: "STUDENT LEADERSHIP",
  description:
    "Serving as an ICT Department Representative at the University of Colombo, Faculty of Technology, contributing to student coordination, communication and departmental activities.",
  image: "/images/extracurricular/rep.jpeg",
}
];

export const gallery: ExtracurricularGalleryItem[] = [
  {
    title: "Arts Club Committee",
    category: "CLUB ACTIVITIES",
    image: "/images/extracurricular/arts-club-committee.jpg",
  },
  {
    title: "Magazine Editors",
    category: "EDITORIAL / TEAM",
    image: "/images/extracurricular/magazine-editors.jpg",
  },
  {
    title: "Certificate Award",
    category: "ACHIEVEMENTS",
    image: "/images/extracurricular/certificate-award.jpg",
  },
];
