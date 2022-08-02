const url = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_ID}/image/upload`

type Eager = {
  transformation: string
  width: number
  height: number
  url: string
  secure_url: string
}

interface UploadPhotoResponse {
  asset_id: string
  public_id: string
  version: number
  version_id: string
  signature: string
  width: number
  height: number
  format: string
  resource_type: 'image'
  created_at: string
  tags: []
  pages: number
  bytes: number
  type: 'upload'
  etag: string
  placeholder: false
  url: string
  secure_url: string
  access_mode: 'public'
  original_filename: string
  eager: Eager[]
}

export const fileToUrl = (
  file: Blob,
  onEnd: (result: string | ArrayBuffer) => void,
  onStart?: () => void
) => {
  const reader = new FileReader()
  onStart?.()
  reader.onloadend = () => {
    if (reader.result) {
      onEnd(reader.result)
    }
  }
  reader.readAsDataURL(file)
}

export function uploadPhoto(file: string | Blob): Promise<UploadPhotoResponse> {
  return new Promise((resolve) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('api_key', '516217463117496')
    formData.append('timestamp', Date.now().toString())
    formData.append('upload_preset', 'test_catalogs')
    // formData.append("signature", signData.signature);
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        resolve(data)
      })
  })
}
