import React from 'react'
import {Spotlight} from "@/components/ui/spotlight";
import {BackgroundBeams} from "@/components/ui/backgroundBeams";
import {TextGenerateEffect} from "@/components/ui/textGenerateEffect";
import WhiteButton from "@/components/ui/whiteButton";
import {BsArrowRight} from "react-icons/bs";


export default function Hero() {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight/>
      </div>

      <div className="h-80">
        <div>
          <BackgroundBeams/>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-50 max-w-80">
            Web magic with .NET & Next.JS
          </h2>

          <TextGenerateEffect className="text-center" words="Turning Concepts into Elegant Solutions"/>
          
          <p className="text-center md:tracking-wide my-3 text-sm md:text-lg lg:text-lg text-gray-300">Hi, I&apos;m Kamil, a Full Stack Developer based in Poland</p>

          <WhiteButton text="Show my projects" icon={<BsArrowRight size={18}/>} className="mt-5"/>
        </div>
      </div>

    </div>
  )
}
