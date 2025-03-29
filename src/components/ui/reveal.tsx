"use client"
import {ReactNode, useEffect, useRef, useState} from "react";
import {useIsVisible} from "@/hooks/useIsVisible";

interface RevealProps {
  children: ReactNode;
  threshold?: number;
}

export default function Reveal({children, threshold = 0.2} : RevealProps) {
  const ref = useRef(null);
  const isVisible = useIsVisible(ref, threshold);
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