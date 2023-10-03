import React, { forwardRef, ComponentPropsWithoutRef } from "react";
import { Container } from "../../atoms/container/Container";
import { Icon, IconWrapper } from "../../atoms/icon";
import { Box } from "../../atoms/box/Box";
import { Label } from "../../atoms/labelInput/LabelInput";
import { Button } from "../../atoms/button/Button";

interface RadioProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  value: any;
  onChange: (i: any) => void;
  checked: any;
}


export const Radio = forwardRef((props: RadioProps, ref) => {
  return (
      <Container align="center" relative >
        <Box
          center
          bg="white"
          rounded={{ all: "circle" }}
          width={1.2}
          height={1.2}
          border={{c: {v: "white", l:"darkest"}, s: "2" }}
        >
          {props.checked && (
            <IconWrapper>
                {" "}
                <Icon name="Bullet" />{" "}
            </IconWrapper>
          )}
        </Box>
        {props.label && <Label padding={{ s: 's' }}>{props.label}</Label>}
        <Button stretch onClick={() => props.onChange(props.value)}/>
      </Container>
  );
});