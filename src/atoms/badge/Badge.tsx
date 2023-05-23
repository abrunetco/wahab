import styl, { defaults } from "../../styled"
import { Theme } from "../../styled/theme/theme"
import { StyleSystemSheet } from "../../styled/types"
import { Box, BoxProps } from "../box/Box"

type BadgeSize = {
  s: string
  m: string
  l: string
}

export interface BadgeProps {
  size: BadgeSize
}

export const badgeStyles = (props: BadgeProps & BoxProps & { theme: Theme }): StyleSystemSheet => {
  return [
  ]
}


export const InheritedFromBox = defaults(Box.styles, {
  
})


export const Badge = styl('div', InheritedFromBox, badgeStyles)