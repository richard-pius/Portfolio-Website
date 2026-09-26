export interface FreelancedProject {
  id: string;
  title: string;
  client: string;
  role: string;
  period: string;
  category: 'Cloud & DevOps' | 'Web Apps' | 'Automation & Tools' | 'Mobile' | 'Full-Stack Web (Astro 5 & React Islands)';
  brief: string;
  solution: string;
  deliverables: string[];
  impact: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Cloud & DevOps' | 'AI & LLMs' | 'Web & Tools' | 'Mobile & Games';
  tags: string[];
  metrics?: string;
  architecture?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period?: string;
  location: string;
  type?: string;
  description: string[];
  skills?: string[];
  link?: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
  details: string;
  highlights?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  period: string;
  link?: string;
  badge?: string;
}

export interface Honor {
  event: string;
  details: string;
  ranking: string;
  highlight?: string;
}

export const personalData = {
  name: "Richard Pius",
  title: "Software Developer & DevOps Specialist",
  tagline: "Building Secure, Scalable Cloud Systems & Modern Web Applications",
  email: "piusrichard713@gmail.com",
  location: "Kerala, India",
  availabilityStatus: "Available for Freelance & Select Opportunities",
  responseSpeed: "Under 6 hours",
  github: "https://github.com/richard-pius",
  linkedin: "https://www.linkedin.com/in/richard-pius-developer/",
  bio: "Software Developer & BCA Student with a strong foundational focus on DevOps pipelines, AWS cloud infrastructure, and modern full-stack web engineering. Driven by a strict 'Security-by-Design' principle: every system I architect is hardened from day one, whether deploying Terraform IaC on AWS, building fast Next.js applications, or developing local AI toolchains.",
};

export const portfolioStats = [
  { value: "Top 25%", label: "HackerRank Orchestrate 2026", sub: "Global rank #436 / 1,773" },
  { value: "100%", label: "Security-First Architecture", sub: "Hardened CI/CD & zero-trust" },
  { value: "Featured", label: "ZENJI Learning Portal", sub: "Astro 5 + React Islands SSG" },
  { value: "6+", label: "Open Source Repositories", sub: "AWS, LLM, Flutter & Godot" },
];

// SECTION FOR SHOWCASING FREELANCED WORK (ZENJI LEARNING)
export const zenjiFreelancedProject = {
  id: "fl-zenji",
  title: "🐘 ZENJI Learning — Official Website & Curriculum Portal",
  client: "ZENJI Learning App",
  role: "Freelance Full-Stack & Frontend Architect",
  period: "2026",
  category: "Full-Stack Web (Astro 5 & React Islands)",
  liveUrl: "https://zenjilearning.vercel.app/",
  tagline: "The official website and curriculum portal for ZENJI Learning App.",
  overview: "The official website and curriculum portal for ZENJI Learning App. Built with Astro 5 + React Islands + Tailwind CSS, styled in high-impact Neo-Brutalism, and featuring type-safe Astro Content Collections for study guides alongside seamless integrations with YouTube and Graphy LMS for courses.",
  architecture: [
    {
      title: "Astro 5 SSG & React 18 Islands",
      description: "Static-site generation with selective React 18 islands (client:load, client:idle) for dynamic interactive elements, maintaining ultra-low JavaScript payload."
    },
    {
      title: "High-Impact Neo-Brutalist Design System",
      description: "Codified in Tailwind CSS 3 with chunky 4px borders, hard unblurred drop shadows (shadow-brutal-sm to shadow-brutal-xl), and signature palette (#FFE600 yellow, #FF5E7E coral, #00D2FF cyan, #00F090 mint)."
    },
    {
      title: "Type-Safe Content Collections & Course Blueprints",
      description: "Astro 5 Content Layer with strict schemas for study journal articles, plus a pre-rendered course directory for Kerala SSLC, CBSE Class 10, and Plus Two (+1/+2) syllabus tracks."
    },
    {
      title: "React Portal Navigation & YouTube Facade",
      description: "Full-screen drawer mounted directly to document.body via React createPortal to prevent sticky-header traps, and interactive click-to-play YouTube video facades."
    },
    {
      title: "Automated SEO, RSS & LMS Integrations",
      description: "JSON-LD schema markup, automated XML sitemap (/sitemap.xml), RSS 2.0 feed (/rss.xml), deep-linked Graphy LMS test series, and zero-tracking privacy architecture."
    }
  ],
  deliverables: [
    "Full Astro 5 static site deployment on Vercel with ClientRouter transitions",
    "Neo-Brutalist custom Tailwind 3 token system & Space Grotesk / Inter typography",
    "Interactive Course Directory: Kerala SSLC, CBSE 10 & Plus Two science tracks",
    "Type-safe Markdown study journal with reading time estimators",
    "React portal mobile drawer with ESC key listeners and backdrop traps prevention",
    "Automated XML Sitemap, RSS 2.0 feed generator, and JSON-LD structured schemas"
  ],
  techStack: [
    "Astro 5 (SSG)",
    "React 18 Islands",
    "Tailwind CSS 3",
    "TypeScript",
    "Astro Content Collections",
    "YouTube Data API v3",
    "Graphy LMS Integration",
    "Neo-Brutalism",
    "Vercel"
  ],
  metrics: "Sub-1s Page Load • Zero Runtime Overhead • 100% SEO Ready"
};

export const freelancedWork = [zenjiFreelancedProject];


export const skillsCategorized = [
  {
    category: "Cloud, Infrastructure & DevOps",
    color: "text-google-blue",
    borderColor: "border-google-blue/30",
    skills: ["AWS Cloud", "Terraform IaC", "Docker", "CI/CD (GitHub Actions)", "Linux (Intermediate)"]
  },
  {
    category: "Full-Stack Web & Frameworks",
    color: "text-google-green",
    borderColor: "border-google-green/30",
    skills: ["React.js", "Next.js 16", "TypeScript", "JavaScript", "Node.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap 5", "Django", "REST APIs"]
  },
  {
    category: "AI, Data & Local Inference",
    color: "text-google-yellow",
    borderColor: "border-google-yellow/30",
    skills: ["Python", "Ollama (Local LLMs)", "SQL", "MongoDB"]
  },
  {
    category: "Mobile & Specialized Engineering",
    color: "text-google-red",
    borderColor: "border-google-red/30",
    skills: ["Flutter & Dart", "Java", "C / C++", "Chrome Extensions (MV3)", "Git Version Control"]
  }
];

export const experiences: Experience[] = [
  {
    role: "Freelance Software Engineer",
    company: "Zenji Learning",
    period: "September 2026",
    location: "Thodupuzha, Kerala, India (Remote)",
    type: "Freelance",
    description: [
      "Developed educational frameworks and learning automation services using React, Next.js, and backend web databases.",
      "Refined application UI/UX flows and maintained codebase health through strict modular component engineering.",
      "Built responsive, high-speed interfaces with state management and automated validation."
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX"],
    link: "https://zenjilearning.vercel.app/"
  },
  {
    role: "Cloud, DevOps and Cybersecurity Intern",
    company: "ipsr solutions ltd",
    period: "April 2026 — June 2026",
    location: "Kottayam, Kerala, India (Hybrid)",
    type: "Internship",
    description: [
      "Gained hands-on infrastructure engineering experience spanning AWS Cloud deployments, Linux system administration, and configuration management.",
      "Engineered containerized application environments utilizing Docker and designed automated CI/CD delivery flows leveraging Git, GitHub Actions, and AWS deployments.",
      "Applied cybersecurity threat mitigation, system access controls, and log monitoring protocols to secure virtualized application topologies."
    ],
    skills: ["AWS", "Docker", "CI/CD", "Linux Admin", "Cybersecurity", "Terraform"]
  },
  {
    role: "Student Council Member",
    company: "Santhigiri College",
    period: "July 2024 — March 2025",
    location: "Kerala, India (On-site)",
    type: "Leadership",
    description: [
      "Coordinated campus placements and departmental outreach programs.",
      "Liaised between the student body and college administration to organize technology workshops and student initiatives."
    ],
    skills: ["Leadership", "Coordination", "Communication"]
  },
  {
    role: "NSS Volunteer",
    company: "National Service Scheme (NSS)",
    period: "Sep 2022 — March 2024",
    location: "Kerala, India (On-site)",
    type: "Community",
    description: [
      "Actively participated in community development programs, social service initiatives, and campus outreach events.",
      "Developed strong leadership, teamwork, and interpersonal communication skills through collaborative social welfare projects."
    ],
    skills: ["Teamwork", "Social Welfare", "Event Management"]
  }
];

export const educationList: Education[] = [
  {
    school: "Santhigiri College of Computer Science",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "July 2024 — Present",
    location: "Kottayam, Kerala, India",
    details: "Specialized focus on software engineering, operating systems, database management, and cloud architecture.",
    highlights: ["Data Structures & Algorithms", "Operating Systems & Linux", "Database Systems (SQL & NoSQL)"]
  },
  {
    school: "St. George's Higher Secondary School",
    degree: "Computer Science Stream (Higher Secondary)",
    period: "July 2022 — March 2024",
    location: "Kerala, India",
    details: "Foundational academic training in Computer Science, Mathematics, and Physics.",
    highlights: ["C++ Programming", "Boolean Algebra", "Mathematical Modeling"]
  }
];

export const projects: Project[] = [
  {
    id: "01",
    title: "NicheSearch Cloud Engine",
    category: "Cloud & DevOps",
    description: "A DevOps and cloud-native technical search engine utilizing Terraform IaC to spawn a secure 3-tier AWS environment. Built with Docker, Nginx, Django, and GitHub Actions CI/CD.",
    tags: ["Terraform", "AWS", "Docker", "Nginx", "Django", "CI/CD"],
    metrics: "3-Tier AWS Architecture • Automated CI/CD",
    architecture: "AWS VPC -> Nginx Reverse Proxy -> Dockerized Django Backend -> Isolated PostgreSQL RDS with automated GitHub Actions lint & deploy triggers.",
    githubUrl: "https://github.com/richard-pius"
  },
  {
    id: "02",
    title: "TubeSift Chrome Extension",
    category: "Web & Tools",
    description: "A Manifest V3 Chrome extension that hides YouTube Shorts and filters feed videos by year using a debounced MutationObserver and declarativeNetRequest.",
    tags: ["JavaScript", "Chrome API", "Manifest V3", "Web Dev"],
    metrics: "Zero Performance Overhead • MV3 Compliant",
    architecture: "Debounced MutationObserver watching dynamic DOM nodes combined with declarativeNetRequest API to block video recommendation payloads.",
    githubUrl: "https://github.com/richard-pius"
  },
  {
    id: "03",
    title: "ClearBreeze Forecast App",
    category: "Mobile & Games",
    description: "A dynamic mobile weather and air quality monitoring app with time-of-day adaptive backgrounds, location fetching, and SharedPreferences theme persistence.",
    tags: ["Flutter", "Dart", "Provider", "REST API"],
    metrics: "Cross-Platform iOS/Android • Real-time AQI",
    architecture: "Flutter Provider state management architecture binding real-time OpenWeather REST API endpoints to cached device geolocation vectors.",
    githubUrl: "https://github.com/richard-pius"
  },
  {
    id: "04",
    title: "Rithaji-1.5B Code Generator",
    category: "AI & LLMs",
    description: "An AI coding language model fine-tuned using Unsloth LoRA on Dolly 15k and MBPP datasets, quantized to GGUF for local inference via Ollama.",
    tags: ["Python", "Ollama", "Unsloth", "LLM", "LoRA"],
    metrics: "Local GGUF Quantization • Sub-100ms Inference",
    architecture: "Fine-tuned QLoRA weights merged with base model, quantized to 4-bit GGUF matrix, and served through a local Ollama API endpoint for privacy-first code synthesis.",
    githubUrl: "https://github.com/richard-pius"
  },
  {
    id: "05",
    title: "Semantic Book Recommender",
    category: "AI & LLMs",
    description: "A recommendation engine utilizing Hugging Face embeddings, Chroma vector database, and LangChain Gradio interface for emotional and context-based book searches.",
    tags: ["Python", "LangChain", "Vector Search", "Chroma DB"],
    metrics: "Dense Vector Similarity • Zero Hallucination",
    architecture: "Text semantic embedding pipeline converting book corpora into high-dimensional vectors stored in Chroma DB, retrieved via cosine similarity search.",
    githubUrl: "https://github.com/richard-pius"
  },
  {
    id: "06",
    title: "2D Cyber Platform Game",
    category: "Mobile & Games",
    description: "A classic 2D platformer game built using Godot Engine and GDScript, focusing on responsive physics movement and sliding platform scripts.",
    tags: ["Godot Engine", "GDScript", "Game Logic"],
    metrics: "60 FPS Native Physics • Custom Tilemap Engine",
    architecture: "KinematicBody2D state machine managing jump velocity, collision vectors, coyote time, and sliding platform raycasts.",
    githubUrl: "https://github.com/richard-pius"
  }
];

export const certifications: Certification[] = [
  { name: "Inside the APT Playbook: Malware Analysis", issuer: "CyberWarFare Labs", period: "Issued Sep 2026", badge: "Cybersecurity" },
  { name: "ISRO Bharatiya Antariksh Hackathon 2026 (Participant)", issuer: "Hack2skill", period: "Issued Aug 2026", link: "https://certificate.hack2skill.com/verify/2026H2S06BAH-P36854", badge: "Hackathon" },
  { name: "BroncoCTF 2026 (Participant)", issuer: "Santa Clara University", period: "Issued Jul 2026", badge: "CTF" },
  { name: "AI Skills Fest 2026", issuer: "Microsoft", period: "Issued Jun 2026", link: "https://www.credly.com/badges/74286f84-3f55-4eec-934a-aed6c389b54c/public_url", badge: "AI Specialist" },
  { name: "Al-Integrated Cloud, DevOps & Cybersecurity", issuer: "ipsr solutions ltd", period: "Issued May 2026", badge: "Cloud & Security" },
  { name: "Google Cloud Technical Series: AI in Action", issuer: "Google Cloud", period: "Issued Apr 2026", link: "https://googlecloudapac.accredible.com/185a057f-f603-4a86-8375-7313defda717", badge: "Cloud AI" },
  { name: "CodeQuest - National-Level Coding (Participant)", issuer: "CHRIST University", period: "Issued Jan 2026", badge: "Competitive Coding" },
  { name: "NPTEL Cloud Computing", issuer: "NPTEL / IIT", period: "Issued Jun 2025", link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS107S46120073210716935", badge: "IIT Certified" }
];

export const honors: Honor[] = [
  {
    event: "HackerRank Orchestrate June 2026 Hackathon",
    details: "Ranked #436 out of 1,773 global participants. Engineered a private, local-first Multi-Modal Evidence Review System powered by local VLM (Ollama gemma3:4b) with prompt injection defenses.",
    ranking: "Ranked #436 / 1,773 — Top 25% Finisher",
    highlight: "Engineered prompt injection defense system + local VLM inference"
  }
];
