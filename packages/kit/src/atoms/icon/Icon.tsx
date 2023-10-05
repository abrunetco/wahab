import React, { memo, forwardRef, ComponentProps } from 'react'
import _ from 'lodash'
import styled, { css } from 'styled-components'

// import * as icons from './icons'
import styl from '../../styled'

const icons = {}

export const iconNames = _.keys(icons)
// export type IconName = keyof typeof icons
export type IconName = string
export const isIconName = (name: string): name is IconName => iconNames.includes(name)

export interface IconProps {
  name: IconName
  size?: number
  disabled?: boolean
  noFill?: boolean
}

function PlaceholderIcon(props: IconProps) {
  return <svg data-name={props.name} viewBox="0 0 24 24" />
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const icocomponents = _.mapValues(icons, (Icon) => {
  const s = styl(Icon ?? PlaceholderIcon, (props: IconProps) => [
    {
      display: 'inline-flex',
      flex: 'none',
      width: props.size ?? 1,
      height: props.size ?? 1,
      pointerEvents: 'none',
    },
  ])
  return styled(s)`
    ${({ noFill }) =>
      !noFill &&
      css`
        & * {
          fill: currentColor;
        }
      `}
  `
})

export const getIconSVG = (name: IconName) => icons[name] ?? PlaceholderIcon

export const Icon = memo(
  forwardRef((props: IconProps & ComponentProps<'svg'>, ref: any) => {
    const Element = icocomponents[props.name]
    return <Element ref={ref} {...props} />
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
