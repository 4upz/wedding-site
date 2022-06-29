export const validateName = (value) => {
  let error
  if (!value) {
    error = 'Name is required'
  } else if (!/^[a-zA-Z ]+$/.test(value)) {
    error = 'Name must only contain letters'
  }
  return error
}
