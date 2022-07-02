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
    let display = party
      .map((guest) => {
        if (guest.name !== guest) return guest.name
      })
      .join(', ')
    // party.map((partyMember, index) => {
    //   if (guest.name !== partyMember.name) {
    //     display += partyMember.name
    //   }
    //   if (party.length > 2) {
    //     if (index < party.length - 2) {
    //       display += ', '
    //     }
    //     if (index === party.length - 2) {
    //       display += ' & '
    //     }
    //   }
    //   return display
    // })
    return display
  }

  return (
    <>
      <Heading as="h3" fontFamily="body" fontWeight="bold">
        Your name has been found in the guest list!
      </Heading>
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
                    <VStack spacing={6}>
                      {nameMatches.map((match, index) => (
                        <Stack
                          key={match.id}
                          spacing={2}
                          alignItems="center"
                          direction="column"
                        >
                          <Radio {...field} value={match.name}>
                            <Heading as="h4" size="md">
                              {match.name}
                            </Heading>
                          </Radio>
                          <Text color="blackAlpha.700">
                            {getGuestPartyNames(
                              match,
                              partyOptions[index].guests,
                            )}
                          </Text>
                        </Stack>
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
              spacing={3}
              mt={3}
            >
              <Button
                isLoading={isSubmitting}
                type="submit"
                colorScheme="yellow"
                size="lg"
              >
                Continue
              </Button>
              <Button
                colorScheme="red"
                variant="ghost"
                onClick={handleCancel}
                size="sm"
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
