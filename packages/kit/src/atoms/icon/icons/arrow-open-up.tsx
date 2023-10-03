import React from "react"

export const ArrowOpenUp: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path d="M15.88 14.71L12 10.83L8.12 14.71C7.73 15.1 7.1 15.1 6.71 14.71C6.32 14.32 6.32 13.69 6.71 13.3L11.3 8.71C11.69 8.32 12.32 8.32 12.71 8.71L17.3 13.3C17.69 13.69 17.69 14.32 17.3 14.71C16.91 15.09 16.27 15.1 15.88 14.71V14.71Z"/>
    </svg>
  )
}