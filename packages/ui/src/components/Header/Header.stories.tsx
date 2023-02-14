import { LocationProvider } from '@redwoodjs/router'
import Header from './Header'

export const generated = () => {
  return <Header title="Títulos" route="#" />
}
export const cta = () => {
  return (
    <Header title="Títulos" route="#" newTitle="Nuevo título" newRoute="#" />
  )
}

export default {
  title: 'Components/Header',
  decorators: [
    (Story: any) => (
      <LocationProvider>
        <Story />
      </LocationProvider>
    ),
  ],
}
