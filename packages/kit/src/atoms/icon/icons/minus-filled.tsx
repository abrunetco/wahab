import React from "react"

export const MinusFilled: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16 13C10.9054 13 12.4876 13 8 13C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11C12.4805 11 10.9146 11 16 11C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13Z"/>
    </svg>
  )
}