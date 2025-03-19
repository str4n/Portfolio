import { cn } from "@/lib/utils";
import {BackgroundGradientAnimation} from "@/components/ui/backgroundGrandient";
import {InfiniteMovingTechnologies} from "@/components/ui/infiniteMovingTechnologies";
import {technologies} from "@/data";

export const BentoGrid = ({
                            className,
                            children,
                          }: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
                                className,
                                title,
                                description,
                                id,
                                img,
                                imgClassName,
                                titleClassName,
                                spareImg
                              }: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const middle = Math.floor(technologies.length / 2);
  const firstHalf = technologies.slice(0, middle);
  const secondHalf = technologies.slice(middle);

  const tech1 = [...firstHalf, ...firstHalf.map(item => ({ ...item, id: item.id + firstHalf.length }))];
  const tech2 = [...secondHalf, ...secondHalf.map(item => ({ ...item, id: item.id + secondHalf.length }))];
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 " +
        "shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]", 
        className
      )}
      style={{background: '#000'}}
    >
      <div className={`${id === 4} && 'flex justify-center h-full'`}>
        <div className="w-full h-full absolute">
          {img && 
            (<img 
              src={img} 
              alt={img}
              className={cn(imgClassName, "object-cover object-center")} />)}
        </div>
        
        <div className={`absolute right-0 -bottom-5 ${id === 3 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center w-full h-full"}/>
          )}
        </div>

        {id === 4 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold"/>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative px-5 p-5 lg:p-10')}>
          <div className="font-sans font-extralight text-white text-xs md:text-base lg:text-base z-10">
            {description}
          </div>

          <div className={`font-sans font-bold text-white text-2xl lg:text-3xl md:text-3xl max-w-96 z-10 ${id === 1 && 'lg:text-5xl'}`}>
            {title}
          </div>
        </div>

        {id === 1 && (
          <div className="pb-5">
            <div>
              <InfiniteMovingTechnologies items={tech1}/>
              <InfiniteMovingTechnologies items={tech2} direction="right"/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};