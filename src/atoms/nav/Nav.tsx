import styl, { defaults } from "../../styled"
import { Theme } from "../../styled/theme/theme"
import { StyleSystemSheet } from "../../styled/types"
import { Box, BoxProps } from "../box/Box"

export interface NavProps {
}

export const navStyles = (props: NavProps & BoxProps & { theme: Theme }): StyleSystemSheet => {
  return [
  ]
}

export const InheritedFromBox = defaults(Box.styles, {
  flex: true,
  padding: { all: 's' }
})
export const Nav = styl('nav', InheritedFromBox, navStyles)