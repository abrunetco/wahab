import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "./Checkbox"

const meta: Meta<typeof Checkbox> = {
  title: "Molecules/Checkbox",
  tags: ["autodocs"],
  render (args) {

    return <Checkbox label={args.label}/>
  },
  argTypes: {
    label: { control: "text" }
  }
}

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {}