import React from "react"
import { FormContextType, RJSFSchema, StrictRJSFSchema, WidgetProps } from "@rjsf/utils"
import { Box } from "@wahab/kit/atoms/box/Box"
import { Text } from "@wahab/kit/molecules/text/Text"

/** The `RangeWidget` component uses the `BaseInputTemplate` changing the type to `range` and wrapping the result
 * in a div, with the value along side it.
 *
 * @param props - The `WidgetProps` for this component
 */
export default function RangeWidget<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any> (
  props: WidgetProps<T, S, F>
) {
  const {
    value,
    registry: {
      templates: { BaseInputTemplate },
    },
  } = props

  return (
    <Box className="field-range-wrapper">
      <BaseInputTemplate rounded="circle" type="range" {...props} />
      <Text inline className="range-view">{value}</Text>
    </Box>
  )
}