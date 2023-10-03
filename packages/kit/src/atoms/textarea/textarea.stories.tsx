import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Textarea } from "./textarea"
import { unflatArgs } from "../../utils/flatt-args"
import { light } from "../../styled/theme/theme"

const meta: Meta<typeof Textarea> = {
  title: "Atoms/Textarea",
  tags: ["autodocs"],
  render (args) {
    const p = unflatArgs(args)

    return <Textarea {...p} />
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