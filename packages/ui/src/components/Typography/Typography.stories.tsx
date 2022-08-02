import Typography, { TypographyType } from './Typography'

export const generated = () => {
  return Object.keys(TypographyType).map((key) => (
    <Typography type={key as keyof typeof TypographyType} key={key}>
      {key}
    </Typography>
  ))
}

export default { title: 'Components/Typography' }
