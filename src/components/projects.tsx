import React from 'react'
import {projects} from "@/data";

export default function Projects() {
  return (
    <div id="projects" className="text-white py-20 md:py-25 lg:py-30">
      <div className="">
        <h1 className="text-white text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug tracking-wide font-bold">A small selection of {' '}
          <span className="">
            recent projects
          </span>
        </h1>
      </div>
      
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({id, title, des, img, iconLists, link}) => (
          <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
            {title}
          </div>))}
      </div>
    </div>
  )
}
