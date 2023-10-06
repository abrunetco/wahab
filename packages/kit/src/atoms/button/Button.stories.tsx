import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Button } from "@wahab/kit"
import { unflatArgs } from "../../utils/flatt-args"
import { light } from "../../styled/theme/theme"

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  // tags: ["autodocs"],
  render (args) {
    const p = unflatArgs(args)

    return <Button {...p}>
      click me!
    </Button>
  },
  argTypes: {
    width: { control: "number" },
    block: { control: "boolean" },
    disable: { control: "boolean" },
    lvl: { control: "select", options: Object.keys(light.shadowSize) },
    "padding.all": { control: "select", options: Object.keys(light.spacing) },
    "rounded.all": { control: "select", options: Object.keys(light.round) },
    "border.s": { control: "select", options: Object.keys(light.borderSizes) },
    "border.c": { control: "select", options: Object.keys(light.palette) },
    "bg.v": { control: "select", options: Object.keys(light.palette) },
    "bg.l": { control: "select", options: [...Object.keys(light.lightness), null] },
  }
}

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    "padding.all": "s",
    "bg": "white",
    "rounded.all": "xs",
    lvl: 1,
  }
}
export const Primary: Story = {
  args: {
    "padding.all": "s",
    "bg.v": "primary",
    "rounded.all": "m",
    lvl: 1,
  }
}

export const Danger: Story = {
  args: {
    "padding.all": "s",
    "bg.v": "danger",
    "rounded.all": "m",
    lvl: 1,
  }
}

export const Warning: Story = {
  args: {
    "padding.all": "s",
    "bg.v": "warn",
    "rounded.all": "m",
    lvl: 1,
  }
}

export const Active: Story = {
  args: {
    "padding.all": "s",
    "bg.v": "active",
    "rounded.all": "m",
    lvl: 1,
  }
}

export const Successs: Story = {
  args: {
    "padding.all": "s",
    "bg.v": "success",
    "rounded.all": "m",
    lvl: 1,
  }
}

export const Block: Story = {
  args: {
    "padding.all": "s",
    "bg.v": "primary",
    "rounded.all": "m",
    lvl: 1,
    block: true,
  }
}