import Hero from "@/components/hero";
import {FloatingNav} from "@/components/ui/floatingNavbar";
import Grid from "@/components/grid";

export default function Home() {
  return (
    <>
      <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={[]}/>
          <Hero/>
          <Grid/>
        </div>
      </main>
    </>
  );
}
