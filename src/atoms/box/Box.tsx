import styl from "../../styled"
import { Theme } from "../../styled/theme/theme"
import { ColorProp, IRound, Shadow, ISpace, StyleSystemSheet, Typography, IBorder, Size } from "../../styled/types"

export interface BoxProps {
  center: boolean,
  inline: boolean,
  flex: boolean,
  grow?: number
  shrink?: number
  basis?: Size
  width?: Size
  height?: Size
  minWidth?: Size
  maxWidth?: Size
  minHeight?: Size
  maxHeight?: Size
  color?: ColorProp
  bg?: ColorProp
  padding?: ISpace
  rounded?: IRound
  lvl?: Shadow
  typo?: Typography
  border?: IBorder
}

const borderMap = {
  r: ['r', 'x'],
  l: ['l', 'x'],
  t: ['t', 'y'],
  b: ['b', 'y'],
}

function hasBorder(side: keyof typeof borderMap, border?: IBorder): boolean {
  return !!border && (!border.mode || border.mode === 'all' || borderMap[side].includes(border.mode))
}

export const boxStyles = (props: BoxProps & { theme: Theme }): StyleSystemSheet => {
  
  return [
    props.center && { center: true },
    props.inline && { display: 'inline' },
    props.flex && { display: 'flex' },
    (props.inline && props.flex) && { display: 'inline-flex' },
    props.grow && { flexGrow: props.grow },
    props.shrink && { flexShrink: props.shrink },
    props.basis && { flexBasis: props.basis },
    props.typo && { typo: props.typo },
    hasBorder('r', props.border) && { borderRight: props.border },
    hasBorder('l', props.border) && { borderLeft: props.border },
    hasBorder('t', props.border) && { borderTop: props.border },
    hasBorder('b', props.border) && { borderBottom: props.border },
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
export const Box = styl('div', boxStyles)