import React, { PropsWithChildren } from "react"
import { Paraph, Span } from "@kit"
import { BoxProps } from "@kit"

interface TextProps extends BoxProps {
  inline?: boolean
}

export const Text = (props: PropsWithChildren<TextProps>) => {
  const T = props.inline ? Span : Paraph
  return <T {...props}>{props.children}</T>
}