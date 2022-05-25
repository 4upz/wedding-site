import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout'
import theme from "../theme";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
