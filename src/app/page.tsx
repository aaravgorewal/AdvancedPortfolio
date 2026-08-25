import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Roster } from "@/components/Roster";
import { Dates } from "@/components/Dates";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Portal stage */}
      <Hero />

      {/* 2. Philosophy statement fold */}
      <About />

      {/* 3. Catalogue deck */}
      <Projects />

      {/* 4. Core artists roster list */}
      <Roster />

      {/* 5. Live circuits schedules */}
      <Dates />

      {/* 6. Curated footer fold */}
      <Footer />
    </div>
  );
}
