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
  Badge,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import EventInfo from './eventInfo'
import { validateName } from '../utils/helpers'

function QuestionLabel({ name, user, field }) {
  const greetings = {
    [user]: 'you',
    Guest: 'your guest',
  }

  if (field === 'meal') {
    return (
      <>
        What meal will <span>{greetings[name] || name}</span> be eating?
      </>
    )
  } else {
    return (
      <>
        Will <span>{greetings[name] || name}</span> be attending?
      </>
    )
  }
}

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
    initialValues[name] = { isAttending: isAttending.toString(), meal }
  })
  const guests = Object.keys(initialValues)
  if (guests.includes('Guest')) {
    initialValues.guestName = ''
  }

  const fieldOptions = {
    isAttending: [
      { value: 'true', label: 'Yes' },
      { value: 'false', label: 'No' },
    ],
    meal: [
      { value: 'steak', label: 'Steak' },
      { value: 'salmon', label: 'Salmon' },
      { value: 'vegetarian', label: 'Ratatouille', isVeggie: true },
    ],
  }

  return (
    <>
      <Heading as="h4" size="lg">
        {party.partyDetails.hasResponded ? 'Welcome back' : 'Hello'},{' '}
        {party.user}!
      </Heading>
      <Text>
        Please select who is coming from your household and their desired meal.
      </Text>
      <EventInfo />

      <Formik initialValues={initialValues} onSubmit={handleRSVPSubmit}>
        {({ isSubmitting }) => (
          <VStack spacing={8} as={Form} maxW="1200px" w="100%">
            {guests.map((guest) => (
              <VStack key={guest} spacing={4}>
                {guest === 'Guest' && (
                  <Field name="guestName" validate={validateName}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.guestName && form.touched.guestName
                        }
                      >
                        <Input
                          {...field}
                          placeholder="Enter a name for your guest"
                          textAlign="center"
                          type="text"
                          id="guestName"
                        />
                        <FormErrorMessage justifyContent="center">
                          {form.errors.name}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                )}
                {Object.keys(initialValues[guest]).map((fieldName) => (
                  <Field key={fieldName} name={`${guest}.${fieldName}`}>
                    {({ field, form }) => (
                      <FormControl
                        {...styles.field}
                        isInvalid={
                          form.errors[fieldName] && form.touched[fieldName]
                        }
                      >
                        <FormLabel
                          mr={0}
                          sx={{
                            span: { color: 'brand.dark', fontWeight: 'bold' },
                          }}
                        >
                          <QuestionLabel
                            name={guest}
                            user={party.user}
                            field={fieldName}
                          />
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
                                {option.label}{' '}
                                {option.isVeggie && (
                                  <Badge colorScheme="green" mb="3px">
                                    v
                                  </Badge>
                                )}
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
                size="lg"
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
