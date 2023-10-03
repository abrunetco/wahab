import React from "react"

export const Sidebar: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M5 22H19C20.7 22 22 20.7 22 19V5C22 3.3 20.7 2 19 2H5C3.3 2 2 3.3 2 5V19C2 20.7 3.3 22 5 22ZM4 5C4 4.4 4.4 4 5 4H8V20H5C4.4 20 4 19.6 4 19V5ZM10 20H19C19.6 20 20 19.6 20 19V5C20 4.4 19.6 4 19 4H10V20Z"/>
    </svg>
  )
}