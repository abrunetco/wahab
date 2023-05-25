import styl, { defaults } from "../../styled"
import { Theme } from "../../styled/theme/theme"
import { StyleSystemSheet } from "../../styled/types"
import { Box, BoxProps } from "../box/Box"

export interface TextProps {
}

export const textStyles = (props: TextProps & BoxProps & { theme: Theme }): StyleSystemSheet => {
  return [
  ]
}

const staticStyle = {
  display: "inline"
}

export const InheritedFromBox = defaults(Box.styles, {
})

export const Text = styl('span', InheritedFromBox, staticStyle, textStyles)