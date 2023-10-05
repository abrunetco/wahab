import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Divider } from "@kit"

const meta: Meta<typeof Divider> = {
  title: "Molecules/Divider",
  tags: ["autodocs"],
  render (args) {

    return <Divider />
  },
  argTypes: {
  }
}

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {}