import React from 'react'
import {projects} from "@/data";
import {BsArrowUpRight} from "react-icons/bs";
import Reveal from "@/components/ui/reveal";
import Image from 'next/image';

export default function Projects() {
  return (
    <div id="projects" className="text-white mt-40">
      <div className="">
        <h1 className="text-white text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug tracking-wide font-bold">A small selection of {' '}
          <span className="text-blue-50">
            recent projects
          </span>
        </h1>
      </div>
      
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 p-5 gap-16 mt-5 md:mt-15 max-w-7xl mx-auto">
        {projects.map(({id, title, des, img, iconLists, link}) => (
          <Reveal key={id} threshold={0.25}>
            <div className="flex flex-col justify-center border border-white/[0.1] rounded-3xl px-6 transform transition-all duration-200 hover:scale-102">
              <div className="relative flex justify-center items-center mt-8 md:mt-6">
                <div className="relative w-full h-full bg-[#010101] overflow-hidden lg:rounded-3xl [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]">
                  <Image 
                    src="/bg.png" 
                    alt="bg-img" 
                    width={552}
                    height={330}
                    className="[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]" />
                </div>

                <Image 
                  src={img} 
                  alt={title} 
                  width={1366}
                  height={768}
                  className="z-10 absolute bottom-0"/>
              </div>

              <h1 className="font-medium lg:text-2xl md-text-xl text-base line-clamp-1 tracking-wide mt-5 mb-2">
                {title}
              </h1>

              <p className="lg:text-xl font-extralight text-sm line-clamp-2 mb-6 text-blue-50">
                {des}
              </p>

              <div className="flex items-center justify-between mb-7">
                <div className="flex items-center text-white">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.1] bg-[#050505] rounded-full lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center"
                      style={{transform: `translateX(-${5 * index * 2}px)`}}>
                      <img src={icon} alt={icon} className="p-2"/>
                    </div>
                  ))}
                </div>

                <a href={link}>
                  <div className="flex justify-center items-center text-blue-100">
                    <p className="lg:text-xl md:text-xs text-sm w-10 sm:w-auto">Check Github Repo</p>
                    <BsArrowUpRight className="ms-3 sm:text-xl"/>
                  </div>
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
