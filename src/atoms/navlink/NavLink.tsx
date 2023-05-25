import styled from "styled-components"
import styl, { defaults } from "../../styled"
import { Theme } from "../../styled/theme/theme"
import { StyleSystemSheet } from "../../styled/types"
import { BoxProps } from "../box/Box"
import { Text } from "../text/Text"

export interface NavProps {
  textDec: boolean
  disable: boolean
}

export const navLinkStyles = (props: NavProps & BoxProps & { theme: Theme }): StyleSystemSheet => {
  return [
    props.textDec && { textDecoration: "none" },
    props.disable ? { disableStyles: true } : { hoverStyles: true },
  ]
}

export const InheritedFromBox = defaults(Text.styles, {
  color: { v: "black" }
})

export const NavLink = styl('a', InheritedFromBox, navLinkStyles)