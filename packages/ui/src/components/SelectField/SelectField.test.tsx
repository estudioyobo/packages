import { render } from '@redwoodjs/testing/web'

import SelectField from './SelectField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

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

describe('SelectField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
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
    }).not.toThrow()
  })
})
