import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Paginate } from "@wahab/kit"

const meta: Meta<typeof Paginate> = {
  title: "Molecules/Paginate",
  tags: ["autodocs"],
  render (args) {
    const [state, setState] = useState(args)
    return <Paginate {...state} onChange={d => {
      setState({...state, ...d})
      args.onChange?.(d)
    }}/>
  },
  argTypes: {
    onChange: {action: 'onChange'}
  }
}

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    limit: 30,
    skip: 0,
    total: 300
  }
}