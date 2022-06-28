import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'
import axios from 'axios'

export default function NameSearch({ handleNameSearch }) {
  const handleNameSubmit = async (values, actions) => {
    axios
      .get('/api/guests', { params: { name: values.name } })
      .then(async (res) => {
        console.log(res.data)
        await handleNameSearch(res.data)
      })
      .catch((error) => {
        const errorMessage =
          error.response?.data.message || 'Something went wrong'
        console.log(error.message)
        actions.setErrors({ name: errorMessage })
      })
      .finally(() => {
        actions.setSubmitting(false)
      })
  }

  const validateName = (value) => {
    let error
    if (!value) {
      error = 'Name is required'
    } else if (!/^[a-zA-Z]+$/.test(value)) {
      error = 'Name must only contain letters'
    }
    return error
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
