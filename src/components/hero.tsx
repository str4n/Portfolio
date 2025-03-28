import React from 'react'
import {Spotlight} from "@/components/ui/spotlight";
import {TextGenerateEffect} from "@/components/ui/textGenerateEffect";
import WhiteButton from "@/components/ui/whiteButton";
import {BsArrowDown, BsArrowRight} from "react-icons/bs";


export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <Spotlight/>
      </div>

      <div className="-mt-15">
        <div className="flex flex-col items-center justify-center -mt-15 md:-mt-0">
          <h2 className="uppercase tracking-widest text-s text-center text-blue-50 max-w-80 mb-4">
            Web magic with .NET & Next.JS
          </h2>

          <TextGenerateEffect className="text-center" words="Turning Concepts into Elegant Solutions"/>

          <p className="text-center md:tracking-wide my-3 text-md md:text-xl lg:text-xl text-gray-300">Hi, I&apos;m
            Kamil, a Full Stack Developer based in Poland</p>

          <a href="#about">
            <WhiteButton text="Show my work" icon={<BsArrowRight size={18}/>} className="mt-5 px-12 py-4"/>
          </a>
        </div>

        <div className="absolute top-[80vh] right-[5vw] sm:top-[80vh] sm:right-[2vw] md:right-[5vw] md:top-[90vh] lg:top-[90vh] lg:right-[17vw]">
          <p className="text-[#737373] flex items-center">
            <span>Scroll to Explore</span>
            <span className="ml-1"><BsArrowDown/></span>
          </p>
        </div>
      </div>
    </div>
  )
}
