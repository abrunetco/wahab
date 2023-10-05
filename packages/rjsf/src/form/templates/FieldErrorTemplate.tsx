import React from "react"
import { errorId, FieldErrorProps, FormContextType, RJSFSchema, StrictRJSFSchema } from "@rjsf/utils"
import { Box } from "@wahab/kit/atoms/box/Box"
import { List, ListItem } from "@wahab/kit/atoms/lists/Lists"

/** The `FieldErrorTemplate` component renders the errors local to the particular field
 *
 * @param props - The `FieldErrorProps` for the errors being rendered
 */
export default function FieldErrorTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
> (props: FieldErrorProps<T, S, F>) {
  const { errors = [], idSchema } = props

  if (errors.length === 0) {
    return null
  }
  const id = errorId<T>(idSchema)

  return (
    <Box>
      {/*to do this tag have bootstrap class learn and fix it */}
      <List id={id} className="error-detail bs-callout bs-callout-info">
        {errors
          .filter((elem) => !!elem)
          .map((error, index: number) => {
            return (
              <ListItem typo="default" color="danger" key={index}>
                {error}
              </ListItem>
            )
          })}
      </List>
    </Box>
  )
}