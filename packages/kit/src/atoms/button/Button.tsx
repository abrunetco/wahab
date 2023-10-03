import { ComponentPropsWithoutRef } from "react"
import styl, { defaults } from "../../styled"
import { Theme } from "../../styled/theme/theme"
import { StyleSystemSheet } from "../../styled/types"
import { Box, BoxProps } from "../box/Box"

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  block: boolean
  stretch?: boolean
}

const staticButtonProps = (props: { theme: Theme }) => ({
  backgroundColor: props.theme.defaultBtnBgName
})

export const buttonStyles = (props: ButtonProps & BoxProps & { theme: Theme }): StyleSystemSheet => {
  return [
    props.stretch && { stretch: true },
    props.block && { width: "100%" },
    props.disabled ? { disableStyles: true } : { hoverStyles: true },
  ]
}

export const InheritedFromBox = defaults(Box.styles, {
  padding: { all: "m" },
  rounded: { all: "s" },
  lvl: 1,
  border: { s: 0, c: "transparent" }
})

export const Button = styl("button", staticButtonProps, InheritedFromBox, buttonStyles)