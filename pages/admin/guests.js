import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Spinner,
  Stack,
  Stat,
  StatLabel,
  StatNumber, Tag,
  Text, VStack,
  Wrap
} from '@chakra-ui/react'
import axios from 'axios'
import useSWR from 'swr'
import PageWrapper from '../../components/pageWrapper'

const fetcher = url => axios.get(url).then(res => res.data)

export default function Guests(){
  const { data, error } = useSWR('/api/parties', fetcher)

  if (!data && !error) {
    return (
      <PageWrapper>
        <Heading as="h1" size="lg">Loading RSVPs...</Heading>
        <Spinner size="xl" />
    </PageWrapper>)
  }

  if (error) {
    return (
      <PageWrapper>
        <Heading as="h1" size="lg">Error loading RSVPs</Heading>
        <Text color="red">{error.message}</Text>
      </PageWrapper>
    )
  }

  const parties = data ?? []

  // Get total parties that have responded
  const totalAttending = parties.reduce((acc, party) => party.hasResponded ? acc + party.guests.filter(guest => guest.isAttending).length : acc, 0)
  const totalGuests = parties.reduce((acc, party) => acc + party.guests.length, 0)
  const totalNotAttending = parties.reduce((acc, party) => party.hasResponded ? acc + party.guests.filter(guest => !guest.isAttending).length : acc, 0)
  const totalNotResponded = totalGuests - totalAttending - totalNotAttending

  const partiesThatHaveResponded = parties.filter(party => party.hasResponded)

  const meals = {
    steak: '🥩',
    salmon: '🍣',
    vegetarian: '🫑',
  }

  return (
    <PageWrapper>
      <Heading as="h1" size="lg">Guests RSVP List</Heading>
      <VStack spacing={2}>
        <Stack spacing={8} direction={{base: 'column', md: 'row'}}>
          <Box {...styles.summaryCard}>
            <Stat justifyContent="center">
              <Badge as={StatLabel} mb={2}>Total Guests</Badge>
              <StatNumber>{totalGuests}</StatNumber>
            </Stat>
          </Box>
          <Box {...styles.summaryCard}>
            <Stat justifyContent="center">
              <Badge colorScheme="green" as={StatLabel} mb={2}>Is Attending</Badge>
              <StatNumber>{totalAttending}</StatNumber>
            </Stat>
          </Box>
          <Box {...styles.summaryCard}>
            <Stat justifyContent="center">
              <Badge colorScheme="red" as={StatLabel} mb={2}>Is Not Attending</Badge>
              <StatNumber>{totalNotAttending}</StatNumber>
            </Stat>
          </Box>
          <Box {...styles.summaryCard}>
            <Stat justifyContent="center">
              <Badge colorScheme="yellow" as={StatLabel} mb={2}>Not Yet Responded</Badge>
              <StatNumber>{totalNotResponded}</StatNumber>
            </Stat>
          </Box>
        </Stack>
        <HStack>
          <Tag>Steak = 🥩</Tag>
          <Tag>Salmon = 🍣</Tag>
          <Tag>Vegetarian = 🫑</Tag>
        </HStack>
      </VStack>
      <Flex justifyContent="center">
        <Flex gap={6} flexWrap="wrap" justifyContent="center">
          {partiesThatHaveResponded.map((party, index) => (
            <Box key={index} {...styles.summaryCard} w="300px" boxShadow="md">
              <Stack spacing={8} alignItems="center" textAlign="center">
              {party.guests.map(guest => (
                <Box key={guest.name}>
                  <Heading as="h4" size="md" fontFamily="body">{guest.name}</Heading>
                  <Text>{meals[guest.meal]}</Text>
                  <Badge colorScheme={guest.isAttending ? 'green' : 'red'}>{guest.isAttending ? 'Yes' : 'No'}</Badge>
                </Box>
              ))}
              </Stack>
            </Box>
            ))
          }
        </Flex>
      </Flex>
    </PageWrapper>
  )
}

const styles = {
  summaryCard: {
    p: 6,
    w: '200px',
    alignItems: 'center',
  }
}