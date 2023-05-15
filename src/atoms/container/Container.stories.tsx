import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { unflatArgs } from '../../utils/flatt-args';
import { Container } from './Container';
import { light } from '../../styled/theme/theme';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Container> = {
  title: 'Atoms/Container',
  tags: ['autodocs'],
  render(args) {
    const p = unflatArgs(args)
    return <Container {...p}>
      {/* {JSON.stringify(p['bg'])} */}
      lorem ipsum dolor sit amet.
    </Container>
  },
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    'bg.v': { control: 'select', options: Object.keys(light.palette) },
    'bg.l': { control: 'select', options: [...Object.keys(light.lightness), null] },
  }
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 0,
    height: 0
  }
}