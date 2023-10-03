import React from "react"

export const RemoveFilled: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47 6.47 2 12 2C17.53 2 22 6.47 22 12C22 17.53 17.53 22 12 22C6.47 22 2 17.53 2 12ZM13.89 8.69997L12 10.59L10.11 8.69997C9.72 8.30997 9.09 8.30997 8.7 8.69997C8.31 9.08997 8.31 9.71997 8.7 10.11L10.59 12L8.7 13.89C8.31 14.28 8.31 14.91 8.7 15.3C9.09 15.69 9.72 15.69 10.11 15.3L12 13.41L13.89 15.3C14.28 15.69 14.91 15.69 15.3 15.3C15.69 14.91 15.69 14.28 15.3 13.89L13.41 12L15.3 10.11C15.69 9.71997 15.69 9.08997 15.3 8.69997C14.91 8.31997 14.27 8.31997 13.89 8.69997Z"/>
    </svg>
  )
}