import { render } from '@redwoodjs/testing/web'

import Pagination from './Pagination'

describe('Pagination', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Pagination count={750} page={1} route={() => '#'} />)
    }).not.toThrow()
  })
})
