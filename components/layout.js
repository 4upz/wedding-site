import Header from './header.js'
import {Box, Flex, Link, Text} from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Box minHeight="calc(100vh - 150px)">{children}</Box>
      <Flex as="footer" justify="center" pb={3}>
        <Text>Made with 🧡 by <Link href="https://github.com/4upz" color="brand.dark" fontWeight="bold" target="_blank">Arik Smith</Link></Text>
      </Flex>
    </>
  )
}
