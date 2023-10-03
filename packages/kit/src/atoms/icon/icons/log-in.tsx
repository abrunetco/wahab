import React from "react"

export const LogIn: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path d="M14 3C14 2.44772 14.4477 2 15 2H19C19.7957 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5V19C22 19.7957 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7957 22 19 22H15C14.4477 22 14 21.5523 14 21C14 20.4477 14.4477 20 15 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V5C20 4.73478 19.8946 4.48043 19.7071 4.29289C19.5196 4.10536 19.2652 4 19 4H15C14.4477 4 14 3.55228 14 3Z"/>
      <path d="M9.29289 6.29289C9.68342 5.90237 10.3166 5.90237 10.7071 6.29289L15.7064 11.2922C15.7088 11.2946 15.7112 11.297 15.7136 11.2995C15.8901 11.4792 15.9992 11.7254 16 11.997L16 12L16 12.003C15.9996 12.1375 15.9727 12.2657 15.9241 12.3828C15.8764 12.498 15.8063 12.6062 15.7136 12.7005C15.7112 12.703 15.7088 12.7054 15.7064 12.7078L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071C8.90237 17.3166 8.90237 16.6834 9.29289 16.2929L12.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H12.5858L9.29289 7.70711C8.90237 7.31658 8.90237 6.68342 9.29289 6.29289Z"/>
    </svg>
  )
}