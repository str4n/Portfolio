import React from 'react'
import {BentoGrid, BentoGridItem} from "@/components/ui/bentoGrid";

export default function Grid() {
  return (
    <section id="about">
      <BentoGrid>
        {[
          {id:1, title: "title", description: "description"},
          {id:2, title: "title", description: "description"},
          {id:3, title: "title", description: "description"},
        ].map((item, i) => (
          <BentoGridItem id={item.id} key={item.id} title={item.title} description={item.description} />
        ))}
      </BentoGrid>
    </section>
  )
}