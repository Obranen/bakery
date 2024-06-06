'use server'

import { cookies } from 'next/headers'

export const userGetAuth = async () => {
  const authToken = cookies().get('jwt')?.value
  if (!authToken) return { ok: false, data: null, error: null }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users/me`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        cache: 'no-cache',
      }
    )
    const data = await response.json()
    if (data.error) return { ok: false, data: null, error: data.error }
    return { ok: true, data: data, error: null }
  } catch (error) {
    console.log(error)
    return { ok: false, data: null, error: error }
  }
}
