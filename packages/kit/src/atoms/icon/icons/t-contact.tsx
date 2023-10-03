import React from "react"

export const TContact: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path d="M14.25 9C14.25 7.76 13.24 6.75 12 6.75C10.76 6.75 9.75 7.76 9.75 9C9.75 10.24 10.76 11.25 12 11.25C13.24 11.25 14.25 10.24 14.25 9Z"/>
      <path d="M7 15.5V17H17V15.5C17 13.83 13.67 13 12 13C10.33 13 7 13.83 7 15.5Z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M5 2C3.34772 2 2 3.34772 2 5V19C2 20.6523 3.34772 22 5 22H19C20.6523 22 22 20.6523 22 19V5C22 3.34772 20.6523 2 19 2H5ZM4 5C4 4.45228 4.45228 4 5 4H19C19.5477 4 20 4.45228 20 5V19C20 19.5477 19.5477 20 19 20H5C4.45228 20 4 19.5477 4 19V5Z"/>
    </svg>
  )
}