import React from "react"

export const ExpandDown: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path d="M6.71001 9.71L11.3 16.3C11.69 16.69 12.32 16.69 12.71 16.3L17.3 9.71C17.93 9.08 17.48 8 16.59 8H7.41001C6.52001 8 6.08001 9.08 6.71001 9.71Z"/>
    </svg>
  )
}