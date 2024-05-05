export const navigationGetAll = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/navigations`, {
    method: 'GET',
    cache: 'no-store'
  })
  return response.json()
}