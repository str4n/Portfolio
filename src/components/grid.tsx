import React from 'react'
import {BentoGrid, BentoGridItem} from "@/components/ui/bentoGrid";
import {gridItems} from "@/data";

export default function Grid() {
  return (
    <section id="about">
      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[16rem] lg:auto-rows-[20rem]">
        {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
          <BentoGridItem 
            id={id} 
            key={id} 
            title={title} 
            description={description} 
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}/>
        ))}
      </BentoGrid>
    </section>
  )
}