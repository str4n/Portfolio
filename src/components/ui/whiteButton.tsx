import React, {JSX} from 'react'

interface buttonProps {
  text: string
  icon?: JSX.Element, 
  handleClick?: () => void
  className?: string
}

function WhiteButton({text, icon, className} : buttonProps) {
  return (
    <button
      className={`flex items-center px-12 py-4 rounded-full bg-white font-bold text-black text-sm tracking-widest 
      uppercase transform scale-100 hover:scale-105 transition-all duration-300 ease-in-out hover:cursor-pointer ${className}`}>
      <span>{text}</span>
      <span className="ml-2">{icon}</span>
    </button>
  )
}

export default WhiteButton
