import PageWrapper from '../components/pageWrapper'
import { Box, Flex, Heading, Image, Link, VStack } from '@chakra-ui/react'
import NextImage from 'next/image'

const registryLinks = [
  {
    name: 'Amazon',
    link: 'https://www.amazon.com/wedding/share/arik-and-chelsey',
    logo: '/amazon.png',
  },
  {
    name: 'Bed, Bath & Beyond',
    link: 'https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/551627740?eventType=Wedding',
    logo: '/bedbathbeyond.png',
  },
  {
    name: 'Target',
    link: 'https://www.target.com/gift-registry/gift/arikandchelsey',
    logo: '/target.png',
  },
]

export default function Registry() {
  return (
    <PageWrapper>
      <Heading as="h1">Registry</Heading>
      <Flex
        justifyContent="center"
        gap="60px"
        w="100%"
        alignItems="center"
        flexWrap="wrap"
        direction="column"
      >
        {registryLinks.map((link) => (
          <Flex
            as={Link}
            key={link.name}
            href={link.link}
            target="_blank"
            textAlign="center"
            border="3px solid"
            borderColor="blackAlpha.300"
            shadow="md"
            p="30px"
            alignItems="center"
            transition="all 0.2s ease-in-out"
            sx={{
              img: {
                filter: 'grayscale(100%)',
                transition: 'all 0.2s',
                _hover: {
                  filter: 'grayscale(0%)',
                },
              },
            }}
            _hover={{
              borderColor: '#E6DACE',
            }}
          >
            <Box position="relative" width="268px" height="112px">
              <Image
                as={NextImage}
                src={link.logo}
                alt={link.name}
                layout="fill"
                transition="all 0.2s ease-in-out"
              />
            </Box>
          </Flex>
        ))}
      </Flex>
    </PageWrapper>
  )
}
