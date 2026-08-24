import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Capabilities } from "@/components/Capabilities";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <Hero />

      {/* Selected Work Section */}
      <Projects />

      {/* About Section */}
      <About />

      {/* Capabilities Section */}
      <Capabilities />

      {/* Experience Section */}
      <Experience />

      {/* Achievements Section */}
      <Achievements />

      <section
        id="contact"
        className="min-h-screen w-full bg-background border-t border-border-custom flex items-center justify-center px-5 md:px-16"
      >
        <div className="max-w-[1200px] mx-auto w-full text-center">
          <h2 className="font-serif-display text-3xl md:text-5xl uppercase tracking-tight text-secondary">
            Contact
          </h2>
          <p className="mt-4 text-secondary/60">Coming soon.</p>
        </div>
      </section>
    </div>
  );
}
