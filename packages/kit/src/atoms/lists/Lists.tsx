import styl, { defaults } from "../../styled"
import { Theme } from "../../styled/theme/theme"
import { StyleSystemSheet } from "../../styled/types"
import { Box, BoxProps } from "../box/Box"

export interface ListProps {
  def: boolean
}

export const listStyles = (props: ListProps & BoxProps & { theme: Theme }): StyleSystemSheet => {
  return [
    props.def && { listStyle: "auto" }
  ]
}

export const InheritedFromBox = defaults(Box.styles, {
  padding: { all: "xs" }
})

export const List = styl("ul", InheritedFromBox, listStyles)
export const ListItem = styl("li", InheritedFromBox, listStyles)