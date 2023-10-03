import React from "react"

export const TLinkedObject: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path d="M6 3C4.34315 3 3 4.34315 3 6V7H5V6C5 5.44772 5.44772 5 6 5H7V3H6Z"/>
      <path d="M3 18V17H5V18C5 18.5523 5.44772 19 6 19H7V21H6C4.34315 21 3 19.6569 3 18Z"/>
      <path d="M5 15H3V13H5V15Z"/>
      <path d="M5 11H3V9H5V11Z"/>
      <path d="M11 21H9V19H11V21Z"/>
      <path d="M13 21H15V19H13V21Z"/>
      <path d="M18 21H17V19H18C18.5523 19 19 18.5523 19 18V17H21V18C21 19.6569 19.6569 21 18 21Z"/>
      <path d="M21 15V13H19V15H21Z"/>
      <path d="M21 11V9H19V11H21Z"/>
      <path d="M21 7V6C21 4.34315 19.6569 3 18 3H17V5H18C18.5523 5 19 5.44772 19 6V7H21Z"/>
      <path d="M15 5V3H13V5H15Z"/>
      <path d="M9 3H11V5H9V3Z"/>
      <path d="M10.5 9C9.67157 9 9 9.67157 9 10.5V13.5C9 14.3284 9.67157 15 10.5 15H13.5C14.3284 15 15 14.3284 15 13.5V10.5C15 9.67157 14.3284 9 13.5 9H10.5Z"/>
    </svg>
  )
}