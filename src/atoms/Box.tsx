import styl from "../styled"
import { Theme } from "../styled/theme/theme"
import { StyleSystemSheet } from "../styled/types"

export type Size = number | string

export interface BoxProps {
  width?: Size
  height?: Size
  minWidth?: Size
  maxWidth?: Size
  minHeight?: Size
  maxHeight?: Size
  mode: keyof Theme['palette']
  mode2: 'main' | 'secondary'
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
    props.mode && {
      color: { v: props.mode , l: "darkest" },
      backgroundColor: { v: props.mode , l: "lightest" },
      borderColor: { v: props.mode , l: "darker" },
    }
  ]
}

export const boxStyles2 = (props: BoxProps): StyleSystemSheet => {
  if (props.mode2 === 'main') return {
    color: { v: 'primary' , l: "darkest" },
    backgroundColor: { v: 'primary' , l: "lightest" },
    borderColor: { v: 'primary' , l: "darker" },
  }
  else return {
    color: { v: 'danger' , l: "darkest" },
    backgroundColor: { v: 'danger' , l: "lightest" },
    borderColor: { v: 'danger' , l: "darker" },
  }
}


export const Box = styl('div', boxStyles, staticBoxProps)