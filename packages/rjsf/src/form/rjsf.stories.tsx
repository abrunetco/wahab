import React, { ComponentProps } from "react"
import { Meta, StoryObj } from "@storybook/react"
import Form, { AnalyzedForm } from "./rjsf.wahab"
import { Type } from "@sinclair/typebox"
import _ from "lodash"
import RJSForm from "@rjsf/core"
import validator from "@rjsf/validator-ajv8"
import {samples, Sample} from "./samples"

interface FormExtraProps {
  sample?: Sample
  mode?: string
  focusName?: string
}

const extraPropsKeys = ['sample', 'mode', 'focusName']

const meta: Meta<ComponentProps<typeof Form> & FormExtraProps> = {
  title: "Components/wahab-jsf",
  render (args) {
    const props: Partial<ComponentProps<typeof Form>> = _.omit(args, extraPropsKeys)
    const extras: FormExtraProps = _.pick(args, extraPropsKeys)
    const sampleArgs = extras.sample ? samples[extras.sample] : {}
    const formProps = {
      ...samples.Blank,
      ...props,
      ...sampleArgs,
      validator
    }

    console.log('extras.focusName', extras.focusName);
    

    formProps.uiSchema = {
      ...formProps.uiSchema,
      "ui:globalOptions": {
        ...formProps.uiSchema["ui:globalOptions"],
        "focus": extras.focusName
      }
    }

    if (extras.mode === 'core') {
      return (<RJSForm {...formProps} />)
    } else if (extras.mode === 'analyzed') {
      return (<AnalyzedForm {...formProps} />)
    }
    return (<Form {...formProps} />)
  },
  argTypes: {
    sample: { control: "select", options: Object.keys(samples) },
    mode: { control: "select", options: ["core", "analyzed", "wahab"] },
    schema: { control: "object" },
    formData: { control: "object" },
    onChange: { action: "change" },
    onSubmit: { action: "submit" },
    onError: { action: "error" },
    focusName: { control: "text" },
  }
}

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: 'wahab',
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