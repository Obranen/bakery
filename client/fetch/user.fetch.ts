import { IUserState } from '@/interface/user.interface'

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