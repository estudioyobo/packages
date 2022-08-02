import { render } from '@redwoodjs/testing/web'

import MultiSelect from './MultiSelect'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MultiSelect', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <MultiSelect
          items={[]}
          name="MS"
          onChange={() => null}
          placeholder=""
          value={[]}
        />
      )
    }).not.toThrow()
  })
})
