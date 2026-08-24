"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Code2 } from "lucide-react";
import { Section } from "./ui/SectionGrid";
import { Button } from "./ui/Button";
import { PROJECTS, Project } from "@/data/projects";

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// Helper for Visual Rendering
const renderVisual = (project: Project) => {
  if (project.image) {
    return (
      <div className="relative w-full aspect-[4/3] bg-surface border border-border-custom overflow-hidden p-3 shadow-lg transition-colors group-hover:border-accent duration-500">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} Visual`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover grayscale brightness-90 contrast-105 transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </div>
    );
  }

  // Render mock visual / code blocks for projects without screenshot images
  if (project.number === "02") {
    return (
      <div className="w-full aspect-[4/3] bg-surface border border-border-custom p-6 font-mono text-[10px] sm:text-xs text-secondary/80 flex flex-col justify-between overflow-hidden shadow-lg transition-colors group-hover:border-accent duration-500">
        <div className="flex items-center justify-between border-b border-border-custom/50 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
          </div>
          <span className="text-[9px] uppercase tracking-widest text-secondary/40 font-sans-body font-semibold">
            voice_relay.py
          </span>
        </div>
        <pre className="flex-1 text-left leading-relaxed text-secondary/60 select-none">
          <code>
            {`import serial\nimport speech_recognition as sr\n\n# Initialize hardware interface\narduino = serial.Serial('/dev/ttyACM0', 9600)\n\ndef trigger_hardware(command):\n    if "turn on" in command:\n        arduino.write(b'H')\n        print("[SYS] Relay state: HIGH")\n    elif "turn off" in command:\n        arduino.write(b'L')\n        print("[SYS] Relay state: LOW")`}
          </code>
        </pre>
        <div className="border-t border-border-custom/50 pt-3 mt-4 flex items-center justify-between text-[9px] tracking-wider text-accent font-semibold uppercase">
          <span>&bull; status: connection established</span>
          <span>lat: ~120ms</span>
        </div>
      </div>
    );
  }

  // Render grid/wireframe structure for project 03
  return (
    <div className="w-full aspect-[4/3] bg-surface border border-border-custom flex flex-col justify-between overflow-hidden shadow-lg transition-colors group-hover:border-accent duration-500 p-6 relative">
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none opacity-20">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="border border-border-custom" />
        ))}
      </div>
      <div className="flex justify-between items-center z-10">
        <div className="flex items-center gap-1.5 font-mono text-[9px] text-accent font-semibold uppercase">
          <Code2 className="w-3.5 h-3.5" />
          <span>dashboard_layout.json</span>
        </div>
        <span className="text-[9px] font-mono text-secondary/40">v1.2.0</span>
      </div>
      <div className="my-auto flex flex-col gap-3 z-10 text-left select-none">
        <div className="w-3/4 h-2 bg-secondary/20" />
        <div className="w-1/2 h-2 bg-secondary/15" />
        <div className="w-5/6 h-2 bg-secondary/10" />
        <div className="w-2/3 h-2 bg-secondary/20" />
      </div>
      <div className="flex justify-between items-end z-10">
        <span className="text-[10px] font-sans-body text-secondary/60 uppercase tracking-widest font-semibold">
          SYSTEM_METRIC
        </span>
        <div className="h-6 w-16 border border-border-custom flex items-center justify-center font-mono text-[8px] text-secondary/40">
          MAX_PACING
        </div>
      </div>
    </div>
  );
};

// Helper for Content Rendering
const renderContent = (project: Project) => {
  return (
    <div className="text-left">
      {/* Project Meta Info */}
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <span className="font-mono text-base font-semibold text-accent leading-none">
          {project.number}
        </span>
        <span className="text-border-custom select-none">|</span>
        <span
          className="font-sans-body text-[10px] font-semibold uppercase tracking-wider text-secondary/80"
          dangerouslySetInnerHTML={{ __html: project.tag }}
        />
      </div>

      {/* Project Title */}
      <h3 className="font-serif-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
        {project.title}
      </h3>

      {/* Description */}
      <p className="font-sans-body text-sm sm:text-base text-secondary leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Problem & Solution block */}
      <div className="bg-surface/50 border-l border-accent p-4 mb-6">
        <p className="font-sans-body text-xs sm:text-sm text-secondary/90 leading-relaxed italic">
          {project.problemSolution}
        </p>
      </div>

      {/* Key highlights checklist */}
      <ul className="space-y-2 mb-8 font-sans-body text-xs sm:text-sm text-secondary/80">
        {project.highlights.map((highlight, index) => (
          <li key={index} className="flex items-start gap-2.5">
            <span className="text-accent select-none mt-0.5">&bull;</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      {/* Role / Tech & Action Row */}
      <div className="flex flex-col gap-6 pt-4 border-t border-border-custom/50">
        {/* Technical stack / role info */}
        <div className="flex flex-col gap-2">
          <div className="text-[10px] font-sans-body font-semibold text-secondary/50 uppercase tracking-widest">
            Role: <span className="text-secondary/80 normal-case">{project.role}</span>
          </div>
          {project.outcome && (
            <div className="text-[10px] font-sans-body font-semibold text-secondary/50 uppercase tracking-widest">
              Outcome: <span className="text-secondary/80 normal-case">{project.outcome}</span>
            </div>
          )}
          <div className="flex flex-wrap gap-2 mt-1">
            {project.tech.map((techItem) => (
              <span
                key={techItem}
                className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 border border-border-custom/80 text-secondary bg-surface/30 select-none"
              >
                {techItem}
              </span>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-4">
          {project.github ? (
            <Button href={project.github} variant="secondary" className="px-4 py-2 h-9 text-[10px]">
              <GithubIcon className="w-3.5 h-3.5 mr-2" />
              Source Code
            </Button>
          ) : (
            <span className="text-[10px] font-sans-body font-semibold text-secondary/40 uppercase tracking-wider select-none">
              Source: Confidential
            </span>
          )}

          {project.live ? (
            <Button href={project.live} variant="primary" className="px-4 py-2 h-9 text-[10px]">
              <ExternalLink className="w-3.5 h-3.5 mr-2" />
              Live Demo
            </Button>
          ) : (
            project.github && (
              <span className="text-[10px] font-sans-body font-semibold text-secondary/40 uppercase tracking-wider select-none">
                Demo: N/A
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <Section id="work" className="border-b border-border-custom">
      {/* Section Header */}
      <div className="mb-16 md:mb-24 flex flex-col items-start">
        <span className="font-sans-body text-xs font-semibold uppercase tracking-wider text-secondary/60 mb-2">
          01 / SELECTED WORK
        </span>
        <h2 className="font-serif-display text-3xl md:text-5xl uppercase tracking-tight text-foreground">
          Proof of Capability
        </h2>
      </div>

      {/* Projects List */}
      <div className="space-y-24 md:space-y-36">
        {PROJECTS.map((project) => {
          return (
            <div
              key={project.number}
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start border-b border-border-custom/50 pb-16 md:pb-24 last:border-b-0 last:pb-0"
            >
              {/* Layout: Split Left (Visual on left, Content on right) */}
              {project.layout === "split-left" && (
                <>
                  <div className="md:col-span-6 w-full">
                    {renderVisual(project)}
                  </div>
                  <div className="md:col-span-6 flex flex-col justify-center">
                    {renderContent(project)}
                  </div>
                </>
              )}

              {/* Layout: Split Right (Content on left, Visual on right) */}
              {project.layout === "split-right" && (
                <>
                  <div className="md:col-span-6 order-2 md:order-1 flex flex-col justify-center">
                    {renderContent(project)}
                  </div>
                  <div className="md:col-span-6 order-1 md:order-2 w-full">
                    {renderVisual(project)}
                  </div>
                </>
              )}

              {/* Layout: Full Card */}
              {project.layout === "full-card" && (
                <div className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start w-full">
                  <div className="md:col-span-7 flex flex-col justify-center">
                    {renderContent(project)}
                  </div>
                  <div className="md:col-span-5 w-full">
                    {renderVisual(project)}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
};
