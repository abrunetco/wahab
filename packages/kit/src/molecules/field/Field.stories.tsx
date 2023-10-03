import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Field } from "./Field"
import { unflatArgs } from "../../utils/flatt-args"

const meta: Meta<typeof Field> = {
  title: "Molecules/Field",
  tags: ["autodocs"],
  render (args) {
    const p = unflatArgs(args)

    return <Field {...p} type={args.type} label={args.label} />
  },
  argTypes: {
    label: { control: "text" },
    type: { control: "select", options: ["number", "text", "email", "image", "password"] }
  }
}

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {}