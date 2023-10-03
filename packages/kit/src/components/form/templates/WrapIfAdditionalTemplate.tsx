import React from "react";

import {
  ADDITIONAL_PROPERTY_FLAG,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  TranslatableString,
  WrapIfAdditionalTemplateProps,
} from "@rjsf/utils"

import Label from "./FieldTemplate/Label"
import { Box } from "../../../atoms/box/Box";
import { InputBase } from "../../../atoms/input/Input";
import { Container } from "../../../atoms/container/Container";

/** The `WrapIfAdditional` component is used by the `FieldTemplate` to rename, or remove properties that are
 * part of an `additionalProperties` part of a schema.
 *
 * @param props - The `WrapIfAdditionalProps` for this component
 */
export default function WrapIfAdditionalTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
> (props: WrapIfAdditionalTemplateProps<T, S, F>) {
  const {
    id,
    classNames,
    style,
    disabled,
    label,
    onKeyChange,
    onDropPropertyClick,
    readonly,
    required,
    schema,
    children,
    uiSchema,
    registry,
  } = props
  const { templates, translateString } = registry
  // Button templates are not overridden in the uiSchema
  const { RemoveButton } = templates.ButtonTemplates
  const keyLabel = translateString(TranslatableString.KeyLabel, [label])
  const additional = ADDITIONAL_PROPERTY_FLAG in schema

  if (!additional) {
    return (
      <Box padding="b:l" className={classNames} style={style}>
        {children}
      </Box>
    )
  }

  return (
    <Box className={classNames} style={style}>
      <Container flow="row">
        <Box className="col-xs-5 form-additional">
          <Box>
            <Label label={keyLabel} required={required} id={`${id}-key`} />
            <InputBase 
              type="text"
              id={`${id}-key`}
              onBlur={(event: any) => onKeyChange(event.target.value)}
              defaultValue={label}
            />
          </Box>
        </Box>
        <Box className="form-additional col-xs-5">{children}</Box>
        <Box className="col-xs-2">
          <RemoveButton
            className="array-item-remove"
            disabled={disabled || readonly}
            onClick={onDropPropertyClick(label)}
            uiSchema={uiSchema}
            registry={registry}
          />
        </Box>
      </Container>
    </Box>
  )
}