import {BentoGrid, BentoGridItem} from "@/components/ui/bentoGrid";
import {gridItems} from "@/data";

export default function Grid() {
  return (
      <div id="about" className="md:py-30 h-screen">
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[8rem] lg:auto-rows-[10rem]">
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
      </div>
  )
}