import React from "react"
import _ from "lodash"
import { Meta, StoryObj } from "@storybook/react"
import { Icon, IconName, IconStacker, iconNames } from "./index"

import { Box } from "../box/Box"
import { Container } from "../container/Container"

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icons",
  tags: ["autodocs"],
  render (args) {
    const iconRows = _.chunk(iconNames, 6)

    return (
      <Container justify="between" gap="xxl" wrap={true}>
        {iconNames.map((icon) => (
          <Container width={5} flow="col" key={icon} align="center">
            <Box center width={5} height={5}>
              <IconStacker>
                <Icon name={icon as IconName} />
              </IconStacker>
            </Box>
            <Box center>{icon}</Box>
          </Container>
        ))}
      </Container>
    )
  },
  argTypes: {
  },
}

export default meta
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
  },
}