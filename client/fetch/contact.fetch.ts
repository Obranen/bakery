import qs from 'qs'

export const contactGetServer = async () => {
  const url = qs.stringify({
    populate: {
      blocks: {
        populate: {
          fields: ['title', 'icon'],
          feature: true,
        },
      },
    },
  })
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home-page?${url}`,
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
