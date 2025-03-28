import {RefObject, useEffect, useState} from "react";

export function useIsVisible(ref : RefObject<null | HTMLDivElement> | null, threshold = 0.2) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting)
      }, {threshold: threshold}
      );

      if (ref && ref.current instanceof HTMLDivElement) {
        observer.observe(ref.current);
      }
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
}