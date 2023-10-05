import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { ButtonGroup } from "@kit"
import { Button } from "@kit"


const btnProps = {
  rounded: {all: 's'},
  border: { s: 1, c: 'primary' },
}

const meta: Meta<typeof ButtonGroup> = {
  title: "Molecules/ButtonGroup",
  tags: ["autodocs"],
  render (args) {

    return <ButtonGroup>
      <Button {...btnProps}>Act 1</Button>
      <Button {...btnProps}>Act 2</Button>
      <Button {...btnProps}>Act 3</Button>
      <Button {...btnProps}>Act 4</Button>
      <Button {...btnProps}>Act 5</Button>
    </ButtonGroup>
  },
  argTypes: {
  }
}

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {}