import React from "react"

export const TTextShortMultiple: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path d="M5 13H13C13.55 13 14 13.45 14 14C14 14.55 13.55 15 13 15H5C4.45 15 4 14.55 4 14C4 13.45 4.45 13 5 13Z"/>
      <path d="M19 11H5C4.45 11 4 10.55 4 10C4 9.45 4.45 9 5 9H19C19.55 9 20 9.45 20 10C20 10.55 19.55 11 19 11Z"/>
      <path d="M8 24C8.55228 24 9 23.5523 9 23C9 22.4477 8.55228 22 8 22C7.44772 22 7 22.4477 7 23C7 23.5523 7.44772 24 8 24Z"/>
      <path d="M12 24C12.5523 24 13 23.5523 13 23C13 22.4477 12.5523 22 12 22C11.4477 22 11 22.4477 11 23C11 23.5523 11.4477 24 12 24Z"/>
      <path d="M17 23C17 23.5523 16.5523 24 16 24C15.4477 24 15 23.5523 15 23C15 22.4477 15.4477 22 16 22C16.5523 22 17 22.4477 17 23Z"/>
    </svg>
  )
}