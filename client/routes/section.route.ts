import qs from 'qs'

export const sectionGet = async () => {
  const urlQS = qs.stringify({
    populate: {
      blocks: {
        populate: '*',
      },
    },
  })
  try {
    const url = process.env.NEXT_PUBLIC_STRAPI_URL
    const cacheControl =
      process.env.NODE_ENV === 'production' ? 'default' : 'no-cache'
    const response = await fetch(`${url}/api/home-page?${urlQS}`, {
      method: 'GET',
      cache: cacheControl,
    })
    return response.json()
  } catch (error) {
    console.log(error)
  }
}
