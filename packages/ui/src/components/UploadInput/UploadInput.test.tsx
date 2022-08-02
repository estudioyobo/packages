import { render } from '@redwoodjs/testing/web'

import UploadInput from './UploadInput'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UploadInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <UploadInput
          value=""
          text="Aqui tu texto"
          name=""
          onChange={() => null}
        />
      )
    }).not.toThrow()
  })
})
