import { DescriptionFieldProps, FormContextType, RJSFSchema, StrictRJSFSchema } from "@rjsf/utils"
import React from "react"
import { Box } from "../../../atoms/box/Box"
import { Text } from "../../../molecules/text/Text";

/** The `DescriptionField` is the template to use to render the description of a field
 *
 * @param props - The `DescriptionFieldProps` for this component
 */
export default function DescriptionFieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
> (props: DescriptionFieldProps<T, S, F>) {
  const { id, description } = props

  if (!description) {
    return null
  }
  if (typeof description === "string") {
    return (
      <Text padding="b:m" typo="default" id={id} className="field-description">
        {description}
      </Text>
    )
  } else {
    return (
      <Box color="secondary" typo="default" id={id} className="field-description">
        {description}
      </Box>
    )
  }
}