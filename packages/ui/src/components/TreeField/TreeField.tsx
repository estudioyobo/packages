import { useCallback, useEffect } from 'react'
import Tree, { useTreeState } from 'react-hyper-tree'
import type { HyperTreeViewMainProps, DefaultNodeProps } from 'react-hyper-tree'

import { flatTree } from 'src/lib/dataTree'
import type { TreeNode, TreeList } from 'src/lib/dataTree'

interface TreeFieldDataProps<T extends TreeList> {
  data: T[]
  selected?: T['id'] | T['id'][]
  onChange?: (selected: T) => void
  onDrag?: (data: TreeNode[]) => void
  multipleSelect?: boolean
}
type TreeFieldProps<T extends TreeList> = Omit<
  Omit<HyperTreeViewMainProps, 'data'>,
  'draggableHandlers'
> &
  TreeFieldDataProps<T>

function TreeField<T extends TreeList>({
  data,
  onChange,
  onDrag,
  selected,
  multipleSelect,
  ...rest
}: TreeFieldProps<T>) {
  const { required, handlers, instance } = useTreeState({
    id: 'tree',
    data: data,
    defaultOpened: true,
    multipleSelect,
  })

  const handleDrop = useCallback(
    (sourceNode: TreeNode) => (e: React.DragEvent) => {
      handlers.draggableHandlers.handleDrop(sourceNode)(e)
      setTimeout(() => {
        const ordered = flatTree(instance.enhancedData)

        onDrag?.(ordered)
      }, 300)
    },
    [handlers.draggableHandlers, instance.enhancedData, onDrag]
  )

  const myHandlers = {
    ...handlers,
    draggableHandlers: {
      ...handlers.draggableHandlers,
      handleDrop,
    },
  }

  useEffect(() => {
    if (selected) {
      if (typeof selected === 'string' || typeof selected === 'number') {
        handlers.setSelected(selected, true)
      } else {
        selected.map((s) => handlers.setSelected(s, true))
      }
    }
  }, [handlers, selected])
  const renderNode = useCallback(
    ({ node, onToggle, onSelect }: DefaultNodeProps) => (
      <div
        className="flex items-center mb-1 focus:border border-primary-500"
        key={node.data.title}
      >
        <div
          onClick={onToggle}
          role="button"
          tabIndex={node.hasChildren() ? 0 : -1}
          onKeyDown={(e: any) => {
            if (e.code === 'Space' || e.code === 'Enter') {
              onToggle(e)
            }
          }}
          className="mr-2 cursor-pointer bg-no-repeat"
        >
          {node.hasChildren() ? (
            node.options.opened ? (
              <i className="material-symbols-outlined text-sm">
                do_not_disturb_on
              </i>
            ) : (
              <i className="material-symbols-outlined text-sm">add_circle</i>
            )
          ) : (
            <i className="material-symbols-outlined text-sm">circle</i>
          )}
        </div>
        <div
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.code === 'Enter') {
              onChange?.(node as any)
              onSelect(node as any)
            }
          }}
          className={[
            'cursor-pointer h-10 flex items-center justify-between p-2 w-full bg-gray-50 hover:bg-gray-400/10 transition shadow-sm',
            node.isSelected() ? 'border-l-4 border-primary-400' : '',
          ].join(' ')}
          onClick={() => {
            onChange?.(node as any)
            onSelect(node as any)
          }}
        >
          <div className="flex flex-col items-stretch">
            <div className="font-semibold">{node.data.name}</div>
            {node.data.title && (
              <div className="node-subtitle">{node.data.title}</div>
            )}
          </div>
        </div>
      </div>
    ),
    []
  )

  return (
    <Tree
      {...required}
      {...myHandlers}
      horizontalLineStyles={{
        stroke: '#333333',
        strokeWidth: 1,
        strokeDasharray: '1 4',
      }}
      verticalLineStyles={{
        stroke: '#333333',
        strokeWidth: 1,
        strokeDasharray: '1 4',
      }}
      verticalLineTopOffset={-17}
      verticalLineOffset={5}
      classes={{
        selectedNodeWrapper: '!bg-transparent',
      }}
      renderNode={renderNode}
      {...rest}
    />
  )
}

export default TreeField
