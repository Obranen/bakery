import { IUserSignInState, IUserState } from '@/interface/user.interface'

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