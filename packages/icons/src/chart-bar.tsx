import React from "react";

export const ChartBar: React.FC<React.SVGProps<SVGSVGElement>> = () => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 3C4 2.44772 3.55228 2 3 2C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20H4V3Z" fill="black"/>
      <path d="M19 9C19 8.44772 18.5523 8 18 8C17.4477 8 17 8.44772 17 9V17C17 17.5523 17.4477 18 18 18C18.5523 18 19 17.5523 19 17V9Z" fill="black"/>
      <path d="M13 4C13.5523 4 14 4.44772 14 5V17C14 17.5523 13.5523 18 13 18C12.4477 18 12 17.5523 12 17V5C12 4.44772 12.4477 4 13 4Z" fill="black"/>
      <path d="M9 14C9 13.4477 8.55228 13 8 13C7.44772 13 7 13.4477 7 14V17C7 17.5523 7.44772 18 8 18C8.55228 18 9 17.5523 9 17V14Z" fill="black"/>
    </svg>
  )
}