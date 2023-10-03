import React from "react"

export const ArrowDown: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path d="M11 5.00002V16.17L6.12 11.29C5.73 10.9 5.09 10.9 4.7 11.29C4.31 11.68 4.31 12.31 4.7 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5.00002C13 4.45002 12.55 4.00002 12 4.00002C11.45 4.00002 11 4.45002 11 5.00002Z"/>
    </svg>
  )
}