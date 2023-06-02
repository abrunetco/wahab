import React, { ComponentProps } from "react"
import { Meta, StoryObj } from "@storybook/react"
import Form from "./rjsf.wahab"
import { Type } from "@sinclair/typebox"
import validator from "@rjsf/validator-ajv8"
import {samples, Sample} from "./samples"

const meta: Meta<ComponentProps<typeof Form> & { sample?: Sample }> = {
  title: "Components/wahab-jsf",
  render (args) {
    const sampleArgs = args.sample ? samples[args.sample] : {}

    return (<Form {...args} {...sampleArgs} validator={validator} />)
  },
  argTypes: {
    sample: { control: "select", options: Object.keys(samples) },
    schema: { control: "object" },
    formData: { control: "object" },
    onChange: { action: "change" },
    onSubmit: { action: "submit" },
    onError: { action: "error" },
  }
}

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    schema: Type.Object(
      {
        string: Type.String({ title: "Title", description: "Title field description" }),
        number: Type.Number({ title: "Age", description: "Age field description" }),
        date: Type.String({ title: "Birthdate", format: "date-time", description: "Birthdate field description" }),
        boolean: Type.Boolean({ title: "Is Admin", description: "Is Admin field description" }),
        integer: Type.Integer({ title: "Books count", description: "Books count description" }),
      },
      { $id: "Sample", additionalProperties: false, title: "Single text field", description: "form description" }
    ),
    formData: {
      string: "inittial title"
    },
  }
}