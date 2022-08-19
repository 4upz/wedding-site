import {
  Box,
  Text,
  Container,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import axios from 'axios'
import { validateName } from '../utils/helpers'

export default function NameSearch({ handleNameSearch }) {
  const handleNameSubmit = (values, actions) => {
    axios
      .get('/api/guests', { params: { name: values.name } })
      .then(async (res) => {
        await handleNameSearch(res.data)
      })
      .catch((error) => {
        console.log(error.response)
        const errorMessage =
          error.response.status === 404
            ? 'No invitation with that name was found.'
            : 'Something went wrong.'
        actions.setErrors({ name: errorMessage })
      })
      .finally(() => {
        actions.setSubmitting(false)
      })
  }

  return (
    <Formik initialValues={{ name: '' }} onSubmit={handleNameSubmit}>
      {({ isSubmitting }) => (
        <Box as={Form} maxW="1200px" w="100%">
          <Text fontStyle="italic">
            Sorry, we are no longer accepting RSVPs.
          </Text>
          <Text mb={6}>
            Please reach out to the bride or the groom for issues or questions.
          </Text>
          <Container display="none">
            <Field name="name" validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <Input
                    {...field}
                    placeholder="Please enter your full name"
                    textAlign="center"
                    size="lg"
                    variant="filled"
                    type="text"
                    id="name"
                    disabled
                  />
                  <FormErrorMessage justifyContent="center">
                    {form.errors.name}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={6}
              isLoading={isSubmitting}
              type="submit"
              colorScheme="yellow"
              size="lg"
              disabled
            >
              Find Invitation
            </Button>
          </Container>
        </Box>
      )}
    </Formik>
  )
}
