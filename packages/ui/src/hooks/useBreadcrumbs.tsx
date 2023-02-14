import { useLocation } from '@redwoodjs/router'
import { createContext, useContext, useEffect, useState } from 'react'

const BreadcrumbsContext = createContext<
  [string | undefined, React.Dispatch<React.SetStateAction<string | undefined>>]
>(['', () => null])

export const useBreadcrumbs = (path?: string) => {
  const [_, setBreadcrumbs] = useContext(BreadcrumbsContext)
  useEffect(() => {
    setBreadcrumbs(path)
  }, [path, setBreadcrumbs])
}
export const useBreadcrumbsConfig = () => {
  const [breadcrumbs] = useContext(BreadcrumbsContext)
  const location = useLocation()
  const isCreationPage = location.pathname.endsWith('/new')
  return { breadcrumbs, isCreationPage }
}

export const BreadcrumbsProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const pathState = useState<string | undefined>()
  return (
    <BreadcrumbsContext.Provider value={pathState}>
      {children}
    </BreadcrumbsContext.Provider>
  )
}
