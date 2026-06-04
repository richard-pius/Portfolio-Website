import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  santhigiri,
  stgeorge,
  ipsr,
  nss,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "education", title: "Education" },
  { id: "work", title: "Work" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Software Developer", icon: web },
  { title: "Full Stack Web Developer", icon: backend },
  { title: "Android & Mobile Developer", icon: mobile },
  { title: "Cyber Security Enthusiast", icon: creator },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

// 1. Unified and Updated Education Data
const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Santhigiri College of Computer Science | Idukki, Kerala",
    icon: santhigiri, // Swapped from starbucks to your custom college logo asset
    iconBg: "#ffffff", // Tip: Changing this background to white looks cleaner with real logos!
    date: "July 2024 - Present",
    points: [
      "Deepening core foundational knowledge in Computer Science, systems programming, and application development.",
      "Developing a strong command over multiple programming languages including C, C++, Python, Java, Kotlin, and JavaScript.",
      "Actively building hands-on utility programs, databases, and software tools alongside core coursework.",
    ],
  },
  {
    degree: "Higher Secondary Education (Computer Science Stream)",
    institution: "St. George's Higher Secondary School | Idukki, Kerala",
    icon: stgeorge, // Swapped from meta to your custom school logo asset
    iconBg: "#ffffff",
    date: "July 2022 - March 2024",
    points: [
      "Completed foundational coursework in Computer Science, Mathematics, and Physics.",
      "Developed initial programming logic skills via basic data structures and procedural concepts.",
    ],
  },
];

// 2. Separate Dedicated Array for your Certifications List
const certifications = [
  {
    title: "AI-Integrated Cloud, DevOps & Cybersecurity",
    issuer: "ipsr solutions limited",
    date: "May 7, 2026",
  },
  {
    title: "Cyber Security Bootcamp: Recon to Exploitation",
    issuer: "The Blind Hacker (TBH)",
    date: "January 2026",
  },
  {
    title: "Understanding LLMs and Basic Prompting Techniques",
    issuer: "CodeSignal",
    date: "September 2025",
  },
  {
    title: "Cloud Computing Certification",
    issuer: "NPTEL",
    date: "November 2025",
  },
  {
    title: "ISRA Kerala Chapter Meetup (Vibe Coding Workshop)",
    issuer: "Information Security Research Association (ISRA)",
    date: "23 May 2026",
  },
  {
    title: "Gen AI Integrated Advanced System Administration and Containerisation",
    issuer: "ipsr solutions limited (at Santhigiri College)",
    date: "May 2026",
  },
];

const experiences = [
  {
    title: "AI-Integrated Cloud & DevOps Intern",
    company_name: "IPSR Solutions Ltd",
    icon: ipsr, 
    iconBg: "#E6DEDD",
    date: "April 2026 - June 2026",
    points: [
      "Gained hands-on infrastructure engineering experience spanning AWS Cloud computing deployments, Linux system administration, and automated configuration management.",
      "Engineered containerized application environments utilizing Docker and designed automated delivery flows leveraging Git, GitHub, and continuous deployment pipelines.",
      "Applied foundational cybersecurity threat mitigation strategies, system access controls, and log monitoring protocols to secure virtualized application topologies.",
    ],
  },
  {
    title: "NSS Volunteer",
    company_name: "National Service Scheme (NSS)",
    icon: nss, 
    iconBg: "#383E56",
    date: "July 2022 - March 2024",
    points: [
      "Actively participated in community development programs, social service initiatives, and campus outreach events.",
      "Developed strong leadership, teamwork, and interpersonal communication skills through collaborative social welfare projects.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Semantic Book Recommender",
    description: "A powerful semantic library book recommendation engine built using Python that uses AI to find books matching your exact contextual interests.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "ai", color: "green-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/richard-pius/A-semantic-library-book-recommender",
  },
  {
    name: "ClearBreeze Forecast",
    description: "A beautiful, fluid, and responsive mobile weather application developed from scratch to display real-time conditions and forecasts.",
    tags: [
      { name: "flutter", color: "blue-text-gradient" },
      { name: "dart", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/richard-pius/ClearBreeze-Forecast",
  },
  {
    name: "Simple Linux Distro",
    description: "A lightweight, text-based Linux distribution built from scratch using Common Lisp for deep system-level experimentation.",
    tags: [
      { name: "lisp", color: "blue-text-gradient" },
      { name: "linux", color: "green-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/richard-pius/simple-linux-distro-",
  },
];

// Added 'certifications' to the module export list
export { services, technologies, education, certifications, experiences, testimonials, projects };