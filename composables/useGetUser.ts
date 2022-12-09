import type { TRPCClientError } from '@trpc/client'
import type { inferRouterOutputs } from '@trpc/server'
import type { AppRouter } from '~~/server/trpc/routers/appRouter'

type RouterOutput = inferRouterOutputs<AppRouter>
type GetHelloOutput = RouterOutput['user']['getUser']
type ErrorOutput = TRPCClientError<AppRouter>

export default function useGetUser(username?: string) {
  const { $client } = useNuxtApp()
  return useAsyncData<GetHelloOutput, ErrorOutput>(() => $client.user.getUser.query({ username }))
}
