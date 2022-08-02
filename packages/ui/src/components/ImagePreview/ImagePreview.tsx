import { useFilePreview } from 'src/hooks/useFilePreview'

interface ImagePreviewProps {
  image: File | string
  alt: string
  className?: string
  placeholder?: React.ReactNode
}

const ImagePreview = ({
  image,
  alt,
  className,
  placeholder,
}: ImagePreviewProps) => {
  const { file } = useFilePreview(image)
  if (!file) {
    return placeholder ? <>{placeholder}</> : null
  }
  return <img src={file as string} alt={alt} className={className} />
}

export default ImagePreview
