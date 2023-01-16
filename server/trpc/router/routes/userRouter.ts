import { z } from 'zod'
import { publicProcedure, router } from '~~/server/trpc/trpc'
import { prisma } from '~~/server/prisma/prisma'

const getUserInputShape = z.object({
  name: z.string().optional(),
})
export type GetUserInputShape = z.infer<typeof getUserInputShape>

export const createUserInputShape = z.object({ username: z.string() })
export type CreateUserInputShape = z.infer<typeof createUserInputShape>

export const deleteUserInputShape = z.string()
export type DeleteUserInputShape = z.infer<typeof deleteUserInputShape>

export const userRouter = router({
  getById: publicProcedure
    .input(getUserInputShape)
    .query(({ input }) => ({
      username: input?.name ?? 'anonymous',
      isUser: !!input?.name,
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
  delete: publicProcedure
    .input(deleteUserInputShape)
    .mutation(async ({ input }) => {
      const res = await prisma.user.delete({ where: { username: input } })

      return res
    }),
  deleteMany: publicProcedure
    .mutation(async () => {
      const res = await prisma.user.deleteMany()

      return res
    }),
})
