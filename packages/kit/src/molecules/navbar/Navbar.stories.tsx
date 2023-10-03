import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { unflatArgs } from "../../utils/flatt-args"
import { Navbar } from "./Navbar"

const meta: Meta<typeof Navbar> = {
  title: "Molecules/Navbar",
  tags: ["autodocs"],
  render (args) {
    const p = unflatArgs(args)
    return <Navbar {...p} />
  },
  argTypes: {
  }
}

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {}