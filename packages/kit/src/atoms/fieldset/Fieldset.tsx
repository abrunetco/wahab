import styl, { defaults } from "../../styled"
import { Theme } from "../../styled/theme/theme"
import { StyleSystemSheet } from "../../styled/types"
import { Box, BoxProps } from "../box/Box"

export interface FieldsetProps {
  groove: boolean
}

export const fieldsetStyles = (props: FieldsetProps & BoxProps & { theme: Theme }): StyleSystemSheet => {
  return [
    props.groove && { border: '2px groove' }
  ]
}

export const InheritedFromBox = defaults(Box.styles, {
  padding: { all: "xs" },
  
})

export const Fieldset = styl("fieldset", InheritedFromBox, fieldsetStyles)
export const Legend = styl("legend", () => [
  {
    display: 'block',
    width: 'fit-content',
    border: 'none',
    fontSize: '18px',
    paddingLeft: '3px',
    paddingRight: '3px'
  },
])