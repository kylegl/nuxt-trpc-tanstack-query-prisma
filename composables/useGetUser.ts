import type { TRPCClientError } from '@trpc/client'
import type { inferRouterOutputs } from '@trpc/server'
import type { AppRouter } from '~~/server/trpc/routers/appRouter'

type RouterOutput = inferRouterOutputs<AppRouter>
type GetHelloOutput = RouterOutput['user']['getUser']
type CreateUserOutput = RouterOutput['user']['add']
type ListUsersOutput = RouterOutput['user']['list']
type ErrorOutput = TRPCClientError<AppRouter>

export function useGetUser(username?: string) {
  const { $client } = useNuxtApp()
  return useAsyncData<GetHelloOutput, ErrorOutput>(() => $client.user.getUser.query({ username }))
}

export function useAddUser(username: string) {
  const { $client } = useNuxtApp()
  return useAsyncData<CreateUserOutput, ErrorOutput>(() => $client.user.add.mutate({ username }))
}

export function useListUsers() {
  const { $client } = useNuxtApp()

  return useAsyncData<ListUsersOutput, ErrorOutput>(() => $client.user.list.query())
}
