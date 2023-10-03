import React from "react"

export const TBlank: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 16H8V18H4V16ZM10 16H14V18H10V16ZM20 16H16V18H20V16Z"/>
    </svg>
  )
}