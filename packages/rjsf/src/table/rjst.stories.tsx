import { Meta, StoryObj } from "@storybook/react"
import TableGrid from "./rjst.wahab"
import sample from "./samples/simple"
import { RJSFSchema } from "@rjsf/utils"

const meta: Meta<typeof TableGrid> = {
  title: "RJSF/grid",
  component: TableGrid,
  argTypes: {
    schema: { control: "object" },
    rows: { control: "object" },
  }
}

export default meta
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    schema: sample.schema as RJSFSchema,
    rows: sample.rows
  }
}