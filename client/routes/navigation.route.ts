import { INavigationState } from '@/interface/navigation.interface'

export const navigationGet = async (): Promise<INavigationState> => {
  try {
    const url = process.env.NEXT_PUBLIC_STRAPI_URL
    const cacheControl =
      process.env.NODE_ENV === 'production' ? 'default' : 'no-cache'
    const response = await fetch(`${url}/api/navigations/?populate=*`, {
      method: 'GET',
      cache: cacheControl,
    })
    if (!response.ok) {
      throw new Error('Не удалось получить данные навигации')
    }
    return response.json() as Promise<INavigationState>
  } catch (error) {
    console.log(error)
    throw error
  }
}
