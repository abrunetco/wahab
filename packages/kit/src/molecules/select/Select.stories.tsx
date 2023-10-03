import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { unflatArgs } from "../../utils/flatt-args"
import { Option, Select } from "./Select"

const meta: Meta<typeof Select> = {
  title: "Molecules/Select",
  tags: ["autodocs"],
  render (args) {
    const p = unflatArgs(args)

    return <Select {...p}>
        <Option>select one of them!</Option>
        <Option>you</Option>
        <Option>they</Option>
        </Select>
  },
  argTypes: {
  }
}

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  }
}