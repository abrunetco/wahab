import React from "react"

export const ExpandRight: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path d="M9.71 17.2899L16.3 12.6999C16.69 12.3099 16.69 11.6799 16.3 11.2899L9.71 6.6999C9.08 6.0699 8 6.5199 8 7.4099V16.5899C8 17.4799 9.08 17.9199 9.71 17.2899Z"/>
    </svg>
  )
}