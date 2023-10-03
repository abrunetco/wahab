import React, { PropsWithChildren } from "react"
import { Paraph, Span } from "../../atoms/text/Text"
import { BoxProps } from "../../atoms/box/Box"

interface TextProps extends BoxProps {
  inline?: boolean
}

export const Text = (props: PropsWithChildren<TextProps>) => {
  const T = props.inline ? Span : Paraph
  return <T {...props}>{props.children}</T>
}