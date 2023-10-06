import React, { memo, forwardRef, ComponentProps, useContext } from 'react'
import _ from 'lodash'
import styled, { ThemeContext, css } from 'styled-components'

import * as icons from '@wahab/icons'
import styl from '../../styled'
import { StyleSystemSheet } from '../../styled/types'

const iconNames = _.keys(icons)
export type IconName = keyof typeof icons
export const isIconName = (name: string): name is IconName => iconNames.includes(name)

export interface IconProps {
  name: IconName
  size?: number
  disabled?: boolean
  noFill?: boolean
}

function PlaceholderIcon(props: IconProps) {
  return (
    <svg data-name={props.name} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 3,3 V 21 H 21 V 3 Z M 4.707031,4 H 19.292969 L 12,11.292969 Z M 20,4.7070312 V 19.294922 L 12.707031,12 Z M 4,4.7089844 11.292969,12 4,19.292969 Z M 12,12.708984 19.291016,20 H 4.708984 Z" fill="black"/>
    </svg>
  )
}

export const iconStyles = (props: IconProps): StyleSystemSheet => {
  return {
    display: 'inline-flex',
    flex: 'none',
    width: props.size ?? 1,
    height: props.size ?? 1,
    pointerEvents: 'none',
  }
}

export const Icon = memo(
  forwardRef((props: IconProps & ComponentProps<'svg'>, ref: any) => {
    const { icons = {} } = useContext(ThemeContext)
    if (props.name in icons) {
      const Element = styled(styl(icons[props.name], iconStyles))`
      ${({ noFill }) =>
        !noFill &&
        css`
          & * {
            fill: currentColor;
          }
        `}
    `
      return <Element ref={ref} {...props} />
    }
    return (
      <PlaceholderIcon {...props} />
    )
  })
)

Icon.displayName = 'Icon'

export const IconStacker = styl('div', {
  width: 3,
  height: 3,
})

export const IconWrapper = styl('div', {
  position: 'absolute',
  width: 2,
  height: 2,
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
})
