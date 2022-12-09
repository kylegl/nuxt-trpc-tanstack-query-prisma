import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

const UserShape = z.object({
  username: z.string(),
  isUser: z.boolean(),
})

const getUserInputShape = z.object({
  username: z.string().optional(),
})

export type GetUserInputShape = z.infer<typeof getUserInputShape>

export type User = z.infer<typeof UserShape>

export const userRouter = router({
  getUser: publicProcedure
    .input(getUserInputShape)
    .query(({ input }) => ({
      username: input?.username ?? 'anonymous',
      isUser: !!input?.username,
    })),
})
