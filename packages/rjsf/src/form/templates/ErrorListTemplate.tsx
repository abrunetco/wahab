import React from "react"
import {
  ErrorListProps,
  FormContextType,
  RJSFValidationError,
  RJSFSchema,
  StrictRJSFSchema,
  TranslatableString,
} from "@rjsf/utils"
import { Box } from "@wahab/kit"
import { Label } from "@wahab/kit"
import { List, ListItem } from "@wahab/kit"

/** The `ErrorList` component is the template that renders the all the errors associated with the fields in the `Form`
 *
 * @param props - The `ErrorListProps` for this component
 */
export default function ErrorListTemplate<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any> ({
  errors,
  registry,
}: ErrorListProps<T, S, F>) {
  const { translateString } = registry

  return (
    // to do panel mogration to card in bootstrap so we need card 
    <Box className="panel panel-danger errors">
      <Box className="panel-heading">
        <Label typo="heading3" className="panel-title">{translateString(TranslatableString.ErrorsLabel)}</Label>
      </Box>
      <List className="list-group">
        {errors.map((error: RJSFValidationError, i: number) => {
          return (
            <ListItem typo="default" color={{ v: "danger" }} key={i} className="list-group-item">
              {error.stack}
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}