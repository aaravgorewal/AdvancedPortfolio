import React from "react";
import { Section } from "./ui/SectionGrid";

export const Education = () => {
  return (
    <Section id="education" className="border-b border-border-custom">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        {/* Left Column: Index/Header */}
        <div className="md:col-span-4 flex flex-col items-start text-left">
          <span className="font-sans-body text-xs font-semibold uppercase tracking-wider text-secondary/60 mb-2">
            06 / ACADEMICS
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl uppercase tracking-tight text-foreground">
            Education
          </h2>
        </div>

        {/* Right Column: Content */}
        <div className="md:col-span-8 flex flex-col items-start text-left font-sans-body">
          <div className="border-l border-border-custom pl-6 sm:pl-8 py-2">
            <span className="text-[10px] font-mono text-accent uppercase tracking-wider font-semibold">
              August 2024 – July 2028
            </span>
            <h3 className="text-base sm:text-lg font-bold text-foreground mt-1 mb-2">
              B.Tech in Artificial Intelligence & Machine Learning
            </h3>
            <p className="text-xs sm:text-sm text-secondary leading-relaxed">
              Dewan V.S. Institute of Engineering and Technology, Meerut.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
