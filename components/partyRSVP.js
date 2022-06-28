import {
  VStack,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Text,
  Stack,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import EventInfo from './eventInfo'

export default function PartyRSVP({ party, handleSubmit, handleCancel }) {
  const handleRSVPSubmit = (values, action) => {
    handleSubmit(values).then(() => {
      action.setSubmitting(false)
    })
  }

  // Initialize form values
  const initialValues = {}
  party.partyDetails.guests.forEach((guest) => {
    const { name, isAttending, meal } = guest
    initialValues[name] = { isAttending, meal }
  })
  const guests = Object.keys(initialValues)
  console.log(initialValues)

  const fieldQuestions = {
    isAttending: (name) => `Will ${name} be attending?`,
    meal: (name) => `What meal will ${name} be eating?`,
  }

  const fieldOptions = {
    isAttending: [
      { value: 'true', label: 'Yes' },
      { value: 'false', label: 'No' },
    ],
    meal: [
      { value: 'chicken', label: 'Chicken' },
      { value: 'fish', label: 'Fish' },
      { value: 'vegetarian', label: 'Vegetarian' },
    ],
  }

  return (
    <>
      <Heading as="h4" size="lg">
        Hello, {party.user}!
      </Heading>
      <Text>
        Please select who is coming from your household and their desired meal.
      </Text>
      <EventInfo />

      <Formik initialValues={initialValues} onSubmit={handleRSVPSubmit}>
        {({ isSubmitting }) => (
          <VStack spacing={6} as={Form} maxW="1200px" w="100%">
            {guests.map((guest) => (
              <VStack key={guest} spacing={2}>
                {Object.keys(initialValues[guest]).map((fieldName) => (
                  <Field key={fieldName} name={`${guest}.${fieldName}`}>
                    {({ field, form }) => (
                      <FormControl
                        {...styles.field}
                        isInvalid={
                          form.errors[fieldName] && form.touched[fieldName]
                        }
                      >
                        <FormLabel mr={0}>
                          {fieldQuestions[fieldName](guest)}
                        </FormLabel>
                        <RadioGroup
                          {...field}
                          defaultValue={fieldOptions[fieldName][0].value}
                        >
                          <HStack spacing="24px">
                            {fieldOptions[fieldName].map((option) => (
                              <Radio
                                key={option.value}
                                {...field}
                                value={option.value}
                              >
                                {option.label}
                              </Radio>
                            ))}
                          </HStack>
                        </RadioGroup>
                        <FormErrorMessage>
                          {form.errors[fieldName]}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                ))}
              </VStack>
            ))}
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
                Submit
              </Button>
              <Button
                colorScheme="yellow"
                variant="outline"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </Stack>
          </VStack>
        )}
      </Formik>
    </>
  )
}

const styles = {
  field: {
    as: 'fieldset',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}
