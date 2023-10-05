import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Table, Tbody, Td, Th, Thead, Tr } from "@kit";
import { light } from "../../styled/theme/theme";

const meta: Meta<typeof Table> = {
  title: "Atoms/Table",
  tags: ["autodocs"],
  render(args) {
    return (
      <Table {...args}>
        <Thead>
        <Tr>
          <Th>ali</Th>
          <Th>abbas</Th>
          <Th>atabak</Th>
          <Th>atabak</Th>
          <Th>atabak</Th>
          <Th>atabak</Th>
          <Th>atabak</Th>
          <Th>atabak</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Th>amirali amirali</Th>
            <Td>Lorem ipsum dolor sit.</Td>
            <Td>amirali</Td>
            <Td>amirali</Td>
            <Td>amirali</Td>
            <Td>amirali</Td>
            <Td>amirali</Td>
            <Td>amirali</Td>
          </Tr>
          <Tr>
            <Th>hasan</Th>
            <Td>hasan</Td>
            <Td>Lorem ipsum dolor sit.</Td>
            <Td>hasan</Td>
            <Td>hasan</Td>
            <Td>hasan</Td>
            <Td>hasan</Td>
            <Td>hasan</Td>
          </Tr>
          <Tr>
            <Th>reza</Th>
            <Td>reza</Td>
            <Td>reza</Td>
            <Td>Lorem ipsum dolor sit.</Td>
            <Td>reza</Td>
            <Td>reza</Td>
            <Td>reza</Td>
            <Td>reza</Td>
          </Tr>
          <Tr>
            <Th>reza</Th>
            <Td>reza</Td>
            <Td>reza</Td>
            <Td>reza</Td>
            <Td>Lorem, ipsum dolor.</Td>
            <Td>reza</Td>
            <Td>reza</Td>
            <Td>reza</Td>
          </Tr>
          <Tr>
            <Th>reza</Th>
            <Td>reza</Td>
            <Td>reza</Td>
            <Td>reza</Td>
            <Td>Lorem ipsum dolor sit.</Td>
            <Td>reza</Td>
            <Td>reza</Td>
            <Td>reza</Td>
          </Tr>
          <Tr>
            <Th>reza</Th>
            <Td>reza</Td>
            <Td>reza</Td>
            <Td>reza</Td>
            <Td>reza</Td>
            <Td>Lorem ipsum dolor sit.</Td>
            <Td>reza</Td>
            <Td>reza</Td>
          </Tr>
          <Tr>
            <Th>reza</Th>
            <Td>reza</Td>
            <Td>reza</Td>
            <Td>reza</Td>
            <Td>reza</Td>
            <Td>reza</Td>
            <Td>Lorem ipsum dolor sit.</Td>
            <Td>reza</Td>
          </Tr>
          <Tr>
            <Th>reza</Th>
            <Td>reza</Td>
            <Td>reza</Td>
            <Td>reza</Td>
            <Td>reza</Td>
            <Td>reza</Td>
            <Td>reza</Td>
            <Td>Lorem ipsum dolor sit.</Td>
          </Tr>
        </Tbody>
      </Table>
    );
  },
  argTypes: {
    bgColor: { control: 'select', options: Object.keys(light.palette) },
    bdColor: { control: 'select', options: Object.keys(light.palette) },
    design: { control: 'select', options: ['strip'] }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bgColor: 'body',
    bdColor: 'primary',
    design: 'strip'
  }
};
