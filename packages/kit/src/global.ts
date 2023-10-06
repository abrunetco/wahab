import { createGlobalStyle } from "styled-components"
import { mappers } from "./styled/maps"
import { Theme } from "./styled/theme/theme"

// import RegularSuisseIntl from "./fonts/SuisseIntl-Regular.ttf"
// import MediumSuisseIntl from "./fonts/SuisseIntl-Medium.ttf"
// import SemiBoldSuisseIntl from "./fonts/SuisseIntl-SemiBold.ttf"

import { fontStyles } from "./styled/mixins"

// @font-face{
//   font-family: "SuisseIntl";
//   src: url("${RegularSuisseIntl}") format("truetype");
//   font-weight: 400;
//   font-style: normal;
// }

// @font-face{
//   font-family: "SuisseIntl";
//   src: url("${MediumSuisseIntl}") format("truetype");
//   font-weight: 500;
//   font-style: normal;
// }

// @font-face{
//   font-family: "SuisseIntl";
//   src: url("${SemiBoldSuisseIntl}") format("truetype");
//   font-weight: 700;
//   font-style: normal;
// }
const GlobalStyles = createGlobalStyle`

  /* reset */

  *,
  *:before,
  *:after {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
  }

  ul,
  ol {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  i,
  b {
    font-style: normal;
  }

  img,
  video {
    border-style: none;
    max-width: 100%;
    display: block;
  }

  svg {
    border: none !important;
  }

  /* global */

  * {
    scroll-behavior: smooth;
  }

  html,
  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-size-adjust: 100%;
    overflow: auto;
    background-color: ${(props: { theme: Theme }) => mappers.color(props.theme.bgName, props.theme)}!important;
    ${fontStyles('default')}
  }

  #root-deleted {
    position:absolute;
    width: 100%;
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  textarea {
    resize: none;
  }

  [hidden] {
    display: none !important;
  }

  :focus {
    outline: none;
  }

  /* dispatched single taps w/o delay */
  a,
  area,
  button,
  input,
  label,
  select,
  summary,
  textarea,
  [tabindex]:not([tabindex='-1']) {
    touch-action: manipulation;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  a {
    color: #000;
  }

  :root {
    --primary: ${(props: { theme: Theme }) => mappers.color('primary', props.theme)}!important;
    --body: ${(props: { theme: Theme }) => mappers.color('body', props.theme)}!important;
    --black: ${(props: { theme: Theme }) => mappers.color('black', props.theme)}!important;
    --white: ${(props: { theme: Theme }) => mappers.color('white', props.theme)}!important;
    --primary: ${(props: { theme: Theme }) => mappers.color('primary', props.theme)}!important;
    --secondary: ${(props: { theme: Theme }) => mappers.color('secondary', props.theme)}!important;
    --active: ${(props: { theme: Theme }) => mappers.color('active', props.theme)}!important;
    --success: ${(props: { theme: Theme }) => mappers.color('success', props.theme)}!important;
    --warn: ${(props: { theme: Theme }) => mappers.color('warn', props.theme)}!important;
    --danger: ${(props: { theme: Theme }) => mappers.color('danger', props.theme)}!important;
  }
`

export default GlobalStyles
