import { INavigationState } from '@/interface/navigation.interface'

export const navigationGet = async (): Promise<INavigationState> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/navigations/?populate=*`,
      {
        method: 'GET',
        cache: 'no-store',
      }
    )
    if (!response.ok) {
      throw new Error('Не удалось получить данные навигации')
    }
    return response.json() as Promise<INavigationState>
  } catch (error) {
    console.log(error)
    throw error
  }
}
