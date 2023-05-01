import React, { forwardRef } from "react"
// @ts-ignore
import cleanProps from 'clean-react-props'


const inputOnlyProps = ['value', 'onChange', 'name', 'placeholder'],
  excludeProps = ['height', 'width', 'color', 'default', 'open']

export default function cleaned(Component: React.ComponentType<any>, input: boolean) {
  const Cleaned = forwardRef<unknown, any>((props, ref) => {
    return (
      <Component
        {...cleanProps(props, [...excludeProps, ...(input ? [] : inputOnlyProps)])}
        children={props.children}
        ref={ref}
      />
    )
  })

  Cleaned.displayName = 'styl.' + (Component.displayName ?? '??')

  return Cleaned
}