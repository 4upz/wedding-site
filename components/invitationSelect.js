import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Text,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'

export default function InvitationSelect({
  nameMatches,
  partyOptions,
  handleUserSelect,
  handleCancel,
}) {
  const handlePartySelect = (values, action) => {
    handleUserSelect(values.party)
    action.setSubmitting(false)
  }

  // TODO: Refactor this abomination
  const getGuestPartyNames = (guest, party) => {
    // Return comma separated list of party names for each guest
    let display = party.length > 2 ? '- ' : ''
    party.map((partyMember, index) => {
      if (guest.name !== partyMember.name) {
        display += partyMember.name
      }
      if (party.length > 2) {
        if (index < party.length - 2) {
          display += ', '
        }
        if (index === party.length - 2) {
          display += ' & '
        }
      }
      return display
    })
    return display
  }

  return (
    <>
      <Heading as="h3">Your name has been found in the guest list!</Heading>
      <Text>
        Please confirm your name and party below to continue your rsvp.
      </Text>
      <Formik initialValues={{ party: '' }} onSubmit={handlePartySelect}>
        {({ isSubmitting }) => (
          <Box as={Form} maxW="1200px" w="100%">
            <Field name="party">
              {({ field, form }) => (
                <FormControl
                  as=""
                  isInvalid={form.errors.party && form.touched.party}
                >
                  <RadioGroup my={6} {...field} id="party">
                    <VStack spacing={2}>
                      {nameMatches.map((match, index) => (
                        <Radio {...field} key={match.id} value={match.name}>
                          <HStack spacing={2}>
                            <Heading as="h4" size="small">
                              {match.name}
                            </Heading>
                            <Text>
                              {getGuestPartyNames(
                                match,
                                partyOptions[index].guests,
                              )}
                            </Text>
                          </HStack>
                        </Radio>
                      ))}
                    </VStack>
                  </RadioGroup>
                  <FormErrorMessage justifyContent="center">
                    {form.errors.party}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
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
                colorScheme="yellow"
                variant="outline"
                onClick={handleCancel}
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
