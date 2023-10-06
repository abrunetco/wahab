import React, { PropsWithChildren } from "react";
import { Box, BoxProps } from "@wahab/kit";
import styled from "styled-components";

interface ButtonGroupProps extends BoxProps {

}

export const ButtonGroup = (props: PropsWithChildren<ButtonGroupProps>) => {
  return (
    <Buttonwrapper {...props}>
      {props.children}
    </Buttonwrapper>
  )
};

export const Buttonwrapper: React.ComponentType<any> = styled(Box)`
&>*:not(:first-child) {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
  border-left: none !important;
}
&>*:not(:last-child) {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important
}
`
