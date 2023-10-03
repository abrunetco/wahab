import styl from "../../styled"
import { Theme } from "../../styled/theme/theme"
import { ColorProp, Shadow, StyleSystemSheet, Typography, IBorder, Size, OverFlow, SpaceProp, RoundProp } from "../../styled/types"


export interface MiscProps {
  id?: string
  className?: string
}
export interface BoxProps extends MiscProps {
  relative?: boolean,
  sticky?: boolean,
  fixed?: boolean,
  top?: number,
  bottom?: number,
  left?: number,
  right?: number,
  hide?: boolean,
  center?: boolean,
  inline?: boolean,
  displayNone?: boolean,
  flex?: boolean,
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
  padding?: SpaceProp
  rounded?: RoundProp
  lvl?: Shadow
  typo?: Typography
  border?: IBorder
  overflowX?: OverFlow 
  overflowY?: OverFlow 
}

const borderMap = {
  r: ["r", "x"],
  l: ["l", "x"],
  t: ["t", "y"],
  b: ["b", "y"],
}

function hasBorder (side: keyof typeof borderMap, border?: IBorder): boolean {
  return !!border && (!border.mode || border.mode === "all" || borderMap[side].includes(border.mode))
}

export const boxStyles = (props: BoxProps & { theme: Theme }): StyleSystemSheet => {

  return [
    props.hide && { hide: true },
    props.center && { center: true },
    props.inline && { display: "inline" },
    props.relative && { position: "relative" },
    props.sticky && { position: "sticky" },
    props.fixed && { position: "fixed" },
    props.top && { top: props.top },
    props.bottom && { bottom: props.bottom },
    props.left && { left: props.left },
    props.right && { right: props.right },
    props.flex && { display: "flex" },
    props.displayNone && {display: "none" },
    (props.inline && props.flex) && { display: "inline-flex" },
    props.grow && { flexGrow: props.grow },
    props.shrink && { flexShrink: props.shrink },
    props.basis && { flexBasis: props.basis },
    props.typo && { typo: props.typo },
    hasBorder("r", props.border) && { borderRight: props.border },
    hasBorder("l", props.border) && { borderLeft: props.border },
    hasBorder("t", props.border) && { borderTop: props.border },
    hasBorder("b", props.border) && { borderBottom: props.border },
    props.height && { height: props.height },
    props.width && { width: props.width },
    props.minWidth && { minWidth: props.minWidth },
    props.maxWidth && { maxWidth: props.maxWidth },
    props.minHeight && { minHeight: props.minHeight },
    props.maxHeight && { maxHeight: props.maxHeight },
    props.padding && { padding: props.padding },
    props.rounded && { borderRadius: props.rounded },
    props.lvl && { boxShadow: props.lvl },
    props.overflowX && { overflowX: props.overflowX },
    props.overflowY && { overflowY: props.overflowY },
    props.bg && { backgroundColor: props.bg },
    props.color ? { color: props.color } : { autoColor: true },
  ]
}
export const Box = styl("div", boxStyles)