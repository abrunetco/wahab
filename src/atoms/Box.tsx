import styl from "../styled"
import { StyleSystemSheet } from "../styled/types"

export type Size = number | string

export interface BoxProps {
  width?: Size
  height?: Size
  minWidth?: Size
  maxWidth?: Size
  minHeight?: Size
  maxHeight?: Size
}

const staticBoxProps: StyleSystemSheet = {
  display: 'block',
  center: true,
}

export const boxStyles = (props: BoxProps): StyleSystemSheet => {
  return [
    props.height && { height: props.height },
    props.width && { width: props.width },
    props.minWidth && { minWidth: props.minWidth },
    props.maxWidth && { maxWidth: props.maxWidth },
    props.minHeight && { minHeight: props.minHeight },
    props.maxHeight && { maxHeight: props.maxHeight },
  ]
}


export const Box = styl('div', boxStyles, staticBoxProps)