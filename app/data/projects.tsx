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
  
  // Case study sections
  problem?: string;
  solution?: string[];
  impact?: string;
};

export const projects: Project[] = [
  {
    id: "Alarm Tanggal Merah",
    slug: "alarm-tanggal-merah",
    title: "Alarm Tanggal Merah",
    image: "/projects/alarm-tanggal-merah.png", 
    year: "2026",
    role: "Mobile Developer",
    description:
      "A smart Flutter alarm application that integrates with Google Calendar to automatically skip waking you up on Indonesian national holidays and mass leave days.",
    technologies: ["Flutter", "Dart", "Google Calendar API"],
    github: "https://github.com/Vezyth/alarm_app",
    liveDemo: "",
    problem:
      "Standard mobile alarms follow rigid weekly schedules and do not account for public holidays. This meant my work alarm would constantly wake me up on 'Libur Nasional' (National Holidays) or 'Cuti Bersama' (Mass Leave), ruining my chance to sleep in on a well-deserved day off unless I remembered to manually turn it off the night before.",
    solution: [
      "Developed a custom alarm application using Flutter that automatically checks the current date against the Indonesian public holiday calendar.",
      "Integrated the Google Calendar API to dynamically fetch and verify holiday data before allowing the alarm to trigger.",
      "Built a granular toggle system for 'Cuti Bersama', allowing users whose companies do not observe mass leave to skip alarms exclusively on official national holidays."
    ],
    impact:
      "Completely eliminated the frustration of accidental holiday wake-ups, automating my sleep schedule so I can seamlessly rest on days off without constantly toggling alarms."
  },
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
    problem:
      "The original internal application relied heavily on top-level middleware, leaving many endpoints without granular validation and exposing routes directly via URL. Furthermore, maintainability was severely hindered: each role utilized its own dedicated Blade navbar file. Managing ~20 distinct roles meant every menu change required repetitive, manual updates across 20 separate files.",
    solution: [
      "Engineered a database-driven permission architecture utilizing dedicated `menu` and `menu_permission` tables to centrally define access rules.",
      "Refactored 20 static Blade navigation files into a single, reusable component with dynamic menu rendering based on user roles.",
      "Prevented unauthorized direct-route access by tying menu-level permissions directly into application authorization gates."
    ],
    impact:
      "Drastically simplified navigation management, improved security enforcement across endpoints, and reduced boilerplate template code."
  },
  {
  id: "hrms",
  slug: "hrms",
  title: "Human Resource Management System",
  image: "/projects/hrms.jpeg",
  year: "2025",
  role: "Fullstack Web Developer",
  description:
    "Developed and maintained an HRMS web application for managing employee information, attendance, leave requests, and role-based workflows.",
  technologies: [
    "Laravel",
    "PHP",
    "MySQL",
    "Bootstrap",
    "jQuery",
  ],
  github: "",
  liveDemo: "",

  problem:
    "The organization needed a centralized system to manage employee information and day-to-day HR processes. Attendance records, including employee check-in times and lateness, required automated handling, while different users needed appropriate access to employee data and HR workflows. Manual handling of these processes could make tracking employee status and attendance less consistent and increase administrative effort.",

  solution: [
    "Developed and maintained Laravel-based modules for employee management, providing a centralized interface for managing employee information.",
    "Implemented attendance handling with automated lateness detection based on employee check-in times.",
    "Built role-based workflows that allowed authorized users to update and manage employee statuses according to their responsibilities.",
    "Worked with stakeholders to clarify requirements, validate application behavior, and refine features based on operational needs.",
    "Used Jira with a Kanban workflow to organize development tasks, track progress, and manage feature changes."
  ],

  impact:
    "Centralized key HR processes into a single web application, reduced manual effort in monitoring attendance and employee status, and provided a more structured workflow for managing employee information and HR operations."
},
  {
    id: "bethany",
    slug: "bethany-lampung",
    title: "Bethany Lampung",
    image: "/projects/bethany-app.png",
    year: "2026",
    role: "Flutter Developer",
    description:
      "A mobile application developed as a final year project to digitize church administrative services, event schedules, and member communication.",
    technologies: ["Flutter", "Dart"], // Added Dart as it usually goes with Flutter
    github: "https://github.com/Vezyth/BethanyApp",
    liveDemo: "",
    problem:
      "Church data, including baptism records, marriage registrations, and member profiles, was managed entirely manually through physical books. Furthermore, announcements and activities were distributed via printed newsletters and verbal updates, resulting in inefficient information distribution and a high risk of data loss.",
    solution: [
      "Developed a centralized mobile application to digitize and consolidate church information, event schedules, and administrative services into a single accessible platform.",
      "Replaced physical record-keeping with digital forms for critical administrative tasks like baptism and marriage registrations.",
      "Transitioned printed newsletters and verbal announcements to a digital format, ensuring reliable and instant information delivery to members."
    ],
    impact:
      "Modernized church operations, eliminated the risk of physical data loss, and significantly improved the accessibility of administrative services for members."
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
    technologies: ["Deep Learning", "AI", "Accessibility", "Mobile Integration"],
    github: "",
    liveDemo: "",
    problem:
      "Deaf individuals often face significant barriers communicating with people who do not understand sign language. A major technical challenge is that sign language often follows completely different grammatical structures than spoken language, making direct word-for-word translation sound unnatural or confusing.",
    solution: [
      "Directed the technical architecture, proposing a deep learning-powered gesture recognition system to accurately identify and translate sign language into text.",
      "Designed a processing pipeline to reorganize the translated output into natural sentence patterns before executing text-to-speech conversion.",
      "Defined the system's integration strategy, mapping out how the AI models would operate seamlessly within a mobile application environment."
    ],
    impact:
      "Won 1st place in Indonesia at the Microsoft ASEAN AI for Accessibility Hackathon 2024, presenting a highly viable concept for bridging the communication gap between deaf and non-deaf individuals."
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
      "Cloud Infrastructure"
    ],
    github: "",
    liveDemo: "",
    problem:
      "Finding the right lipstick shade that matches individual skin tones and facial features is often a guessing game, making cosmetic selection difficult and impersonal for many users.",
    solution: [
      "Developed the Android application using Kotlin, building out core features and ensuring a smooth, intuitive user interface.",
      "Collaborated in a cross-functional team spanning Mobile Development, Cloud Computing, and Machine Learning to build a complete end-to-end solution.",
      "Integrated backend cloud infrastructure and machine learning facial analysis models directly into the mobile experience to generate accurate color recommendations."
    ],
    impact:
      "Successfully delivered a comprehensive capstone project for Bangkit Academy 2023, providing users with a highly personalized and convenient tool for cosmetic selection."
  },
];
