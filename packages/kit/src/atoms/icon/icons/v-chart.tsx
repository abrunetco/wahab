import React from "react"

export const VChart: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM11 16C11 16.55 11.45 17 12 17C12.55 17 13 16.55 13 16V8C13 7.45 12.55 7 12 7C11.45 7 11 7.45 11 8V16ZM7 16C7 16.55 7.45 17 8 17C8.55 17 9 16.55 9 16V11C9 10.45 8.55 10 8 10C7.45 10 7 10.45 7 11V16ZM16 17C15.45 17 15 16.55 15 16V14C15 13.45 15.45 13 16 13C16.55 13 17 13.45 17 14V16C17 16.55 16.55 17 16 17Z"/>
    </svg>
  )
}