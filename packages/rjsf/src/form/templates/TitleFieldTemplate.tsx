import { FormContextType, TitleFieldProps, RJSFSchema, StrictRJSFSchema } from "@rjsf/utils"
import React from "react";
import { Text } from "@wahab/kit/molecules/text/Text";
// import { Box } from "@wahab/kit/atoms/box/Box";
import { Icon } from "@wahab/kit/atoms/icon";

// const REQUIRED_FIELD_SYMBOL = "*"

/** The `TitleField` is the template to use to render the title of a field
 *
 * @param props - The `TitleFieldProps` for this component
 */
export default function TitleFieldTemplate<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any> (
  props: TitleFieldProps<T, S, F>
) {
  const { id, title, required } = props

  return (
    <Text typo="heading5" flex id={id}>
      {title}
      {required && 
      <Text center width={1}>
        <Icon name="VDraft"/>
      </Text>
      }
    </Text>
  )
}