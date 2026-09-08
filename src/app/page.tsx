import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Roster } from "@/components/Roster";
import { Dates } from "@/components/Dates";
import { Footer } from "@/components/Footer";
import { Achievements } from "@/components/Achievements";

export default function Home() {
  return (
    <div className="flex flex-col w-full">

      <Hero />


      <About />


      <Projects />


      <Roster />


      <Dates />

      {/* 6. Proof of Work */}
      <Achievements />

      {/* 7. Curated footer fold */}
      <Footer />
    </div>
  );
}
