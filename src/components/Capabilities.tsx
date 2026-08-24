import React from "react";
import { Brain, Layers, Globe, Cpu } from "lucide-react";
import { Section } from "./ui/SectionGrid";

interface CapabilityGroup {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
}

const CAPABILITIES: CapabilityGroup[] = [
  {
    icon: <Brain className="w-5 h-5 text-accent" />,
    title: "AI & Machine Learning",
    description: "Developing intelligent agents, natural language processing pipelines, and predictive models to automate complex workflows.",
    skills: ["Python", "TensorFlow & PyTorch", "OpenAI / LLM APIs", "NLP & Computer Vision", "Agentic Workflows"],
  },
  {
    icon: <Layers className="w-5 h-5 text-accent" />,
    title: "Full Stack Development",
    description: "Building robust, scalable web architectures and secure API backends for seamless, responsive user experiences.",
    skills: ["React.js & Next.js", "TypeScript", "Node.js & Express", "REST & WebSocket APIs", "MongoDB & Relational Databases"],
  },
  {
    icon: <Globe className="w-5 h-5 text-accent" />,
    title: "WordPress & Web Systems",
    description: "Deploying high-performance commercial websites, optimized e-commerce portals, and structured content management.",
    skills: ["Custom Themes", "WooCommerce", "SEO Optimization", "Performance Auditing", "Database Structuring"],
  },
  {
    icon: <Cpu className="w-5 h-5 text-accent" />,
    title: "Design & Integrations",
    description: "Mapping logical interface design, WhatsApp API setups, and bridging digital software with physical microcontroller hardware.",
    skills: ["Figma UI Design", "WhatsApp API Integration", "Arduino & Relays", "Edge Computing & IoT", "User Journey Flow"],
  },
];

export const Capabilities = () => {
  return (
    <Section id="capabilities" className="border-b border-border-custom">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-16">
        
        {/* Section Header */}
        <div className="md:col-span-12 flex flex-col items-start text-left">
          <span className="font-sans-body text-xs font-semibold uppercase tracking-wider text-secondary/60 mb-2">
            03 / CAPABILITIES
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl uppercase tracking-tight text-foreground">
            Technical Arsenal
          </h2>
        </div>
      </div>

      {/* Capabilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {CAPABILITIES.map((group) => {
          return (
            <div
              key={group.title}
              className="group bg-surface border border-border-custom p-6 sm:p-8 flex flex-col justify-between transition-colors duration-300 hover:border-accent outline-none focus-visible:ring-1 focus-visible:ring-accent"
              tabIndex={0}
            >
              <div className="flex flex-col items-start text-left">
                {/* Icon wrapper */}
                <div className="w-10 h-10 border border-border-custom flex items-center justify-center mb-6 group-hover:border-accent/50 transition-colors duration-300">
                  {group.icon}
                </div>
                
                {/* Title */}
                <h3 className="font-serif-display text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {group.title}
                </h3>
                
                {/* Description */}
                <p className="font-sans-body text-xs sm:text-sm text-secondary leading-relaxed mb-6">
                  {group.description}
                </p>
              </div>

              {/* Skills tags list */}
              <div className="border-t border-border-custom/50 pt-6 mt-2 flex flex-wrap gap-2 text-left">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] font-mono border border-border-custom/50 px-2 py-0.5 text-secondary bg-surface/20 select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
