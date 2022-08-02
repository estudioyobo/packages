import { useCallback, useState, useEffect } from 'react'
import { sortList } from 'src/lib/sortList'

export function useDraggableList<T>(initialItems: T[]) {
  const [items, setItems] = useState<T[]>(initialItems)
  useEffect(() => {
    if (items != initialItems) {
      setItems(initialItems)
    }
  }, [initialItems, setItems])
  const moveItem = useCallback((dragIndex: number, hoverIndex: number) => {
    setItems((prevItems: T[]) =>
      sortList(prevItems, { from: dragIndex, to: hoverIndex })
    )
  }, [])
  return {
    items,
    moveItem,
  }
}
