import React from "react"

export const TExpression: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path d="M7.5 13.5C8.32843 13.5 9 12.8284 9 12C9 11.1716 8.32843 10.5 7.5 10.5C6.67157 10.5 6 11.1716 6 12C6 12.8284 6.67157 13.5 7.5 13.5Z"/>
      <path d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z"/>
      <path d="M16.5 13.5C17.3284 13.5 18 12.8284 18 12C18 11.1716 17.3284 10.5 16.5 10.5C15.6716 10.5 15 11.1716 15 12C15 12.8284 15.6716 13.5 16.5 13.5Z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 4C2.34315 4 1 5.34315 1 7V17C1 18.6569 2.34315 20 4 20H20C21.6569 20 23 18.6569 23 17V7C23 5.34315 21.6569 4 20 4H4ZM3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7V17C21 17.5523 20.5523 18 20 18H4C3.44772 18 3 17.5523 3 17V7Z"/>
    </svg>
  )
}