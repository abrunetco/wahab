import React from "react"

export const TFile: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name={props.name} className={props.className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17.2888 3.88264C16.7246 3.31945 15.9598 3.00345 15.1626 3.00415C14.3655 3.00486 13.6012 3.32221 13.038 3.88639L4.4674 12.457C3.52909 13.3953 3.00195 14.6679 3.00195 15.9949C3.00195 17.3219 3.52909 18.5945 4.4674 19.5328C5.4057 20.4711 6.67832 20.9982 8.00529 20.9982C9.33226 20.9982 10.6049 20.4711 11.5432 19.5328L20.7332 10.3428C21.1237 9.95228 21.7569 9.95228 22.1474 10.3428C22.5379 10.7333 22.5379 11.3665 22.1474 11.757L12.9574 20.947C11.644 22.2604 9.86269 22.9982 8.00529 22.9982C6.14789 22.9982 4.36656 22.2604 3.05318 20.947C1.7398 19.6336 1.00195 17.8523 1.00195 15.9949C1.00195 14.1375 1.7398 12.3562 3.05318 11.0428L11.6226 2.47343C12.5604 1.53423 13.8336 1.00532 15.1609 1.00415C16.4885 1.00298 17.7622 1.52925 18.7018 2.46718C19.6414 3.40512 20.1699 4.67788 20.171 6.00549C20.1722 7.3331 19.646 8.6068 18.708 9.54639L10.1174 18.117C9.55458 18.6798 8.79124 18.996 7.99529 18.996C7.19934 18.996 6.436 18.6798 5.87318 18.117C5.31037 17.5542 4.99418 16.7909 4.99418 15.9949C4.99418 15.199 5.31037 14.4356 5.87318 13.8728L14.3636 5.39239C14.7544 5.00209 15.3875 5.00247 15.7778 5.39322C16.1681 5.78398 16.1677 6.41714 15.777 6.80744L7.2874 15.287C7.09991 15.4747 6.99418 15.7296 6.99418 15.9949C6.99418 16.2604 7.09965 16.5151 7.2874 16.7028C7.47514 16.8906 7.72978 16.996 7.99529 16.996C8.2608 16.996 8.51544 16.8906 8.70318 16.7028L17.2926 8.13343C17.2928 8.13314 17.2931 8.13286 17.2934 8.13257C17.8561 7.56847 18.1718 6.80403 18.171 6.00726C18.1703 5.21008 17.853 4.44583 17.2888 3.88264Z"/>
    </svg>
  )
}