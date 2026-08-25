"use client";

import React from "react";
import { Section } from "./ui/SectionGrid";

interface CapabilityItem {
  id: string;
  catalog: string;
  name: string;
  details: string;
}

const CAPABILITIES: CapabilityItem[] = [
  {
    id: "1",
    catalog: "CAP-01",
    name: "AI / MACHINE LEARNING",
    details: "LLMs · RAG · AI Agents · intelligent systems",
  },
  {
    id: "2",
    catalog: "CAP-02",
    name: "FULL-STACK ENGINEERING",
    details: "React · Next.js · Node.js · Express · APIs",
  },
  {
    id: "3",
    catalog: "CAP-03",
    name: "BACKEND / DATA",
    details: "Python · FastAPI · MongoDB · PostgreSQL · Qdrant",
  },
  {
    id: "4",
    catalog: "CAP-04",
    name: "PRODUCT DEVELOPMENT",
    details: "Interfaces · dashboards · SaaS · responsive systems",
  },
  {
    id: "5",
    catalog: "CAP-05",
    name: "CREATIVE DEVELOPMENT",
    details: "Motion · 3D · AR · interactive web experiences",
  },
  {
    id: "6",
    catalog: "CAP-06",
    name: "RAPID PROTOTYPING",
    details: "Hackathons · MVPs · AI-assisted development",
  },
];

export const Roster = () => {
  return (
    <Section id="experience" className="px-6 md:px-24 py-32 border-b border-border-custom bg-background">
      <div className="mb-16 text-left">
        <div className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#E8913C] mb-4">
          04 / TECHNICAL ARSENAL
        </div>
        <h2 className="font-syne text-5xl font-bold text-[#EDE7DC]">
          Capabilities
        </h2>
      </div>

      <div className="border-t border-[#EDE7DC]/13">
        {CAPABILITIES.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col sm:flex-row sm:items-center justify-between py-10 border-b border-[#EDE7DC]/13 hover:bg-[#EDE7DC]/[0.02] transition-colors duration-300 px-2"
          >
            <div className="flex items-center gap-8 text-left">
              <span className="text-[10px] font-bold text-[#2E6B72] tracking-widest font-sans-body">
                {item.catalog}
              </span>
              <span className="font-syne text-2xl md:text-4xl font-bold uppercase text-[#EDE7DC] transition-transform duration-300 group-hover:translate-x-2">
                {item.name}
              </span>
            </div>
            <span className="text-[#6C7378] font-mono text-xs tracking-wider font-semibold font-sans-body mt-4 sm:mt-0">
              {item.details}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
};
