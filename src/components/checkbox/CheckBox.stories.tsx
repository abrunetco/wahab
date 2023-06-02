import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { unflatArgs } from "../../utils/flatt-args"
import { CheckBox } from "./CheckBox"

const meta: Meta<typeof CheckBox> = {
  title: "Components/Checkbox",
  tags: ["autodocs"],
  render (args) {
    const p = unflatArgs(args)

    return (<CheckBox {...p} />)
  },
  argTypes: {

  }
}

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {}