import styl, { defaults } from "../../styled"
import { Theme } from "../../styled/theme/theme"
import { StyleSystemSheet } from "../../styled/types"
import { Box, BoxProps } from "../box/Box"

export interface ButtonProps {
  block: boolean
  disable: boolean
}

const staticButtonProps = (props: { theme: Theme }) => ({
  backgroundColor: props.theme.defaultBtnBgName
})

export const buttonStyles = (props: ButtonProps & BoxProps & { theme: Theme }): StyleSystemSheet => {
  return [
    props.block && { width: '100%' },
    props.disable ? { disableStyles: true } : { hoverStyles: true },
  ]
}

export const InheritedFromBox = defaults(Box.styles, {
  padding: { all: "s" },
  rounded: { all: "s" },
  lvl: 1,
})


export const Button = styl('button', staticButtonProps, InheritedFromBox, buttonStyles)