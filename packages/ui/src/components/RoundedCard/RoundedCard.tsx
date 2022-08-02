import { createElement } from 'react'

interface RoundedCardProps {
  tag?: string
  className?: string
  small?: boolean
}

const RoundedCard: React.FC<RoundedCardProps> = ({
  tag = 'div',
  children,
  className,
  small,
}) => {
  return createElement(
    tag,
    {
      className: `border-2 border-black rounded-4xl ${small ? 'p-8' : 'p-16'} ${
        className ?? ''
      }`.trim(),
    },
    children
  )
}

export default RoundedCard
