import { LocationProvider } from '@redwoodjs/router'
import SidebarMenu from './SidebarMenu'
import { MenuProvider, useMenu } from 'src/hooks/useMenu'

export const empty = () => {
  const {toggle} = useMenu() 
  return (
    <div className='flex'>
    <SidebarMenu
      items={[
        { show: true, label: 'test 1', link: '#' },
        { show: true, label: 'test 2', link: '#' },
        { show: true, label: 'test 3', link: '#' },
      ]}
      logo={'https://taula.app/images/logo-taula.png'}
    />
    <button onClick={toggle}> Abrir </button>
    </div>
  )
}

export default {
  title: 'Components/SidebarMenu',
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
