import React, { forwardRef } from "react";
import styl, { defaults } from "../../styled";
import { Icon } from "../../atoms/icon";
import { Box } from "../../atoms/box/Box";
import { Container } from "../../atoms/container/Container";
import { Label } from "../../atoms/labelInput/LabelInput";

interface CheckboxProps {
  label?: string
  value: boolean
  onChange: (v: boolean) => void
}

export const Checkbox = forwardRef((props: CheckboxProps, ref) => {
  return (
    <CheckboxButton center ref={ref} onClick={() => props.onChange(!props.value)}>
      <Box
        height={2}
        width={2}
        bg={props.value && 'success'}
        lvl={1}
        border={{ c: 'black', s: '1' }}
        rounded={{ all: 'xxs' }}
      >
        <CheckWrapper>
          {props.value && <Icon name="Check" size={1} />}
        </CheckWrapper>
      </Box>
      {props.label &&
        <Label>
          {props.label}
        </Label>
      }
    </CheckboxButton>
  )
})

const CheckWrapper = styl('div', (props: { size: number }) => [
  {
    width: props.size,
    height: props.size,
    // position: 'absolute',
    top: '2%',
    left: '-5%',
  },
])

const CheckboxButton = styl('button', defaults(Container.styles, {
  flow: 'row',
  gap: true,
}))