import { back, Link } from '@redwoodjs/router'

import Button from 'src/components/Button/Button'
import Typography from 'src/components/Typography/Typography'
import { useBreadcrumbsConfig } from 'src/hooks/useBreadcrumbs'
import { useMenu } from 'src/hooks/useMenu'

interface HeaderProps {
  route: string
  newRoute?: string
  newTitle?: string
  title: string
}

const Header: React.FC<HeaderProps> = ({
  route,
  newRoute,
  title,
  newTitle,
}) => {
  const { toggle } = useMenu()
  const { breadcrumbs, isCreationPage } = useBreadcrumbsConfig()
  return (
    <header className="flex justify-between items-center bg-black text-white md:bg-white md:text-black -mx-2 p-2 md:p-0">
      <div className="md:hidden flex-1 self-end">
        <button onClick={toggle} className="space-y-2">
          <span className="block h-0.5 w-8 bg-gray-50"></span>
          <span className="block h-0.5 w-8 bg-gray-50"></span>
          <span className="block h-0.5 w-8 bg-gray-50"></span>
        </button>
      </div>
      {breadcrumbs ? (
        <>
          <button
            onClick={() => {
              back()
            }}
            className="inline-flex items-center mr-4 transition hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring-2 focus:ring-primary-500 p-1 rounded-md"
          >
            <i className="material-symbols-outlined text-3xl">chevron_left</i>
          </button>
          <Typography tag="h1" type="Title">
            {breadcrumbs}
          </Typography>
        </>
      ) : (
        <Typography tag="h1" type="Title" className="flex flex-2 items-center">
          {title}
        </Typography>
      )}
      {!isCreationPage && newRoute ? (
        <div className="flex-1 flex justify-end">
          <Link
            to={newRoute}
            className="focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-full"
          >
            <span className="hidden md:contents text-purple-600">
              <Button type="Ghost" tabIndex={-1}>
                <i className="material-symbols-outlined">add</i>
                {newTitle}
              </Button>
            </span>
            <span className="md:hidden">
              <Button type="LightGhost" size="Small" tabIndex={-1}>
                <i className="material-symbols-outlined">add</i>
                {newTitle}
              </Button>
            </span>
          </Link>
        </div>
      ) : (
        <div className="flex-1" />
      )}
    </header>
  )
}

export default Header
