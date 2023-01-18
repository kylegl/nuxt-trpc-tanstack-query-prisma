import { createTRPCNuxtClient, httpBatchLink } from 'trpc-nuxt/client'
import type { AppRouter } from '~~/server/trpc/router/appRouter'

export default defineNuxtPlugin(() => {
  const url = '/api/trpc'
  const client = createTRPCNuxtClient<AppRouter>({
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
