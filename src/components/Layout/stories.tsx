import { Meta, Story } from '@storybook/react'
import { GridProps, Text } from '@chakra-ui/react'
import { Layout } from './index'

export default {
  title: 'Components/Layout',
  component: Layout,
} as Meta

export const Base: Story<GridProps> = args => (
  <Layout {...args}>
    <Text>This the layout component</Text>
  </Layout>
)
