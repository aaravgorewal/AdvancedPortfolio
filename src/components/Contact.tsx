import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { Section } from "./ui/SectionGrid";

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Contact = () => {
  return (
    <Section id="contact" className="border-b-0 pb-24 md:pb-36">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        
        {/* Left Column: Index/Header */}
        <div className="md:col-span-4 flex flex-col items-start text-left">
          <span className="font-sans-body text-xs font-semibold uppercase tracking-wider text-secondary/60 mb-2">
            06 / CONTACT
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl uppercase tracking-tight text-foreground">
            Connect
          </h2>
        </div>

        {/* Right Column: Spacious composition */}
        <div className="md:col-span-8 flex flex-col items-start text-left font-sans-body">
          <h3 className="font-serif-display text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight mb-12 uppercase max-w-[600px]">
            Let&apos;s build something useful.
          </h3>

          <div className="space-y-6 w-full pt-4 border-t border-border-custom/50">
            {/* Email link */}
            <a
              href="mailto:sainiaarav331@gmail.com"
              className="group flex items-center justify-between py-4 border-b border-border-custom/30 hover:border-accent transition-colors duration-300 focus-ring"
              aria-label="Send email to sainiaarav331@gmail.com"
            >
              <div className="flex items-center gap-4">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm sm:text-base font-semibold text-foreground">
                  sainiaarav331@gmail.com
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-secondary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </a>

            {/* LinkedIn link */}
            <a
              href="https://www.linkedin.com/in/aaravgorewal"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-4 border-b border-border-custom/30 hover:border-accent transition-colors duration-300 focus-ring"
              aria-label="Visit Aarav Saini's LinkedIn Profile"
            >
              <div className="flex items-center gap-4">
                <Linkedin className="w-4 h-4 text-accent" />
                <span className="text-sm sm:text-base font-semibold text-foreground">
                  linkedin.com/in/aaravgorewal
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-secondary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </a>
          </div>
        </div>

      </div>
    </Section>
  );
};
