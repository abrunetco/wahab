import React from "react";
import { Container } from "@kit";
import { Box } from "@kit";

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
