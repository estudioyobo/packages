import { createElement } from 'react'

export enum TypographyType {
  Title = 'text-2xl md:text-4xl font-bold',
  Subtitle = 'text-xl md:text-2xl font-medium',
  Base = 'text-base',
  Link = 'text-base font-semibold',
  Small = 'text-sm',
  Big = 'text-8xl font-bold',
}

interface TypographyProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  type?: keyof typeof TypographyType
  className?: string
  children: React.ReactNode
}

const Typography: React.FC<TypographyProps> = ({
  tag = 'p',
  type = 'Base',
  children,
  className,
}) => {
  return createElement(
    tag,
    {
      className: `${TypographyType[type]} ${className ?? ''}`,
    },
    children
  )
}

export default Typography
