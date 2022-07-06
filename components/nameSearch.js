import {
  Box,
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
        const errorMessage = error.response.data.error || 'Something went wrong'
        console.log(errorMessage)
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
                />
                <FormErrorMessage justifyContent="center">
                  {form.errors.name}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            isLoading={isSubmitting}
            type="submit"
            colorScheme="yellow"
          >
            Find Invitation
          </Button>
        </Box>
      )}
    </Formik>
  )
}
