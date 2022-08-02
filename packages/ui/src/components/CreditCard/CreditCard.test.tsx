import { render } from '@redwoodjs/testing/web'

import CreditCard from './CreditCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CreditCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <CreditCard
          billing={{ name: 'John Doe' }}
          card={{ brand: 'visa', exp_month: 12, exp_year: 2024, last4: '1234' }}
        />
      )
    }).not.toThrow()
  })
})
