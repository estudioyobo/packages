import React, { createContext, useCallback, useContext, useState } from 'react'

import { Button } from 'src/components'
import type { ButtonProps } from 'src/components/Button/Button'

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
}

interface HeaderProps {
  title: string
}



interface InputProps{
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  }


interface BodyProps {
  message: string
  prompt?: boolean
}

interface AlertButton {
  text?: string
  style?: 'default' | 'cancel' | 'destructive' | undefined
  onPress?: ((value?: string) => void) | undefined
}

interface FooterProps {
  buttons: AlertButton[]
  value?: string
}

type IModal = HeaderProps & BodyProps & Partial<FooterProps>

type IModelContext = {
  setModal: (modal: IModal) => void
  closeModal: () => void
}

const Modal: React.FC<ModalProps> = ({ children, isOpen }) => {
  if (!isOpen) {
    return null
  }
  return (
    <div className="fixed top-0 z-10 grid h-screen w-screen bg-black/20">
      <div className="w-96 self-center justify-self-center rounded-lg bg-white">
        {children}
      </div>
    </div>
  )
}

export const ModalHeader: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="p-4 pb-2">
      <h1>{title}</h1>
      <hr />
    </header>
  )
}

export const ModalBody: React.FC<BodyProps> = ({ message }) => {
  return <main className="p-4">{message}</main>
}

export const ModalFooter: React.FC<FooterProps> = ({ buttons, value }) => {
  function getType(type: AlertButton['style']): ButtonProps['type'] {
    switch (type) {
      case 'default':
        return 'Base'
      case 'cancel':
        return 'Ghost'
      case 'destructive':
        return 'Warning'
      default:
        return 'Base'
    }
  }
  return (
    <footer className="p-4 pt-2">
      <hr />
      <div className="flex justify-end gap-2 pt-2">
        {buttons.map((button, i) => (
          <Button
            key={i}
            onClick={() => button.onPress?.(value)}
            type={getType(button.style)}
          >
            {button.text}
          </Button>
        ))}
      </div>
    </footer>
  )
}
export const ModalInput: React.FC<InputProps> = ({ setValue,value }) => {
  return (
    <div className='flex justify-center'>
      <input className='border-b rounded-lg p-2 bg-blue-50' value={value} onChange={(e)=>setValue(e.target.value)}></input>
    </div>
  )
}

const ModalContext = createContext<IModelContext | null>(null)

export const useModal = () => {
  const ctx = useContext(ModalContext)
  if (!ctx) {
    throw new Error('useModal must be called inside ModalProvider')
  }
  return ctx
}

export const ModalProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [modal, setModal] = useState<IModal | null>(null)
  const closeModal = useCallback(() => setModal(null), [setModal])
  const [prompt, setPrompt] = useState<string>('')
  return (
    <ModalContext.Provider value={{ setModal, closeModal }}>
      {children}
      <Modal isOpen={!!modal}>
        <ModalHeader title={modal?.title ?? ''} />
        <ModalBody message={modal?.message ?? ''} />
        {modal?.prompt && <ModalInput value={prompt} setValue={setPrompt} />}
        {modal?.buttons && <ModalFooter buttons={modal.buttons} value={prompt}></ModalFooter>}
      </Modal>
    </ModalContext.Provider>
  )
}

export default Modal
