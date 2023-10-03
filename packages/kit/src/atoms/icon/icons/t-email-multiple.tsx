import React from "react"

export const TEmailMultiple: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18L2.01 6C2.01 4.9 2.9 4 4 4ZM4 17C4 17.55 4.45 18 5 18H19C19.55 18 20 17.55 20 17V8L13.06 12.34C12.41 12.75 11.59 12.75 10.94 12.34L4 8V17ZM4 6L12 11L20 6H4Z"/>
      <path d="M8 24C8.55228 24 9 23.5523 9 23C9 22.4477 8.55228 22 8 22C7.44772 22 7 22.4477 7 23C7 23.5523 7.44772 24 8 24Z"/>
      <path d="M12 24C12.5523 24 13 23.5523 13 23C13 22.4477 12.5523 22 12 22C11.4477 22 11 22.4477 11 23C11 23.5523 11.4477 24 12 24Z"/>
      <path d="M17 23C17 23.5523 16.5523 24 16 24C15.4477 24 15 23.5523 15 23C15 22.4477 15.4477 22 16 22C16.5523 22 17 22.4477 17 23Z"/>
    </svg>
  )
}