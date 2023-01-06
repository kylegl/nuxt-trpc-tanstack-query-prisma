import { createTRPCNuxtClient, httpBatchLink } from 'trpc-nuxt/client'
import type { AppRouter } from '~~/server/trpc/routers/appRouter'

export default defineNuxtPlugin(() => {
  const headers = useRequestHeaders()

  const client = createTRPCNuxtClient<AppRouter>({
    links: [
      httpBatchLink({
        /**
         * If you want to use SSR, you need to use the server's full URL
         * @link https://trpc.io/docs/ssr
         **/
        url: 'http://localhost:3000/api/trpc',
        headers() {
          // You can add more custom headers here
          return headers
        },
      }),
    ],
  })
  return {
    provide: {
      client,
    },
  }
})
