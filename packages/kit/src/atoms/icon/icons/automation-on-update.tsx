import React from "react"

export const AutomationOnUpdate: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path d="M21 9.5V4.21C21 3.76 20.46 3.54 20.15 3.86L18.37 5.64C16.56 3.83 13.98 2.79 11.16 3.04C6.97001 3.42 3.52001 6.79 3.06001 10.98C2.46001 16.4 6.69001 21 12 21C16.59 21 20.38 17.56 20.93 13.12C21 12.52 20.53 12 19.93 12C19.43 12 19.01 12.37 18.95 12.86C18.52 16.35 15.51 19.05 11.9 19C8.19001 18.95 5.06001 15.82 5.00001 12.1C4.94001 8.2 8.11001 5 12 5C13.93 5 15.68 5.79 16.95 7.05L14.86 9.14C14.54 9.46 14.76 10 15.21 10H20.5C20.78 10 21 9.78 21 9.5Z"/>
    </svg>
  )
}