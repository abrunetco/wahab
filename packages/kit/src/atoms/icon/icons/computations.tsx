import React from "react"

export const Computations: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path d="M8 5C7.44772 5 7 5.44772 7 6C7 6.55228 7.44772 7 8 7H16C16.5523 7 17 6.55228 17 6C17 5.44772 16.5523 5 16 5H8Z"/>
      <path d="M16 13C16.5523 13 17 13.4477 17 14V18C17 18.5523 16.5523 19 16 19C15.4477 19 15 18.5523 15 18V14C15 13.4477 15.4477 13 16 13Z"/>
      <path d="M16 9C15.4477 9 15 9.44771 15 10C15 10.5523 15.4477 11 16 11H16.01C16.5623 11 17.01 10.5523 17.01 10C17.01 9.44771 16.5623 9 16.01 9H16Z"/>
      <path d="M11 10C11 9.44771 11.4477 9 12 9H12.01C12.5623 9 13.01 9.44771 13.01 10C13.01 10.5523 12.5623 11 12.01 11H12C11.4477 11 11 10.5523 11 10Z"/>
      <path d="M8 9C7.44772 9 7 9.44771 7 10C7 10.5523 7.44772 11 8 11H8.01C8.56228 11 9.01 10.5523 9.01 10C9.01 9.44771 8.56228 9 8.01 9H8Z"/>
      <path d="M11 14C11 13.4477 11.4477 13 12 13H12.01C12.5623 13 13.01 13.4477 13.01 14C13.01 14.5523 12.5623 15 12.01 15H12C11.4477 15 11 14.5523 11 14Z"/>
      <path d="M8 13C7.44772 13 7 13.4477 7 14C7 14.5523 7.44772 15 8 15H8.01C8.56228 15 9.01 14.5523 9.01 14C9.01 13.4477 8.56228 13 8.01 13H8Z"/>
      <path d="M11 18C11 17.4477 11.4477 17 12 17H12.01C12.5623 17 13.01 17.4477 13.01 18C13.01 18.5523 12.5623 19 12.01 19H12C11.4477 19 11 18.5523 11 18Z"/>
      <path d="M8 17C7.44772 17 7 17.4477 7 18C7 18.5523 7.44772 19 8 19H8.01C8.56228 19 9.01 18.5523 9.01 18C9.01 17.4477 8.56228 17 8.01 17H8Z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 1C4.34315 1 3 2.34315 3 4V20C3 21.6569 4.34315 23 6 23H18C19.6569 23 21 21.6569 21 20V4C21 2.34315 19.6569 1 18 1H6ZM5 4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V4Z"/>
    </svg>
  )
}