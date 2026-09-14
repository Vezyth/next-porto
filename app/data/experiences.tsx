export type ExperienceEntry = {
  title: string;
  dateRange: string;
  company: string;
  location: string;
  description: string;
};

export const experiences: ExperienceEntry[] = [
  {
    title: "Web Developer",
    dateRange: "April 25 - April 2026",
    company: "PKF Hadinata",
    location: "Jakarta",
    description:
      "Developed and maintained internal HRIS and accounting systems using Laravel and MySQL. Collaborated with stakeholders to build features, improve system performance, and support business operations.",
  },
  {
    title: "IT Audit",
    dateRange: "Nov 25 - Feb 26",
    company: "PKF Hadinata",
    location: "Jakarta",
    description:
      "Supported IT audits for Perum Peruri, Perum DAMRI, and PT Surveyor Indonesia through ITGC testing, application control reviews, and audit documentation.",
  },
  {
    title: "Freelance Web Developer",
    dateRange: "Nov 24 - Apr 25",
    company: "Aridas Karya Satria",
    location: "Remote",
    description:
      "Developed a client-facing HRMS platform using Laravel, delivering employee management, attendance tracking, and role-based access features based on evolving business requirements.",
  },
];
