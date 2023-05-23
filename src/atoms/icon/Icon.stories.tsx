import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Icon, IconStacker } from "./index";
import { unflatArgs } from "../../utils/flatt-args";

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icons',
  tags: ['autodocs'],
  render(args) {
    const p = unflatArgs(args)
    return (
      <IconStacker>
        <Icon name="key" {...p} />
      </IconStacker>
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