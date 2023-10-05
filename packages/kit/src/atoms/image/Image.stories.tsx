import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { unflatArgs } from "../../utils/flatt-args"
import { Image } from "@kit"
import { light } from "../../styled/theme/theme"

const meta: Meta<typeof Image> = {
  title: "Atoms/Image",
  tags: ["autodocs"],
  render (args) {
    const p = unflatArgs(args)

    return (
      <Image {...p} src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" />
    )
  },
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    thumbnail: { control: "boolean" },
    cover: { control: "boolean" },
    "padding.all": { control: "select", options: Object.keys(light.spacing) },
    "rounded.all": { control: "select", options: Object.keys(light.round) },
  }
}

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {}