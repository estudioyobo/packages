import { flatTree, TreeNode } from './dataTree'

function createNode(
  id: number,
  { order = 0, parentId = 0 }: { order?: number; parentId?: number },
  children: Partial<TreeNode>[] = []
): Partial<TreeNode> {
  return {
    id,
    data: { id, order, parentId },
    children: children as TreeNode[],
  }
}

describe('flatTree', () => {
  it('should flat the tree with the correct orders', () => {
    const data: Partial<TreeNode>[] = [
      createNode(4, { parentId: 3 }, [
        createNode(5, { order: 1 }, [createNode(8, {}), createNode(7, {})]),
        createNode(9, { order: 6 }, []),
      ]),
    ]
    const expected: any[] = [
      { id: 4, order: 0, parentId: 3 },
      { id: 5, order: 0, parentId: 4 },
      { id: 8, order: 0, parentId: 5 },
      { id: 7, order: 1, parentId: 5 },
      { id: 9, order: 1, parentId: 4 },
    ]

    expect(flatTree(data as TreeNode[])).toEqual(expected)
  })
  it('should flat the tree with the correct orders 2', () => {
    const data: Partial<TreeNode>[] = [
      createNode(4, { parentId: 3 }, [
        createNode(5, { order: 1 }, [createNode(8, {}), createNode(7, {})]),
        createNode(9, { order: 6 }, [
          createNode(10, {}, [
            createNode(11, {}),
            createNode(12, {}),
            createNode(13, {}, [createNode(15, {})]),
          ]),
        ]),
        createNode(14, { order: 6 }, []),
      ]),
    ]
    const expected: any[] = [
      { id: 4, order: 0, parentId: 3 },
      { id: 5, order: 0, parentId: 4 },
      { id: 8, order: 0, parentId: 5 },
      { id: 7, order: 1, parentId: 5 },
      { id: 9, order: 1, parentId: 4 },
      { id: 10, order: 0, parentId: 9 },
      { id: 11, order: 0, parentId: 10 },
      { id: 12, order: 1, parentId: 10 },
      { id: 13, order: 2, parentId: 10 },
      { id: 15, order: 0, parentId: 13 },
      { id: 14, order: 2, parentId: 4 },
    ]

    expect(flatTree(data as TreeNode[])).toEqual(expected)
  })
})
