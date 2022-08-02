import { render } from '@redwoodjs/testing/web'

import TreeField from './TreeField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TreeField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TreeField data={[]} />)
    }).not.toThrow()
  })
})
