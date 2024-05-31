'use client'

import { IUserSignInState, IUserState, IUserUpdateState } from '@/interface/user.interface'
import { getCookie } from 'cookies-next'

export const userCreate = async (data: IUserState) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: data.userName,
          email: data.email,
          password: data.password,
        }),
      }
    )

    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export const userSignIn = async (data: IUserSignInState) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: data.identifier,
          password: data.password,
        }),
      }
    )

    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export const userUpdate = async (data: IUserUpdateState) => {
  const authToken = getCookie('jwt')
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users/${data.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          username: data.userName,
          email: data.email,
        }),
      }
    )

    return response.json()
  } catch (error) {
    console.log(error)
  }
}

export const userGet = async () => {
  const authToken = getCookie('jwt')
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