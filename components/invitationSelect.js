import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'

export default function InvitationSelect({ nameMatches, partyOptions }) {
  const handlePartySelect = (party) => {}
  console.log(nameMatches)
  return (
    <>
      <Heading as="h3">Your name has been found in the guest list!</Heading>
      <Text>
        Please confirm your name and party below to continue your rsvp.
      </Text>
      <Formik initialValues={{ party: '' }} onSubmit={handlePartySelect}>
        {({ isSubmitting }) => (
          <Box as={Form} maxW="1200px" w="100%">
            <FormControl
              as=""
              // isInvalid={form.errors.party && form.touched.party}
            >
              <RadioGroup my={6}>
                <VStack spacing={2}>
                  {nameMatches.map((match) => (
                    <Radio as={Field} key={match.id} value={match.id}>
                      {match.name}
                    </Radio>
                  ))}
                </VStack>
                <FormErrorMessage justifyContent="center">
                  {/*{form.errors.party}*/}
                </FormErrorMessage>
              </RadioGroup>
            </FormControl>
            <Stack
              alignItems="center"
              justifyContent="center"
              direction={{ base: 'column', lg: 'row' }}
              spacing={3}
              mt={3}
            >
              <Button
                isLoading={isSubmitting}
                type="submit"
                colorScheme="yellow"
              >
                Continue
              </Button>
              <Button
                isLoading={isSubmitting}
                colorScheme="yellow"
                variant="outline"
              >
                Search Again
              </Button>
            </Stack>
          </Box>
        )}
      </Formik>
    </>
  )
}
