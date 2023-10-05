import styl, { defaults } from "../../styled"
import { Theme } from "../../styled/theme/theme"
import { StyleSystemSheet } from "../../styled/types"
import { BoxProps } from "../box/Box"
import { NavProps } from "../nav/Nav"
import { Span } from "../text/Text"

export const navLinkStyles = (props: NavProps & BoxProps & { theme: Theme }): StyleSystemSheet => {
  return [
    props.textDec && { textDecoration: "none" },
    props.block && { display: "block" },
    props.stretch && { stretch: true },
    props.disable ? { disableStyles: true } : { hoverStyles: true },
    {cursor: 'pointer'}
  ]
}

export const InheritedFromSpan = defaults(Span.styles, {
  color: { v: "black" },
  display: "block"
})

export const NavLink = styl("a", InheritedFromSpan, navLinkStyles)