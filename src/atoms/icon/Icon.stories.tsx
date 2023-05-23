import React from "react";
import _ from "lodash";
import { Meta, StoryObj } from "@storybook/react";
import { Icon, IconName, IconStacker, iconNames } from "./index";

import { Box } from "../box/Box";

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icons',
  tags: ['autodocs'],
  render(args) {
    const iconRows = _.chunk(iconNames, 20)
    return (
      <>
        {iconRows.map((chunk, index) => (
          <div key={index} style={{ display: 'flex' }}>
            {chunk.map((icon) => (
              <Box center key={icon} width={2} height={2}>
                <IconStacker>
                  <Icon name={icon as IconName} />
                </IconStacker>
              </Box>
            ))}
          </div>
        ))}
      </>
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