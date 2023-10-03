import React from "react"

export const VTable: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3 6C3 4.34314 4.34326 3 6 3H18C19.6567 3 21 4.34314 21 6V18C21 19.6569 19.6567 21 18 21H6C4.34326 21 3 19.6569 3 18V6ZM7 7H11V9H7V7ZM11 11H7V13H11V11ZM7 15H11V17H7V15ZM17 7H13V9H17V7ZM13 11H17V13H13V11ZM17 15H13V17H17V15Z"/>
    </svg>
  )
}