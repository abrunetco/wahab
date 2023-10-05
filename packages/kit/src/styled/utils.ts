import { CSSProperties } from "react"
import { mappedProps, mixinMap } from "./maps"
import { FunctionSheet, MergeSheets, StyleSystemProps, StyleSystemSheet } from "./types"
// @ts-ignore
import styleToCss from "style-object-to-css-string"
import _ from "_"
import { Theme } from "./theme/theme"
import { ThemeProps, css } from "styled-components"

export const systemSheet = (sheet: StyleSystemSheet) => (props: ThemeProps<Theme>) =>
  css`
    ${renderStyles(mergeSheets([sheet]), props.theme)}
  `

export function getChangedProps<T extends Object> (
  prev: T,
  next: T,
  flatten?: { [K in keyof T]: any }
): boolean | string {
  if (prev === next) return false
  if (!prev || !next) return true

  const aKeys = Object.keys(prev),
    bKeys = Object.keys(next),
    len = aKeys.length

  if (bKeys.length !== len) return true

  for (let i = 0; i < len; i++) {
    const key = aKeys[i]

    if (flatten && flatten[key]) {
      if (getChangedProps(prev[key], next[key])) return key
    } else if (prev[key] !== next[key]) {
      return key
    }
  }

  return false
}

export function renderStyles (styles: StyleSystemProps, theme: Theme) {
  const s: any[] = [],
    inlines: CSSProperties = {}

  for (const n in styles) {
    const raw = styles[n]

    if (n in mixinMap) s.push(mixinMap[n](raw))
    else inlines[n] = n in mappedProps ? mappedProps[n](raw, theme) : raw
  }

  s.push(styleToCss(inlines))

  return s
}

export function mergeSheets (sheets: StyleSystemSheet[]) {
  const props: StyleSystemProps = {}

  sheets.forEach((sheet) => {
    if (!sheet) return
    if (Array.isArray(sheet)) sheet = mergeSheets(sheet)
    Object.assign(props, sheet)
  })

  return props
}

export function callSheet (sheet: FunctionSheet<any>, props: any): StyleSystemProps {
  const called = typeof sheet === "function" ? sheet(props) : sheet

  return (_.isArray(called) ? mergeSheets(called) : called) || {}
}

export function mergeFunctionSheets<ST extends FunctionSheet | FunctionSheet[]> (sheets: ST) {
  return (props: MergeSheets<ST>) =>
    mergeSheets(_.castArray(sheets).map((st) => callSheet(st, props)))
}