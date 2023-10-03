import React from "react"

export const Search: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.5 1.75C5.21979 1.75 1.75 5.21979 1.75 9.5C1.75 13.7802 5.21979 17.25 9.5 17.25C11.1889 17.25 12.7517 16.7097 14.0249 15.7926L18.1161 19.8839C18.6043 20.372 19.3957 20.372 19.8839 19.8839C20.372 19.3957 20.372 18.6043 19.8839 18.1161L15.7926 14.0249C16.7097 12.7517 17.25 11.1889 17.25 9.5C17.25 5.21979 13.7802 1.75 9.5 1.75ZM4.25 9.5C4.25 6.6005 6.6005 4.25 9.5 4.25C12.3995 4.25 14.75 6.6005 14.75 9.5C14.75 12.3995 12.3995 14.75 9.5 14.75C6.6005 14.75 4.25 12.3995 4.25 9.5Z"/>
    </svg>
  )
}