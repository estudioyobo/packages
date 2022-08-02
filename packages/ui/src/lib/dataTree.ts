import { HyperTreeViewMainProps } from 'react-hyper-tree'

export interface TreeList {
  id: string | number
  parentId?: string | number
}

export type Tree<T extends TreeList> = T & {
  children: T[]
}

export type TreeNode = HyperTreeViewMainProps['data'][number]

export function createDataTree<T extends TreeList>(dataset: T[]): Tree<T>[] {
  const hashTable = Object.create(null)
  dataset.forEach((aData) => (hashTable[aData.id] = { ...aData, children: [] }))
  const dataTree: Tree<T>[] = []
  dataset.forEach((aData) => {
    if (aData.parentId && hashTable[aData.parentId]) {
      hashTable[aData.parentId].children.push(hashTable[aData.id])
    } else {
      dataTree.push(hashTable[aData.id])
    }
  })
  return dataTree
}

export function assignOrder(nodes: TreeNode[], order = 0, parentId = 0): any[] {
  const [node, ...rest] = nodes

  if (!node) {
    return []
  }
  if (node.children?.length === 0) {
    return [
      {
        ...node.data,
        order,
        parentId: parentId === 0 ? node.data.parentId : parentId,
      },
      assignOrder(rest, order + 1, parentId),
    ]
  } else {
    return [
      {
        ...node.data,
        order,
        parentId: parentId === 0 ? node.data.parentId : parentId,
      },
      ...assignOrder(node.children as TreeNode[], 0, node.data.id),
      assignOrder(rest, order + 1, parentId),
    ]
  }
}

export function flatTree(nodes: TreeNode[]) {
  const orders = assignOrder(nodes)
  return orders.flat(10)
}
