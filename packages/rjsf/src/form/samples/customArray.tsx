import React from "react";
import { Box } from "@wahab/kit";
import { Button } from "@wahab/kit";
import { Container } from "@wahab/kit";
import { Text } from "@wahab/kit";
const ArrayFieldTemplate: React.FC<{ className: string; items?: any[]; canAdd?: boolean; onAddClick: () => void }> = ({
  className,
  items,
  canAdd,
  onAddClick,
}) => {
  return (
    <Box className={className}>
      {items &&
        items.map((element) => (
          <Box key={element.key} className={element.className}>
            <Box>{element.children}</Box>
            {element.hasMoveDown && (
              <Button onClick={element.onReorderClick(element.index, element.index + 1)}>Down</Button>
            )}
            {element.hasMoveUp && (
              <Button onClick={element.onReorderClick(element.index, element.index - 1)}>Up</Button>
            )}
            <Button onClick={element.onDropIndexClick(element.index)}>Delete</Button>
          </Box>
        ))}

      {canAdd && (
        <Container flow="row">
          {/*TODO: we need end and start justify for Box, responsivity problem */}
          <Text className="col-xs-3 col-xs-offset-9 array-item-add text-right">
            <Button onClick={onAddClick} type="button">
              Custom +
            </Button>
          </Text>
        </Container>
      )}
    </Box>
  )
}

export default {
  schema: {
    title: "Custom array of strings",
    type: "array",
    items: {
      type: "string",
    },
  },
  formData: ["react", "jsonschema", "form"],
  templates: { ArrayFieldTemplate },
}
