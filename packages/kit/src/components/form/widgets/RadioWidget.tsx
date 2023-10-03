import React, { FocusEvent, useCallback } from "react"
import {
  ariaDescribedByIds,
  enumOptionsIsSelected,
  enumOptionsValueForIndex,
  optionId,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
} from "@rjsf/utils"
import { Text } from "../../../molecules/text/Text"
import { Box } from "../../../atoms/box/Box"
import { Label } from "../../../atoms/labelInput/LabelInput"
import { Radio } from "../../../molecules/radio/Radio"

/** The `RadioWidget` is a widget for rendering a radio group.
 *  It is typically used with a string property constrained with enum options.
 *
 * @param props - The `WidgetProps` for this component
 */
function RadioWidget<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any> ({
  options,
  value,
  required,
  disabled,
  readonly,
  autofocus = false,
  onBlur,
  onFocus,
  onChange,
  id,
}: WidgetProps<T, S, F>) {
  const { enumOptions, enumDisabled, inline, emptyValue } = options

  const handleBlur = useCallback(
    ({ target: { value } }: FocusEvent<HTMLInputElement>) =>
      onBlur(id, enumOptionsValueForIndex<S>(value, enumOptions, emptyValue)),
    [onBlur, id]
  )

  const handleFocus = useCallback(
    ({ target: { value } }: FocusEvent<HTMLInputElement>) =>
      onFocus(id, enumOptionsValueForIndex<S>(value, enumOptions, emptyValue)),
    [onFocus, id]
  )

  return (
    <Box flex className="field-radio-group" id={id}>
      {Array.isArray(enumOptions) &&
        enumOptions.map((option, i) => {
          const checked = enumOptionsIsSelected<S>(option.value, value)
          const itemDisabled = Array.isArray(enumDisabled) && enumDisabled.indexOf(option.value) !== -1
          const disabledCls = disabled || itemDisabled || readonly ? "disabled" : ""

          const handleChange = () => onChange(option.value)

          const radio = (
            <Text flex>
              <Radio
                id={optionId(id, i)}
                checked={checked}
                name={id}
                required={required}
                value={String(i)}
                disabled={disabled || itemDisabled || readonly}
                autoFocus={autofocus && i === 0}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                aria-describedby={ariaDescribedByIds<T>(id)}
                label={option.label}
              />
            </Text>
          )

          return inline ? (
            <Label key={i} className={`radio-inline ${disabledCls}`}>
              {radio}
            </Label>
          ) : (
            <Box key={i} className={`radio ${disabledCls}`}>
              <Label>{radio}</Label>
            </Box>
          )
        })}
    </Box>
  )
}

export default RadioWidget