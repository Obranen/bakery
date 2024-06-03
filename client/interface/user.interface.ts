export interface IUserState {
  userName: string
  email: string
  password: string
}

export interface IUserSignInState {
  identifier: string
  password: string
}

export interface IUserUpdateState {
  id?: string
  userName: string
  email: string
  image?: any
}
