import { LocationProvider } from '@redwoodjs/router'
import SidebarMenu from './SidebarMenu'

export const empty = () => {
  return (
    <SidebarMenu
      items={[
        { show: true, label: 'test 1', link: '#' },
        { show: true, label: 'test 2', link: '#' },
        { show: true, label: 'test 3', link: '#' },
      ]}
      logo={''}
    />
  )
}

export default {
  title: 'Components/SidebarMenu',
  decorators: [
    (Story: any) => (
      <LocationProvider>
        <Story />
      </LocationProvider>
    ),
  ],
}
