import React from "react"

export const ArrowDropUp: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path d="M15.29 12.29L12.7 9.7C12.31 9.31 11.68 9.31 11.29 9.7L8.69999 12.29C8.06999 12.92 8.51999 14 9.40999 14H14.59C15.48 14 15.92 12.92 15.29 12.29Z"/>
    </svg>
  )
}