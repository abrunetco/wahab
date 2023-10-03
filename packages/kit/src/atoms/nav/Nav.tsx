import styl, { defaults } from "../../styled"
import { Theme } from "../../styled/theme/theme"
import { StyleSystemSheet } from "../../styled/types"
import { BoxProps } from "../box/Box"
import { Container } from "../container/Container"

export interface NavProps {
}

export const navStyles = (props: NavProps & BoxProps & { theme: Theme }): StyleSystemSheet => {
  return [
  ]
}

export const InheritedFromContainer = defaults(Container.styles, {
  flex: true,
  padding: { all: "s" }
})
export const Nav = styl("nav", InheritedFromContainer, navStyles)