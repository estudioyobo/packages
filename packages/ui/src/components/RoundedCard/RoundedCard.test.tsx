import { render } from '@redwoodjs/testing/web'

import RoundedCard from './RoundedCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RoundedCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RoundedCard />)
    }).not.toThrow()
  })
})
