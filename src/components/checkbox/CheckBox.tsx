import styled from "styled-components"
import styl, { defaults } from "../../styled"
import { Theme } from "../../styled/theme/theme"
import { StyleSystemSheet } from "../../styled/types"
import { Box, BoxProps } from "../../atoms/box/Box"

export interface CheckboxProps {
  block: boolean
  disable: boolean
}

export const checkboxStyles = (props: CheckboxProps & BoxProps & { theme: Theme }): StyleSystemSheet => {
  return [
    props.block && { width: '100%' },
    props.disable ? { disableStyles: true } : { inputFocus: true }
  ]
}

export const InheritedFromBox = defaults(Box.styles, {
    padding: { all: "m" },
    bg: "body"  ,
    border: { s: 1, c: "black" } ,
    rounded: { all: "xs" }
})

const TextInputBase = styled.input.attrs({ type: 'checkbox' })``
export const CheckBox = styl(TextInputBase, InheritedFromBox, checkboxStyles)