// Ivory theme: #FFFFF0
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Yellowtail, sans-serif',
  },
  styles: {
    global: {
      body: {
        background: '#FFFFFF', // Ivory, FFFFF0
      },
    },
  },
})

export default theme
