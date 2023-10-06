import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Radio } from "@wahab/kit";

const meta: Meta<typeof Radio> = {
  title: 'Molecules/Radio',
  tags: ['autodocs'],
  render(args) {
    const [state, setState] = useState('1')
    return <>
      <Radio value="1" checked={state == "1"} onChange={i => setState(i)} label={args.label}/>
      <Radio value="2" checked={state == "2"} onChange={i => setState(i)} label={args.label}/>
    </>
  },
  argTypes: {
    label: { control: 'text' }
  }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}