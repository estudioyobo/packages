import { FieldError } from '@redwoodjs/forms'
import { useRef, useState } from 'react'

import { useOnClickOutside } from 'src/hooks/useOnOutsideClick'

interface Item {
  id: string | number
  name: string
}

type IdentifierList = Item['id'][]

interface MultiSelectProps {
  items: Item[]
  name: string
  placeholder: string
  onChange: (value: IdentifierList) => void
  value: IdentifierList
}

interface DropdownProps {
  list: Item[]
  addItem: (value: Item) => void
  onClickOutside: () => void
  removeItem: (value: Item['id']) => void
  selected: IdentifierList
}

const Dropdown = ({
  list,
  addItem,
  removeItem,
  selected,
  onClickOutside,
}: DropdownProps) => {
  const ref = useRef(null)
  useOnClickOutside(ref, onClickOutside)
  return (
    <div
      ref={ref}
      className="absolute top-16 shadow top-100 bg-white z-40 w-full lef-0 rounded max-h-48 overflow-y-auto "
    >
      <div className="flex flex-col w-full">
        {list.map((item, key) => {
          const isSelected = selected.includes(item.id)
          return (
            <button
              key={key}
              className={`cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-gray-100 ${
                isSelected ? 'bg-primary-50' : ''
              }`}
              onClick={(e) => {
                e.preventDefault()
                if (isSelected) {
                  removeItem(item.id)
                } else {
                  addItem(item)
                }
              }}
            >
              <div className="flex w-full items-center p-2 pl-2 border-transparent relative">
                <div className="w-full items-center flex">
                  <div className="mx-2 leading-6">{item.name}</div>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function ChevronDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className=" w-4 h-4"
    >
      <polyline points="18 9 12 15 6 9"></polyline>
    </svg>
  )
}

function Cross({ onClick }: { onClick: React.MouseEventHandler<SVGElement> }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="cursor-pointer hover:text-gray-400 rounded-full w-4 h-4"
      onClick={onClick}
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  )
}

const MultiSelect = ({
  name,
  items,
  placeholder,
  onChange,
  value = [],
}: MultiSelectProps) => {
  // state showing if dropdown is open or closed
  const [dropdown, setDropdown] = useState(false)

  const toggleDropdown: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDropdown(!dropdown)
  }
  // adds new item to multiselect
  const addTag = (item: Item) => {
    onChange(value.concat(item.id))
  }
  // removes item from multiselect
  const removeTag = (item: Item['id']) => {
    const filtered = value.filter((e) => e !== item)
    onChange(filtered)
  }

  return (
    <div className="relative">
      <div className="pure-material-textfield-outlined">
        <button
          className={`input flex items-center ${
            value.length > 0 ? 'focus' : ''
          }`}
          onClick={toggleDropdown}
        >
          <div className="flex flex-auto flex-wrap gap-1">
            {value.map((tag, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center items-center font-medium py-2 px-3 bg-gray-200 rounded-full text-gray-800 "
                >
                  <div className="text-xs font-normal leading-none max-w-full flex-initial">
                    {items?.find((i) => i.id === tag)?.name}
                  </div>
                  <div className="flex flex-auto flex-row-reverse ml-2">
                    <Cross onClick={() => removeTag(tag)} />
                  </div>
                </div>
              )
            })}
          </div>
          <div className="text-black py-1 pl-2 border-l border-gray-300 flex items-center">
            {value.length > 0 ? (
              <Cross
                onClick={(e) => {
                  e.stopPropagation()
                  onChange([])
                }}
              />
            ) : (
              <ChevronDown />
            )}
          </div>
        </button>
        <span className="pointer-events-none">{placeholder}</span>
      </div>
      {dropdown ? (
        <Dropdown
          list={items}
          addItem={addTag}
          removeItem={removeTag}
          selected={value}
          onClickOutside={() => setDropdown(false)}
        ></Dropdown>
      ) : null}
      <FieldError name={name} className="text-red-500" />
    </div>
  )
}

export default MultiSelect
