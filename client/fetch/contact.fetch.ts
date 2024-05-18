export const contactGetServer = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home-page?populate[blocks][fields][0]=title&populate[blocks][fields][1]=icon&populate[blocks][populate][feature][populate]=true`,
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
