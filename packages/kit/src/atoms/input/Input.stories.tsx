import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { InputText } from "@wahab/kit"
import { unflatArgs } from "../../utils/flatt-args"
import { light } from "../../styled/theme/theme"

const meta: Meta<typeof InputText> = {
  title: "Atoms/Input",
  tags: ["autodocs"],
  render (args) {
    const p = unflatArgs(args)

    return <InputText {...p} />
  },
  argTypes: {
    block: { control: "boolean" },
    disable: { control: "boolean" },
    "border.s": { control: "select", options: Object.keys(light.borderSizes) },
    "border.c": { control: "select", options: Object.keys(light.palette) },
    "padding.all": { control: "select", options: Object.keys(light.spacing) },
    "rounded.all": { control: "select", options: Object.keys(light.round) },
    "color.v": { control: "select", options: Object.keys(light.palette) },
    "color.l": { control: "select", options: [...Object.keys(light.lightness), null] },
  }
}

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {}
export const Block: Story = {
  args: {
    block: true,
  }
}

export const Small: Story = {
  args: {
    "padding.all": "xxxs"
  }
}

export const Large: Story = {
  args: {
    "padding.all": "s",
  }
}