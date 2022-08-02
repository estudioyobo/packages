import { Form } from '@redwoodjs/forms'

const countryListAlpha2 = {
  AD: 'Andorra',
  AU: 'Australia',
  BE: 'Belgium',
  TD: 'Chad',
  CL: 'Chile',
  FI: 'Finland',
  FR: 'France',
  IT: 'Italy',
  JM: 'Jamaica',
  JP: 'Japan',
  MT: 'Malta',
  MX: 'Mexico',
  NZ: 'New Zealand',
  PL: 'Poland',
  PT: 'Portugal',
  PR: 'Puerto Rico',
  ES: 'Spain',
  US: 'United States of America (the)',
  UY: 'Uruguay',
}

import SelectField from './SelectField'

export const unselected = () => {
  return (
    <SelectField
      placeholder="País"
      name="country"
      items={Object.entries(countryListAlpha2).map(([id, name]) => ({
        id,
        name,
      }))}
      onChange={() => null}
      value={null}
    />
  )
}
export const selected = () => {
  return (
    <SelectField
      placeholder="País"
      name="country"
      items={Object.entries(countryListAlpha2).map(([id, name]) => ({
        id,
        name,
      }))}
      onChange={() => null}
      value={'ES'}
    />
  )
}
export const empty = () => {
  return (
    <SelectField
      placeholder="País"
      name="country"
      items={[]}
      onChange={() => null}
      value={null}
    />
  )
}

export default {
  title: 'Components/SelectField',
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
