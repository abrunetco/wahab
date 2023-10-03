import React from "react";
import { Container } from "../../atoms/container/Container";
import { Box } from "../../atoms/box/Box";

interface DividerProps {}

export const Divider = (props: DividerProps) => {
  return (
    <Container>
      <Box
        height={0.2}
        width="100%"
        rounded={{
          all: 'm'
        }}
        bg={{
          l: 'light',
          v: 'black'
        }}
      ></Box>
    </Container>
  );
};
