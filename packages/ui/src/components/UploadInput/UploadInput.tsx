import { useRef } from 'react'

interface UploadInputProps {
  value: string | File
  text: string | File
  name: string
  onChange: (file: File) => void
}

function UploadInput({ text, value, name, onChange }: UploadInputProps) {
  const ref = useRef<HTMLLabelElement>(null)
  return (
    <label
      htmlFor={name}
      ref={ref}
      onDragOver={() => {
        if (ref?.current) {
          ref.current.classList.add('border-primary-500')
        }
      }}
      onDragLeave={() => {
        if (ref?.current) {
          ref.current.classList.remove('border-primary-500')
        }
      }}
      onDrop={(ev) => {
        ev.preventDefault()
        if (ev.dataTransfer.items) {
          // Use DataTransferItemList interface to access the file(s)
          for (let i = 0; i < ev.dataTransfer.items.length; i++) {
            // If dropped items aren't files, reject them
            if (ev.dataTransfer.items[i].kind === 'file') {
              const file = ev.dataTransfer.items[i].getAsFile()
              if (file) {
                onChange(file)
              }
            }
          }
        } else {
          // Use DataTransfer interface to access the file(s)
          for (let i = 0; i < ev.dataTransfer.files.length; i++) {
            const file = ev.dataTransfer.files[i]
            onChange(file)
          }
        }
      }}
      className="relative overflow-hidden rounded-xl bg-gray-200 py-3 px-5 max-w-[184px] text-center flex flex-col items-center focus:bg-gray-300 hover:bg-gray-300 border-2"
    >
      <i className="material-symbols-outlined text-gray-600 text-2xl">
        cloud_upload
      </i>
      {typeof text === 'string' ? <span>{text}</span> : null}
      <input
        type="image/*"
        value={value as string}
        onChange={({ target: { validity, files } }) => {
          if (files) {
            const [file] = Array.from(files)
            validity.valid && onChange(file)
          }
        }}
        name={name}
        className="opacity-0 absolute cursor-pointer inset-0"
      />
    </label>
  )
}

export default UploadInput
