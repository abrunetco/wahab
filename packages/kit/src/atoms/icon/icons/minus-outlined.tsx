import React from "react"

export const MinusOutlined: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path d="M16 13C11.5239 13 13.0652 13 8 13C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11C12.4805 11 10.9146 11 16 11C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13Z"/>
      <path d="M16 13C16.55 13 17 12.55 17 12C17 11.45 16.55 11 16 11C10.9146 11 12.4805 11 8 11C7.45 11 7 11.45 7 12C7 12.55 7.45 13 8 13C13.0652 13 11.5239 13 16 13Z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
    </svg>
  )
}