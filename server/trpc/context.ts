import type { H3Event } from 'h3'
import type { inferAsyncReturnType } from '@trpc/server'
import { prisma } from '~~/server/prisma/prisma'

export async function createContext(event: H3Event) {
  // Create your context based on the request object
  // Will be available as `ctx` in all your resolvers
  // This is just an example of something you might want to do in your ctx fn
  // const authorization = getRequestHeader(event, 'authorization')

  // async function getUserFromHeader() {
  //   if (authorization) {
  //     const user = await decodeAndVerifyJwtToken(authorization.split(' ')[1])
  //     return user
  //   }
  //   return null
  // }

  const username = getRequestHeader(event, 'username')

  async function getUserFromHeader() {
    return { name: username ?? 'anonymous' }
  }

  const user = await getUserFromHeader()
  return {
    user,
    prisma,
  }
}
export type Context = inferAsyncReturnType<typeof createContext>
