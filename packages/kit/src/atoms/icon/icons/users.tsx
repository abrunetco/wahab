import React from "react"

export const Users: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M11.5 7.5C11.5 9.433 9.933 11 8 11C6.067 11 4.5 9.433 4.5 7.5C4.5 5.567 6.067 4 8 4C9.933 4 11.5 5.567 11.5 7.5ZM9.5 7.5C9.5 8.32843 8.82843 9 8 9C7.17157 9 6.5 8.32843 6.5 7.5C6.5 6.67157 7.17157 6 8 6C8.82843 6 9.5 6.67157 9.5 7.5Z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M19.5 7.5C19.5 9.433 17.933 11 16 11C14.067 11 12.5 9.433 12.5 7.5C12.5 5.567 14.067 4 16 4C17.933 4 19.5 5.567 19.5 7.5ZM17.5 7.5C17.5 8.32843 16.8284 9 16 9C15.1716 9 14.5 8.32843 14.5 7.5C14.5 6.67157 15.1716 6 16 6C16.8284 6 17.5 6.67157 17.5 7.5Z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M1.5 16C1.5 14 5 12.5 8 12.5C9.35407 12.5 10.81 12.8056 12 13.3248C13.19 12.8056 14.6459 12.5 16 12.5C19 12.5 22.5 14 22.5 16V18C22.5 18.55 22.05 19 21.5 19H2.5C1.95 19 1.5 18.55 1.5 18V16ZM3.5 16.0634V17H12.5V16.0634C12.4987 16.0616 12.4968 16.0583 12.494 16.0536C12.458 15.9921 12.2803 15.6887 11.4806 15.2889C10.5241 14.8106 9.2077 14.5 8 14.5C6.7923 14.5 5.47589 14.8106 4.51943 15.2889C3.7197 15.6887 3.54201 15.9921 3.50598 16.0536C3.50323 16.0583 3.50131 16.0616 3.5 16.0634ZM14.5 17H20.5V16.0634C20.4987 16.0616 20.4968 16.0583 20.494 16.0536C20.458 15.9921 20.2803 15.6887 19.4806 15.2889C18.5241 14.8106 17.2077 14.5 16 14.5C15.3482 14.5 14.6647 14.5905 14.0232 14.749C14.3263 15.1338 14.5 15.5545 14.5 16V17Z"/>
    </svg>
  )
}