import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import PageWrapper from '../components/pageWrapper'

export default function Location() {
  const calendarTemplateLink =
    'https://www.google.com/calendar/event?action=TEMPLATE&dates=20220904T203000Z%2F20220904T214500Z&text=Arik%20%26%20Chelsey%20Wedding&location=Lago%20Custom%20Events%2C%20950%20Main%20Ave%20%23120%2C%20Cleveland%2C%20OH%2044113%2C%20USA&details='

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
            <Text>Veranda Tent - Lago Custom Events</Text>
            <Text>7pm - 11pm</Text>
          </VStack>
          <VStack>
            <Heading as="h2" size="lg">
              Hotel Block
            </Heading>
            <Text>Aloft Cleveland Downtown</Text>
            <Text>September 3 - September 5</Text>
            <Text textAlign="center">
              <Link
                href="https://www.marriott.com/events/start.mi?id=1631212273160&key=GRP"
                target="_blank"
                rel="noreferrer"
                color="brand.dark"
                fontWeight="bold"
              >
                Book here
              </Link>{' '}
              for the discounted rate of $189 per night.
            </Text>
          </VStack>
        </Stack>
      </Flex>
      <Stack
        alignItems="center"
        direction={{ base: 'column', lg: 'row' }}
        spacing={6}
      >
        <Button
          variant="outline"
          as="a"
          href="https://goo.gl/maps/97o3HLZab1cbaxtGA"
          target="_blank"
          rel="noreferrer"
          size="lg"
        >
          Map
        </Button>
        <Button
          as="a"
          href={calendarTemplateLink}
          variant="outline"
          size="lg"
          target="_blank"
          rel="noreferrer"
        >
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
            If you are looking for suggestions and are like us, we love
            exploring restaurants and good drinks when we are in a new area.
            Below are some of our favorites, along with honorable mentions of
            places we’ve yet to try! Most are nearby the venue with a few
            requiring a car.
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
          <Text>27 Club Coffee</Text>
        </VStack>
        <VStack>
          <Heading as="h4" size="md">
            If you are looking for <span>Frozen Drinks</span>
          </Heading>
          <Text>Frozen Daquiri Bar & Restaurant</Text>
        </VStack>
        <VStack>
          <Heading as="h4" size="md">
            If you are looking for a <span>Visual Dining Experience</span>
          </Heading>
          <Text>Filter Experience</Text>
        </VStack>
        <VStack>
          <Heading as="h4" size="md">
            If you are looking for <span>Hibachi and Sushi</span>
          </Heading>
          <Text>TOMO</Text>
        </VStack>
        <VStack>
          <Heading as="h4" size="md">
            If you are looking for <span>Thai Food</span>
          </Heading>
          <Text>Bangkok Thai</Text>
        </VStack>
        <VStack>
          <Heading as="h4" size="md">
            If you are looking for <span>African Food</span>
          </Heading>
          <Text>Afrika Taste and Lounge</Text>
        </VStack>
        <VStack>
          <Heading as="h4" size="md">
            If you are looking for <span>Ice Cream</span>
          </Heading>
          <Text>Mitchell’s Homemade Ice Cream</Text>
        </VStack>
        <VStack>
          <Heading as="h4" size="md">
            If you are a gamer looking for{' '}
            <span>drinks and games instead of food</span>
          </Heading>
          <Text>16-Bit Bar + Arcade</Text>
        </VStack>
        <VStack>
          <Heading as="h4" size="md">
            If you are looking for <span>boardgames and light food</span>
          </Heading>
          <Text>Tabletop Cafe</Text>
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
      h4: {
        fontFamily: 'body',
      },
      span: {
        color: '#C3A786',
      },
      div: {
        w: { base: '100%', lg: '375px' },
      },
    },
  },
}
