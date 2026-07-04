export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
  details: string;
}

export interface Certification {
  name: string;
  issuer: string;
  period: string;
  link?: string;
}

export interface Honor {
  event: string;
  details: string;
  ranking: string;
}

export const personalData = {
  name: "Richard Pius",
  title: "Software Developer | DevSecOps & Cloud Enthusiast | Linux Admin | BCA Student",
  email: "piusrichard713@gmail.com",
  phone: "+91 9446931260",
  location: "Kottayam, Kerala, India",
  github: "https://github.com/richard-pius",
  linkedin: "https://www.linkedin.com/in/richard-pius-developer/",
  bio: "Software Developer & BCA Student with a focus on building secure, scalable systems. I specialize in the intersection of Development, Cloud Infrastructure, and Cybersecurity. I'm a Linux power user who believes in 'Security-by-Design.' Whether I'm architecting a DevOps pipeline, hardening a server, or exploring logic in Game Development, I'm driven by understanding how systems work under the hood.",
};

export const skills = {
  languages: ["C", "C++", "Java", "Python", "HTML", "CSS", "JavaScript", "Kotlin", "GDScript", "Lisp"],
  frameworks: ["React", "Next.js", "Kaboom.js", "Bootstrap 5", "WordPress", "Flutter", "Dart", "Django", "Jetpack Compose", "Godot Engine"],
  tools: ["Git", "VS Code", "GitHub", "Linux", "Power BI", "Tableau", "SQL", "MongoDB", "Docker", "AWS Cloud", "Terraform", "Ollama", "Hugging Face", "Chroma DB", "LangChain"],
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "Zenji Learning",
    period: "March 2026 — Present",
    location: "Thodupuzha, Kerala, India (Remote)",
    description: [
      "Developing educational frameworks and learning automation services using React, Next.js, and backend web databases.",
      "Refining application UI/UX flows and maintaining codebase health through strict modular component engineering."
    ]
  },
  {
    role: "Cloud, DevOps and Cybersecurity Intern",
    company: "ipsr solutions ltd",
    period: "April 2026 — June 2026",
    location: "Kottayam, Kerala, India (Hybrid)",
    description: [
      "Gained hands-on infrastructure engineering experience spanning AWS Cloud deployments, Linux system administration, and configuration management.",
      "Engineered containerized application environments utilizing Docker and designed automated CI/CD delivery flows leveraging Git, GitHub Actions, and AWS deployments.",
      "Applied cybersecurity threat mitigation, system access controls, and log monitoring protocols to secure virtualized application topologies."
    ]
  },
  {
    role: "Student Council Member",
    company: "Santhigiri College",
    period: "July 2024 — March 2025",
    location: "Kerala, India (On-site)",
    description: [
      "Coordinated campus placements and departmental outreach programs.",
      "Liaised between the student body and college administration to organize technology workshops and student initiatives."
    ]
  },
  {
    role: "NSS Volunteer",
    company: "National Service Scheme (NSS)",
    period: "Sep 2022 — March 2024",
    location: "Kerala, India (On-site)",
    description: [
      "Actively participated in community development programs, social service initiatives, and campus outreach events.",
      "Developed strong leadership, teamwork, and interpersonal communication skills through collaborative social welfare projects."
    ]
  }
];

export const educationList: Education[] = [
  {
    school: "Santhigiri College of Computer Science",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "July 2024 — Present",
    location: "Kottayam, Kerala, India",
    details: "Focused on software engineering, database management, and programming foundations."
  },
  {
    school: "St. George's Higher Secondary School",
    degree: "Computer Science Stream (Higher Secondary)",
    period: "July 2022 — March 2024",
    location: "Kerala, India",
    details: "Specialization in Computer Science, Mathematics, and Physics."
  }
];

export const projects: Project[] = [
  {
    id: "01",
    title: "NicheSearch",
    description: "A DevSecOps and cloud-native technical search engine utilizing Terraform IaC to spawn a secure 3-tier AWS environment. Built with Docker, Nginx, Django, and GitHub Actions CI/CD.",
    tags: ["Terraform", "AWS", "Docker", "Nginx", "Django", "CI/CD"],
    githubUrl: "https://github.com/richard-pius"
  },
  {
    id: "02",
    title: "TubeSift Chrome Extension",
    description: "A Manifest V3 Chrome extension that hides YouTube Shorts and filters feed videos by year using a debounced MutationObserver and declarativeNetRequest.",
    tags: ["JavaScript", "Chrome API", "Manifest V3", "Web Dev"],
    githubUrl: "https://github.com/richard-pius"
  },
  {
    id: "03",
    title: "ClearBreeze Forecast",
    description: "A dynamic mobile weather and air quality monitoring app with time-of-day adaptive backgrounds, location fetching, and SharedPreferences theme persistence.",
    tags: ["Flutter", "Dart", "Provider", "REST API"],
    githubUrl: "https://github.com/richard-pius"
  },
  {
    id: "04",
    title: "Rithaji-1.5B Code Generator",
    description: "An AI coding language model fine-tuned using Unsloth LoRA on Dolly 15k and MBPP datasets, quantized to GGUF for local inference via Ollama.",
    tags: ["Python", "Ollama", "Unsloth", "LLM", "LoRA"],
    githubUrl: "https://github.com/richard-pius"
  },
  {
    id: "05",
    title: "Semantic Book Recommender",
    description: "A recommendation engine utilizing Hugging Face embeddings, Chroma vector database, and LangChain Gradio interface for emotional and context-based book searches.",
    tags: ["Python", "LangChain", "Vector Search", "Chroma DB"],
    githubUrl: "https://github.com/richard-pius"
  },
  {
    id: "06",
    title: "2D Platform Game",
    description: "A classic 2D platformer game built using Godot Engine and GDScript, focusing on responsive physics movement and sliding platform scripts.",
    tags: ["Godot Engine", "GDScript", "Game Logic"],
    githubUrl: "https://github.com/richard-pius"
  }
];

export const certifications: Certification[] = [
  { name: "HackerRank Orchestrate June 2026", issuer: "HackerRank", period: "Issued Jun 2026" },
  { name: "AI Skills Fest 2026", issuer: "Microsoft", period: "Issued Jun 2026", link: "https://lnkd.in/g9qi4KSQ" },
  { name: "AI-Driven Systems and IoT Certificate (Grade A+)", issuer: "Rats Technologies / Santhigiri College", period: "Issued Jun 2026" },
  { name: "NPTEL Cloud Computing", issuer: "NPTEL / IIT", period: "Issued Jun 2025" },
  { name: "Cyber Security Bootcamp", issuer: "Bootcamp", period: "Issued May 2025" },
  { name: "Python Programming", issuer: "IPSR Solutions", period: "Issued 2025" }
];

export const honors: Honor[] = [
  {
    event: "HackerRank Orchestrate June 2026 Hackathon",
    details: "Ranked #436 out of 1,773. Engineered a private, local-first Multi-Modal Evidence Review System powered by local VLM (Ollama gemma3:4b) with prompt injection defenses.",
    ranking: "Ranked #436 / 1,773 — Top 25% Finisher"
  }
];
