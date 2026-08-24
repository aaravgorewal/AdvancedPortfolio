import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Capabilities } from "@/components/Capabilities";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

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

      {/* Education Section */}
      <Education />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
