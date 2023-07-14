import SideDialog from './SideDialog'
import type { Meta } from '@storybook/react'

export const empty = ({ open }: { open: boolean }) => {
  return (
    <SideDialog open={open} setOpen={() => {}} title="Mi modal">
      <div>Aqui el contenido</div>
    </SideDialog>
  )
}

const meta: Meta<{ open: boolean }> = {
  component: SideDialog,
  title: 'Components/SideDialog',
  argTypes: {
    open: { type: 'boolean', default: true },
  },
}

export default meta
