import React from "react"

export const ExpandUp: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path d="M6.71001 14.29L11.3 7.69997C11.69 7.30997 12.32 7.30997 12.71 7.69997L17.3 14.29C17.93 14.92 17.48 16 16.59 16H7.41001C6.52001 16 6.08001 14.92 6.71001 14.29Z"/>
    </svg>
  )
}