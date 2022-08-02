import { render } from '@redwoodjs/testing/web'

import TextField from './TextField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TextField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <TextField
          name="test"
          label="Test"
          validation={{
            required: {
              value: true,
              message: 'Username is required',
            },
          }}
        />
      )
    }).not.toThrow()
  })
})
