// Ivory theme: #FFFFF0
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Yellowtail, sans-serif',
  },
  colors: {
    brand: {
      dark: '#C3A786',
      light: '#E6DACE',
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 'normal',
      },
    },
    Button: {
      baseStyle: {
        padding: '10px 40px',
        borderRadius: 0,
      },
      variants: {
        solid: {
          bg: 'brand.dark',
          boxShadow: '0px 4px 28px rgba(0, 0, 0, 0.25)',
          color: 'white',
          _hover: {
            bg: 'brand.light',
          },
        },
        outline: {
          border: 'solid 3px #E6DACE',
          color: 'brand.dark',
          _hover: {
            bg: 'red.500',
            borderColor: 'red.500',
            color: 'white',
          },
          _active: {
            bg: 'red.500',
          },
        },
      },
    },
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
