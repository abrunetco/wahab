import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import  {JsonSchemaForm}  from "./jsonSchemaForm";

const meta: Meta<typeof JsonSchemaForm> = {
  title: 'Components/Form',
  tags: ['autodocs'],
  render(args) {
    return (<JsonSchemaForm />)
  },
  argTypes: {
  }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}