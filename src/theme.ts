import { extendTheme } from '@chakra-ui/core'

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
