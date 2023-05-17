import styl, { defaults } from "../../styled"
import { Theme } from "../../styled/theme/theme"
import { StyleSystemSheet } from "../../styled/types"
import { Box, BoxProps } from "../box/Box"

export interface ButtonProps {
  block: boolean
}

export const buttonStyles = (props: ButtonProps & BoxProps & { theme: Theme }): StyleSystemSheet => {
  return [
    props.block === true && { width: '100%' },
  ]
}

export const InheritedFromBox = defaults(Box.styles, {
  padding: { all: "s" }
})


export const Button = styl('button', InheritedFromBox, buttonStyles)