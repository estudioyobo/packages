import { LoaderIcon } from 'src/components/Icon/Icon'

export enum ButtonType {
  Base = 'bg-green-400 text-black border-black hover:bg-green-500 disabled:bg-gray-200 disabled:text-gray-400 disabled:border-0 focus:outline-none focus:bg-green-500 focus:ring focus:ring-offset-2 focus:ring-green-500',
  Ghost = 'border bg-transparent text-black border-black hover:bg-gray-50 disabled:bg-gray-200 disabled:text-gray-400 disabled:border-0 focus:outline-none focus:bg-gray-50 focus:border-green-500',
  LightGhost = 'border bg-transparent text-white border-white hover:bg-gray-50 hover:text-black disabled:bg-gray-200 disabled:text-gray-400 disabled:border-0 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-green-500',
  Warning = 'bg-red-600 border-0 text-white hover:bg-red-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:border-0 focus:outline-none focus:bg-red-700 focus:ring focus:ring-offset-2 focus:ring-red-600',
  Link = 'border-0 text-black hover:bg-gray-200 disabled:text-gray-400 text-base font-semibold focus:outline-none focus:ring focus:ring-offset-2 focus:ring-green-500 focus:bg-gray-200',
}

export enum ButtonSize {
  Normal = 'py-2 px-5',
  Small = 'py-1 px-3',
}

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  htmlType?: 'button' | 'submit' | 'reset'
  size?: keyof typeof ButtonSize
  type?: keyof typeof ButtonType
  disabled?: boolean
  loading?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'Base',
  size = 'Normal',
  htmlType,
  disabled,
  loading,
  className,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      type={htmlType}
      disabled={disabled || loading}
      className={`rounded-full flex items-center gap-2 ${ButtonSize[size]} ${
        ButtonType[type]
      } ${className ?? ''}`}
      {...rest}
    >
      {loading && <LoaderIcon className="animate-spin" size={16} />}
      {children}
    </button>
  )
}

export default Button
