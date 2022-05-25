import Nav from './nav.js'
import { Flex } from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <footer>
        <Flex justify="center"> Made with 🧡 by Arik Smith</Flex>
      </footer>
    </>
  )
}
