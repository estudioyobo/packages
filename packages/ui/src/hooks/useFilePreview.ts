import { useEffect, useState } from 'react'

import { fileToUrl } from 'src/lib/file'

type FilePreview = {
  loading: boolean
  file: string | ArrayBuffer | null
}

export function useFilePreview(file: Blob | string) {
  const [filePreview, setFilePreview] = useState<FilePreview>({
    loading: false,
    file: null,
  })

  useEffect(() => {
    if (typeof file === 'string') {
      setFilePreview({ loading: false, file })
    } else if (file) {
      fileToUrl(
        file,
        (result) => {
          setFilePreview({
            loading: false,
            file: result,
          })
        },
        () => {
          setFilePreview({
            ...filePreview,
            loading: true,
          })
        }
      )
    }
  }, [file])

  return filePreview
}
