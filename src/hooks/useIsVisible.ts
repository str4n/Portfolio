import {RefObject, useEffect, useState} from "react";

export function useIsVisible(ref : RefObject<null | HTMLDivElement> | null) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting)
      }, {threshold: 0.3}
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