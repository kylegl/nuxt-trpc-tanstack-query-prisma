import { router } from '~~/server/trpc/trpc'
import { userRouter } from '~~/server/trpc/routers/userRouter'

export const appRouter = router({
  user: userRouter,
})
// export type definition of API
export type AppRouter = typeof appRouter
