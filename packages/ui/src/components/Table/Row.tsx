import { useDrag, useDrop, XYCoord } from 'react-dnd'

import { UseFormRegister } from '@redwoodjs/forms'

import Col from './Col'
import { useRef } from 'react'

export const CARD_LIST_DRAGGABLE = 'CARD_LIST_DRAGGABLE'
type Identifier = string | symbol

export interface DraggableActions {
  onMove: (dragIndex: number, hoverIndex: number) => void
  onDrop: () => void
}

export interface DraggableRow extends DraggableActions {
  position: number
  id: string | number
}

export interface SelectableRow {
  id: string | number
  registerInput: UseFormRegister<{ selectAll: boolean; item: string[] | false }>
}

interface RowProps {
  className?: string
  draggable?: DraggableRow
  selectable?: SelectableRow
  onClick?: () => void
  isHoverable?: boolean
  children?: React.ReactNode
}

interface DraggableSpec {
  index: number
}

const Row: React.FC<RowProps> = ({
  children,
  draggable,
  selectable,
  className,
  onClick,
  isHoverable,
}) => {
  const { position, id, onDrop, onMove } = draggable ?? {}
  const ref = useRef<HTMLTableRowElement>(null)
  const [{ isDragging }, dragRef, preview] = useDrag<
    DraggableSpec,
    void,
    { isDragging: boolean }
  >(
    () => ({
      type: CARD_LIST_DRAGGABLE,
      item() {
        return {
          id,
          index: position as number,
        }
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  )
  const [{ handlerId }, drop] = useDrop<
    DraggableSpec,
    void,
    { handlerId: Identifier | null }
  >(
    () => ({
      accept: CARD_LIST_DRAGGABLE,
      drop: () => onDrop?.(),
      collect(monitor) {
        return {
          handlerId: monitor.getHandlerId(),
        }
      },
      hover(item, monitor) {
        if (!ref.current) {
          return
        }
        const dragIndex = item.index
        const hoverIndex = position

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
          return
        }
        if (hoverIndex) {
          // Determine rectangle on screen
          const hoverBoundingRect = ref.current.getBoundingClientRect()
          // const hoverBoundingRect = drop

          // Get vertical middle
          const hoverMiddleY =
            (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

          // Determine mouse position
          const clientOffset = monitor.getClientOffset()

          // Get pixels to the top
          const hoverClientY =
            (clientOffset as XYCoord).y - hoverBoundingRect.top

          // Only perform the move when the mouse has crossed half of the items height
          // When dragging downwards, only move when the cursor is below 50%
          // When dragging upwards, only move when the cursor is above 50%

          // Dragging downwards
          if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return
          }

          // Dragging upwards
          if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return
          }

          // Time to actually perform the action
          onMove?.(dragIndex, hoverIndex)

          // Note: we're mutating the monitor item here!
          // Generally it's better to avoid mutations,
          // but it's good here for the sake of performance
          // to avoid expensive index searches.
          item.index = hoverIndex
        }
      },
    }),
    [position]
  )
  const opacity = isDragging ? 0 : 1
  preview(drop(ref))
  return (
    <tr
      ref={ref}
      data-handler-id={handlerId}
      style={{ opacity }}
      className={`${isHoverable ? 'hover:bg-gray-50 cursor-pointer' : ''} ${
        className ?? ''
      }`}
      onClick={onClick}
      tabIndex={isHoverable ? 0 : -1}
      onKeyDown={(e) => {
        if (e.code === 'Enter') {
          onClick?.()
        }
      }}
    >
      {(id || selectable?.id) && (
        <Col dragRef={id ? dragRef : undefined} selectable={selectable}></Col>
      )}
      {children}
    </tr>
  )
}

export default Row
