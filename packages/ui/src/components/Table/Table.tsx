import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import Typography from 'src/components/Typography/Typography'

import Col from './Col'
import type { Column } from './Col'
import Row from './Row'
import type { DraggableActions } from './Row'
import SelectableActions from './SelectableActions'
import type { ISelectableActions } from './SelectableActions'
import useSelectable, { ItemSpec } from './useSelectable'

interface TableProps<T> {
  items: T[]
  columns: Column<T>[]
  draggable?: DraggableActions
  selectable?: ISelectableActions
  onClick?: (item: T) => void
}

const Table = <T extends ItemSpec>({
  columns,
  items,
  selectable,
  draggable,
  onClick,
}: TableProps<T>) => {
  const { formMethods, hasSelection } = useSelectable(items)
  const body = (
    <DndProvider backend={HTML5Backend}>
      <div className="overflow-x-scroll lg:overflow-x-visible">
        <table className="relative min-w-full divide-y divide-gray-200 table-auto">
          <thead>
            <tr>
              {(selectable || draggable) && <th>&nbsp;</th>}
              {columns.map((column, i) => (
                <th
                  key={i}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-semibold text-black uppercase tracking-wider"
                >
                  {column.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {items.map((item, i) => (
              <Row
                key={item.id}
                selectable={
                  selectable
                    ? { id: item.id, registerInput: formMethods.register }
                    : undefined
                }
                draggable={
                  draggable
                    ? { ...draggable, id: item.id, position: i }
                    : undefined
                }
                onClick={() => onClick?.(item)}
                isHoverable={Boolean(onClick)}
              >
                {columns.map(({ key, grow, formatter }) => (
                  <Col key={key as string} grow={grow}>
                    {formatter ? (
                      formatter(item[key], item)
                    ) : (
                      <Typography>{item[key] as string}</Typography>
                    )}
                  </Col>
                ))}
              </Row>
            ))}
          </tbody>
        </table>
      </div>
    </DndProvider>
  )
  if (selectable) {
    return (
      <SelectableActions
        formMethods={formMethods}
        hasSelection={hasSelection}
        {...selectable}
      >
        {body}
      </SelectableActions>
    )
  } else {
    return body
  }
}

export default Table
