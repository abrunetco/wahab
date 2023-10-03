import React from "react"

export const ChartLine: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path d="M4 3C4 2.44772 3.55228 2 3 2C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21C22 20.4477 21.5523 20 21 20H4V3Z"/>
      <path d="M19.7071 8.29289C19.3166 7.90237 18.6834 7.90237 18.2929 8.29289L14 12.5858L10.7071 9.29289C10.3166 8.90237 9.68342 8.90237 9.29289 9.29289L6.29289 12.2929C5.90237 12.6834 5.90237 13.3166 6.29289 13.7071C6.68342 14.0976 7.31658 14.0976 7.70711 13.7071L10 11.4142L13.2929 14.7071C13.6834 15.0976 14.3166 15.0976 14.7071 14.7071L19.7071 9.70711C20.0976 9.31658 20.0976 8.68342 19.7071 8.29289Z"/>
    </svg>
  )
}