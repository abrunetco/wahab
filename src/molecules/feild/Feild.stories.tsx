import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Feild } from "./Feild";
import { unflatArgs } from "../../utils/flatt-args";

const meta: Meta<typeof Feild> = {
  title: 'Molecules/Feild',
  tags: ['autodocs'],
  // component: Feild,
  render(args) {
    const p = unflatArgs(args)
    return <Feild {...p} type="number" label="hasan" />
  },
  argTypes: {
    label: { control: 'text' }
  }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}