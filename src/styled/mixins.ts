import { css } from 'styled-components'
import { mappers } from './maps'
import ColorFactory from 'color'
import { ColorProp, Typography } from './types'
import { Theme, light } from './theme/theme'
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
    font-weight: ${props => props.theme.typography[t].weight * props.theme.size};
    font-size: ${props => props.theme.typography[t].size * props.theme.size}px;
    line-height: ${props => props.theme.typography[t].lineHeight * props.theme.size}px;
  `
}
