import { Hero } from "@/components/portfolio/hero/hero";
import { Marquee } from "@/components/portfolio/marquee/marquee";
import { About } from "@/components/portfolio/about/about";
import { Stats } from "@/components/portfolio/stats/stats";
import { Skills } from "@/components/portfolio/skills/skills";
import { Projects } from "@/components/portfolio/projects/projects";
import { Services } from "@/components/portfolio/services/services";
import { Process } from "@/components/portfolio/process/process";
import { Testimonials } from "@/components/portfolio/testimonials/testimonials";
import { Contact } from "@/components/portfolio/contact/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Stats />
      <Skills />
      <Projects />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
    </>
  );
}
