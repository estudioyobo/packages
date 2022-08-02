import { render } from '@redwoodjs/testing/web'
import SidebarMenu from './SidebarMenu'

describe('SidebarMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <SidebarMenu
          items={[
            { show: true, label: 'test 1', link: '#' },
            { show: true, label: 'test 2', link: '#' },
            { show: true, label: 'test 3', link: '#' },
          ]}
          logo={''}
        />
      )
    }).not.toThrow()
  })
})
