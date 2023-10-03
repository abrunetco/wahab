import React from "react"

export const Output: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path d="M5 19H19V18C19 17.45 19.45 17 20 17C20.55 17 21 17.45 21 18V19C21 20.1 20.11 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V6C21 6.55 20.55 7 20 7C19.45 7 19 6.55 19 6V5H5V19Z"/>
      <path d="M21.3 12.7L17.71 16.29C17.32 16.68 16.68 16.68 16.29 16.29C15.9 15.9 15.9 15.27 16.29 14.88L18.17 13H10C9.45 13 9 12.55 9 12C9 11.45 9.45 11 10 11H18.17L16.3 9.10997C15.91 8.71997 15.91 8.08997 16.3 7.69997C16.69 7.30997 17.32 7.30997 17.71 7.69997L21.3 11.29C21.69 11.68 21.69 12.31 21.3 12.7Z"/>
    </svg>
  )
}