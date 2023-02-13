import Stepper from './Stepper'

export const first = () => {
  return (
    <Stepper
      steps={['Selecciona el plan', 'Realiza el pago', 'Finalizar']}
      current={0}
    />
  )
}
export const middle = () => {
  return (
    <Stepper
      steps={['Selecciona el plan', 'Realiza el pago', 'Finalizar']}
      current={1}
    />
  )
}
export const last = () => {
  return (
    <Stepper
      steps={['Selecciona el plan', 'Realiza el pago', 'Finalizar']}
      current={2}
    />
  )
}

export default { title: 'Components/Stepper' }
