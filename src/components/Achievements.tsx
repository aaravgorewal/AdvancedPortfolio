import React from "react";
import { Section } from "./ui/SectionGrid";

interface Milestone {
  number: string;
  label: string;
  description: string;
}

const MILESTONES: Milestone[] = [
  {
    number: "06",
    label: "Hackathon Wins",
    description: "Consistent top-tier placements in competitive national hackathon events.",
  },
  {
    number: "15+",
    label: "Hackathons Participated",
    description: "Extensive experience in rapid prototyping and high-pressure software development.",
  },
  {
    number: "02+",
    label: "Deployed Prototypes",
    description: "Successful systems bridging AI models with web apps and physical hardware integrations.",
  },
];

const CREDENTIALS = [
  { name: "HackCBS 8.0", type: "Hackathon Participation & Dev Credential" },
  { name: "HackFusion 2026", type: "Hackathon Participation & Dev Credential" },
  { name: "RIFT ’26", type: "Tech Event & Project Credential" },
  { name: "HackShastra", type: "Hackathon Participation & Dev Credential" },
  { name: "Hack For Green Bharat", type: "Environmental Hackathon Participation" },
];

export const Achievements = () => {
  return (
    <Section id="achievements" className="border-b border-border-custom">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        
        {/* Left Column: Header */}
        <div className="md:col-span-4 flex flex-col items-start text-left">
          <span className="font-sans-body text-xs font-semibold uppercase tracking-wider text-secondary/60 mb-2">
            05 / CREDENTIALS
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl uppercase tracking-tight text-foreground mb-8">
            Milestones
          </h2>
          <p className="font-sans-body text-xs sm:text-sm text-secondary/70 max-w-[280px] leading-relaxed hidden md:block">
            Verified hackathon results, technical event credentials, and engineering achievements.
          </p>
        </div>

        {/* Right Column: Content grid */}
        <div className="md:col-span-8 flex flex-col text-left font-sans-body">
          
          {/* Milestones Numbers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pb-12 border-b border-border-custom/50">
            {MILESTONES.map((item, index) => (
              <div key={index} className="flex flex-col items-start">
                <span className="font-serif-display text-5xl md:text-6xl font-extrabold text-accent leading-none mb-3">
                  {item.number}
                </span>
                <h3 className="text-sm font-bold text-foreground mb-1 uppercase tracking-wider">
                  {item.label}
                </h3>
                <p className="text-xs text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Credentials list */}
          <div className="pt-12">
            <span className="font-sans-body text-[10px] font-semibold uppercase tracking-widest text-accent mb-6 block">
              Verified Event Participations & Credentials
            </span>
            
            <ul className="space-y-4">
              {CREDENTIALS.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border-custom/30 pb-3 last:border-b-0"
                >
                  <span className="text-sm font-semibold text-foreground">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-mono text-secondary uppercase tracking-wider mt-1 sm:mt-0">
                    {item.type}
                  </span>
                </li>
              ))}
            </ul>
            
            <p className="text-[10px] text-secondary/40 leading-relaxed mt-8 italic">
              * Participation credentials are listed accurately. Non-winning hackathon involvement is labeled as participation/credential in accordance with verification principles.
            </p>
          </div>

        </div>

      </div>
    </Section>
  );
};
