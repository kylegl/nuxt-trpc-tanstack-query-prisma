import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { prisma } from '~~/server/prisma/prisma'

const getUserInputShape = z.object({
  username: z.string().optional(),
})
export type GetUserInputShape = z.infer<typeof getUserInputShape>

export const createUserInputShape = z.object({ username: z.string() })
export type CreateUserInputShape = z.infer<typeof createUserInputShape>

export const userRouter = router({
  getUser: publicProcedure
    .input(getUserInputShape)
    .query(({ input }) => ({
      username: input?.username ?? 'anonymous',
      isUser: !!input?.username,
    })),
  add: publicProcedure
    .input(createUserInputShape)
    .mutation(async ({ input }) => {
      const user = await prisma.user.create({
        data: input,
      })

      return user
    }),
  list: publicProcedure
    .query(async () => {
      const users = await prisma.user.findMany()
      return users
    }),
})
