export interface Project {
  number: string;
  title: string;
  tag: string;
  description: string;
  problemSolution: string;
  highlights: string[];
  tech: string[];
  role: string;
  outcome?: string;
  github: string | null;
  live: string | null;
  image: string | null;
  layout: "split-left" | "split-right" | "full-card";
}

export const PROJECTS: Project[] = [
  {
    number: "01",
    title: "MindsetX – AI Wellness Portal",
    tag: "FEATURED &bull; AI / ML",
    description: "Delivered a secure, intelligent wellness portal that adapts to behavioral patterns while maintaining strict user data privacy.",
    problemSolution: "Problem: Standard wellness apps lack deep personalization and compromise user data privacy. Solution: Built a decentralized storage vault ('Bio Vault') leveraging local AI-driven analysis to recommend personalized insights securely.",
    highlights: [
      "Engineered secure 'Bio Vault' with client-side AI analysis",
      "Achieved zero-knowledge data privacy",
      "Designed adaptive personalization logic based on mood trends"
    ],
    tech: ["React.js", "Node.js", "AI Logic", "MongoDB", "Tailwind CSS"],
    role: "Lead Full-Stack Developer",
    outcome: "Ensured 100% user data privacy while offering dynamic, real-time stress tracking analytics.",
    github: null, // Placeholder: add once the correct URL is supplied
    live: null, // Placeholder: add once the correct URL is supplied
    image: "/Minee.png",
    layout: "split-left"
  },
  {
    number: "02",
    title: "AI Chatbot & Hardware Integration",
    tag: "HARDWARE &bull; AI",
    description: "Created a real-time command system linking voice/text LLM queries directly with physical microcontroller relays.",
    problemSolution: "Problem: Standard LLM bots are isolated from the physical world. Solution: Built a real-time WebSocket bridge connecting React endpoints to an Arduino hardware relay board.",
    highlights: [
      "Real-time voice processing and tokenized relay control",
      "Designed CRUD REST API endpoints for logging triggers",
      "Optimized system latency below 150ms"
    ],
    tech: ["React", "Node.js", "Python", "Arduino", "WebSockets"],
    role: "Embedded Systems & Frontend Engineer",
    outcome: "Built a functional prototype controlling home automation relays using natural voice queries.",
    github: null, // Placeholder
    live: null, // Placeholder
    image: null, // Typographic code block visualization
    layout: "split-right"
  },
  {
    number: "03",
    title: "EduLearn – Smart Learning Platform",
    tag: "PRODUCTIVITY &bull; WEB APP",
    description: "A platform designed to organize educational content, automate study scheduling, and improve student productivity.",
    problemSolution: "Problem: Students get overwhelmed by fragmented educational resources. Solution: Developed a centralized dashboard linking schedules, tasks, and notes into an automated, algorithmically driven workflow.",
    highlights: [
      "Centralized structured study resources with algorithmic pacing",
      "Created a highly accessible, keyboard-traversable student workspace",
      "Optimized load times under 1 second"
    ],
    tech: ["React", "Node.js", "Express", "Tailwind CSS"],
    role: "Frontend Developer",
    outcome: "Improved daily dashboard interaction frequency among testing student groups.",
    github: null, // Placeholder
    live: null, // Placeholder
    image: null, // Minimal grid structure wireframe visualization
    layout: "full-card"
  }
];
