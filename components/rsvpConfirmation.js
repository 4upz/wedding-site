import { Heading, Text, VStack } from '@chakra-ui/react'

export default function RSVPConfirmation({ party }) {
  const deadline = new Date('2022-08-02T00:00:00.000Z')

  return (
    <VStack spacing={8}>
      <Heading as="h2" size="lg">
        Thank you, {party.user}!
      </Heading>
      <Heading as="h3" size="md">
        Your RSVP has been confirmed!
      </Heading>
      <Text>
        Feel free to come back anytime before {deadline.toLocaleDateString()} to
        update your answers.
      </Text>
    </VStack>
  )
}
