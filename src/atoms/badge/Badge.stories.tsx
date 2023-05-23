import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { unflatArgs } from "../../utils/flatt-args"
import { Badge } from "./Badge"
import { light } from "../../styled/theme/theme"

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  tags: ['autodocs'],
  render(args) {
    const p = unflatArgs(args)
    return (
      <Badge {...p}>11</Badge>
    )
  },
  argTypes: {
    lvl: { control: 'select', options: Object.keys(light.shadowSize) },
    'padding.all': { control: 'select', options: Object.keys(light.spacing) },
    'rounded.all': { control: 'select', options: Object.keys(light.round) },
    'bg.v': { control: 'select', options: Object.keys(light.palette) },
    'bg.l': { control: 'select', options: [...Object.keys(light.lightness), null] },
  }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  }
}

export const Primary: Story = {
  args: {
    center: true,
    width: 2,
    'bg.v': "primary",
    'padding.all': "s",
    'rounded.all': "s"
  }
}

export const Round: Story = {
  args: {
    center: true,
    width: 2.2,
    'bg.v': "primary",
    'padding.all': "s",
    'rounded.all': "xxl"
  }
}

export const Danger: Story = {
  args: {
    center: true,
    width: 2.2,
    'bg.v': "danger",
    'padding.all': "s",
    'rounded.all': "s"
  }
}

export const Success: Story = {
  args: {
    center: true,
    width: 2.2,
    'bg.v': "success",
    'padding.all': "s",
    'rounded.all': "s"
  }
}