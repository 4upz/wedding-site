import Header from './header.js'
import { Box, Flex } from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Box minHeight="calc(100vh - 150px)">{children}</Box>
      <Flex as="footer" justify="center" pb={3}>
        Made with 🧡 by Arik Smith
      </Flex>
    </>
  )
}
