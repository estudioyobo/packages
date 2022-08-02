import CreditCard from './CreditCard'

export const visa = () => {
  return (
    <CreditCard
      billing={{ name: 'John Doe' }}
      card={{ brand: 'visa', exp_month: 12, exp_year: 2024, last4: '1234' }}
    />
  )
}
export const mastercard = () => {
  return (
    <CreditCard
      billing={{ name: 'John Doe' }}
      card={{
        brand: 'mastercard',
        exp_month: 12,
        exp_year: 2024,
        last4: '1234',
      }}
    />
  )
}
export const maestro = () => {
  return (
    <CreditCard
      billing={{ name: 'John Doe' }}
      card={{ brand: 'maestro', exp_month: 12, exp_year: 2024, last4: '1234' }}
    />
  )
}
export const amex = () => {
  return (
    <CreditCard
      billing={{ name: 'John Doe' }}
      card={{ brand: 'amex', exp_month: 12, exp_year: 2024, last4: '1234' }}
    />
  )
}

export default { title: 'Components/CreditCard' }
