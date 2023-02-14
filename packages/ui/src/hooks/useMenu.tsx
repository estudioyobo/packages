import {
  useEffect,
  useContext,
  useState,
  useCallback,
  createContext,
} from 'react'

import { useLocation } from '@redwoodjs/router'

const MenuContext = createContext<{
  isOpen: boolean
  toggle: () => void
}>({ isOpen: false, toggle: () => null })

export const useMenu = () => useContext(MenuContext)

export const MenuProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const a = useLocation()
  const toggle = useCallback(() => setIsOpen((value) => !value), [setIsOpen])
  useEffect(() => {
    setIsOpen(false)
  }, [a.pathname])
  return (
    <MenuContext.Provider value={{ isOpen, toggle }}>
      {children}
    </MenuContext.Provider>
  )
}
