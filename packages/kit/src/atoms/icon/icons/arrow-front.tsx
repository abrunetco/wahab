import React from "react"

export const ArrowFront: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path d="M5.00002 11H16.17L11.29 6.12C10.9 5.73 10.9 5.09 11.29 4.7C11.68 4.31 12.31 4.31 12.7 4.7L19.29 11.29C19.68 11.68 19.68 12.31 19.29 12.7L12.7 19.29C12.31 19.68 11.68 19.68 11.29 19.29C10.9 18.9 10.9 18.27 11.29 17.88L16.17 13H5.00002C4.45002 13 4.00002 12.55 4.00002 12C4.00002 11.45 4.45002 11 5.00002 11Z"/>
    </svg>
  )
}