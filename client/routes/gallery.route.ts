export const galleryGet = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/gallaries?populate=*`,
      {
        method: 'GET',
        cache: 'no-store',
      }
    )
    return response.json()
  } catch (error) {
    console.log(error)
  }
}