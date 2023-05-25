import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { unflatArgs } from "../../utils/flatt-args";
import { List, ListItems } from "./Lists";
import { light } from "../../styled/theme/theme";

const meta: Meta<typeof List> = {
  title: 'Atoms/Lists',
  tags: ['autodocs'],
  render(args) {
    const p = unflatArgs(args)
    return (
      <>
      <List {...p}>
        <ListItems>10</ListItems>
        <ListItems>slm0</ListItems>
        <ListItems>by0</ListItems>
      </List>
      </>
    )
  },
  argTypes: {
    def: { control: 'boolean' },
    typo: { control: 'select', options: Object.keys(light.typography) },
    "border.s": { control: 'select', options: Object.keys(light.borderSizes) },
    "border.c": { control: 'select', options: Object.keys(light.palette) },
  }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}