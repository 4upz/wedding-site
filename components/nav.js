import { Flex, Heading, Link } from '@chakra-ui/react'
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

export default function Nav() {
  return (
    <Flex as="header" justify="space-between" mt="30px" mx="50px">
      <Heading>♡</Heading>
      <Flex as="nav" gap="50px">
        {pages.map((page) => (
          <NextLink href={page.href} key={page.label}>
            <Link>{page.label}</Link>
          </NextLink>
        ))}
      </Flex>
    </Flex>
  )
}
