export type EducationEntry = {
  title: string;
  dateRange: string;
  institution: string;
  location: string;
  description: string;
};

export const educations: EducationEntry[] = [
  {
    title: "Bachelor of Information Systems",
    dateRange: "Sep 20 - Aug 24",
    institution: "Unika Atma Jaya",
    location: "BSD, Indonesia",
    description:
      "Information Systems graduate (GPA 3.84/4.00) specializing in software engineering and winner of Microsoft ASEAN AI for Accessibility Hackathon 2024.",
  },
  {
    title: "Mobile Development Cohort",
    dateRange: "Feb 23 - Jul 23",
    institution: "Bangkit Academy by Google, GoTo, and Traveloka",
    location: "Indonesia (Remote)",
    description:
      "Completed Android development training using Kotlin and collaborated on mobile projects using Firebase and Google Cloud.",
  },
];
