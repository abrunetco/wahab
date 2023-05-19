import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Label } from "./LabelInput";
import { unflatArgs } from "../../utils/flatt-args";

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  tags: ['autodocs'],
  render(args) {
    const p = unflatArgs(args)
    return <Label {...p}>
        heloooooooo
      </Label>
  },
  argTypes: {
    
  }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  }
}