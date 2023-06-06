import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { unflatArgs } from "../../utils/flatt-args";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: 'Molecules/Checkbox',
  tags: ['autodocs'],
  render(args) {
    const [state, setState] = useState(false)
    return <Checkbox value={state} onChange={v => setState(v)} label={args.label}/>
  },
  argTypes: {
    label: { control: 'text' }
  }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}