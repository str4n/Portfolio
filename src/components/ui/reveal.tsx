"use client"
import {ReactNode, useEffect, useRef, useState} from "react";
import {useIsVisible} from "@/hooks/useIsVisible";

export default function Reveal({children} : {children: ReactNode}) {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref);
  const [isVisibleClass, setIsVisibleClass] = useState("");
  useEffect(() => {
    if (isVisible) {
      setIsVisibleClass("opacity-100");
    } else {
      setIsVisibleClass("opacity-0");
    }
  }, [isVisible]);
  
  return (
    <div ref={ref} className={`transition-opacity ease-in-out duration-700 ${isVisibleClass}`}>
      {children}
    </div>
  )
}