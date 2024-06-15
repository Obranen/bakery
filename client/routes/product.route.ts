export const productGet = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate=*`,
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

export const productGetId = async (page: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate=*&pagination[page]=${page}&pagination[pageSize]=1`,
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
