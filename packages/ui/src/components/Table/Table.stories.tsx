import Table from './Table'

export const empty = () => {
  const items: { id: number; any: string; any2: string }[] = []
  return (
    <Table
      items={items}
      columns={[
        { key: 'id', name: 'Id' },
        { key: 'any', name: 'Tabla vacía' },
        { key: 'any2', name: 'Columna 2' },
      ]}
    />
  )
}
export const data = () => {
  return (
    <Table
      items={[
        { id: 1, name: 'Fila 1' },
        { id: 2, name: 'Fila 2' },
        { id: 3, name: 'Fila 3' },
        { id: 4, name: 'Fila 4' },
      ]}
      columns={[
        { key: 'id', name: 'ID' },
        { key: 'name', name: 'Nombre', grow: true },
      ]}
    />
  )
}
export const selectable = () => {
  return (
    <Table
      items={[
        { id: 1, name: 'Fila 1', otro: true },
        { id: 2, name: 'Fila 2', otro: true },
        { id: 3, name: 'Fila 3', otro: false },
        { id: 4, name: 'Fila 4', otro: true },
      ]}
      columns={[
        { key: 'id', name: 'ID' },
        { key: 'name', name: 'Nombre en fila completa', grow: true },
        {
          key: 'otro',
          name: 'Formateado',
          formatter: (value) => (value ? 'Sí' : 'No'),
        },
      ]}
      selectable={{
        onDelete: () => {},
        onDuplicate: () => {},
      }}
    />
  )
}

export const selectableAndDraggable = () => {
  return (
    <Table
      items={[
        { id: 1, name: 'Fila 1', otro: true },
        { id: 2, name: 'Fila 2', otro: true },
        { id: 3, name: 'Fila 3', otro: false },
        { id: 4, name: 'Fila 4', otro: true },
      ]}
      columns={[
        { key: 'id', name: 'ID' },
        { key: 'name', name: 'Nombre en fila completa', grow: true },
        {
          key: 'otro',
          name: 'Formateado',
          formatter: (value) => (value ? 'Sí' : 'No'),
        },
      ]}
      selectable={{
        onDelete: () => {},
        onDuplicate: () => {},
      }}
      draggable={{
        onDrop: () => {},
        onMove: () => {},
      }}
    />
  )
}

export const draggable = () => {
  return (
    <Table
      items={[
        { id: 1, name: 'Fila 1', otro: true },
        { id: 2, name: 'Fila 2', otro: true },
        { id: 3, name: 'Fila 3', otro: false },
        { id: 4, name: 'Fila 4', otro: true },
      ]}
      columns={[
        { key: 'id', name: 'ID' },
        { key: 'name', name: 'Nombre en fila completa', grow: true },
        {
          key: 'otro',
          name: 'Formateado',
          formatter: (value) => (value ? 'Sí' : 'No'),
        },
      ]}
      draggable={{
        onDrop: () => {},
        onMove: () => {},
      }}
    />
  )
}

export default { title: 'Components/Table' }
