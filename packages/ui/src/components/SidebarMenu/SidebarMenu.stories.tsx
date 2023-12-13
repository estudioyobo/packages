import { LocationProvider } from '@redwoodjs/router'
import SidebarMenu from './SidebarMenu'
import { MenuProvider, useMenu } from 'src/hooks/useMenu'

export const empty = ({ bg, text }: { bg: string; text: string }) => {
  const { toggle } = useMenu()
  return (
    <div className="flex">
      <SidebarMenu
        items={[
          { show: true, label: 'test 1', link: '#' },
          { show: true, label: 'test 2', link: '#' },
          { show: true, label: 'test 3', link: '#' },
        ]}
        logo={'https://taula.app/images/logo-taula.png'}
        bg={bg}
        text={text}
      />
      <button onClick={toggle}> Abrir </button>
    </div>
  )
}

export default {
  title: 'Components/SidebarMenu',
  args: {
    bg: null,
  },
  argTypes: {
    bg: {
      options: ['bg-black', 'bg-white', 'bg-primary-200', 'bg-blue-200'],
      control: { type: 'radio' },
    },
    text: {
      options: [
        'text-black',
        'text-white',
        'text-primary-200',
        'text-blue-200',
      ],
      control: { type: 'radio' },
    },
  },
  decorators: [
    (Story: any) => (
      <LocationProvider>
        <MenuProvider>
          <Story />
        </MenuProvider>
      </LocationProvider>
    ),
  ],
}
