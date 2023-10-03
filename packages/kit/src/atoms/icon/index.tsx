import React, { memo, forwardRef, ComponentProps } from "react"
import _ from "lodash"
import styled, { css } from "styled-components"

import * as icons from "./icons"
import styl from "../../styled"
import { ColorProp, Size } from "../../styled/types"
import { Theme } from "../../styled/theme/theme"
import { mappers } from "../../styled/maps"

export const iconNames = _.keys(icons)
export type IconName = keyof typeof icons
export const isIconName = (name: string): name is IconName => iconNames.includes(name)

export interface IconProps {
  name: IconName
  size?: Size
  disabled?: boolean
  noFill?: boolean
  color?: ColorProp
}

function PlaceholderIcon (props: IconProps) {
  return <svg data-name={props.name} viewBox="0 0 24 24" />
}

const icocomponents = _.mapValues(icons, (Icon) => {
  const s = styl(Icon ?? PlaceholderIcon, (props: IconProps) => {
    console.log(`[icon props]`, props);
    
    return [
      {
        display: "inline-flex",
        flex: "none",
        width: props.size,
        height: props.size,
        pointerEvents: "none",
        fill: props.color
      },
    ]
  })

  return styled(s)`
    ${(props) => (!props.noFill && !props.color) && css`& * { fill: currentColor; }`}
  `
})

export const getIconSVG = (name: IconName) => icons[name] ?? PlaceholderIcon

export const Icon = memo(
  forwardRef((props: IconProps & ComponentProps<"svg">, ref: any) => {
    const Element = icocomponents[props.name]

    return <Element ref={ref} {...props} />
  })
)

Icon.displayName = "Icon"

export const IconStacker = styl("div", {
  width: 3,
  height: 3,
})

export const IconWrapper = styl("div", {
  position: "absolute",
  width: 2.5,
  height: 2.5,
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
})
