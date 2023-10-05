import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Label } from "@kit"
import { unflatArgs } from "../../utils/flatt-args"
import {light} from "../../styled/theme/theme"

const meta: Meta<typeof Label> = {
  title: "Atoms/Label",
  tags: ["autodocs"],
  render (args) {
    const p = unflatArgs(args)

    return <Label {...p}>
        heloooooooo
    </Label>
  },
  argTypes: {
    typo: { control: "select", options: Object.keys(light.typography) },
  }
}

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  }
}