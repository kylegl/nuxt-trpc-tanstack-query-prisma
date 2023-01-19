import { createTRPCNuxtClient, httpBatchLink } from 'trpc-nuxt/client'
import superjson from 'superjson'
import type { AppRouter } from '~~/server/trpc/router/appRouter'

export default defineNuxtPlugin(() => {
  const url = '/api/trpc'
  const client = createTRPCNuxtClient<AppRouter>({
    transformer: superjson,
    links: [
      httpBatchLink({
        url,
      }),
    ],
  })
  return {
    provide: {
      client,
    },
  }
})
