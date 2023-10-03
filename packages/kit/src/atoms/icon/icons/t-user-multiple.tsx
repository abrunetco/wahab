import React from "react"

export const TUserMultiple: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 8C8 5.79 9.79 4 12 4C14.21 4 16 5.79 16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8ZM14.1 8C14.1 6.84 13.16 5.9 12 5.9C10.84 5.9 9.9 6.84 9.9 8C9.9 9.16 10.84 10.1 12 10.1C13.16 10.1 14.1 9.16 14.1 8Z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 17C4 14.34 9.33 13 12 13C14.67 13 20 14.34 20 17V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V17ZM18.1 17C18.1 16.36 14.97 14.9 12 14.9C9.03 14.9 5.9 16.36 5.9 17V18.1H18.1V17Z"/>
      <path d="M8 24C8.55228 24 9 23.5523 9 23C9 22.4477 8.55228 22 8 22C7.44772 22 7 22.4477 7 23C7 23.5523 7.44772 24 8 24Z"/>
      <path d="M12 24C12.5523 24 13 23.5523 13 23C13 22.4477 12.5523 22 12 22C11.4477 22 11 22.4477 11 23C11 23.5523 11.4477 24 12 24Z"/>
      <path d="M17 23C17 23.5523 16.5523 24 16 24C15.4477 24 15 23.5523 15 23C15 22.4477 15.4477 22 16 22C16.5523 22 17 22.4477 17 23Z"/>
    </svg>
  )
}