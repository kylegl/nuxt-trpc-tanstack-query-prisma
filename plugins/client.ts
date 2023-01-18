import { createTRPCNuxtClient, httpBatchLink } from 'trpc-nuxt/client'
import { transformer } from '~~/server/utils/trpc'
import type { AppRouter } from '~~/server/trpc/router/appRouter'

export default defineNuxtPlugin(() => {
  const url = '/api/trpc'
  const client = createTRPCNuxtClient<AppRouter>({
    transformer,
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
