type SortMove = { from: number; to: number }

export function sortList<T>(items: Array<T>, move: SortMove) {
  const elements = [...items]
  const dragItem = elements[move.from]
  const movedItems = [...items]
  movedItems.splice(move.from, 1)
  movedItems.splice(move.to, 0, dragItem)
  return movedItems
}
