import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { unflatArgs } from "../../utils/flatt-args"
import { Fieldset, Legend } from "./Fieldset"
import { Label } from "../labelInput/LabelInput"
import { InputText } from "../input/Input"

const meta: Meta<typeof Fieldset> = {
  title: "Atoms/Fieldset",
  tags: ["autodocs"],
  render (args) {
    const p = unflatArgs(args)

    return <Fieldset {...p} groove>
        <Legend>amirali</Legend>
        <Label>slmmmmm</Label>
        <InputText />
    </Fieldset>
  },
  argTypes: {
    legend: { control: "text" }
  }
}

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {}