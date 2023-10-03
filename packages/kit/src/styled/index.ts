// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from "react"
import styled, { IntrinsicElementsKeys } from "styled-components"
import _ from "lodash"
import { FunctionSheet, MergeSheets, StyleSystemSheet } from "./types"
import { getChangedProps, mergeFunctionSheets, renderStyles } from "./utils"
import cleaned from "./cleaned"

export default function styl<
  EL extends IntrinsicElementsKeys | React.ComponentType<any>,
  ST extends FunctionSheet[],
  DE extends MergeSheets<ST> & React.ComponentProps<EL> & { explain?: boolean }
> (el: EL, ...styles: ST) {
  const merged = mergeFunctionSheets(styles),
    isInput = typeof el === "string" && ["input", "textarea", "select", "option"].includes(el),
    tag = typeof el === "string" ? cleaned(styled(el)({}), isInput) : (el as any)

  let lastProps: DE | null = null,
    lastStyles: any = null

  return Object.assign(
    styled(tag)`
      ${(props) => {
    const changedProps = getChangedProps(lastProps, props)

    if (changedProps) {
      if (props.explain) console.log(changedProps)
      lastStyles = renderStyles(merged(props), props.theme)
      lastProps = props
    }

    return lastStyles
  }}
    `,
    { styles: merged }
  )
}

export function defaults<T> (fn: (props: T) => StyleSystemSheet, defaults: Partial<T>) {
  return (props: T) => fn({ ...defaults, ...props })
}
