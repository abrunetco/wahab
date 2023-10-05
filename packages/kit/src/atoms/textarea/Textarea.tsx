import { HtmlHTMLAttributes } from "react"
import styl, { defaults } from "../../styled"
import { Theme } from "../../styled/theme/theme"
import { StyleSystemSheet } from "../../styled/types"
import { Box, BoxProps } from "../box/Box"

export interface TextareaProps extends HtmlHTMLAttributes<HTMLInputElement> {
  block: boolean
  disable: boolean
}

export const textareaStyles = (props: TextareaProps & BoxProps & { theme: Theme }): StyleSystemSheet => {
  return [
    props.block && { width: "100%" },
    props.disable ? { disableStyles: true } : { inputFocus: true }
  ]
}

const InheritedFromBox = defaults(Box.styles, {
  border: { c: {v:"white", l:"darker"}, s: 2 },
  padding: { all: "xs" },
  rounded: { all: "xxs" },
  typo: "default",
  lvl: 1
})

export const Textarea = styl('textarea', InheritedFromBox, textareaStyles)

