import { galleryGet } from '@/routes/gallery.fetch'
import ErrorPage from '../ui/ErrorPage'
import GalleryItem from './GalleryItem'

const Gallery = async () => {
  const gallery = await galleryGet()

  if (gallery.error) {
    return <ErrorPage message={'Не загружены фото'} />
  }

  return (
    <div>
      {gallery.data.map((item: any) => (
        <div key={item.id}>
          <h1>{item.attributes.title}</h1>
          {item.attributes.images.data.map((item: any) => (
            <GalleryItem key={item.id} item={item.attributes} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Gallery
