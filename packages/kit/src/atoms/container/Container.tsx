
import { CSSProperties } from "react"
import styl, { defaults } from "../../styled"
import { Theme } from "../../styled/theme/theme"
import { Dictionary, IAlign, IJistify, Space, StyleSystemSheet } from "../../styled/types"
import { Box, BoxProps } from "../box/Box"

export interface ContainerProps {
  flow: "row" | "col"
  wrap: boolean
  gap: boolean | Space
  align: IAlign
  alignC: IAlign
  justify: IJistify
}

const alignMap: Dictionary<CSSProperties["alignItems"], IAlign> = {
  top: "start",
  bottom: "end",
  center: "center"
}

const alignCMap: Dictionary<CSSProperties["alignItems"], IAlign> = {
  top: "start",
  bottom: "end",
  center: "center"
}

const justifyMap: Dictionary<CSSProperties["justifyContent"], IJistify> = {
  start: "start",
  end: "end",
  center: "center",
  between: "space-between",
  around: "space-around"
}

export const containerStyles = (props: ContainerProps & BoxProps & { theme: Theme }): StyleSystemSheet => {
  const gap: Space = props.gap ? props.gap === true ? "s" : props.gap : "none"

  return [
    { gap },
    props.flow === "col" && { flexDirection: "column" },
    props.alignC && {alignContent: alignCMap[props.align]},
    props.align && {alignItems: alignMap[props.align]},
    props.justify && {justifyContent: justifyMap[props.justify]},
    props.wrap && { flexWrap: "wrap" }
  ]
}

const InheritedFromBox = defaults(Box.styles, {
  width: "100%",
  flex: true,
})

export const Container = styl("div", InheritedFromBox, containerStyles)