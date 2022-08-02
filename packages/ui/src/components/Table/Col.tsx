import type { ConnectDragSource } from 'react-dnd'

import type { SelectableRow } from './Row'

type Formatter<T, V> = (value: V, item: T) => React.ReactNode

export type Column<T> = {
  [K in keyof T]: {
    key: K
    name: string
    grow?: boolean
    formatter?: Formatter<T, T[K]>
  }
}[keyof T]

interface ColProps {
  className?: string
  grow?: boolean
  selectable?: SelectableRow
  dragRef?: ConnectDragSource
}

const Col: React.FC<ColProps> = ({
  children,
  className,
  selectable,
  dragRef,
  grow,
}) => {
  return (
    <td
      className={`px-6 py-3 text-gray-700 ${className ?? ''} ${
        grow && 'w-full'
      }`}
    >
      <div className="flex justify-between">
        {dragRef && (
          <div ref={dragRef} className=" flex content-center cursor-move">
            <i className="material-symbols-outlined">drag_indicator</i>
          </div>
        )}
        {selectable?.id && (
          <div className=" flex items-center">
            <input
              type="checkbox"
              value={selectable.id}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-400 accent-green-500 cursor-pointer"
              {...selectable.registerInput('item', {
                // setValueAs: (value) => (value.length === 0 ? '' : value),
              })}
            />
          </div>
        )}
      </div>
      {children}
    </td>
  )
}

export default Col
