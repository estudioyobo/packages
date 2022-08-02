import Switch from './Switch'

export const generated = ({
  checked,
  label,
}: {
  checked: boolean
  label: string
}) => {
  return (
    <Switch
      checked={checked}
      label={label}
      onChange={() => {}}
      name="generated"
    />
  )
}

export default {
  title: 'Components/Switch',
  argTypes: {
    checked: { control: 'boolean' },
    label: { control: 'text' },
  },
}
