import React from "react"

export const ArrowDropLeft: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path d="M12.29 8.70999L9.7 11.3C9.31 11.69 9.31 12.32 9.7 12.71L12.29 15.3C12.92 15.93 14 15.48 14 14.59L14 9.40999C14 8.51999 12.92 8.07999 12.29 8.70999Z"/>
    </svg>
  )
}