import { NavLink } from '@redwoodjs/router'
import { useRef } from 'react'
import { useMenu } from 'src/hooks/useMenu'
import { useOnClickOutside } from 'src/hooks/useOnOutsideClick'
import Button from 'src/components/Button/Button'
import NavElement from 'src/components/NavElement/NavElement'

interface SidebarItem {
  label: string
  link: string
  show: boolean
  className?: string
  disabled?: boolean
}

interface SidebarMenuProps {
  items: SidebarItem[]
  logo: string
  extra?: React.ReactNode
  children?: React.ReactNode
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  children,
  items,
  logo,
  extra,
}) => {
  const { isOpen, toggle } = useMenu()
  const ref = useRef(null)
  useOnClickOutside(ref, () => {
    if (isOpen) {
      toggle()
    }
  })
  return (
    <div className="flex">
      <nav
        className={`md:flex flex-col py-8 justify-between w-64 max-w-xs h-screen overflow-y-auto bg-black text-white border-r inset-0 z-[9999] absolute md:relative transition ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
        ref={ref}
      >
        <div className=" w-full">
          <div className="flex flex-col mx-auto items-center gap-4">
            {isOpen && (
              <Button
                type="LightGhost"
                size="Small"
                onClick={toggle}
                className="flex md:hidden"
              >
                <i className="material-symbols-outlined">chevron_left</i>
                <span>Cerrar menú</span>
              </Button>
            )}

            {extra}
          </div>
          <ul className="p-4 mt-20">
            {items
              .filter((item) => item.show)
              .map((item) => (
                <NavElement
                  label={item.label}
                  isDisabled={item.disabled}
                  link={item.link}
                  className={item.className}
                />
              ))}
          </ul>
        </div>
        <img src={logo} alt="YOBO Logo" className="w-2/3 self-center" />
      </nav>
      <main className="min-h-screen w-full h-screen bg-white px-2 md:px-16 md:pt-20 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}

export default SidebarMenu
