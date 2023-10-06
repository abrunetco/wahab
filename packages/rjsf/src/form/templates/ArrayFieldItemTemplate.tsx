import React from "react"
import { ArrayFieldTemplateItemType, FormContextType, RJSFSchema, StrictRJSFSchema } from "@rjsf/utils"
import { Box } from "@wahab/kit"
import { Container } from "@wahab/kit"

/** The `ArrayFieldItemTemplate` component is the template used to render an items of an array.
 *
 * @param props - The `ArrayFieldTemplateItemType` props for the component
 */
export default function ArrayFieldItemTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
> (props: ArrayFieldTemplateItemType<T, S, F>) {
  const {
    children,
    className,
    disabled,
    hasToolbar,
    hasMoveDown,
    hasMoveUp,
    hasRemove,
    hasCopy,
    index,
    onCopyIndexClick,
    onDropIndexClick,
    onReorderClick,
    readonly,
    registry,
    uiSchema,
  } = props
  const { CopyButton, MoveDownButton, MoveUpButton, RemoveButton } = registry.templates.ButtonTemplates

  return (
    // to do we need col because here use col in classname and pading prop heve TS error
    <Box className={className}>
      <Box className={hasToolbar ? "col-xs-9" : "col-xs-12"}>{children}</Box>
      {hasToolbar && (
        <Box className="col-xs-3 array-item-toolbox">
          <Container
            justify="between"
            className="btn-group"
            gap="s"
          >
            {(hasMoveUp || hasMoveDown) && (
              <MoveUpButton
                padding={{
                  all: 's'
                }}
                block
                disabled={disabled || readonly || !hasMoveUp}
                onClick={onReorderClick(index, index - 1)}
                uiSchema={uiSchema}
                registry={registry}
              />
            )}
            {(hasMoveUp || hasMoveDown) && (
              <MoveDownButton
                padding={{
                  all: 's'
                }}
                block
                disabled={disabled || readonly || !hasMoveDown}
                onClick={onReorderClick(index, index + 1)}
                uiSchema={uiSchema}
                registry={registry}
              />
            )}
            {hasCopy && (
              <CopyButton
                padding={{
                  all: 's'
                }}
                block
                disabled={disabled || readonly}
                onClick={onCopyIndexClick(index)}
                uiSchema={uiSchema}
                registry={registry}
              />
            )}
            {hasRemove && (
              <RemoveButton
                padding={{
                  all: 's'
                }}
                block
                disabled={disabled || readonly}
                onClick={onDropIndexClick(index)}
                uiSchema={uiSchema}
                registry={registry}
              />
            )}
          </Container>
        </Box>
      )}
    </Box>
  )
}