import React from "react"
import { FormContextType, IconButtonProps, RJSFSchema, StrictRJSFSchema, TranslatableString } from "@rjsf/utils"
import { Button } from "../@wahab/kit/atoms/button/Button"
import { Icon } from "../@wahab/kit/atoms/icon"
import { Box } from "../@wahab/kit/atoms/box/Box"

export default function IconButton<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any> (
  props: IconButtonProps<T, S, F>
) {
  const { iconType = "white", icon, className, uiSchema, registry, ...otherProps } = props

  return (
    <Button typo="default" bg={`${iconType}`}  className={className} {...otherProps}>
      {/* <i className={`glyphicon glyphicon-${icon}`} /> */}
      <Box width={1.5} height={1.5}>
        <Icon name={icon}/>
      </Box>
    </Button>
  )
}

export function CopyButton<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any> (
  props: IconButtonProps<T, S, F>
) {
  const {
    registry: { translateString },
  } = props

  return (
    <IconButton
      title={translateString(TranslatableString.CopyButton)}
      className="array-item-copy"
      {...props}
      icon="Copy"
    />
  )
}

export function MoveDownButton<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any> (
  props: IconButtonProps<T, S, F>
) {
  const {
    registry: { translateString },
  } = props

  return (
    <IconButton
      title={translateString(TranslatableString.MoveDownButton)}
      className="array-item-move-down"
      {...props}
      icon="ArrowDown"
    />
  )
}

export function MoveUpButton<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any> (
  props: IconButtonProps<T, S, F>
) {
  const {
    registry: { translateString },
  } = props

  return (
    <IconButton
      title={translateString(TranslatableString.MoveUpButton)}
      className="array-item-move-up"
      {...props}
      icon="ArrowUp"
    />
  )
}

export function RemoveButton<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any> (
  props: IconButtonProps<T, S, F>
) {
  const {
    registry: { translateString },
  } = props

  return (
    <IconButton
      title={translateString(TranslatableString.RemoveButton)}
      className="array-item-remove"
      {...props}
      iconType="danger"
      icon="Delete"
    />
  )
}