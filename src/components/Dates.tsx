"use client";

import React from "react";
import { Section } from "./ui/SectionGrid";

interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  type: string;
}

interface HackathonItem {
  id: string;
  tag: string; // BUILD / HACK / SHIP / LEAD
  event: string;
  role: string;
  contribution: string;
  result: string;
}

const EXPERIENCE: ExperienceItem[] = [
  {
    id: "1",
    period: "May 2026 – Pres",
    role: "CAMPUS AMBASSADOR",
    organization: "GOOGLE GEMINI",
    type: "DEVELOPER PROGRAM",
  },
  {
    id: "2",
    period: "Jan 2026 – Pres",
    role: "TECHNICAL TEAM MEMBER",
    organization: "IEEE DVSIET",
    type: "TECHNICAL SECTION",
  },
  {
    id: "3",
    period: "Mar 2026 – Jul 2026",
    role: "FRONTEND DEVELOPER",
    organization: "ENTHU.AI",
    type: "INTERNSHIP",
  },
  {
    id: "4",
    period: "Dec 2025 – Aug 2026",
    role: "CAMPUS AMBASSADOR",
    organization: "GEEKSFORGEEKS",
    type: "DEVELOPER PROGRAM",
  },
  {
    id: "5",
    period: "Oct 2024 – Pres",
    role: "CAMPUS COORDINATOR",
    organization: "GDG ON CAMPUS",
    type: "TECHNICAL LEADERSHIP",
  },
  {
    id: "6",
    period: "Jan 2022 – Pres",
    role: "FREELANCE WEB DEVELOPER",
    organization: "SELF-EMPLOYED",
    type: "CLIENT DEVELOPMENT",
  },
  {
    id: "7",
    period: "Oct 2025",
    role: "ORGANIZER (HACKDAY)",
    organization: "HACKTOBERFEST 2025",
    type: "TECHNICAL EVENT",
  },
];

const HACKATHONS: HackathonItem[] = [
  {
    id: "1",
    tag: "BUILD",
    event: "HACKCBS 8.0",
    role: "DEVELOPER",
    contribution: "SAFEBIO VAULT WEB PROTOTYPE",
    result: "VERIFIED DEV CREDENTIAL",
  },
  {
    id: "2",
    tag: "HACK",
    event: "HACKFUSION 2026",
    role: "FULL-STACK ENG",
    contribution: "ARDUINO VOICE COMMAND RELAYS",
    result: "VERIFIED DEV CREDENTIAL",
  },
  {
    id: "3",
    tag: "SHIP",
    event: "RIFT ’26",
    role: "TEAM LEAD",
    contribution: "EDULEARN STUDY PACING ENGINE",
    result: "PROJECT PRESENTATION CREDENTIAL",
  },
  {
    id: "4",
    tag: "LEAD",
    event: "HACKTOBERFEST 2025",
    role: "ORGANIZER",
    contribution: "DVSIET HACKDAY EVENT COORDINATION",
    result: "LEADERSHIP CREDENTIAL",
  },
];

export const Dates = () => {
  return (
    <Section id="dates" className="px-6 md:px-24 py-32 bg-[#101317] border-b border-border-custom text-left">
      
      {/* 1. Experience Timeline */}
      <div className="mb-28">
        <div className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#E8913C] mb-4">
          05 / TIMELINE
        </div>
        <h2 className="font-syne text-4xl md:text-5xl font-bold mb-12 uppercase tracking-tighter text-[#EDE7DC]">
          Experience Timeline
        </h2>
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[10px] uppercase tracking-[0.15em] text-[#6C7378] border-b border-[#EDE7DC]/13 font-sans-body">
                <th className="pb-4 font-semibold w-1/4">Period</th>
                <th className="pb-4 font-semibold w-1/3">Role / Activity</th>
                <th className="pb-4 font-semibold w-1/4">Organization</th>
                <th className="pb-4 font-semibold text-right">Type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EDE7DC]/5 font-sans-body">
              {EXPERIENCE.map((item) => (
                <tr
                  key={item.id}
                  className="group hover:bg-[#EDE7DC]/[0.02] transition-colors duration-200"
                >
                  <td className="py-6 font-syne font-bold text-lg md:text-xl uppercase text-[#EDE7DC] whitespace-nowrap">
                    {item.period}
                  </td>
                  <td className="py-6 text-[#9EA5A8] uppercase text-xs tracking-widest font-semibold">
                    {item.role}
                  </td>
                  <td className="py-6 text-[#9EA5A8] uppercase text-xs tracking-widest font-semibold">
                    {item.organization}
                  </td>
                  <td className="py-6 text-right text-[#E8913C] font-bold text-[10px] tracking-widest font-semibold">
                    {item.type}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Build Hack Ship Section */}
      <div className="border-t border-[#EDE7DC]/13 pt-24 mb-28">
        <div className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#2E6B72] mb-4">
          06 / LOGS
        </div>
        <h2 className="font-syne text-4xl md:text-5xl font-bold mb-12 uppercase tracking-tighter text-[#EDE7DC]">
          Build. Hack. Ship.
        </h2>
        
        <div className="border-t border-[#EDE7DC]/13 divide-y divide-[#EDE7DC]/13 font-sans-body">
          {HACKATHONS.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 hover:bg-[#EDE7DC]/[0.01] transition-colors duration-300 px-2"
            >
              {/* Tag & Event */}
              <div className="flex items-center gap-6 mb-4 md:mb-0">
                <span className="text-[10px] font-bold text-[#E8913C] tracking-widest border border-[#E8913C]/30 px-3 py-1 font-mono uppercase">
                  {item.tag}
                </span>
                <span className="font-syne font-extrabold text-xl uppercase text-[#EDE7DC]">
                  {item.event}
                </span>
              </div>
              
              {/* Role & Contribution */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12 mb-4 md:mb-0 text-left">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#6C7378] font-bold block mb-0.5">Role</span>
                  <span className="text-xs uppercase text-[#9EA5A8] tracking-wider font-semibold">{item.role}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#6C7378] font-bold block mb-0.5">Contribution</span>
                  <span className="text-xs uppercase text-[#EDE7DC] tracking-wider font-semibold">{item.contribution}</span>
                </div>
              </div>

              {/* Result */}
              <div className="text-left md:text-right">
                <span className="text-[9px] uppercase tracking-widest text-[#6C7378] font-bold block mb-0.5 md:text-right">Result</span>
                <span className="text-[10px] font-mono text-[#2E6B72] uppercase tracking-widest font-bold">
                  {item.result}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* 3. Credentials & Metrics Footer Grid */}
      <div className="grid md:grid-cols-2 gap-16 border-t border-[#EDE7DC]/13 pt-24 font-sans-body">
        
        {/* Left: Education */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#2E6B72] mb-4 block">
            07 / ACADEMICS
          </span>
          <h3 className="font-syne text-2xl font-bold uppercase text-[#EDE7DC] mb-6">
            Education
          </h3>
          <div className="border-l border-[#E8913C] pl-6">
            <span className="text-[10px] font-mono text-[#E8913C] uppercase tracking-wider block mb-2 font-semibold">
              August 2024 – July 2028
            </span>
            <h4 className="text-[#EDE7DC] font-bold text-lg mb-1">
              B.Tech in Artificial Intelligence & Machine Learning
            </h4>
            <p className="text-[#9EA5A8] text-xs">
              Dewan V.S. Institute of Engineering and Technology, Meerut
            </p>
          </div>
        </div>

        {/* Right: Metrics */}
        <div>
          <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-[#2E6B72] mb-4 block">
            08 / METRICS
          </span>
          <h3 className="font-syne text-2xl font-bold uppercase text-[#EDE7DC] mb-6">
            Aggregated Output
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <span className="font-syne text-4xl md:text-5xl font-extrabold text-[#E8913C] block mb-2 leading-none">
                15+
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#6C7378] font-bold">
                Hackathons
              </span>
            </div>
            <div>
              <span className="font-syne text-4xl md:text-5xl font-extrabold text-[#E8913C] block mb-2 leading-none">
                06
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#6C7378] font-bold">
                Wins
              </span>
            </div>
            <div>
              <span className="font-syne text-4xl md:text-5xl font-extrabold text-[#E8913C] block mb-2 leading-none">
                02+
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#6C7378] font-bold">
                Deployments
              </span>
            </div>
          </div>
        </div>

      </div>

    </Section>
  );
};
