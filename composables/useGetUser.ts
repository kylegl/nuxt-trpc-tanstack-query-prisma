import type { TRPCClientError } from '@trpc/client'
import type { inferRouterOutputs } from '@trpc/server'
import type { AppRouter } from '~~/server/trpc/routers/appRouter'

type RouterOutput = inferRouterOutputs<AppRouter>
type CreateUserOutput = RouterOutput['user']['add']
type ErrorOutput = TRPCClientError<AppRouter>

export function useGetUser(username?: string) {
  const { $client } = useNuxtApp()
  return $client.user.getUser.useQuery({ username })
}

export function useAddUser(username: string) {
  const { $client } = useNuxtApp()
  return useAsyncData<CreateUserOutput, ErrorOutput>(() => $client.user.add.mutate({ username }))
}

export function useListUsers() {
  const { $client } = useNuxtApp()

  return $client.user.list.useQuery()
}
