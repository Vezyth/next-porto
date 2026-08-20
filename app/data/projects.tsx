export type Project = {
  id: string;
  slug: string;
  title: string;
  image: string;
  year: string;
  role: string;
  description: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
};

export const projects = [
  {
    id: "rbac",
    slug: "dynamic-role-based-access-control",
    title: "Dynamic Role-Based Access Control",
    image: "/projects/RBAC.png",
    year: "2026",
    role: "Web Developer",
    description:
      "Designed and implemented a dynamic role-based access control architecture using reusable navigation components and database-driven permissions.",
    technologies: ["Laravel", "MySQL"],
    github: "",
    liveDemo: "https://rbac.vezyth.me",
  },
  {
  id: "hrms",
  slug: "hrms",
  title: "Human Resource Management System",
  image: "/projects/hrms.jpeg",
  year: "2025",
  role: "Fullstack Web Developer",
  description:
    "Developed and maintained an enterprise HRMS used for employee management, attendance, leave requests, payroll, and role-based access control.",
  technologies: [
    "Laravel",
    "PHP",
    "MySQL",
    "Bootstrap",
    "jQuery",
  ],
  github: "",
  liveDemo: "",
},
  {
    id: "bethany",
    slug: "bethany-lampung",
    title: "Bethany Lampung",
    image: "/projects/bethany-app.png",
    year: "2026",
    role: "Flutter Developer",
    description:
      "A mobile application that digitizes church administrative services, event schedules, and communication between management and members.",
    technologies: ["Flutter"],
    github: "https://github.com/Vezyth/BethanyApp",
    liveDemo: "",
  },
  {
    id: "suara-tangan",
    slug: "suara-tangan",
    title: "Suara Tangan",
    image: "/projects/suara-tangan.png",
    year: "2024",
    role: "Technical Lead",
    description:
      "An AI accessibility concept that translates sign language into natural speech using deep learning for gesture recognition.",
    technologies: ["Deep Learning", "AI", "Accessibility"],
    github: "",
    liveDemo: "",
  },
  {
    id: "mylips",
    slug: "mylips",
    title: "MyLips",
    image: "/projects/mylips.png",
    year: "2023",
    role: "Mobile Developer",
    description:
      "A Bangkit Academy capstone application that recommends lipstick colors based on facial analysis and skin tone.",
    technologies: [
      "Kotlin",
      "Android Studio",
      "Machine Learning",
    ],
    github: "",
    liveDemo: "",
  },
];