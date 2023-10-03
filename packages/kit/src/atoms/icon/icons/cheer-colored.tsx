import React from "react"

export const CheerColored: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12Z" fill="#93DF63"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.0005 14.17L15.8805 8.29C16.2705 7.9 16.9105 7.9 17.3005 8.29C17.6905 8.68 17.6905 9.31 17.3005 9.7L10.7105 16.29C10.3205 16.68 9.69047 16.68 9.30047 16.29L6.71047 13.7C6.32047 13.31 6.32047 12.68 6.71047 12.29C7.10047 11.9 7.73047 11.9 8.12047 12.29L10.0005 14.17Z"/>
    </svg>
  )
}