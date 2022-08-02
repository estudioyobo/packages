import { Form } from '@redwoodjs/forms'

import MultiSelect from './MultiSelect'

export const empty = () => {
  return (
    <MultiSelect
      name="test"
      onChange={() => null}
      value={[]}
      placeholder="Selección"
      items={[
        { id: '1', name: 'one' },
        { id: '2', name: 'two' },
        { id: '3', name: 'three' },
      ]}
    />
  )
}
export const selected = () => {
  return (
    <MultiSelect
      name="test"
      onChange={() => null}
      value={['1']}
      placeholder="Selección"
      items={[
        { id: '1', name: 'one' },
        { id: '2', name: 'two' },
        { id: '3', name: 'three' },
      ]}
    />
  )
}
export const multiselected = () => {
  return (
    <MultiSelect
      name="test"
      onChange={() => null}
      value={['1', '3']}
      placeholder="Selección"
      items={[
        { id: '1', name: 'one' },
        { id: '2', name: 'two' },
        { id: '3', name: 'three' },
      ]}
    />
  )
}

export default {
  title: 'Components/MultiSelect',
  decorators: [
    (Story: any) => (
      <Form>
        <div style={{ margin: '3em' }}>
          <Story />
        </div>
      </Form>
    ),
  ],
}
