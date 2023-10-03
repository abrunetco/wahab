import React from "react"

export const TTextShort: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path d="M13 13H5C4.45 13 4 13.45 4 14C4 14.55 4.45 15 5 15H13C13.55 15 14 14.55 14 14C14 13.45 13.55 13 13 13ZM5 11H19C19.55 11 20 10.55 20 10C20 9.45 19.55 9 19 9H5C4.45 9 4 9.45 4 10C4 10.55 4.45 11 5 11Z"/>
    </svg>
  )
}