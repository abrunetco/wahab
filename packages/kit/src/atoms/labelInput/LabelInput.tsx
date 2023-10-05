import styl, { defaults } from "../../styled"
import { Theme } from "../../styled/theme/theme"
import { StyleSystemSheet } from "../../styled/types"
import { Box, BoxProps } from "../box/Box"

export interface LabelProps {
}

export const labelStyles = (props: LabelProps & BoxProps & { theme: Theme }): StyleSystemSheet => {
  return [
]
}

const InheritedFromBox = defaults(Box.styles, {
  padding: { all: "s" },
  typo: "default"
})
export const Label = styl("label", InheritedFromBox, labelStyles)