import React from "react"

export const View: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M5 22C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5ZM5 4C4.44772 4 4 4.44772 4 5V8H20V5C20 4.44772 19.5523 4 19 4H5ZM8 10H4V19C4 19.5523 4.44772 20 5 20H8V10ZM10 20V10H20V19C20 19.5523 19.5523 20 19 20H10Z"/>
    </svg>
  )
}