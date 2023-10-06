import React, { useContext } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Icon, IconName, IconStacker } from "@wahab/kit";

import { Box } from "../box/Box";
import { Container } from "../container/Container";
import { ThemeContext } from "styled-components";


const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icons',
  tags: ['autodocs'],
  render(args) {
    const iconNames = ['-unknown-', 'Check', 'PageFirst', 'PagePrev', 'PageNext', 'PageLast', 'Bullet', 'Search']
    return (
      <Container justify="between" gap="xxl" wrap>
        {iconNames.map((icon) => (
          <Container width={5} flow="col" key={icon} align="center">
            <Box center width={5} height={5}>
              <IconStacker>
                <Icon name={icon as IconName} />
              </IconStacker>
            </Box>
            <Box center>{icon}</Box>
          </Container>
        ))}
      </Container>
    )
  },
  argTypes: {
  },
} 

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
  },
};