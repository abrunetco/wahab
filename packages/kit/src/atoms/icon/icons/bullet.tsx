import React from "react"

export const Bullet: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <circle cx="12" cy="12" r="4.4"/>
    </svg>
  )
}