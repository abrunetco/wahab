import React from "react"
import { getSubmitButtonOptions, FormContextType, RJSFSchema, StrictRJSFSchema, SubmitButtonProps } from "@rjsf/utils"
import { Box } from "@wahab/kit"
import { Button } from "@wahab/kit"

/** The `SubmitButton` renders a button that represent the `Submit` action on a form
 */
export default function SubmitButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
> ({ uiSchema }: SubmitButtonProps<T, S, F>) {
  const { submitText, norender, props: submitButtonProps = {} } = getSubmitButtonOptions<T, S, F>(uiSchema)

  if (norender) {
    return null
  }

  return (
    <Box>
      <Button typo="default" rounded="xs" padding={{x:"m", y:"s"}} type="submit" bg={"secondary"} color="white" {...submitButtonProps} className={`${submitButtonProps.className || ""}`}>
        {submitText}
      </Button>
    </Box>
  )
}