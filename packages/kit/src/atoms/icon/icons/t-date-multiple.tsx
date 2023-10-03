import React from "react"

export const TDateMultiple: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17 1C17 0.447715 16.5523 0 16 0C15.4477 0 15 0.447715 15 1V2H9V1C9 0.447715 8.55228 0 8 0C7.44772 0 7 0.447715 7 1V2H5C3.34315 2 2 3.34315 2 5V19C2 20.3648 2.9114 21.5168 4.15878 21.8805C4.37319 21.1436 4.79388 20.4945 5.35418 20H5C4.44772 20 4 19.5523 4 19V10H20V19C20 19.5523 19.5523 20 19 20H18.6458C19.2061 20.4945 19.6268 21.1436 19.8412 21.8805C21.0886 21.5168 22 20.3648 22 19V5C22 3.34315 20.6569 2 19 2H17V1ZM20 8V5C20 4.44772 19.5523 4 19 4H17V5C17 5.55228 16.5523 6 16 6C15.4477 6 15 5.55228 15 5V4H9V5C9 5.55228 8.55228 6 8 6C7.44772 6 7 5.55228 7 5V4H5C4.44772 4 4 4.44772 4 5V8H20Z"/>
      <path d="M8 24C8.55228 24 9 23.5523 9 23C9 22.4477 8.55228 22 8 22C7.44772 22 7 22.4477 7 23C7 23.5523 7.44772 24 8 24Z"/>
      <path d="M12 24C12.5523 24 13 23.5523 13 23C13 22.4477 12.5523 22 12 22C11.4477 22 11 22.4477 11 23C11 23.5523 11.4477 24 12 24Z"/>
      <path d="M17 23C17 23.5523 16.5523 24 16 24C15.4477 24 15 23.5523 15 23C15 22.4477 15.4477 22 16 22C16.5523 22 17 22.4477 17 23Z"/>
    </svg>
  )
}