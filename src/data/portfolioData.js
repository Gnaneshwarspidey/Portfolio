export const PERSONAL_INFO = {
  name: "Keshgir Gnaneshwar",
  title: "AI/ML Engineer & Full-Stack Developer",
  roleSubtitle: "Final-Year B.E. Student – Artificial Intelligence & Machine Learning",
  positioning: "AI/ML Engineer | Python Developer | Full-Stack Developer | Data & Automation Enthusiast",
  headline: "Building practical AI-powered, data-driven, and full-stack applications with Python, Machine Learning, modern web technologies, and automation.",
  email: "kesgirgnaneshwar025@gmail.com",
  phone: "9381271079",
  linkedin: "https://www.linkedin.com/in/keshgir-gnaneshwar",
  github: "https://github.com/Gnaneshwarspidey",
  location: "India",
  status: "Available for Software Engineering & AI/ML Roles"
};

export const ABOUT_TEXT = {
  intro: "I am a final-year B.E. student specializing in Artificial Intelligence and Machine Learning with a focus on building practical, production-ready software solutions. My work bridges intelligent algorithmic systems with clean, robust full-stack architectures.",
  capabilities: [
    {
      title: "AI & Machine Learning",
      description: "Developing practical machine learning workflows, natural language processing routines, and data models to extract intelligence and solve applied problems."
    },
    {
      title: "Full-Stack Development",
      description: "Architecting interactive user interfaces with React and Tailwind CSS backed by reliable APIs using Python, Flask, and secure databases."
    },
    {
      title: "Data & Automation",
      description: "Automating repetitive workflows, building custom data pipelines with Pandas & NumPy, and delivering actionable insights."
    }
  ],
  summary: "From designing responsive web applications to integrating machine learning models and database systems, I prioritize clean code, intuitive user experiences, and measurable real-world utility."
};

export const SKILL_CATEGORIES = [
  {
    id: "programming",
    name: "Programming",
    icon: "Code2",
    skills: ["Python", "Java", "C", "JavaScript", "Kotlin"]
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: "Layout",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Responsive UI"]
  },
  {
    id: "backend",
    name: "Backend",
    icon: "Server",
    skills: ["Python", "Flask", "RESTful APIs", "Backend Logic"]
  },
  {
    id: "databases",
    name: "Databases",
    icon: "Database",
    skills: ["SQL", "MongoDB", "Supabase"]
  },
  {
    id: "aiml",
    name: "AI & Machine Learning",
    icon: "BrainCircuit",
    skills: ["Artificial Intelligence", "Machine Learning", "NLP (Natural Language Processing)"]
  },
  {
    id: "data",
    name: "Data & Analytics",
    icon: "BarChart3",
    skills: ["Pandas", "NumPy", "Matplotlib", "Microsoft Excel"]
  },
  {
    id: "tools",
    name: "Tools & Development",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Workflow Automation"]
  }
];

export const PROJECTS = [
  {
    id: "bazar-byte",
    title: "Bazar Byte",
    category: "E-Commerce / Marketplace",
    tagline: "Modern Digital Marketplace for Dry Fruits & Nuts",
    description: "A digital commerce platform designed for browsing, selecting, and purchasing premium dry fruits. Engineered with a responsive frontend catalog, structured product categorization, seamless cart interaction logic, and backend-ready data models for online retail workflows.",
    highlights: [
      "Intuitive product discovery and categorized dry fruits presentation (almonds, cashews, pistachios, dates)",
      "Interactive cart management and responsive UI components across desktop and mobile screens",
      "Structured application state and clean integration points for backend database operations"
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Flask", "Database Management"],
    accentColor: "from-amber-500/20 to-orange-500/20",
    theme: "ecommerce",
    githubUrl: "https://github.com/Gnaneshwarspidey/Portfolio",
    demoUrl: "https://gnaneshwarspidey.github.io/Portfolio/"
  },
  {
    id: "green-pulse",
    title: "Green Pulse",
    category: "Smart Farming / AgriTech",
    tagline: "Technology-Driven Agricultural Monitoring & Insights",
    description: "A smart farming and agricultural technology solution aimed at addressing modern agricultural challenges. Utilizes digital telemetry data, analytical visualization, and software automation to support farmers with crop health monitoring, resource management, and informed decision-making.",
    highlights: [
      "Comprehensive data interface for monitoring crop metrics, soil parameters, and environmental data",
      "Analytical dashboard utilizing data science workflows to assist sustainable farming decisions",
      "Designed for reliable performance across variable field conditions and modern mobile devices"
    ],
    technologies: ["Python", "Data Analysis", "Machine Learning", "React", "REST APIs"],
    accentColor: "from-emerald-500/20 to-teal-500/20",
    theme: "agritech",
    githubUrl: "https://github.com/Gnaneshwarspidey/Portfolio",
    demoUrl: "https://gnaneshwarspidey.github.io/Portfolio/"
  },
  {
    id: "event-hub",
    title: "Event Hub",
    category: "Event Management Platform",
    tagline: "Comprehensive Platform for Organizing & Managing Events",
    description: "A full-featured event management platform built to simplify the organization, scheduling, and attendee coordination of campus and community events. Features event listing, registration flows, schedule management, and centralized database handling.",
    highlights: [
      "Structured event creation, timetable display, and attendee registration workflows",
      "Dynamic event catalog with real-time UI filtering and responsive card layouts",
      "Robust backend database schema for event data persistence and user interaction management"
    ],
    technologies: ["React", "Python", "Flask", "SQL / Database", "Tailwind CSS"],
    accentColor: "from-violet-500/20 to-indigo-500/20",
    theme: "events",
    githubUrl: "https://github.com/Gnaneshwarspidey/Portfolio",
    demoUrl: "https://gnaneshwarspidey.github.io/Portfolio/"
  }
];

export const EXPERIENCE = [
  {
    role: "Machine Learning Intern",
    company: "Leap Inspire",
    type: "Internship",
    period: "Internship Experience",
    summary: "Engaged in hands-on machine learning development, working directly with applied ML concepts, pipeline construction, and practical data problem-solving.",
    responsibilities: [
      "Applied foundational and practical Machine Learning concepts to real-world datasets and computational tasks.",
      "Participated in data preprocessing, feature preparation, and algorithmic workflow development.",
      "Collaborated on technical tasks, reinforcing software engineering principles and structured model experimentation."
    ],
    technologies: ["Python", "Machine Learning", "Data Processing", "NumPy", "Pandas"]
  }
];

export const CERTIFICATIONS = [
  {
    id: "cisco-iot",
    issuer: "Cisco",
    title: "IoT Certificate",
    category: "Internet of Things & Connected Systems",
    icon: "Wifi",
    badgeColor: "text-sky-400 bg-sky-950/60 border-sky-800/60"
  },
  {
    id: "tata-cyber",
    issuer: "Tata",
    title: "Cybersecurity Analyst Job Simulation",
    category: "Security & Threat Analysis",
    icon: "ShieldCheck",
    badgeColor: "text-blue-400 bg-blue-950/60 border-blue-800/60"
  },
  {
    id: "simplilearn-android",
    issuer: "Simplilearn",
    title: "Android App Development for Beginners",
    category: "Mobile Application Development",
    icon: "Smartphone",
    badgeColor: "text-emerald-400 bg-emerald-950/60 border-emerald-800/60"
  },
  {
    id: "ey-ms-ai",
    issuer: "EY + Microsoft",
    title: "AI Skills Passport",
    category: "Artificial Intelligence & Cloud Fundamentals",
    icon: "Sparkles",
    badgeColor: "text-purple-400 bg-purple-950/60 border-purple-800/60"
  }
];

export const EDUCATION = {
  degree: "Bachelor of Engineering (B.E.)",
  specialization: "Artificial Intelligence & Machine Learning",
  status: "Final Year Student",
  focusAreas: [
    "Machine Learning & Deep Learning",
    "Natural Language Processing (NLP)",
    "Data Structures & Algorithms",
    "Full-Stack Web Development",
    "Database Management Systems (DBMS)",
    "Software Engineering Principles"
  ]
};
