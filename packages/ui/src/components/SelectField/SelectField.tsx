import { FieldError } from '@redwoodjs/forms'
import { useRef, useState } from 'react'

import { useOnClickOutside } from 'src/hooks/useOnOutsideClick'

interface Item {
  id: string | number
  name: string
}

type IdentifierList = Item['id']

interface SelectFieldProps {
  items: Item[]
  name: string
  placeholder: string
  onChange: (value: IdentifierList) => void
  value: IdentifierList | null
}

interface DropdownProps {
  list: Item[]
  addItem: (value: Item) => void
  onClickOutside: () => void
  selected: IdentifierList | null
}

const Dropdown = ({
  list,
  addItem,
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
        {list.length === 0 && (
          <div className="text-center p-6">
            <span className="italic text-gray-500">No hay elementos</span>
          </div>
        )}
        {list.map((item, key) => {
          const isSelected = selected === item.id
          return (
            <button
              key={key}
              className={`cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-gray-100 ${
                isSelected ? 'bg-primary-50' : ''
              }`}
              onClick={(e) => {
                e.preventDefault()
                addItem(item)
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

const SelectField = ({
  name,
  items,
  placeholder,
  onChange,
  value = null,
}: SelectFieldProps) => {
  // state showing if dropdown is open or closed
  const [dropdown, setDropdown] = useState(false)

  const toggleDropdown: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDropdown(!dropdown)
  }
  // adds new item to SelectField
  const addTag = (item: Item) => {
    onChange(item.id)
  }

  return (
    <div className="relative">
      <div className="pure-material-textfield-outlined">
        <button
          className={`input flex items-center ${value ? 'focus' : ''}`}
          onClick={toggleDropdown}
        >
          <div className="flex flex-auto flex-wrap gap-1">
            {value && (
              <div className="flex justify-center items-center font-medium py-1 px-3 text-gray-800 ">
                {items.find((i) => i.id === value)?.name}
              </div>
            )}
          </div>
          <div className="text-black py-1 pl-2 border-l border-gray-300 flex items-center">
            <ChevronDown />
          </div>
        </button>
        <span className="pointer-events-none">{placeholder}</span>
      </div>
      {dropdown ? (
        <Dropdown
          list={items}
          addItem={addTag}
          selected={value}
          onClickOutside={() => setDropdown(false)}
        ></Dropdown>
      ) : null}
      <FieldError name={name} className="text-red-500" />
    </div>
  )
}

export default SelectField
