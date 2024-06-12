import Gallery from '@/components/gallery/Gallery'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product',
  description: 'Product page',
}

const GalleryPage = async () => {

  return (
      <Gallery />
  )
}

export default GalleryPage
