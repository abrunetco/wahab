import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Box } from "../atoms/box/Box"
import { light } from "../styled/theme/theme"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Box> = {
  title: "Styled/Pallete",
  render (args) {
    return (
      <div>
        {Object.keys(light.palette).map((v) => (
          <div key={v} style={{ display: "flex" }}>
            <Box center={true} bg={v} width={6} height={3}>
              {v}
            </Box>
            <Box width={0.2} height={3}/>
            {Object.keys(light.lightness).map((l) => (
              <Box center={true} key={l} bg={{v, l}} width={3} height={3}>
                {v === args.color && l === args.light ? "here" : ""}
              </Box>
            ))}
            <Box width={0.2} height={3}/>
              <Box
                center={true}
                bg={{ v }}
                width={6}
                height={3}
              >
                {v}
              </Box>
          </div>
        ))}
      </div>
    )
  },
  argTypes: {
    color: { control: "select", options: Object.keys(light.palette) },
    light: { control: "select", options: [...Object.keys(light.lightness), null] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Palletre: Story = {
  args: {
    color: "primary",
    light: null
  },
}
