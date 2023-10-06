import React from "react";
import { FormContextType, IconButtonProps, RJSFSchema, StrictRJSFSchema, TranslatableString } from "@rjsf/utils"
import IconButton from "./IconButton"
import { Container } from "@wahab/kit";
import { Text } from "@wahab/kit";

export default function AddButton<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any> ({
  className,
  onClick,
  disabled,
  registry,
}: IconButtonProps<T, S, F>) {
  const { translateString } = registry

  return (
    <Container
      flow="row"
      padding={{
        all: 'none'
      }}
    >
      <Text padding="t:l" className={`col-xs-3 col-xs-offset-9 text-right ${className}`}>
        <IconButton
          rounded="xs"
          iconType="active"
          icon="Plus"
          className="col-xs-12"
          title={translateString(TranslatableString.AddButton)}
          onClick={onClick}
          disabled={disabled}
          registry={registry}
        />
      </Text>
    </Container>
  )
}