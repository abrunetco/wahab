import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Feild } from "./Feild";
import { unflatArgs } from "../../utils/flatt-args";

const meta: Meta<typeof Feild> = {
  title: 'Molecules/Feild',
  tags: ['autodocs'],
  render(args) {
    const p = unflatArgs(args)
    return <Feild {...p} type={args.type} label={args.label} />
  },
  argTypes: {
    label: { control: 'text' },
    type: { control: 'select', options: ["number", "text", "email", "image", "password"] }
  }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}