import { ParamsProvider } from '@redwoodjs/router'
import { LocationProvider } from '@redwoodjs/router/dist/location'
import { RouterContextProvider } from '@redwoodjs/router/dist/router-context'
import Pagination from './Pagination'

export const noPagination = () => {
  return <Pagination count={20} page={1} route={() => '#'} />
}
export const pagination = () => {
  return <Pagination count={60} page={2} route={() => '#'} />
}
export const ellipse = () => {
  return (
    <>
      <Pagination count={750} page={1} route={() => '#'} />
      <Pagination count={750} page={15} route={() => '#'} />
      <Pagination count={750} page={30} route={() => '#'} />
    </>
  )
}

export default {
  title: 'Components/Pagination',
  decorators: [
    (Story: any) => (
      <LocationProvider>
        <RouterContextProvider>
          <ParamsProvider>
            <Story />
          </ParamsProvider>
        </RouterContextProvider>
      </LocationProvider>
    ),
  ],
}
