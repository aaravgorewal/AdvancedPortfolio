import React from "react";
import { Section } from "./ui/SectionGrid";

export const About = () => {
  return (
    <Section id="about" className="border-b border-border-custom">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        
        {/* Left Column: Section Header */}
        <div className="md:col-span-4 flex flex-col items-start text-left">
          <span className="font-sans-body text-xs font-semibold uppercase tracking-wider text-secondary/60 mb-2">
            02 / IDENTITY
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl uppercase tracking-tight text-foreground">
            About Me
          </h2>
        </div>

        {/* Right Column: Profile Positioning */}
        <div className="md:col-span-8 flex flex-col items-start text-left space-y-6 md:space-y-8 font-sans-body">
          <p className="font-serif-display text-xl sm:text-2xl text-foreground font-medium leading-relaxed max-w-[650px] border-b border-border-custom/50 pb-6">
            I am an AI & ML Engineering student focused on building real-world systems that go beyond theory.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-2">
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-accent">
                Hackathon-Driven Approach
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                I prioritize learning by building, experimenting, and solving practical engineering problems under strict constraints.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-accent">
                Core Systems Focus
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                My work involves developing intelligent agents, full-stack systems, and bridging soft AI models with physical microcontroller hardware.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-accent">
                Product Engineering
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                I design clean interfaces and logical backend structures to turn raw algorithms into accessible digital products.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-accent">
                Action-Led Theory
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                I aim to build secure, robust applications with clean architectures and clear focus on user data privacy.
              </p>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};
