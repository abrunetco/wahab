import React, { forwardRef, ComponentPropsWithoutRef } from "react";
import { Container } from "@wahab/kit";
import { Icon, IconWrapper } from "@wahab/kit";
import { Box } from "@wahab/kit";
import { Label } from "@wahab/kit";
import { Button } from "@wahab/kit";

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