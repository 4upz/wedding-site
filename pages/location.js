import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import PageWrapper from '../components/pageWrapper'

export default function Location() {
  return (
    <PageWrapper>
      <Heading as="h1">Location</Heading>
      <Flex {...styles.eventsContainer}>
        <Box {...styles.imageBox}>
          <Box {...styles.triangle} />
          <Box {...styles.imageContainer}>
            <Image src="/lago.webp" alt="Lago East Bank" {...styles.image} />
          </Box>
        </Box>
        <Stack {...styles.events}>
          <VStack>
            <Heading as="h2" size="lg">
              Ceremony
            </Heading>
            <Text>Penthouse - Lago Custom Events</Text>
            <Text>4:30pm - 5:45pm</Text>
          </VStack>
          <VStack>
            <Heading as="h2" size="lg">
              Cocktail Hour
            </Heading>
            <Text>Veranda North Pad - Lago Custom Events</Text>
            <Text>5:45pm - 6:45pm</Text>
          </VStack>
          <VStack>
            <Heading as="h2" size="lg">
              Reception
            </Heading>
            <Text>Veranada Tent - Lago Custom Events</Text>
            <Text>7pm - 11pm</Text>
          </VStack>
        </Stack>
      </Flex>
      <Stack flexDir={{ base: 'column', large: 'row' }} spacing={6}>
        <Button
          variant="outline"
          as="a"
          href="https://goo.gl/maps/97o3HLZab1cbaxtGA"
          target="_blank"
          size="lg"
        >
          Map
        </Button>
        {/* TODO: Create ICS file or Google Calendar link for this, if this feature is desired*/}
        <Button variant="outline" size="lg">
          Add to Calendar
        </Button>
      </Stack>
      <Divider />
      <Stack
        px={6}
        spacing={4}
        alignItems="center"
        direction={{ base: 'column-reverse', lg: 'row' }}
        maxW="1200px"
      >
        <VStack spacing={2} mt={{ base: '20px', lg: '0' }}>
          <Container>
            Aside from the beautiful views, we chose our location to curate
            positive vibes and a good time for your entire stay in Cleveland.
            The location is in the heart of the flats, which is a popular night
            life area downtown consisting of great restaurants, bars, and clubs.
            All of which are a walkable distance from our designated hotel. It
            is also a short walk from W. 6th street which is another street of
            bars and clubs. It is not uncommon to start your night at W. 6th and
            make your way to the flats to end it.
          </Container>
          <Container>
            If you are looking for suggestions and are like the soon to be Mr. &
            Mrs., we love exploring restaurants and good drinks when we are in a
            new area. Below are some of our favorites, along with honorable
            mentions of places we’ve yet to try!
          </Container>
        </VStack>
        <Image
          src="/theflats.jpeg"
          alt="The Flats in Cleveland"
          {...styles.flatsImage}
        />
      </Stack>
      <Flex {...styles.recommendations}>
        <VStack>
          <Heading as="h4" size="md">
            If you are looking for <span>seafood</span>
          </Heading>
          <Text>Alley Cat Oyster Bar</Text>
        </VStack>
        <VStack>
          <Heading as="h4" size="md">
            If you are looking for a local{' '}
            <span>taco chain and margaritas</span>
          </Heading>
          <Text>Barrio</Text>
        </VStack>
        <VStack>
          <Heading as="h4" size="md">
            If you are looking for <span>sushi</span>
          </Heading>
          <Text>Sora</Text>
        </VStack>
        <VStack>
          <Heading as="h4" size="md">
            If you are looking for something owned by a{' '}
            <span>Cleveland celebrity (MGK)</span>
          </Heading>
          <Text>Sora</Text>
        </VStack>
      </Flex>
    </PageWrapper>
  )
}

const styles = {
  image: {
    width: 1200,
    height: 860,
  },
  flatsImage: {
    width: '720px',
    height: '480px',
  },
  events: {
    w: ['100%', '50%'],
    alignItems: 'center',
    spacing: 8,
    p: '20px',
  },
  imageContainer: {
    position: 'relative',
    background: 'transparent',
    top: { base: '-25px', lg: 0 },
    left: { base: '5%', lg: 0 },
    width: { base: '90%', lg: '100%' },
    margin: { sm: 'auto', lg: 0 },
    py: { base: 0, lg: 5 },
    sx: {
      span: {
        boxShadow: '-20px 20px 20px rgba(0, 0, 0, 0.25)',
        transform: { sm: 'translate(-50%, 0)', lg: 'unset' },
        left: { sm: '45%', lg: '30%' },
        right: { sm: 'unset', lg: 0 },
      },
    },
  },
  imageBox: {
    position: 'relative',
    border: 'solid 6px #E6DACE',
    width: { base: '100%', lg: '40%' },
    maxHeight: '100%',
    mr: { base: 0, lg: '50px' },
  },
  triangle: {
    display: { base: 'none', md: 'initial' },
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translate(0, -50%)',
    width: 0,
    height: 0,
    borderTop: '80px solid transparent',
    borderBottom: '80px solid transparent',
    borderLeft: '120px solid #E6DACE',
  },
  eventsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    maxW: '1200px',
    w: '100%',
    flexDir: { base: 'column', lg: 'row' },
  },
  recommendations: {
    textAlign: 'center',
    maxW: '1200px',
    flexDir: ['column', , 'column', 'row'],
    alignItems: 'center',
    gap: '50px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: { base: 6, lg: 'none' },
    sx: {
      span: {
        color: '#C3A786',
      },
      div: {
        w: { base: '100%', lg: '375px' },
      },
    },
  },
}
