import React, { ComponentPropsWithoutRef, forwardRef, ReactElement } from "react"
import styl from "../../styled"
// import { Icon } from "../../atoms/icon"
import { Box } from "@wahab/kit"
import { Container } from "@wahab/kit"
import { Label } from "@wahab/kit"
import { InputBase } from "@wahab/kit"
import { Text } from "@wahab/kit"

interface CheckboxProps extends ComponentPropsWithoutRef<'input'> {
  label?: string | ReactElement
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