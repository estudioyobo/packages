import { render } from '@redwoodjs/testing/web'

import Typography from './Typography'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Typography', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Typography />)
    }).not.toThrow()
  })
})
