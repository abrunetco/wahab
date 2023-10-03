import React from "react"

export const TScaleMultiple: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M19.6498 9.04L14.8098 8.62L12.9198 4.17C12.5798 3.36 11.4198 3.36 11.0798 4.17L9.18983 8.63L4.35983 9.04C3.47983 9.11 3.11983 10.21 3.78983 10.79L7.45983 13.97L6.35983 18.69C6.30614 18.9208 6.33388 19.1387 6.41789 19.3251C6.90313 19.1159 7.43803 19 8 19C8.32469 19 8.64035 19.0387 8.94261 19.1117L11.9998 17.27L15.0485 19.1139C15.3534 19.0395 15.6721 19 16 19C16.5633 19 17.0994 19.1164 17.5856 19.3266C17.6666 19.1421 17.6927 18.9273 17.6398 18.7L16.5398 13.97L20.2098 10.79C20.8798 10.21 20.5298 9.11 19.6498 9.04ZM11.9998 15.4L8.23983 17.67L9.23983 13.39L5.91983 10.51L10.2998 10.13L11.9998 6.1L13.7098 10.14L18.0898 10.52L14.7698 13.4L15.7698 17.68L11.9998 15.4Z"/>
      <path d="M8 24C8.55228 24 9 23.5523 9 23C9 22.4477 8.55228 22 8 22C7.44772 22 7 22.4477 7 23C7 23.5523 7.44772 24 8 24Z"/>
      <path d="M12 24C12.5523 24 13 23.5523 13 23C13 22.4477 12.5523 22 12 22C11.4477 22 11 22.4477 11 23C11 23.5523 11.4477 24 12 24Z"/>
      <path d="M17 23C17 23.5523 16.5523 24 16 24C15.4477 24 15 23.5523 15 23C15 22.4477 15.4477 22 16 22C16.5523 22 17 22.4477 17 23Z"/>
    </svg>
  )
}