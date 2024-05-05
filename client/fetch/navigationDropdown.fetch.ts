export const navigationDropdownGetAll = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/dropdowns`, {
    method: 'GET',
    cache: 'no-store'
  })
  return response.json()
}