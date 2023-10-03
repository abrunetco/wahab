import React from "react"

export const ChartScatter: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path d="M4 3C4 2.44772 3.55228 2 3 2C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20H4V3Z"/>
      <path d="M8.5 13C9.33 13 10 13.67 10 14.5C10 15.33 9.33 16 8.5 16C7.67 16 7 15.33 7 14.5C7 13.67 7.67 13 8.5 13Z"/>
      <path d="M14.5 12.5C14.5 11.67 13.83 11 13 11C12.17 11 11.5 11.67 11.5 12.5C11.5 13.33 12.17 14 13 14C13.83 14 14.5 13.33 14.5 12.5Z"/>
      <path d="M17.5 13C18.33 13 19 13.67 19 14.5C19 15.33 18.33 16 17.5 16C16.67 16 16 15.33 16 14.5C16 13.67 16.67 13 17.5 13Z"/>
      <path d="M12.25 8.5C12.25 7.67 11.58 7 10.75 7C9.92 7 9.25 7.67 9.25 8.5C9.25 9.33 9.92 10 10.75 10C11.58 10 12.25 9.33 12.25 8.5Z"/>
      <path d="M15.25 5C16.08 5 16.75 5.67 16.75 6.5C16.75 7.33 16.08 8 15.25 8C14.42 8 13.75 7.33 13.75 6.5C13.75 5.67 14.42 5 15.25 5Z"/>
    </svg>
  )
}