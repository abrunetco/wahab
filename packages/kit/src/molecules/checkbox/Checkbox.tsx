import React, { ComponentPropsWithoutRef, forwardRef } from "react"
import styl from "../../styled"
// import { Icon } from "../../atoms/icon"
import { Box } from "../../atoms/box/Box"
import { Container } from "../../atoms/container/Container"
import { Label } from "../../atoms/labelInput/LabelInput"
import { InputBase } from "../../atoms/input/Input"
import { Text } from "../text/Text"

interface CheckboxProps extends ComponentPropsWithoutRef<'input'> {
  label?: string
}

export const Checkbox = forwardRef((props: CheckboxProps, ref) => {
  return (
    <Label htmlFor={props.id} padding="none">
      <Container>
        <Box
          height={1.3}
          width={1.3}
          align="center"
          bg={props.checked && "active"}
          lvl={1}
          border={{ c: {v: "white", l: "darker"}, s: "1" }}
          rounded={{ all: "xxs" }}
        >
          <CheckWrapper>
            <InputBase {...props} hide type="checkbox" ref={ref}/>
            {/* DOTO: FIX AFTER ADDING ICONS */}
            {/* {props.checked && <Icon name="Check" />} */}
          </CheckWrapper>
        </Box>
        {props.label && <Text padding="s:s">{props.label}</Text>}
      </Container>
    </Label>
  )
})

const CheckWrapper = styl("div", () => [
  {
    display: "flex",
  },
])