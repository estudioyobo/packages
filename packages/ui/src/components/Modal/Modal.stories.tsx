import { ModalProvider, useModal} from './Modal'


export const WithPrompt = () => {
 const {setModal,closeModal}= useModal()
  return (
    <button onClick={()=>setModal({title: 'Asignar usuario ',
    message: 'Asigna un correo electronico a un usuario',
    prompt: true,
    buttons: [
      {
        text: 'Asignar',
        style: 'default',
        onPress(value) {
          alert(value)
        },
      },
      {
        text: 'Cancelar',
        style: 'cancel',
        onPress: () => closeModal(),
      },
    ],
  })}>Abrir con prompt</button>)
}
export const Basic = () => {
 const {setModal,closeModal}= useModal()
  return (
    <button onClick={()=>setModal({title: 'Asignar usuario ',
    message: 'Asigna un correo electronico a un usuario',
    buttons: [
      {
        text: 'Asignar',
        style: 'default',
        onPress(value) {
          alert(value)
        },
      },
      {
        text: 'Cancelar',
        style: 'cancel',
        onPress: () => closeModal(),
      },
    ],
  })}>Abrir sin propmt</button>)
}
export default { title: 'Components/Modal' 
,decorators: [
  (Story: any) => (
    <ModalProvider>
      <Story />
    </ModalProvider>
  ),
], }
