import Hero from "@/components/hero";
import {FloatingNav} from "@/components/ui/floatingNavbar";
import Grid from "@/components/grid";
import Reveal from "@/components/ui/reveal";
import {navItems} from "@/data";

export default function Home() {
  return (
    <>
      <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto scroll-m-12 scroll-smooth">
        <div className="max-w-9xl w-full">
          <FloatingNav navItems={[]}/>
          <Hero/>
          <Reveal>
            <Grid/>
          </Reveal>
        </div>
      </main>
    </>
  );
}
