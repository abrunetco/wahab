import React from "react";
import { FormContextType, RJSFSchema, StrictRJSFSchema, WidgetProps } from "@rjsf/utils"
import { InputBase } from "@wahab/kit"

/** The `HiddenWidget` is a widget for rendering a hidden input field.
 *  It is typically used by setting type to "hidden".
 *
 * @param props - The `WidgetProps` for this component
 */
function HiddenWidget<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any> ({
  id,
  value,
}: WidgetProps<T, S, F>) {
  return <InputBase type="hidden" id={id} name={id} value={typeof value === "undefined" ? "" : value} />
}

export default HiddenWidget