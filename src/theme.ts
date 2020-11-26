import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        padding: `0 !important`,
      },
    },
  },
})

export default theme
