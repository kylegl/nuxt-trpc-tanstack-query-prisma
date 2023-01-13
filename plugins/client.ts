import { createTRPCNuxtClient, httpBatchLink } from 'trpc-nuxt/client'
import type { AppRouter } from '~~/server/trpc/routers/appRouter'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const url = `${config.public.baseUrl}/api/trpc`
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
