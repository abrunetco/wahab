import React from "react"
import { helpId, FieldHelpProps, FormContextType, RJSFSchema, StrictRJSFSchema } from "@rjsf/utils"
import { Text } from "../../../molecules/text/Text"
import { Box } from "../../../atoms/box/Box"

/** The `FieldHelpTemplate` component renders any help desired for a field
 *
 * @param props - The `FieldHelpProps` to be rendered
 */
export default function FieldHelpTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
> (props: FieldHelpProps<T, S, F>) {
  const { idSchema, help } = props

  if (!help) {
    return null
  }
  const id = helpId<T>(idSchema)

  if (typeof help === "string") {
    return (
      <Text typo="default" id={id} className="help-block">
        {help}
      </Text>
    )
  }

  return (
    <Box typo="default" id={id} className="help-block">
      {help}
    </Box>
  )
}