import React, { useContext } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Icon, IconName, IconStacker } from "@wahab/kit";

import { Box, Container } from "@wahab/kit";
import { ThemeContext } from "styled-components";

const IconNames = (props) => {
  const themeContext = useContext(ThemeContext)
  return (
    props.children.call(this, Object.keys(themeContext.icons))
  )
}

const meta: Meta<typeof Icon> = {
  title: 'Pallete',
  tags: ['autodocs'],
  render(args) {
    return (
      <IconNames>
        {(iconNames: string[]) => (
          <Container justify="between" gap="xxl" wrap>
            {['-unknown-', ...iconNames].map((icon) => (
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
        )}
      </IconNames>
    )
  },
  argTypes: {
  },
} 

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Icons: Story = {
  args: {
  },
};