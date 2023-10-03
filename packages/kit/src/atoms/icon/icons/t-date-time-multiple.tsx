import React from "react"

export const TDateTimeMultiple: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M16 0C16.5523 0 17 0.447715 17 1V2H19C19.7957 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5V10.4009C23.2412 11.7391 24 13.5309 24 15.5C24 18.4119 22.3405 20.9363 19.9156 22.1789C19.7746 21.5029 19.463 20.8896 19.0278 20.386C20.7935 19.4706 22 17.6262 22 15.5C22 12.4624 19.5376 10 16.5 10C13.4624 10 11 12.4624 11 15.5C11 16.8336 11.4747 18.0564 12.2643 19.0086C12.1769 19.0029 12.0888 19 12 19C11.3249 19 10.6889 19.1672 10.1311 19.4626C9.41419 18.3128 9 16.9548 9 15.5C9 13.3269 9.92418 11.3697 11.4009 10H4V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H5.35418C4.79407 20.4944 4.37347 21.1431 4.159 21.8797C3.67958 21.7397 3.2382 21.4808 2.87868 21.1213C2.31607 20.5587 2 19.7957 2 19V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H7V1C7 0.447715 7.44772 0 8 0C8.55228 0 9 0.447715 9 1V2H15V1C15 0.447715 15.4477 0 16 0ZM20 8H4V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H7V5C7 5.55228 7.44772 6 8 6C8.55228 6 9 5.55228 9 5V4H15V5C15 5.55228 15.4477 6 16 6C16.5523 6 17 5.55228 17 5V4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V8Z"/>
      <path d="M16.5 12C16.9142 12 17.25 12.3358 17.25 12.75V15.1893L18.2678 16.2071C18.5607 16.5 18.5607 16.9749 18.2678 17.2678C17.9749 17.5607 17.5 17.5607 17.2071 17.2678L15.9719 16.0325C15.9645 16.0252 15.9573 16.0178 15.9502 16.0102C15.889 15.9443 15.8418 15.87 15.8087 15.7913C15.7709 15.7017 15.75 15.6033 15.75 15.5V12.75C15.75 12.3358 16.0858 12 16.5 12Z"/>
      <path d="M8 24C8.55228 24 9 23.5523 9 23C9 22.4477 8.55228 22 8 22C7.44772 22 7 22.4477 7 23C7 23.5523 7.44772 24 8 24Z"/>
      <path d="M12 24C12.5523 24 13 23.5523 13 23C13 22.4477 12.5523 22 12 22C11.4477 22 11 22.4477 11 23C11 23.5523 11.4477 24 12 24Z"/>
      <path d="M17 23C17 23.5523 16.5523 24 16 24C15.4477 24 15 23.5523 15 23C15 22.4477 15.4477 22 16 22C16.5523 22 17 22.4477 17 23Z"/>
    </svg>
  )
}