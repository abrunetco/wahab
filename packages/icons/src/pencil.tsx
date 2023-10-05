import React from "react";

export const Pencil: React.FC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="4.4" fill="none"/>
      <path fill="black" d="M17.5,3.2c-0.3-0.3-0.8-0.3-1.2,0c-0.3,0.3-0.3,0.8,0,1.2l3.3,3.3c0.3,0.3,0.8,0.3,1.2,0c0.3-0.3,0.3-0.8,0-1.2L17.5,3.2z"/>
      <path fill="black" d="M15,5.7c-0.3-0.3-0.8-0.3-1.2,0l-9.4,9.4c-0.1,0.1-0.2,0.2-0.2,0.4L3,20c-0.1,0.3,0,0.6,0.2,0.8
      	C3.4,21,3.7,21.1,4,21l4.5-1.2c0.1,0,0.3-0.1,0.4-0.2l9.4-9.4c0.3-0.3,0.3-0.8,0-1.2L15,5.7z M5,19l0.8-2.9l8.7-8.7l2.1,2.1
      	l-8.7,8.7L5,19z"/>
    </svg>
  )
}