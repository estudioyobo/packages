import { sortList } from './sortList'

describe('sortList', () => {
  it('sorts the list onwards', () => {
    const list = ['1', '2', '3', '4', '5']
    const result = sortList(list, { from: 1, to: 3 })
    const expected = ['1', '3', '4', '2', '5']
    expect(result).toEqual(expected)
  })
  it('sorts the list backwards', () => {
    const list = ['1', '2', '3', '4', '5']
    const result = sortList(list, { from: 4, to: 0 })
    const expected = ['5', '1', '2', '3', '4']
    expect(result).toEqual(expected)
  })
})
