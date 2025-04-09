import Hero from "@/components/hero";
import {FloatingNav} from "@/components/ui/floatingNavbar";
import Grid from "@/components/grid";
import Reveal from "@/components/ui/reveal";
import {navItems} from "@/data";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import Companies from "@/components/companies";

export default function Home() {
  return (
    <>
      <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto scroll-m-12 scroll-smooth">
        <div className="max-w-9xl w-full">
          <FloatingNav navItems={navItems}/>
          <Hero/>
          
          <Reveal>
            <Grid/>
          </Reveal>
          
          <Reveal threshold={0.1}>
            <Projects/>
          </Reveal>

          <Reveal>
            <Companies />
          </Reveal>
          
          <Footer/>
        </div>
      </main>
    </>
  );
}
