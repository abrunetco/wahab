import React, { forwardRef } from "react"
import cleanProps from "clean-react-props"

const inputOnlyProps = ["value", "onChange", "name", "placeholder"],
  excludeProps = ["height", "width", "color", "default", "open"]

type UnknownPropsWithChildren = unknown & {
  children: unknown
}
export default function cleaned (Component: React.ComponentType<UnknownPropsWithChildren>, input: boolean) {
  const Cleaned = forwardRef<unknown, UnknownPropsWithChildren>((props, ref) => {
    return (
      <Component
        {...cleanProps(props, [...excludeProps, ...(input ? [] : inputOnlyProps)])}
        ref={ref}
      >
        {props.children}
      </Component>
    )
  })

  Cleaned.displayName = "styl." + (Component.displayName ?? "??")

  return Cleaned
}