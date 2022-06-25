import {
  Flex,
  Heading,
  IconButton,
  Link,
  useDisclosure,
} from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

const pages = [
  { href: '/', label: 'Home' },
  { href: '/story', label: 'Our Story' },
  { href: '/bridal-party', label: 'Bridal Party' },
  { href: '/location', label: 'Location' },
  { href: '/rsvp', label: 'RSVP' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/registry', label: 'Registry' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Flex as="nav" {...styles.container}>
      <Heading fontSize="32px">♡</Heading>
      <Flex {...styles.iconContainer}>
        <IconButton
          onClick={onToggle}
          icon={
            isOpen ? <CloseIcon w={6} h={6} /> : <HamburgerIcon w={10} h={10} />
          }
          variant="ghost"
          aria-label="Toggle Navigation"
        />
      </Flex>
      <Flex
        display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }}
        {...styles.navContainer}
      >
        {pages.map((page) => (
          <NextLink href={page.href} key={page.label}>
            <Link>{page.label}</Link>
          </NextLink>
        ))}
      </Flex>
    </Flex>
  )
}

const styles = {
  container: {
    as: 'header',
    justify: 'space-between',
    align: 'center',
    mt: '30px',
    mx: '50px',
  },
  iconContainer: {
    flex: { base: 1, md: 'auto' },
    display: { base: 'flex', md: 'none' },
    zIndex: 9999,
    position: 'absolute',
    right: 25,
    top: 0,
  },
  navContainer: {
    flexDirection: { base: 'column', md: 'row' },
    gap: { base: '20px', md: '15px' },
    alignItems: 'center',
    width: { base: '100%', md: 'auto' },
    height: { base: '100%', md: 'auto' },
    position: { base: 'absolute', md: 'relative' },
    top: { base: 0, md: 'auto' },
    left: { base: '50%', md: 'auto' },
    transform: { base: 'translate(-50%, 0)', md: 'none' },
    zIndex: { base: 1000, md: 'auto' },
    background: { base: 'white', md: 'none' },
    py: { base: '50px', md: 0 },
  },
}
