import { useState } from 'react'
import UploadInput from './UploadInput'

export const generated = () => {
  const [state, setState] = useState<string | File>('')
  return (
    <UploadInput
      value={state}
      text="Aqui tu texto"
      name=""
      onChange={setState}
    />
  )
}

export default { title: 'Components/UploadInput' }
