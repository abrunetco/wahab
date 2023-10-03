import React from "react"

export const Warn: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path d="M12.0001 5.98999L19.5301 19H4.47012L12.0001 5.98999ZM2.74012 18C1.97012 19.33 2.93012 21 4.47012 21H19.5301C21.0701 21 22.0301 19.33 21.2601 18L13.7301 4.98999C12.9601 3.65999 11.0401 3.65999 10.2701 4.98999L2.74012 18ZM11.0001 11V13C11.0001 13.55 11.4501 14 12.0001 14C12.5501 14 13.0001 13.55 13.0001 13V11C13.0001 10.45 12.5501 9.99999 12.0001 9.99999C11.4501 9.99999 11.0001 10.45 11.0001 11ZM11.0001 16H13.0001V18H11.0001V16Z"/>
    </svg>
  )
}