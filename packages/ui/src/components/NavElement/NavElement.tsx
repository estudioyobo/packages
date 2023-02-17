import { NavLink } from '@redwoodjs/router'

interface NavElementProps {
  link: string
  label: string
  className?: string
  isDisabled?: boolean
}
const NavElement = ({
  isDisabled,
  link,
  label,
  className,
}: NavElementProps) => (
  <li
    className={`flex space-x-2 mb-2 ${
      isDisabled
        ? 'cursor-not-allowed'
        : 'rounded-3xl cursor-pointer hover:ring-primary-400 hover:ring-1'
    } transition ${className ?? ''}`}
  >
    {isDisabled ? (
      <span className={`px-5 py-2 flex-1 text-lg font text-gray-500`}>
        {label}
      </span>
    ) : (
      <NavLink
        to={link}
        matchSubPaths
        activeClassName="bg-primary-400 text-black"
        className="px-5 py-2 rounded-3xl flex-1 focus:outline-none focus:ring-white focus:ring-offset-2 focus:ring-1"
      >
        <span className={`text-base font-semibold`}>{label}</span>
      </NavLink>
    )}
  </li>
)

export default NavElement
