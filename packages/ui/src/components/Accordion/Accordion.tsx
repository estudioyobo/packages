import React, { useState } from 'react'

import Switch from 'src/components/Switch/Switch'

interface AccordionProps {
  items: SectionData[]
  selection: number | null
  selectionId: string
  setSelection: (value: number | null) => void
}

interface Item {
  id: number
  name: string
}

interface SectionData {
  name: string
  items: Item[]
}

interface SectionProps {
  section: SectionData
  selection?: number | null
  onSelect: (item: Item) => void
  onUnselect: () => void
  selectionId: string
}

const Section = ({
  section,
  onSelect,
  selectionId,
  onUnselect,
  selection,
}: SectionProps) => {
  const [open, setOpen] = useState(
    Boolean(section?.items.find((s) => s?.id === selection))
  )
  return (
    <div>
      <button
        className="mt-2 flex w-full flex-row items-center justify-between rounded-md bg-primary-50 p-4 text-left"
        onClick={(e) => {
          e.preventDefault()
          setOpen(!open)
        }}
      >
        <span>
          {section.name}{' '}
          <span className="ml-2 text-gray-400">({section.items.length})</span>{' '}
        </span>
        <i
          className={`material-symbols-outlined transition-transform ${
            open ? '' : '-rotate-90'
          }`}
        >
          expand_more
        </i>
      </button>
      {open && (
        <div>
          {section.items?.map((item) => {
            return (
              item && (
                <div
                  key={item?.id}
                  className="flex flex-row justify-between p-4"
                >
                  <div className="flex-1">
                    <p>{item.name}</p>
                  </div>
                  <Switch
                    name={selectionId}
                    checked={item.id === selection}
                    onChange={(value) => {
                      if (value) {
                        onSelect(item)
                      } else {
                        onUnselect()
                      }
                    }}
                  />
                </div>
              )
            )
          })}
        </div>
      )}
    </div>
  )
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  selection,
  selectionId,
  setSelection,
}) => {
  return (
    <div>
      {items.map((item, i) => (
        <Section
          section={item}
          key={i}
          selection={selection}
          selectionId={selectionId}
          onSelect={(dish) => {
            setSelection(dish?.id)
          }}
          onUnselect={() => {
            setSelection(null)
          }}
        />
      ))}
    </div>
  )
}

export default Accordion
