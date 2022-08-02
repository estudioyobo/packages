import { render } from '@redwoodjs/testing/web'

import Switch from './Switch'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Switch', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Switch label="Test" onChange={() => {}} name="test" />)
    }).not.toThrow()
  })
})
