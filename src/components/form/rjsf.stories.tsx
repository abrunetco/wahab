import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import  Form  from "./rjsf.wahab";
import { Type } from '@sinclair/typebox'
import validator from "@rjsf/validator-ajv8";

const meta: Meta<typeof Form> = {
  title: 'Components/rjsf',
  tags: ['autodocs'],
  render(args) {
    return (<Form {...args} validator={validator} />)
  },
  argTypes: {
    schema: { control: 'object' },
    formData: { control: 'object' },
    onChange: { action: 'change' },
    onSubmit: { action: 'submit' },
    onError: { action: 'error' },
  }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    schema: Type.Object(
      {
        title: Type.String({ title: 'Title' }),
      },
      { $id: 'Sample', additionalProperties: false, title: 'Single text field' }
    ),
    formData: {
      title: "inittial title"
    },
  }
}