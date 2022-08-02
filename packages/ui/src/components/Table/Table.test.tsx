import { render } from '@redwoodjs/testing/web'

import Table from './Table'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Table', () => {
  it('renders successfully', () => {
    expect(() => {
      const items: { id: number; any: string; any2: string }[] = []
      render(
        <Table
          items={items}
          columns={[
            { key: 'id', name: 'Id' },
            { key: 'any', name: 'Tabla vacía' },
            { key: 'any2', name: 'Columna 2' },
          ]}
        />
      )
    }).not.toThrow()
  })
})
