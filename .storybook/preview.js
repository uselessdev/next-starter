import { ChakraProvider } from '@chakra-ui/react'
import theme from '../src/theme'

export const decorators = [
  Story => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
