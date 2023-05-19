import { css } from 'styled-components'
import { mappers } from './maps'
import ColorFactory from 'color'
import { ColorProp, Typography } from './types'
import _ from 'lodash'

export const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const autoColor = css`
  color: ${props => {
    const bg = 'bg' in props ? (props['bg'] as ColorProp) : props.theme.bgName,
      bgHexColor = mappers.color(bg, props.theme),
      isDarkBg = ColorFactory(bgHexColor).isDark()

    return mappers.color(isDarkBg ? 'white' : 'black', props.theme)

  }};
`

export const fontStyles = (t: Typography) => {
  return css`
    font-family: ${props => props.theme.typography[t].family};
    font-weight: ${props => props.theme.typography[t].weight};
    font-size: ${props => props.theme.typography[t].size * props.theme.size}px;
    line-height: ${props => props.theme.typography[t].lineHeight * props.theme.size}px;
    ${props => props.theme.typography[t].decor === "start"
      ? `&::first-letter { text-transform: uppercase; }`
      : ''
    }
    ${props => props.theme.typography[t].decor === "lower"
      ? `text-transform: lowercase;`
      : ''
    }
    ${props => props.theme.typography[t].decor === "upper"
      ? `text-transform: uppercase;`
      : ''
    }
  `
}

export const hoverStyles = css`&:hover { background-color: ${props => {
  console.log('hoverStyles', props);
  const bg = 'bg' in props ? (props['bg'] as ColorProp) : props.theme.defaultBtnBgName,
  bgHexColor = mappers.color(bg, props.theme),
  bgColor = ColorFactory(bgHexColor)
  return bgColor.isDark() ? bgColor.lighten(0.2).hex() : bgColor.darken(0.4).hex()
}} }`

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
    box-shadow: 0px 0px 2px 2px #CED4DB;
    // background-color: #ced4db1c;
  }
`