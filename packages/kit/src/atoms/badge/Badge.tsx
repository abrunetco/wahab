import styl, { defaults } from "../../styled"
import { Theme } from "../../styled/theme/theme"
import { StyleSystemSheet } from "../../styled/types"
import { Box, BoxProps } from "../box/Box"

export interface BadgeProps {
  badgeSize: boolean
}

export const badgeStyles = (props: BadgeProps & BoxProps & { theme: Theme }): StyleSystemSheet => {
  return [
    props.badgeSize ? { width: "35px" } : { width: props.width }
  ]
}

const InheritedFromBox = defaults(Box.styles, {

})

export const Badge = styl("div", InheritedFromBox, badgeStyles)