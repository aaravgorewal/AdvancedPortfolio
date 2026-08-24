import React from "react";
import { Section } from "./ui/SectionGrid";

interface TimelineItem {
  period: string;
  role: string;
  organization: string;
  description: string;
}

const EXPERIENCE_ITEMS: TimelineItem[] = [
  {
    period: "May 2026 – Present",
    role: "Campus Ambassador",
    organization: "Google Gemini",
    description: "Representing Google Gemini developer technologies. Hosting AI prompt-engineering bootcamps, technical workshops, and hackathons to drive developer adoption of Gemini APIs.",
  },
  {
    period: "Jan 2026 – Present",
    role: "Technical Team Member",
    organization: "IEEE",
    description: "Collaborating on engineering projects, technical research presentations, and developer-centric events. Supporting team execution during campus tech challenges.",
  },
  {
    period: "Mar 2026 – Jul 2026",
    role: "Frontend Developer",
    organization: "Enthu.AI",
    description: "Engineered responsive dashboard layouts and web user interfaces using React.js. Focused on optimizing load times and ensuring proper state-management structures.",
  },
  {
    period: "Dec 2025 – Aug 2026",
    role: "Campus Ambassador",
    organization: "GeeksforGeeks",
    description: "Led programming study circles, technical webinars, and competitive coding drives. Facilitated student outreach for algorithm tutorials and software development preparation.",
  },
  {
    period: "Oct 2024 – Present",
    role: "Campus Coordinator",
    organization: "GDG on Campus DVSIET",
    description: "Coordinating student developers within the Google Developer Groups campus framework. Organizing hands-on code labs, tech sessions, and overseeing team project development.",
  },
  {
    period: "Jan 2022 – Present",
    role: "Freelance Web Developer",
    organization: "Self-Employed",
    description: "Delivering custom frontend applications, e-commerce solutions, SEO-optimized business websites, and tailored WhatsApp integration features to private clients.",
  },
];

const LEADERSHIP_ITEMS = [
  {
    title: "Google Developer Groups (GDG)",
    role: "Campus Coordinator",
    desc: "Spearheaded student developer events, hands-on codelabs, and technical team coordinates.",
  },
  {
    title: "IEEE Technical Section",
    role: "Technical Team Member",
    desc: "Contributed to tech presentations, engineering projects, and cross-team development drives.",
  },
  {
    title: "AWS / DIIF Community",
    role: "Cloud Student Group",
    desc: "Engaged in cloud computing workshops and serverless development tutorials using AWS.",
  },
  {
    title: "Open Source & E-Cell",
    role: "Contributor & Innovation Member",
    desc: "Contributed to repository projects during Hacktoberfest and supported startup hackathons at the E-Cell.",
  },
];

export const Experience = () => {
  return (
    <Section id="experience" className="border-b border-border-custom">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
        
        {/* Left Column: Title / index */}
        <div className="md:col-span-4 flex flex-col items-start text-left">
          <span className="font-sans-body text-xs font-semibold uppercase tracking-wider text-secondary/60 mb-2">
            04 / EXPERIENCE
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl uppercase tracking-tight text-foreground mb-8">
            Timeline
          </h2>
          <p className="font-sans-body text-xs sm:text-sm text-secondary/70 max-w-[280px] leading-relaxed hidden md:block">
            Chronological record of roles, student leadership, and industry engagements.
          </p>
        </div>

        {/* Right Column: Timeline details */}
        <div className="md:col-span-8 flex flex-col text-left font-sans-body">
          <div className="relative border-l border-border-custom pl-6 sm:pl-8 space-y-12">
            {EXPERIENCE_ITEMS.map((item, index) => (
              <div key={index} className="relative group">
                {/* Timeline node dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-background bg-border-custom group-hover:bg-accent transition-colors duration-300" />
                
                {/* Period */}
                <span className="text-[10px] font-mono text-accent uppercase tracking-wider font-semibold">
                  {item.period}
                </span>

                {/* Header (Role & Org) */}
                <h3 className="text-base sm:text-lg font-bold text-foreground mt-1 mb-2">
                  {item.role} <span className="text-secondary/50 font-normal">at</span> {item.organization}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-secondary leading-relaxed max-w-[620px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Leadership and Community Section */}
          <div className="mt-20 border-t border-border-custom/50 pt-16">
            <span className="font-sans-body text-[10px] font-semibold uppercase tracking-widest text-accent mb-4 block">
              Leadership & Community Involvement
            </span>
            <h3 className="font-serif-display text-2xl font-bold tracking-tight text-foreground mb-8">
              Activity Beyond Code
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {LEADERSHIP_ITEMS.map((item, index) => (
                <div
                  key={index}
                  className="bg-surface border border-border-custom p-6 transition-colors duration-300 hover:border-accent"
                >
                  <h4 className="text-sm font-bold text-foreground mb-1 uppercase tracking-wider">
                    {item.title}
                  </h4>
                  <span className="text-[10px] font-mono text-accent uppercase tracking-wider block mb-3 font-semibold">
                    {item.role}
                  </span>
                  <p className="text-xs text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </Section>
  );
};
