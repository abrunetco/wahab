import React from "react"

export const Redo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8C7.34004 8 3.76004 10.42 2.06004 13.93C1.74004 14.6 2.10004 15.4 2.81004 15.64C3.40004 15.84 4.04004 15.56 4.31004 15C5.61004 12.34 8.34004 10.5 11.5 10.5C13.45 10.5 15.23 11.22 16.62 12.38L14.71 14.29C14.08 14.92 14.52 16 15.41 16H21C21.55 16 22 15.55 22 15V9.41C22 8.52 20.92 8.07 20.29 8.7L18.4 10.6Z"/>
    </svg>
  )
}