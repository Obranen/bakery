export const galleryGet = async () => {
  try {
    const url = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
    const cacheControl =
      process.env.NODE_ENV === 'production' ? 'default' : 'no-cache'
    const response = await fetch(`${url}/api/gallaries?populate=*`, {
      method: 'GET',
      cache: cacheControl,
    })
    return response.json()
  } catch (error) {
    console.log(error)
  }
}
