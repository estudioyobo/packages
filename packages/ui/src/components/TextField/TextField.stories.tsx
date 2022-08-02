import { Form } from '@redwoodjs/forms'

import TextField from './TextField'

export const generated = () => {
  return (
    <TextField
      label="Prueba"
      name="test"
      validation={{
        required: {
          value: false,
          message: 'Username is required',
        },
      }}
    />
  )
}

export const required = () => {
  return (
    <TextField
      label="Prueba"
      name="test"
      validation={{
        required: {
          value: true,
          message: 'Username is required',
        },
      }}
    />
  )
}
export const disabled = () => {
  return (
    <TextField
      label="Prueba"
      name="test"
      disabled
      validation={{
        required: {
          value: true,
          message: 'Username is required',
        },
      }}
    />
  )
}

export const password = () => {
  return (
    <TextField
      label="Password"
      name="test"
      password
      validation={{
        required: {
          value: true,
          message: 'Password is required',
        },
      }}
    />
  )
}

export const small = () => {
  return (
    <TextField
      label="Password"
      name="test"
      password
      size="small"
      validation={{
        required: {
          value: true,
          message: 'Password is required',
        },
      }}
    />
  )
}

export default {
  title: 'Components/TextField',
  decorators: [
    (Story: any) => (
      <Form>
        <div style={{ margin: '3em' }}>
          <Story />
        </div>
      </Form>
    ),
  ],
}
