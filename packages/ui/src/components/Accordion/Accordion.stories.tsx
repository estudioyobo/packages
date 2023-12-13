import { Form } from '@redwoodjs/forms'

import Accordion from './Accordion'

export const empty = () => {
  return (
    <Accordion
      selection={0}
      setSelection={() => null}
      selectionId="selection"
      items={[
        {
          name: 'one',
          items: [
            { id: 2, name: 'Uno' },
            { id: 2, name: 'Dos' },
            { id: 3, name: 'Tres' },
          ],
        },
        {
          name: 'two',
          items: [
            { id: 4, name: 'Four' },
            { id: 5, name: 'Five' },
          ],
        },
        {
          name: 'three',
          items: [
            { id: 6, name: 'Seis' },
            { id: 7, name: 'Siete' },
            { id: 8, name: 'Ocho' },
            { id: 9, name: 'Nueve' },
          ],
        },
      ]}
    />
  )
}

export default {
  title: 'Components/Accordion',
}
