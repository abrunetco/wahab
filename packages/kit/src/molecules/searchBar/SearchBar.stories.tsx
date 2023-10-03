import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { SearchBar } from "./SearchBar"
import { unflatArgs } from "../../utils/flatt-args"

const meta: Meta<typeof SearchBar> = {
  title: "Molecules/SearchBar",
  tags: ["autodocs"],
  render (args) {
    const p = unflatArgs(args)
    return <SearchBar {...p} />
  },
  argTypes: {
    text: { control: 'text' }
  }
}

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {}