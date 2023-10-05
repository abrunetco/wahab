import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Container } from "@kit"
import { unflatArgs } from "../../utils/flatt-args"
import { Box } from "../box/Box"
import { light } from "../../styled/theme/theme"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Container> = {
  title: "Atoms/Container",
  tags: ["autodocs"],
  render (args) {
    const boxes = args.boxes

    delete args.boxes
    const p = unflatArgs(args)

    return <Container {...p} bg="active" height={15}>
      {(new Array(boxes)).fill(0).map((n, i) => (
        <Box
          width= {3}
          height= {3}
          bg= {i%2 ? "primary" : "secondary" }
          center
        >{i+1}</Box>
      ))}
    </Container>
  },
  argTypes: {
    boxes: {control: "number"},
    wrap: {control: "boolean"},
    "padding.all": { control: "select", options: Object.keys(light.spacing) },
    gap: { control: "select", options: [true, ...Object.keys(light.spacing)]},
    align: { control: "radio", options: ["top", "center", "bottom"]},
    alignC: { control: "radio", options: ["top", "center", "bottom"]},
    justify: { control: "radio", options: ["start", "end", "center", "between", "around"]},
    flow: { control: "radio", options: ["row", "col"]},
  }
}

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    boxes: 10,
    "padding.all": "m",
  }
}