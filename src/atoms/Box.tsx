import styl from "../styled"
import { Theme } from "../styled/theme/theme"
import { ColorProp, Round, Shadow, Space, StyleSystemSheet, Typography } from "../styled/types"

export type Size = number | string

export interface BoxProps {
  width?: Size
  height?: Size
  minWidth?: Size
  maxWidth?: Size
  minHeight?: Size
  maxHeight?: Size
  color?: ColorProp
  bg?: ColorProp
  padding?: Space
  rounded?: Round
  lvl?: Shadow
  typo?: Typography
}

const staticBoxProps: StyleSystemSheet = {
  display: 'block',
  center: true,
}

export const boxStyles = (props: BoxProps & { theme: Theme }): StyleSystemSheet => {
  console.log('props', props);
  
  return [
    props.typo && { typo: props.typo },
    props.height && { height: props.height },
    props.width && { width: props.width },
    props.minWidth && { minWidth: props.minWidth },
    props.maxWidth && { maxWidth: props.maxWidth },
    props.minHeight && { minHeight: props.minHeight },
    props.maxHeight && { maxHeight: props.maxHeight },
    props.padding && { padding: props.padding },
    props.rounded && { borderRadius: props.rounded },
    props.lvl && { boxShadow: props.lvl },
    props.bg ? { backgroundColor: props.bg } : { backgroundColor: props.theme.bgName },
    props.color ? { color: props.color } : { autoColor: true },
  ]
}
export const Box = styl('div', boxStyles, staticBoxProps)