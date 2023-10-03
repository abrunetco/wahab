import React from "react"

export const ChevronUp: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 14.7071C5.68342 15.0976 6.31658 15.0976 6.70711 14.7071L12 9.41421L17.2929 14.7071C17.6834 15.0976 18.3166 15.0976 18.7071 14.7071C19.0976 14.3166 19.0976 13.6834 18.7071 13.2929L12.7071 7.29289C12.3166 6.90237 11.6834 6.90237 11.2929 7.29289L5.29289 13.2929C4.90237 13.6834 4.90237 14.3166 5.29289 14.7071Z"/>
    </svg>
  )
}