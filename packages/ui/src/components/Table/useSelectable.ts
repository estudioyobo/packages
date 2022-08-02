import { useForm } from '@redwoodjs/forms'
import { useEffect } from 'react'

export interface ItemSpec extends Record<string, unknown> {
  id: number | string
}

function useSelectable(items: ItemSpec[]) {
  const formMethods = useForm<{ item: string[] | false; selectAll: boolean }>({
    defaultValues: {
      selectAll: false,
      item: [],
    },
  })
  const { watch, setValue } = formMethods
  const selectAll = watch('selectAll')
  const itm = watch('item')
  useEffect(() => {
    if (selectAll) {
      setValue(
        'item',
        items.map((i) => i.id.toString())
      )
    } else {
      // set to false beacuse if set to empty array
      // the checkbox is checked if there is only one row
      setValue('item', false)
    }
  }, [setValue, selectAll, items])
  useEffect(() => {
    if (typeof itm === 'object' && itm?.length != items.length) {
      setValue('selectAll', false)
    }
  }, [items.length, itm, setValue])

  return { formMethods, hasSelection: itm ? itm.length > 0 : false }
}

export default useSelectable
