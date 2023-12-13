import {
  Label,
  TextField as RTextField,
  RegisterOptions,
  FieldError,
  PasswordField,
  EmailField,
} from '@redwoodjs/forms'
import { forwardRef } from 'react'

import './TextField.css'

interface TextFieldProps {
  name: string
  label: string
  email?: boolean
  wrapperClassName?: string
  validation?: RegisterOptions
  defaultValue?: string
  disabled?: boolean
  password?: boolean
  size?: 'normal' | 'small'
}

const TextField = forwardRef(
  (
    {
      name,
      label,
      email,
      validation,
      disabled,
      password,
      size,
      defaultValue,
      wrapperClassName,
      ...rest
    }: TextFieldProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const Field = password ? PasswordField : email ? EmailField : RTextField
    return (
      <div className={wrapperClassName}>
        <Label
          name={name}
          className={`pure-material-textfield-outlined ${
            size === 'small' ? 'pure-material-textfield-outlined--small' : ''
          }`}
        >
          <Field
            name={name}
            validation={validation}
            disabled={disabled}
            placeholder=" "
            defaultValue={defaultValue}
            ref={ref}
            {...rest}
          />
          <span>{label}</span>
        </Label>
        <FieldError name={name} className="text-red-500" />
      </div>
    )
  }
)

export default TextField
