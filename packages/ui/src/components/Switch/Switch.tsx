import { Switch as HSwitch } from '@headlessui/react'

interface SwitchProps {
  name: string
  label: string
  checked?: boolean
  disabled?: boolean
  onChange: (value: boolean) => void
}

const Switch: React.FC<SwitchProps> = ({
  name,
  label,
  checked = false,
  onChange,
  disabled,
}) => {
  return (
    <HSwitch.Group>
      <div className="flex items-center">
        <HSwitch.Label className="mr-4" htmlFor={name}>
          {label}
        </HSwitch.Label>
        <HSwitch
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          name={name}
          className={`${
            checked ? 'bg-primary-400' : 'bg-gray-200'
          } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
        >
          <span
            className={`${
              checked ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          />
        </HSwitch>
      </div>
    </HSwitch.Group>
  )
}

export default Switch
