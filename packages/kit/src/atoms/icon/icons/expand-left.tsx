import React from "react"

export const ExpandLeft: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path d="M14.29 17.2899L7.7 12.6999C7.31 12.3099 7.31 11.6799 7.7 11.2899L14.29 6.6999C14.92 6.0699 16 6.5199 16 7.4099V16.5899C16 17.4799 14.92 17.9199 14.29 17.2899Z"/>
    </svg>
  )
}