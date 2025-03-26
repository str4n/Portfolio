import React, {JSX} from 'react'
import {cn} from "@/lib/utils";

interface buttonProps {
  text: string
  icon?: JSX.Element, 
  handleClick?: () => void
  className?: string
}

function WhiteButton({text, icon, className} : buttonProps) {
  return (
    <button
      className={cn(className, 'flex items-center rounded-full bg-white font-bold text-black text-sm tracking-widest uppercase transform scale-100 hover:scale-105 transition-all duration-300 ease-in-out hover:cursor-pointer')} >
      <span>{text}</span>
      <span className="ml-2">{icon}</span>
    </button>
  )
}

export default WhiteButton
