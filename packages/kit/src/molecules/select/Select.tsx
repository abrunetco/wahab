import styl, { defaults } from "../../styled"
import { Theme } from "../../styled/theme/theme"
import { StyleSystemSheet } from "../../styled/types"
import { Box, BoxProps } from "@wahab/kit"
import { ComponentPropsWithoutRef } from "react"

export interface SelectProps extends ComponentPropsWithoutRef<'select'> {
  disable: boolean
}
export interface OptionProps extends ComponentPropsWithoutRef<'option'> {}

export const selectStyles = (props: SelectProps & BoxProps & { theme: Theme }): StyleSystemSheet => {
  return [
    props.disable ? { disableStyles: true } : { inputFocus: true }
  ]
}

export const optionStyles = (props: OptionProps & BoxProps & { theme: Theme }): StyleSystemSheet => {
  return [
  ]
}

export const InheritedFromBox = defaults(Box.styles, {
  padding: { all: "s" },
  border: { c: {v:"white", l:"darker"}, s: 2 },
  width: "100%",
  rounded: { all: 'xxs' }
})
export const Select = styl("select", InheritedFromBox, selectStyles)
export const Option = styl("option", InheritedFromBox, optionStyles)