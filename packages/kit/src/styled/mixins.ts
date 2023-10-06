import { css } from "styled-components"
import { mappers } from "./maps"
import ColorFactory from "color"
import { ColorProp, Typography } from "./types"

export const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const stretch = css`
opacity: 0;
height: 0;
width: 0;
padding: 0;
&:after {
  position:absolute;
  inset:0;
  z-index:1;
  pointer-events:auto;
  content:"";
  background-color: transparent
}
`

export const autoColor = css`
  color: ${props => {
    const bg = "bg" in props ? (props["bg"] as ColorProp) : props.theme.bgName,
      bgHexColor = mappers.color(bg, props.theme),
      isDarkBg = ColorFactory(bgHexColor).isDark()

    return mappers.color(isDarkBg ? "white" : "black", props.theme)

  }};
`

export const fontStyles = (t: Typography) => {
  return css`
    font-family: ${props => props.theme.typography[t].family};
    font-weight: ${props => props.theme.typography[t].weight};
    font-size: ${props => props.theme.typography[t].size * props.theme.size}px;
    line-height: ${props => props.theme.typography[t].lineHeight * props.theme.size}px;
    ${props => props.theme.typography[t].decor === "start"
    ? "&::first-letter { text-transform: uppercase; }"
    : ""
}
    ${props => props.theme.typography[t].decor === "lower"
    ? "text-transform: lowercase;"
    : ""
}
    ${props => props.theme.typography[t].decor === "upper"
    ? "text-transform: uppercase;"
    : ""
}
  `
}

export const hoverStyles = css`
  &:hover { background-color: ${props => {
      const bg = "bg" in props ? (props["bg"] as ColorProp) : props.theme.defaultBtnBgName,
        bgHexColor = mappers.color(bg, props.theme),
        bgColor = ColorFactory(bgHexColor)

      return bgColor.isDark() ? bgColor.lighten(0.2).hex() : bgColor.darken(0.1).hex()
    }}
  }
  transition: all .2s;
  `

export const disableStyles = css`
  &,
  & * {
    opacity: 0.75;
    filter: saturate(0.75);
    cursor: not-allowed !important;
  }
  `

export const inputFocus = css`
  &:focus { 
    transition: all .2s;
    box-shadow: 0px 0px 0px 3px #CED4DB;
    outline: none !important;
  }
`

export const thumbnailStyle = css`
  border: solid 1px #17363b36;
  padding: .25rem;
  background-color: transparent;
  border-radius: .25rem;
  max-width: 100%;
`

export const coverStyle = css`
  object-fit: cover;
`
export const hidden = css`
  display: none;
`