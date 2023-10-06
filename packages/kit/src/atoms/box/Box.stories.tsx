import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import {light} from "../../styled/theme/theme"

import { Box } from "@wahab/kit"
import { unflatArgs } from "../../utils/flatt-args"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Box> = {
  title: "Atoms/Box",
  tags: ["autodocs"],
  render (args) {
    const p = unflatArgs(args)

    return <Box {...p}>
      {/* {JSON.stringify(p['bg'])} */}
      lorem ipsum dolor sit amet.
    </Box>
  },
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    lvl: { control: "select", options: Object.keys(light.shadowSize) },
    typo: { control: "select", options: Object.keys(light.typography) },
    "border.s": { control: "select", options: Object.keys(light.borderSizes) },
    "border.c": { control: "select", options: Object.keys(light.palette) },
    "padding.all": { control: "select", options: Object.keys(light.spacing) },
    "rounded.all": { control: "select", options: Object.keys(light.round) },
    "bg.v": { control: "select", options: Object.keys(light.palette) },
    "bg.l": { control: "select", options: [...Object.keys(light.lightness), null] },
    "color.v": { control: "select", options: Object.keys(light.palette) },
    "color.l": { control: "select", options: [...Object.keys(light.lightness), null] },
  },
}

export default meta
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Block: Story = {
  args: {
    width: 0,
    height: 0,
    lvl: "none",
    typo: "default",
    grow: 11,
    shrink: 10,
    basis: "10%",
    "padding.all": "none",
    "rounded.all": "none",
    "bg.v": "primary",
    "bg.l": null,
    "color.v": "danger",
    "color.l": null,
  },
}
