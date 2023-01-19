import { postRouter, userRouter } from '~~/server/trpc/router/routes'
import { router } from '~~/server/trpc/trpc'

export const appRouter = router({
  user: userRouter,
  post: postRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
