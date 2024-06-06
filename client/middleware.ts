import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { userGetAuth } from './library/userGetAuth.library'

export async function middleware(request: NextRequest) {
  const user = await userGetAuth()
  const currentPath = request.nextUrl.pathname

  if (currentPath.startsWith('/dashboard') && user.ok === false) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }

  return NextResponse.next()
}
