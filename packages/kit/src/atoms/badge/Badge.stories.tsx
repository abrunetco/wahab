import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { unflatArgs } from "../../utils/flatt-args"
import { Badge } from "@wahab/kit"
import { light } from "../../styled/theme/theme"


const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  tags: ["autodocs"],
  render (args) {
    const p = unflatArgs(args)

    return (
      <Badge {...p}>1</Badge>
    )
  },
  argTypes: {
    badgeSize: { control: "boolean" },
    lvl: { control: "select", options: Object.keys(light.shadowSize) },
    "padding.all": { control: "select", options: Object.keys(light.spacing) },
    "rounded.all": { control: "select", options: Object.keys(light.round) },
    "bg.v": { control: "select", options: Object.keys(light.palette) },
    "bg.l": { control: "select", options: [...Object.keys(light.lightness), null] },
  }
}

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    center: true,
    "bg.v": "warn",
    width: 2,
    "padding.all": "s",
    "rounded.all": "s"
  }
}

export const Primary: Story = {
  args: {
    center: true,
    width: 2,
    "bg.v": "primary",
    "padding.all": "s",
    "rounded.all": "s"
  }
}

export const Round: Story = {
  args: {
    center: true,
    width: 2.2,
    "bg.v": "primary",
    "padding.all": "s",
    "rounded.all": "circle"
  }
}

export const Danger: Story = {
  args: {
    center: true,
    width: 2.2,
    "bg.v": "danger",
    "padding.all": "s",
    "rounded.all": "s"
  }
}

export const Success: Story = {
  args: {
    center: true,
    width: 2.2,
    "bg.v": "success",
    "padding.all": "s",
    "rounded.all": "s"
  }
}